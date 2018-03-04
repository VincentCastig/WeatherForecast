//controllers
myApp.controller('homeController', function($scope, cityService){
    $scope.city = cityService.city;
    $scope.$watch('city', function(){
        cityService.city = $scope.city;
    })
});

myApp.controller('forecastController', function($scope, cityService, $stateParams){
    $scope.city = cityService.city;

    // $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/weather?APPID=64c25a5bbade86005c613ed5edc028a5", {
    //     callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }
    // });
    $scope.days = $stateParams.days || '3';
    console.log($stateParams.days)

    cityService.getWeather($scope.city, $scope.days).then(function(res) {
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