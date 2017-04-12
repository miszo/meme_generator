angular
  .module('app', ['ui.router', 'memesModule'])
  .config(config)
  .component('app', {
    selector: 'app',
    template: `
    <div>
        <nav>
            <a ui-sref="home"> Home</a>
            <a ui-sref="memesList"> Memes list</a>
            <a ui-sref="favMemesList"> Favourites Memes list</a>
        </nav>   
        <ui-view></ui-view>
    </div>
    
    
    `
  })

  .component('home', {
    selector: 'home',
    bindings: {
      data: '<'
    },
    template:
    `
    <div>
      Home page
    </div>`,
    controller: function() {}
  });

config.$inject = ['$stateProvider', '$urlRouterProvider'];
function config($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      component: 'home',
    })
    .state('memesList', {
      url: '/list',
      component: 'memesList',
      resolve: {
        memesList: (MemesService) => MemesService.getMemes()
      }
    })
    .state('favMemesList', {
      url: '/favourites',
      component: 'favMemesList',
      resolve: {
        favMemesList: (MemesService) => MemesService.getFavourites()
      }
    });;

  $urlRouterProvider.otherwise('/home');
}

require('./memes');
