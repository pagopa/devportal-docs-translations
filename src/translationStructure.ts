/// <reference types="node" />

import * as fs from 'fs';
import * as path from 'path';

export const DOCS_DIRECTORY = 'docs';
export const METADATA_DIRECTORY = '_meta';
export const SOURCE_STRUCTURE_FILE_NAME = 'docs-structure.json';
const REQUESTED_PATH_WILDCARD_PATTERN = /\*/;
const MARKDOWN_EXTENSION = '.md';

export interface StructureNode {
  label: string;
  directory: boolean;
  children?: Record<string, StructureNode>;
}

export interface StructureDocument {
  version?: number;
  tree?: {
    docs?: StructureNode;
  };
}

export interface LocalizedStructure {
  locale: string;
  structurePath: string;
  rootNode: StructureNode;
}

export interface NormalizedSourceDocsFile {
  normalizedPath: string;
  relativePath: string;
  segments: string[];
}

export type RequestedDocsPathKind = 'markdown-file' | 'partial-root' | 'glob-pattern';

export interface NormalizedRequestedDocsPath {
  kind: RequestedDocsPathKind;
  normalizedPath: string;
  relativePath: string;
  segments: string[];
}

export interface ResolvedTranslationTarget {
  sourcePath: string;
  targetRelativePath: string;
}

export interface TranslatedStructureEntry extends ResolvedTranslationTarget {
  sourceRelativePath: string;
  directory: boolean;
  depth: number;
}

export function loadStructureDocument(structurePath: string): StructureDocument {
  try {
    const content = fs.readFileSync(structurePath, 'utf8');
    return JSON.parse(content) as StructureDocument;
  } catch (error) {
    throw new Error(`Unable to read ${structurePath}: ${String(error)}`);
  }
}

export function getStructureRootNode(
  structure: StructureDocument,
  structurePath: string
): StructureNode {
  const rootNode = structure.tree?.docs;

  if (!rootNode || !rootNode.directory) {
    throw new Error(`The file ${structurePath} does not contain a valid tree.docs.`);
  }

  return rootNode;
}

export function discoverLocalizedStructures(docsRoot: string): LocalizedStructure[] {
  if (!fs.existsSync(docsRoot)) {
    throw new Error(`❌ Directory ${docsRoot} not found.`);
  }

  return fs
    .readdirSync(docsRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => {
      const structurePath = path.join(
        docsRoot,
        entry.name,
        METADATA_DIRECTORY,
        SOURCE_STRUCTURE_FILE_NAME
      );

      if (!fs.existsSync(structurePath)) {
        return null;
      }

      const structure = loadStructureDocument(structurePath);

      return {
        locale: entry.name,
        structurePath,
        rootNode: getStructureRootNode(structure, structurePath)
      } satisfies LocalizedStructure;
    })
    .filter((structure): structure is LocalizedStructure => structure !== null);
}

export function normalizeSourceDocsFilePath(sourcePath: string): NormalizedSourceDocsFile {
  const trimmedPath = sourcePath.trim();

  if (trimmedPath.length === 0) {
    throw new Error('The source file path cannot be empty.');
  }

  const normalizedPath = path.posix.normalize(trimmedPath.replace(/\\/g, '/'));

  if (path.posix.isAbsolute(normalizedPath)) {
    throw new Error(`The path ${sourcePath} must be relative to the repository.`);
  }

  if (normalizedPath === '..' || normalizedPath.startsWith('../')) {
    throw new Error(`The path ${sourcePath} leaves the repository directory.`);
  }

  if (normalizedPath === DOCS_DIRECTORY || !normalizedPath.startsWith(`${DOCS_DIRECTORY}/`)) {
    throw new Error(`The path ${sourcePath} must be under ${DOCS_DIRECTORY}/.`);
  }

  const segments = normalizedPath.split('/').slice(1).filter(Boolean);

  if (segments.length === 0) {
    throw new Error(`The path ${sourcePath} does not point to a file under ${DOCS_DIRECTORY}/.`);
  }

  return {
    normalizedPath,
    relativePath: joinRelativePath(segments),
    segments
  };
}

