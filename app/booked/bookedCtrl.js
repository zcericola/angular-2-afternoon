angular
  .module("devmtnTravel")
  .controller("bookedCtrl", function($scope, $stateParams, mainSrvc) {
    mainSrvc.getPackageInfo().then(function(response) {
      $scope.allPackages = response.data;

      if ($stateParams.id) {
        $scope.packageIndex = $scope.allPackages.findIndex(function(package) {
          return package.id === parseInt($stateParams.id);
        });

        if ($scope.packageIndex !== -1) {
          $scope.package = $scope.allPackages[$scope.packageIndex];
        }
      }
    });
  });
