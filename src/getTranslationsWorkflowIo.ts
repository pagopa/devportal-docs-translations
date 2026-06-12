/// <reference types="node" />

import * as fs from 'fs';
import * as path from 'path';

import {
  DOCS_DIRECTORY,
  SOURCE_STRUCTURE_FILE_NAME,
  discoverLocalizedStructures,
  type LocalizedStructure
} from './translationStructure';

export function fail(message: string, error?: unknown): never {
  if (error) {
    console.error(message, error);
  } else {
    console.error(message);
  }

  process.exit(1);
}

export function readRequestedPaths(): string[] {
  const inputJson =
    process.env.REQUESTED_PATHS ?? process.env.NORMALIZED_PATHS ?? process.env.DIRECTORIES_LIST;

  if (!inputJson) {
    return [];
  }

  try {
    const parsedPaths = JSON.parse(inputJson);

    if (!Array.isArray(parsedPaths)) {
      throw new Error('The payload must be a JSON array.');
    }

    return [
      ...new Set(
        parsedPaths.map((entry) => {
          if (typeof entry !== 'string') {
            throw new Error('Each requested path item must be a string.');
          }

          return entry.trim();
        })
      )
    ].filter((entry) => entry.length > 0);
  } catch (error) {
    console.error('❌ Error parsing input JSON:', error);
    process.exit(1);
  }
}

export function writeTextFile(filePath: string, content: string) {
  const directoryPath = path.dirname(filePath);

  if (directoryPath !== '.' && !fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true });
  }

  fs.writeFileSync(filePath, content, 'utf8');
}

export function discoverLocalizedStructuresOrFail(docsRoot: string): LocalizedStructure[] {
  const localizedStructures = discoverLocalizedStructures(docsRoot);

  if (localizedStructures.length === 0) {
    fail(`❌ No ${SOURCE_STRUCTURE_FILE_NAME} file found in ${DOCS_DIRECTORY}/*/_meta.`);
  }

  return localizedStructures;
}
