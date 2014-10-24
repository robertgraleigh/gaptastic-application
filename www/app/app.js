// (IIFE)
(function(){
    
    var app = angular.module('gapApp', ['ui.router']);
    
    app.config(function($stateProvider, $urlRouterProvider) {
        
        $stateProvider
        .state('front', {
            url: "/front",
            templateUrl: "templates/front.html",
            controller: 'FrontController'
        })
        
        .state('home', {
            url: "/home",
            templateUrl: "templates/home.html",
            controller: 'HomeController'
        });
        
        $urlRouterProvider.otherwise('/home');
        
    });
  
}());

