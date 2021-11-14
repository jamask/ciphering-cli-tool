import { Readable, Writable } from 'stream';

class Read extends Readable {
  constructor(...args) {
    super(...args);
  }
}

class Write extends Writable {
  constructor(...args) {
    super(...args);
  }
}

export {Read, Write};