const angular = require("angular");
const ZooopController = angular.module('ZooopController',[]);

const navbarController = require('./ui/navbar_layout');

ZooopController.controller(navbarController.name,navbarController.controller);
module.exports = ZooopController;
