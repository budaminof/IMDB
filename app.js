angular.module('omdb', ['ngRoute'])
.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<movie-list list="searchResult"></movie-list>'
      })
      .when('/test', {
        template: '<movie-info />'
      })
      .when('/404', {
        template: '<div class="error text-center"><img class="error" src="http://www.cruiseindubai.com/wp-content/uploads/2014/03/404-bg_2x.gif"></div>'
      })
      .otherwise({
        redirectTo: '/404'
      })
});
