/// <reference types="node" />

import * as fs from 'fs';
import * as path from 'path';

import {
  type GitBookAssetEntry,
  type GitBookAssetManifest
} from './buildGitBookAssetManifest';

const DEFAULT_MANIFEST_PATH = 'gitbook-assets-manifest.json';

export interface CopyGitBookAssetsOptions {
  manifest: GitBookAssetManifest;
  sourceRepoRoot: string;
  targetRepoRoot: string;
}

export interface CopyGitBookAssetsResult {
  copiedEntries: number;
  skippedEntries: number;
  copiedPaths: string[];
  skippedPaths: string[];
}

function fail(message: string, error?: unknown): never {
  if (error) {
    console.error(message, error);
  } else {
    console.error(message);
  }

  process.exit(1);
}

export function copyGitBookAssets({
  manifest,
  sourceRepoRoot,
  targetRepoRoot
}: CopyGitBookAssetsOptions): CopyGitBookAssetsResult {
  const copiedPaths: string[] = [];
  const skippedPaths: string[] = [];

  manifest.locales.forEach((localeManifest) => {
    localeManifest.entries.forEach((entry) => {
      const result = copyGitBookAssetEntry(entry, sourceRepoRoot, targetRepoRoot);

      if (result.copied) {
        copiedPaths.push(entry.translatedGitBookPath);
      } else {
        skippedPaths.push(entry.sourceGitBookPath);
      }
    });
  });

  return {
    copiedEntries: copiedPaths.length,
    skippedEntries: skippedPaths.length,
    copiedPaths,
    skippedPaths
  };
}

function copyGitBookAssetEntry(
  entry: GitBookAssetEntry,
  sourceRepoRoot: string,
  targetRepoRoot: string
): { copied: boolean } {
  const sourcePath = path.join(sourceRepoRoot, entry.sourceGitBookPath);

  if (!fs.existsSync(sourcePath)) {
    return { copied: false };
  }

  const sourceStats = fs.statSync(sourcePath);

  if (!sourceStats.isDirectory()) {
    throw new Error(`The path ${entry.sourceGitBookPath} exists in the source repo but is not a directory.`);
  }

  const targetPath = path.join(targetRepoRoot, entry.translatedGitBookPath);
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  fs.rmSync(targetPath, { recursive: true, force: true });
  fs.cpSync(sourcePath, targetPath, { recursive: true, force: true });

  return { copied: true };
}

export function readGitBookAssetManifest(manifestPath: string): GitBookAssetManifest {
  try {
    const manifestContent = fs.readFileSync(manifestPath, 'utf8');
    return JSON.parse(manifestContent) as GitBookAssetManifest;
  } catch (error) {
    throw new Error(`Unable to read ${manifestPath}: ${String(error)}`);
  }
}

export function main() {
  const manifestPath = path.resolve(process.env.GITBOOK_ASSET_MANIFEST_PATH ?? DEFAULT_MANIFEST_PATH);
  const sourceRepoRoot = process.env.SOURCE_DOCS_REPO_PATH;
  const targetRepoRoot = path.resolve(process.env.TARGET_REPO_ROOT ?? process.cwd());
  const githubOutputPath = process.env.GITHUB_OUTPUT;

  if (!sourceRepoRoot) {
    fail('❌ SOURCE_DOCS_REPO_PATH is not defined.');
  }

  try {
    const manifest = readGitBookAssetManifest(manifestPath);
    const result = copyGitBookAssets({
      manifest,
      sourceRepoRoot: path.resolve(sourceRepoRoot),
      targetRepoRoot
    });

    if (githubOutputPath) {
      const outputs = [
        `copied_entries=${result.copiedEntries}`,
        `skipped_entries=${result.skippedEntries}`
      ].join('\n');

      fs.appendFileSync(githubOutputPath, `${outputs}\n`);
    }

    console.log(
      `📦 Copied ${result.copiedEntries} GitBook asset root(s); skipped ${result.skippedEntries} missing root(s).`
    );
  } catch (error) {
    fail('❌ Unable to copy GitBook assets.', error);
  }
}

if (require.main === module) {
  main();
}