export function normalizeRequestedDocsPath(sourcePath: string): NormalizedRequestedDocsPath {
  const trimmedPath = sourcePath.trim();

  if (trimmedPath.length === 0) {
    throw new Error('The requested path cannot be empty.');
  }

  const posixPath = trimmedPath.replace(/\\/g, '/');
  const isDocsRelativePath = posixPath.startsWith('/') && !posixPath.startsWith('//');

  if (!isDocsRelativePath && path.posix.isAbsolute(posixPath)) {
    throw new Error(`The path ${sourcePath} must be relative to the repository or docs root.`);
  }

  const repositoryRelativePath = isDocsRelativePath ? posixPath.slice(1) : posixPath;
  const normalizedRepositoryPath = path.posix.normalize(repositoryRelativePath);

  if (normalizedRepositoryPath.length === 0 || normalizedRepositoryPath === '.') {
    throw new Error(`The path ${sourcePath} does not point to a file or directory.`);
  }

  if (normalizedRepositoryPath === '..' || normalizedRepositoryPath.startsWith('../')) {
    throw new Error(`The path ${sourcePath} leaves the repository directory.`);
  }

  const normalizedPath =
    normalizedRepositoryPath === DOCS_DIRECTORY ||
    normalizedRepositoryPath.startsWith(`${DOCS_DIRECTORY}/`)
      ? normalizedRepositoryPath
      : path.posix.join(DOCS_DIRECTORY, normalizedRepositoryPath);

  if (normalizedPath === DOCS_DIRECTORY || !normalizedPath.startsWith(`${DOCS_DIRECTORY}/`)) {
    throw new Error(`The path ${sourcePath} must be under ${DOCS_DIRECTORY}/.`);
  }

  const segments = normalizedPath.split('/').slice(1).filter(Boolean);

  if (segments.length === 0) {
    throw new Error(`The path ${sourcePath} does not point to a file or directory under ${DOCS_DIRECTORY}/.`);
  }

  const hasWildcards = segments.some(segmentContainsWildcard);
  const lastSegment = segments[segments.length - 1];

  return {
    kind: hasWildcards
      ? 'glob-pattern'
      : isMarkdownSegment(lastSegment)
        ? 'markdown-file'
        : 'partial-root',
    normalizedPath,
    relativePath: joinRelativePath(segments),
    segments
  };
}

export function toRequestedMarkdownSourcePattern(
  requestedPath: NormalizedRequestedDocsPath
): string {
  if (requestedPath.kind === 'markdown-file') {
    return requestedPath.normalizedPath;
  }

  if (requestedPath.kind === 'partial-root') {
    return path.posix.join(requestedPath.normalizedPath, '**', `*${MARKDOWN_EXTENSION}`);
  }

  const lastSegment = requestedPath.segments[requestedPath.segments.length - 1];

  if (isMarkdownSegment(lastSegment)) {
    return requestedPath.normalizedPath;
  }

  if (lastSegment === '**') {
    return path.posix.join(requestedPath.normalizedPath, `*${MARKDOWN_EXTENSION}`);
  }

  return path.posix.join(requestedPath.normalizedPath, '**', `*${MARKDOWN_EXTENSION}`);
}

export function getRequestedDocsStaticDirectory(
  requestedPath: NormalizedRequestedDocsPath
): string {
  if (requestedPath.kind === 'markdown-file') {
    return path.posix.dirname(requestedPath.normalizedPath);
  }

  const firstWildcardIndex = requestedPath.segments.findIndex(segmentContainsWildcard);
  const staticSegments =
    firstWildcardIndex === -1
      ? requestedPath.segments
      : requestedPath.segments.slice(0, firstWildcardIndex);

  if (staticSegments.length === 0) {
    return DOCS_DIRECTORY;
  }

  return path.posix.join(DOCS_DIRECTORY, ...staticSegments);
}

