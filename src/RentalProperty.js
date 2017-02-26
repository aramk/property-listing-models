const _ = require('lodash');

const Model = require('./Model');

class RentalProperty extends Model {

  constructor(args) {
    super(args, ['title', 'description', 'date']);
  }

}

module.exports = RentalProperty;
