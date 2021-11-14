import fs from 'fs';
import { Readable, Writable } from 'stream';

import options from './lib/getProps.mjs';
const {errorArg, config, input, output} = options;

import { checkConfig } from './lib/checkConfig.mjs';

if (errorArg) {
  console.error('Error message: ' + errorArg);
  process.exit(1);
}

if (!config) {
  console.error('Need "-c" argument!');
  process.exit(1);
}

const {configError, configArr} = checkConfig(config);


console.log(config, input, output, errorArg);
console.log(configError, configArr)