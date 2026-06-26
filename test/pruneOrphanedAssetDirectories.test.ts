import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { test } from '@jest/globals';

import { pruneOrphanedAssetDirectories } from '../src/pruneOrphanedAssetDirectories';

function createDocsFixture() {
  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'prune-orphaned-assets-'));
  const docsRoot = path.join(tempRoot, 'docs');
  fs.mkdirSync(docsRoot, { recursive: true });

  return { tempRoot, docsRoot };
}

function writeFile(filePath: string, content = 'content') {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');
}

test('removes a folder whose only content is a .gitbook asset directory', () => {
  const { tempRoot, docsRoot } = createDocsFixture();

  try {
    // Untranslated folder: assets were copied but no markdown was downloaded.
    writeFile(path.join(docsRoot, 'product', 'guide', '.gitbook', 'assets', 'image.png'));
    // Sibling folder with real content must be preserved together with its assets.
    writeFile(path.join(docsRoot, 'product', 'overview.md'), 'Overview');
    writeFile(path.join(docsRoot, 'product', '.gitbook', 'assets', 'cover.png'));

    const { removedPaths } = pruneOrphanedAssetDirectories({ docsRoot });

    assert.deepEqual(removedPaths, [path.join(docsRoot, 'product', 'guide')]);
    assert.equal(fs.existsSync(path.join(docsRoot, 'product', 'guide')), false);
    assert.equal(fs.existsSync(path.join(docsRoot, 'product', 'overview.md')), true);
    assert.equal(
      fs.existsSync(path.join(docsRoot, 'product', '.gitbook', 'assets', 'cover.png')),
      true
    );
  } finally {
    fs.rmSync(tempRoot, { recursive: true, force: true });
  }
});

test('removes the topmost orphan and reports it only once for nested asset-only folders', () => {
  const { tempRoot, docsRoot } = createDocsFixture();

  try {
    writeFile(path.join(docsRoot, 'product', '.gitbook', 'assets', 'cover.png'));
    writeFile(path.join(docsRoot, 'product', 'guide', '.gitbook', 'assets', 'image.png'));
    // An empty subdirectory must not count as content.
    fs.mkdirSync(path.join(docsRoot, 'product', 'empty'), { recursive: true });

    const { removedPaths } = pruneOrphanedAssetDirectories({ docsRoot });

    assert.deepEqual(removedPaths, [path.join(docsRoot, 'product')]);
    assert.equal(fs.existsSync(path.join(docsRoot, 'product')), false);
  } finally {
    fs.rmSync(tempRoot, { recursive: true, force: true });
  }
});

test('keeps folders that have markdown alongside their assets', () => {
  const { tempRoot, docsRoot } = createDocsFixture();

  try {
    writeFile(path.join(docsRoot, 'product', 'guide', 'README.md'), 'Guide');
    writeFile(path.join(docsRoot, 'product', 'guide', '.gitbook', 'assets', 'image.png'));

    const { removedPaths } = pruneOrphanedAssetDirectories({ docsRoot });

    assert.deepEqual(removedPaths, []);
    assert.equal(fs.existsSync(path.join(docsRoot, 'product', 'guide', 'README.md')), true);
    assert.equal(
      fs.existsSync(path.join(docsRoot, 'product', 'guide', '.gitbook', 'assets', 'image.png')),
      true
    );
  } finally {
    fs.rmSync(tempRoot, { recursive: true, force: true });
  }
});

test('preserves the docs root even when it only holds assets', () => {
  const { tempRoot, docsRoot } = createDocsFixture();

  try {
    writeFile(path.join(docsRoot, '.gitbook', 'assets', 'image.png'));

    const { removedPaths } = pruneOrphanedAssetDirectories({ docsRoot });

    assert.deepEqual(removedPaths, []);
    assert.equal(fs.existsSync(path.join(docsRoot, '.gitbook', 'assets', 'image.png')), true);
  } finally {
    fs.rmSync(tempRoot, { recursive: true, force: true });
  }
});

test('leaves folders without any .gitbook assets untouched', () => {
  const { tempRoot, docsRoot } = createDocsFixture();

  try {
    // An empty folder is left for the workflow's empty-directory cleanup, not us.
    fs.mkdirSync(path.join(docsRoot, 'product', 'empty'), { recursive: true });
    writeFile(path.join(docsRoot, 'product', 'guide', 'README.md'), 'Guide');

    const { removedPaths } = pruneOrphanedAssetDirectories({ docsRoot });

    assert.deepEqual(removedPaths, []);
    assert.equal(fs.existsSync(path.join(docsRoot, 'product', 'empty')), true);
  } finally {
    fs.rmSync(tempRoot, { recursive: true, force: true });
  }
});

test('returns no removals when the docs root does not exist', () => {
  const { tempRoot, docsRoot } = createDocsFixture();
  fs.rmSync(docsRoot, { recursive: true, force: true });

  try {
    const { removedPaths } = pruneOrphanedAssetDirectories({ docsRoot });
    assert.deepEqual(removedPaths, []);
  } finally {
    fs.rmSync(tempRoot, { recursive: true, force: true });
  }
});
