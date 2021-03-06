const angular = require('angular');



require('./controllers/index');
require('./controllers/ui/navbar_layout');
require('./components/index');

const app = angular.module('zooopApp',['ngComponentRouter','ngMaterial','ZooopController','ZooopComponents']);

app.config(["$mdThemingProvider",($mdThemingProvider)=>{
  $mdThemingProvider.theme('default').primaryPalette('light-blue',{
    'default':'700'
  })
  .accentPalette('red',{
    'default': '700'
  });
}]);

app.value('$routerRootComponent', 'app');
