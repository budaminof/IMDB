angular.module('omdb')
.directive('omNav', ['movieService', '$log',function (movieService, $log) {

  return {
    restrict: 'E',
    templateUrl: 'directives/nav/nav.html',
    scope: {},
    link: function (scope, element, attr) {

      scope.searchForMovies = function () {
        var newSearch = angular.copy(scope.search);
        scope.search = {};
        scope.myForm.$setUntouched();
        return movieService.searchMovies(newSearch);
      }
    }
  }

}]);
