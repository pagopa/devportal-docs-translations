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

function toPlainJson<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

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
          },
          other: {
            label: 'Altro',
            directory: true,
            children: {
              'info.md': {
                label: 'Info',
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

function createFixture(rootNode: StructureNode) {
  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'gitbook-asset-manifest-'));
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

test('buildGitBookAssetManifest keeps only directories backed by localized markdown and deduplicates overlaps', () => {
  const { tempRoot, docsRoot } = createFixture(createLocalizedRootNode());

  try {
    fs.mkdirSync(path.join(docsRoot, 'it', 'Guida', 'Sezione'), { recursive: true });
    fs.writeFileSync(path.join(docsRoot, 'it', 'Guida', 'Panoramica.md'), 'Overview', 'utf8');
    fs.writeFileSync(path.join(docsRoot, 'it', 'Guida', 'Sezione', 'Dettagli.md'), 'Details', 'utf8');

    const manifest = buildGitBookAssetManifest({
      docsRoot,
      requestedPaths: ['docs/guide', 'docs/guide/nested/details.md', 'docs/guide/other'],
      sourceDocsRoot: 'docs'
    });

    assert.deepEqual(manifest.requestedPaths, [
      'docs/guide',
      'docs/guide/nested/details.md',
      'docs/guide/other'
    ]);
    assert.deepEqual(manifest.sparseCheckoutPaths, [
      'docs/guide/.gitbook',
      'docs/guide/nested/.gitbook'
    ]);
    assert.deepEqual(toPlainJson(manifest.locales), [
      {
        locale: 'it',
        entries: [
          {
            sourceDirectoryPath: 'docs/guide',
            translatedDirectoryPath: 'docs/it/Guida',
            sourceGitBookPath: 'docs/guide/.gitbook',
            translatedGitBookPath: 'docs/it/Guida/.gitbook'
          },
          {
            sourceDirectoryPath: 'docs/guide/nested',
            translatedDirectoryPath: 'docs/it/Guida/Sezione',
            sourceGitBookPath: 'docs/guide/nested/.gitbook',
            translatedGitBookPath: 'docs/it/Guida/Sezione/.gitbook'
          }
        ]
      }
    ]);
  } finally {
    fs.rmSync(tempRoot, { recursive: true, force: true });
  }
});

test('buildGitBookAssetManifest copies root-level assets for translated root markdown files', () => {
  const { tempRoot, docsRoot } = createFixture(createLocalizedRootNode());

  try {
    fs.writeFileSync(path.join(docsRoot, 'it', 'Benvenuto.md'), 'Welcome', 'utf8');

    const manifest = buildGitBookAssetManifest({
      docsRoot,
      requestedPaths: ['docs/index.md']
    });

    assert.deepEqual(manifest.sparseCheckoutPaths, ['docs/.gitbook']);
    assert.deepEqual(toPlainJson(manifest.locales), [
      {
        locale: 'it',
        entries: [
          {
            sourceDirectoryPath: 'docs',
            translatedDirectoryPath: 'docs/it',
            sourceGitBookPath: 'docs/.gitbook',
            translatedGitBookPath: 'docs/it/.gitbook'
          }
        ]
      }
    ]);
  } finally {
    fs.rmSync(tempRoot, { recursive: true, force: true });
  }
});

test('buildGitBookAssetManifest skips file requests that did not produce localized output', () => {
  const { tempRoot, docsRoot } = createFixture(createLocalizedRootNode());

  try {
    const manifest = buildGitBookAssetManifest({
      docsRoot,
      requestedPaths: ['docs/guide/README.md']
    });

    assert.deepEqual(manifest.sparseCheckoutPaths, []);
    assert.deepEqual(toPlainJson(manifest.locales), []);
  } finally {
    fs.rmSync(tempRoot, { recursive: true, force: true });
  }
});

test('buildGitBookAssetManifest matches explicit glob patterns against localized markdown', () => {
  const { tempRoot, docsRoot } = createFixture(createLocalizedRootNode());

  try {
    fs.mkdirSync(path.join(docsRoot, 'it', 'Guida', 'Sezione'), { recursive: true });
    fs.writeFileSync(path.join(docsRoot, 'it', 'Guida', 'Panoramica.md'), 'Overview', 'utf8');
    fs.writeFileSync(path.join(docsRoot, 'it', 'Guida', 'Sezione', 'Dettagli.md'), 'Details', 'utf8');

    const manifest = buildGitBookAssetManifest({
      docsRoot,
      requestedPaths: ['guide/**/details.md', '/guide/*.md']
    });

    assert.deepEqual(manifest.sparseCheckoutPaths, [
      'docs/guide/.gitbook',
      'docs/guide/nested/.gitbook'
    ]);
    assert.deepEqual(toPlainJson(manifest.locales), [
      {
        locale: 'it',
        entries: [
          {
            sourceDirectoryPath: 'docs/guide',
            translatedDirectoryPath: 'docs/it/Guida',
            sourceGitBookPath: 'docs/guide/.gitbook',
            translatedGitBookPath: 'docs/it/Guida/.gitbook'
          },
          {
            sourceDirectoryPath: 'docs/guide/nested',
            translatedDirectoryPath: 'docs/it/Guida/Sezione',
            sourceGitBookPath: 'docs/guide/nested/.gitbook',
            translatedGitBookPath: 'docs/it/Guida/Sezione/.gitbook'
          }
        ]
      }
    ]);
  } finally {
    fs.rmSync(tempRoot, { recursive: true, force: true });
  }
});