import { expect } from '@jest/globals';
import getOptions from '../lib/getProps';

test('my test', () => {
  const {errorArg, config, input, output} = getOptions([]);

  expect(errorArg).toBe(null);
})