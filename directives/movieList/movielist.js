angular.module('omdb')
.directive('movieList', function () {

  return {
    restrict: 'E',
    templateUrl: "/directives/movieList/movielist.html",
    scope: {},
    link: function (scope, element, attr) {
      console.log("somekbsakjlb");
    }
  }

});
