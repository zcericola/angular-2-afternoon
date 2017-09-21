angular.module('devmtnTravel').controller('locationsCtrl', function( $scope, mainSrvc ) {
  mainSrvc.getTravelInfo().then( function( response ) {
    $scope.locations = response.data;
  });
});