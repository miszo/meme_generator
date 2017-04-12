angular
  .module('memesModule')
  .component('memeTile', {
    selector: 'meme-tile',
    bindings: {
      meme: '<',
      onAddClick: '&',
      onRemoveClick: '&'
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
                      <button ng-click="$ctrl.removeFromFavourites($ctrl.meme.id)">Remove from favourites</button>
      </div>`,
    controller: memeTileCtrl
  });

function memeTileCtrl() {
  this.addToFavourites = function(id) {
    this.onAddClick({ id });
  }

  this.removeFromFavourites = function(id) {
    this.onRemoveClick({ id });
  }
}