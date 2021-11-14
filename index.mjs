import fs from 'fs';
import { pipeline } from 'stream';

import { Read, Write } from './lib/streams.mjs';

import options from './lib/getProps.mjs';
const {errorArg, config, input, output} = options;

import { checkConfig, checkExistFile } from './lib/check.mjs';

if (errorArg) {
  process.stderr.write('Error message: ', errorArg);
  process.exit(1);
}

if (!config) {
  process.stderr.write('Error message: Need "-c" argument!');
  process.exit(1);
}

if (!checkConfig(config)) {
  process.stderr.write('Error message: wrong config argument!');
  process.exit(1);
}

let readStream;
if (input) {
  if (!checkExistFile(input)) {
    process.stderr.write('Error message: Input file does not exist!');
    process.exit(1);
  }
  readStream = new Read(input);
} else {
  readStream = process.stdin;
}

let writeStream;
if (output) {
  if (!checkExistFile(output)) {
    process.stderr.write('Error message: Output file does not exist!');
    process.exit(1);
  }
  writeStream = new Write(output);
} else {
  writeStream = process.stdout;
}

pipeline(
  readStream,
  writeStream,
  (err) => {
    if (err) process.stderr.write('Error message: ', err);
  }
)



console.log(config, input, output, errorArg);