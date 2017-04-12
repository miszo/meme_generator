angular
  .module('memesModule')
  .component('favMemesList', {
    selector: 'fav-memes-list',
    template: require('./fav-memes-list.component.html'),
    bindings: {
      favMemesList: '<'
    },
    controller: favMemesListCtrl
  });

favMemesListCtrl.$inject = ['MemesService'];
function favMemesListCtrl(MemesService) {

  this.onRemoveClick = function(id) {
    MemesService.removeFromFavourites(id);
    this.favMemesList = MemesService.getFavourites();
    console.log(MemesService.getFavourites());
  }
}