#!/usr/bin/env node

import { validatePackageManager } from '.';

/* eslint-disable @typescript-eslint/no-var-requires */
const packageJson = require(process.cwd() + '/package.json');
/* eslint-enable @typescript-eslint/no-var-requires */

validatePackageManager(packageJson);
