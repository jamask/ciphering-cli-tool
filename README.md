# ciphering-cli-tool

## How to install and start

- Install [Node.js](https://nodejs.org/en/) (Node.js 16 and above required)
- Clone this repository: `https://github.com/jamask/ciphering-cli-tool `
- Run `npm install` in command line
- Go to branch `solve`
- node index.mjs {options}

## CLI tool should accept 3 options (short alias and full name):

1.  **-c, --config**: (required) config for ciphers
Config is a string with pattern `{XY(-)}n`, where:
  * `X` is a cipher mark:
    * `C` is for Caesar cipher (with shift 1)
    * `A` is for Atbash cipher
    * `R` is for ROT-8 cipher
  * `Y` is flag of encoding or decoding (mandatory for Caesar cipher and ROT-8 cipher and should not be passed Atbash cipher)
    * `1` is for encoding
    * `0` is for decoding
2.  **-i, --input**: (optional) a path to input file
3.  **-o, --output**: (optional) a path to output file

## Usage example:

```bash
$ node index.mjs -c "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"
```

```bash
$ node index.mjs -c "C1-C0-A-R1-R0-A-R0-R0-C1-A" -i "./input.txt" -o "./output.txt"
```

```bash
$ node index.mjs -c "A-A-A-R1-R0-R0-R0-C1-C1-A" -i "./input.txt" -o "./output.txt"
```