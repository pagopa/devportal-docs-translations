/// <reference types="node" />

import * as fs from 'fs';
import * as path from 'path';

import {
  DOCS_DIRECTORY,
  discoverLocalizedStructures,
  getRequestedDocsStaticDirectory,
  matchesRequestedSourcePath,
  normalizeRequestedDocsPath,
  normalizeSourceDocsRoot,
  resolveTranslatedDirectoryRelativePath,
  type LocalizedStructure,
  type NormalizedRequestedDocsPath,
  type TranslatedStructureEntry,
  collectTranslatedStructureEntries
} from './translationStructure';
import { fail, readRequestedPaths, writeTextFile } from './getTranslationsWorkflowIo';

const DEFAULT_MANIFEST_PATH = 'gitbook-assets-manifest.json';
const DEFAULT_SPARSE_PATHS_FILE = '.gitbook-asset-sparse-checkout.txt';

export interface GitBookAssetEntry {
  sourceDirectoryPath: string;
  translatedDirectoryPath: string;
  sourceGitBookPath: string;
  translatedGitBookPath: string;
}

export interface GitBookAssetLocaleManifest {
  locale: string;
  entries: GitBookAssetEntry[];
}

export interface GitBookAssetManifest {
  requestedPaths: string[];
  sourceDocsRoot: string;
  sparseCheckoutPaths: string[];
  locales: GitBookAssetLocaleManifest[];
}

export interface BuildGitBookAssetManifestOptions {
  docsRoot: string;
  requestedPaths: string[];
  sourceDocsRoot?: string;
}

export function buildGitBookAssetManifest({
  docsRoot,
  requestedPaths,
  sourceDocsRoot = DOCS_DIRECTORY
}: BuildGitBookAssetManifestOptions): GitBookAssetManifest {
  const normalizedRequestedPaths = requestedPaths.map(normalizeRequestedDocsPath);
  const normalizedSourceDocsRoot = normalizeSourceDocsRoot(sourceDocsRoot);
  const localizedStructures = discoverLocalizedStructures(docsRoot);

  const locales = localizedStructures
    .map((structure) => {
      const entries = buildLocaleAssetEntries(
        docsRoot,
        structure,
        normalizedRequestedPaths,
        normalizedSourceDocsRoot
      );

      if (entries.length === 0) {
        return null;
      }

      return {
        locale: structure.locale,
        entries
      } satisfies GitBookAssetLocaleManifest;
    })
    .filter((locale): locale is GitBookAssetLocaleManifest => locale !== null);

  const sparseCheckoutPaths = [...new Set(locales.flatMap((locale) => locale.entries.map((entry) => entry.sourceGitBookPath)))].sort();

  return {
    requestedPaths: normalizedRequestedPaths.map((requestedPath) => requestedPath.normalizedPath),
    sourceDocsRoot: normalizedSourceDocsRoot,
    sparseCheckoutPaths,
    locales
  };
}

function buildLocaleAssetEntries(
  docsRoot: string,
  structure: LocalizedStructure,
  requestedPaths: NormalizedRequestedDocsPath[],
  sourceDocsRoot: string
): GitBookAssetEntry[] {
  const existingMarkdownEntries = collectExistingTranslatedMarkdownEntries(docsRoot, structure);
  const existingSourceFiles = new Set(existingMarkdownEntries.map((entry) => entry.sourcePath));
  const sourceDirectories = new Set<string>();

  requestedPaths.forEach((requestedPath) => {
    if (requestedPath.kind === 'markdown-file') {
      if (!existingSourceFiles.has(requestedPath.normalizedPath)) {
        return;
      }

      sourceDirectories.add(path.posix.dirname(requestedPath.normalizedPath));
      return;
    }

    const rootDirectory = getRequestedDocsStaticDirectory(requestedPath);

    existingMarkdownEntries.forEach((entry) => {
      if (!matchesRequestedSourcePath(entry.sourcePath, requestedPath)) {
        return;
      }

      const sourceDirectory = path.posix.dirname(entry.sourcePath);

      collectAncestorDirectories(sourceDirectory, rootDirectory).forEach((directoryPath) => {
        sourceDirectories.add(directoryPath);
      });
    });
  });

  return [...sourceDirectories]
    .sort()
    .map((sourceDirectoryPath) =>
      toGitBookAssetEntry(sourceDirectoryPath, structure.locale, structure.rootNode, sourceDocsRoot)
    );
}