export function matchesRequestedSourcePath(
  sourcePath: string,
  requestedPath: NormalizedRequestedDocsPath
): boolean {
  const normalizedSourcePath = normalizeSourceDocsFilePath(sourcePath).normalizedPath;

  if (requestedPath.kind === 'markdown-file') {
    return normalizedSourcePath === requestedPath.normalizedPath;
  }

  if (requestedPath.kind === 'partial-root') {
    const relativePath = path.posix.relative(requestedPath.normalizedPath, normalizedSourcePath);

    return relativePath === '' || (relativePath !== '..' && !relativePath.startsWith('../'));
  }

  return toRequestedPathRegExp(toRequestedMarkdownSourcePattern(requestedPath)).test(
    normalizedSourcePath
  );
}

export function resolveTranslatedRelativePath(
  rootNode: StructureNode,
  sourcePath: string
): string {
  const sourceFile = normalizeSourceDocsFilePath(sourcePath);
  const translatedSegments: string[] = [];
  let currentNode = rootNode;

  sourceFile.segments.forEach((segment, index) => {
    const childNode = currentNode.children?.[segment];

    if (!childNode) {
      throw new Error(`The file ${sourceFile.normalizedPath} does not exist in docs-structure.`);
    }

    const isLastSegment = index === sourceFile.segments.length - 1;
    translatedSegments.push(getTargetSegment(segment, childNode));

    if (childNode.directory) {
      if (isLastSegment) {
        throw new Error(`The path ${sourceFile.normalizedPath} points to a directory, not a file.`);
      }

      currentNode = childNode;
      return;
    }

    if (!isLastSegment) {
      throw new Error(
        `The path ${sourceFile.normalizedPath} traverses the file ${segment} as if it were a directory.`
      );
    }
  });

  return joinRelativePath(translatedSegments);
}

export function resolveTranslatedDirectoryRelativePath(
  rootNode: StructureNode,
  sourcePath: string
): string {
  const requestedPath = normalizeRequestedDocsPath(sourcePath);

  if (requestedPath.kind === 'glob-pattern') {
    throw new Error(
      `The path ${requestedPath.normalizedPath} contains wildcards and does not point to a concrete directory.`
    );
  }

  const translatedSegments: string[] = [];
  let currentNode = rootNode;

  requestedPath.segments.forEach((segment, index) => {
    const childNode = currentNode.children?.[segment];

    if (!childNode) {
      throw new Error(`The path ${requestedPath.normalizedPath} does not exist in docs-structure.`);
    }

    const isLastSegment = index === requestedPath.segments.length - 1;
    translatedSegments.push(getTargetSegment(segment, childNode));

    if (!childNode.directory) {
      if (isLastSegment) {
        throw new Error(`The path ${requestedPath.normalizedPath} points to a file, not a directory.`);
      }

      throw new Error(
        `The path ${requestedPath.normalizedPath} traverses the file ${segment} as if it were a directory.`
      );
    }

    currentNode = childNode;
  });

  return joinRelativePath(translatedSegments);
}

export function getTargetSegment(sourceName: string, node: StructureNode): string {
  const normalizedLabel = node.label.trim().replace(/ /g, '-');

  if (normalizedLabel.length === 0) {
    throw new Error(`The node ${sourceName} has an empty label.`);
  }

  if (normalizedLabel === '.' || normalizedLabel === '..') {
    throw new Error(`The node ${sourceName} has an invalid label: ${normalizedLabel}`);
  }

  if (normalizedLabel.includes('/') || normalizedLabel.includes('\\')) {
    throw new Error(
      `The node ${sourceName} has an invalid label with path separators: ${normalizedLabel}`
    );
  }

  if (node.directory) {
    return normalizedLabel;
  }

  const sourceExtension = path.extname(sourceName);
  const labelExtension = path.extname(normalizedLabel);

  if (sourceExtension && labelExtension.length === 0) {
    return `${normalizedLabel}${sourceExtension}`;
  }

  return normalizedLabel;
}

export function joinRelativePath(segments: string[]): string {
  if (segments.length === 0) {
    return '';
  }

  return path.posix.join(...segments);
}

