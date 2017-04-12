angular
  .module('memesModule')
  .component('memesList', {
    selector: 'memes-list',
    template: require('./memes-list.component.html'),
    bindings: {
        memesList: '<'
    },
    controller: memesListCtrl
  });

memesListCtrl.$inject = ['MemesService'];
function memesListCtrl(MemesService) {
  this.onAddClick = function(id) {
    MemesService.addToFavourites(id);
    console.log(MemesService.getFavourites());
  }

  this.onRemoveClick = function(id) {
    MemesService.removeFromFavourites(id);
    console.log(MemesService.getFavourites());
  }
}