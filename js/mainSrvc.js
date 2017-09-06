angular.module('chatroom').service('mainSrvc', function( $http ) {
  this.getMessages = function() {
    return $http({
      method: 'GET',
      url: 'https://practiceapi.devmountain.com/api/chats'
    });
  };

  this.postMessage = function( msg ) {
    return $http({
      method: 'POST',
      url: 'https://practiceapi.devmountain.com/api/chats',
      data: { message: msg }
    });
  };
});