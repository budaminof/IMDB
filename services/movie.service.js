angular.module('omdb')
.factory('movieService', ['$http', '$log', '$q', function ($http, $log, $q) {

  var cachedSearches = {};
  var chachedMovie = {};

  var movieService = {
    searchMovies: function (term) {
      var url = 'http://www.omdbapi.com/?s='+ term +'&type=movie';

      return $q(function (resolve, reject) {
        if(cachedSearches[term]) {
          resolve(cachedSearches[term]);
        } else {
          $http.get(url).success(function(res) {
            if(res.Response === "False") {
              resolve(res.Error);
            } else {
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
            cachedSearches[term] = normalizeArr;
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
        if(chachedMovie[id]) {
          resolve(chachedMovie[id]);
        } else {
          $http.get(movieUrl).success(function(res) {
            if(res.Response === "False") {
              resolve(res.Error);
            } else {
            chachedMovie[id] = res;
            $log.info('chached movie in service',chachedMovie[id]);
            resolve(chachedMovie[id]);
            }
          }).error(function(errah){
            reject(errah);
          })
        }
      })


    }
  }

  return movieService;
}])
