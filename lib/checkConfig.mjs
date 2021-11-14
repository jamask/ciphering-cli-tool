export function checkConfig(config) {
  const allowParams = ['C1', 'C0', 'A', 'R1', 'R0'];
  const configArr = config.split('-');
  let configError = 0;

  configArr.forEach((val) => {
    if (!allowParams.includes(val)) {
      configError = 1;
    }
  })

  return {configError, configArr};
}