export function normalizeSourceDocsRoot(sourceDocsRoot: string): string {
  const trimmedRoot = sourceDocsRoot.trim();

  if (trimmedRoot.length === 0) {
    return DOCS_DIRECTORY;
  }

  const normalizedRoot = path.posix.normalize(trimmedRoot.replace(/\\/g, '/'));

  if (path.posix.isAbsolute(normalizedRoot)) {
    throw new Error(`The source docs root ${sourceDocsRoot} must be relative to the repository.`);
  }

  if (normalizedRoot === '..' || normalizedRoot.startsWith('../')) {
    throw new Error(`The source docs root ${sourceDocsRoot} leaves the repository directory.`);
  }

  return normalizedRoot === '.' ? DOCS_DIRECTORY : normalizedRoot;
}

function isMarkdownSegment(segment: string): boolean {
  return segment.toLowerCase().endsWith(MARKDOWN_EXTENSION);
}

function segmentContainsWildcard(segment: string): boolean {
  return REQUESTED_PATH_WILDCARD_PATTERN.test(segment);
}

function toRequestedPathRegExp(pattern: string): RegExp {
  const segments = pattern.split('/');
  let regex = '^';

  segments.forEach((segment, index) => {
    const isLast = index === segments.length - 1;

    if (segment === '**') {
      regex += isLast ? '(?:[^/]+(?:/|$))*' : '(?:[^/]+/)*';
      return;
    }

    regex += escapeRegExp(segment).replace(/\*/g, '[^/]*');

    if (!isLast) {
      regex += '/';
    }
  });

  regex += '$';
  return new RegExp(regex);
}

function escapeRegExp(value: string): string {
  return value.replace(/[|\\{}()[\]^$+?.]/g, '\\$&');
}

export function collectTranslatedStructureEntries(
  rootNode: StructureNode
): TranslatedStructureEntry[] {
  const entries: TranslatedStructureEntry[] = [];

  collectTranslatedStructureEntriesRecursive(rootNode, [], [], entries);

  return entries;
}

export function collectPrunableStructureEntries(
  previousRootNode: StructureNode | null,
  currentRootNode: StructureNode
): TranslatedStructureEntry[] {
  if (!previousRootNode) {
    return [];
  }

  const currentEntriesBySource = new Map(
    collectTranslatedStructureEntries(currentRootNode).map((entry) => [entry.sourceRelativePath, entry])
  );

  return collectTranslatedStructureEntries(previousRootNode)
    .filter((previousEntry) => {
      const currentEntry = currentEntriesBySource.get(previousEntry.sourceRelativePath);

      return (
        currentEntry === undefined ||
        currentEntry.directory !== previousEntry.directory ||
        currentEntry.targetRelativePath !== previousEntry.targetRelativePath
      );
    })
    .sort((left, right) => right.depth - left.depth);
}

function collectTranslatedStructureEntriesRecursive(
  node: StructureNode,
  sourceParentSegments: string[],
  translatedParentSegments: string[],
  entries: TranslatedStructureEntry[]
) {
  Object.entries(node.children ?? {}).forEach(([sourceName, childNode]) => {
    const sourceSegments = [...sourceParentSegments, sourceName];
    const targetSegments = [...translatedParentSegments, getTargetSegment(sourceName, childNode)];
    const sourceRelativePath = joinRelativePath(sourceSegments);

    entries.push({
      sourcePath: path.posix.join(DOCS_DIRECTORY, sourceRelativePath),
      sourceRelativePath,
      targetRelativePath: joinRelativePath(targetSegments),
      directory: childNode.directory,
      depth: sourceSegments.length
    });

    if (childNode.directory) {
      collectTranslatedStructureEntriesRecursive(
        childNode,
        sourceSegments,
        targetSegments,
        entries
      );
    }
  });
}

export function assertUniqueTranslatedTargets(
  locale: string,
  targets: ResolvedTranslationTarget[]
) {
  const seenTargets = new Map<string, string>();

  targets.forEach((target) => {
    const existingSource = seenTargets.get(target.targetRelativePath);

    if (existingSource && existingSource !== target.sourcePath) {
      throw new Error(
        `Conflict in locale ${locale}: ${target.sourcePath} and ${existingSource} both point to ${target.targetRelativePath}.`
      );
    }

    seenTargets.set(target.targetRelativePath, target.sourcePath);
  });
}
