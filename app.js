//Moduleddd
var myApp = angular.module('myApp', ['ui.router', 'ngResource'])
.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
    .state('/', {
        url: '/home',
        templateUrl: './templates/home.html'
    })
    .state('forecast', {
        url: '/forecast',
        templateUrl: './templates/forecast.html'
    })
});