import { expect } from '@jest/globals';
import { Reading, Transforming } from '../lib/streams';

describe('Streams testing', () => {
  test('Reading stream instanceof', () => {
    const readStream = new Reading("input.txt");

    expect(readStream).toBeInstanceOf(Reading);
  });
  test('Transform stream instanceof', () => {
    const transformStream = new Transforming("C1");

    expect(transformStream).toBeInstanceOf(Transforming);
  });
});