function collectExistingTranslatedMarkdownEntries(
  docsRoot: string,
  structure: LocalizedStructure
): TranslatedStructureEntry[] {
  return collectTranslatedStructureEntries(structure.rootNode).filter((entry) => {
    if (entry.directory || path.posix.extname(entry.sourceRelativePath).toLowerCase() !== '.md') {
      return false;
    }

    const translatedFilePath = path.join(docsRoot, structure.locale, entry.targetRelativePath);

    return fs.existsSync(translatedFilePath) && fs.statSync(translatedFilePath).isFile();
  });
}

function toGitBookAssetEntry(
  sourceDirectoryPath: string,
  locale: string,
  rootNode: LocalizedStructure['rootNode'],
  sourceDocsRoot: string
): GitBookAssetEntry {
  const translatedDirectoryRelativePath =
    sourceDirectoryPath === DOCS_DIRECTORY
      ? ''
      : resolveTranslatedDirectoryRelativePath(rootNode, sourceDirectoryPath);

  const translatedDirectoryPath = translatedDirectoryRelativePath.length > 0
    ? path.posix.join(DOCS_DIRECTORY, locale, translatedDirectoryRelativePath)
    : path.posix.join(DOCS_DIRECTORY, locale);
  const sourceDirectoryRelativePath = path.posix.relative(DOCS_DIRECTORY, sourceDirectoryPath);
  const sourceRepoDirectoryPath = sourceDirectoryRelativePath.length > 0
    ? path.posix.join(sourceDocsRoot, sourceDirectoryRelativePath)
    : sourceDocsRoot;

  return {
    sourceDirectoryPath,
    translatedDirectoryPath,
    sourceGitBookPath: path.posix.join(sourceRepoDirectoryPath, '.gitbook'),
    translatedGitBookPath: path.posix.join(translatedDirectoryPath, '.gitbook')
  };
}

function collectAncestorDirectories(sourceDirectory: string, rootDirectory: string): string[] {
  const relativePath = path.posix.relative(rootDirectory, sourceDirectory);

  if (relativePath === '') {
    return [rootDirectory];
  }

  if (relativePath === '..' || relativePath.startsWith('../')) {
    return [];
  }

  const directories = [rootDirectory];
  let currentDirectory = rootDirectory;

  relativePath.split('/').filter(Boolean).forEach((segment) => {
    currentDirectory = path.posix.join(currentDirectory, segment);
    directories.push(currentDirectory);
  });

  return directories;
}

export function main() {
  const docsRoot = path.resolve(process.env.DOCS_ROOT ?? DOCS_DIRECTORY);
  const manifestPath = path.resolve(process.env.GITBOOK_ASSET_MANIFEST_PATH ?? DEFAULT_MANIFEST_PATH);
  const sparsePathsFile = path.resolve(
    process.env.GITBOOK_ASSET_SPARSE_PATHS_FILE ?? DEFAULT_SPARSE_PATHS_FILE
  );
  const githubOutputPath = process.env.GITHUB_OUTPUT;

  try {
    const manifest = buildGitBookAssetManifest({
      docsRoot,
      requestedPaths: readRequestedPaths(),
      sourceDocsRoot: process.env.SOURCE_DOCS_ROOT ?? DOCS_DIRECTORY
    });
    const manifestContent = `${JSON.stringify(manifest, null, 2)}\n`;
    const sparsePathsContent = manifest.sparseCheckoutPaths.join('\n');

    writeTextFile(manifestPath, manifestContent);
    writeTextFile(
      sparsePathsFile,
      sparsePathsContent.length > 0 ? `${sparsePathsContent}\n` : ''
    );

    if (githubOutputPath) {
      const outputs = [
        `has_assets=${manifest.sparseCheckoutPaths.length > 0 ? 'true' : 'false'}`,
        `manifest_path=${manifestPath}`,
        `sparse_checkout_file=${sparsePathsFile}`
      ].join('\n');

      fs.appendFileSync(githubOutputPath, `${outputs}\n`);
    }

    console.log(
      `🖼️ Computed ${manifest.sparseCheckoutPaths.length} GitBook asset root(s) across ${manifest.locales.length} locale(s).`
    );
  } catch (error) {
    fail('❌ Unable to build the GitBook asset manifest.', error);
  }
}

if (require.main === module) {
  main();
}