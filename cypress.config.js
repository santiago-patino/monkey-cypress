//const monkeyconfig = require('./monkey-config.json');
const monkeyconfig = require('./smart-monkey-config.json');

module.exports = {
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    ...monkeyconfig
  },
}
