var app = angular.module('reelDb', []);

app.controller('MoviesController', function ($scope, $http) {
    $scope.akshaya = 'Akshaya';
    
    $http.get('https://api.myjson.com/bins/17k0ay', { cache: true })
        .then(function (res) {
            $scope.movies = res.data;
        });
});