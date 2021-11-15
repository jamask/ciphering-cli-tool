import fs from 'fs';

function checkConfig(config) {
  const allowParams = ['C1', 'C0', 'A', 'R1', 'R0'];
  const configArr = config.split('-');
  let configError = true;

  configArr.forEach((val) => {
    if (!allowParams.includes(val)) {
      configError = false;
    }
  })

  return configError;
}

function checkExistFile(file) {
  return fs.existsSync(file);
}

export {checkConfig, checkExistFile};