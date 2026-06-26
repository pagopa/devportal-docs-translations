/// <reference types="node" />

import * as fs from 'fs';
import * as path from 'path';

import { DOCS_DIRECTORY } from './translationStructure';
import { fail } from './getTranslationsWorkflowIo';

const GITBOOK_DIRECTORY = '.gitbook';

export interface PruneOrphanedAssetDirectoriesOptions {
  docsRoot: string;
}

export interface PruneOrphanedAssetDirectoriesResult {
  removedPaths: string[];
}

interface DirectorySummary {
  // The subtree holds at least one `.gitbook` asset directory.
  hasAssets: boolean;
  // The subtree holds at least one regular file outside of any `.gitbook`
  // directory (i.e. real translated content).
  hasContent: boolean;
  // The directory itself can be removed: it only holds GitBook assets.
  isOrphan: boolean;
}

/**
 * Walk the docs tree and remove every directory whose subtree contains GitBook
 * assets (a `.gitbook` directory) but no other content.
 *
 * These orphaned asset folders are left behind when a folder's markdown was not
 * yet translated or approved on Crowdin — so nothing was downloaded for it —
 * while its source `.gitbook` assets were still fetched and copied into the
 * localized tree. The result would otherwise be a committed folder holding only
 * a `.gitbook` directory and no documentation.
 *
 * Only the topmost orphan directory of each chain is reported in
 * `removedPaths`; its orphan descendants are removed with it.
 */
export function pruneOrphanedAssetDirectories({
  docsRoot
}: PruneOrphanedAssetDirectoriesOptions): PruneOrphanedAssetDirectoriesResult {
  const removedPaths: string[] = [];

  if (!fs.existsSync(docsRoot) || !fs.statSync(docsRoot).isDirectory()) {
    return { removedPaths };
  }

  // The docs root itself is never removed, even when it only holds assets.
  summarizeDirectory(docsRoot, true, removedPaths);

  return { removedPaths };
}

function summarizeDirectory(
  directoryPath: string,
  isRoot: boolean,
  removedPaths: string[]
): DirectorySummary {
  const entries = fs.readdirSync(directoryPath, { withFileTypes: true });

  let hasAssets = false;
  let hasContent = false;
  const orphanChildren: string[] = [];

  entries.forEach((entry) => {
    const entryPath = path.join(directoryPath, entry.name);

    if (entry.isDirectory() && entry.name === GITBOOK_DIRECTORY) {
      hasAssets = true;
      return;
    }

    if (entry.isDirectory()) {
      const childSummary = summarizeDirectory(entryPath, false, removedPaths);

      hasAssets = hasAssets || childSummary.hasAssets;
      hasContent = hasContent || childSummary.hasContent;

      if (childSummary.isOrphan) {
        orphanChildren.push(entryPath);
      }

      return;
    }

    // A regular file (or anything that is not a directory, e.g. a symlink)
    // outside of any `.gitbook` directory counts as real content.
    hasContent = true;
  });

  const isOrphan = !isRoot && hasAssets && !hasContent;

  if (!isOrphan) {
    // This directory survives, so its orphan children will not be subsumed by a
    // removal of this directory: remove them here and keep them out of the
    // committed tree.
    orphanChildren.forEach((orphanChild) => {
      fs.rmSync(orphanChild, { recursive: true, force: true });
      removedPaths.push(orphanChild);
    });
  }

  return { hasAssets, hasContent, isOrphan };
}

export function main() {
  const docsRoot = path.resolve(process.env.DOCS_ROOT ?? DOCS_DIRECTORY);

  try {
    const { removedPaths } = pruneOrphanedAssetDirectories({ docsRoot });

    removedPaths.forEach((removedPath) => {
      console.log(
        `🧹 Removing orphaned GitBook asset folder: ${path.relative(process.cwd(), removedPath)}`
      );
    });

    console.log(`🧹 Removed ${removedPaths.length} orphaned GitBook asset folder(s).`);
  } catch (error) {
    fail('❌ Unable to prune orphaned GitBook asset folders.', error);
  }
}

if (require.main === module) {
  main();
}
