
const options = {};

if (process.args < 3) {
  throw new Error('Need options!')
}

let lastOption = '';

for (let i = 2; i < process.argv.length; i++) {
  let option = process.argv[i];
  switch (option) {
    case '-c':
      if ('-c' in options) {
        throw new Error('two "-c" option')
      }
      options['-c'] = null;
      lastOption = '-c';
      break;
  
    case '-i':
    case '--input':
      if ('-i' in options) {
        throw new Error('two "-i" option')
      }
      options['-i'] = null;
      lastOption = '-i';
      break;

    case '-o':
    case '--output':
      if ('-o' in options) {
        throw new Error('two "-o" option')
      }
      options['-o'] = null;
      lastOption = '-o';
      break;

    default:
      if (!options[lastOption] && lastOption) {
        options[lastOption] = option;
      } else {
        throw new Error('second option not allowed');
      }
      break;
  }
}

if (!options['-c']) {
  throw new Error('Need "-c" option!')
}

console.log(options);