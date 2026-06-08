import assert from 'node:assert/strict';
import { test } from '@jest/globals';

import { normalizeRequestedPathsInput } from '../src/parseWorkflowInput';

test('normalizeRequestedPathsInput parses comma-separated requested paths', () => {
  assert.deepEqual(normalizeRequestedPathsInput('path/to/my/dir, path/to/another/dir'), [
    'path/to/my/dir',
    'path/to/another/dir'
  ]);
});

test('normalizeRequestedPathsInput keeps JSON array compatibility', () => {
  assert.deepEqual(
    normalizeRequestedPathsInput('["docs/guide/README.md", " /soluzioni/nome-soluzione "]'),
    ['docs/guide/README.md', '/soluzioni/nome-soluzione']
  );
});

test('normalizeRequestedPathsInput removes blanks and duplicates', () => {
  assert.deepEqual(
    normalizeRequestedPathsInput('path/to/my/dir, , path/to/my/dir\npath/to/another/dir'),
    ['path/to/my/dir', 'path/to/another/dir']
  );
});