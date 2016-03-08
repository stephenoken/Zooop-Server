module.exports = {
  templateUrl: "./partials/components/app.html",
  $routeConfig: [
    {path: '/', name: 'Home', component: 'home', useAsDefault: true},
    {path: '/purch-advertisement', name: 'Advertisement', component: 'advertisement' }
  ]
};
