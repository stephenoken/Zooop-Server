const angular = require('angular');
const ZooopDirective = angular.module('ZooopDirective',[]);

const menuNav = require('./menuNav');

ZooopDirective.directive(menuNav.name,menuNav.directive);
