import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { test } from '@jest/globals';

import {
  METADATA_DIRECTORY,
  SOURCE_STRUCTURE_FILE_NAME,
  type StructureDocument,
  type StructureNode
} from '../src/translationStructure';
import { buildGitBookAssetManifest } from '../src/buildGitBookAssetManifest';
import { copyGitBookAssets } from '../src/copyGitBookAssets';

function createLocalizedRootNode(): StructureNode {
  return {
    label: 'docs',
    directory: true,
    children: {
      guide: {
        label: 'Guida',
        directory: true,
        children: {
          'README.md': {
            label: 'Panoramica',
            directory: false
          },
          nested: {
            label: 'Sezione',
            directory: true,
            children: {
              'details.md': {
                label: 'Dettagli',
                directory: false
              }
            }
          }
        }
      },
      'index.md': {
        label: 'Benvenuto',
        directory: false
      }
    }
  };
}

function createTargetFixture(rootNode: StructureNode) {
  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'copy-gitbook-assets-'));
  const docsRoot = path.join(tempRoot, 'docs');
  const structureDocument: StructureDocument = {
    tree: {
      docs: rootNode
    }
  };

  const metadataDirectory = path.join(docsRoot, 'it', METADATA_DIRECTORY);
  fs.mkdirSync(metadataDirectory, { recursive: true });
  fs.writeFileSync(
    path.join(metadataDirectory, SOURCE_STRUCTURE_FILE_NAME),
    JSON.stringify(structureDocument),
    'utf8'
  );

  return {
    tempRoot,
    docsRoot
  };
}

test('copyGitBookAssets copies available .gitbook roots into translated locale paths and skips missing source roots', () => {
  const { tempRoot, docsRoot } = createTargetFixture(createLocalizedRootNode());

  try {
    fs.mkdirSync(path.join(docsRoot, 'it', 'Guida', 'Sezione'), { recursive: true });
    fs.writeFileSync(path.join(docsRoot, 'it', 'Guida', 'Panoramica.md'), 'Overview', 'utf8');
    fs.writeFileSync(path.join(docsRoot, 'it', 'Guida', 'Sezione', 'Dettagli.md'), 'Details', 'utf8');
    fs.writeFileSync(path.join(docsRoot, 'it', 'Benvenuto.md'), 'Welcome', 'utf8');

    const manifest = buildGitBookAssetManifest({
      docsRoot,
      requestedPaths: ['docs/guide', 'docs/index.md']
    });
    const sourceRepoRoot = path.join(tempRoot, 'source-repo');

    fs.mkdirSync(path.join(sourceRepoRoot, 'docs', 'guide', '.gitbook'), { recursive: true });
    fs.mkdirSync(path.join(sourceRepoRoot, 'docs', 'guide', 'nested', '.gitbook'), {
      recursive: true
    });
    fs.writeFileSync(
      path.join(sourceRepoRoot, 'docs', 'guide', '.gitbook', 'cover.png'),
      'guide-image',
      'utf8'
    );
    fs.writeFileSync(
      path.join(sourceRepoRoot, 'docs', 'guide', 'nested', '.gitbook', 'diagram.svg'),
      'nested-image',
      'utf8'
    );

    fs.mkdirSync(path.join(docsRoot, 'it', 'Guida', '.gitbook'), { recursive: true });
    fs.writeFileSync(path.join(docsRoot, 'it', 'Guida', '.gitbook', 'stale.txt'), 'stale', 'utf8');

    const result = copyGitBookAssets({
      manifest,
      sourceRepoRoot,
      targetRepoRoot: tempRoot
    });

    assert.equal(result.copiedEntries, 2);
    assert.equal(result.skippedEntries, 1);
    assert.deepEqual(result.copiedPaths.sort(), [
      'docs/it/Guida/.gitbook',
      'docs/it/Guida/Sezione/.gitbook'
    ]);
    assert.deepEqual(result.skippedPaths, ['docs/.gitbook']);
    assert.equal(
      fs.readFileSync(path.join(docsRoot, 'it', 'Guida', '.gitbook', 'cover.png'), 'utf8'),
      'guide-image'
    );
    assert.equal(
      fs.readFileSync(path.join(docsRoot, 'it', 'Guida', 'Sezione', '.gitbook', 'diagram.svg'), 'utf8'),
      'nested-image'
    );
    assert.equal(fs.existsSync(path.join(docsRoot, 'it', '.gitbook')), false);
    assert.equal(fs.existsSync(path.join(docsRoot, 'it', 'Guida', '.gitbook', 'stale.txt')), false);
  } finally {
    fs.rmSync(tempRoot, { recursive: true, force: true });
  }
});