module.exports = { name:"CreateAds",
controller:["$scope","$http", function($scope, $http){
			// Creating a blank object to hold form information
			$scope.discover = {}
			$scope.submit = function() {
          alert("Success");
           $http({
                 method  : 'POST',
                 url     : '/discover',
                 data    :  $scope.discover,  
            }).then(function successCallback(response){
                console.log(response.status);
            }, function errorCallback(response){
                console.log(response.status);
            });
        }
}]};
