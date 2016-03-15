module.exports = { name:"MyAds",
controller:[ '$http', '$scope' ,function($http, $scope){
		$http({
                 method  : 'GET',
                 url     : '/adverts-api/get-discover-ads'
            }).then(function (response){
                console.log(response.status);
                $scope.discoverAds = response.data;
                console.log($scope.discoverAds);
            }, function (response){
                console.log(response.status);
            });
}]};
