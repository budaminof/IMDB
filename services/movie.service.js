angular.module('omdb')
.factory('movieService', ['$http', '$log', '$q', function ($http, $log, $q) {

  var cachedMovies = {};

  var movieService = {
    searchMovies: function (term) {
      var url = 'http://www.omdbapi.com/?s='+ term +'&type=movie';

      return $q(function (resolve, reject) {
        if(cachedMovies[term]) {
          deferred.resolve(cachedMovies[term]);
        } else {
          $http.get(url).success(function(res) {
            var result = res.Search;
            var normalizeArr = [];
            result.forEach(function (item){
              normalizeArr.push({
                id: item.imdbID,
                title: item.Title,
                imageUrl: item.Poster,
                type: item.Type,
                year: item.Year
              })
            });
            cachedMovies[term] = normalizeArr;
            resolve(cachedMovies[term]);
          }).error(function(errah){
            reject(errah);
          })
        }
      })

    }
  }

  return movieService;
}])
