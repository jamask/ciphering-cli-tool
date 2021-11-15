const options = {
  'errorArg': null,
};

if (process.args < 3) {
  options['errorArg'] = 'No arguments';
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
          if (option.startsWith('"')) {
            option = option.slice(1);
          }
          if (option.endsWith('"')) {
            option = option.slice(0, -1);
          }
          if (option === '') {
            option = null;
          }
          options[lastOption] = option;
        } else {
          options['errorArg'] = 'Arguments error';
        }
        break;
    }
  }
}

export default options;