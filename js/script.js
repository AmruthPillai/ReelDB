var app = angular.module('reelDb', []);

app.controller('MoviesController', function ($scope, $http) {
    $scope.akshaya = 'Akshaya';
    
    $http.get('https://amruthpillai.github.io/ReelDB/assets/movies.json', { cache: true })
        .then(function (res) {
            $scope.movies = res.data;
        });
});
