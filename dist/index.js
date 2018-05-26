(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.index = mod.exports;
  }
})(this, function (module) {
  'use strict';

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  module.exports = {
    component: {
      install: function install(Vue) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { pre: 'Dt' };
        var pre = opts.pre;

        var requireComponent = require.context('@/components', true, /\.vue$/);
        requireComponent.keys().forEach(function (key) {
          var componentName = pre + /^\S+\/(\w+).vue$/.exec(key)[1];
          var comConfig = requireComponent(key);
          Vue.component(componentName, comConfig.default || comConfig);
        });
      }
    },
    filter: {
      install: function install(Vue, opts) {
        var filters = opts.filters || {};
        var pre = opts.pre || '';
        Object.entries(filters).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              k = _ref2[0],
              v = _ref2[1];

          Vue.filter(pre + k, v);
        });
      }
    }
  };
});