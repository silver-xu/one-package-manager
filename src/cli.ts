#!/usr/bin/env node

import { validatePackageManager } from '.';
import commander from 'commander';
import chalk from 'chalk';
import figlet from 'figlet';

const program = new commander.Command();

program
  .description('A Cli to enforce the use of either Yarn or NPM as the package manager')
  .option('-Y, --yarn', 'To enforce the use of Yarn as the package manager.')
  .option('-N, --npm', 'To enforce the use of NPM as the package manager.')
  .parse(process.argv);

const option = program.npm ? 'npm' : 'yarn';

try {
  validatePackageManager(option);
} catch (err) {
  console.log(chalk.red(figlet.textSync(err.message, { horizontalLayout: 'full' })));
  process.exit(1);
}
