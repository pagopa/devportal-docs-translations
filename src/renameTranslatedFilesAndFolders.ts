/// <reference types="node" />

import * as fs from 'fs';
import * as path from 'path';

import {
  DOCS_DIRECTORY,
  StructureNode,
  assertUniqueTranslatedTargets,
  collectTranslatedStructureEntries,
  type TranslatedStructureEntry
} from './translationStructure';
import { discoverLocalizedStructuresOrFail } from './getTranslationsWorkflowIo';

interface RenameOperation {
  sourceRelativePath: string;
  targetRelativePath: string;
  depth: number;
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
  rootNode: StructureNode
) {
  const localeRoot = path.join(docsRoot, localeDirectoryName);
  const translatedEntries = collectTranslatedStructureEntries(rootNode);

  assertUniqueTranslatedTargets(localeDirectoryName, translatedEntries);

  console.log(`🌍 Processing locale ${localeDirectoryName}`);
  renameLocaleEntries(localeRoot, translatedEntries);
}

export function renameLocaleEntries(
  localeRoot: string,
  translatedEntries: TranslatedStructureEntry[]
) {

  const directoryOperations = translatedEntries
    .filter((entry) => entry.directory && entry.sourceRelativePath !== entry.targetRelativePath)
    .map(toRenameOperation);

  const fileOperations = translatedEntries
    .filter((entry) => !entry.directory && entry.sourceRelativePath !== entry.targetRelativePath)
    .map(toRenameOperation);

  applyDirectoryRenames(localeRoot, directoryOperations);
  applyFileRenames(localeRoot, fileOperations);
}

function toRenameOperation(entry: TranslatedStructureEntry): RenameOperation {
  return {
    sourceRelativePath: entry.sourceRelativePath,
    targetRelativePath: entry.targetRelativePath,
    depth: entry.depth
  };
}


function applyDirectoryRenames(localeRoot: string, operations: RenameOperation[]) {
  operations
    .sort((left, right) => right.depth - left.depth)
    .forEach((operation) => {
      applyRename(
        localeRoot,
        operation.sourceRelativePath,
        resolveDirectoryTargetRelativePath(operation),
        'directory'
      );
    });
}

function applyFileRenames(localeRoot: string, operations: RenameOperation[]) {
  operations
    .sort((left, right) => right.depth - left.depth)
    .forEach((operation) => {
      applyRename(
        localeRoot,
        resolveFileSourceRelativePath(operation),
        operation.targetRelativePath,
        'file'
      );
    });
}

function resolveDirectoryTargetRelativePath(operation: RenameOperation): string {
  const parentDirectory = path.posix.dirname(operation.sourceRelativePath);
  const translatedName = path.posix.basename(operation.targetRelativePath);

  return parentDirectory === '.'
    ? translatedName
    : path.posix.join(parentDirectory, translatedName);
}

function resolveFileSourceRelativePath(operation: RenameOperation): string {
  const parentDirectory = path.posix.dirname(operation.targetRelativePath);
  const sourceName = path.posix.basename(operation.sourceRelativePath);

  return parentDirectory === '.' ? sourceName : path.posix.join(parentDirectory, sourceName);
}

function applyRename(
  localeRoot: string,
  sourceRelativePath: string,
  targetRelativePath: string,
  entryType: 'directory' | 'file'
) {
  const sourcePath = path.join(localeRoot, sourceRelativePath);
  const targetPath = path.join(localeRoot, targetRelativePath);

  if (!fs.existsSync(sourcePath)) {
    console.log(`⏭️ Skip ${entryType}: ${sourceRelativePath} not found.`);
    return;
  }

  if (sourcePath === targetPath) {
    return;
  }

  if (fs.existsSync(targetPath)) {
    throw new Error(
      `Unable to rename ${sourceRelativePath}: target ${targetRelativePath} already exists.`
    );
  }

  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  fs.renameSync(sourcePath, targetPath);

  console.log(`✅ ${entryType}: ${sourceRelativePath} -> ${targetRelativePath}`);
}

if (require.main === module) {
  main();
}
