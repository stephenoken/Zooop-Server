module.exports = { name:"MyAds",
controller:[ '$http', '$scope' ,function($http, $scope){
	$scope.adsAvailable = false;
        	$http({
                 method  : 'GET',
                 url     : '/adverts-api/get-discover-ads'
            }).then(function (response){
                console.log(response.status);
                $scope.discoverAds = response.data;
                 if ($scope.discoverAds === null){
                    $scope.adsAvailable = true;
                }
            }, function errorCallback(response){
                console.log(response.status);
            });

            $scope.availability = function(){
                return $scope.adsAvailable;
                console.log($scope.adsAvailable);
            };
}]};
