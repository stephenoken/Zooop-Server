const angular = require("angular");
const OrganisrComponents = angular.module('ZooopComponents',[]);

const app = require("./app");
const home = require("./home");
const advertisement = require("./advertisement");
const uploadCatalogue = require('./uploadCatalogue');
const createAd = require('./createAd');

OrganisrComponents.component('app',app);
OrganisrComponents.component('home',home);
OrganisrComponents.component('advertisement',advertisement);
OrganisrComponents.component('uploadCatalogue', uploadCatalogue);
OrganisrComponents.component('createAd', createAd);
module.exports = OrganisrComponents;
