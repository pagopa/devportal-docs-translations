import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { test } from '@jest/globals';

import {
  METADATA_DIRECTORY,
  SOURCE_STRUCTURE_FILE_NAME,
  assertUniqueTranslatedTargets,
  collectPrunableStructureEntries,
  collectTranslatedStructureEntries,
  discoverLocalizedStructures,
  getRequestedDocsStaticDirectory,
  getTargetSegment,
  getStructureRootNode,
  loadStructureDocument,
  matchesRequestedSourcePath,
  normalizeRequestedDocsPath,
  normalizeSourceDocsFilePath,
  resolveTranslatedDirectoryRelativePath,
  resolveTranslatedRelativePath,
  toRequestedMarkdownSourcePattern,
  type StructureDocument,
  type StructureNode
} from '../src/translationStructure';

function createSampleRootNode(): StructureNode {
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
          'faq.md': {
            label: 'Domande-Frequenti.md',
            directory: false
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

function createNestedDirectoryRootNode(): StructureNode {
  return {
    label: 'docs',
    directory: true,
    children: {
      guide: {
        label: 'Guida',
        directory: true,
        children: {
          nested: {
            label: 'Sezione',
            directory: true,
            children: {
              deeper: {
                label: 'Livello',
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
          'README.md': {
            label: 'Panoramica',
            directory: false
          }
        }
      }
    }
  };
}

function createUpdatedGuideRootNode(): StructureNode {
  return {
    label: 'docs',
    directory: true,
    children: {
      guide: {
        label: 'Guida-Aggiornata',
        directory: true,
        children: {
          'README.md': {
            label: 'Panoramica',
            directory: false
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

test('normalizeSourceDocsFilePath normalizes separators and trims input', () => {
  const result = normalizeSourceDocsFilePath(' docs\\guide\\README.md ');

  assert.deepEqual(result, {
    normalizedPath: 'docs/guide/README.md',
    relativePath: 'guide/README.md',
    segments: ['guide', 'README.md']
  });
});

test('normalizeSourceDocsFilePath rejects paths outside docs', () => {
  assert.throws(
    () => normalizeSourceDocsFilePath('guide/README.md'),
    /must be under docs\//
  );
});

test('normalizeRequestedDocsPath supports docs-root relative and partial paths', () => {
  assert.deepEqual(normalizeRequestedDocsPath('/guide/README.md'), {
    kind: 'markdown-file',
    normalizedPath: 'docs/guide/README.md',
    relativePath: 'guide/README.md',
    segments: ['guide', 'README.md']
  });

  assert.deepEqual(normalizeRequestedDocsPath('guide'), {
    kind: 'partial-root',
    normalizedPath: 'docs/guide',
    relativePath: 'guide',
    segments: ['guide']
  });
});

test('normalizeRequestedDocsPath detects explicit glob patterns', () => {
  assert.deepEqual(normalizeRequestedDocsPath('guide/**'), {
    kind: 'glob-pattern',
    normalizedPath: 'docs/guide/**',
    relativePath: 'guide/**',
    segments: ['guide', '**']
  });

  assert.deepEqual(normalizeRequestedDocsPath('/guide/*.md'), {
    kind: 'glob-pattern',
    normalizedPath: 'docs/guide/*.md',
    relativePath: 'guide/*.md',
    segments: ['guide', '*.md']
  });

  assert.deepEqual(normalizeRequestedDocsPath('guide/**/README.md'), {
    kind: 'glob-pattern',
    normalizedPath: 'docs/guide/**/README.md',
    relativePath: 'guide/**/README.md',
    segments: ['guide', '**', 'README.md']
  });
});

test('toRequestedMarkdownSourcePattern resolves roots and globs to markdown source patterns', () => {
  assert.equal(
    toRequestedMarkdownSourcePattern(normalizeRequestedDocsPath('guide')),
    'docs/guide/**/*.md'
  );
  assert.equal(
    toRequestedMarkdownSourcePattern(normalizeRequestedDocsPath('guide/**')),
    'docs/guide/**/*.md'
  );
  assert.equal(
    toRequestedMarkdownSourcePattern(normalizeRequestedDocsPath('/guide/*.md')),
    'docs/guide/*.md'
  );
});

test('getRequestedDocsStaticDirectory returns the stable source prefix for roots and globs', () => {
  assert.equal(
    getRequestedDocsStaticDirectory(normalizeRequestedDocsPath('guide/**/README.md')),
    'docs/guide'
  );
  assert.equal(
    getRequestedDocsStaticDirectory(normalizeRequestedDocsPath('/guide/*.md')),
    'docs/guide'
  );
  assert.equal(
    getRequestedDocsStaticDirectory(normalizeRequestedDocsPath('docs/index.md')),
    'docs'
  );
});

test('matchesRequestedSourcePath supports exact files, partial roots, and wildcard patterns', () => {
  assert.equal(
    matchesRequestedSourcePath('docs/guide/README.md', normalizeRequestedDocsPath('guide/README.md')),
    true
  );
  assert.equal(
    matchesRequestedSourcePath('docs/guide/nested/details.md', normalizeRequestedDocsPath('guide')),
    true
  );
  assert.equal(
    matchesRequestedSourcePath('docs/guide/nested/README.md', normalizeRequestedDocsPath('guide/**/README.md')),
    true
  );
  assert.equal(
    matchesRequestedSourcePath('docs/guide/info.txt', normalizeRequestedDocsPath('guide/**')),
    false
  );
  assert.equal(
    matchesRequestedSourcePath('docs/other/README.md', normalizeRequestedDocsPath('/guide/*.md')),
    false
  );
});

test('getTargetSegment preserves directory labels and appends file extensions when needed', () => {
  assert.equal(getTargetSegment('guide', { label: 'Guida', directory: true }), 'Guida');
  assert.equal(
    getTargetSegment('README.md', { label: 'Panoramica', directory: false }),
    'Panoramica.md'
  );
  assert.equal(
    getTargetSegment('faq.md', { label: 'Domande-Frequenti.md', directory: false }),
    'Domande-Frequenti.md'
  );
});

test('resolveTranslatedRelativePath maps source docs files through the localized structure', () => {
  const rootNode = createSampleRootNode();

  assert.equal(resolveTranslatedRelativePath(rootNode, 'docs/guide/README.md'), 'Guida/Panoramica.md');
  assert.equal(resolveTranslatedRelativePath(rootNode, 'docs/index.md'), 'Benvenuto.md');
});

test('resolveTranslatedDirectoryRelativePath maps source docs directories through the localized structure', () => {
  const rootNode = createNestedDirectoryRootNode();

  assert.equal(resolveTranslatedDirectoryRelativePath(rootNode, 'docs/guide'), 'Guida');
  assert.equal(
    resolveTranslatedDirectoryRelativePath(rootNode, '/guide/nested/deeper'),
    'Guida/Sezione/Livello'
  );
});

test('collectTranslatedStructureEntries exposes source and translated paths for files and directories', () => {
  const rootNode = createSampleRootNode();

  assert.deepEqual(collectTranslatedStructureEntries(rootNode), [
    {
      sourcePath: 'docs/guide',
      sourceRelativePath: 'guide',
      targetRelativePath: 'Guida',
      directory: true,
      depth: 1
    },
    {
      sourcePath: 'docs/guide/README.md',
      sourceRelativePath: 'guide/README.md',
      targetRelativePath: 'Guida/Panoramica.md',
      directory: false,
      depth: 2
    },
    {
      sourcePath: 'docs/guide/faq.md',
      sourceRelativePath: 'guide/faq.md',
      targetRelativePath: 'Guida/Domande-Frequenti.md',
      directory: false,
      depth: 2
    },
    {
      sourcePath: 'docs/index.md',
      sourceRelativePath: 'index.md',
      targetRelativePath: 'Benvenuto.md',
      directory: false,
      depth: 1
    }
  ]);
});

test('collectPrunableStructureEntries returns removed and retargeted previous entries', () => {
  const previousRootNode = createSampleRootNode();
  const currentRootNode = createUpdatedGuideRootNode();

  assert.deepEqual(
    collectPrunableStructureEntries(previousRootNode, currentRootNode).map((entry) => ({
      sourceRelativePath: entry.sourceRelativePath,
      targetRelativePath: entry.targetRelativePath,
      directory: entry.directory,
      depth: entry.depth
    })),
    [
      {
        sourceRelativePath: 'guide/README.md',
        targetRelativePath: 'Guida/Panoramica.md',
        directory: false,
        depth: 2
      },
      {
        sourceRelativePath: 'guide/faq.md',
        targetRelativePath: 'Guida/Domande-Frequenti.md',
        directory: false,
        depth: 2
      },
      {
        sourceRelativePath: 'guide',
        targetRelativePath: 'Guida',
        directory: true,
        depth: 1
      }
    ]
  );
});

test('collectPrunableStructureEntries returns an empty array when there is no previous structure', () => {
  assert.deepEqual(collectPrunableStructureEntries(null, createSampleRootNode()), []);
});

test('collectPrunableStructureEntries ignores unchanged previous entries', () => {
  assert.deepEqual(
    collectPrunableStructureEntries(createSampleRootNode(), createSampleRootNode()),
    []
  );
});

test('resolveTranslatedRelativePath rejects directories and missing nodes', () => {
  const rootNode = createSampleRootNode();

  assert.throws(
    () => resolveTranslatedRelativePath(rootNode, 'docs/guide'),
    /points to a directory, not a file/
  );
  assert.throws(
    () => resolveTranslatedRelativePath(rootNode, 'docs/missing.md'),
    /does not exist in docs-structure/
  );
});

test('resolveTranslatedDirectoryRelativePath rejects files and missing directories', () => {
  const rootNode = createNestedDirectoryRootNode();

  assert.throws(
    () => resolveTranslatedDirectoryRelativePath(rootNode, 'docs/guide/README.md'),
    /points to a file, not a directory/
  );
  assert.throws(
    () => resolveTranslatedDirectoryRelativePath(rootNode, 'docs/guide/missing'),
    /does not exist in docs-structure/
  );
});

test('discoverLocalizedStructures loads only locales with metadata and exposes the root node', () => {
  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'translation-structure-'));

  try {
    const docsRoot = path.join(tempRoot, 'docs');
    const italianMetadataDir = path.join(docsRoot, 'it', METADATA_DIRECTORY);
    const englishDir = path.join(docsRoot, 'en');
    const structureDocument: StructureDocument = {
      tree: {
        docs: createSampleRootNode()
      }
    };

    fs.mkdirSync(italianMetadataDir, { recursive: true });
    fs.mkdirSync(englishDir, { recursive: true });
    fs.writeFileSync(
      path.join(italianMetadataDir, SOURCE_STRUCTURE_FILE_NAME),
      JSON.stringify(structureDocument),
      'utf8'
    );

    const structures = discoverLocalizedStructures(docsRoot);

    assert.equal(structures.length, 1);
    assert.equal(structures[0].locale, 'it');
    assert.equal(structures[0].rootNode.children?.guide?.label, 'Guida');

    const structurePath = path.join(italianMetadataDir, SOURCE_STRUCTURE_FILE_NAME);
    assert.deepEqual(loadStructureDocument(structurePath), structureDocument);
    assert.deepEqual(getStructureRootNode(structureDocument, structurePath), structureDocument.tree?.docs);
  } finally {
    fs.rmSync(tempRoot, { recursive: true, force: true });
  }
});

test('assertUniqueTranslatedTargets detects colliding translated targets', () => {
  assert.doesNotThrow(() =>
    assertUniqueTranslatedTargets('it', [
      {
        sourcePath: 'docs/guide/README.md',
        targetRelativePath: 'Guida/Panoramica.md'
      },
      {
        sourcePath: 'docs/index.md',
        targetRelativePath: 'Benvenuto.md'
      }
    ])
  );

  assert.throws(
    () =>
      assertUniqueTranslatedTargets('it', [
        {
          sourcePath: 'docs/guide/README.md',
          targetRelativePath: 'Guida/Panoramica.md'
        },
        {
          sourcePath: 'docs/guide/faq.md',
          targetRelativePath: 'Guida/Panoramica.md'
        }
      ]),
    /Conflict in locale it/
  );
});