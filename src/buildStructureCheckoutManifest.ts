/// <reference types="node" />

import * as fs from 'fs';
import * as path from 'path';

import {
  DOCS_DIRECTORY,
  getStructureRootNode,
  loadStructureDocument,
  normalizeSourceDocsRoot,
  type StructureNode
} from './translationStructure';
import { fail, writeTextFile } from './getTranslationsWorkflowIo';

const DEFAULT_STRUCTURE_PATH = '.source-structure/docs-structure.json';
const DEFAULT_MANIFEST_PATH = 'source-checkout-manifest.json';
const DEFAULT_SPARSE_PATHS_FILE = '.source-docs-sparse-checkout.txt';
const GITBOOK_DIRECTORY = '.gitbook';

export interface StructureCheckoutManifest {
  requestedPaths: string[];
  sourceDocsRoot: string;
  sparseCheckoutPaths: string[];
}

interface CollectedSourcePaths {
  files: string[];
  directories: string[];
}

/**
 * Walks the source `docs-structure.json` tree (keyed by source file/folder
 * names) and lists, relative to the docs root, every synced markdown file and
 * every directory. Labels are intentionally ignored here: the source checkout
 * only needs the original paths, and decoupling from labels keeps the fetch
 * resilient to label issues that only matter at rename time.
 */
export function collectStructureSourcePaths(rootNode: StructureNode): CollectedSourcePaths {
  const files: string[] = [];
  const directories: string[] = [];

  const walk = (node: StructureNode, parentSegments: string[]) => {
    Object.entries(node.children ?? {}).forEach(([sourceName, childNode]) => {
      const segments = [...parentSegments, sourceName];
      const relativePath = segments.join('/');

      if (childNode.directory) {
        directories.push(relativePath);
        walk(childNode, segments);
        return;
      }

      files.push(relativePath);
    });
  };

  walk(rootNode, []);

  return { files, directories };
}

export function buildStructureCheckoutManifest(
  rootNode: StructureNode,
  sourceDocsRoot: string = DOCS_DIRECTORY
): StructureCheckoutManifest {
  const normalizedSourceDocsRoot = normalizeSourceDocsRoot(sourceDocsRoot);
  const { files, directories } = collectStructureSourcePaths(rootNode);

  const filePaths = files.map((relativePath) =>
    path.posix.join(normalizedSourceDocsRoot, relativePath)
  );

  // Mirror the matching `.gitbook` folder of every synced directory (plus the
  // docs root) so the translated markdown keeps its relative asset links.
  const gitBookPaths = [
    path.posix.join(normalizedSourceDocsRoot, GITBOOK_DIRECTORY),
    ...directories.map((relativePath) =>
      path.posix.join(normalizedSourceDocsRoot, relativePath, GITBOOK_DIRECTORY)
    )
  ];

  const sparseCheckoutPaths = [...new Set([...filePaths, ...gitBookPaths])].sort();

  const topLevelRequestedPaths = [...files, ...directories]
    .filter((relativePath) => !relativePath.includes('/'))
    .map((relativePath) => path.posix.join(normalizedSourceDocsRoot, relativePath))
    .sort();

  return {
    requestedPaths: topLevelRequestedPaths,
    sourceDocsRoot: normalizedSourceDocsRoot,
    sparseCheckoutPaths
  };
}

export function main() {
  const structurePath = path.resolve(process.env.SOURCE_STRUCTURE_PATH ?? DEFAULT_STRUCTURE_PATH);
  const manifestPath = path.resolve(process.env.SOURCE_CHECKOUT_MANIFEST_PATH ?? DEFAULT_MANIFEST_PATH);
  const sparsePathsFile = path.resolve(
    process.env.SOURCE_CHECKOUT_SPARSE_PATHS_FILE ?? DEFAULT_SPARSE_PATHS_FILE
  );
  const githubOutputPath = process.env.GITHUB_OUTPUT;

  try {
    if (!fs.existsSync(structurePath)) {
      fail(`❌ Source structure file not found: ${structurePath}`);
    }

    const structure = loadStructureDocument(structurePath);
    const rootNode = getStructureRootNode(structure, structurePath);
    const manifest = buildStructureCheckoutManifest(
      rootNode,
      process.env.SOURCE_DOCS_ROOT ?? DOCS_DIRECTORY
    );

    const sparsePathsContent = manifest.sparseCheckoutPaths.join('\n');

    writeTextFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
    writeTextFile(sparsePathsFile, sparsePathsContent.length > 0 ? `${sparsePathsContent}\n` : '');

    if (githubOutputPath) {
      const outputs = [
        `has_sources=${manifest.sparseCheckoutPaths.length > 0 ? 'true' : 'false'}`,
        `manifest_path=${manifestPath}`,
        `sparse_checkout_file=${sparsePathsFile}`
      ].join('\n');

      fs.appendFileSync(githubOutputPath, `${outputs}\n`);
    }

    console.log(
      `📚 Computed ${manifest.sparseCheckoutPaths.length} source checkout path(s) from docs-structure.json (${manifest.requestedPaths.length} top-level synced path(s)).`
    );
  } catch (error) {
    fail('❌ Unable to build the structure checkout manifest.', error);
  }
}

if (require.main === module) {
  main();
}
