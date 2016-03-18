'use strict';

const indexRoutes = require('./../app/routes/index');
const apiRoutes = require('./../app/routes/api');
const authRoutes = require('./../app/routes/authentication');
const retailerProdRoutes = require('./../app/routes/retailer_product');
const advertismentRoutes = require("./../app/routes/advertisement");

module.exports.init = (app)=>{
  app.use('/', indexRoutes);
  app.use('/api',apiRoutes);
  app.use('/',authRoutes);
  app.use('/retailer-product',retailerProdRoutes);
  app.use('/adverts-api',advertismentRoutes);
};
