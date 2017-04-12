webpackJsonp([1],{

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _memes = __webpack_require__(64);

Object.keys(_memes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _memes[key];
    }
  });
});

var _memes2 = __webpack_require__(65);

Object.keys(_memes2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _memes2[key];
    }
  });
});

var _memesList = __webpack_require__(60);

Object.keys(_memesList).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _memesList[key];
    }
  });
});

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('app', ['ui.router', 'memesModule']).config(config).component('app', {
  selector: 'app',
  template: '\n    <div>\n        <nav>\n            <a ui-sref="home"> Home</a>\n            <a ui-sref="memesList"> Memes list</a>\n        </nav>   \n        <ui-view></ui-view>\n    </div>\n    \n    \n    '
}).component('home', {
  selector: 'home',
  bindings: {
    data: '<'
  },
  template: '\n    <div>\n      Home page\n    </div>',
  controller: function controller() {}
});

config.$inject = ['$stateProvider', '$urlRouterProvider'];
function config($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '/home',
    component: 'home'
  }).state('memesList', {
    url: '/list',
    component: 'memesList',
    resolve: {
      memesList: function memesList(MemesService) {
        return MemesService.getMemes();
      }
    }
  });

  $urlRouterProvider.otherwise('/home');
}

__webpack_require__(48);

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _memesList = __webpack_require__(63);

Object.keys(_memesList).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _memesList[key];
    }
  });
});

var _memeTile = __webpack_require__(61);

Object.keys(_memeTile).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _memeTile[key];
    }
  });
});

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _memeTile = __webpack_require__(62);

Object.keys(_memeTile).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _memeTile[key];
    }
  });
});

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('memesModule').component('memeTile', {
  selector: 'meme-tile',
  bindings: {
    meme: '<'
  },
  template: '\n      <div>\n        <p>{{ $ctrl.meme.name }}</p>\n        <div ng-style="{\n                        \'background-image\': \'url(\' + $ctrl.meme.url + \')\',\n                        \'height\': $ctrl.meme.height + \'px\',\n                        \'width\': $ctrl.meme.width + \'px\'\n                      }"></div>\n                      <button ng-click="$ctrl.addToFavourites($ctrl.meme.id)">Add to favourites</button>\n      </div>',
  controller: memeTileCtrl
});

memeTileCtrl.$inject = ['MemesService'];
function memeTileCtrl(MemesService) {
  this.addToFavourites = function (id) {
    MemesService.addToFavourites(id);
    console.log(MemesService.getFavourites());
  };
}

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('memesModule').component('memesList', {
  selector: 'memes-list',
  template: __webpack_require__(67),
  bindings: {
    memesList: '<'
  },
  controller: function controller() {}
});

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('memesModule', []);

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

angular.module('memesModule').service('MemesService', memesService);

memesService.$inject = ['$http', '$q'];
function memesService($http, $q) {
  this.memesList = [];
  this.favouritesList = [];

  this.getMemes = function () {
    var _this = this;

    if (this.memesList.length > 0) {
      return $q.resolve(this.memesList);
    }
    return $http.get('https://api.imgflip.com/get_memes').then(function (response) {
      return _this.memesList = [].concat(_toConsumableArray(response.data.data.memes));
    });
    return this.memesList;
  };

  this.addToFavourites = function (id) {
    var idOnList = this.favouritesList.findIndex(function (fav) {
      return fav === id;
    });
    if (idOnList === -1) {
      this.favouritesList.push(id);
    }
    console.log(this.favouritesList);
  };

  this.getFavourites = function () {
    var _this2 = this;

    return this.memesList.filter(function (ele) {
      var elementIndex = ele.id;
      return _this2.favouritesList.findIndex(function (fav) {
        return fav === elementIndex;
      }) != -1;
    });
  };
}

/***/ }),

/***/ 67:
/***/ (function(module, exports) {

module.exports = "<div> <div ng-repeat=\"meme in $ctrl.memesList\"> <meme-tile meme=meme></meme-tile> </div> </div> ";

/***/ })

},[59]);