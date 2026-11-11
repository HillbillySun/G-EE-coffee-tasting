#!/usr/bin/env node
import { cpSync, mkdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const usage = `Usage: g-ee-coffee-tasting install [--project]

Install the skill in your Codex user directory. Use --project to install
in the current project instead. Run the same command to update the skill.`;

const [command = 'install', ...options] = process.argv.slice(2);

if ((command === '--help' || command === '-h') && options.length === 0) {
  console.log(usage);
} else if (command !== 'install' || options.length > 1 || (options.length === 1 && options[0] !== '--project')) {
  console.error(usage);
  process.exitCode = 1;
} else {
  const skillName = 'g-ee-coffee-tasting';
  const source = fileURLToPath(new URL(`../.agents/skills/${skillName}`, import.meta.url));
  const root = options[0] === '--project' ? process.cwd() : homedir();
  const destination = join(root, '.agents', 'skills', skillName);

  try {
    if (source !== destination) {
      mkdirSync(dirname(destination), { recursive: true });
      cpSync(source, destination, { recursive: true });
    }
    console.log(`Installed $${skillName} at ${destination}`);
  } catch (error) {
    console.error(`Could not install $${skillName}: ${error.message}`);
    process.exitCode = 1;
  }
}
