const angular = require("angular");
const ZooopController = angular.module('ZooopController',[]);

const navbarController = require('./ui/navbar_layout');
const createAdController = require('./create_ad');
const showAdsCtrl = require('./my_ads');
const upload = require('./upload_catalogue');

ZooopController.controller(navbarController.name,navbarController.controller);
ZooopController.controller(createAdController.name,createAdController.controller);
ZooopController.controller(showAdsCtrl.name,showAdsCtrl.controller);
ZooopController.controller(upload.name,upload.controller);
module.exports = ZooopController;
