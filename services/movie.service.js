angular.module('omdb')
.factory('movieService', ['$http', '$log',function ($http, $log) {

  var movieService = {
    searchMovies: function (search) {
        $http.get('http://www.omdbapi.com/?s='+ search)
        .then(function (res) {
          $log.info(res);
        })

    }

  }
  return movieService;
}])
