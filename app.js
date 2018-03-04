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
myApp.service('cityService', function($http) {
    this.city = 'Berlin';

    this.getWeather = (city) => {
        return $http({
        method: "GET",
        url: `http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=3&APPID=64c25a5bbade86005c613ed5edc028a5`
        }).then((response) => {
            return response.data;
        })
    }
});

//controllers
myApp.controller('homeController', function($scope, cityService){
    $scope.city = cityService.city;
    $scope.$watch('city', function(){
        cityService.city = $scope.city;
    })
});

myApp.controller('forecastController', function($scope, $resource, cityService){
    $scope.city = cityService.city;

    // $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/weather?APPID=64c25a5bbade86005c613ed5edc028a5", {
    //     callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }
    // });

    
    cityService.getWeather($scope.city).then(function(res) {
        console.log(res)
        $scope.weatherResult = res;
    });
    //convert kelvin to fahrenheit
    $scope.convertToFahrenheit = function(k) {
        return Math.round((1.8 * (k - 273)) + 32)
    }
    $scope.convertToDate = function(dt) {
        return new Date(dt * 1000);
    }
});