// Base on the build the main App will be load
if (process.env.NODE_ENV === 'prod') {
  module.exports = require('./Root.prod');
} else {
  module.exports = require('./Root.dev');
}
