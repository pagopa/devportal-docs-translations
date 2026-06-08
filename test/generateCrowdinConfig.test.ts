import assert from 'node:assert/strict';
import { test } from '@jest/globals';

import {
  assertRequestedSourceMarkdownExists,
  buildCrowdinContentEntries
} from '../src/generateCrowdinConfig';
import { normalizeRequestedDocsPath } from '../src/translationStructure';

test('buildCrowdinContentEntries expands requested paths into concrete file pairs', () => {
  assert.deepEqual(
    buildCrowdinContentEntries(
      [
        normalizeRequestedDocsPath('guide'),
        normalizeRequestedDocsPath('guide/**/README.md'),
        normalizeRequestedDocsPath('/guide/*.md')
      ],
      [
        'docs/guide/.gitbook/ignored.md',
        'docs/guide/README.md',
        'docs/guide/intro.md',
        'docs/guide/nested/README.md'
      ]
    ),
    [
      {
        source: 'docs/guide/README.md',
        translation: 'docs/%locale%/guide/README.md'
      },
      {
        source: 'docs/guide/intro.md',
        translation: 'docs/%locale%/guide/intro.md'
      },
      {
        source: 'docs/guide/nested/README.md',
        translation: 'docs/%locale%/guide/nested/README.md'
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