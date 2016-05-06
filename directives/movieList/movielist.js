angular.module('omdb')
.directive('movieList', ['movieService', '$log', function (movieService, $log) {

  return {
    restrict: 'E',
    templateUrl: "/directives/movieList/movielist.html",
    scope: {
      list: '='
    },
    link: function (scope, element, attr) {
      $log.info('in the list directive', movieService.searchResult);
    }
  }

}]);
