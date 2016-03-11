module.exports = {
  name: 'NavBarLayoutCtrl',
  controller: ['$scope','$mdSidenav',($scope,$mdSidenav)=>{
    $scope.toggleSideNav = ()=>{
      $mdSidenav('side-menu-left').toggle();
    };

    $scope.closeSideNav = ()=>{
      $mdSidenav('side-menu-left').close();
    }
  }]
};
