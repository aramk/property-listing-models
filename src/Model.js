const _ = require('lodash');
const shortid = require('shortid');

class Model {

  constructor(args, fields=[]) {
    fields.push('id');
    _.extend(this, _.pick(args, fields));

    if (this.id == null) this.id = shortid.generate();
    // assert(typeof this.id === 'string');
  }

}

module.exports = Model;
