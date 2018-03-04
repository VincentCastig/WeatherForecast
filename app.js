//Module and routes
var myApp = angular.module('myApp', ['ui.router', 'ngResource'])
.config(function($stateProvider, $urlRouterProvider) {

    // $urlRouterProvider.otherwise('/home');
    
    $stateProvider
    .state('/', {
        url: '/home',
        templateUrl: './templates/home.html',
        controller: 'homeController'
    })
    .state('forecast', {
        url: '/forecast',
        templateUrl: './templates/forecast.html',
        controller: 'forecastController'
    })
    .state('forecastDays', {
        url: '/forecast/:days',
        templateUrl: './templates/forecast.html',
        controller: 'forecastController'
    })
});