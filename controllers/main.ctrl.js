angular.module('omdb')
.controller('MainCtrl', ['$scope', 'movieService','$log', function ($scope, movieService, $log) {
  $scope.search = {};
  $scope.searchResult = movieService.searchResult;
  
}]);
