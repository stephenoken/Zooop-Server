var angular = require('angular');
module.exports = { name:"CreateAds",
controller:["$http", "$mdDialog", function($http, $mdDialog){
			// Creating a blank object to hold form information
			this.tags = [];

            this.submit = function(discover) {
           $http({
                 method  : 'POST',
                 url     : '/adverts-api/create-discover-ad',
                 data    :  Object.assign(discover,{tags:this.tags})
            }).then(function successCallback(response){
                console.log(response.status);
            }, function errorCallback(response){
                console.log(response.status);
            });						
        };
            this.showAlert = function(ev) {
                console.log("success");
                $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title('You Go, Captain!')
                .textContent('You have created your Ad!! You can view it in My Ads')
                .ariaLabel('Alert Dialog Demo')
                .ok('Got it!')
                .targetEvent(ev)
            );
        };
}]};
