angular.module('devmtnTravel').controller('locationsCtrl', function($scope, mainSrvc){
    mainSrvc.getTravelInfo().then( function(res) {
        $scope.locations = res.data;
    })
 
});