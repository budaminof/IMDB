angular.module('omdb')
.controller('MainCtrl', ['$scope', 'movieService','$log', function ($scope, movieService, $log) {
  $scope.search = {};

  $scope.searchForMovies = function () {
    var newSearch = angular.copy($scope.search.title);
    $scope.search = {};

    movieService.searchMovies(newSearch)
    .then(function(data){
        $scope.searchResult = data;
      })
  };

}]);
