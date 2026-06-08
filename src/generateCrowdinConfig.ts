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
  normalizeSourceDocsFilePath
} from './translationStructure';

const CONFIG_FILE = 'crowdin.yml';
const STRUCTURE_SOURCE_PATH = toPosixPath(path.posix.join(SOURCE_STRUCTURE_FILE_NAME));

export interface CrowdinFileEntry {
  source: string;
  translation: string;
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

  const contentEntries = buildCrowdinContentEntries(normalizedPaths, sourceMarkdownPaths);

  const files: CrowdinFileEntry[] = [structureEntry, ...contentEntries];

  writeConfig(files);
  console.log(
    `✅ File ${CONFIG_FILE} generated with 1 structure entry + ${contentEntries.length} content entries.`
  );
}

function readRequestedPaths(): string[] {
  const inputJson =
    process.env.REQUESTED_PATHS ?? process.env.NORMALIZED_PATHS ?? process.env.DIRECTORIES_LIST;

  if (!inputJson) {
    return [];
  }

  try {
    const parsedPaths = JSON.parse(inputJson);

    if (!Array.isArray(parsedPaths)) {
      throw new Error('The payload must be a JSON array.');
    }

    const normalizedPaths = parsedPaths.map((entry) => {
      if (typeof entry !== 'string') {
        throw new Error('Each requested path item must be a string.');
      }

      return entry.trim();
    });

    return [...new Set(normalizedPaths)].filter((entry) => entry.length > 0);
  } catch (error) {
    console.error('❌ Error parsing input JSON:', error);
    process.exit(1);
  }
}

export function toCrowdinFileEntry(sourcePath: string): CrowdinFileEntry {
  const normalizedSourcePath = normalizeSourceDocsFilePath(sourcePath);

  return {
    source: normalizedSourcePath.normalizedPath,
    translation: toPosixPath(
      path.posix.join('docs/', '%locale%', normalizedSourcePath.relativePath)
    )
  };
}

export function buildCrowdinContentEntries(
  requestedPaths: NormalizedRequestedDocsPath[],
  sourceMarkdownPaths: string[]
): CrowdinFileEntry[] {
  const concreteSourcePaths = requestedPaths.flatMap((requestedPath) =>
    sourceMarkdownPaths.filter(
      (sourcePath) =>
        !isGitBookSourcePath(sourcePath) &&
        matchesRequestedSourcePath(sourcePath, requestedPath)
    )
  );

  return dedupeEntriesBySource(concreteSourcePaths.map(toCrowdinFileEntry));
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
