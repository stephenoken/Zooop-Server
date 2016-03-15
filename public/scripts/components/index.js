const angular = require("angular");
const ZooopComponents = angular.module('ZooopComponents',[]);

const app = require("./app");
const home = require("./home");
const advertisement = require("./advertisement");
const uploadCatalogue = require('./uploadCatalogue');
const createAd = require('./createAd');
const myAds = require('./myAds');

ZooopComponents.component('app',app);
ZooopComponents.component('home',home);
ZooopComponents.component('advertisement',advertisement);
ZooopComponents.component('uploadCatalogue', uploadCatalogue);
ZooopComponents.component('createAd', createAd);
ZooopComponents.component('myAds', myAds);
module.exports = ZooopComponents;
