const options = {
  'error': null,
};

if (process.args < 3) {
  options['error'] = 'Arguments not enough';
} else {

  let lastOption = '';

  for (let i = 2; i < process.argv.length; i++) {
    const option = process.argv[i];
    switch (option) {
      case '-c':
        if ('config' in options) {
          options['error'] = 'Two "-c" arguments';
        }
        options['config'] = null;
        lastOption = 'config';
        break;
    
      case '-i':
      case '--input':
        if ('input' in options) {
          options['error'] = 'Two "-i" arguments';
        }
        options['input'] = null;
        lastOption = 'input';
        break;

      case '-o':
      case '--output':
        if ('output' in options) {
          options['error'] = 'Two "-o" arguments';
        }
        options['output'] = null;
        lastOption = 'output';
        break;

      default:
        if (!options[lastOption] && lastOption) {
          options[lastOption] = option;
        } else {
          options['error'] = 'Arguments error';
        }
        break;
    }
  }

  if (!options['config']) {
    options['error'] = 'Need "-c" argument!';
  }
}

export default options;
//export default options['c'] as config, options['i'] as input, options['o'] as output;