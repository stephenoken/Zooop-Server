module.exports = { name:"CreateAds",
controller:["$http", function($http){
			// Creating a blank object to hold form information
			this.dietaryTags = [];
			this.submit = function(discover) {
           $http({
                 method  : 'POST',
                 url     : '/adverts-api/create-discover-ad',
                 data    :  Object.assign(discover,{dietaryTags:this.dietaryTags})
            }).then(function successCallback(response){
                console.log(response.status);
            }, function errorCallback(response){
                console.log(response.status);
            });
        };
}]};
