angular.module('omdb')
.factory('movieService', ['$http', '$log', '$q', function ($http, $log, $q) {

  var cachedSearches = {};
  var searchResult = [];

  var movieService = {
    searchMovies: function (term) {
      searchResult = [];
      term = term.toLowerCase().split(' ').join('+');
      var url = 'http://www.omdbapi.com/?s='+ term +'&type=movie';

      return $q(function (resolve, reject) {
        if(cachedSearches[term]) {
          searchResult = cachedSearches[term];
          resolve(searchResult);
        } else {
          $http.get(url).success(function(res) {
            if(res.Response === "False") {
              searchResult.push(res);
              resolve(searchResult);
            } else {
            var normalizeArr = [];
            res.Search.forEach(function (item){
              normalizeArr.push({
                id: item.imdbID,
                title: item.Title,
                imageUrl: item.Poster,
                type: item.Type,
                year: item.Year
              });
            });
            cachedSearches[term] = normalizeArr;
            searchResult = cachedSearches[term];
            this.resultList = searchResult;
            resolve(searchResult);
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
    }
    
  }
  return movieService;
}]);
