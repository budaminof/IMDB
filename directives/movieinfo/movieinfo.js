angular.module('omdb')
.directive('movieInfo', ['$log','$routeParams','movieService', function ($log, $routeParams, movieService) {

  return {
    restrict: 'E',
    templateUrl: '/directives/movieinfo/movieinfo.html',
    scope: {},
    link: function (scope, element, attr) {
      movieService.findMovie($routeParams.id).then(function (data) {
        $log.info('Directive', data)
        scope.movie = data;
      })

    }
  }

}]);
