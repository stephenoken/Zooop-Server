module.exports = {
  templateUrl: "./partials/components/app.html",
  $routeConfig: [
    {path: '/', name: 'Home', component: 'home', useAsDefault: true},
    {path: '/purch-advertisement', name: 'Advertisement', component: 'advertisement' },	
    {path: '/upload-catalogue', name: 'UploadCatalogue', component: 'uploadCatalogue'},
    {path: '/create-ad', name: 'CreateAd', component: 'createAd'},
    {path: '/my-ads', name: 'MyAds', component: 'myAds'}
  ]
};
