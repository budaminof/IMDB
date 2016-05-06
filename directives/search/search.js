angular.module('omdb')
.directive('movSearch', ['movieService','$log', '$location', function (movieService, $log, $location) {

  return {
    templateUrl: '/partials/nav.html',
    link: function(scope, el, attrs, fn) {

      scope.searchForMovies = function (form) {
        $location.path('/');
        var newSearch = angular.copy(form.title);
        scope.form = {};
        movieService.searchMovies(newSearch)
        .then(function(data){
          scope.searchResult = data;
        })
      };

    },
    controller: 'SearchCtrl',
    controllerAs: 'Search',
    bindToController: true
  }

}]).controller('SearchCtrl', function(){});
