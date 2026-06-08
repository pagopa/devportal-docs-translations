import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { test } from '@jest/globals';

import { renameLocaleEntries } from '../src/renameTranslatedFilesAndFolders';
import {
  collectTranslatedStructureEntries,
  type StructureNode
} from '../src/translationStructure';

function createNestedRenameRootNode(): StructureNode {
  return {
    label: 'docs',
    directory: true,
    children: {
      'app-io': {
        label: 'app-io',
        directory: true,
        children: {
          'manuale-gruppi-io': {
            label: 'io-groups-manual',
            directory: true,
            children: {
              '1.0': {
                label: '1.0',
                directory: true,
                children: {
                  'funzionalita-per-utente-amministratore': {
                    label: 'admin-features',
                    directory: true,
                    children: {
                      'README.md': {
                        label: 'overview',
                        directory: false
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  };
}

function createTempLocaleRoot(): { tempRoot: string; localeRoot: string } {
  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'rename-translated-paths-'));
  const localeRoot = path.join(tempRoot, 'docs', 'en-US');

  fs.mkdirSync(localeRoot, { recursive: true });

  return { tempRoot, localeRoot };
}

function writeFile(filePath: string, content = '') {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');
}

test('renameLocaleEntries renames nested directories before ancestor directories and then files', () => {
  const { tempRoot, localeRoot } = createTempLocaleRoot();

  try {
    const sourceFilePath = path.join(
      localeRoot,
      'app-io',
      'manuale-gruppi-io',
      '1.0',
      'funzionalita-per-utente-amministratore',
      'README.md'
    );

    writeFile(sourceFilePath, '# Overview');

    renameLocaleEntries(localeRoot, collectTranslatedStructureEntries(createNestedRenameRootNode()));

    assert.equal(fs.existsSync(sourceFilePath), false);
    assert.equal(
      fs.existsSync(
        path.join(
          localeRoot,
          'app-io',
          'io-groups-manual',
          '1.0',
          'admin-features',
          'overview.md'
        )
      ),
      true
    );
    assert.equal(fs.existsSync(path.join(localeRoot, 'app-io', 'manuale-gruppi-io')), false);
  } finally {
    fs.rmSync(tempRoot, { recursive: true, force: true });
  }
});