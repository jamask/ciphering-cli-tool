import { expect } from '@jest/globals';
import getOptions from '../lib/getProps';

describe('Options verification ', () => {
  test('If the options is missing, an error is displayed ', () => {
    const { errorArg } = getOptions([]);
  
    expect(errorArg).toBe('No arguments');
  });
  test('User passes config cli argument twice', () => {
    const userInput = '-c C1-C1-A-R0 -c C0'.split(' ');
    const { errorArg } = getOptions(userInput);

    expect(errorArg).toBe('Two "-c" arguments');
  });
  test('User passes input cli argument twice', () => {
    const userInput = '-c C1-C1-A-R0 -i "input.txt" --input "input2.txt"'.split(' ');
    const { errorArg } = getOptions(userInput);

    expect(errorArg).toBe('Two "-i" arguments');
  });
  test('User passes output cli argument twice', () => {
    const userInput = '-c C1-C1-A-R0 -o "output.txt" --output "output2.txt"'.split(' ');
    const { errorArg } = getOptions(userInput);

    expect(errorArg).toBe('Two "-o" arguments');
  });
  test('User doesn\'t pass -c or --config argument', () => {
    const userInput = '-i "input.txt" -o "output.txt"'.split(' ');
    const { config } = getOptions(userInput);

    expect(config).toBeFalsy;
  });
})

