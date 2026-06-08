/// <reference types="node" />

import * as fs from 'fs';
import * as path from 'path';

import {
  DOCS_DIRECTORY,
  SOURCE_STRUCTURE_FILE_NAME,
  assertUniqueTranslatedTargets,
  collectTranslatedStructureEntries,
  discoverLocalizedStructures,
  normalizeRequestedDocsPath,
  normalizeSourceDocsFilePath,
  type StructureNode,
  type TranslatedStructureEntry
} from './translationStructure';

const CONTENT_REF_BLOCK_PATTERN = /\{%\s*content-ref\s+url=(["'])(.*?)\1\s*%\}[\s\S]*?\{%\s*endcontent-ref\s*%\}/g;

type WarningReporter = (message: string) => void;

export interface ContentRefTranslationResult {
  scannedFiles: number;
  updatedFiles: number;
  updatedBlocks: number;
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
  updatedBlocks: number;
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
  let updatedBlocks = 0;
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

    if (rewriteResult.updatedBlocks === 0) {
      return;
    }

    fs.writeFileSync(translatedFilePath, rewriteResult.content, 'utf8');
    updatedFiles += 1;
    updatedBlocks += rewriteResult.updatedBlocks;
  });

  return {
    scannedFiles,
    updatedFiles,
    updatedBlocks,
    warnings
  };
}

export function rewriteContentRefsInDocument(
  content: string,
  context: RewriteContext
): RewriteResult {
  let updatedBlocks = 0;

  const rewrittenContent = content.replace(
    CONTENT_REF_BLOCK_PATTERN,
    (block: string, quote: string, rawUrl: string) => {
      const translatedUrl = resolveTranslatedContentRefUrl(rawUrl, context);

      if (!translatedUrl) {
        return block;
      }

      updatedBlocks += 1;

      return rewriteContentRefBlock(block, quote, rawUrl, translatedUrl);
    }
  );

  return {
    content: rewrittenContent,
    updatedBlocks
  };
}

function getMarkdownEntries(rootNode: StructureNode): TranslatedStructureEntry[] {
  return collectTranslatedStructureEntries(rootNode).filter(
    (entry) =>
      !entry.directory && path.posix.extname(entry.sourceRelativePath).toLowerCase() === '.md'
  );
}

function resolveTranslatedContentRefUrl(
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
      `⚠️ [${context.locale}] ${context.currentFileSourcePath}: unable to translate content-ref "${rawUrl}": ${getErrorMessage(error)}`
    );

    return null;
  }
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
  const localizedStructures = discoverLocalizedStructures(docsRoot);

  if (localizedStructures.length === 0) {
    console.error(
      `❌ No ${SOURCE_STRUCTURE_FILE_NAME} file found in ${DOCS_DIRECTORY}/*/_meta.`
    );
    process.exit(1);
  }

  localizedStructures.forEach((structure) => {
    console.log(`🔗 Processing content refs for locale ${structure.locale}`);

    const result = translateContentRefsInLocale(docsRoot, structure.locale, structure.rootNode);

    console.log(
      `✅ Updated ${result.updatedBlocks} content-ref block(s) across ${result.updatedFiles} file(s) for locale ${structure.locale}.`
    );
  });
}

if (require.main === module) {
  main();
}