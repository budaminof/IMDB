angular.module('omdb')
.controller('MainCtrl', ['$scope', 'movieService','$log', '$location', function ($scope, movieService, $log, $location) {
  $scope.search = {};

  $scope.searchForMovies = function () {
    $location.path('/');
    var newSearch = angular.copy($scope.search.title);
    $scope.search = {};

    movieService.searchMovies(newSearch)
    .then(function(data){
        $scope.searchResult = data;
        console.log($scope.searchResult);
      })
  };

}]);
