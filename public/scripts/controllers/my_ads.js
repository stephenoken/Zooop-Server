module.exports = { name:"MyAds",
controller:[ '$http', '$scope' ,function($http, $scope){
	$scope.adsAvailable = "Bitch";
        	$http({
                 method  : 'GET',
                 url     : '/adverts-api/get-discover-ads'
            }).then(function (response){
                console.log(response.status);
                $scope.prodAds = response.data;
                console.log($scope.prodAds.length);
                 if ($scope.prodAds.length == 0){
                    $scope.adsAvailable = false;
                    console.log("Ads are not available");
                } else{
                    console.log("Ads are available");
                    $scope.adsAvailable = true;
                }
            }, function errorCallback(response){
                console.log(response.status);
            });

}]};
