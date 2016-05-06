angular.module('omdb')
.factory('movieService', ['$http', '$log',function ($http, $log) {

  var movieService = {
    searchResult: [],
    searchMovies: function (search) {
      return $http.get('http://www.omdbapi.com/?s='+ search+'&type=movie')
      .then(function (res) {
        movieService.searchResult.length = 0;
        var result = res.data.Search;
        result.forEach(function (item){
         movieService.searchResult.push({
            id: item.imdbID,
            title: item.Title,
            imageUrl: item.Poster,
            type: item.Type,
            year: item.Year
          })
        });
        $log.info('in the service', movieService.searchResult);
        return movieService.searchResult;
        })
    }
  }

  return movieService;
}])
