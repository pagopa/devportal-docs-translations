/// <reference types="node" />

import * as fs from 'fs';
import * as path from 'path';

import {
  DOCS_DIRECTORY,
  assertUniqueTranslatedTargets,
  collectTranslatedStructureEntries,
  normalizeRequestedDocsPath,
  normalizeSourceDocsFilePath,
  type StructureNode,
  type TranslatedStructureEntry
} from './translationStructure';
import { discoverLocalizedStructuresOrFail } from './getTranslationsWorkflowIo';

// Matches either a GitBook {% content-ref %} block or a standard markdown link
// (including image embeds). Content-ref blocks are listed first so the whole
// block is consumed as a single match, preventing the link inside it from being
// matched a second time by the markdown-link alternative.
const CONTENT_REF_OR_LINK_PATTERN =
  /\{%\s*content-ref\s+url=(["'])(.*?)\1\s*%\}[\s\S]*?\{%\s*endcontent-ref\s*%\}|(!?)\[([^\]]*)\]\(([^)]+)\)/g;

type WarningReporter = (message: string) => void;

export interface ContentRefTranslationResult {
  scannedFiles: number;
  updatedFiles: number;
  updatedLinks: number;
  warnings: number;
}

interface RewriteContext {
  locale: string;
  localeRoot: string;
  currentFileSourcePath: string;
  currentFileTranslatedPath: string;
  sourceToTarget: ReadonlyMap<string, string>;
  warn: WarningReporter;
}

interface RewriteResult {
  content: string;
  updatedLinks: number;
}

export function translateContentRefsInLocale(
  docsRoot: string,
  localeDirectoryName: string,
  rootNode: StructureNode,
  warn: WarningReporter = (message) => console.warn(message)
): ContentRefTranslationResult {
  const localeRoot = path.join(docsRoot, localeDirectoryName);
  const markdownEntries = getMarkdownEntries(rootNode);

  assertUniqueTranslatedTargets(localeDirectoryName, markdownEntries);

  const sourceToTarget = new Map(
    markdownEntries.map((entry) => [entry.sourcePath, entry.targetRelativePath])
  );

  let scannedFiles = 0;
  let updatedFiles = 0;
  let updatedLinks = 0;
  let warnings = 0;

  markdownEntries.forEach((entry) => {
    const translatedFilePath = path.join(localeRoot, entry.targetRelativePath);

    if (!fs.existsSync(translatedFilePath) || !fs.statSync(translatedFilePath).isFile()) {
      return;
    }

    scannedFiles += 1;

    const originalContent = fs.readFileSync(translatedFilePath, 'utf8');
    const rewriteResult = rewriteContentRefsInDocument(originalContent, {
      locale: localeDirectoryName,
      localeRoot,
      currentFileSourcePath: entry.sourcePath,
      currentFileTranslatedPath: entry.targetRelativePath,
      sourceToTarget,
      warn: (message) => {
        warnings += 1;
        warn(message);
      }
    });

    if (rewriteResult.updatedLinks === 0) {
      return;
    }

    fs.writeFileSync(translatedFilePath, rewriteResult.content, 'utf8');
    updatedFiles += 1;
    updatedLinks += rewriteResult.updatedLinks;
  });

  return {
    scannedFiles,
    updatedFiles,
    updatedLinks,
    warnings
  };
}

export function rewriteContentRefsInDocument(
  content: string,
  context: RewriteContext
): RewriteResult {
  let updatedLinks = 0;

  const rewrittenContent = content.replace(
    CONTENT_REF_OR_LINK_PATTERN,
    (
      match: string,
      contentRefQuote: string | undefined,
      contentRefUrl: string | undefined,
      imageFlag: string | undefined,
      linkText: string | undefined,
      linkTarget: string | undefined
    ) => {
      if (contentRefQuote !== undefined && contentRefUrl !== undefined) {
        const translatedUrl = resolveTranslatedTargetUrl(contentRefUrl, context);

        if (!translatedUrl) {
          return match;
        }

        updatedLinks += 1;

        return rewriteContentRefBlock(match, contentRefQuote, contentRefUrl, translatedUrl);
      }

      if (linkTarget === undefined) {
        return match;
      }

      // Leave image embeds and links that do not point to localized markdown
      // files (external URLs, anchors, assets, ...) untouched.
      if (imageFlag === '!' || !isTranslatableLinkTarget(linkTarget)) {
        return match;
      }

      const translatedUrl = resolveTranslatedTargetUrl(linkTarget, context);

      if (!translatedUrl) {
        return match;
      }

      updatedLinks += 1;

      return `[${linkText ?? ''}](${translatedUrl})`;
    }
  );

  return {
    content: rewrittenContent,
    updatedLinks
  };
}

function getMarkdownEntries(rootNode: StructureNode): TranslatedStructureEntry[] {
  return collectTranslatedStructureEntries(rootNode).filter(
    (entry) =>
      !entry.directory && path.posix.extname(entry.sourceRelativePath).toLowerCase() === '.md'
  );
}

function resolveTranslatedTargetUrl(
  rawUrl: string,
  context: RewriteContext
): string | null {
  try {
    const { pathPart, suffix } = splitUrlSuffix(rawUrl);
    const targetSourcePath = resolveContentRefSourcePath(
      context.currentFileSourcePath,
      pathPart
    );
    const targetRelativePath = context.sourceToTarget.get(targetSourcePath);

    if (!targetRelativePath) {
      throw new Error(`The file ${targetSourcePath} does not exist in docs-structure.`);
    }

    const targetAbsolutePath = path.join(context.localeRoot, targetRelativePath);

    if (!fs.existsSync(targetAbsolutePath) || !fs.statSync(targetAbsolutePath).isFile()) {
      throw new Error(
        `The translated file ${path.posix.join(DOCS_DIRECTORY, context.locale, targetRelativePath)} was not downloaded.`
      );
    }

    const translatedBasePath =
      path.posix.relative(path.posix.dirname(context.currentFileTranslatedPath), targetRelativePath) ||
      path.posix.basename(targetRelativePath);

    return `${translatedBasePath}${suffix}`;
  } catch (error) {
    context.warn(
      `⚠️ [${context.locale}] ${context.currentFileSourcePath}: unable to translate link "${rawUrl}": ${getErrorMessage(error)}`
    );

    return null;
  }
}

/**
 * Determines whether a markdown link target should be rewritten to its
 * localized counterpart. Only links that point to markdown files within the
 * docs tree are translated; external URLs, anchors and asset links are skipped.
 */
function isTranslatableLinkTarget(rawUrl: string): boolean {
  const trimmedUrl = rawUrl.trim();

  if (trimmedUrl.length === 0 || trimmedUrl.startsWith('#') || trimmedUrl.startsWith('//')) {
    return false;
  }

  // Skip absolute URLs with a scheme such as http:, https:, mailto: or tel:.
  if (/^[a-z][a-z0-9+.-]*:/i.test(trimmedUrl)) {
    return false;
  }

  const { pathPart } = splitUrlSuffix(trimmedUrl);

  return path.posix.extname(pathPart).toLowerCase() === '.md';
}

export function resolveContentRefSourcePath(
  currentSourcePath: string,
  rawPath: string
): string {
  const trimmedPath = rawPath.trim();

  if (trimmedPath.length === 0) {
    throw new Error('The content-ref URL is empty.');
  }

  const normalizedPath = trimmedPath.replace(/\\/g, '/');

  if (normalizedPath.startsWith('/') && !normalizedPath.startsWith('//')) {
    const requestedPath = normalizeRequestedDocsPath(normalizedPath);

    if (requestedPath.kind !== 'markdown-file') {
      throw new Error(`The path ${rawPath} does not point to a markdown file under ${DOCS_DIRECTORY}/.`);
    }

    return normalizeSourceDocsFilePath(requestedPath.normalizedPath).normalizedPath;
  }

  if (path.posix.isAbsolute(normalizedPath)) {
    throw new Error(
      `The path ${rawPath} must be relative to the current markdown file or docs root.`
    );
  }

  const currentSourceFile = normalizeSourceDocsFilePath(currentSourcePath);
  const resolvedPath = path.posix.normalize(
    path.posix.join(DOCS_DIRECTORY, path.posix.dirname(currentSourceFile.relativePath), normalizedPath)
  );

  return normalizeSourceDocsFilePath(resolvedPath).normalizedPath;
}

function splitUrlSuffix(rawUrl: string): { pathPart: string; suffix: string } {
  const suffixIndex = rawUrl.search(/[?#]/);

  if (suffixIndex === -1) {
    return {
      pathPart: rawUrl,
      suffix: ''
    };
  }

  return {
    pathPart: rawUrl.slice(0, suffixIndex),
    suffix: rawUrl.slice(suffixIndex)
  };
}

function rewriteContentRefBlock(
  block: string,
  quote: string,
  rawUrl: string,
  translatedUrl: string
): string {
  const updatedBlock = block.replace(
    `url=${quote}${rawUrl}${quote}`,
    `url=${quote}${translatedUrl}${quote}`
  );

  return updatedBlock.replace(/\[[^\]]*\]\(([^)]+)\)/g, (match: string, linkTarget: string) => {
    if (linkTarget !== rawUrl) {
      return match;
    }

    return match.replace(`(${rawUrl})`, `(${translatedUrl})`);
  });
}

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }

  return String(error);
}

export function main() {
  const docsRoot = path.resolve(DOCS_DIRECTORY);
  const localizedStructures = discoverLocalizedStructuresOrFail(docsRoot);

  localizedStructures.forEach((structure) => {
    console.log(`🔗 Processing content refs for locale ${structure.locale}`);

    const result = translateContentRefsInLocale(docsRoot, structure.locale, structure.rootNode);

    console.log(
      `✅ Updated ${result.updatedLinks} link(s) across ${result.updatedFiles} file(s) for locale ${structure.locale}.`
    );
  });
}

if (require.main === module) {
  main();
}