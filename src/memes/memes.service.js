angular
  .module('memesModule')
  .service('MemesService', memesService);

memesService.$inject = ['$http', '$q'];
function memesService($http, $q) {
  this.memesList = [];
  this.favouritesList = [];

  this.getMemes = function () {
    if (this.memesList.length > 0) {
      return $q.resolve(this.memesList);
    }
    return $http.get(`https://api.imgflip.com/get_memes`)
      .then(response =>
        this.memesList = [...response.data.data.memes]);
        return this.memesList;
  }

  this.addToFavourites = function(id) {
    const idOnList = this.favouritesList.findIndex(fav => fav === id)
    if (idOnList === -1) {
      this.favouritesList.push(id);
    }
    console.log(this.favouritesList);
  }

  this.getFavourites = function() {
    return this.memesList.filter(ele => {
      const elementIndex = ele.id
      return this.favouritesList.findIndex(fav => fav === elementIndex) != -1;
    });
  }
}
