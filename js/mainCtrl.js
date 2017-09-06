angular.module('chatroom').controller('mainCtrl', function( $scope, mainSrvc ){
    mainSrvc.getMessages().then( function( response ) {
      $scope.messages = response.data;
    });

    $scope.timeSort = "-";

    $scope.postMessage = function( msg ) {
      mainSrvc.postMessage( msg );
    };
});