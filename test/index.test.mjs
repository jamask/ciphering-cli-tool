import { spawn } from 'child_process';
import { expect } from '@jest/globals';

const innerOptions = ['index.mjs', './input.txt', '-c'];

describe('Examples', () => {
  test('-c "C1-C1-R0-A"', () => {
    const config = ['C1-C1-R0-A'];
    const ls = spawn('node', [...innerOptions, ...config]);

    ls.stdout.on('data', (data) => {
      expect(data).toBe('Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!');
    });
  });
  test('-c "C1-C0-A-R1-R0-A-R0-R0-C1-A"', () => {
    const config = ['C1-C0-A-R1-R0-A-R0-R0-C1-A'];
    const ls = spawn('node', [...innerOptions, ...config]);

    ls.stdout.on('data', (data) => {
      expect(data).toBe('Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!');
    });
  });
  test('-c "A-A-A-R1-R0-R0-R0-C1-C1-A"', () => {
    const config = ['A-A-A-R1-R0-R0-R0-C1-C1-A'];
    const ls = spawn('node', [...innerOptions, ...config]);

    ls.stdout.on('data', (data) => {
      expect(data).toBe('Hvwg wg gsqfsh. Asggous opcih "_" gmapcz!');
    });
  });
  test('-c "C1-R1-C0-C0-A-R0-R1-R1-A-C1"', () => {
    const config = ['C1-R1-C0-C0-A-R0-R1-R1-A-C1'];
    const ls = spawn('node', [...innerOptions, ...config]);

    ls.stdout.on('data', (data) => {
      expect(data).toBe('This is secret. Message about "_" symbol!');
    });
  });
})
