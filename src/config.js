const environment = require('envobj');

module.exports = environment({
  MONGO_URI: 'mongodb://localhost/property-listing'
});
