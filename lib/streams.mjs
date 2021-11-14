import { Readable, Writable, Transform } from 'stream';

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

class Transforming extends Transform {

  constructor(opt) {
    super();
    this.opt = opt;
  }
  _transform(chunk, enc, cb){
    const loAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const upAlphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const word = chunk.toString().trimStart();
    let newWord = '';

    switch (this.opt) {
      case 'C1':
        for (let i = 0; i < word.length; i++) {
          if (loAlphabet.includes(word[i])) {
            const position = loAlphabet.indexOf(word[i]);
            newWord += (position == 25) ? loAlphabet[0] : loAlphabet[position + 1];
          } else if (upAlphabet.includes(word[i])) {
            const position = upAlphabet.indexOf(word[i]);
            newWord += (position == 25) ? upAlphabet[0] : upAlphabet[position + 1];
          } else {
            newWord += word[i];
          }
            

        }
        break;
      case 'C0':
        for (let i = 0; i < word.length; i++) {
          if (loAlphabet.includes(word[i])) {
            const position = loAlphabet.indexOf(word[i]);
            newWord += (position == 0) ? loAlphabet[25] : loAlphabet[position - 1];
          } else if (upAlphabet.includes(word[i])) {
            const position = upAlphabet.indexOf(word[i]);
            newWord += (position == 0) ? upAlphabet[25] : upAlphabet[position - 1];
          } else {
            newWord += word[i];
          }
        }
        break;
      case 'A':
        for (let i = 0; i < word.length; i++) {
          if (loAlphabet.includes(word[i])) {
            const position = loAlphabet.indexOf(word[i]);
            newWord += loAlphabet[25 - position];
          } else if (upAlphabet.includes(word[i])) {
            const position = upAlphabet.indexOf(word[i]);
            newWord += upAlphabet[25 - position];
          } else {
            newWord += word[i];
          }
        }
        break;
      case 'R1':
        for (let i = 0; i < word.length; i++) {
          if (loAlphabet.includes(word[i])) {
            const position = loAlphabet.indexOf(word[i]);
            newWord += loAlphabet[(position + 8) % 25];
          } else if (upAlphabet.includes(word[i])) {
            const position = upAlphabet.indexOf(word[i]);
            newWord += upAlphabet[(position + 8) % 25];
          } else {
            newWord += word[i];
          }
        }
        break;
      case 'R0':
        for (let i = 0; i < word.length; i++) {
          if (loAlphabet.includes(word[i])) {
            const position = loAlphabet.indexOf(word[i]);
            newWord += loAlphabet[(position + 17) % 25];
          } else if (upAlphabet.includes(word[i])) {
            const position = upAlphabet.indexOf(word[i]);
            newWord += upAlphabet[(position + 17) % 25];
          } else {
            newWord += word[i];
          }
        }
        break;
    }
            //console.log(`--${newWord}--`)
    this.push(newWord);
    cb();
  }
}

export {Read, Write, Transforming};