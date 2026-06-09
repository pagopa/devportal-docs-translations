/// <reference types="node" />

import * as fs from 'fs';

import { fail } from './getTranslationsWorkflowIo';

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((file) => typeof file === 'string');
}

export function parseRequestedPathsInput(rawInput: string): string[] {
  const trimmedInput = rawInput.trim();

  if (trimmedInput.length === 0) {
    return [];
  }

  if (trimmedInput.startsWith('[')) {
    let parsedInput: unknown;

    try {
      parsedInput = JSON.parse(trimmedInput);
    } catch (error) {
      fail('❌ The requested paths input is not a valid JSON array:', error);
    }

    if (!isStringArray(parsedInput)) {
      fail('❌ The requested paths input must be a JSON array of strings.');
    }

    return parsedInput;
  }

  return trimmedInput.split(/\r?\n|,/);
}

export function normalizeRequestedPathsInput(rawInput: string): string[] {
  const parsedPaths = parseRequestedPathsInput(rawInput);

  return [...new Set(parsedPaths.map((file) => file.trim()))].filter((file) => file.length > 0);
}

const DEFAULT_FULL_DOCS_PATH = '**';

function main() {
  const rawInput =
    process.env.REQUESTED_PATHS_INPUT ?? process.env.DIRECTORIES_INPUT ?? process.env.FILES_INPUT ?? '[]';
  const githubOutputPath = process.env.GITHUB_OUTPUT;

  if (!githubOutputPath) {
    fail('❌ GITHUB_OUTPUT is not defined.');
  }

  const parsedPaths = normalizeRequestedPathsInput(rawInput);
  const normalizedPaths = parsedPaths.length > 0 ? parsedPaths : [DEFAULT_FULL_DOCS_PATH];

  if (parsedPaths.length === 0) {
    console.log(`ℹ️ No requested paths provided; defaulting to the whole docs tree ("${DEFAULT_FULL_DOCS_PATH}").`);
  }
  const outputs = [
    `normalized_paths=${JSON.stringify(normalizedPaths)}`,
    `normalized_files=${JSON.stringify(normalizedPaths)}`,
    `has_paths=${normalizedPaths.length > 0 ? 'true' : 'false'}`,
    `has_files=${normalizedPaths.length > 0 ? 'true' : 'false'}`
  ].join('\n');

  fs.appendFileSync(githubOutputPath, `${outputs}\n`);
  console.log(`📥 Received ${normalizedPaths.length} requested paths to process.`);
}

if (require.main === module) {
  main();
}
