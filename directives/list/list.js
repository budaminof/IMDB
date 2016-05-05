angular.module('omdb')
.directive('list', function () {

  return {
    restrict: 'E',
    templateUrl: "/directives/list/list.html",
    scope: {},
    link: function (scope, element, attr) {
      console.log("somekbsakjlb");
    }
  }

});
