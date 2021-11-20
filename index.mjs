import fs from 'fs';
import { pipeline } from 'stream';

import { Reading, Transforming } from './lib/streams.mjs';

import getOptions from './lib/getProps.mjs';
const {errorArg, config, input, output} = getOptions(process.argv.slice(2));

try {
  if (errorArg) {
    console.error('Error message: ', errorArg);
    process.exit(1);
  }
} catch (err) {
  process.stderr.write('Error message: Arguments error');
  process.exit(1);
}

import { checkConfig, checkExistFile } from './lib/check.mjs';

if (!config) {
  process.stderr.write('Error message: Need "-c" argument!');
  process.exit(1);
}

if (!checkConfig(config)) {
  process.stderr.write('Error message: Wrong config argument!');
  process.exit(1);
}

let readStream;
try {
  if (input) {
    if (!checkExistFile(input)) {
      process.stderr.write('Error message: Input file does not exist!');
      process.exit(1);
    }
    readStream = new Reading(input); //fs.createReadStream(input);
  } else {
    readStream = process.stdin;
  }
} catch(err) {
  process.stderr.write('Error message: ', err.message);
  process.exit(1);
}

let writeStream;
try {
  if (output) {
    if (!checkExistFile(output)) {
      process.stderr.write('Error message: Output file does not exist!');
      process.exit(1);
    }
    writeStream = fs.createWriteStream(output, {flags: 'a'});
  } else {
    writeStream = process.stdout;
  }
} catch(err) {
  process.stderr.write('Error message: ', err.message);
  process.exit(1);
}

let TransformStream = [];
const configArr = config.split('-');
try {
  configArr.forEach((val) => {
    TransformStream.push(new Transforming(val));
  })
} catch (err) {
  process.stderr.write('Error message: ', err.message);
  process.exit(1);
}

pipeline(
  readStream,
  ...TransformStream,
  writeStream,
  (err) => {
    if (err) process.stderr.write('Error message: ', err);
  }
)