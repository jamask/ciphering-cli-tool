import { expect } from '@jest/globals';
import { Transforming } from '../lib/streams';
import 'regenerator-runtime/runtime'

describe('Streams testing', () => {
  test('Transform stream instanceof', () => {
    const transformStream = new Transforming("C1");

    expect(transformStream).toBeInstanceOf(Transforming);
  });
  test('Transform stream Caesar cipher(C1)', async () => {
    const transformStream = new Transforming("C1");
    transformStream.write('AbCdE');

    await expect(
      new Promise((res, rej) => {
        transformStream.on('data', (chunk) => {
          res(chunk.toString());
        });
      })
    ).resolves.toBe('BcDeF');
  });
  test('Transform stream Caesar cipher(C0)', async () => {
    const transformStream = new Transforming("C0");
    transformStream.write('BcD');

    await expect(
      new Promise((res, rej) => {
        transformStream.on('data', (chunk) => {
          res(chunk.toString());
        });
      })
    ).resolves.toBe('AbC');
  });
  test('Transform stream Atbash cipher', async () => {
    const transformStream = new Transforming("A");
    transformStream.write('AbC');

    await expect(
      new Promise((res, rej) => {
        transformStream.on('data', (chunk) => {
          res(chunk.toString());
        });
      })
    ).resolves.toBe('ZyX');
  });
  test('Transform stream ROT-8 cipher(R1)', async () => {
    const transformStream = new Transforming("R1");
    transformStream.write('AbC');

    await expect(
      new Promise((res, rej) => {
        transformStream.on('data', (chunk) => {
          res(chunk.toString());
        });
      })
    ).resolves.toBe('IjK');
  });
  test('Transform stream ROT-8 cipher(R0)', async () => {
    const transformStream = new Transforming("R0");
    transformStream.write('IjK');

    await expect(
      new Promise((res, rej) => {
        transformStream.on('data', (chunk) => {
          res(chunk.toString());
        });
      })
    ).resolves.toBe('AbC');
  });
  test('Transform stream Caesar cipher(C0) use only the English alphabet', async () => {
    const transformStream = new Transforming("C0");
    transformStream.write('1234567890@-');

    await expect(
      new Promise((res, rej) => {
        transformStream.on('data', (chunk) => {
          res(chunk.toString());
        });
      })
    ).resolves.toBe('1234567890@-');
  });
  test('Transform stream Caesar cipher(C1) use only the English alphabet', async () => {
    const transformStream = new Transforming("C1");
    transformStream.write('1234567890@-');

    await expect(
      new Promise((res, rej) => {
        transformStream.on('data', (chunk) => {
          res(chunk.toString());
        });
      })
    ).resolves.toBe('1234567890@-');
  });
  test('Transform stream Atbash cipher use only the English alphabet', async () => {
    const transformStream = new Transforming("A");
    transformStream.write('1234567890@-');

    await expect(
      new Promise((res, rej) => {
        transformStream.on('data', (chunk) => {
          res(chunk.toString());
        });
      })
    ).resolves.toBe('1234567890@-');
  });
  test('Transform stream ROT-8 cipher(R0) use only the English alphabet', async () => {
    const transformStream = new Transforming("R0");
    transformStream.write('1234567890@-');

    await expect(
      new Promise((res, rej) => {
        transformStream.on('data', (chunk) => {
          res(chunk.toString());
        });
      })
    ).resolves.toBe('1234567890@-');
  });
  test('Transform stream ROT-8 cipher(R1) use only the English alphabet', async () => {
    const transformStream = new Transforming("R1");
    transformStream.write('1234567890@-');

    await expect(
      new Promise((res, rej) => {
        transformStream.on('data', (chunk) => {
          res(chunk.toString());
        });
      })
    ).resolves.toBe('1234567890@-');
  });
});