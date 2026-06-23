import assert from 'node:assert/strict';
import { test } from '@jest/globals';

import {
  assertRequestedSourceMarkdownExists,
  buildCrowdinContentEntries
} from '../src/generateCrowdinConfig';
import { normalizeRequestedDocsPath } from '../src/translationStructure';

test('buildCrowdinContentEntries maps each requested path to a single wildcard entry', () => {
  assert.deepEqual(
    buildCrowdinContentEntries([
      normalizeRequestedDocsPath('**'),
      normalizeRequestedDocsPath('guide'),
      normalizeRequestedDocsPath('guide/**/README.md'),
      normalizeRequestedDocsPath('/guide/*.md'),
      normalizeRequestedDocsPath('product/intro.md')
    ]),
    [
      {
        source: 'docs/**/*.md',
        translation: 'docs/%locale%/**/%original_file_name%',
        ignore: ['**/.gitbook/**']
      },
      {
        source: 'docs/guide/**/*.md',
        translation: 'docs/%locale%/guide/**/%original_file_name%',
        ignore: ['**/.gitbook/**']
      },
      {
        source: 'docs/guide/**/README.md',
        translation: 'docs/%locale%/guide/**/README.md',
        ignore: ['**/.gitbook/**']
      },
      {
        source: 'docs/guide/*.md',
        translation: 'docs/%locale%/guide/%original_file_name%'
      },
      {
        source: 'docs/product/intro.md',
        translation: 'docs/%locale%/product/intro.md'
      }
    ]
  );
});

test('buildCrowdinContentEntries dedupes identical source patterns', () => {
  assert.deepEqual(
    buildCrowdinContentEntries([
      normalizeRequestedDocsPath('guide'),
      normalizeRequestedDocsPath('guide/**')
    ]),
    [
      {
        source: 'docs/guide/**/*.md',
        translation: 'docs/%locale%/guide/**/%original_file_name%',
        ignore: ['**/.gitbook/**']
      }
    ]
  );
});

test('assertRequestedSourceMarkdownExists ignores .gitbook files and rejects empty matches', () => {
  assert.doesNotThrow(() =>
    assertRequestedSourceMarkdownExists(
      [
        normalizeRequestedDocsPath('guide/**/README.md'),
        normalizeRequestedDocsPath('/guide/*.md')
      ],
      [
        'docs/guide/.gitbook/README.md',
        'docs/guide/README.md',
        'docs/guide/nested/README.md'
      ]
    )
  );

  assert.throws(
    () =>
      assertRequestedSourceMarkdownExists(
        [normalizeRequestedDocsPath('guide')],
        ['docs/guide/.gitbook/README.md']
      ),
    /does not match any source markdown file/
  );

  assert.throws(
    () =>
      assertRequestedSourceMarkdownExists(
        [normalizeRequestedDocsPath('missing/**')],
        ['docs/guide/README.md']
      ),
    /does not match any source markdown file/
  );
});