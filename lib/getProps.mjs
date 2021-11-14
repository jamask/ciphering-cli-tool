const options = {
  'errorArg': null,
};

if (process.args < 3) {
  options['errorArg'] = 'Arguments not enough';
} else {

  let lastOption = '';

  for (let i = 2; i < process.argv.length; i++) {
    const option = process.argv[i];
    switch (option) {
      case '-c':
        if ('config' in options) {
          options['errorArg'] = 'Two "-c" arguments';
        }
        options['config'] = null;
        lastOption = 'config';
        break;
    
      case '-i':
      case '--input':
        if ('input' in options) {
          options['errorArg'] = 'Two "-i" arguments';
        }
        options['input'] = null;
        lastOption = 'input';
        break;

      case '-o':
      case '--output':
        if ('output' in options) {
          options['errorArg'] = 'Two "-o" arguments';
        }
        options['output'] = null;
        lastOption = 'output';
        break;

      default:
        if (!options[lastOption] && lastOption) {
          options[lastOption] = option;
        } else {
          options['errorArg'] = 'Arguments error';
        }
        break;
    }
  }
}

export default options;
//export default options['c'] as config, options['i'] as input, options['o'] as output;