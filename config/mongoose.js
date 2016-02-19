'use strict';

const mongoose = require('mongoose');
const config = require('./index');

function init(app) {
  console.log(`MongoDB: Connecting to ${config.mongodb.uri}`);
  mongoose.connect(config.mongodb.uri);

  // If the Node process ends, cleanup existing connections
  process.on('SIGINT', cleanup);
  process.on('SIGTERM', cleanup);
  process.on('SIGHUP', cleanup);

  if (app) {
    app.set('mongoose',mongoose);
  }

  return mongoose;
}

function cleanup() {
  mongoose.connection.close(function () {
    process.exit(0);
  });
}

module.exports.init = init;
