angular.module('omdb')
.directive('movieList', ['movieService', '$log', function (movieService, $log) {

  return {
    restrict: 'E',
    templateUrl: "/directives/movieList/movielist.html",
    scope: {
      list: '='
    }
  }
}]);
