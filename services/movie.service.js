angular.module('omdb')
.factory('movieService', ['$http', '$log', '$q', function ($http, $log, $q) {

  var cachedSearches = {};
  var movies = [];

  var movieService = {
    searchMovies: function (term) {
      term = term.toLowerCase().split(' ').join('+')
      var url = 'http://www.omdbapi.com/?s='+ term +'&type=movie';

      return $q(function (resolve, reject) {
        if(cachedSearches[term]) {
          resolve(cachedSearches[term]);
        } else {
          $http.get(url).success(function(res) {
            if(res.Response === "False") {
              movies.push(res.Error);
              resolve(res.Error);
            } else {
            movies.splice(0);
            res.Search.forEach(function (item){
              movies.push({
                id: item.imdbID,
                title: item.Title,
                imageUrl: item.Poster,
                type: item.Type,
                year: item.Year
              });
            });
            cachedSearches[term] = movies;
            resolve(cachedSearches[term]);
            }
          }).error(function(errah){
            reject(errah);
          })
        }
      })

    },

    findMovie: function (id) {
      $log.info('in service',id);
      var movieUrl = 'http://www.omdbapi.com/?i='+ id ;

      return $q(function (resolve, reject) {
        if(cachedSearches[id]) {
          resolve(cachedSearches[id]);
        } else {
          $http.get(movieUrl).success(function(res) {
            if(res.Response === "False") {
              resolve(res.Error);
            } else {
            cachedSearches[id] = res;
            resolve(cachedSearches[id]);
            }
          }).error(function(errah){
            reject(errah);
          })
        }
      })


    },
    movies: movies
  }
  return movieService;
}])
