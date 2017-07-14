// Base on the parameter set NODE_ENV the webpack config get build
function buildConfig() {
  const deploy = process.env.NODE_ENV.replace(/\s/g, '');
  if (deploy === 'prod') {
    console.log('\n\tPRODUCTION: TRUE\n\tDEVELOPMENT: FALSE\n');
    return require('./config/prod.js');
  }
  console.log('\n\tPRODUCTION: FALSE\n\tDEVELOPMENT: TRUE\n');
  return require('./config/dev.js');
}

module.exports = buildConfig;
