angular.module('omdb')
.directive('movieInfo', function () {
  return {
    restrict: 'E',
    templateUrl: '/directives/movieinfo/movieinfo.html',
    scope: {}
  }
})
