module.exports = { name:"MyAds",
controller:[ '$http', '$scope' ,function($http, $scope){
		data =	$http({
                 method  : 'GET',
                 url     : '/discover'
            }).then(function successCallback(response){
                console.log(response.status);
                $scope.discoverAds = response.data;
                console.log($scope.discoverAds);
            }, function errorCallback(response){
                console.log(response.status);
            });
}]};
