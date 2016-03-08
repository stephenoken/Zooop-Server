const angular = require("angular");
const OrganisrComponents = angular.module('ZooopComponents',[]);

const app = require("./app");
const home = require("./home");
const advertisement = require("./advertisement");

OrganisrComponents.component('app',app);
OrganisrComponents.component('home',home);
OrganisrComponents.component('advertisement',advertisement);

module.exports = OrganisrComponents;
