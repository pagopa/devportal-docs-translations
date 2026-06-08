import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { test } from '@jest/globals';

import { pruneLocaleEntries } from '../src/pruneRemovedTranslatedPaths';
import {
  collectPrunableStructureEntries,
  type StructureNode,
  type TranslatedStructureEntry
} from '../src/translationStructure';

function createPreviousRootNode(): StructureNode {
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

function createCurrentRootNode(): StructureNode {
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

function createTempLocaleRoot(): { tempRoot: string; localeRoot: string } {
  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'prune-translated-paths-'));
  const localeRoot = path.join(tempRoot, 'docs', 'it');

  fs.mkdirSync(localeRoot, { recursive: true });

  return { tempRoot, localeRoot };
}

function writeFile(filePath: string, content = '') {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');
}

test('pruneLocaleEntries removes a retargeted translated directory subtree', () => {
  const { tempRoot, localeRoot } = createTempLocaleRoot();

  try {
    writeFile(path.join(localeRoot, 'Guida', 'Panoramica.md'), '# Overview');
    writeFile(path.join(localeRoot, 'Guida', 'Domande-Frequenti.md'), '# FAQ');
    writeFile(path.join(localeRoot, 'Benvenuto.md'), '# Home');

    const summary = pruneLocaleEntries(
      localeRoot,
      collectPrunableStructureEntries(createPreviousRootNode(), createCurrentRootNode())
    );

    assert.deepEqual(summary, {
      directoriesRemoved: 1,
      filesRemoved: 0,
      skippedEntries: 0
    });
    assert.equal(fs.existsSync(path.join(localeRoot, 'Guida')), false);
    assert.equal(fs.existsSync(path.join(localeRoot, 'Benvenuto.md')), true);
  } finally {
    fs.rmSync(tempRoot, { recursive: true, force: true });
  }
});

test('pruneLocaleEntries removes empty parent directories without deleting the locale root', () => {
  const { tempRoot, localeRoot } = createTempLocaleRoot();

  try {
    writeFile(path.join(localeRoot, 'Guida', 'Sezione', 'Dettagli.md'), '# Details');

    const summary = pruneLocaleEntries(localeRoot, [
      {
        sourcePath: 'docs/guide/section/details.md',
        sourceRelativePath: 'guide/section/details.md',
        targetRelativePath: 'Guida/Sezione/Dettagli.md',
        directory: false,
        depth: 3
      } satisfies TranslatedStructureEntry
    ]);

    assert.deepEqual(summary, {
      directoriesRemoved: 0,
      filesRemoved: 1,
      skippedEntries: 0
    });
    assert.equal(fs.existsSync(path.join(localeRoot, 'Guida')), false);
    assert.equal(fs.existsSync(localeRoot), true);
  } finally {
    fs.rmSync(tempRoot, { recursive: true, force: true });
  }
});

test('pruneLocaleEntries is idempotent when stale paths were already removed', () => {
  const { tempRoot, localeRoot } = createTempLocaleRoot();
  const staleEntries: TranslatedStructureEntry[] = [
    {
      sourcePath: 'docs/guide',
      sourceRelativePath: 'guide',
      targetRelativePath: 'Guida',
      directory: true,
      depth: 1
    },
    {
      sourcePath: 'docs/index.md',
      sourceRelativePath: 'index.md',
      targetRelativePath: 'Benvenuto.md',
      directory: false,
      depth: 1
    }
  ];

  try {
    const firstRunSummary = pruneLocaleEntries(localeRoot, staleEntries);
    const secondRunSummary = pruneLocaleEntries(localeRoot, staleEntries);

    assert.deepEqual(firstRunSummary, {
      directoriesRemoved: 0,
      filesRemoved: 0,
      skippedEntries: 2
    });
    assert.deepEqual(secondRunSummary, firstRunSummary);
    assert.equal(fs.existsSync(localeRoot), true);
  } finally {
    fs.rmSync(tempRoot, { recursive: true, force: true });
  }
});