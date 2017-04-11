angular
  .module('memesModule')
  .component('memesList', {
    selector: 'memes-list',
    template: require('./memes-list.component.html'),
    bindings: {
        memesList: '<'
    },
    controller: function() {
    }
  });
