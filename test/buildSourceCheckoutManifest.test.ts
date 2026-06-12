import assert from 'node:assert/strict';
import { test } from '@jest/globals';

import { buildSourceCheckoutManifest } from '../src/buildSourceCheckoutManifest';

test('buildSourceCheckoutManifest includes exact markdown files and parent GitBook assets', () => {
  const manifest = buildSourceCheckoutManifest({
    requestedPaths: ['docs/guide/README.md']
  });

  assert.deepEqual(manifest.requestedPaths, ['docs/guide/README.md']);
  assert.deepEqual(manifest.sparseCheckoutPaths, [
    'docs/guide/.gitbook',
    'docs/guide/README.md'
  ]);
});

test('buildSourceCheckoutManifest builds sparse paths from partial roots and explicit globs', () => {
  const manifest = buildSourceCheckoutManifest({
    requestedPaths: ['guide', 'guide/**', 'guide/**/README.md', '/guide/*.md']
  });

  assert.deepEqual(manifest.requestedPaths, [
    'docs/guide',
    'docs/guide/**',
    'docs/guide/**/README.md',
    'docs/guide/*.md'
  ]);
  assert.deepEqual(manifest.sparseCheckoutPaths, [
    'docs/guide/**',
    'docs/guide/**/.gitbook',
    'docs/guide/**/README.md',
    'docs/guide/*.md',
    'docs/guide/.gitbook'
  ]);
});

test('buildSourceCheckoutManifest rewrites sparse paths against a custom source docs root', () => {
  const manifest = buildSourceCheckoutManifest({
    requestedPaths: ['guide/README.md'],
    sourceDocsRoot: 'content/docs'
  });

  assert.deepEqual(manifest.sparseCheckoutPaths, [
    'content/docs/guide/.gitbook',
    'content/docs/guide/README.md'
  ]);
});