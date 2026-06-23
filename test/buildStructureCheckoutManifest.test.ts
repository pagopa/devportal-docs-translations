import assert from 'node:assert/strict';
import { test } from '@jest/globals';

import {
  buildStructureCheckoutManifest,
  collectStructureSourcePaths
} from '../src/buildStructureCheckoutManifest';
import type { StructureNode } from '../src/translationStructure';

function sampleRootNode(): StructureNode {
  return {
    label: 'docs',
    directory: true,
    children: {
      guide: {
        label: 'Guida',
        directory: true,
        children: {
          'README.md': { label: 'Panoramica', directory: false },
          nested: {
            label: 'Sezione',
            directory: true,
            children: {
              'api.md': { label: 'API', directory: false }
            }
          }
        }
      },
      'index.md': { label: 'Benvenuto', directory: false }
    }
  };
}

test('collectStructureSourcePaths separates files and directories by source name', () => {
  assert.deepEqual(collectStructureSourcePaths(sampleRootNode()), {
    files: ['guide/README.md', 'guide/nested/api.md', 'index.md'],
    directories: ['guide', 'guide/nested']
  });
});

test('buildStructureCheckoutManifest lists synced files and their .gitbook asset folders', () => {
  const manifest = buildStructureCheckoutManifest(sampleRootNode());

  assert.equal(manifest.sourceDocsRoot, 'docs');
  assert.deepEqual(manifest.sparseCheckoutPaths, [
    'docs/.gitbook',
    'docs/guide/.gitbook',
    'docs/guide/README.md',
    'docs/guide/nested/.gitbook',
    'docs/guide/nested/api.md',
    'docs/index.md'
  ]);
  assert.deepEqual(manifest.requestedPaths, ['docs/guide', 'docs/index.md']);
});

test('buildStructureCheckoutManifest rewrites paths against a custom source docs root', () => {
  const manifest = buildStructureCheckoutManifest(sampleRootNode(), 'content/docs');

  assert.equal(manifest.sourceDocsRoot, 'content/docs');
  assert.deepEqual(manifest.sparseCheckoutPaths, [
    'content/docs/.gitbook',
    'content/docs/guide/.gitbook',
    'content/docs/guide/README.md',
    'content/docs/guide/nested/.gitbook',
    'content/docs/guide/nested/api.md',
    'content/docs/index.md'
  ]);
});
