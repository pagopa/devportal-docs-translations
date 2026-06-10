import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { test } from '@jest/globals';

import {
  METADATA_DIRECTORY,
  SOURCE_STRUCTURE_FILE_NAME,
  discoverLocalizedStructures,
  type StructureDocument,
  type StructureNode
} from '../src/translationStructure';
import { translateContentRefsInLocale } from '../src/translateContentRefs';

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
          'faq.md': {
            label: 'Domande Frequenti',
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
      }
    }
  };
}

function createLocalizedDocsFixture(rootNode: StructureNode) {
  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'translate-content-refs-'));
  const docsRoot = path.join(tempRoot, 'docs');
  const metadataDirectory = path.join(docsRoot, 'it', METADATA_DIRECTORY);
  const structureDocument: StructureDocument = {
    tree: {
      docs: rootNode
    }
  };

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

test('translateContentRefsInLocale rewrites content-ref targets and plain markdown links', () => {
  const { tempRoot, docsRoot } = createLocalizedDocsFixture(createLocalizedRootNode());

  try {
    const readmePath = path.join(docsRoot, 'it', 'Guida', 'Panoramica.md');
    const faqPath = path.join(docsRoot, 'it', 'Guida', 'Domande-Frequenti.md');

    fs.mkdirSync(path.dirname(readmePath), { recursive: true });
    fs.writeFileSync(
      readmePath,
      [
        'Intro',
        '{% content-ref url="faq.md" %}',
        '[faq.md](faq.md)',
        '{% endcontent-ref %}',
        '',
        '[plain](faq.md)',
        'See the [FAQ section](faq.md#section) for details.',
        '[external](https://example.com/faq.md)',
        '[anchor](#intro)',
        '![diagram](diagram.png)'
      ].join('\n'),
      'utf8'
    );
    fs.writeFileSync(faqPath, 'FAQ', 'utf8');

    const [structure] = discoverLocalizedStructures(docsRoot);
    const warnings: string[] = [];
    const result = translateContentRefsInLocale(
      docsRoot,
      structure.locale,
      structure.rootNode,
      (message) => warnings.push(message)
    );

    assert.deepEqual(warnings, []);
    assert.equal(result.updatedFiles, 1);
    assert.equal(result.updatedLinks, 3);
    assert.equal(
      fs.readFileSync(readmePath, 'utf8'),
      [
        'Intro',
        '{% content-ref url="Domande-Frequenti.md" %}',
        '[faq.md](Domande-Frequenti.md)',
        '{% endcontent-ref %}',
        '',
        '[plain](Domande-Frequenti.md)',
        'See the [FAQ section](Domande-Frequenti.md#section) for details.',
        '[external](https://example.com/faq.md)',
        '[anchor](#intro)',
        '![diagram](diagram.png)'
      ].join('\n')
    );
  } finally {
    fs.rmSync(tempRoot, { recursive: true, force: true });
  }
});

test('translateContentRefsInLocale resolves parent-relative content-ref targets from source paths', () => {
  const { tempRoot, docsRoot } = createLocalizedDocsFixture(createLocalizedRootNode());

  try {
    const readmePath = path.join(docsRoot, 'it', 'Guida', 'Panoramica.md');
    const nestedPath = path.join(docsRoot, 'it', 'Guida', 'Sezione', 'Dettagli.md');

    fs.mkdirSync(path.dirname(nestedPath), { recursive: true });
    fs.writeFileSync(readmePath, 'Overview', 'utf8');
    fs.writeFileSync(
      nestedPath,
      [
        '{% content-ref url="../README.md" %}',
        '[README.md](../README.md)',
        '{% endcontent-ref %}'
      ].join('\n'),
      'utf8'
    );

    const [structure] = discoverLocalizedStructures(docsRoot);
    const result = translateContentRefsInLocale(docsRoot, structure.locale, structure.rootNode);

    assert.equal(result.updatedFiles, 1);
    assert.equal(result.updatedLinks, 1);
    assert.equal(
      fs.readFileSync(nestedPath, 'utf8'),
      [
        '{% content-ref url="../Panoramica.md" %}',
        '[README.md](../Panoramica.md)',
        '{% endcontent-ref %}'
      ].join('\n')
    );
  } finally {
    fs.rmSync(tempRoot, { recursive: true, force: true });
  }
});

test('translateContentRefsInLocale warns and preserves unresolved content-ref blocks', () => {
  const { tempRoot, docsRoot } = createLocalizedDocsFixture(createLocalizedRootNode());

  try {
    const readmePath = path.join(docsRoot, 'it', 'Guida', 'Panoramica.md');
    const originalContent = [
      '{% content-ref url="faq.md" %}',
      '[faq.md](faq.md)',
      '{% endcontent-ref %}'
    ].join('\n');

    fs.mkdirSync(path.dirname(readmePath), { recursive: true });
    fs.writeFileSync(readmePath, originalContent, 'utf8');

    const [structure] = discoverLocalizedStructures(docsRoot);
    const warnings: string[] = [];
    const result = translateContentRefsInLocale(
      docsRoot,
      structure.locale,
      structure.rootNode,
      (message) => warnings.push(message)
    );

    assert.equal(result.updatedFiles, 0);
    assert.equal(result.updatedLinks, 0);
    assert.equal(warnings.length, 1);
    assert.match(warnings[0], /was not downloaded/);
    assert.equal(fs.readFileSync(readmePath, 'utf8'), originalContent);
  } finally {
    fs.rmSync(tempRoot, { recursive: true, force: true });
  }
});