angular.module('devmtnTravel', ['ui.router']).config( function ( $stateProvider, $urlRouterProvider ) {
  $stateProvider
    .state('home',{
      url:'/',
      templateUrl: "app/about/aboutTmpl.html"
    });

  $urlRouterProvider
    .otherwise('/');
});
