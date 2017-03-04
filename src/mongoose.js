const mongoose = require('mongoose');

mongoose.Promise = require('q').Promise;

const config = require('./config');
mongoose.connect(config.MONGO_URI);

module.exports = mongoose;
