import * as fs from 'fs';
import * as yaml from 'js-yaml';
import * as path from 'path';

const CONFIG_FILE = 'crowdin.yml';
const DOCS_DIR = 'docs/8jU9vbiLbvbIk0DuJMvd';

interface CrowdinFileEntry {
  source: string;
  translation: string;
}

interface CrowdinConfig {
  base_path?: string;
  preserve_hierarchy?: boolean;
  files: CrowdinFileEntry[];
  [key: string]: any;
}

function generateConfig() {
  // 1. RECUPERO INPUT DALL'AMBIENTE
  const inputJson = process.env.FILES_LIST;

  if (!inputJson) {
    console.error("Error: the environment variable FILES_LIST is empty.");
    process.exit(1);
  }

  let filesPaths: string[] = [];
  try {
    filesPaths = JSON.parse(inputJson);
    console.log(`Received ${filesPaths.length} file paths in input.`);
  } catch (e) {
    console.error("Error parsing json input", e);
    process.exit(1);
  }

  console.log("Creating empty mock files...");

  filesPaths.forEach((filePath) => {
    try {
      const directory = path.dirname(filePath);

      if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
      }

      fs.writeFileSync(filePath, '');

    } catch (err) {
      console.error(`There was an error creating file ${filePath}:`, err);
    }
  });
  console.log("Files creation completed.");

  const crowdinFiles: CrowdinFileEntry[] = filesPaths.map((sourcePath) => {
    const translationPath = sourcePath.replace(`${DOCS_DIR}/`, `${DOCS_DIR}/%locale%/`);

    return {
      source: sourcePath,
      translation: translationPath
    };
  });

  let otherConfigProps: any = {};
  if (fs.existsSync(CONFIG_FILE)) {
    try {
      const existingContent = fs.readFileSync(CONFIG_FILE, 'utf8');
      const loadedConfig = yaml.load(existingContent) as CrowdinConfig;
      if (loadedConfig) {
        const { files, base_path, preserve_hierarchy, ...rest } = loadedConfig;
        otherConfigProps = rest;
      }
    } catch (e) {
      console.warn('Impossible to load existing config, proceeding with defaults.', e);
    }
  }

  const filesJsonString = JSON.stringify(crowdinFiles, null, 4);

  let finalOutput = '';
  finalOutput += `"base_path": "."\n\n`;
  finalOutput += `"preserve_hierarchy": true\n\n`;

  for (const key in otherConfigProps) {
    const val = JSON.stringify(otherConfigProps[key]);
    finalOutput += `"${key}": ${val}\n\n`;
  }

  finalOutput += `"files": ${filesJsonString}`;

  // 5. SCRITTURA FILE CONFIG
  try {
    fs.writeFileSync(CONFIG_FILE, finalOutput, 'utf8');
    console.log(`File ${CONFIG_FILE} generated/updated successfully.`);
  } catch (e) {
    console.error(`Error generating ${CONFIG_FILE}`, e);
    process.exit(1);
  }
}

generateConfig();