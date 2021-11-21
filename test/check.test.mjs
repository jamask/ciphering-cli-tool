import { expect } from '@jest/globals';
import { checkConfig, checkExistFile } from '../lib/check';
import getOptions from '../lib/getProps';

describe('Options check ', () => {
  test('User passes -i argument with path that doesn\'t exist or with no read access', () => {
    const userInput = '-c C1-C1-A-R0 -i "input2.txt" -o "output.txt"'.split(' ');
    const { input } = getOptions(userInput);
    const checkedInput = checkExistFile(input);

    expect(checkedInput).toBeFalsy;
  });
  test('User passes -o argument with path to directory that doesn\'t exist or with no read access', () => {
    const userInput = '-c C1-C1-A-R0 -i "input.txt" -o "output.txt"'.split(' ');
    const { output } = getOptions(userInput);
    const checkedOutput = checkExistFile(output);

    expect(checkedOutput).toBeFalsy;
  });
  test('User passes incorrect symbols in argument for --config', () => {
    const userInput = '-c E1 -i "input.txt" -o "output.txt"'.split(' ');
    const { config } = getOptions(userInput);
    const isConfigCorrect = checkConfig(config);

    expect(isConfigCorrect).toBeFalsy;
  });
});