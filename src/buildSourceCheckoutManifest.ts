/// <reference types="node" />

import * as fs from 'fs';
import * as path from 'path';

import {
  DOCS_DIRECTORY,
  getRequestedDocsStaticDirectory,
  normalizeRequestedDocsPath,
  normalizeSourceDocsRoot,
  type NormalizedRequestedDocsPath
} from './translationStructure';
import { fail, readRequestedPaths, writeTextFile } from './getTranslationsWorkflowIo';

const DEFAULT_MANIFEST_PATH = 'source-checkout-manifest.json';
const DEFAULT_SPARSE_PATHS_FILE = '.source-docs-sparse-checkout.txt';

export interface SourceCheckoutManifest {
  requestedPaths: string[];
  sourceDocsRoot: string;
  sparseCheckoutPaths: string[];
}

export interface BuildSourceCheckoutManifestOptions {
  requestedPaths: string[];
  sourceDocsRoot?: string;
}

export function buildSourceCheckoutManifest({
  requestedPaths,
  sourceDocsRoot = DOCS_DIRECTORY
}: BuildSourceCheckoutManifestOptions): SourceCheckoutManifest {
  const normalizedRequestedPaths = requestedPaths.map(normalizeRequestedDocsPath);
  const normalizedSourceDocsRoot = normalizeSourceDocsRoot(sourceDocsRoot);
  const sparseCheckoutPaths = [
    ...new Set(
      normalizedRequestedPaths.flatMap((requestedPath) =>
        buildSparseCheckoutPaths(requestedPath, normalizedSourceDocsRoot)
      )
    )
  ].sort();

  return {
    requestedPaths: normalizedRequestedPaths.map((requestedPath) => requestedPath.normalizedPath),
    sourceDocsRoot: normalizedSourceDocsRoot,
    sparseCheckoutPaths
  };
}

function buildSparseCheckoutPaths(
  requestedPath: NormalizedRequestedDocsPath,
  sourceDocsRoot: string
): string[] {
  return [
    toSourceCheckoutContentPath(requestedPath, sourceDocsRoot),
    ...toSourceGitBookSparsePaths(requestedPath, sourceDocsRoot)
  ];
}

function toSourceCheckoutContentPath(
  requestedPath: NormalizedRequestedDocsPath,
  sourceDocsRoot: string
): string {
  const sourcePatternPath = joinSourceDocsRoot(sourceDocsRoot, requestedPath.relativePath);

  if (requestedPath.kind === 'markdown-file' || targetsMarkdownFiles(requestedPath)) {
    return sourcePatternPath;
  }

  if (requestedPath.kind === 'glob-pattern' && requestedPath.segments[requestedPath.segments.length - 1] === '**') {
    return sourcePatternPath;
  }

  return path.posix.join(sourcePatternPath, '**');
}

function toSourceGitBookSparsePaths(
  requestedPath: NormalizedRequestedDocsPath,
  sourceDocsRoot: string
): string[] {
  if (requestedPath.kind === 'markdown-file') {
    const sourceFilePath = joinSourceDocsRoot(sourceDocsRoot, requestedPath.relativePath);

    return [path.posix.join(path.posix.dirname(sourceFilePath), '.gitbook')];
  }

  const staticDirectory = toSourceStaticDirectory(requestedPath, sourceDocsRoot);

  return [
    path.posix.join(staticDirectory, '.gitbook'),
    path.posix.join(staticDirectory, '**', '.gitbook')
  ];
}

function toSourceStaticDirectory(
  requestedPath: NormalizedRequestedDocsPath,
  sourceDocsRoot: string
): string {
  const staticDocsDirectory = getRequestedDocsStaticDirectory(requestedPath);

  if (staticDocsDirectory === DOCS_DIRECTORY) {
    return sourceDocsRoot;
  }

  const relativeStaticDirectory = path.posix.relative(DOCS_DIRECTORY, staticDocsDirectory);
  return joinSourceDocsRoot(sourceDocsRoot, relativeStaticDirectory);
}

function joinSourceDocsRoot(sourceDocsRoot: string, relativePath: string): string {
  return relativePath.length > 0 ? path.posix.join(sourceDocsRoot, relativePath) : sourceDocsRoot;
}

function targetsMarkdownFiles(requestedPath: NormalizedRequestedDocsPath): boolean {
  const lastSegment = requestedPath.segments[requestedPath.segments.length - 1];
  return lastSegment.toLowerCase().endsWith('.md');
}

export function main() {
  const manifestPath = path.resolve(process.env.SOURCE_CHECKOUT_MANIFEST_PATH ?? DEFAULT_MANIFEST_PATH);
  const sparsePathsFile = path.resolve(
    process.env.SOURCE_CHECKOUT_SPARSE_PATHS_FILE ?? DEFAULT_SPARSE_PATHS_FILE
  );
  const githubOutputPath = process.env.GITHUB_OUTPUT;

  try {
    const manifest = buildSourceCheckoutManifest({
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
        `has_sources=${manifest.sparseCheckoutPaths.length > 0 ? 'true' : 'false'}`,
        `manifest_path=${manifestPath}`,
        `sparse_checkout_file=${sparsePathsFile}`
      ].join('\n');

      fs.appendFileSync(githubOutputPath, `${outputs}\n`);
    }

    console.log(
      `📚 Computed ${manifest.sparseCheckoutPaths.length} source checkout path(s) for ${manifest.requestedPaths.length} requested path(s).`
    );
  } catch (error) {
    fail('❌ Unable to build the source checkout manifest.', error);
  }
}

if (require.main === module) {
  main();
}