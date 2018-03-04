//services
myApp.service('cityService', function($http) {
    this.city = 'Berlin';

    this.getWeather = (city, days) => {
        return $http({
        method: "GET",
        url: `http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=${days}&APPID=64c25a5bbade86005c613ed5edc028a5`
        }).then((response) => {
            return response.data;
        })
    }
});