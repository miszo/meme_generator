webpackJsonp([1],{

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _memes = __webpack_require__(62);

Object.keys(_memes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _memes[key];
    }
  });
});

var _memes2 = __webpack_require__(63);

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
  template: '\n    <div>\n        <nav>\n            <a ui-sref="home"> home </a>\n            <a ui-sref="memesList"> List </a>\n        </nav>   \n        <ui-view></ui-view>\n    </div>\n    \n    \n    '
}).component('home', {
  selector: 'home',
  bindings: {
    data: '<'
  },
  template: '\n    <div>\n      Home page\n    </div>',
  controller: function controller() {}
});

config.$inject = ['$stateProvider', '$urlRouterProvider'];
function config($stateProvider, $urlRouteProvider) {
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

var _memesList = __webpack_require__(61);

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

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('memesModule').component('memesList', {
    selector: 'memes-list',
    template: __webpack_require__(65),
    bindings: {
        memesList: '<'
    },
    controller: function controller() {}
});

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('memesModule', []);

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

angular.module('memesModule').service('MemesService', memesService);

memesService.$inject = ['$http', '$q'];
function memesService($http, $q) {
  this.memesList = [];

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
}

/***/ }),

/***/ 65:
/***/ (function(module, exports) {

module.exports = "<div> {{ $ctrl.memesList}} </div> ";

/***/ })

},[59]);