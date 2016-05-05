angular.module('omdb')
.factory('movieService', ['$http', '$log',function ($http, $log) {

  var movieService = {
    searchResult: [],
    searchMovies: function (search) {
        $http.get('http://www.omdbapi.com/?s='+ search)
        .then(function (res) {
          var result = res.data.Search;
          // $log.info('result', result);
          result.forEach(function (item){
            movieService.searchResult.push({
              id: item.imdbID,
              title: item.Title,
              imageUrl: item.Poster,
              type: item.Type,
              year: item.Year
            });
          })
          $log.info(movieService.searchResult);
        })

    }

  }

  return movieService;
}])
