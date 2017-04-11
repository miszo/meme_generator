angular
  .module('memesModule')
  .component('memeTile', {
    selector: 'meme-tile',
    bindings: {
      meme: '<'
    },
    template: `
      <div>
        <p>{{ $ctrl.meme.name }}</p>
        <div ng-style="{
                        'background-image': 'url(' + $ctrl.meme.url + ')',
                        'height': $ctrl.meme.height + 'px',
                        'width': $ctrl.meme.width + 'px'
                      }"></div>
                      <button ng-click="$ctrl.addToFavourites($ctrl.meme.id)">Add to favourites</button>
      </div>`,
    controller: memeTileCtrl
  });

memeTileCtrl.$inject = ['MemesService'];
function memeTileCtrl(MemesService) {
  this.addToFavourites = function(id) {
    MemesService.addToFavourites(id);
    console.log(MemesService.getFavourites());
  }
}