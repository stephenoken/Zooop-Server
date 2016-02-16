'use strict';

const indexRoutes = require('./../app/routes/index');
const apiRoutes = require('./../app/routes/api');
const authRoutes = require('./../app/routes/authentication');

module.exports.init = (app)=>{
  app.use('/', indexRoutes);
  app.use('/api',apiRoutes);
  app.use('/',authRoutes);
};
