//Module and routes
var myApp = angular.module('myApp', ['ui.router', 'ngResource'])
.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');
    
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
});

//services
myApp.service('cityService', function() {
    this.city = 'New York, NY'
});
//controllers
myApp.controller('homeController', function($scope, cityService){
    $scope.city = cityService.city;
    $scope.$watch('city', function(){
        cityService.city = $scope.city;
    })
});

myApp.controller('forecastController', function($scope, cityService){
    $scope.city = cityService.city;
});