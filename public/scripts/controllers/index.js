const angular = require("angular");
const ZooopController = angular.module('ZooopController',[]);

const navbarController = require('./ui/navbar_layout');
const createAdController = require('./create_ad');

ZooopController.controller(navbarController.name,navbarController.controller);
ZooopController.controller(createAdController.name,createAdController.controller);
module.exports = ZooopController;
