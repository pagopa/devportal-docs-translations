# devportal-docs-translations
This repository contains the translations of the developer portal documentation

## Translation workflow

The `get_translations_from_crowdin` workflow now performs a single Crowdin download, renames the translated folders and files in place using the localized docs structure, and then mirrors the matching `.gitbook` asset folders from the source docs repository into the localized tree:

1. `npm run parse_workflow_input` reads the workflow input and emits the normalized requested paths for the downstream steps.
2. `npm run generate_crowdin_config` reads the normalized requested paths and produces a `crowdin.yml` that downloads, in one shot:
   - the localized `docs-structure.json` into `docs/%locale%/_meta/docs-structure.json` from the docs-relative translation path `%locale%/_meta/docs-structure.json`;
   - every requested markdown file into `docs/%locale%/<source-relative-path>` from the docs-relative translation path `%locale%/<source-relative-path>`;
   - every requested partial docs path into `docs/%locale%/<requested-relative-path>/**/*.md` from the docs-relative translation path `%locale%/<requested-relative-path>/**/*.md`.
3. The `crowdin/github-action@v2` step downloads translations once, with no PR creation and no localization branch.
4. `npm run rename_translated_files_and_folders` reads each `docs/<locale>/_meta/docs-structure.json` and renames folders/files inside `docs/<locale>/` to match the localized labels. File extensions are preserved when the localized label omits them.
5. `npm run translate_links` rewrites GitBook content-ref blocks and standard markdown links so they point to the renamed localized markdown targets.
6. `npm run build_gitbook_asset_manifest` inspects the requested source paths together with the markdown files that were actually downloaded for each locale and computes which source `.gitbook` directories must be fetched.
7. The workflow sparsely clones the configured source docs repository, fetches only those `.gitbook` directories, and `npm run copy_gitbook_assets` mirrors them into `docs/<locale>/.../.gitbook` so the translated markdown keeps its relative asset links.
8. `peter-evans/create-pull-request` opens a PR on the `l10n_crowdin_translations` branch with the renamed translations and localized `.gitbook` assets.

The workflow input `directories` accepts a comma-separated list of requested docs paths. For backward compatibility, it also accepts an array of paths. Each entry can be either:

- an exact markdown file path under `docs/`;
- a partial docs-relative path, that will expand in all the markdown file paths in the folder `crowdin.yml`.

Examples:

```text
docs/guide/README.md, /product-name/guide-name/1.0, /soluzioni/nome-soluzione
```

This produces Crowdin entries like:

```yaml
base_path: docs
files:
   - source: ../docs-structure.json
      translation: '%locale%/_meta/docs-structure.json'
   - source: guide/README.md
      translation: '%locale%/guide/README.md'
   - source: product-name/guide-name/1.0/**/*.md
      translation: '%locale%/product-name/guide-name/1.0/**/*.md'
   - source: soluzioni/nome-soluzione/**/*.md
      translation: '%locale%/soluzioni/nome-soluzione/**/*.md'
```

## GitBook asset sync

The workflow keeps the source docs repository fixed in [.github/workflows/getTranslations.yml](.github/workflows/getTranslations.yml) through these job-level environment variables:

- `SOURCE_DOCS_REPOSITORY`: set the placeholder value to the actual `owner/repo` of the source docs repository.
- `SOURCE_DOCS_REF`: the branch or tag to fetch from the source docs repository. It defaults to `main` in the workflow.
- `SOURCE_DOCS_ROOT`: the docs root inside the source repository. It defaults to `docs`.

The fetch stage uses the built-in workflow token. If the source repository is private and that token cannot read it, replace the `SOURCE_DOCS_TOKEN` expression in the workflow with a PAT-backed secret that has read access to the source repository.

Asset selection follows these rules:

- A requested markdown file copies only the direct `.gitbook` folder from its parent source directory, and only if that translated markdown file was actually downloaded.
- A requested partial docs root copies `.gitbook` folders only for source directories that actually produced translated markdown in that locale, plus the ancestor directories needed to preserve relative asset links inside the requested root.
- Missing `.gitbook` folders in the source repository are skipped without failing the copy stage.

The rename step does not clean stale translated paths when a label changes between runs. It only renames the entries currently described in the localized structure JSON, skipping anything that is not present on disk.
