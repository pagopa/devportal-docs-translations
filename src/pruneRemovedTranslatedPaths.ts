/// <reference types="node" />

import { execFileSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

import {
  DOCS_DIRECTORY,
  METADATA_DIRECTORY,
  SOURCE_STRUCTURE_FILE_NAME,
  collectPrunableStructureEntries,
  getStructureRootNode,
  type StructureDocument,
  type StructureNode,
  type TranslatedStructureEntry
} from './translationStructure';
import { discoverLocalizedStructuresOrFail } from './getTranslationsWorkflowIo';

interface ExecFileSyncFailure extends Error {
  status?: number | null;
  stderr?: string | Buffer;
}

export interface PruneSummary {
  directoriesRemoved: number;
  filesRemoved: number;
  skippedEntries: number;
}

export function main() {
  const docsRoot = path.resolve(DOCS_DIRECTORY);
  const localizedStructures = discoverLocalizedStructuresOrFail(docsRoot);

  localizedStructures.forEach((structure) => {
    processLocaleDirectory(docsRoot, structure.locale, structure.rootNode);
  });
}

function processLocaleDirectory(
  docsRoot: string,
  localeDirectoryName: string,
  currentRootNode: StructureNode
) {
  const previousRootNode = loadCommittedLocalizedRootNode(localeDirectoryName);

  if (!previousRootNode) {
    console.log(
      `⏭️ Skip locale ${localeDirectoryName}: no committed localized structure found in HEAD.`
    );
    return;
  }

  const prunableEntries = collectPrunableStructureEntries(previousRootNode, currentRootNode);

  if (prunableEntries.length === 0) {
    console.log(`✅ Locale ${localeDirectoryName}: no stale translated paths to remove.`);
    return;
  }

  console.log(`🌍 Pruning locale ${localeDirectoryName}`);
  const summary = pruneLocaleEntries(path.join(docsRoot, localeDirectoryName), prunableEntries);

  console.log(
    `✅ Locale ${localeDirectoryName}: removed ${summary.directoriesRemoved} directories, ${summary.filesRemoved} files, skipped ${summary.skippedEntries}.`
  );
}

export function loadCommittedLocalizedRootNode(
  localeDirectoryName: string,
  ref = 'HEAD'
): StructureNode | null {
  const structureGitPath = path.posix.join(
    DOCS_DIRECTORY,
    localeDirectoryName,
    METADATA_DIRECTORY,
    SOURCE_STRUCTURE_FILE_NAME
  );

  try {
    const content = execFileSync('git', ['show', `${ref}:${structureGitPath}`], {
      encoding: 'utf8'
    });

    return parseStructureRootNode(content, `${ref}:${structureGitPath}`);
  } catch (error) {
    if (isMissingGitPathError(error, structureGitPath, ref)) {
      return null;
    }

    throw new Error(
      `Unable to load committed structure for locale ${localeDirectoryName} from ${ref}:${structureGitPath}: ${String(error)}`
    );
  }
}

function parseStructureRootNode(content: string, structurePath: string): StructureNode {
  return getStructureRootNode(JSON.parse(content) as StructureDocument, structurePath);
}

export function pruneLocaleEntries(
  localeRoot: string,
  entries: TranslatedStructureEntry[]
): PruneSummary {
  const directoryEntries = entries
    .filter((entry) => entry.directory)
    .sort((left, right) => left.depth - right.depth);
  const fileEntries = entries
    .filter((entry) => !entry.directory)
    .sort((left, right) => right.depth - left.depth);
  const removedDirectoryTargets = new Set<string>();
  const summary: PruneSummary = {
    directoriesRemoved: 0,
    filesRemoved: 0,
    skippedEntries: 0
  };

  directoryEntries.forEach((entry) => {
    if (hasRemovedAncestor(entry.targetRelativePath, removedDirectoryTargets)) {
      return;
    }

    const entryPath = resolveLocaleEntryPath(localeRoot, entry.targetRelativePath);

    if (!fs.existsSync(entryPath)) {
      console.log(`⏭️ Skip directory: ${entry.targetRelativePath} not found.`);
      removedDirectoryTargets.add(entry.targetRelativePath);
      summary.skippedEntries += 1;
      return;
    }

    fs.rmSync(entryPath, { recursive: true, force: true });
    removedDirectoryTargets.add(entry.targetRelativePath);
    removeEmptyParentDirectories(path.dirname(entryPath), localeRoot);
    summary.directoriesRemoved += 1;

    console.log(`🧹 Removed directory: ${entry.targetRelativePath}`);
  });

  fileEntries.forEach((entry) => {
    if (hasRemovedAncestor(entry.targetRelativePath, removedDirectoryTargets)) {
      return;
    }

    const entryPath = resolveLocaleEntryPath(localeRoot, entry.targetRelativePath);

    if (!fs.existsSync(entryPath)) {
      console.log(`⏭️ Skip file: ${entry.targetRelativePath} not found.`);
      summary.skippedEntries += 1;
      return;
    }

    fs.rmSync(entryPath, { force: true });
    removeEmptyParentDirectories(path.dirname(entryPath), localeRoot);
    summary.filesRemoved += 1;

    console.log(`🧹 Removed file: ${entry.targetRelativePath}`);
  });

  return summary;
}

function resolveLocaleEntryPath(localeRoot: string, targetRelativePath: string): string {
  const resolvedLocaleRoot = path.resolve(localeRoot);
  const resolvedEntryPath = path.resolve(localeRoot, targetRelativePath);
  const relativeToLocaleRoot = path.relative(resolvedLocaleRoot, resolvedEntryPath);

  if (
    relativeToLocaleRoot === '..' ||
    relativeToLocaleRoot.startsWith(`..${path.sep}`) ||
    path.isAbsolute(relativeToLocaleRoot)
  ) {
    throw new Error(`Refusing to prune a path outside ${resolvedLocaleRoot}: ${targetRelativePath}`);
  }

  return resolvedEntryPath;
}

function hasRemovedAncestor(
  targetRelativePath: string,
  removedDirectoryTargets: Set<string>
): boolean {
  for (const removedDirectoryTarget of removedDirectoryTargets) {
    if (isSameOrDescendantRelativePath(targetRelativePath, removedDirectoryTarget)) {
      return true;
    }
  }

  return false;
}

function isSameOrDescendantRelativePath(candidatePath: string, ancestorPath: string): boolean {
  const relativePath = path.posix.relative(ancestorPath, candidatePath);

  return relativePath === '' || (relativePath !== '..' && !relativePath.startsWith('../'));
}

function removeEmptyParentDirectories(startPath: string, stopPath: string) {
  const resolvedStopPath = path.resolve(stopPath);
  let currentPath = path.resolve(startPath);

  while (currentPath !== resolvedStopPath && isDescendantPath(currentPath, resolvedStopPath)) {
    if (!fs.existsSync(currentPath)) {
      currentPath = path.dirname(currentPath);
      continue;
    }

    if (!fs.statSync(currentPath).isDirectory()) {
      currentPath = path.dirname(currentPath);
      continue;
    }

    if (fs.readdirSync(currentPath).length > 0) {
      return;
    }

    fs.rmdirSync(currentPath);
    currentPath = path.dirname(currentPath);
  }
}

function isDescendantPath(candidatePath: string, ancestorPath: string): boolean {
  const relativePath = path.relative(ancestorPath, candidatePath);

  return (
    relativePath !== '' &&
    relativePath !== '..' &&
    !relativePath.startsWith(`..${path.sep}`)
  );
}

function isMissingGitPathError(
  error: unknown,
  structureGitPath: string,
  ref: string
): boolean {
  const failure = error as ExecFileSyncFailure;
  const stderr = getStderrText(failure);

  return (
    failure?.status === 128 &&
    (stderr.includes(`path '${structureGitPath}' exists on disk, but not in '${ref}'`) ||
      stderr.includes(`path '${structureGitPath}' does not exist in '${ref}'`) ||
      stderr.includes(`path '${structureGitPath}' not found in '${ref}'`))
  );
}

function getStderrText(error: ExecFileSyncFailure | undefined): string {
  const stderr = error?.stderr;

  if (!stderr) {
    return '';
  }

  return Buffer.isBuffer(stderr) ? stderr.toString('utf8') : stderr;
}

if (require.main === module) {
  main();
}