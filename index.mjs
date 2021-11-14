
import options from './lib/getProps.mjs';

const {config, input, output, error} = options;

if (error) {
  console.error('Error message: ' + error);
  process.exit(1);
} else {
  console.log(config, input, output, error);
}