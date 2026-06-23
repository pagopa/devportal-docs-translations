/// <reference types="node" />

import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';

import {
  DOCS_DIRECTORY,
  METADATA_DIRECTORY,
  SOURCE_STRUCTURE_FILE_NAME,
  NormalizedRequestedDocsPath,
  matchesRequestedSourcePath,
  normalizeRequestedDocsPath,
  normalizeSourceDocsFilePath,
  toRequestedMarkdownSourcePattern,
  toRequestedMarkdownTranslationPattern
} from './translationStructure';
import { readRequestedPaths } from './getTranslationsWorkflowIo';

const CONFIG_FILE = 'crowdin.yml';
const STRUCTURE_SOURCE_PATH = toPosixPath(path.posix.join(SOURCE_STRUCTURE_FILE_NAME));
// Markdown that lives under .gitbook holds asset content synced separately, so
// keep it out of the wildcard source patterns Crowdin downloads.
const GITBOOK_IGNORE_PATTERN = '**/.gitbook/**';

export interface CrowdinFileEntry {
  source: string;
  translation: string;
  ignore?: string[];
}

interface CrowdinConfig {
  base_path?: string;
  preserve_hierarchy?: boolean;
  files: CrowdinFileEntry[];
  [key: string]: unknown;
}

function main() {
  const requestedPaths = readRequestedPaths();

  const normalizedPaths = requestedPaths.map(normalizeRequestedDocsPath);
  const sourceMarkdownPaths = collectExistingSourceMarkdownFiles(path.resolve(DOCS_DIRECTORY));

  assertRequestedSourceMarkdownExists(normalizedPaths, sourceMarkdownPaths);
  ensurePlaceholderFile(SOURCE_STRUCTURE_FILE_NAME);

  const structureEntry: CrowdinFileEntry = {
    source: STRUCTURE_SOURCE_PATH,
    translation: toPosixPath(path.posix.join('docs/', '%locale%', METADATA_DIRECTORY, SOURCE_STRUCTURE_FILE_NAME))
  };

  const contentEntries = buildCrowdinContentEntries(normalizedPaths);

  const files: CrowdinFileEntry[] = [structureEntry, ...contentEntries];

  writeConfig(files);
  console.log(
    `✅ File ${CONFIG_FILE} generated with 1 structure entry + ${contentEntries.length} content entries.`
  );
}

export function toCrowdinFileEntry(
  requestedPath: NormalizedRequestedDocsPath
): CrowdinFileEntry {
  const source = toRequestedMarkdownSourcePattern(requestedPath);
  const entry: CrowdinFileEntry = {
    source,
    translation: toRequestedMarkdownTranslationPattern(requestedPath)
  };

  // Only directory-recursive patterns can reach into .gitbook folders.
  if (source.includes('**')) {
    entry.ignore = [GITBOOK_IGNORE_PATTERN];
  }

  return entry;
}

export function buildCrowdinContentEntries(
  requestedPaths: NormalizedRequestedDocsPath[]
): CrowdinFileEntry[] {
  return dedupeEntriesBySource(requestedPaths.map(toCrowdinFileEntry));
}

function dedupeEntriesBySource(entries: CrowdinFileEntry[]): CrowdinFileEntry[] {
  const seenSources = new Set<string>();

  return entries.filter((entry) => {
    if (seenSources.has(entry.source)) {
      return false;
    }

    seenSources.add(entry.source);
    return true;
  });
}

export function assertRequestedSourceMarkdownExists(
  requestedPaths: NormalizedRequestedDocsPath[],
  sourceMarkdownPaths: string[]
) {
  requestedPaths.forEach((requestedPath) => {
    if (
      sourceMarkdownPaths.some(
        (sourcePath) =>
          !isGitBookSourcePath(sourcePath) &&
          matchesRequestedSourcePath(sourcePath, requestedPath)
      )
    ) {
      return;
    }

    throw new Error(
      `The requested path ${requestedPath.normalizedPath} does not match any source markdown file under ${DOCS_DIRECTORY}/.`
    );
  });
}

function collectExistingSourceMarkdownFiles(docsRoot: string): string[] {
  if (!fs.existsSync(docsRoot)) {
    return [];
  }

  return collectExistingSourceMarkdownFilesRecursive(docsRoot, docsRoot).sort();
}

function collectExistingSourceMarkdownFilesRecursive(
  docsRoot: string,
  currentDirectory: string
): string[] {
  return fs.readdirSync(currentDirectory, { withFileTypes: true }).flatMap((entry) => {
    const absolutePath = path.join(currentDirectory, entry.name);

    if (entry.isDirectory()) {
      if (entry.name === '.gitbook') {
        return [];
      }

      return collectExistingSourceMarkdownFilesRecursive(docsRoot, absolutePath);
    }

    if (path.posix.extname(entry.name).toLowerCase() !== '.md') {
      return [];
    }

    const relativePath = toPosixPath(path.relative(docsRoot, absolutePath));
    return [normalizeSourceDocsFilePath(path.posix.join(DOCS_DIRECTORY, relativePath)).normalizedPath];
  });
}

function isGitBookSourcePath(sourcePath: string): boolean {
  return normalizeSourceDocsFilePath(sourcePath).segments.includes('.gitbook');
}

function ensurePlaceholderFile(filePath: string) {
  if (fs.existsSync(filePath)) {
    return;
  }

  const directory = path.dirname(filePath);

  if (directory !== '.' && !fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }

  fs.writeFileSync(filePath, '', 'utf8');
}

function readOtherConfigProps(): Record<string, unknown> {
  if (!fs.existsSync(CONFIG_FILE)) {
    return {};
  }

  try {
    const existingContent = fs.readFileSync(CONFIG_FILE, 'utf8');
    const loadedConfig = yaml.load(existingContent) as CrowdinConfig | undefined;

    if (!loadedConfig) {
      return {};
    }

    const { files, base_path, preserve_hierarchy, ...rest } = loadedConfig;
    return rest;
  } catch (error) {
    console.warn('⚠️ Unable to read the existing file, a new one will be created.');
    return {};
  }
}

function writeConfig(files: CrowdinFileEntry[]) {
  const config: CrowdinConfig = {
    base_path: '.',
    preserve_hierarchy: true,
    ...readOtherConfigProps(),
    files
  };

  try {
    const yamlContent = yaml.dump(config, {
      noRefs: true,
      lineWidth: -1
    });

    fs.writeFileSync(CONFIG_FILE, yamlContent, 'utf8');
  } catch (error) {
    console.error(`❌ Error writing ${CONFIG_FILE}`, error);
    process.exit(1);
  }
}

function toPosixPath(filePath: string): string {
  return filePath.replace(/\\/g, '/');
}

if (require.main === module) {
  main();
}
