module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_assets/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************************!*\
  !*** ./config/mainPrerenderer.jsx ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _appMainRoutes = __webpack_require__(/*! ../app/mainRoutes */ 2);

	var _appMainRoutes2 = _interopRequireDefault(_appMainRoutes);

	var _appMainStoresDescriptions = __webpack_require__(/*! ../app/mainStoresDescriptions */ 90);

	var _appMainStoresDescriptions2 = _interopRequireDefault(_appMainStoresDescriptions);

	var _appMainPrerenderHtml = __webpack_require__(/*! ../app/mainPrerender.html */ 94);

	var _appMainPrerenderHtml2 = _interopRequireDefault(_appMainPrerenderHtml);

	var _createStoresForPrerender = __webpack_require__(/*! ./createStoresForPrerender */ 95);

	var _createStoresForPrerender2 = _interopRequireDefault(_createStoresForPrerender);

	var _Prerenderer = __webpack_require__(/*! ./Prerenderer */ 96);

	var _Prerenderer2 = _interopRequireDefault(_Prerenderer);

	var MainRenderer = (function () {
		function MainRenderer(options) {
			_classCallCheck(this, MainRenderer);

			this.prerenderer = new _Prerenderer2["default"](_appMainRoutes2["default"]);
			this.html = _appMainPrerenderHtml2["default"].replace("STYLE_URL", options.styleUrl).replace("SCRIPT_URL", options.scriptUrl).replace("COMMONS_URL", options.commonsUrl);
		}

		_createClass(MainRenderer, [{
			key: "render",
			value: function render(path, readItems, callback) {
				var _this = this;

				var stores = (0, _createStoresForPrerender2["default"])(_appMainStoresDescriptions2["default"], readItems);
				this.prerenderer.getContent(path, stores, function (err, content, data) {
					if (err) return callback(err);
					var page = _this.html.replace("DATA", JSON.stringify(data)).replace("CONTENT", content);
					callback(null, page);
				});
			}
		}]);

		return MainRenderer;
	})();

	exports["default"] = MainRenderer;
	module.exports = exports["default"];

/***/ },
/* 1 */,
/* 2 */
/*!****************************!*\
  !*** ./app/mainRoutes.jsx ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _react = __webpack_require__(/*! react */ 3);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(/*! react-router */ 4);

	/* eslint-disable no-multi-spaces */
	// Only import from `route-handlers/*`

	var _routeHandlersApplication = __webpack_require__(/*! route-handlers/Application */ 47);

	var _routeHandlersApplication2 = _interopRequireDefault(_routeHandlersApplication);

	var _routeHandlersSomePage = __webpack_require__(/*! route-handlers/SomePage */ 63);

	var _routeHandlersSomePage2 = _interopRequireDefault(_routeHandlersSomePage);

	var _routeHandlersReadmePage = __webpack_require__(/*! route-handlers/ReadmePage */ 65);

	var _routeHandlersReadmePage2 = _interopRequireDefault(_routeHandlersReadmePage);

	var _routeHandlersTodoPage = __webpack_require__(/*! route-handlers/TodoPage */ 66);

	var _routeHandlersTodoPage2 = _interopRequireDefault(_routeHandlersTodoPage);

	var _routeHandlersTodoListPage = __webpack_require__(/*! route-handlers/TodoListPage */ 70);

	var _routeHandlersTodoListPage2 = _interopRequireDefault(_routeHandlersTodoListPage);

	var _routeHandlersTodoItemPage = __webpack_require__(/*! route-handlers/TodoItemPage */ 75);

	var _routeHandlersTodoItemPage2 = _interopRequireDefault(_routeHandlersTodoItemPage);

	var _routeHandlersHomePage = __webpack_require__(/*! route-handlers/HomePage */ 78);

	var _routeHandlersHomePage2 = _interopRequireDefault(_routeHandlersHomePage);

	var _routeHandlersNotFoundPage = __webpack_require__(/*! route-handlers/NotFoundPage */ 80);

	var _routeHandlersNotFoundPage2 = _interopRequireDefault(_routeHandlersNotFoundPage);

	var _routeHandlersChatPage = __webpack_require__(/*! route-handlers/ChatPage */ 82);

	var _routeHandlersChatPage2 = _interopRequireDefault(_routeHandlersChatPage);

	/* eslint-enable */

	// polyfill
	if (!Object.assign) Object.assign = _react2["default"].__spread; // eslint-disable-line no-underscore-dangle

	// export routes
	module.exports = _react2["default"].createElement(
		_reactRouter.Route,
		{ name: "app", path: "/", handler: _routeHandlersApplication2["default"] },
		_react2["default"].createElement(_reactRouter.Route, { name: "some-page", path: "/some-page", handler: _routeHandlersSomePage2["default"] }),
		_react2["default"].createElement(_reactRouter.Route, { name: "readme", path: "/readme", handler: _routeHandlersReadmePage2["default"] }),
		_react2["default"].createElement(
			_reactRouter.Route,
			{ name: "todo", path: "/todo", handler: _routeHandlersTodoPage2["default"] },
			_react2["default"].createElement(_reactRouter.Route, { name: "todolist", path: "list/:list", handler: _routeHandlersTodoListPage2["default"] }),
			_react2["default"].createElement(_reactRouter.Route, { name: "todoitem", path: "item/:item", handler: _routeHandlersTodoItemPage2["default"] })
		),
		_react2["default"].createElement(_reactRouter.Route, { name: "home", path: "/home", handler: _routeHandlersHomePage2["default"] }),
		_react2["default"].createElement(_reactRouter.Route, { name: "chat", path: "/chat/:room", handler: _routeHandlersChatPage2["default"] }),
		_react2["default"].createElement(_reactRouter.DefaultRoute, { handler: _routeHandlersHomePage2["default"] }),
		_react2["default"].createElement(_reactRouter.NotFoundRoute, { handler: _routeHandlersNotFoundPage2["default"] })
	);

/***/ },
/* 3 */
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 4 */
/*!*************************************!*\
  !*** ./~/react-router/lib/index.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.DefaultRoute = __webpack_require__(/*! ./components/DefaultRoute */ 5);
	exports.Link = __webpack_require__(/*! ./components/Link */ 21);
	exports.NotFoundRoute = __webpack_require__(/*! ./components/NotFoundRoute */ 22);
	exports.Redirect = __webpack_require__(/*! ./components/Redirect */ 23);
	exports.Route = __webpack_require__(/*! ./components/Route */ 20);
	exports.ActiveHandler = __webpack_require__(/*! ./components/RouteHandler */ 18);
	exports.RouteHandler = exports.ActiveHandler;

	exports.HashLocation = __webpack_require__(/*! ./locations/HashLocation */ 24);
	exports.HistoryLocation = __webpack_require__(/*! ./locations/HistoryLocation */ 28);
	exports.RefreshLocation = __webpack_require__(/*! ./locations/RefreshLocation */ 29);
	exports.StaticLocation = __webpack_require__(/*! ./locations/StaticLocation */ 30);
	exports.TestLocation = __webpack_require__(/*! ./locations/TestLocation */ 31);

	exports.ImitateBrowserBehavior = __webpack_require__(/*! ./behaviors/ImitateBrowserBehavior */ 32);
	exports.ScrollToTopBehavior = __webpack_require__(/*! ./behaviors/ScrollToTopBehavior */ 33);

	exports.History = __webpack_require__(/*! ./History */ 26);
	exports.Navigation = __webpack_require__(/*! ./Navigation */ 34);
	exports.State = __webpack_require__(/*! ./State */ 35);

	exports.createRoute = __webpack_require__(/*! ./Route */ 8).createRoute;
	exports.createDefaultRoute = __webpack_require__(/*! ./Route */ 8).createDefaultRoute;
	exports.createNotFoundRoute = __webpack_require__(/*! ./Route */ 8).createNotFoundRoute;
	exports.createRedirect = __webpack_require__(/*! ./Route */ 8).createRedirect;
	exports.createRoutesFromReactChildren = __webpack_require__(/*! ./createRoutesFromReactChildren */ 36);

	exports.create = __webpack_require__(/*! ./createRouter */ 37);
	exports.run = __webpack_require__(/*! ./runRouter */ 46);

/***/ },
/* 5 */
/*!*******************************************************!*\
  !*** ./~/react-router/lib/components/DefaultRoute.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var PropTypes = __webpack_require__(/*! ../PropTypes */ 6);
	var RouteHandler = __webpack_require__(/*! ./RouteHandler */ 18);
	var Route = __webpack_require__(/*! ./Route */ 20);

	/**
	 * A <DefaultRoute> component is a special kind of <Route> that
	 * renders when its parent matches but none of its siblings do.
	 * Only one such route may be used at any given level in the
	 * route hierarchy.
	 */

	var DefaultRoute = (function (_Route) {
	  function DefaultRoute() {
	    _classCallCheck(this, DefaultRoute);

	    if (_Route != null) {
	      _Route.apply(this, arguments);
	    }
	  }

	  _inherits(DefaultRoute, _Route);

	  return DefaultRoute;
	})(Route);

	// TODO: Include these in the above class definition
	// once we can use ES7 property initializers.
	// https://github.com/babel/babel/issues/619

	DefaultRoute.propTypes = {
	  name: PropTypes.string,
	  path: PropTypes.falsy,
	  children: PropTypes.falsy,
	  handler: PropTypes.func.isRequired
	};

	DefaultRoute.defaultProps = {
	  handler: RouteHandler
	};

	module.exports = DefaultRoute;

/***/ },
/* 6 */
/*!*****************************************!*\
  !*** ./~/react-router/lib/PropTypes.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assign = __webpack_require__(/*! react/lib/Object.assign */ 7);
	var ReactPropTypes = __webpack_require__(/*! react */ 3).PropTypes;
	var Route = __webpack_require__(/*! ./Route */ 8);

	var PropTypes = assign({}, ReactPropTypes, {

	  /**
	   * Indicates that a prop should be falsy.
	   */
	  falsy: function falsy(props, propName, componentName) {
	    if (props[propName]) {
	      return new Error('<' + componentName + '> should not have a "' + propName + '" prop');
	    }
	  },

	  /**
	   * Indicates that a prop should be a Route object.
	   */
	  route: ReactPropTypes.instanceOf(Route),

	  /**
	   * Indicates that a prop should be a Router object.
	   */
	  //router: ReactPropTypes.instanceOf(Router) // TODO
	  router: ReactPropTypes.func

	});

	module.exports = PropTypes;

/***/ },
/* 7 */
/*!******************************************!*\
  !*** external "react/lib/Object.assign" ***!
  \******************************************/
/***/ function(module, exports) {

	module.exports = require("react/lib/Object.assign");

/***/ },
/* 8 */
/*!*************************************!*\
  !*** ./~/react-router/lib/Route.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var assign = __webpack_require__(/*! react/lib/Object.assign */ 7);
	var invariant = __webpack_require__(/*! react/lib/invariant */ 9);
	var warning = __webpack_require__(/*! react/lib/warning */ 10);
	var PathUtils = __webpack_require__(/*! ./PathUtils */ 11);

	var _currentRoute;

	var Route = (function () {
	  function Route(name, path, ignoreScrollBehavior, isDefault, isNotFound, onEnter, onLeave, handler) {
	    _classCallCheck(this, Route);

	    this.name = name;
	    this.path = path;
	    this.paramNames = PathUtils.extractParamNames(this.path);
	    this.ignoreScrollBehavior = !!ignoreScrollBehavior;
	    this.isDefault = !!isDefault;
	    this.isNotFound = !!isNotFound;
	    this.onEnter = onEnter;
	    this.onLeave = onLeave;
	    this.handler = handler;
	  }

	  _createClass(Route, [{
	    key: 'appendChild',

	    /**
	     * Appends the given route to this route's child routes.
	     */
	    value: function appendChild(route) {
	      invariant(route instanceof Route, 'route.appendChild must use a valid Route');

	      if (!this.childRoutes) this.childRoutes = [];

	      this.childRoutes.push(route);
	    }
	  }, {
	    key: 'toString',
	    value: function toString() {
	      var string = '<Route';

	      if (this.name) string += ' name="' + this.name + '"';

	      string += ' path="' + this.path + '">';

	      return string;
	    }
	  }], [{
	    key: 'createRoute',

	    /**
	     * Creates and returns a new route. Options may be a URL pathname string
	     * with placeholders for named params or an object with any of the following
	     * properties:
	     *
	     * - name                     The name of the route. This is used to lookup a
	     *                            route relative to its parent route and should be
	     *                            unique among all child routes of the same parent
	     * - path                     A URL pathname string with optional placeholders
	     *                            that specify the names of params to extract from
	     *                            the URL when the path matches. Defaults to `/${name}`
	     *                            when there is a name given, or the path of the parent
	     *                            route, or /
	     * - ignoreScrollBehavior     True to make this route (and all descendants) ignore
	     *                            the scroll behavior of the router
	     * - isDefault                True to make this route the default route among all
	     *                            its siblings
	     * - isNotFound               True to make this route the "not found" route among
	     *                            all its siblings
	     * - onEnter                  A transition hook that will be called when the
	     *                            router is going to enter this route
	     * - onLeave                  A transition hook that will be called when the
	     *                            router is going to leave this route
	     * - handler                  A React component that will be rendered when
	     *                            this route is active
	     * - parentRoute              The parent route to use for this route. This option
	     *                            is automatically supplied when creating routes inside
	     *                            the callback to another invocation of createRoute. You
	     *                            only ever need to use this when declaring routes
	     *                            independently of one another to manually piece together
	     *                            the route hierarchy
	     *
	     * The callback may be used to structure your route hierarchy. Any call to
	     * createRoute, createDefaultRoute, createNotFoundRoute, or createRedirect
	     * inside the callback automatically uses this route as its parent.
	     */
	    value: function createRoute(options, callback) {
	      options = options || {};

	      if (typeof options === 'string') options = { path: options };

	      var parentRoute = _currentRoute;

	      if (parentRoute) {
	        warning(options.parentRoute == null || options.parentRoute === parentRoute, 'You should not use parentRoute with createRoute inside another route\'s child callback; it is ignored');
	      } else {
	        parentRoute = options.parentRoute;
	      }

	      var name = options.name;
	      var path = options.path || name;

	      if (path && !(options.isDefault || options.isNotFound)) {
	        if (PathUtils.isAbsolute(path)) {
	          if (parentRoute) {
	            invariant(path === parentRoute.path || parentRoute.paramNames.length === 0, 'You cannot nest path "%s" inside "%s"; the parent requires URL parameters', path, parentRoute.path);
	          }
	        } else if (parentRoute) {
	          // Relative paths extend their parent.
	          path = PathUtils.join(parentRoute.path, path);
	        } else {
	          path = '/' + path;
	        }
	      } else {
	        path = parentRoute ? parentRoute.path : '/';
	      }

	      if (options.isNotFound && !/\*$/.test(path)) path += '*'; // Auto-append * to the path of not found routes.

	      var route = new Route(name, path, options.ignoreScrollBehavior, options.isDefault, options.isNotFound, options.onEnter, options.onLeave, options.handler);

	      if (parentRoute) {
	        if (route.isDefault) {
	          invariant(parentRoute.defaultRoute == null, '%s may not have more than one default route', parentRoute);

	          parentRoute.defaultRoute = route;
	        } else if (route.isNotFound) {
	          invariant(parentRoute.notFoundRoute == null, '%s may not have more than one not found route', parentRoute);

	          parentRoute.notFoundRoute = route;
	        }

	        parentRoute.appendChild(route);
	      }

	      // Any routes created in the callback
	      // use this route as their parent.
	      if (typeof callback === 'function') {
	        var currentRoute = _currentRoute;
	        _currentRoute = route;
	        callback.call(route, route);
	        _currentRoute = currentRoute;
	      }

	      return route;
	    }
	  }, {
	    key: 'createDefaultRoute',

	    /**
	     * Creates and returns a route that is rendered when its parent matches
	     * the current URL.
	     */
	    value: function createDefaultRoute(options) {
	      return Route.createRoute(assign({}, options, { isDefault: true }));
	    }
	  }, {
	    key: 'createNotFoundRoute',

	    /**
	     * Creates and returns a route that is rendered when its parent matches
	     * the current URL but none of its siblings do.
	     */
	    value: function createNotFoundRoute(options) {
	      return Route.createRoute(assign({}, options, { isNotFound: true }));
	    }
	  }, {
	    key: 'createRedirect',

	    /**
	     * Creates and returns a route that automatically redirects the transition
	     * to another route. In addition to the normal options to createRoute, this
	     * function accepts the following options:
	     *
	     * - from         An alias for the `path` option. Defaults to *
	     * - to           The path/route/route name to redirect to
	     * - params       The params to use in the redirect URL. Defaults
	     *                to using the current params
	     * - query        The query to use in the redirect URL. Defaults
	     *                to using the current query
	     */
	    value: function createRedirect(options) {
	      return Route.createRoute(assign({}, options, {
	        path: options.path || options.from || '*',
	        onEnter: function onEnter(transition, params, query) {
	          transition.redirect(options.to, options.params || params, options.query || query);
	        }
	      }));
	    }
	  }]);

	  return Route;
	})();

	module.exports = Route;

/***/ },
/* 9 */
/*!**************************************!*\
  !*** external "react/lib/invariant" ***!
  \**************************************/
/***/ function(module, exports) {

	module.exports = require("react/lib/invariant");

/***/ },
/* 10 */
/*!************************************!*\
  !*** external "react/lib/warning" ***!
  \************************************/
/***/ function(module, exports) {

	module.exports = require("react/lib/warning");

/***/ },
/* 11 */
/*!*****************************************!*\
  !*** ./~/react-router/lib/PathUtils.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var invariant = __webpack_require__(/*! react/lib/invariant */ 9);
	var assign = __webpack_require__(/*! object-assign */ 12);
	var qs = __webpack_require__(/*! qs */ 13);

	var paramCompileMatcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|[*.()\[\]\\+|{}^$]/g;
	var paramInjectMatcher = /:([a-zA-Z_$][a-zA-Z0-9_$?]*[?]?)|[*]/g;
	var paramInjectTrailingSlashMatcher = /\/\/\?|\/\?\/|\/\?/g;
	var queryMatcher = /\?(.*)$/;

	var _compiledPatterns = {};

	function compilePattern(pattern) {
	  if (!(pattern in _compiledPatterns)) {
	    var paramNames = [];
	    var source = pattern.replace(paramCompileMatcher, function (match, paramName) {
	      if (paramName) {
	        paramNames.push(paramName);
	        return '([^/?#]+)';
	      } else if (match === '*') {
	        paramNames.push('splat');
	        return '(.*?)';
	      } else {
	        return '\\' + match;
	      }
	    });

	    _compiledPatterns[pattern] = {
	      matcher: new RegExp('^' + source + '$', 'i'),
	      paramNames: paramNames
	    };
	  }

	  return _compiledPatterns[pattern];
	}

	var PathUtils = {

	  /**
	   * Returns true if the given path is absolute.
	   */
	  isAbsolute: function isAbsolute(path) {
	    return path.charAt(0) === '/';
	  },

	  /**
	   * Joins two URL paths together.
	   */
	  join: function join(a, b) {
	    return a.replace(/\/*$/, '/') + b;
	  },

	  /**
	   * Returns an array of the names of all parameters in the given pattern.
	   */
	  extractParamNames: function extractParamNames(pattern) {
	    return compilePattern(pattern).paramNames;
	  },

	  /**
	   * Extracts the portions of the given URL path that match the given pattern
	   * and returns an object of param name => value pairs. Returns null if the
	   * pattern does not match the given path.
	   */
	  extractParams: function extractParams(pattern, path) {
	    var _compilePattern = compilePattern(pattern);

	    var matcher = _compilePattern.matcher;
	    var paramNames = _compilePattern.paramNames;

	    var match = path.match(matcher);

	    if (!match) {
	      return null;
	    }var params = {};

	    paramNames.forEach(function (paramName, index) {
	      params[paramName] = match[index + 1];
	    });

	    return params;
	  },

	  /**
	   * Returns a version of the given route path with params interpolated. Throws
	   * if there is a dynamic segment of the route path for which there is no param.
	   */
	  injectParams: function injectParams(pattern, params) {
	    params = params || {};

	    var splatIndex = 0;

	    return pattern.replace(paramInjectMatcher, function (match, paramName) {
	      paramName = paramName || 'splat';

	      // If param is optional don't check for existence
	      if (paramName.slice(-1) === '?') {
	        paramName = paramName.slice(0, -1);

	        if (params[paramName] == null) return '';
	      } else {
	        invariant(params[paramName] != null, 'Missing "%s" parameter for path "%s"', paramName, pattern);
	      }

	      var segment;
	      if (paramName === 'splat' && Array.isArray(params[paramName])) {
	        segment = params[paramName][splatIndex++];

	        invariant(segment != null, 'Missing splat # %s for path "%s"', splatIndex, pattern);
	      } else {
	        segment = params[paramName];
	      }

	      return segment;
	    }).replace(paramInjectTrailingSlashMatcher, '/');
	  },

	  /**
	   * Returns an object that is the result of parsing any query string contained
	   * in the given path, null if the path contains no query string.
	   */
	  extractQuery: function extractQuery(path) {
	    var match = path.match(queryMatcher);
	    return match && qs.parse(match[1]);
	  },

	  /**
	   * Returns a version of the given path without the query string.
	   */
	  withoutQuery: function withoutQuery(path) {
	    return path.replace(queryMatcher, '');
	  },

	  /**
	   * Returns a version of the given path with the parameters in the given
	   * query merged into the query string.
	   */
	  withQuery: function withQuery(path, query) {
	    var existingQuery = PathUtils.extractQuery(path);

	    if (existingQuery) query = query ? assign(existingQuery, query) : existingQuery;

	    var queryString = qs.stringify(query, { arrayFormat: 'brackets' });

	    if (queryString) {
	      return PathUtils.withoutQuery(path) + '?' + queryString;
	    }return PathUtils.withoutQuery(path);
	  }

	};

	module.exports = PathUtils;

/***/ },
/* 12 */
/*!*************************************************!*\
  !*** ./~/react-router/~/object-assign/index.js ***!
  \*************************************************/
/***/ function(module, exports) {

	'use strict';

	function ToObject(val) {
		if (val == null) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	module.exports = Object.assign || function (target, source) {
		var from;
		var keys;
		var to = ToObject(target);

		for (var s = 1; s < arguments.length; s++) {
			from = arguments[s];
			keys = Object.keys(Object(from));

			for (var i = 0; i < keys.length; i++) {
				to[keys[i]] = from[keys[i]];
			}
		}

		return to;
	};


/***/ },
/* 13 */
/*!**************************************!*\
  !*** ./~/react-router/~/qs/index.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./lib/ */ 14);


/***/ },
/* 14 */
/*!******************************************!*\
  !*** ./~/react-router/~/qs/lib/index.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	// Load modules

	var Stringify = __webpack_require__(/*! ./stringify */ 15);
	var Parse = __webpack_require__(/*! ./parse */ 17);


	// Declare internals

	var internals = {};


	module.exports = {
	    stringify: Stringify,
	    parse: Parse
	};


/***/ },
/* 15 */
/*!**********************************************!*\
  !*** ./~/react-router/~/qs/lib/stringify.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	// Load modules

	var Utils = __webpack_require__(/*! ./utils */ 16);


	// Declare internals

	var internals = {
	    delimiter: '&',
	    arrayPrefixGenerators: {
	        brackets: function (prefix, key) {
	            return prefix + '[]';
	        },
	        indices: function (prefix, key) {
	            return prefix + '[' + key + ']';
	        },
	        repeat: function (prefix, key) {
	            return prefix;
	        }
	    }
	};


	internals.stringify = function (obj, prefix, generateArrayPrefix) {

	    if (Utils.isBuffer(obj)) {
	        obj = obj.toString();
	    }
	    else if (obj instanceof Date) {
	        obj = obj.toISOString();
	    }
	    else if (obj === null) {
	        obj = '';
	    }

	    if (typeof obj === 'string' ||
	        typeof obj === 'number' ||
	        typeof obj === 'boolean') {

	        return [encodeURIComponent(prefix) + '=' + encodeURIComponent(obj)];
	    }

	    var values = [];

	    if (typeof obj === 'undefined') {
	        return values;
	    }

	    var objKeys = Object.keys(obj);
	    for (var i = 0, il = objKeys.length; i < il; ++i) {
	        var key = objKeys[i];
	        if (Array.isArray(obj)) {
	            values = values.concat(internals.stringify(obj[key], generateArrayPrefix(prefix, key), generateArrayPrefix));
	        }
	        else {
	            values = values.concat(internals.stringify(obj[key], prefix + '[' + key + ']', generateArrayPrefix));
	        }
	    }

	    return values;
	};


	module.exports = function (obj, options) {

	    options = options || {};
	    var delimiter = typeof options.delimiter === 'undefined' ? internals.delimiter : options.delimiter;

	    var keys = [];

	    if (typeof obj !== 'object' ||
	        obj === null) {

	        return '';
	    }

	    var arrayFormat;
	    if (options.arrayFormat in internals.arrayPrefixGenerators) {
	        arrayFormat = options.arrayFormat;
	    }
	    else if ('indices' in options) {
	        arrayFormat = options.indices ? 'indices' : 'repeat';
	    }
	    else {
	        arrayFormat = 'indices';
	    }

	    var generateArrayPrefix = internals.arrayPrefixGenerators[arrayFormat];

	    var objKeys = Object.keys(obj);
	    for (var i = 0, il = objKeys.length; i < il; ++i) {
	        var key = objKeys[i];
	        keys = keys.concat(internals.stringify(obj[key], key, generateArrayPrefix));
	    }

	    return keys.join(delimiter);
	};


/***/ },
/* 16 */
/*!******************************************!*\
  !*** ./~/react-router/~/qs/lib/utils.js ***!
  \******************************************/
/***/ function(module, exports) {

	// Load modules


	// Declare internals

	var internals = {};


	exports.arrayToObject = function (source) {

	    var obj = {};
	    for (var i = 0, il = source.length; i < il; ++i) {
	        if (typeof source[i] !== 'undefined') {

	            obj[i] = source[i];
	        }
	    }

	    return obj;
	};


	exports.merge = function (target, source) {

	    if (!source) {
	        return target;
	    }

	    if (typeof source !== 'object') {
	        if (Array.isArray(target)) {
	            target.push(source);
	        }
	        else {
	            target[source] = true;
	        }

	        return target;
	    }

	    if (typeof target !== 'object') {
	        target = [target].concat(source);
	        return target;
	    }

	    if (Array.isArray(target) &&
	        !Array.isArray(source)) {

	        target = exports.arrayToObject(target);
	    }

	    var keys = Object.keys(source);
	    for (var k = 0, kl = keys.length; k < kl; ++k) {
	        var key = keys[k];
	        var value = source[key];

	        if (!target[key]) {
	            target[key] = value;
	        }
	        else {
	            target[key] = exports.merge(target[key], value);
	        }
	    }

	    return target;
	};


	exports.decode = function (str) {

	    try {
	        return decodeURIComponent(str.replace(/\+/g, ' '));
	    } catch (e) {
	        return str;
	    }
	};


	exports.compact = function (obj, refs) {

	    if (typeof obj !== 'object' ||
	        obj === null) {

	        return obj;
	    }

	    refs = refs || [];
	    var lookup = refs.indexOf(obj);
	    if (lookup !== -1) {
	        return refs[lookup];
	    }

	    refs.push(obj);

	    if (Array.isArray(obj)) {
	        var compacted = [];

	        for (var i = 0, il = obj.length; i < il; ++i) {
	            if (typeof obj[i] !== 'undefined') {
	                compacted.push(obj[i]);
	            }
	        }

	        return compacted;
	    }

	    var keys = Object.keys(obj);
	    for (i = 0, il = keys.length; i < il; ++i) {
	        var key = keys[i];
	        obj[key] = exports.compact(obj[key], refs);
	    }

	    return obj;
	};


	exports.isRegExp = function (obj) {
	    return Object.prototype.toString.call(obj) === '[object RegExp]';
	};


	exports.isBuffer = function (obj) {

	    if (obj === null ||
	        typeof obj === 'undefined') {

	        return false;
	    }

	    return !!(obj.constructor &&
	        obj.constructor.isBuffer &&
	        obj.constructor.isBuffer(obj));
	};


/***/ },
/* 17 */
/*!******************************************!*\
  !*** ./~/react-router/~/qs/lib/parse.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	// Load modules

	var Utils = __webpack_require__(/*! ./utils */ 16);


	// Declare internals

	var internals = {
	    delimiter: '&',
	    depth: 5,
	    arrayLimit: 20,
	    parameterLimit: 1000
	};


	internals.parseValues = function (str, options) {

	    var obj = {};
	    var parts = str.split(options.delimiter, options.parameterLimit === Infinity ? undefined : options.parameterLimit);

	    for (var i = 0, il = parts.length; i < il; ++i) {
	        var part = parts[i];
	        var pos = part.indexOf(']=') === -1 ? part.indexOf('=') : part.indexOf(']=') + 1;

	        if (pos === -1) {
	            obj[Utils.decode(part)] = '';
	        }
	        else {
	            var key = Utils.decode(part.slice(0, pos));
	            var val = Utils.decode(part.slice(pos + 1));

	            if (Object.prototype.hasOwnProperty(key)) {
	                continue;
	            }

	            if (!obj.hasOwnProperty(key)) {
	                obj[key] = val;
	            }
	            else {
	                obj[key] = [].concat(obj[key]).concat(val);
	            }
	        }
	    }

	    return obj;
	};


	internals.parseObject = function (chain, val, options) {

	    if (!chain.length) {
	        return val;
	    }

	    var root = chain.shift();

	    var obj = {};
	    if (root === '[]') {
	        obj = [];
	        obj = obj.concat(internals.parseObject(chain, val, options));
	    }
	    else {
	        var cleanRoot = root[0] === '[' && root[root.length - 1] === ']' ? root.slice(1, root.length - 1) : root;
	        var index = parseInt(cleanRoot, 10);
	        var indexString = '' + index;
	        if (!isNaN(index) &&
	            root !== cleanRoot &&
	            indexString === cleanRoot &&
	            index >= 0 &&
	            index <= options.arrayLimit) {

	            obj = [];
	            obj[index] = internals.parseObject(chain, val, options);
	        }
	        else {
	            obj[cleanRoot] = internals.parseObject(chain, val, options);
	        }
	    }

	    return obj;
	};


	internals.parseKeys = function (key, val, options) {

	    if (!key) {
	        return;
	    }

	    // The regex chunks

	    var parent = /^([^\[\]]*)/;
	    var child = /(\[[^\[\]]*\])/g;

	    // Get the parent

	    var segment = parent.exec(key);

	    // Don't allow them to overwrite object prototype properties

	    if (Object.prototype.hasOwnProperty(segment[1])) {
	        return;
	    }

	    // Stash the parent if it exists

	    var keys = [];
	    if (segment[1]) {
	        keys.push(segment[1]);
	    }

	    // Loop through children appending to the array until we hit depth

	    var i = 0;
	    while ((segment = child.exec(key)) !== null && i < options.depth) {

	        ++i;
	        if (!Object.prototype.hasOwnProperty(segment[1].replace(/\[|\]/g, ''))) {
	            keys.push(segment[1]);
	        }
	    }

	    // If there's a remainder, just add whatever is left

	    if (segment) {
	        keys.push('[' + key.slice(segment.index) + ']');
	    }

	    return internals.parseObject(keys, val, options);
	};


	module.exports = function (str, options) {

	    if (str === '' ||
	        str === null ||
	        typeof str === 'undefined') {

	        return {};
	    }

	    options = options || {};
	    options.delimiter = typeof options.delimiter === 'string' || Utils.isRegExp(options.delimiter) ? options.delimiter : internals.delimiter;
	    options.depth = typeof options.depth === 'number' ? options.depth : internals.depth;
	    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : internals.arrayLimit;
	    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : internals.parameterLimit;

	    var tempObj = typeof str === 'string' ? internals.parseValues(str, options) : str;
	    var obj = {};

	    // Iterate over the keys and setup the new object

	    var keys = Object.keys(tempObj);
	    for (var i = 0, il = keys.length; i < il; ++i) {
	        var key = keys[i];
	        var newObj = internals.parseKeys(key, tempObj[key], options);
	        obj = Utils.merge(obj, newObj);
	    }

	    return Utils.compact(obj);
	};


/***/ },
/* 18 */
/*!*******************************************************!*\
  !*** ./~/react-router/lib/components/RouteHandler.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var React = __webpack_require__(/*! react */ 3);
	var ContextWrapper = __webpack_require__(/*! ./ContextWrapper */ 19);
	var assign = __webpack_require__(/*! react/lib/Object.assign */ 7);
	var PropTypes = __webpack_require__(/*! ../PropTypes */ 6);

	var REF_NAME = '__routeHandler__';

	/**
	 * A <RouteHandler> component renders the active child route handler
	 * when routes are nested.
	 */

	var RouteHandler = (function (_React$Component) {
	  function RouteHandler() {
	    _classCallCheck(this, RouteHandler);

	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }

	  _inherits(RouteHandler, _React$Component);

	  _createClass(RouteHandler, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        routeDepth: this.context.routeDepth + 1
	      };
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._updateRouteComponent(this.refs[REF_NAME]);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this._updateRouteComponent(this.refs[REF_NAME]);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this._updateRouteComponent(null);
	    }
	  }, {
	    key: '_updateRouteComponent',
	    value: function _updateRouteComponent(component) {
	      this.context.router.setRouteComponentAtDepth(this.getRouteDepth(), component);
	    }
	  }, {
	    key: 'getRouteDepth',
	    value: function getRouteDepth() {
	      return this.context.routeDepth;
	    }
	  }, {
	    key: 'createChildRouteHandler',
	    value: function createChildRouteHandler(props) {
	      var route = this.context.router.getRouteAtDepth(this.getRouteDepth());

	      if (route == null) {
	        return null;
	      }var childProps = assign({}, props || this.props, {
	        ref: REF_NAME,
	        params: this.context.router.getCurrentParams(),
	        query: this.context.router.getCurrentQuery()
	      });

	      return React.createElement(route.handler, childProps);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var handler = this.createChildRouteHandler();
	      // <script/> for things like <CSSTransitionGroup/> that don't like null
	      return handler ? React.createElement(
	        ContextWrapper,
	        null,
	        handler
	      ) : React.createElement('script', null);
	    }
	  }]);

	  return RouteHandler;
	})(React.Component);

	// TODO: Include these in the above class definition
	// once we can use ES7 property initializers.
	// https://github.com/babel/babel/issues/619

	RouteHandler.contextTypes = {
	  routeDepth: PropTypes.number.isRequired,
	  router: PropTypes.router.isRequired
	};

	RouteHandler.childContextTypes = {
	  routeDepth: PropTypes.number.isRequired
	};

	module.exports = RouteHandler;

/***/ },
/* 19 */
/*!*********************************************************!*\
  !*** ./~/react-router/lib/components/ContextWrapper.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	/**
	 * This component is necessary to get around a context warning
	 * present in React 0.13.0. It sovles this by providing a separation
	 * between the "owner" and "parent" contexts.
	 */

	var React = __webpack_require__(/*! react */ 3);

	var ContextWrapper = (function (_React$Component) {
	  function ContextWrapper() {
	    _classCallCheck(this, ContextWrapper);

	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }

	  _inherits(ContextWrapper, _React$Component);

	  _createClass(ContextWrapper, [{
	    key: 'render',
	    value: function render() {
	      return this.props.children;
	    }
	  }]);

	  return ContextWrapper;
	})(React.Component);

	module.exports = ContextWrapper;

/***/ },
/* 20 */
/*!************************************************!*\
  !*** ./~/react-router/lib/components/Route.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var React = __webpack_require__(/*! react */ 3);
	var invariant = __webpack_require__(/*! react/lib/invariant */ 9);
	var PropTypes = __webpack_require__(/*! ../PropTypes */ 6);
	var RouteHandler = __webpack_require__(/*! ./RouteHandler */ 18);

	/**
	 * <Route> components specify components that are rendered to the page when the
	 * URL matches a given pattern.
	 *
	 * Routes are arranged in a nested tree structure. When a new URL is requested,
	 * the tree is searched depth-first to find a route whose path matches the URL.
	 * When one is found, all routes in the tree that lead to it are considered
	 * "active" and their components are rendered into the DOM, nested in the same
	 * order as they are in the tree.
	 *
	 * The preferred way to configure a router is using JSX. The XML-like syntax is
	 * a great way to visualize how routes are laid out in an application.
	 *
	 *   var routes = [
	 *     <Route handler={App}>
	 *       <Route name="login" handler={Login}/>
	 *       <Route name="logout" handler={Logout}/>
	 *       <Route name="about" handler={About}/>
	 *     </Route>
	 *   ];
	 *   
	 *   Router.run(routes, function (Handler) {
	 *     React.render(<Handler/>, document.body);
	 *   });
	 *
	 * Handlers for Route components that contain children can render their active
	 * child route using a <RouteHandler> element.
	 *
	 *   var App = React.createClass({
	 *     render: function () {
	 *       return (
	 *         <div class="application">
	 *           <RouteHandler/>
	 *         </div>
	 *       );
	 *     }
	 *   });
	 *
	 * If no handler is provided for the route, it will render a matched child route.
	 */

	var Route = (function (_React$Component) {
	  function Route() {
	    _classCallCheck(this, Route);

	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }

	  _inherits(Route, _React$Component);

	  _createClass(Route, [{
	    key: 'render',
	    value: function render() {
	      invariant(false, '%s elements are for router configuration only and should not be rendered', this.constructor.name);
	    }
	  }]);

	  return Route;
	})(React.Component);

	// TODO: Include these in the above class definition
	// once we can use ES7 property initializers.
	// https://github.com/babel/babel/issues/619

	Route.propTypes = {
	  name: PropTypes.string,
	  path: PropTypes.string,
	  handler: PropTypes.func,
	  ignoreScrollBehavior: PropTypes.bool
	};

	Route.defaultProps = {
	  handler: RouteHandler
	};

	module.exports = Route;

/***/ },
/* 21 */
/*!***********************************************!*\
  !*** ./~/react-router/lib/components/Link.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var React = __webpack_require__(/*! react */ 3);
	var assign = __webpack_require__(/*! react/lib/Object.assign */ 7);
	var PropTypes = __webpack_require__(/*! ../PropTypes */ 6);

	function isLeftClickEvent(event) {
	  return event.button === 0;
	}

	function isModifiedEvent(event) {
	  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	}

	/**
	 * <Link> components are used to create an <a> element that links to a route.
	 * When that route is active, the link gets an "active" class name (or the
	 * value of its `activeClassName` prop).
	 *
	 * For example, assuming you have the following route:
	 *
	 *   <Route name="showPost" path="/posts/:postID" handler={Post}/>
	 *
	 * You could use the following component to link to that route:
	 *
	 *   <Link to="showPost" params={{ postID: "123" }} />
	 *
	 * In addition to params, links may pass along query string parameters
	 * using the `query` prop.
	 *
	 *   <Link to="showPost" params={{ postID: "123" }} query={{ show:true }}/>
	 */

	var Link = (function (_React$Component) {
	  function Link() {
	    _classCallCheck(this, Link);

	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }

	  _inherits(Link, _React$Component);

	  _createClass(Link, [{
	    key: 'handleClick',
	    value: function handleClick(event) {
	      var allowTransition = true;
	      var clickResult;

	      if (this.props.onClick) clickResult = this.props.onClick(event);

	      if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
	        return;
	      }if (clickResult === false || event.defaultPrevented === true) allowTransition = false;

	      event.preventDefault();

	      if (allowTransition) this.context.router.transitionTo(this.props.to, this.props.params, this.props.query);
	    }
	  }, {
	    key: 'getHref',

	    /**
	     * Returns the value of the "href" attribute to use on the DOM element.
	     */
	    value: function getHref() {
	      return this.context.router.makeHref(this.props.to, this.props.params, this.props.query);
	    }
	  }, {
	    key: 'getClassName',

	    /**
	     * Returns the value of the "class" attribute to use on the DOM element, which contains
	     * the value of the activeClassName property when this <Link> is active.
	     */
	    value: function getClassName() {
	      var className = this.props.className;

	      if (this.getActiveState()) className += ' ' + this.props.activeClassName;

	      return className;
	    }
	  }, {
	    key: 'getActiveState',
	    value: function getActiveState() {
	      return this.context.router.isActive(this.props.to, this.props.params, this.props.query);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var props = assign({}, this.props, {
	        href: this.getHref(),
	        className: this.getClassName(),
	        onClick: this.handleClick.bind(this)
	      });

	      if (props.activeStyle && this.getActiveState()) props.style = props.activeStyle;

	      return React.DOM.a(props, this.props.children);
	    }
	  }]);

	  return Link;
	})(React.Component);

	// TODO: Include these in the above class definition
	// once we can use ES7 property initializers.
	// https://github.com/babel/babel/issues/619

	Link.contextTypes = {
	  router: PropTypes.router.isRequired
	};

	Link.propTypes = {
	  activeClassName: PropTypes.string.isRequired,
	  to: PropTypes.oneOfType([PropTypes.string, PropTypes.route]).isRequired,
	  params: PropTypes.object,
	  query: PropTypes.object,
	  activeStyle: PropTypes.object,
	  onClick: PropTypes.func
	};

	Link.defaultProps = {
	  activeClassName: 'active',
	  className: ''
	};

	module.exports = Link;

/***/ },
/* 22 */
/*!********************************************************!*\
  !*** ./~/react-router/lib/components/NotFoundRoute.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var PropTypes = __webpack_require__(/*! ../PropTypes */ 6);
	var RouteHandler = __webpack_require__(/*! ./RouteHandler */ 18);
	var Route = __webpack_require__(/*! ./Route */ 20);

	/**
	 * A <NotFoundRoute> is a special kind of <Route> that
	 * renders when the beginning of its parent's path matches
	 * but none of its siblings do, including any <DefaultRoute>.
	 * Only one such route may be used at any given level in the
	 * route hierarchy.
	 */

	var NotFoundRoute = (function (_Route) {
	  function NotFoundRoute() {
	    _classCallCheck(this, NotFoundRoute);

	    if (_Route != null) {
	      _Route.apply(this, arguments);
	    }
	  }

	  _inherits(NotFoundRoute, _Route);

	  return NotFoundRoute;
	})(Route);

	// TODO: Include these in the above class definition
	// once we can use ES7 property initializers.
	// https://github.com/babel/babel/issues/619

	NotFoundRoute.propTypes = {
	  name: PropTypes.string,
	  path: PropTypes.falsy,
	  children: PropTypes.falsy,
	  handler: PropTypes.func.isRequired
	};

	NotFoundRoute.defaultProps = {
	  handler: RouteHandler
	};

	module.exports = NotFoundRoute;

/***/ },
/* 23 */
/*!***************************************************!*\
  !*** ./~/react-router/lib/components/Redirect.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var PropTypes = __webpack_require__(/*! ../PropTypes */ 6);
	var Route = __webpack_require__(/*! ./Route */ 20);

	/**
	 * A <Redirect> component is a special kind of <Route> that always
	 * redirects to another route when it matches.
	 */

	var Redirect = (function (_Route) {
	  function Redirect() {
	    _classCallCheck(this, Redirect);

	    if (_Route != null) {
	      _Route.apply(this, arguments);
	    }
	  }

	  _inherits(Redirect, _Route);

	  return Redirect;
	})(Route);

	// TODO: Include these in the above class definition
	// once we can use ES7 property initializers.
	// https://github.com/babel/babel/issues/619

	Redirect.propTypes = {
	  path: PropTypes.string,
	  from: PropTypes.string, // Alias for path.
	  to: PropTypes.string,
	  handler: PropTypes.falsy
	};

	// Redirects should not have a default handler
	Redirect.defaultProps = {};

	module.exports = Redirect;

/***/ },
/* 24 */
/*!******************************************************!*\
  !*** ./~/react-router/lib/locations/HashLocation.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var LocationActions = __webpack_require__(/*! ../actions/LocationActions */ 25);
	var History = __webpack_require__(/*! ../History */ 26);

	var _listeners = [];
	var _isListening = false;
	var _actionType;

	function notifyChange(type) {
	  if (type === LocationActions.PUSH) History.length += 1;

	  var change = {
	    path: HashLocation.getCurrentPath(),
	    type: type
	  };

	  _listeners.forEach(function (listener) {
	    listener.call(HashLocation, change);
	  });
	}

	function ensureSlash() {
	  var path = HashLocation.getCurrentPath();

	  if (path.charAt(0) === '/') {
	    return true;
	  }HashLocation.replace('/' + path);

	  return false;
	}

	function onHashChange() {
	  if (ensureSlash()) {
	    // If we don't have an _actionType then all we know is the hash
	    // changed. It was probably caused by the user clicking the Back
	    // button, but may have also been the Forward button or manual
	    // manipulation. So just guess 'pop'.
	    var curActionType = _actionType;
	    _actionType = null;
	    notifyChange(curActionType || LocationActions.POP);
	  }
	}

	/**
	 * A Location that uses `window.location.hash`.
	 */
	var HashLocation = {

	  addChangeListener: function addChangeListener(listener) {
	    _listeners.push(listener);

	    // Do this BEFORE listening for hashchange.
	    ensureSlash();

	    if (!_isListening) {
	      if (window.addEventListener) {
	        window.addEventListener('hashchange', onHashChange, false);
	      } else {
	        window.attachEvent('onhashchange', onHashChange);
	      }

	      _isListening = true;
	    }
	  },

	  removeChangeListener: function removeChangeListener(listener) {
	    _listeners = _listeners.filter(function (l) {
	      return l !== listener;
	    });

	    if (_listeners.length === 0) {
	      if (window.removeEventListener) {
	        window.removeEventListener('hashchange', onHashChange, false);
	      } else {
	        window.removeEvent('onhashchange', onHashChange);
	      }

	      _isListening = false;
	    }
	  },

	  push: function push(path) {
	    _actionType = LocationActions.PUSH;
	    window.location.hash = path;
	  },

	  replace: function replace(path) {
	    _actionType = LocationActions.REPLACE;
	    window.location.replace(window.location.pathname + window.location.search + '#' + path);
	  },

	  pop: function pop() {
	    _actionType = LocationActions.POP;
	    History.back();
	  },

	  getCurrentPath: function getCurrentPath() {
	    return decodeURI(
	    // We can't use window.location.hash here because it's not
	    // consistent across browsers - Firefox will pre-decode it!
	    window.location.href.split('#')[1] || '');
	  },

	  toString: function toString() {
	    return '<HashLocation>';
	  }

	};

	module.exports = HashLocation;

/***/ },
/* 25 */
/*!*******************************************************!*\
  !*** ./~/react-router/lib/actions/LocationActions.js ***!
  \*******************************************************/
/***/ function(module, exports) {

	/**
	 * Actions that modify the URL.
	 */
	'use strict';

	var LocationActions = {

	  /**
	   * Indicates a new location is being pushed to the history stack.
	   */
	  PUSH: 'push',

	  /**
	   * Indicates the current location should be replaced.
	   */
	  REPLACE: 'replace',

	  /**
	   * Indicates the most recent entry should be removed from the history stack.
	   */
	  POP: 'pop'

	};

	module.exports = LocationActions;

/***/ },
/* 26 */
/*!***************************************!*\
  !*** ./~/react-router/lib/History.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var invariant = __webpack_require__(/*! react/lib/invariant */ 9);
	var canUseDOM = __webpack_require__(/*! react/lib/ExecutionEnvironment */ 27).canUseDOM;

	var History = {

	  /**
	   * The current number of entries in the history.
	   *
	   * Note: This property is read-only.
	   */
	  length: 1,

	  /**
	   * Sends the browser back one entry in the history.
	   */
	  back: function back() {
	    invariant(canUseDOM, 'Cannot use History.back without a DOM');

	    // Do this first so that History.length will
	    // be accurate in location change listeners.
	    History.length -= 1;

	    window.history.back();
	  }

	};

	module.exports = History;

/***/ },
/* 27 */
/*!*************************************************!*\
  !*** external "react/lib/ExecutionEnvironment" ***!
  \*************************************************/
/***/ function(module, exports) {

	module.exports = require("react/lib/ExecutionEnvironment");

/***/ },
/* 28 */
/*!*********************************************************!*\
  !*** ./~/react-router/lib/locations/HistoryLocation.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var LocationActions = __webpack_require__(/*! ../actions/LocationActions */ 25);
	var History = __webpack_require__(/*! ../History */ 26);

	var _listeners = [];
	var _isListening = false;

	function notifyChange(type) {
	  var change = {
	    path: HistoryLocation.getCurrentPath(),
	    type: type
	  };

	  _listeners.forEach(function (listener) {
	    listener.call(HistoryLocation, change);
	  });
	}

	function onPopState(event) {
	  if (event.state === undefined) {
	    return;
	  } // Ignore extraneous popstate events in WebKit.

	  notifyChange(LocationActions.POP);
	}

	/**
	 * A Location that uses HTML5 history.
	 */
	var HistoryLocation = {

	  addChangeListener: function addChangeListener(listener) {
	    _listeners.push(listener);

	    if (!_isListening) {
	      if (window.addEventListener) {
	        window.addEventListener('popstate', onPopState, false);
	      } else {
	        window.attachEvent('onpopstate', onPopState);
	      }

	      _isListening = true;
	    }
	  },

	  removeChangeListener: function removeChangeListener(listener) {
	    _listeners = _listeners.filter(function (l) {
	      return l !== listener;
	    });

	    if (_listeners.length === 0) {
	      if (window.addEventListener) {
	        window.removeEventListener('popstate', onPopState, false);
	      } else {
	        window.removeEvent('onpopstate', onPopState);
	      }

	      _isListening = false;
	    }
	  },

	  push: function push(path) {
	    window.history.pushState({ path: path }, '', path);
	    History.length += 1;
	    notifyChange(LocationActions.PUSH);
	  },

	  replace: function replace(path) {
	    window.history.replaceState({ path: path }, '', path);
	    notifyChange(LocationActions.REPLACE);
	  },

	  pop: History.back,

	  getCurrentPath: function getCurrentPath() {
	    return decodeURI(window.location.pathname + window.location.search);
	  },

	  toString: function toString() {
	    return '<HistoryLocation>';
	  }

	};

	module.exports = HistoryLocation;

/***/ },
/* 29 */
/*!*********************************************************!*\
  !*** ./~/react-router/lib/locations/RefreshLocation.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var HistoryLocation = __webpack_require__(/*! ./HistoryLocation */ 28);
	var History = __webpack_require__(/*! ../History */ 26);

	/**
	 * A Location that uses full page refreshes. This is used as
	 * the fallback for HistoryLocation in browsers that do not
	 * support the HTML5 history API.
	 */
	var RefreshLocation = {

	  push: function push(path) {
	    window.location = path;
	  },

	  replace: function replace(path) {
	    window.location.replace(path);
	  },

	  pop: History.back,

	  getCurrentPath: HistoryLocation.getCurrentPath,

	  toString: function toString() {
	    return '<RefreshLocation>';
	  }

	};

	module.exports = RefreshLocation;

/***/ },
/* 30 */
/*!********************************************************!*\
  !*** ./~/react-router/lib/locations/StaticLocation.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var invariant = __webpack_require__(/*! react/lib/invariant */ 9);

	function throwCannotModify() {
	  invariant(false, 'You cannot modify a static location');
	}

	/**
	 * A location that only ever contains a single path. Useful in
	 * stateless environments like servers where there is no path history,
	 * only the path that was used in the request.
	 */

	var StaticLocation = (function () {
	  function StaticLocation(path) {
	    _classCallCheck(this, StaticLocation);

	    this.path = path;
	  }

	  _createClass(StaticLocation, [{
	    key: 'getCurrentPath',
	    value: function getCurrentPath() {
	      return this.path;
	    }
	  }, {
	    key: 'toString',
	    value: function toString() {
	      return '<StaticLocation path="' + this.path + '">';
	    }
	  }]);

	  return StaticLocation;
	})();

	// TODO: Include these in the above class definition
	// once we can use ES7 property initializers.
	// https://github.com/babel/babel/issues/619

	StaticLocation.prototype.push = throwCannotModify;
	StaticLocation.prototype.replace = throwCannotModify;
	StaticLocation.prototype.pop = throwCannotModify;

	module.exports = StaticLocation;

/***/ },
/* 31 */
/*!******************************************************!*\
  !*** ./~/react-router/lib/locations/TestLocation.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var invariant = __webpack_require__(/*! react/lib/invariant */ 9);
	var LocationActions = __webpack_require__(/*! ../actions/LocationActions */ 25);
	var History = __webpack_require__(/*! ../History */ 26);

	/**
	 * A location that is convenient for testing and does not require a DOM.
	 */

	var TestLocation = (function () {
	  function TestLocation(history) {
	    _classCallCheck(this, TestLocation);

	    this.history = history || [];
	    this.listeners = [];
	    this._updateHistoryLength();
	  }

	  _createClass(TestLocation, [{
	    key: 'needsDOM',
	    get: function () {
	      return false;
	    }
	  }, {
	    key: '_updateHistoryLength',
	    value: function _updateHistoryLength() {
	      History.length = this.history.length;
	    }
	  }, {
	    key: '_notifyChange',
	    value: function _notifyChange(type) {
	      var change = {
	        path: this.getCurrentPath(),
	        type: type
	      };

	      for (var i = 0, len = this.listeners.length; i < len; ++i) this.listeners[i].call(this, change);
	    }
	  }, {
	    key: 'addChangeListener',
	    value: function addChangeListener(listener) {
	      this.listeners.push(listener);
	    }
	  }, {
	    key: 'removeChangeListener',
	    value: function removeChangeListener(listener) {
	      this.listeners = this.listeners.filter(function (l) {
	        return l !== listener;
	      });
	    }
	  }, {
	    key: 'push',
	    value: function push(path) {
	      this.history.push(path);
	      this._updateHistoryLength();
	      this._notifyChange(LocationActions.PUSH);
	    }
	  }, {
	    key: 'replace',
	    value: function replace(path) {
	      invariant(this.history.length, 'You cannot replace the current path with no history');

	      this.history[this.history.length - 1] = path;

	      this._notifyChange(LocationActions.REPLACE);
	    }
	  }, {
	    key: 'pop',
	    value: function pop() {
	      this.history.pop();
	      this._updateHistoryLength();
	      this._notifyChange(LocationActions.POP);
	    }
	  }, {
	    key: 'getCurrentPath',
	    value: function getCurrentPath() {
	      return this.history[this.history.length - 1];
	    }
	  }, {
	    key: 'toString',
	    value: function toString() {
	      return '<TestLocation>';
	    }
	  }]);

	  return TestLocation;
	})();

	module.exports = TestLocation;

/***/ },
/* 32 */
/*!****************************************************************!*\
  !*** ./~/react-router/lib/behaviors/ImitateBrowserBehavior.js ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var LocationActions = __webpack_require__(/*! ../actions/LocationActions */ 25);

	/**
	 * A scroll behavior that attempts to imitate the default behavior
	 * of modern browsers.
	 */
	var ImitateBrowserBehavior = {

	  updateScrollPosition: function updateScrollPosition(position, actionType) {
	    switch (actionType) {
	      case LocationActions.PUSH:
	      case LocationActions.REPLACE:
	        window.scrollTo(0, 0);
	        break;
	      case LocationActions.POP:
	        if (position) {
	          window.scrollTo(position.x, position.y);
	        } else {
	          window.scrollTo(0, 0);
	        }
	        break;
	    }
	  }

	};

	module.exports = ImitateBrowserBehavior;

/***/ },
/* 33 */
/*!*************************************************************!*\
  !*** ./~/react-router/lib/behaviors/ScrollToTopBehavior.js ***!
  \*************************************************************/
/***/ function(module, exports) {

	/**
	 * A scroll behavior that always scrolls to the top of the page
	 * after a transition.
	 */
	"use strict";

	var ScrollToTopBehavior = {

	  updateScrollPosition: function updateScrollPosition() {
	    window.scrollTo(0, 0);
	  }

	};

	module.exports = ScrollToTopBehavior;

/***/ },
/* 34 */
/*!******************************************!*\
  !*** ./~/react-router/lib/Navigation.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var PropTypes = __webpack_require__(/*! ./PropTypes */ 6);

	/**
	 * A mixin for components that modify the URL.
	 *
	 * Example:
	 *
	 *   var MyLink = React.createClass({
	 *     mixins: [ Router.Navigation ],
	 *     handleClick(event) {
	 *       event.preventDefault();
	 *       this.transitionTo('aRoute', { the: 'params' }, { the: 'query' });
	 *     },
	 *     render() {
	 *       return (
	 *         <a onClick={this.handleClick}>Click me!</a>
	 *       );
	 *     }
	 *   });
	 */
	var Navigation = {

	  contextTypes: {
	    router: PropTypes.router.isRequired
	  },

	  /**
	   * Returns an absolute URL path created from the given route
	   * name, URL parameters, and query values.
	   */
	  makePath: function makePath(to, params, query) {
	    return this.context.router.makePath(to, params, query);
	  },

	  /**
	   * Returns a string that may safely be used as the href of a
	   * link to the route with the given name.
	   */
	  makeHref: function makeHref(to, params, query) {
	    return this.context.router.makeHref(to, params, query);
	  },

	  /**
	   * Transitions to the URL specified in the arguments by pushing
	   * a new URL onto the history stack.
	   */
	  transitionTo: function transitionTo(to, params, query) {
	    this.context.router.transitionTo(to, params, query);
	  },

	  /**
	   * Transitions to the URL specified in the arguments by replacing
	   * the current URL in the history stack.
	   */
	  replaceWith: function replaceWith(to, params, query) {
	    this.context.router.replaceWith(to, params, query);
	  },

	  /**
	   * Transitions to the previous URL.
	   */
	  goBack: function goBack() {
	    return this.context.router.goBack();
	  }

	};

	module.exports = Navigation;

/***/ },
/* 35 */
/*!*************************************!*\
  !*** ./~/react-router/lib/State.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var PropTypes = __webpack_require__(/*! ./PropTypes */ 6);

	/**
	 * A mixin for components that need to know the path, routes, URL
	 * params and query that are currently active.
	 *
	 * Example:
	 *
	 *   var AboutLink = React.createClass({
	 *     mixins: [ Router.State ],
	 *     render() {
	 *       var className = this.props.className;
	 *
	 *       if (this.isActive('about'))
	 *         className += ' is-active';
	 *
	 *       return React.DOM.a({ className: className }, this.props.children);
	 *     }
	 *   });
	 */
	var State = {

	  contextTypes: {
	    router: PropTypes.router.isRequired
	  },

	  /**
	   * Returns the current URL path.
	   */
	  getPath: function getPath() {
	    return this.context.router.getCurrentPath();
	  },

	  /**
	   * Returns the current URL path without the query string.
	   */
	  getPathname: function getPathname() {
	    return this.context.router.getCurrentPathname();
	  },

	  /**
	   * Returns an object of the URL params that are currently active.
	   */
	  getParams: function getParams() {
	    return this.context.router.getCurrentParams();
	  },

	  /**
	   * Returns an object of the query params that are currently active.
	   */
	  getQuery: function getQuery() {
	    return this.context.router.getCurrentQuery();
	  },

	  /**
	   * Returns an array of the routes that are currently active.
	   */
	  getRoutes: function getRoutes() {
	    return this.context.router.getCurrentRoutes();
	  },

	  /**
	   * A helper method to determine if a given route, params, and query
	   * are active.
	   */
	  isActive: function isActive(to, params, query) {
	    return this.context.router.isActive(to, params, query);
	  }

	};

	module.exports = State;

/***/ },
/* 36 */
/*!*************************************************************!*\
  !*** ./~/react-router/lib/createRoutesFromReactChildren.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* jshint -W084 */
	'use strict';

	var React = __webpack_require__(/*! react */ 3);
	var assign = __webpack_require__(/*! react/lib/Object.assign */ 7);
	var warning = __webpack_require__(/*! react/lib/warning */ 10);
	var DefaultRoute = __webpack_require__(/*! ./components/DefaultRoute */ 5);
	var NotFoundRoute = __webpack_require__(/*! ./components/NotFoundRoute */ 22);
	var Redirect = __webpack_require__(/*! ./components/Redirect */ 23);
	var Route = __webpack_require__(/*! ./Route */ 8);

	function checkPropTypes(componentName, propTypes, props) {
	  componentName = componentName || 'UnknownComponent';

	  for (var propName in propTypes) {
	    if (propTypes.hasOwnProperty(propName)) {
	      var error = propTypes[propName](props, propName, componentName);

	      if (error instanceof Error) warning(false, error.message);
	    }
	  }
	}

	function createRouteOptions(props) {
	  var options = assign({}, props);
	  var handler = options.handler;

	  if (handler) {
	    options.onEnter = handler.willTransitionTo;
	    options.onLeave = handler.willTransitionFrom;
	  }

	  return options;
	}

	function createRouteFromReactElement(element) {
	  if (!React.isValidElement(element)) {
	    return;
	  }var type = element.type;
	  var props = assign({}, type.defaultProps, element.props);

	  if (type.propTypes) checkPropTypes(type.displayName, type.propTypes, props);

	  if (type === DefaultRoute) {
	    return Route.createDefaultRoute(createRouteOptions(props));
	  }if (type === NotFoundRoute) {
	    return Route.createNotFoundRoute(createRouteOptions(props));
	  }if (type === Redirect) {
	    return Route.createRedirect(createRouteOptions(props));
	  }return Route.createRoute(createRouteOptions(props), function () {
	    if (props.children) createRoutesFromReactChildren(props.children);
	  });
	}

	/**
	 * Creates and returns an array of routes created from the given
	 * ReactChildren, all of which should be one of <Route>, <DefaultRoute>,
	 * <NotFoundRoute>, or <Redirect>, e.g.:
	 *
	 *   var { createRoutesFromReactChildren, Route, Redirect } = require('react-router');
	 *
	 *   var routes = createRoutesFromReactChildren(
	 *     <Route path="/" handler={App}>
	 *       <Route name="user" path="/user/:userId" handler={User}>
	 *         <Route name="task" path="tasks/:taskId" handler={Task}/>
	 *         <Redirect from="todos/:taskId" to="task"/>
	 *       </Route>
	 *     </Route>
	 *   );
	 */
	function createRoutesFromReactChildren(children) {
	  var routes = [];

	  React.Children.forEach(children, function (child) {
	    if (child = createRouteFromReactElement(child)) routes.push(child);
	  });

	  return routes;
	}

	module.exports = createRoutesFromReactChildren;

/***/ },
/* 37 */
/*!********************************************!*\
  !*** ./~/react-router/lib/createRouter.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* jshint -W058 */
	'use strict';

	var React = __webpack_require__(/*! react */ 3);
	var warning = __webpack_require__(/*! react/lib/warning */ 10);
	var invariant = __webpack_require__(/*! react/lib/invariant */ 9);
	var canUseDOM = __webpack_require__(/*! react/lib/ExecutionEnvironment */ 27).canUseDOM;
	var LocationActions = __webpack_require__(/*! ./actions/LocationActions */ 25);
	var ImitateBrowserBehavior = __webpack_require__(/*! ./behaviors/ImitateBrowserBehavior */ 32);
	var HashLocation = __webpack_require__(/*! ./locations/HashLocation */ 24);
	var HistoryLocation = __webpack_require__(/*! ./locations/HistoryLocation */ 28);
	var RefreshLocation = __webpack_require__(/*! ./locations/RefreshLocation */ 29);
	var StaticLocation = __webpack_require__(/*! ./locations/StaticLocation */ 30);
	var ScrollHistory = __webpack_require__(/*! ./ScrollHistory */ 38);
	var createRoutesFromReactChildren = __webpack_require__(/*! ./createRoutesFromReactChildren */ 36);
	var isReactChildren = __webpack_require__(/*! ./isReactChildren */ 40);
	var Transition = __webpack_require__(/*! ./Transition */ 41);
	var PropTypes = __webpack_require__(/*! ./PropTypes */ 6);
	var Redirect = __webpack_require__(/*! ./Redirect */ 43);
	var History = __webpack_require__(/*! ./History */ 26);
	var Cancellation = __webpack_require__(/*! ./Cancellation */ 42);
	var Match = __webpack_require__(/*! ./Match */ 44);
	var Route = __webpack_require__(/*! ./Route */ 8);
	var supportsHistory = __webpack_require__(/*! ./supportsHistory */ 45);
	var PathUtils = __webpack_require__(/*! ./PathUtils */ 11);

	/**
	 * The default location for new routers.
	 */
	var DEFAULT_LOCATION = canUseDOM ? HashLocation : '/';

	/**
	 * The default scroll behavior for new routers.
	 */
	var DEFAULT_SCROLL_BEHAVIOR = canUseDOM ? ImitateBrowserBehavior : null;

	function hasProperties(object, properties) {
	  for (var propertyName in properties) if (properties.hasOwnProperty(propertyName) && object[propertyName] !== properties[propertyName]) {
	    return false;
	  }return true;
	}

	function hasMatch(routes, route, prevParams, nextParams, prevQuery, nextQuery) {
	  return routes.some(function (r) {
	    if (r !== route) return false;

	    var paramNames = route.paramNames;
	    var paramName;

	    // Ensure that all params the route cares about did not change.
	    for (var i = 0, len = paramNames.length; i < len; ++i) {
	      paramName = paramNames[i];

	      if (nextParams[paramName] !== prevParams[paramName]) return false;
	    }

	    // Ensure the query hasn't changed.
	    return hasProperties(prevQuery, nextQuery) && hasProperties(nextQuery, prevQuery);
	  });
	}

	function addRoutesToNamedRoutes(routes, namedRoutes) {
	  var route;
	  for (var i = 0, len = routes.length; i < len; ++i) {
	    route = routes[i];

	    if (route.name) {
	      invariant(namedRoutes[route.name] == null, 'You may not have more than one route named "%s"', route.name);

	      namedRoutes[route.name] = route;
	    }

	    if (route.childRoutes) addRoutesToNamedRoutes(route.childRoutes, namedRoutes);
	  }
	}

	function routeIsActive(activeRoutes, routeName) {
	  return activeRoutes.some(function (route) {
	    return route.name === routeName;
	  });
	}

	function paramsAreActive(activeParams, params) {
	  for (var property in params) if (String(activeParams[property]) !== String(params[property])) {
	    return false;
	  }return true;
	}

	function queryIsActive(activeQuery, query) {
	  for (var property in query) if (String(activeQuery[property]) !== String(query[property])) {
	    return false;
	  }return true;
	}

	/**
	 * Creates and returns a new router using the given options. A router
	 * is a ReactComponent class that knows how to react to changes in the
	 * URL and keep the contents of the page in sync.
	 *
	 * Options may be any of the following:
	 *
	 * - routes           (required) The route config
	 * - location         The location to use. Defaults to HashLocation when
	 *                    the DOM is available, "/" otherwise
	 * - scrollBehavior   The scroll behavior to use. Defaults to ImitateBrowserBehavior
	 *                    when the DOM is available, null otherwise
	 * - onError          A function that is used to handle errors
	 * - onAbort          A function that is used to handle aborted transitions
	 *
	 * When rendering in a server-side environment, the location should simply
	 * be the URL path that was used in the request, including the query string.
	 */
	function createRouter(options) {
	  options = options || {};

	  if (isReactChildren(options)) options = { routes: options };

	  var mountedComponents = [];
	  var location = options.location || DEFAULT_LOCATION;
	  var scrollBehavior = options.scrollBehavior || DEFAULT_SCROLL_BEHAVIOR;
	  var state = {};
	  var nextState = {};
	  var pendingTransition = null;
	  var dispatchHandler = null;

	  if (typeof location === 'string') location = new StaticLocation(location);

	  if (location instanceof StaticLocation) {
	    warning(!canUseDOM || ("production") === 'test', 'You should not use a static location in a DOM environment because ' + 'the router will not be kept in sync with the current URL');
	  } else {
	    invariant(canUseDOM || location.needsDOM === false, 'You cannot use %s without a DOM', location);
	  }

	  // Automatically fall back to full page refreshes in
	  // browsers that don't support the HTML history API.
	  if (location === HistoryLocation && !supportsHistory()) location = RefreshLocation;

	  var Router = React.createClass({

	    displayName: 'Router',

	    statics: {

	      isRunning: false,

	      cancelPendingTransition: function cancelPendingTransition() {
	        if (pendingTransition) {
	          pendingTransition.cancel();
	          pendingTransition = null;
	        }
	      },

	      clearAllRoutes: function clearAllRoutes() {
	        Router.cancelPendingTransition();
	        Router.namedRoutes = {};
	        Router.routes = [];
	      },

	      /**
	       * Adds routes to this router from the given children object (see ReactChildren).
	       */
	      addRoutes: function addRoutes(routes) {
	        if (isReactChildren(routes)) routes = createRoutesFromReactChildren(routes);

	        addRoutesToNamedRoutes(routes, Router.namedRoutes);

	        Router.routes.push.apply(Router.routes, routes);
	      },

	      /**
	       * Replaces routes of this router from the given children object (see ReactChildren).
	       */
	      replaceRoutes: function replaceRoutes(routes) {
	        Router.clearAllRoutes();
	        Router.addRoutes(routes);
	        Router.refresh();
	      },

	      /**
	       * Performs a match of the given path against this router and returns an object
	       * with the { routes, params, pathname, query } that match. Returns null if no
	       * match can be made.
	       */
	      match: function match(path) {
	        return Match.findMatch(Router.routes, path);
	      },

	      /**
	       * Returns an absolute URL path created from the given route
	       * name, URL parameters, and query.
	       */
	      makePath: function makePath(to, params, query) {
	        var path;
	        if (PathUtils.isAbsolute(to)) {
	          path = to;
	        } else {
	          var route = to instanceof Route ? to : Router.namedRoutes[to];

	          invariant(route instanceof Route, 'Cannot find a route named "%s"', to);

	          path = route.path;
	        }

	        return PathUtils.withQuery(PathUtils.injectParams(path, params), query);
	      },

	      /**
	       * Returns a string that may safely be used as the href of a link
	       * to the route with the given name, URL parameters, and query.
	       */
	      makeHref: function makeHref(to, params, query) {
	        var path = Router.makePath(to, params, query);
	        return location === HashLocation ? '#' + path : path;
	      },

	      /**
	       * Transitions to the URL specified in the arguments by pushing
	       * a new URL onto the history stack.
	       */
	      transitionTo: function transitionTo(to, params, query) {
	        var path = Router.makePath(to, params, query);

	        if (pendingTransition) {
	          // Replace so pending location does not stay in history.
	          location.replace(path);
	        } else {
	          location.push(path);
	        }
	      },

	      /**
	       * Transitions to the URL specified in the arguments by replacing
	       * the current URL in the history stack.
	       */
	      replaceWith: function replaceWith(to, params, query) {
	        location.replace(Router.makePath(to, params, query));
	      },

	      /**
	       * Transitions to the previous URL if one is available. Returns true if the
	       * router was able to go back, false otherwise.
	       *
	       * Note: The router only tracks history entries in your application, not the
	       * current browser session, so you can safely call this function without guarding
	       * against sending the user back to some other site. However, when using
	       * RefreshLocation (which is the fallback for HistoryLocation in browsers that
	       * don't support HTML5 history) this method will *always* send the client back
	       * because we cannot reliably track history length.
	       */
	      goBack: function goBack() {
	        if (History.length > 1 || location === RefreshLocation) {
	          location.pop();
	          return true;
	        }

	        warning(false, 'goBack() was ignored because there is no router history');

	        return false;
	      },

	      handleAbort: options.onAbort || function (abortReason) {
	        if (location instanceof StaticLocation) throw new Error('Unhandled aborted transition! Reason: ' + abortReason);

	        if (abortReason instanceof Cancellation) {
	          return;
	        } else if (abortReason instanceof Redirect) {
	          location.replace(Router.makePath(abortReason.to, abortReason.params, abortReason.query));
	        } else {
	          location.pop();
	        }
	      },

	      handleError: options.onError || function (error) {
	        // Throw so we don't silently swallow async errors.
	        throw error; // This error probably originated in a transition hook.
	      },

	      handleLocationChange: function handleLocationChange(change) {
	        Router.dispatch(change.path, change.type);
	      },

	      /**
	       * Performs a transition to the given path and calls callback(error, abortReason)
	       * when the transition is finished. If both arguments are null the router's state
	       * was updated. Otherwise the transition did not complete.
	       *
	       * In a transition, a router first determines which routes are involved by beginning
	       * with the current route, up the route tree to the first parent route that is shared
	       * with the destination route, and back down the tree to the destination route. The
	       * willTransitionFrom hook is invoked on all route handlers we're transitioning away
	       * from, in reverse nesting order. Likewise, the willTransitionTo hook is invoked on
	       * all route handlers we're transitioning to.
	       *
	       * Both willTransitionFrom and willTransitionTo hooks may either abort or redirect the
	       * transition. To resolve asynchronously, they may use the callback argument. If no
	       * hooks wait, the transition is fully synchronous.
	       */
	      dispatch: function dispatch(path, action) {
	        Router.cancelPendingTransition();

	        var prevPath = state.path;
	        var isRefreshing = action == null;

	        if (prevPath === path && !isRefreshing) {
	          return;
	        } // Nothing to do!

	        // Record the scroll position as early as possible to
	        // get it before browsers try update it automatically.
	        if (prevPath && action === LocationActions.PUSH) Router.recordScrollPosition(prevPath);

	        var match = Router.match(path);

	        warning(match != null, 'No route matches path "%s". Make sure you have <Route path="%s"> somewhere in your routes', path, path);

	        if (match == null) match = {};

	        var prevRoutes = state.routes || [];
	        var prevParams = state.params || {};
	        var prevQuery = state.query || {};

	        var nextRoutes = match.routes || [];
	        var nextParams = match.params || {};
	        var nextQuery = match.query || {};

	        var fromRoutes, toRoutes;
	        if (prevRoutes.length) {
	          fromRoutes = prevRoutes.filter(function (route) {
	            return !hasMatch(nextRoutes, route, prevParams, nextParams, prevQuery, nextQuery);
	          });

	          toRoutes = nextRoutes.filter(function (route) {
	            return !hasMatch(prevRoutes, route, prevParams, nextParams, prevQuery, nextQuery);
	          });
	        } else {
	          fromRoutes = [];
	          toRoutes = nextRoutes;
	        }

	        var transition = new Transition(path, Router.replaceWith.bind(Router, path));
	        pendingTransition = transition;

	        var fromComponents = mountedComponents.slice(prevRoutes.length - fromRoutes.length);

	        Transition.from(transition, fromRoutes, fromComponents, function (error) {
	          if (error || transition.abortReason) return dispatchHandler.call(Router, error, transition); // No need to continue.

	          Transition.to(transition, toRoutes, nextParams, nextQuery, function (error) {
	            dispatchHandler.call(Router, error, transition, {
	              path: path,
	              action: action,
	              pathname: match.pathname,
	              routes: nextRoutes,
	              params: nextParams,
	              query: nextQuery
	            });
	          });
	        });
	      },

	      /**
	       * Starts this router and calls callback(router, state) when the route changes.
	       *
	       * If the router's location is static (i.e. a URL path in a server environment)
	       * the callback is called only once. Otherwise, the location should be one of the
	       * Router.*Location objects (e.g. Router.HashLocation or Router.HistoryLocation).
	       */
	      run: function run(callback) {
	        invariant(!Router.isRunning, 'Router is already running');

	        dispatchHandler = function (error, transition, newState) {
	          if (error) Router.handleError(error);

	          if (pendingTransition !== transition) return;

	          pendingTransition = null;

	          if (transition.abortReason) {
	            Router.handleAbort(transition.abortReason);
	          } else {
	            callback.call(Router, Router, nextState = newState);
	          }
	        };

	        if (!(location instanceof StaticLocation)) {
	          if (location.addChangeListener) location.addChangeListener(Router.handleLocationChange);

	          Router.isRunning = true;
	        }

	        // Bootstrap using the current path.
	        Router.refresh();
	      },

	      refresh: function refresh() {
	        Router.dispatch(location.getCurrentPath(), null);
	      },

	      stop: function stop() {
	        Router.cancelPendingTransition();

	        if (location.removeChangeListener) location.removeChangeListener(Router.handleLocationChange);

	        Router.isRunning = false;
	      },

	      getLocation: function getLocation() {
	        return location;
	      },

	      getScrollBehavior: function getScrollBehavior() {
	        return scrollBehavior;
	      },

	      getRouteAtDepth: function getRouteAtDepth(routeDepth) {
	        var routes = state.routes;
	        return routes && routes[routeDepth];
	      },

	      setRouteComponentAtDepth: function setRouteComponentAtDepth(routeDepth, component) {
	        mountedComponents[routeDepth] = component;
	      },

	      /**
	       * Returns the current URL path + query string.
	       */
	      getCurrentPath: function getCurrentPath() {
	        return state.path;
	      },

	      /**
	       * Returns the current URL path without the query string.
	       */
	      getCurrentPathname: function getCurrentPathname() {
	        return state.pathname;
	      },

	      /**
	       * Returns an object of the currently active URL parameters.
	       */
	      getCurrentParams: function getCurrentParams() {
	        return state.params;
	      },

	      /**
	       * Returns an object of the currently active query parameters.
	       */
	      getCurrentQuery: function getCurrentQuery() {
	        return state.query;
	      },

	      /**
	       * Returns an array of the currently active routes.
	       */
	      getCurrentRoutes: function getCurrentRoutes() {
	        return state.routes;
	      },

	      /**
	       * Returns true if the given route, params, and query are active.
	       */
	      isActive: function isActive(to, params, query) {
	        if (PathUtils.isAbsolute(to)) {
	          return to === state.path;
	        }return routeIsActive(state.routes, to) && paramsAreActive(state.params, params) && (query == null || queryIsActive(state.query, query));
	      }

	    },

	    mixins: [ScrollHistory],

	    propTypes: {
	      children: PropTypes.falsy
	    },

	    childContextTypes: {
	      routeDepth: PropTypes.number.isRequired,
	      router: PropTypes.router.isRequired
	    },

	    getChildContext: function getChildContext() {
	      return {
	        routeDepth: 1,
	        router: Router
	      };
	    },

	    getInitialState: function getInitialState() {
	      return state = nextState;
	    },

	    componentWillReceiveProps: function componentWillReceiveProps() {
	      this.setState(state = nextState);
	    },

	    componentWillUnmount: function componentWillUnmount() {
	      Router.stop();
	    },

	    render: function render() {
	      var route = Router.getRouteAtDepth(0);
	      return route ? React.createElement(route.handler, this.props) : null;
	    }

	  });

	  Router.clearAllRoutes();

	  if (options.routes) Router.addRoutes(options.routes);

	  return Router;
	}

	module.exports = createRouter;

/***/ },
/* 38 */
/*!*********************************************!*\
  !*** ./~/react-router/lib/ScrollHistory.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var invariant = __webpack_require__(/*! react/lib/invariant */ 9);
	var canUseDOM = __webpack_require__(/*! react/lib/ExecutionEnvironment */ 27).canUseDOM;
	var getWindowScrollPosition = __webpack_require__(/*! ./getWindowScrollPosition */ 39);

	function shouldUpdateScroll(state, prevState) {
	  if (!prevState) {
	    return true;
	  } // Don't update scroll position when only the query has changed.
	  if (state.pathname === prevState.pathname) {
	    return false;
	  }var routes = state.routes;
	  var prevRoutes = prevState.routes;

	  var sharedAncestorRoutes = routes.filter(function (route) {
	    return prevRoutes.indexOf(route) !== -1;
	  });

	  return !sharedAncestorRoutes.some(function (route) {
	    return route.ignoreScrollBehavior;
	  });
	}

	/**
	 * Provides the router with the ability to manage window scroll position
	 * according to its scroll behavior.
	 */
	var ScrollHistory = {

	  statics: {

	    /**
	     * Records curent scroll position as the last known position for the given URL path.
	     */
	    recordScrollPosition: function recordScrollPosition(path) {
	      if (!this.scrollHistory) this.scrollHistory = {};

	      this.scrollHistory[path] = getWindowScrollPosition();
	    },

	    /**
	     * Returns the last known scroll position for the given URL path.
	     */
	    getScrollPosition: function getScrollPosition(path) {
	      if (!this.scrollHistory) this.scrollHistory = {};

	      return this.scrollHistory[path] || null;
	    }

	  },

	  componentWillMount: function componentWillMount() {
	    invariant(this.constructor.getScrollBehavior() == null || canUseDOM, 'Cannot use scroll behavior without a DOM');
	  },

	  componentDidMount: function componentDidMount() {
	    this._updateScroll();
	  },

	  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
	    this._updateScroll(prevState);
	  },

	  _updateScroll: function _updateScroll(prevState) {
	    if (!shouldUpdateScroll(this.state, prevState)) {
	      return;
	    }var scrollBehavior = this.constructor.getScrollBehavior();

	    if (scrollBehavior) scrollBehavior.updateScrollPosition(this.constructor.getScrollPosition(this.state.path), this.state.action);
	  }

	};

	module.exports = ScrollHistory;

/***/ },
/* 39 */
/*!*******************************************************!*\
  !*** ./~/react-router/lib/getWindowScrollPosition.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var invariant = __webpack_require__(/*! react/lib/invariant */ 9);
	var canUseDOM = __webpack_require__(/*! react/lib/ExecutionEnvironment */ 27).canUseDOM;

	/**
	 * Returns the current scroll position of the window as { x, y }.
	 */
	function getWindowScrollPosition() {
	  invariant(canUseDOM, 'Cannot get current scroll position without a DOM');

	  return {
	    x: window.pageXOffset || document.documentElement.scrollLeft,
	    y: window.pageYOffset || document.documentElement.scrollTop
	  };
	}

	module.exports = getWindowScrollPosition;

/***/ },
/* 40 */
/*!***********************************************!*\
  !*** ./~/react-router/lib/isReactChildren.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(/*! react */ 3);

	function isValidChild(object) {
	  return object == null || React.isValidElement(object);
	}

	function isReactChildren(object) {
	  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
	}

	module.exports = isReactChildren;

/***/ },
/* 41 */
/*!******************************************!*\
  !*** ./~/react-router/lib/Transition.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	/* jshint -W058 */

	'use strict';

	var Cancellation = __webpack_require__(/*! ./Cancellation */ 42);
	var Redirect = __webpack_require__(/*! ./Redirect */ 43);

	/**
	 * Encapsulates a transition to a given path.
	 *
	 * The willTransitionTo and willTransitionFrom handlers receive
	 * an instance of this class as their first argument.
	 */
	function Transition(path, retry) {
	  this.path = path;
	  this.abortReason = null;
	  // TODO: Change this to router.retryTransition(transition)
	  this.retry = retry.bind(this);
	}

	Transition.prototype.abort = function (reason) {
	  if (this.abortReason == null) this.abortReason = reason || 'ABORT';
	};

	Transition.prototype.redirect = function (to, params, query) {
	  this.abort(new Redirect(to, params, query));
	};

	Transition.prototype.cancel = function () {
	  this.abort(new Cancellation());
	};

	Transition.from = function (transition, routes, components, callback) {
	  routes.reduce(function (callback, route, index) {
	    return function (error) {
	      if (error || transition.abortReason) {
	        callback(error);
	      } else if (route.onLeave) {
	        try {
	          route.onLeave(transition, components[index], callback);

	          // If there is no callback in the argument list, call it automatically.
	          if (route.onLeave.length < 3) callback();
	        } catch (e) {
	          callback(e);
	        }
	      } else {
	        callback();
	      }
	    };
	  }, callback)();
	};

	Transition.to = function (transition, routes, params, query, callback) {
	  routes.reduceRight(function (callback, route) {
	    return function (error) {
	      if (error || transition.abortReason) {
	        callback(error);
	      } else if (route.onEnter) {
	        try {
	          route.onEnter(transition, params, query, callback);

	          // If there is no callback in the argument list, call it automatically.
	          if (route.onEnter.length < 4) callback();
	        } catch (e) {
	          callback(e);
	        }
	      } else {
	        callback();
	      }
	    };
	  }, callback)();
	};

	module.exports = Transition;

/***/ },
/* 42 */
/*!********************************************!*\
  !*** ./~/react-router/lib/Cancellation.js ***!
  \********************************************/
/***/ function(module, exports) {

	/**
	 * Represents a cancellation caused by navigating away
	 * before the previous transition has fully resolved.
	 */
	"use strict";

	function Cancellation() {}

	module.exports = Cancellation;

/***/ },
/* 43 */
/*!****************************************!*\
  !*** ./~/react-router/lib/Redirect.js ***!
  \****************************************/
/***/ function(module, exports) {

	/**
	 * Encapsulates a redirect to the given route.
	 */
	"use strict";

	function Redirect(to, params, query) {
	  this.to = to;
	  this.params = params;
	  this.query = query;
	}

	module.exports = Redirect;

/***/ },
/* 44 */
/*!*************************************!*\
  !*** ./~/react-router/lib/Match.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	/* jshint -W084 */
	var PathUtils = __webpack_require__(/*! ./PathUtils */ 11);

	function deepSearch(route, pathname, query) {
	  // Check the subtree first to find the most deeply-nested match.
	  var childRoutes = route.childRoutes;
	  if (childRoutes) {
	    var match, childRoute;
	    for (var i = 0, len = childRoutes.length; i < len; ++i) {
	      childRoute = childRoutes[i];

	      if (childRoute.isDefault || childRoute.isNotFound) continue; // Check these in order later.

	      if (match = deepSearch(childRoute, pathname, query)) {
	        // A route in the subtree matched! Add this route and we're done.
	        match.routes.unshift(route);
	        return match;
	      }
	    }
	  }

	  // No child routes matched; try the default route.
	  var defaultRoute = route.defaultRoute;
	  if (defaultRoute && (params = PathUtils.extractParams(defaultRoute.path, pathname))) {
	    return new Match(pathname, params, query, [route, defaultRoute]);
	  } // Does the "not found" route match?
	  var notFoundRoute = route.notFoundRoute;
	  if (notFoundRoute && (params = PathUtils.extractParams(notFoundRoute.path, pathname))) {
	    return new Match(pathname, params, query, [route, notFoundRoute]);
	  } // Last attempt: check this route.
	  var params = PathUtils.extractParams(route.path, pathname);
	  if (params) {
	    return new Match(pathname, params, query, [route]);
	  }return null;
	}

	var Match = (function () {
	  function Match(pathname, params, query, routes) {
	    _classCallCheck(this, Match);

	    this.pathname = pathname;
	    this.params = params;
	    this.query = query;
	    this.routes = routes;
	  }

	  _createClass(Match, null, [{
	    key: 'findMatch',

	    /**
	     * Attempts to match depth-first a route in the given route's
	     * subtree against the given path and returns the match if it
	     * succeeds, null if no match can be made.
	     */
	    value: function findMatch(routes, path) {
	      var pathname = PathUtils.withoutQuery(path);
	      var query = PathUtils.extractQuery(path);
	      var match = null;

	      for (var i = 0, len = routes.length; match == null && i < len; ++i) match = deepSearch(routes[i], pathname, query);

	      return match;
	    }
	  }]);

	  return Match;
	})();

	module.exports = Match;

/***/ },
/* 45 */
/*!***********************************************!*\
  !*** ./~/react-router/lib/supportsHistory.js ***!
  \***********************************************/
/***/ function(module, exports) {

	'use strict';

	function supportsHistory() {
	  /*! taken from modernizr
	   * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
	   * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
	   * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
	   */
	  var ua = navigator.userAgent;
	  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
	    return false;
	  }
	  return window.history && 'pushState' in window.history;
	}

	module.exports = supportsHistory;

/***/ },
/* 46 */
/*!*****************************************!*\
  !*** ./~/react-router/lib/runRouter.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var createRouter = __webpack_require__(/*! ./createRouter */ 37);

	/**
	 * A high-level convenience method that creates, configures, and
	 * runs a router in one shot. The method signature is:
	 *
	 *   Router.run(routes[, location ], callback);
	 *
	 * Using `window.location.hash` to manage the URL, you could do:
	 *
	 *   Router.run(routes, function (Handler) {
	 *     React.render(<Handler/>, document.body);
	 *   });
	 * 
	 * Using HTML5 history and a custom "cursor" prop:
	 * 
	 *   Router.run(routes, Router.HistoryLocation, function (Handler) {
	 *     React.render(<Handler cursor={cursor}/>, document.body);
	 *   });
	 *
	 * Returns the newly created router.
	 *
	 * Note: If you need to specify further options for your router such
	 * as error/abort handling or custom scroll behavior, use Router.create
	 * instead.
	 *
	 *   var router = Router.create(options);
	 *   router.run(function (Handler) {
	 *     // ...
	 *   });
	 */
	function runRouter(routes, location, callback) {
	  if (typeof location === 'function') {
	    callback = location;
	    location = null;
	  }

	  var router = createRouter({
	    routes: routes,
	    location: location
	  });

	  router.run(callback);

	  return router;
	}

	module.exports = runRouter;

/***/ },
/* 47 */
/*!********************************************!*\
  !*** ./app/route-handlers/Application.jsx ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _itemsStore = __webpack_require__(/*! items-store */ 48);

	var _containersApplication = __webpack_require__(/*! containers/Application */ 56);

	var _containersApplication2 = _interopRequireDefault(_containersApplication);

	exports["default"] = (0, _itemsStore.createContainer)(_containersApplication2["default"]);
	module.exports = exports["default"];

/***/ },
/* 48 */
/*!********************************!*\
  !*** ./~/items-store/index.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	exports.ItemsStore = __webpack_require__(/*! ./ItemsStore */ 49);
	exports.ItemsStoreLease = __webpack_require__(/*! ./ItemsStoreLease */ 50);
	exports.ItemsStoreFetcher = __webpack_require__(/*! ./ItemsStoreFetcher */ 51);
	exports.Actions = __webpack_require__(/*! ./Actions */ 52);
	exports.createContainer = __webpack_require__(/*! ./createContainer */ 54);


/***/ },
/* 49 */
/*!*************************************!*\
  !*** ./~/items-store/ItemsStore.js ***!
  \*************************************/
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	function ItemsStore(desc, initialData) {
		if(!desc || typeof desc !== "object")
			throw new Error("Invalid argument: desc must be an object");
		desc.applyUpdate = desc.applyUpdate || applyUpdate;
		desc.mergeUpdates = desc.mergeUpdates || mergeUpdates;
		desc.rebaseUpdate = desc.rebaseUpdate || rebaseUpdate;
		desc.applyNewData = desc.applyNewData || applyNewData;
		desc.applyNewError = desc.applyNewError || applyNewError;
		desc.queueRequest = desc.queueRequest || process.nextTick.bind(process);
		this.desc = desc;
		this.items = initialData ? Object.keys(initialData).reduce(function(obj, key) {
			obj[key] = {
				data: initialData[key],
				tick: 0
			};
			return obj;
		}, {}) : {};
		this.createableItems = [];
		this.deletableItems = [];
		this.requesting = false;
		this.invalidItems = [];
		this.updateTick = 0;
		this.supportCreate = desc.createSingleItem || desc.createMultipleItems ||
			desc.createAndReadSingleItem || desc.createAndReadMultipleItems;
		this.supportDelete = desc.deleteSingleItem || desc.deleteMultipleItems;
		this.supportWrite = desc.writeSingleItem || desc.writeMultipleItems ||
			desc.writeAndReadSingleItem || desc.writeAndReadMultipleItems;
		this.supportRead = desc.readSingleItem || desc.readMultipleItems;
	}

	module.exports = ItemsStore;

	/*

	item = { outdated: true }
	no item data available and data should be requested

	item = { data: {} }
	item data available

	item = { data: {}, outdated: true }
	item data available, but data should be renewed by request

	item = { data: {}, update: {}, newData: {} }
	item data available, but it should be updated with the "update" and "newData"

	item = { update: {} }
	no item data available and it should be updated with the "update"

	*/

	ItemsStore.prototype._createItem = function() {
		return {
			data: undefined,
			update: undefined,
			newData: undefined,
			error: undefined,
			outdated: undefined,
			tick: undefined,
			handlers: undefined,
			infoHandlers: undefined
		};
	}

	ItemsStore.prototype.getData = function() {
		var data = {};
		var hasData = false;
		Object.keys(this.items).forEach(function(key) {
			if(this.items[key].data) {
				data[key] = this.items[key].data;
				hasData = true;
			}
		}, this);
		if(hasData)
			return data;
	};

	ItemsStore.prototype.outdate = function(id) {
		if(typeof id === "string") {
			var item = this.items["$" + id];
			if(!item) return;
			item.tick = null;
		} else {
			this.updateTick++;
		}
	};

	ItemsStore.prototype.update = function(allOrId) {
		if(typeof allOrId === "string") {
			var id = allOrId;
			var item = this.items["$" + id];
			if(!item) return;
			if(!item.outdated) {
				item.outdated = true;
				this.invalidateItem(id);
				if(item.infoHandlers) {
					var handlers = item.infoHandlers.slice();
					handlers.forEach(function(fn) {
						fn(item.newData !== undefined ? item.newData : item.data);
					});
				}
			}
		} else {
			this.updateTick++;
			Object.keys(this.items).forEach(function(key) {
				var id = key.substr(1);
				var item = this.items[key];
				if(!item) return;
				if(!item.outdated && (allOrId || (item.handlers && item.handlers.length > 0))) {
					item.outdated = true;
					this.invalidateItem(id);
				}
			}, this);
		}
	};

	ItemsStore.prototype.listenToItem = function(id, handler) {
		if(typeof handler !== "function") throw new Error("handler argument must be a function");
		var lease = {
			close: function lease() {
				var item = this.items["$" + id];
				if(!item) return;
				var idx = item.handlers.indexOf(handler);
				if(idx < 0) return;
				item.handlers.splice(idx, 1);
				item.leases.splice(idx, 1);
				// TODO stream: if item.handlers.length === 0
			}.bind(this)
		};
		var item = this.items["$" + id];
		if(!item) {
			item = this._createItem();
			item.handlers = [handler];
			item.leases = [lease];
			item.outdated = true;
			this.items["$" + id] = item;
			this.invalidateItem(id);
		} else {
			if(item.handlers) {
				var idx = item.handlers.indexOf(handler);
				if(idx >= 0) {
					return item.leases[idx];
				}
				item.handlers.push(handler);
				item.leases.push(lease);
			} else {
				item.handlers = [handler];
				item.leases = [lease];
			}
			if(item.tick !== this.updateTick && !item.outdated) {
				item.outdated = true;
				this.invalidateItem(id);
			}
		}
		// TODO stream: start streaming
		return lease;
	}

	ItemsStore.prototype.waitForItem = function(id, callback) {
		var self = this;
		var onUpdate = function() {
			if(!self.isItemUpToDate(id)) return;
			var idx = item.infoHandlers.indexOf(onUpdate);
			if(idx < 0) return;
			item.infoHandlers.splice(idx, 1);
			callback();
		};

		var item = this.items["$" + id];
		if(!item) {
			item = this._createItem();
			item.infoHandlers = [onUpdate];
			item.outdated = true;
			this.items["$" + id] = item;
			this.invalidateItem(id);
		} else {
			if(this.isItemUpToDate(id)) {
				callback();
				return;
			}
			if(item.infoHandlers) {
				item.infoHandlers.push(onUpdate);
			} else {
				item.infoHandlers = [onUpdate];
			}
			if(!item.outdated && item.tick !== this.updateTick) {
				item.outdated = true;
				this.invalidateItem(id);
			}
		}
	};

	ItemsStore.prototype.getItem = function(id) {
		var item = this.items["$" + id];
		if(!item) return undefined;
		return item.newData !== undefined ? item.newData : item.data;
	};

	ItemsStore.prototype.isItemAvailable = function(id) {
		var item = this.items["$" + id];
		return !!(item && item.data !== undefined);
	};

	ItemsStore.prototype.isItemUpToDate = function(id) {
		var item = this.items["$" + id];
		return !!(item && item.data !== undefined && !item.outdated && item.tick === this.updateTick);
	};

	ItemsStore.prototype.getItemInfo = function(id) {
		var item = this.items["$" + id];
		if(!item) return {
			available: false,
			outdated: false,
			updated: false,
			listening: false,
			error: undefined
		};
		return {
			available: item.data !== undefined,
			outdated: !(!item.outdated && item.tick === this.updateTick),
			updated: item.update !== undefined,
			listening: !!item.handlers && item.handlers.length > 0,
			error: item.error
		};
	};

	ItemsStore.prototype.updateItem = function(id, update) {
		if(!this.supportWrite)
			throw new Error("Store doesn't support updating of items");
		var item = this.items["$" + id];
		if(!item) {
			item = this._createItem();
			item.update = update;
			this.items["$" + id] = item;
		} else {
			if(item.data !== undefined) {
				item.newData = this.desc.applyUpdate(item.newData !== undefined ? item.newData : item.data, update);
			}
			if(item.update !== undefined) {
				item.update = this.desc.mergeUpdates(item.update, update);
			} else {
				item.update = update;
			}
		}
		this.invalidateItem(id);
		if(item.data !== undefined && item.handlers) {
			var handlers = item.handlers.slice();
			handlers.forEach(function(fn) {
				fn(item.newData);
			});
		}
	};

	ItemsStore.prototype.createItem = function(data, handler) {
		if(!this.supportCreate)
			throw new Error("Store doesn't support creating of items");
		this.createableItems.push({
			data: data,
			handler: handler
		});
		if(!this.requesting) {
			this.requesting = true;
			this._queueRequest();
		}
	};

	ItemsStore.prototype.deleteItem = function(id, handler) {
		if(!this.supportDelete)
			throw new Error("Store doesn't support deleting of items");
		this.deletableItems.push({
			id: id,
			handler: handler
		});
		if(!this.requesting) {
			this.requesting = true;
			this._queueRequest();
		}
	};

	ItemsStore.prototype.invalidateItem = function(id) {
		if(this.invalidItems.indexOf(id) >= 0)
			return;
		if(!this.supportRead)
			throw new Error("Store doesn't support reading of items");
		this.invalidItems.push(id);
		if(!this.requesting) {
			this.requesting = true;
			this._queueRequest();
		}
	};

	ItemsStore.prototype._queueRequest = function() {
		this.desc.queueRequest(this._request.bind(this));
	};

	ItemsStore.prototype._requestWriteAndReadMultipleItems = function(items, callback) {
		this.desc.writeAndReadMultipleItems(items, function(err, newDatas) {
			if(err) {
				items.forEach(function(item) {
					this.setItemError(item.id, err);
				}, this);
			}
			if(newDatas) {
				Object.keys(newDatas).forEach(function(id) {
					this.setItemData(id.substr(1), newDatas[id]);
				}, this);
			}
			this._queueRequest();
			callback();
		}.bind(this));
	};

	ItemsStore.prototype._requestWriteMultipleItems = function(items, callback) {
		this.desc.writeMultipleItems(items, function(err) {
			if(err) {
				items.forEach(function(item) {
					this.setItemError(item.id, err);
				}, this);
			}
			this._queueRequest();
			callback();
		}.bind(this));
	};

	ItemsStore.prototype._requestWriteAndReadSingleItem = function(item, callback) {
		this.desc.writeAndReadSingleItem(item, function(err, newData) {
			if(err) {
				this.setItemError(item.id, err);
			}
			if(newData !== undefined) {
				this.setItemData(item.id, newData);
			}
			this._queueRequest();
			callback();
		}.bind(this));
	};

	ItemsStore.prototype._requestWriteSingleItem = function(item, callback) {
		this.desc.writeSingleItem(item, function(err) {
			if(err) {
				this.setItemError(item.id, err);
			}
			this._queueRequest();
			callback();
		}.bind(this));
	};

	ItemsStore.prototype._requestReadMultipleItems = function(items, callback) {
		this.desc.readMultipleItems(items, function(err, newDatas) {
			if(err) {
				items.forEach(function(item) {
					this.setItemError(item.id, err);
				}, this);
			}
			if(newDatas) {
				Object.keys(newDatas).forEach(function(id) {
					this.setItemData(id.substr(1), newDatas[id]);
				}, this);
			}
			this._queueRequest();
			callback();
		}.bind(this));
	};

	ItemsStore.prototype._requestReadSingleItem = function(item, callback) {
		this.desc.readSingleItem(item, function(err, newData) {
			if(err) {
				this.setItemError(item.id, err);
			}
			if(newData !== undefined) {
				this.setItemData(item.id, newData);
			}
			this._queueRequest();
			callback();
		}.bind(this));
	};

	ItemsStore.prototype._requestCreateSingleItem = function(item, callback) {
		this.desc.createSingleItem(item, function(err, id) {
			if(item.handler) item.handler(err, id);
			this._queueRequest();
			callback();
		}.bind(this));
	};

	ItemsStore.prototype._requestCreateMultipleItems = function(items, callback) {
		this.desc.createMultipleItems(items, function(err, ids) {
			for(var i = 0; i < items.length; i++) {
				if(items[i].handler) {
					items[i].handler(err, ids && ids[i]);
				}
			}
			this._queueRequest();
			callback();
		}.bind(this));
	};

	ItemsStore.prototype._requestCreateAndReadSingleItem = function(item, callback) {
		this.desc.createAndReadSingleItem(item, function(err, id, newData) {
			if(!err && newData !== undefined) {
				this.setItemData(id, newData);
			}
			if(item.handler) item.handler(err, id, newData);
			this._queueRequest();
			callback();
		}.bind(this));
	};

	ItemsStore.prototype._requestCreateAndReadMultipleItems = function(items, callback) {
		this.desc.createAndReadMultipleItems(items, function(err, ids, newDatas) {
			if(newDatas) {
				Object.keys(newDatas).forEach(function(id) {
					this.setItemData(id.substr(1), newDatas[id]);
				}, this);
			}
			for(var i = 0; i < items.length; i++) {
				if(items[i].handler) {
					items[i].handler(err, ids && ids[i], ids && newDatas && newDatas[ids[i]]);
				}
			}
			this._queueRequest();
			callback();
		}.bind(this));
	};

	ItemsStore.prototype._requestDeleteSingleItem = function(item, callback) {
		this.desc.deleteSingleItem(item, function(err) {
			if(item.handler) item.handler(err);
			if(!err) {
				delete this.items["$" + item.id];
			}
			this._queueRequest();
			callback();
		}.bind(this));
	};

	ItemsStore.prototype._requestDeleteMultipleItems = function(items, callback) {
		this.desc.deleteMultipleItems(items, function(err) {
			for(var i = 0; i < items.length; i++) {
				if(items[i].handler) {
					items[i].handler(err);
				}
				if(!err) {
					delete this.items["$" + items[i].id];
				}
			}
			this._queueRequest();
			callback();
		}.bind(this));
	};

	ItemsStore.prototype._request = function(callback) {
		callback = callback || function () {};
		if(this.desc.createAndReadMultipleItems) {
			var items = this._popCreateableItem(true);
			if(items.length === 1 && this.desc.createAndReadSingleItem) {
				this._requestCreateAndReadSingleItem(items[0], callback);
				return;
			} else if(items.length > 0) {
				this._requestCreateAndReadMultipleItems(items, callback);
				return;
			}
		}
		if(this.desc.createMultipleItems) {
			var items = this._popCreateableItem(true);
			if(items.length === 1 && this.desc.createSingleItem) {
				if(!this.desc.createAndReadSingleItem) {
					this._requestCreateSingleItem(items[0], callback);
					return;
				}
			} else if(items.length > 0) {
				this._requestCreateMultipleItems(items, callback);
				return;
			}
		}
		if(this.desc.createAndReadSingleItem) {
			var item = this._popCreateableItem(false);
			if(item) {
				this._requestCreateAndReadSingleItem(item, callback);
				return;
			}
		}
		if(this.desc.createSingleItem) {
			var item = this._popCreateableItem(false);
			if(item) {
				this._requestCreateSingleItem(item, callback);
				return;
			}
		}
		if(this.desc.writeAndReadMultipleItems) {
			var items = this._popWriteableItem(true, true);
			if(items.length === 1 && this.desc.writeAndReadSingleItem) {
				this._requestWriteAndReadSingleItem(items[0], callback);
				return;
			} else if(items.length > 0) {
				this._requestWriteAndReadMultipleItems(items, callback);
				return;
			}
		}
		if(this.desc.writeMultipleItems) {
			var items = this._popWriteableItem(true, false);
			if(items.length === 1 && this.desc.writeSingleItem) {
				if(!this.desc.writeAndReadSingleItem) {
					this._requestWriteSingleItem(items[0], callback);
					return;
				}
			} else if(items.length > 0) {
				this._requestWriteMultipleItems(items, callback);
				return;
			}
		}
		if(this.desc.writeAndReadSingleItem) {
			var item = this._popWriteableItem(false, true);
			if(item) {
				this._requestWriteAndReadSingleItem(item, callback);
				return;
			}
		}
		if(this.desc.writeSingleItem) {
			var item = this._popWriteableItem(false);
			if(item) {
				this._requestWriteSingleItem(item, callback);
				return;
			}
		}
		if(this.desc.deleteMultipleItems) {
			var items = this._popDeleteableItem(true);
			if(items.length === 1 && this.desc.deleteSingleItem) {
				this._requestDeleteSingleItem(items[0], callback);
				return;
			} else if(items.length > 0) {
				this._requestDeleteMultipleItems(items, callback);
				return;
			}
		}
		if(this.desc.deleteSingleItem) {
			var item = this._popDeleteableItem(false);
			if(item) {
				this._requestDeleteSingleItem(item, callback);
				return;
			}
		}
		if(this.desc.readMultipleItems) {
			var items = this._popReadableItem(true);
			if(items.length === 1 && this.desc.readSingleItem) {
				this._requestReadSingleItem(items[0], callback);
				return;
			} else if(items.length > 0) {
				this._requestReadMultipleItems(items, callback);
				return;
			}
		}
		if(this.desc.readSingleItem) {
			var item = this._popReadableItem(false);
			if(item) {
				this._requestReadSingleItem(item, callback);
				return;
			}
		}
		this.requesting = false;
		callback();
	};

	ItemsStore.prototype.setItemError = function(id, newError) {
		var item = this.items["$" + id];
		if(!item) {
			item = this._createItem();
			item.data = this.desc.applyNewError(undefined, newError);
			item.error = newError;
			item.tick = this.updateTick;
			this.items["$" + id] = item;
			return;
		}
		newData = this.desc.applyNewError(item.data, newError);
		item.error = newError;
		this._setItemNewData(id, item, newData)
	};

	ItemsStore.prototype.setItemData = function(id, newData) {
		var item = this.items["$" + id];
		if(!item) {
			item = this._createItem();
			item.data = this.desc.applyNewData(undefined, newData);
			item.tick = this.updateTick;
			this.items["$" + id] = item;
			return;
		}
		newData = this.desc.applyNewData(item.data, newData);
		item.error = null;
		this._setItemNewData(id, item, newData)
	};

	ItemsStore.prototype._setItemNewData = function(id, item, newData) {
		if(item.newData !== undefined) {
			item.update = this.desc.rebaseUpdate(item.update, item.data, newData);
			item.newData = this.desc.applyUpdate(newData, item.update);
		}
		var oldData = item.data;
		item.data = newData;
		item.outdated = false;
		item.tick = this.updateTick;
		if(item.update === undefined) {
			var idx = this.invalidItems.indexOf(id);
			if(idx >= 0)
				this.invalidItems.splice(idx, 1);
		}
		var infoHandlers = item.infoHandlers && item.infoHandlers.slice();
		var handlers = item.handlers && item.handlers.slice();
		if(infoHandlers) {
			infoHandlers.forEach(function(fn) {
				fn();
			});
		}
		if(handlers && oldData !== newData) {
			handlers.forEach(function(fn) {
				fn(item.newData !== undefined ? item.newData : newData);
			});
		}
	};

	ItemsStore.prototype._popCreateableItem = function(multiple) {
		if(multiple) {
			if(this.maxCreateItems && this.maxCreateItems < this.createableItems.length) {
				return this.createableItems.splice(0, this.maxCreateItems);
			} else {
				var items = this.createableItems;
				this.createableItems = [];
				return items;
			}
		} else {
			return this.createableItems.shift();
		}
	};

	ItemsStore.prototype._popDeleteableItem = function(multiple) {
		if(multiple) {
			if(this.maxDeleteItems && this.maxDeleteItems < this.deletableItems.length) {
				return this.deletableItems.splice(0, this.maxDeleteItems);
			} else {
				var items = this.deletableItems;
				this.deletableItems = [];
				return items;
			}
		} else {
			return this.deletableItems.shift();
		}
	};

	ItemsStore.prototype._popWriteableItem = function(multiple, willRead) {
		var results = [];
		for(var i = 0; i < this.invalidItems.length; i++) {
			var id = this.invalidItems[i];
			var item = this.items["$" + id];
			if(item.update) {
				var result = {
					id: id,
					update: item.update,
					oldData: item.data,
					newData: item.newData
				};
				item.outdated = true;
				item.data = item.newData;
				delete item.update;
				delete item.newData;
				if(willRead) {
					this.invalidItems.splice(i, 1);
					i--;
				}
				if(!multiple)
					return result;
				results.push(result);
				if(this.desc.maxWriteItems && results.length >= this.desc.maxWriteItems)
					break;
			}
		}
		if(multiple)
			return results;
	};

	ItemsStore.prototype._popReadableItem = function(multiple) {
		var results = [];
		for(var i = 0; i < this.invalidItems.length; i++) {
			var id = this.invalidItems[i];
			var item = this.items["$" + id];
			if(item.outdated) {
				var result = {
					id: id,
					oldData: item.data
				};
				this.invalidItems.splice(i, 1);
				i--;
				if(!multiple)
					return result;
				results.push(result);
				if(this.desc.maxReadItems && results.length >= this.desc.maxReadItems)
					break;
			}
		}
		if(multiple)
			return results;
	};


	function applyUpdate(data, update) {
		return Object.assign({}, data, update);
	}

	function mergeUpdates(a, b) {
		return Object.assign({}, a, b);
	}

	function rebaseUpdate(update, oldData, newData) {
		return update;
	}

	function applyNewData(oldData, newData) {
		return newData;
	}

	function applyNewError(oldData, newError) {
		return null;
	}


/***/ },
/* 50 */
/*!******************************************!*\
  !*** ./~/items-store/ItemsStoreLease.js ***!
  \******************************************/
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	function ItemsStoreLease() {
		this.leases = undefined;
	}

	module.exports = ItemsStoreLease;

	ItemsStoreLease.prototype.capture = function(fn, onUpdate) {
		var newLeases = [];
		var leases = this.leases;
		function listenTo(Store, id) {
			var lease = Store.listenToItem(id, onUpdate);
			var idx = newLeases.indexOf(lease);
			if(idx < 0) {
				if(leases) {
					idx = leases.indexOf(lease);
					if(idx >= 0)
						leases.splice(idx, 1);
				}
				newLeases.push(lease);
			}
		}
		var error = null;
		try {
			var ret = fn(listenTo);
		} catch(e) {
			error = e;
		}
		if(leases) {
			leases.forEach(function(lease) {
				lease.close();
			});
		}
		this.leases = newLeases;
		if(error) throw error;
		return ret;
	};

	ItemsStoreLease.prototype.close = function() {
		if(this.leases) {
			this.leases.forEach(function(lease) {
				lease.close();
			});
		}
		this.leases = undefined;
	};


/***/ },
/* 51 */
/*!********************************************!*\
  !*** ./~/items-store/ItemsStoreFetcher.js ***!
  \********************************************/
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var ItemsStoreFetcher = module.exports = exports;

	ItemsStoreFetcher.fetch = function(fn, callback) {
		var ident = this.ident;
		var unavailableItems;
		function onItemAvailable() {
			if(--unavailableItems === 0)
				runFn();
		}
		function listenTo(Store, id) {
			if(!Store.isItemUpToDate(id)) {
				unavailableItems++;
				Store.waitForItem(id, onItemAvailable);
			}
		}
		function runFn() {
			unavailableItems = 1;
			try {
				var ret = fn(listenTo);
			} catch(e) {
				unavailableItems = NaN;
				callback(e);
			}
			if(--unavailableItems === 0) {
				callback(null, ret);
			}
		}
		runFn();
	};


/***/ },
/* 52 */
/*!**********************************!*\
  !*** ./~/items-store/Actions.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var EventEmitter = __webpack_require__(/*! events */ 53).EventEmitter;

	var Actions = module.exports = exports;

	Actions.create = function create(array) {
		var obj = {};
		if(Array.isArray(array)) {
			array.forEach(function(name) {
				obj[name] = create();
			});
			return obj;
		} else {
			var ee = new EventEmitter();
			var action = function() {
				var args = Array.prototype.slice.call(arguments);
				ee.emit("trigger", args);
			};
			action.listen = function(callback, bindContext) {
				ee.addListener("trigger", function(args) {
					callback.apply(bindContext, args);
				});
			};
			return action;
		}
	};


/***/ },
/* 53 */
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ function(module, exports) {

	module.exports = require("events");

/***/ },
/* 54 */
/*!******************************************!*\
  !*** ./~/items-store/createContainer.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var React = __webpack_require__(/*! react */ 3);
	var ItemsStoreLease = __webpack_require__(/*! ./ItemsStoreLease */ 50);
	var ItemsStoreFetcher = __webpack_require__(/*! ./ItemsStoreFetcher */ 51);
	var ReactUpdates = __webpack_require__(/*! react/lib/ReactUpdates */ 55);

	function makeStores(stores, addDependency) {
		if(!addDependency) {
			return stores;
		}
		return Object.keys(stores).reduce(function(obj, key) {
			obj[key] = {
				getItem: function(id) {
					addDependency(stores[key], id);
					return stores[key].getItem(id);
				},
				getItemInfo: function(id) {
					addDependency(stores[key], id);
					return stores[key].getItemInfo(id);
				},
				isItemAvailable: function(id) {
					addDependency(stores[key], id);
					return stores[key].isItemAvailable(id);
				},
				isItemUpToDate: function(id) {
					addDependency(stores[key], id);
					return stores[key].isItemUpToDate(id);
				},
			};
			return obj;
		}, {});
	}

	module.exports = function createContainer(Component) {
		var componentName = Component.displayName || Component.name;
		if(!Component.getProps)
			throw new Error("Passed Component " + componentName + " has no static getProps function");
		return React.createClass({
			displayName: componentName + "Container",
			statics: {
				chargeStores: function(stores, params, callback) {
					ItemsStoreFetcher.fetch(function(addDependency) {
						Component.getProps(makeStores(stores, addDependency), params);
					}.bind(this), callback);
				}
			},
			getInitialState: function() {
				if(!this.lease) this.lease = new ItemsStoreLease();
				var stores = this.context.stores;
				var router = this.context.router;
				var params = router && router.getCurrentParams && router.getCurrentParams();
				return this.lease.capture(function(addDependency) {
					return Component.getProps(makeStores(stores, addDependency), params);
				}, this._onUpdate);
			},
			_onUpdate: function() {
				// _onUpdate is called when any leased value has changed
				// we schedule an update (this merges multiple changes to a single state change)
				if(this._updateScheduled)
					return;
				this._updateScheduled = true;
				ReactUpdates.asap(this._doUpdate);
			},
			_doUpdate: function() {
				// 
				this._updateScheduled = false;
				if(!this.isMounted()) return;
				var stores = this.context.stores;
				var router = this.context.router;
				var params = router && router.getCurrentParams && router.getCurrentParams();
				this.setState(this.lease.capture(function(addDependency) {
					return Component.getProps(makeStores(stores, addDependency), params);
				}, this._onUpdate));
			},
			componentWillReceiveProps: function(newProps, newContext) {
				// on context change update, because params may have changed
				if(!newContext || !newContext.router) return;
				var stores = newContext.stores;
				var router = newContext.router;
				var params = router && router.getCurrentParams && router.getCurrentParams();
				this.setState(this.lease.capture(function(addDependency) {
					return Component.getProps(makeStores(stores, addDependency), params);
				}, this._onUpdate));
			},
			componentWillUnmount: function() {
				if(this.lease) this.lease.close();
			},
			render: function() {
				return React.createElement(Component, this.state);
			},
			contextTypes: {
				stores: React.PropTypes.object.isRequired,
				router: React.PropTypes.func
			}
		})
	};


/***/ },
/* 55 */
/*!*****************************************!*\
  !*** external "react/lib/ReactUpdates" ***!
  \*****************************************/
/***/ function(module, exports) {

	module.exports = require("react/lib/ReactUpdates");

/***/ },
/* 56 */
/*!****************************************!*\
  !*** ./app/containers/Application.jsx ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(/*! react */ 3);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(/*! react-router */ 4);

	var _componentsMainMenu = __webpack_require__(/*! components/MainMenu */ 57);

	var _componentsMainMenu2 = _interopRequireDefault(_componentsMainMenu);

	var _ApplicationCss = __webpack_require__(/*! ./Application.css */ 62);

	var _ApplicationCss2 = _interopRequireDefault(_ApplicationCss);

	var Application = (function (_React$Component) {
		_inherits(Application, _React$Component);

		function Application() {
			_classCallCheck(this, Application);

			_get(Object.getPrototypeOf(Application.prototype), "constructor", this).apply(this, arguments);
		}

		_createClass(Application, [{
			key: "render",
			value: function render() {
				var loading = this.props.loading;

				return _react2["default"].createElement(
					"div",
					{ className: _ApplicationCss2["default"]["this"] + (loading ? " " + _ApplicationCss2["default"].loading : "") },
					_react2["default"].createElement(
						"div",
						{ className: _ApplicationCss2["default"].loadingElement },
						"loading..."
					),
					_react2["default"].createElement(
						"h1",
						null,
						"react-starter"
					),
					_react2["default"].createElement(_componentsMainMenu2["default"], null),
					_react2["default"].createElement(_reactRouter.RouteHandler, null)
				);
			}
		}], [{
			key: "getProps",
			value: function getProps(stores, params) {
				var transition = stores.Router.getItem("transition");
				return {
					loading: !!transition
				};
			}
		}]);

		return Application;
	})(_react2["default"].Component);

	exports["default"] = Application;

	Application.contextTypes = {
		stores: _react2["default"].PropTypes.object
	};
	module.exports = exports["default"];

/***/ },
/* 57 */
/*!*************************************!*\
  !*** ./app/components/MainMenu.jsx ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(/*! react */ 3);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(/*! react-router */ 4);

	var _elementsReactLogo = __webpack_require__(/*! elements/ReactLogo */ 58);

	var _elementsReactLogo2 = _interopRequireDefault(_elementsReactLogo);

	var MainMenu = (function (_React$Component) {
		_inherits(MainMenu, _React$Component);

		function MainMenu() {
			_classCallCheck(this, MainMenu);

			_get(Object.getPrototypeOf(MainMenu.prototype), "constructor", this).apply(this, arguments);
		}

		_createClass(MainMenu, [{
			key: "render",
			value: function render() {
				return _react2["default"].createElement(
					"div",
					null,
					_react2["default"].createElement(_elementsReactLogo2["default"], { type: "svg" }),
					" ",
					_react2["default"].createElement(_elementsReactLogo2["default"], { type: "png" }),
					" ",
					_react2["default"].createElement(_elementsReactLogo2["default"], { type: "jpg" }),
					_react2["default"].createElement(
						"h2",
						null,
						"MainMenu:"
					),
					_react2["default"].createElement(
						"ul",
						null,
						_react2["default"].createElement(
							"li",
							null,
							"The ",
							_react2["default"].createElement(
								_reactRouter.Link,
								{ to: "home" },
								"home"
							),
							" page."
						),
						_react2["default"].createElement(
							"li",
							null,
							"Do something on the ",
							_react2["default"].createElement(
								_reactRouter.Link,
								{ to: "todo" },
								"todo page"
							),
							"."
						),
						_react2["default"].createElement(
							"li",
							null,
							"Switch to ",
							_react2["default"].createElement(
								_reactRouter.Link,
								{ to: "some-page" },
								"some page"
							),
							"."
						),
						_react2["default"].createElement(
							"li",
							null,
							"Open the chat demo: ",
							_react2["default"].createElement(
								_reactRouter.Link,
								{ to: "chat", params: { room: "home" } },
								"Chat"
							),
							"."
						),
						_react2["default"].createElement(
							"li",
							null,
							"Open the page that shows ",
							_react2["default"].createElement(
								_reactRouter.Link,
								{ to: "readme" },
								"README.md"
							),
							"."
						)
					)
				);
			}
		}]);

		return MainMenu;
	})(_react2["default"].Component);

	exports["default"] = MainMenu;
	module.exports = exports["default"];

/***/ },
/* 58 */
/*!************************************!*\
  !*** ./app/elements/ReactLogo.jsx ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(/*! react */ 3);

	var _react2 = _interopRequireDefault(_react);

	var ReactLogo = (function (_React$Component) {
		_inherits(ReactLogo, _React$Component);

		function ReactLogo() {
			_classCallCheck(this, ReactLogo);

			_get(Object.getPrototypeOf(ReactLogo.prototype), "constructor", this).apply(this, arguments);
		}

		_createClass(ReactLogo, [{
			key: "render",
			value: function render() {
				var type = this.props.type;

				var url = ({
					"svg": __webpack_require__(/*! ./ReactLogo/logo.svg */ 59),
					"png": __webpack_require__(/*! ./ReactLogo/logo.png */ 60),
					"jpg": __webpack_require__(/*! ./ReactLogo/logo.jpg */ 61)
				})[type];
				return _react2["default"].createElement("img", { src: url, height: "36", width: "36" });
			}
		}]);

		return ReactLogo;
	})(_react2["default"].Component);

	exports["default"] = ReactLogo;

	ReactLogo.propTypes = {
		type: _react2["default"].PropTypes.oneOf(["svg", "png", "jpg"])
	};
	module.exports = exports["default"];

/***/ },
/* 59 */
/*!*****************************************!*\
  !*** ./app/elements/ReactLogo/logo.svg ***!
  \*****************************************/
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8yIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCXdpZHRoPSI2MDBweCIgaGVpZ2h0PSI2MDBweCIgdmlld0JveD0iMCAwIDYwMCA2MDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDYwMCA2MDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cmVjdCBmaWxsPSIjMjIyMjIyIiB3aWR0aD0iNjAwIiBoZWlnaHQ9IjYwMCIvPgo8Y2lyY2xlIGZpbGw9IiMwMEQ4RkYiIGN4PSIyOTkuNTI5IiBjeT0iMjk5LjYyOCIgcj0iNTAuMTY3Ii8+CjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwRDhGRiIgc3Ryb2tlLXdpZHRoPSIyNCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMjk5LjUyOSwxOTcuNjI4CgljNjcuMzU2LDAsMTI5LjkyOCw5LjY2NSwxNzcuMTA3LDI1LjkwN2M1Ni44NDQsMTkuNTY5LDkxLjc5NCw0OS4yMzMsOTEuNzk0LDc2LjA5M2MwLDI3Ljk5MS0zNy4wNDEsNTkuNTAzLTk4LjA4Myw3OS43MjgKCWMtNDYuMTUxLDE1LjI5MS0xMDYuODc5LDIzLjI3Mi0xNzAuODE4LDIzLjI3MmMtNjUuNTU0LDAtMTI3LjYzLTcuNDkyLTE3NC4yOS0yMy40NDFjLTU5LjA0Ni0yMC4xODItOTQuNjExLTUyLjEwMy05NC42MTEtNzkuNTU5CgljMC0yNi42NDIsMzMuMzctNTYuMDc2LDg5LjQxNS03NS42MTZDMTY3LjM5OCwyMDcuNTAzLDIzMS41MTUsMTk3LjYyOCwyOTkuNTI5LDE5Ny42Mjh6Ii8+CjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwRDhGRiIgc3Ryb2tlLXdpZHRoPSIyNCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMjEwLjczNiwyNDguOTIyCgljMzMuNjQ5LTU4LjM0OCw3My4yODEtMTA3LjcyNCwxMTAuOTItMTQwLjQ4YzQ1LjM1LTM5LjQ2Niw4OC41MDctNTQuOTIzLDExMS43NzUtNDEuNTA1CgljMjQuMjQ4LDEzLjk4MywzMy4wNDIsNjEuODE0LDIwLjA2NywxMjQuNzk2Yy05LjgxLDQ3LjYxOC0zMy4yMzQsMTA0LjIxMi02NS4xNzYsMTU5LjYwMQoJYy0zMi43NDksNTYuNzg4LTcwLjI1LDEwNi44MTktMTA3LjM3NywxMzkuMjcyYy00Ni45ODEsNDEuMDY4LTkyLjQsNTUuOTI5LTExNi4xODUsNDIuMjEzCgljLTIzLjA3OS0xMy4zMS0zMS45MDYtNTYuOTIxLTIwLjgzNC0xMTUuMjMzQzE1My4yODEsMzY4LjMxNiwxNzYuNzU4LDMwNy44NDEsMjEwLjczNiwyNDguOTIyeiIvPgo8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMEQ4RkYiIHN0cm9rZS13aWR0aD0iMjQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTIxMC44MjEsMzUxLjQ4MgoJYy0zMy43NDYtNTguMjkyLTU2LjczMS0xMTcuMjg3LTY2LjMxMi0xNjYuMjU1Yy0xMS41NDQtNTguOTk5LTMuMzgyLTEwNC4xMDksMTkuODY0LTExNy41NjYKCWMyNC4yMjQtMTQuMDI0LDcwLjA1NSwyLjI0NCwxMTguMTQsNDQuOTRjMzYuMzU2LDMyLjI4LDczLjY4OCw4MC44MzcsMTA1LjcyMywxMzYuMTczYzMyLjg0NCw1Ni43MzMsNTcuNDYxLDExNC4yMDksNjcuMDM2LDE2Mi41ODIKCWMxMi4xMTcsNjEuMjEzLDIuMzA5LDEwNy45ODQtMjEuNDUzLDEyMS43NGMtMjMuMDU3LDEzLjM0OC02NS4yNDktMC43ODQtMTEwLjIzOS0zOS40OTkKCUMyODUuNTY3LDQ2MC44ODYsMjQ0Ljg5OCw0MTAuMzQ0LDIxMC44MjEsMzUxLjQ4MnoiLz4KPC9zdmc+Cg=="

/***/ },
/* 60 */
/*!*****************************************!*\
  !*** ./app/elements/ReactLogo/logo.png ***!
  \*****************************************/
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH3wUFDSMGj5A6HwAAB/xJREFUWMPtmGl0VOUdxn93mS0zk8lMMkASoAEsFEuFoy0WLNqAVEAl7GjYBAoBKhg40CJwPBawBzkFWiK0FkGWGlksQsAgUAgFasSIHlY5spUACdlmy8wks9y5/XAxkA0w/cKH3k9z3vu8//vc9788z1yhY8eOKg/RJfKQXQ8dIfl+AFWUcI/Lxv/scFRJxnjha8xH8rAc3wexWNN7ZB3V/UcQePp5Qh27IoRDxH+6FXtuDqj3rhDJbre/eS+Ae8JcPCOzMH+2H8Ols4TTOuMbPIHAUwPQ3biCruxGPXywZzq3lryPPz0DXflNzIUHkD1VeIdMQvK5MHx7+n84IUmi+rlRxO/fRlLOorrlmu69cE38LaVLN2Hfugb71ndQVXCPy8YzajqmMydovWQahsvn6/YoCUn4nh9D/J4tLScUeqQbis2B+Vh+vXXTqUJS5ozAPXEe7syZhH7YDWQdwR5PaQRzV4Oi1NtjPr6PitlvE3UmI1eUtoyQYkvUQOUlje4JMQXH+mXoii9Rkb0MgFZ/nIOlIK/JWLrSa3Ux70Xonl0WM5o0UKimaYAgUNOjN4IaA1Ul+MQzIAhNQ2sCWkyTueUpkzxVAEQTEpGqyhoX/JjX8Kdn4Fy9AFUQqZy5FP31yyRsW9v45Sw27eWC1S0nJJff1Ai1bluvQLVu6ov75VdJ+Mc6rJ9uAyCc1hnX2GyM54owni2qh4+2aaelrkFXfk9CJQi1QUIdH0V34yrhDl2IpHYgktqBQJ9BiLVBanr05mZOnjZfBAEhGqF06UYsR/agK7mG7sYV9Fe/IdyuE1K1B9HvuychoTktU2wOgj374po4D8VqB0m6feR+EARUvQHTV8eQfB6ESEhLi96IYk+ipkdvxGAAVZZRDabbOYsheSpxbFqB5egnCM3UZSNCkdQOeIZPwd93CKqsQ666RTSxNc5V8zGdOUGoY1fK3ngX54q5WA993GRQ79BJVP16ASnzM5ErSqnp9jMqZi9H8lSi2J2Ifh/Wgl3YPt6AfOt6M10mSXhGZnFjbT6BXwzAlreJ9q/0Ifl3mSCIoNcj+txUTX8T05kTWA/vavbYbXmbMFw5T8VvliBV3kI1WUBVSZ2VQdsZg7AcyaO63zCur83HO2QiiGID6RAEymcvxzt0MvEHdtDmjUnEFRUgBv1Ifh81P32acPtHUOxJBJ/sR5vFWUieSlRjHK4pC6iYuwLvsMnEbIkYzxYhRKMYrpzHM2oasreK6vQh6G9exbZ3C5KniriiI8Tnf4jiTMYzchpKvIO4oiN3CHmHTsI7YirOnIXYc3MQopH6YimI+AaPJ9ylO5aje4nf9yEAVVMX4XtxHKrBhGqMo/bRJ0AQMJ0qRK4qI5zWGX//EURSO+D44M/or164UyvhEObCg6AoeEdmIZeXYLhyXktZdb9hmD87UNe+DS9rwW6EcC0xvRH75pV1Q9H/y8GNsP6+Q+p+O7asQrEmIAb9mP+1t8nY9q1rMJ75gupnh92pIUFVUWX5wQyLcDvfqqpN6Ia3G2iYtkizE1ybLzLCbSsjAlgO7CDYsy++F8Y2ia/uOwRVb0QIh3CPmVW3binY3QhrOXyn81zjZiMGvMRMFvzpGU3bm3Gzqe36ONb92+/UkPHiaSKpaXhGZKE4nBhPn6hXR5Uzfo++9BqWgl14B0/A/O99SF4XplOFqAYTSlIbRL8X257NJOS+g6CqhLp0p2rKQhwblqMaTYS7dK97KIBid1I5cym+F8dj2/keCTvX159DqijhHZmFO3OmFjxvM9b8XGJmK9fXF+DMWYj5yB6ur/snupJrpMzPbN79SRI3V+0kZoyj7YxB+NMzqMheRrup/UGJUj3wZXwDX0KVdTg2r8S2e2NdLPluO5GwbS1xhQdxZ87EPS4bd+ZM5IoSUGOIHhfo9CT9bSllr+dQ/dyoZpvAO2gMoU4/Jvn1sSj2JMTaGoRYjJLlW1FsDsTaINaDH2Hb9T5yA21rVjqirVLxp2fgHTYZxWwDUStKyVWOajCiGkyYj+9DrA3WlxxrAoFe/REDfgRUFGuC9qBoFDHow75xBZajezUJ+j5a9l0ar+34mvhPPiDuxCEi7ToRad2WaHJ7Ar1+hRCNIFfcQtXrtWChWqKtUlFlGfOxfHSlxeiLL6K/fJ5An4G4M2eRNvyxRnPugdU+2rotMZMZw/mTGM99ifHcl3d89eN9KF28gbiiwzjWa47RNX4OntEztEl/8mh9x1h8CVWnJ+pMRlda3EJCrVI0UEVjC2v66hgJH72LZ9R0dMWXECJhPKNnYN+6phGZu21w1JnSckJKQpIGclc2ed+xeSWRlDQqZ70FKpgLD2D/+5+abryA77ZzjG/5P9fvvHTMYGzGdMewHt6FKoiokoTlWH6zoyBmtmox72PQxAfy1M6UJg2+d/gUyhatxfjtaYxnv6B83ko8o2fUsxN1Piv5B9ppeypbbmH1F88gVXsI9BmE6fTndevhtC64XplHsGc61v3bSfrrYogpuCbMxTV+DjWP/ZzEDcvQ3+XD/ekZ6Er+g674UssJCUoUa34unhFZIAiIfh+hH/Wg5idPIleV0ert17DcpeKJ7/0B0+nPqXx1CTdW52E8W4Txm5MoiW0I9OpP4rq37q/d9/s+pMo63GNm4e83DFWW0V+9gPnYPqyHdiJEwk3v0RvwDXiJwDMvEElJQ4iEsebnYt/+l2Y/UDwwof9/sHrYCP0XU2dCMTplX2YAAAAASUVORK5CYII="

/***/ },
/* 61 */
/*!*****************************************!*\
  !*** ./app/elements/ReactLogo/logo.jpg ***!
  \*****************************************/
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAWgBaAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wgARCAAkACQDAREAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAABQYAAwQCB//EABoBAAIDAQEAAAAAAAAAAAAAAAQFAgMGAAH/2gAMAwEAAhADEAAAAfA+8ZmWcqjZkqKDiNjBalxbZOd4PoPTE+vYWCBoZZu+dIgVqrrNIMGZOrnHb7wllbol0B/O7TYPVC3r2FMbv//EABwQAAMBAQEBAQEAAAAAAAAAAAIDBAUBABEQEv/aAAgBAQABBQLnPvXRQqd3K5H62ZQJ9JAxgVRw8qYSNPtWesomqNDCENVFEb1Q3Vnus2YDrr06gqoD5/bx0Obeg5lM9gkGV+FS0lgZLJrjeXv/xAAtEQABAwIEBQMDBQAAAAAAAAABAgMEABEFEiExMkFRYXEQIoETFMFCcpKx8P/aAAgBAwEBPwEmwuaamT3GhKDYKDrYcVv6PjShiapfsgJzHmToE9jzv2FQ5Dy3XI8gDMmx02IPnx6Spzbavt0pK19B+eQ+ajS8QLDcBkJSrVO5uMuhO1h23ptMjDgZMVTakjRQBP8AI76jn2qNOcTJekvte3RN0+4C2p78+lNuIeQHGzcGkqXhjriloKkLN8w1I7Eb26EUxLjuynnCsBL909020BP7t/NqhxUYIh15bqVlQygA736/7a9YRORFjmG0PqLSTw7G+t77Dp8Vh0ZcZkhzdRJsNhfkKXfKcu9Mqw44Y2iTbhtb9V+3O96gMtR3grEmwnSybgAfPLP5+KiKQue8pnhypGnXX8eqY7KV/VSgZuttaWhLgyrFxTbTbKcrSQB29P/EACsRAAIBAgMGBQUAAAAAAAAAAAECAwARBCExEBITFEFRInGx0fEjYYGRwf/aAAgBAgEBPwHWnhw6twt4gjr0rlRFnObeXWpo0CrJHodkUDMOITYdzUkWH32ne5Gv7pjHifpyhgTpf0qWBTEkaNnrnlr8UylDutrRAxKKFNmGVvapIpFiRbG6Z+fxU0pxxVFQi2d6xcDSycZvCD39qxEglfw6DKhrnTjE80zR9/xU7tIlsM1++fp9qlBGHQPrc/zaZHK7pOVAlTcUzs5uxvs//8QAKxAAAgEDAQYFBQEAAAAAAAAAAQIDAAQREhMhIjFBYRBCUXGBBTNigqGx/9oACAEBAAY/AsU1sZ5EmXhMjDgz/tar2TZr5Vj4mfuO1Qz25fZSZGJOYI8NuzpBCD9yTr7etTXsrSyRbpcBcK2rkKW3uUuo5GOqJpFA/UdqtbeGcCTil0TcDHP86UyOpR15g1AElWOeJNGykOA3cGrRBFI72eJSCOF87yPiraJLaaBY22jyMu8e1LdyMLSKRRnbHevTGKBTJRECBm5tjqaXPLO+pnt9YG01BvJjv2pl+nzNMNWZgrkt8fjVosuRIZHYBueN3iIzK5jHJS26gykqw6itUjtI3qxz4f/EACAQAQABBAIDAQEAAAAAAAAAAAERACExQVFhEIGRcfD/2gAIAQEAAT8hYhdWClL/AAVe5awnd6KvrXD8Ds0tQlut03Ok8CrBDwI0Mr8pcwSIm4VZdzjDSUHPrHTdo5ipE8A8GBuXGd0gYIHCUB51pxtWl2NSVTkZUB3gfk1I0pYEMQ/pilRHGJS4ZuJsbrQLDMKIuDelQqRMU2isWUeaIvngt/Sg46hBz9Hzk7IiPVYAaLCVovE9fXx//9oADAMBAAIAAwAAABBCWEeOzAqDSRef/8QAIBEBAQACAgIDAQEAAAAAAAAAAREAITFBUXEQYZGBof/aAAgBAwEBPxAm4DD3/DIVw13Tf8BxzROy70V+TtM5YTL2MQSiKHfwmUDjqD2lB+0fQ4LEiqh7ENDQrSkvQMBFU58q5FG2tMx+DtPQVOBndEETDQiomxMQ0WVQyi4JoMNIZIzmiEkBRAWkNK5yVujES03IHfRyYmUoTR0LiVUrfBySA15BX0H+tcDLoZ76y/VhwMSIDgqQ04ixQq08soRKRD7OI4IUxIXCa0i+L8rwFyAL2yuJSJyJR9jn1qIAfhD4/8QAIREBAAEEAQUBAQAAAAAAAAAAAREAITFBURBhcYGRobH/2gAIAQIBAT8QBUFI1aSgu3i4Tu9IbdogvcaDu/KVlvEMSJHHZHoAAb7DgyvgozVhCAHIC8u5sQDSAwFYD0xZ0YmL0MfKFxsDknhN6ehAyNBpDcYGNrEuxi9C5oUakyhp08TRWFSRcjiPzli1EnjkyuJZDJxNjdHGUAFyxt8/yog0o0jF08MiuIimzDMkS/V46j3RaIlJzFn6j1ENRqWPlGFhNlTLLlZ/vT//xAAgEAEBAAIDAAIDAQAAAAAAAAABEQAhMUFREGFxgZGh/9oACAEBAAE/EB9jB6vGSsPV3UNFR9FTFd+2uqbKPbfQ4nmyjVgiCKzRy/EFh0dqRiScB+0zk3rdkkrsJBSdm1lQL2gaATRyF20HwfUM0NkRWHHLhvD4mQKhYkU0i2wV2LjpPLgioRPQLtPGV5pSCsSq9dvBko0kdw2+EEPZngrZ2PzPnQB1iaNKfs3/AJhjUmrtClmWuzOtyRA0BFsarLwYWN2ECKB3Ga8x+R92ES+I2H8xW8V13omzG6KCgZwUX4//2Q=="

/***/ },
/* 62 */
/*!****************************************!*\
  !*** ./app/containers/Application.css ***!
  \****************************************/
/***/ function(module, exports) {

	module.exports = {
	  "this": "_3y_jvhZPXWYCsyM9LD-1Og",
	  "loading": "_1dQdEaAtT3bml3j56XJF7w",
	  "loadingElement": "hbpDJUZZMQ21Qw5To1HCU"
	};

/***/ },
/* 63 */
/*!*****************************************!*\
  !*** ./app/route-handlers/SomePage.jsx ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 3);
	var desc = {
		loadComponent: function(callback) {}
	};
	var mixinReactProxy = __webpack_require__(/*! ./~/react-proxy-loader/mixinReactProxy.js */ 64);
	mixinReactProxy(React, desc);
	module.exports = React.createClass(desc);
	module.exports.Mixin = desc;

/***/ },
/* 64 */
/*!*************************************************!*\
  !*** ./~/react-proxy-loader/mixinReactProxy.js ***!
  \*************************************************/
/***/ function(module, exports) {

	module.exports = function(React, desc) {
		desc.displayName = "ReactProxy";
		desc.render = function() {
			var Component = this.state.component;
			if(Component) {
				return React.createElement(Component, this.props, this.props.children);
			} else if(this.renderUnavailable) {
				return this.renderUnavailable();
			} else {
				return null;
			}
		};
		desc.getInitialState = function() {
			return { component: this.loadComponent() };
		};
		desc.componentDidMount = function() {
			if(!this.state.component) {
				this.loadComponent(function(component) {
					if(this.isMounted()) {
						this.setState({ component: component });
					}
				}.bind(this));
			}
		};
	};


/***/ },
/* 65 */
/*!*******************************************!*\
  !*** ./app/route-handlers/ReadmePage.jsx ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 3);
	var desc = {
		loadComponent: function(callback) {}
	};
	var mixinReactProxy = __webpack_require__(/*! ./~/react-proxy-loader/mixinReactProxy.js */ 64);
	mixinReactProxy(React, desc);
	module.exports = React.createClass(desc);
	module.exports.Mixin = desc;

/***/ },
/* 66 */
/*!*****************************************!*\
  !*** ./app/route-handlers/TodoPage.jsx ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _itemsStore = __webpack_require__(/*! items-store */ 48);

	var _containersTodoPage = __webpack_require__(/*! containers/TodoPage */ 67);

	var _containersTodoPage2 = _interopRequireDefault(_containersTodoPage);

	exports["default"] = (0, _itemsStore.createContainer)(_containersTodoPage2["default"]);
	module.exports = exports["default"];

/***/ },
/* 67 */
/*!*************************************!*\
  !*** ./app/containers/TodoPage.jsx ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(/*! react */ 3);

	var _react2 = _interopRequireDefault(_react);

	var _componentsTodoListMenu = __webpack_require__(/*! components/TodoListMenu */ 68);

	var _componentsTodoListMenu2 = _interopRequireDefault(_componentsTodoListMenu);

	var _reactRouter = __webpack_require__(/*! react-router */ 4);

	var _actions = __webpack_require__(/*! actions */ 69);

	var TodoPage = (function (_React$Component) {
		_inherits(TodoPage, _React$Component);

		function TodoPage() {
			_classCallCheck(this, TodoPage);

			_get(Object.getPrototypeOf(TodoPage.prototype), "constructor", this).apply(this, arguments);
		}

		_createClass(TodoPage, [{
			key: "render",
			value: function render() {
				var _this = this;

				return _react2["default"].createElement(
					"div",
					null,
					_react2["default"].createElement(
						"h2",
						null,
						"TodoPage"
					),
					_react2["default"].createElement(
						"button",
						{ onClick: function () {
								return _this.fetch();
							} },
						"Update todolist data"
					),
					_react2["default"].createElement(_componentsTodoListMenu2["default"], null),
					_react2["default"].createElement(_reactRouter.RouteHandler, null)
				);
			}
		}, {
			key: "fetch",
			value: function fetch() {
				_actions.Todo.fetch();
			}
		}], [{
			key: "getProps",
			value: function getProps() {
				return {};
			}
		}]);

		return TodoPage;
	})(_react2["default"].Component);

	exports["default"] = TodoPage;
	module.exports = exports["default"];

/***/ },
/* 68 */
/*!*****************************************!*\
  !*** ./app/components/TodoListMenu.jsx ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(/*! react */ 3);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(/*! react-router */ 4);

	var ListMenu = (function (_React$Component) {
		_inherits(ListMenu, _React$Component);

		function ListMenu() {
			_classCallCheck(this, ListMenu);

			_get(Object.getPrototypeOf(ListMenu.prototype), "constructor", this).apply(this, arguments);
		}

		_createClass(ListMenu, [{
			key: "render",
			value: function render() {
				return _react2["default"].createElement(
					"div",
					null,
					_react2["default"].createElement(
						"h2",
						null,
						"Lists:"
					),
					_react2["default"].createElement(
						"ul",
						null,
						_react2["default"].createElement(
							"li",
							null,
							_react2["default"].createElement(
								_reactRouter.Link,
								{ to: "todolist", params: { list: "mylist" } },
								"mylist"
							)
						),
						_react2["default"].createElement(
							"li",
							null,
							_react2["default"].createElement(
								_reactRouter.Link,
								{ to: "todolist", params: { list: "otherlist" } },
								"otherlist"
							)
						)
					)
				);
			}
		}]);

		return ListMenu;
	})(_react2["default"].Component);

	exports["default"] = ListMenu;
	module.exports = exports["default"];

/***/ },
/* 69 */
/*!************************!*\
  !*** ./app/actions.js ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _itemsStore = __webpack_require__(/*! items-store */ 48);

	// All the actions of the application

	var Todo = _itemsStore.Actions.create(["update", // (id, update): Update a todo item
	"add", // (list, item): Add an todo item to a todo list
	"fetch", // (): Fetch all todo data
	"fetchItem" // (id): Fetch todo item data
	]);

	exports.Todo = Todo;
	var Chat = _itemsStore.Actions.create(["send", // (room, message): Send a chat message to a room
	"fetch" // (): Fetch all chat data
	]);
	exports.Chat = Chat;

/***/ },
/* 70 */
/*!*********************************************!*\
  !*** ./app/route-handlers/TodoListPage.jsx ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _itemsStore = __webpack_require__(/*! items-store */ 48);

	var _containersTodoListPage = __webpack_require__(/*! containers/TodoListPage */ 71);

	var _containersTodoListPage2 = _interopRequireDefault(_containersTodoListPage);

	exports["default"] = (0, _itemsStore.createContainer)(_containersTodoListPage2["default"]);
	module.exports = exports["default"];

/***/ },
/* 71 */
/*!*****************************************!*\
  !*** ./app/containers/TodoListPage.jsx ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(/*! react */ 3);

	var _react2 = _interopRequireDefault(_react);

	var _actions = __webpack_require__(/*! actions */ 69);

	var _storeHelpersTodo = __webpack_require__(/*! store-helpers/Todo */ 72);

	var _componentsTodoItem = __webpack_require__(/*! components/TodoItem */ 73);

	var _componentsTodoItem2 = _interopRequireDefault(_componentsTodoItem);

	var _componentsNewTodoItemEditor = __webpack_require__(/*! components/NewTodoItemEditor */ 74);

	var _componentsNewTodoItemEditor2 = _interopRequireDefault(_componentsNewTodoItemEditor);

	var TodoListPage = (function (_React$Component) {
		_inherits(TodoListPage, _React$Component);

		function TodoListPage() {
			_classCallCheck(this, TodoListPage);

			_get(Object.getPrototypeOf(TodoListPage.prototype), "constructor", this).apply(this, arguments);
		}

		_createClass(TodoListPage, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var id = _props.id;
				var list = _props.list;

				return _react2["default"].createElement(
					"div",
					null,
					_react2["default"].createElement(
						"h3",
						null,
						"Todolist: ",
						id
					),
					list.error && _react2["default"].createElement(
						"div",
						null,
						_react2["default"].createElement(
							"strong",
							null,
							list.error.message
						)
					),
					list.items ? _react2["default"].createElement(
						"ul",
						null,
						list.items.map(function (item) {
							return _react2["default"].createElement(
								"li",
								{ key: item.id },
								_react2["default"].createElement(_componentsTodoItem2["default"], _extends({}, item, { onUpdate: function (update) {
										_actions.Todo.update(item.id, update);
									} }))
							);
						}),
						_react2["default"].createElement(_componentsNewTodoItemEditor2["default"], { onAdd: function (item) {
								_actions.Todo.add(id, item);
								return true;
							} })
					) : _react2["default"].createElement(
						"div",
						null,
						"Fetching from server..."
					)
				);
			}
		}], [{
			key: "getProps",
			value: function getProps(stores, params) {
				var list = params.list;

				return {
					id: list,
					list: (0, _storeHelpersTodo.fetchTodoList)(stores, list)
				};
			}
		}]);

		return TodoListPage;
	})(_react2["default"].Component);

	exports["default"] = TodoListPage;
	module.exports = exports["default"];

/***/ },
/* 72 */
/*!***********************************!*\
  !*** ./app/store-helpers/Todo.js ***!
  \***********************************/
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.fetchTodoItem = fetchTodoItem;
	exports.fetchTodoList = fetchTodoList;

	function fetchTodoItem(stores, item) {
		return _extends({}, stores.TodoItem.getItem(item), stores.TodoItem.getItemInfo(item), {
			id: item
		});
	}

	function fetchTodoList(stores, list) {
		var data = _extends({
			items: stores.TodoList.getItem(list)
		}, stores.TodoList.getItemInfo(list), {
			id: list
		});
		var newId = 0;
		if (data.items) {
			data.items = data.items.map(function (item) {
				if (typeof item === "object") return _extends({}, item, {
					sending: true,
					id: "new" + newId++
				});
				return fetchTodoItem(stores, item);
			});
		}
		return data;
	}

/***/ },
/* 73 */
/*!*************************************!*\
  !*** ./app/components/TodoItem.jsx ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(/*! react */ 3);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(/*! react-router */ 4);

	var TodoItem = (function (_React$Component) {
		_inherits(TodoItem, _React$Component);

		function TodoItem() {
			_classCallCheck(this, TodoItem);

			_get(Object.getPrototypeOf(TodoItem.prototype), "constructor", this).apply(this, arguments);
		}

		_createClass(TodoItem, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var id = _props.id;
				var text = _props.text;
				var done = _props.done;
				var sending = _props.sending;
				var onUpdate = _props.onUpdate;

				return _react2["default"].createElement(
					"div",
					null,
					_react2["default"].createElement("input", { type: "checkbox", checked: done, onChange: function (event) {
							if (sending) return;
							onUpdate({
								done: event.target.checked
							});
						} }),
					sending ? _react2["default"].createElement(
						"span",
						null,
						text
					) : _react2["default"].createElement(
						_reactRouter.Link,
						{ to: "todoitem", params: { item: id } },
						text
					)
				);
			}
		}]);

		return TodoItem;
	})(_react2["default"].Component);

	exports["default"] = TodoItem;

	TodoItem.propTypes = {
		id: _react2["default"].PropTypes.string.isRequired,
		text: _react2["default"].PropTypes.string.isRequired,
		done: _react2["default"].PropTypes.bool,
		sending: _react2["default"].PropTypes.bool,
		onUpdate: _react2["default"].PropTypes.func.isRequired
	};
	module.exports = exports["default"];

/***/ },
/* 74 */
/*!**********************************************!*\
  !*** ./app/components/NewTodoItemEditor.jsx ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(/*! react */ 3);

	var _react2 = _interopRequireDefault(_react);

	var NewTodoItemEditor = (function (_React$Component) {
		_inherits(NewTodoItemEditor, _React$Component);

		function NewTodoItemEditor(props) {
			_classCallCheck(this, NewTodoItemEditor);

			_get(Object.getPrototypeOf(NewTodoItemEditor.prototype), "constructor", this).call(this, props);
			this.state = {
				text: ""
			};
		}

		_createClass(NewTodoItemEditor, [{
			key: "render",
			value: function render() {
				var _this = this;

				var onAdd = this.props.onAdd;
				var text = this.state.text;

				return _react2["default"].createElement(
					"div",
					null,
					_react2["default"].createElement("input", { type: "text", value: text, onChange: function (event) {
							_this.setState({
								text: event.target.value
							});
						} }),
					_react2["default"].createElement(
						"button",
						{ onClick: function () {
								if (onAdd({
									done: false,
									text: text
								})) _this.setState({ text: "" });
							} },
						"Add"
					)
				);
			}
		}]);

		return NewTodoItemEditor;
	})(_react2["default"].Component);

	exports["default"] = NewTodoItemEditor;

	NewTodoItemEditor.propTypes = {
		onAdd: _react2["default"].PropTypes.func.isRequired
	};
	module.exports = exports["default"];

/***/ },
/* 75 */
/*!*********************************************!*\
  !*** ./app/route-handlers/TodoItemPage.jsx ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _itemsStore = __webpack_require__(/*! items-store */ 48);

	var _containersTodoItemPage = __webpack_require__(/*! containers/TodoItemPage */ 76);

	var _containersTodoItemPage2 = _interopRequireDefault(_containersTodoItemPage);

	exports["default"] = (0, _itemsStore.createContainer)(_containersTodoItemPage2["default"]);
	module.exports = exports["default"];

/***/ },
/* 76 */
/*!*****************************************!*\
  !*** ./app/containers/TodoItemPage.jsx ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(/*! react */ 3);

	var _react2 = _interopRequireDefault(_react);

	var _actions = __webpack_require__(/*! actions */ 69);

	var _componentsTodoItemEditor = __webpack_require__(/*! components/TodoItemEditor */ 77);

	var _componentsTodoItemEditor2 = _interopRequireDefault(_componentsTodoItemEditor);

	var _storeHelpersTodo = __webpack_require__(/*! store-helpers/Todo */ 72);

	var TodoItemPage = (function (_React$Component) {
		_inherits(TodoItemPage, _React$Component);

		function TodoItemPage() {
			_classCallCheck(this, TodoItemPage);

			_get(Object.getPrototypeOf(TodoItemPage.prototype), "constructor", this).apply(this, arguments);
		}

		_createClass(TodoItemPage, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var id = _props.id;
				var item = _props.item;

				// item is undefined on initial load
				if (!item) {
					return _react2["default"].createElement(
						"div",
						null,
						"Initial load from server..."
					);
				}
				return _react2["default"].createElement(
					"div",
					null,
					_react2["default"].createElement(
						"h3",
						null,
						"Todoitem \"",
						item.text,
						"\""
					),
					item.error && _react2["default"].createElement(
						"p",
						null,
						_react2["default"].createElement(
							"b",
							null,
							item.error
						),
						_react2["default"].createElement(
							"button",
							{ onClick: function () {
									_actions.Todo.fetchItem(id);
								} },
							"Reload"
						)
					),
					_react2["default"].createElement(
						"p",
						null,
						_react2["default"].createElement(_componentsTodoItemEditor2["default"], _extends({}, item, { onUpdate: function (update) {
								_actions.Todo.update(id, update);
							} }))
					),
					item.updated ? _react2["default"].createElement(
						"p",
						null,
						"Syncing to server..."
					) : item.outdated ? _react2["default"].createElement(
						"p",
						null,
						"Syncing from server..."
					) : null
				);
			}
		}], [{
			key: "getProps",
			value: function getProps(stores, params) {
				var todoItem = (0, _storeHelpersTodo.fetchTodoItem)(stores, params.item);
				return {
					id: params.item,
					item: todoItem
				};
			}
		}]);

		return TodoItemPage;
	})(_react2["default"].Component);

	exports["default"] = TodoItemPage;
	module.exports = exports["default"];

/***/ },
/* 77 */
/*!*******************************************!*\
  !*** ./app/components/TodoItemEditor.jsx ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(/*! react */ 3);

	var _react2 = _interopRequireDefault(_react);

	var TodoItemEditor = (function (_React$Component) {
		_inherits(TodoItemEditor, _React$Component);

		function TodoItemEditor() {
			_classCallCheck(this, TodoItemEditor);

			_get(Object.getPrototypeOf(TodoItemEditor.prototype), "constructor", this).apply(this, arguments);
		}

		_createClass(TodoItemEditor, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var text = _props.text;
				var done = _props.done;
				var onUpdate = _props.onUpdate;

				return _react2["default"].createElement(
					"span",
					null,
					_react2["default"].createElement("input", { type: "checkbox", checked: done, onChange: function (event) {
							onUpdate({
								done: event.target.checked
							});
						} }),
					_react2["default"].createElement("input", { type: "text", value: text, onChange: function (event) {
							onUpdate({
								text: event.target.value
							});
						} })
				);
			}
		}]);

		return TodoItemEditor;
	})(_react2["default"].Component);

	exports["default"] = TodoItemEditor;

	TodoItemEditor.propTypes = {
		text: _react2["default"].PropTypes.string.isRequired,
		done: _react2["default"].PropTypes.bool.isRequired,
		onUpdate: _react2["default"].PropTypes.func.isRequired
	};
	module.exports = exports["default"];

/***/ },
/* 78 */
/*!*****************************************!*\
  !*** ./app/route-handlers/HomePage.jsx ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _itemsStore = __webpack_require__(/*! items-store */ 48);

	var _containersHomePage = __webpack_require__(/*! containers/HomePage */ 79);

	var _containersHomePage2 = _interopRequireDefault(_containersHomePage);

	exports["default"] = (0, _itemsStore.createContainer)(_containersHomePage2["default"]);
	module.exports = exports["default"];

/***/ },
/* 79 */
/*!*************************************!*\
  !*** ./app/containers/HomePage.jsx ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(/*! react */ 3);

	var _react2 = _interopRequireDefault(_react);

	var HomePage = (function (_React$Component) {
		_inherits(HomePage, _React$Component);

		function HomePage() {
			_classCallCheck(this, HomePage);

			_get(Object.getPrototypeOf(HomePage.prototype), "constructor", this).apply(this, arguments);
		}

		_createClass(HomePage, [{
			key: "render",
			value: function render() {
				return _react2["default"].createElement(
					"div",
					null,
					_react2["default"].createElement(
						"h2",
						null,
						"Homepage"
					),
					_react2["default"].createElement(
						"p",
						null,
						"This is the homepage."
					),
					_react2["default"].createElement(
						"p",
						null,
						"Try to go to a todo list page."
					)
				);
			}
		}], [{
			key: "getProps",
			value: function getProps() {
				return {};
			}
		}]);

		return HomePage;
	})(_react2["default"].Component);

	exports["default"] = HomePage;
	module.exports = exports["default"];

/***/ },
/* 80 */
/*!*********************************************!*\
  !*** ./app/route-handlers/NotFoundPage.jsx ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _itemsStore = __webpack_require__(/*! items-store */ 48);

	var _containersNotFoundPage = __webpack_require__(/*! containers/NotFoundPage */ 81);

	var _containersNotFoundPage2 = _interopRequireDefault(_containersNotFoundPage);

	exports["default"] = (0, _itemsStore.createContainer)(_containersNotFoundPage2["default"]);
	module.exports = exports["default"];

/***/ },
/* 81 */
/*!*****************************************!*\
  !*** ./app/containers/NotFoundPage.jsx ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(/*! react */ 3);

	var _react2 = _interopRequireDefault(_react);

	var NotFoundPage = (function (_React$Component) {
		_inherits(NotFoundPage, _React$Component);

		function NotFoundPage() {
			_classCallCheck(this, NotFoundPage);

			_get(Object.getPrototypeOf(NotFoundPage.prototype), "constructor", this).apply(this, arguments);
		}

		_createClass(NotFoundPage, [{
			key: "render",
			value: function render() {
				return _react2["default"].createElement(
					"div",
					null,
					_react2["default"].createElement(
						"h2",
						null,
						"Not found"
					),
					_react2["default"].createElement(
						"p",
						null,
						"The page you requested was not found."
					)
				);
			}
		}], [{
			key: "getProps",
			value: function getProps() {
				return {};
			}
		}]);

		return NotFoundPage;
	})(_react2["default"].Component);

	exports["default"] = NotFoundPage;
	module.exports = exports["default"];

/***/ },
/* 82 */
/*!*****************************************!*\
  !*** ./app/route-handlers/ChatPage.jsx ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _itemsStore = __webpack_require__(/*! items-store */ 48);

	var _containersChatPage = __webpack_require__(/*! containers/ChatPage */ 83);

	var _containersChatPage2 = _interopRequireDefault(_containersChatPage);

	exports["default"] = (0, _itemsStore.createContainer)(_containersChatPage2["default"]);
	module.exports = exports["default"];

/***/ },
/* 83 */
/*!*************************************!*\
  !*** ./app/containers/ChatPage.jsx ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(/*! react */ 3);

	var _react2 = _interopRequireDefault(_react);

	var _actions = __webpack_require__(/*! actions */ 69);

	var _containersChatList = __webpack_require__(/*! containers/ChatList */ 84);

	var _containersChatList2 = _interopRequireDefault(_containersChatList);

	var _componentsNewChatEditor = __webpack_require__(/*! components/NewChatEditor */ 89);

	var _componentsNewChatEditor2 = _interopRequireDefault(_componentsNewChatEditor);

	var ChatPage = (function (_React$Component) {
		_inherits(ChatPage, _React$Component);

		function ChatPage() {
			_classCallCheck(this, ChatPage);

			_get(Object.getPrototypeOf(ChatPage.prototype), "constructor", this).apply(this, arguments);
		}

		_createClass(ChatPage, [{
			key: "render",
			value: function render() {
				var _this = this;

				var _props = this.props;
				var room = _props.room;
				var chatList = _props.chatList;

				return _react2["default"].createElement(
					"div",
					null,
					_react2["default"].createElement(
						"p",
						null,
						"Chat room \"",
						room,
						"\"."
					),
					_react2["default"].createElement(
						"button",
						{ onClick: function () {
								return _this.fetch();
							} },
						"Update chat data"
					),
					_react2["default"].createElement(_containersChatList2["default"], chatList),
					_react2["default"].createElement("hr", null),
					_react2["default"].createElement(_componentsNewChatEditor2["default"], { onAdd: function (item) {
							_actions.Chat.send(room, item);
							return true;
						} }),
					_react2["default"].createElement(
						"p",
						null,
						"Note: There is no realtime communication here as you would expect from a chat. This is on the roadmap for items-store."
					)
				);
			}
		}, {
			key: "fetch",
			value: function fetch() {
				_actions.Chat.fetch();
			}
		}], [{
			key: "getProps",
			value: function getProps(stores, params) {
				var room = params.room;

				return {
					room: room,
					chatList: _containersChatList2["default"].getProps(stores, {
						room: room
					})
				};
			}
		}]);

		return ChatPage;
	})(_react2["default"].Component);

	exports["default"] = ChatPage;

	ChatPage.propTypes = {
		room: _react2["default"].PropTypes.string,
		chatList: _react2["default"].PropTypes.any
	};
	module.exports = exports["default"];

/***/ },
/* 84 */
/*!*************************************!*\
  !*** ./app/containers/ChatList.jsx ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(/*! react */ 3);

	var _react2 = _interopRequireDefault(_react);

	var _componentsChatLineView = __webpack_require__(/*! components/ChatLineView */ 85);

	var _componentsChatLineView2 = _interopRequireDefault(_componentsChatLineView);

	var _storeHelpersChat = __webpack_require__(/*! store-helpers/Chat */ 87);

	var _ChatListCss = __webpack_require__(/*! ./ChatList.css */ 88);

	var _ChatListCss2 = _interopRequireDefault(_ChatListCss);

	var ChatList = (function (_React$Component) {
		_inherits(ChatList, _React$Component);

		function ChatList() {
			_classCallCheck(this, ChatList);

			_get(Object.getPrototypeOf(ChatList.prototype), "constructor", this).apply(this, arguments);
		}

		_createClass(ChatList, [{
			key: "render",
			value: function render() {
				var messages = this.props.messages;

				return _react2["default"].createElement(
					"div",
					{ className: _ChatListCss2["default"]["this"], ref: "chatList" },
					messages ? messages.map(function (msg, idx) {
						return _react2["default"].createElement(_componentsChatLineView2["default"], _extends({ key: idx }, msg));
					}) : _react2["default"].createElement(
						"i",
						null,
						"Loading chat messages..."
					)
				);
			}
		}, {
			key: "componentDidMount",
			value: function componentDidMount() {
				this.scrollDown();
			}
		}, {
			key: "componentDidUpdate",
			value: function componentDidUpdate() {
				this.scrollDown();
			}
		}, {
			key: "scrollDown",
			value: function scrollDown() {
				var domEl = _react2["default"].findDOMNode(this.refs.chatList);
				domEl.scrollTop = domEl.scrollHeight;
			}
		}], [{
			key: "getProps",
			value: function getProps(stores, params) {
				var room = params.room;

				return {
					messages: (0, _storeHelpersChat.fetchChatMessages)(stores, room)
				};
			}
		}]);

		return ChatList;
	})(_react2["default"].Component);

	exports["default"] = ChatList;

	ChatList.propTypes = {
		messages: _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.object)
	};
	module.exports = exports["default"];

/***/ },
/* 85 */
/*!*****************************************!*\
  !*** ./app/components/ChatLineView.jsx ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(/*! react */ 3);

	var _react2 = _interopRequireDefault(_react);

	var _componentsChatUserView = __webpack_require__(/*! components/ChatUserView */ 86);

	var _componentsChatUserView2 = _interopRequireDefault(_componentsChatUserView);

	var ChatLineView = (function (_React$Component) {
		_inherits(ChatLineView, _React$Component);

		function ChatLineView() {
			_classCallCheck(this, ChatLineView);

			_get(Object.getPrototypeOf(ChatLineView.prototype), "constructor", this).apply(this, arguments);
		}

		_createClass(ChatLineView, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var user = _props.user;
				var message = _props.message;
				var sending = _props.sending;

				return _react2["default"].createElement(
					"div",
					null,
					_react2["default"].createElement(_componentsChatUserView2["default"], user),
					": ",
					message,
					sending && _react2["default"].createElement(
						"span",
						null,
						" (sending...)"
					)
				);
			}
		}]);

		return ChatLineView;
	})(_react2["default"].Component);

	exports["default"] = ChatLineView;

	ChatLineView.propTypes = {
		user: _react2["default"].PropTypes.object.isRequired,
		message: _react2["default"].PropTypes.string.isRequired,
		sending: _react2["default"].PropTypes.bool
	};
	module.exports = exports["default"];

/***/ },
/* 86 */
/*!*****************************************!*\
  !*** ./app/components/ChatUserView.jsx ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(/*! react */ 3);

	var _react2 = _interopRequireDefault(_react);

	var ChatUserView = (function (_React$Component) {
		_inherits(ChatUserView, _React$Component);

		function ChatUserView() {
			_classCallCheck(this, ChatUserView);

			_get(Object.getPrototypeOf(ChatUserView.prototype), "constructor", this).apply(this, arguments);
		}

		_createClass(ChatUserView, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var name = _props.name;
				var messages = _props.messages;

				return messages ? _react2["default"].createElement(
					"span",
					null,
					name,
					" (",
					messages,
					")"
				) : _react2["default"].createElement(
					"span",
					null,
					name
				);
			}
		}]);

		return ChatUserView;
	})(_react2["default"].Component);

	exports["default"] = ChatUserView;

	ChatUserView.propTypes = {
		name: _react2["default"].PropTypes.string.isRequired,
		messages: _react2["default"].PropTypes.number
	};
	module.exports = exports["default"];

/***/ },
/* 87 */
/*!***********************************!*\
  !*** ./app/store-helpers/Chat.js ***!
  \***********************************/
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.fetchChatUser = fetchChatUser;
	exports.fetchChatMessage = fetchChatMessage;
	exports.fetchChatMessages = fetchChatMessages;

	function fetchChatUser(stores, name) {
		return _extends({}, stores.ChatUser.getItem(name), {
			name: name
		});
	}

	function fetchChatMessage(stores, data) {
		return _extends({}, data, {
			user: data.user && fetchChatUser(stores, data.user)
		});
	}

	function fetchChatMessages(stores, room) {
		var messages = stores.ChatRoom.getItem(room);
		if (!messages) return messages;
		return messages.map(function (msg) {
			return fetchChatMessage(stores, msg);
		});
	}

/***/ },
/* 88 */
/*!*************************************!*\
  !*** ./app/containers/ChatList.css ***!
  \*************************************/
/***/ function(module, exports) {

	module.exports = {
	  "this": "_1DT45zU4Rt74RKTl9EFNQz"
	};

/***/ },
/* 89 */
/*!******************************************!*\
  !*** ./app/components/NewChatEditor.jsx ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(/*! react */ 3);

	var _react2 = _interopRequireDefault(_react);

	var NewChatEditor = (function (_React$Component) {
		_inherits(NewChatEditor, _React$Component);

		function NewChatEditor(props) {
			_classCallCheck(this, NewChatEditor);

			_get(Object.getPrototypeOf(NewChatEditor.prototype), "constructor", this).call(this, props);
			this.state = {
				name: "",
				message: ""
			};
		}

		_createClass(NewChatEditor, [{
			key: "render",
			value: function render() {
				var _this = this;

				var _state = this.state;
				var name = _state.name;
				var message = _state.message;

				return _react2["default"].createElement(
					"div",
					null,
					"Your name: ",
					_react2["default"].createElement("input", { type: "text", value: name, onChange: function (event) {
							_this.setState({
								name: event.target.value
							});
						} }),
					name && _react2["default"].createElement(
						"div",
						null,
						"Your message: ",
						_react2["default"].createElement("input", { type: "text", value: message, onChange: function (event) {
								_this.setState({
									message: event.target.value
								});
							}, onKeyDown: function (event) {
								if (event.key === "Enter") _this.sendMessage();
							} }),
						" ",
						_react2["default"].createElement(
							"button",
							{ onClick: function () {
									return _this.sendMessage();
								} },
							"Send"
						)
					)
				);
			}
		}, {
			key: "sendMessage",
			value: function sendMessage() {
				var onAdd = this.props.onAdd;
				var _state2 = this.state;
				var name = _state2.name;
				var message = _state2.message;

				if (onAdd({
					user: name,
					message: message
				})) {
					this.setState({
						message: ""
					});
				}
			}
		}]);

		return NewChatEditor;
	})(_react2["default"].Component);

	exports["default"] = NewChatEditor;

	NewChatEditor.propTypes = {
		onAdd: _react2["default"].PropTypes.func.isRequired
	};
	module.exports = exports["default"];

/***/ },
/* 90 */
/*!***************************************!*\
  !*** ./app/mainStoresDescriptions.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	
	// This file describe which stores exists and in which format updates are stored and merged

	"use strict";

	var _updateHelpersReact = __webpack_require__(/*! update-helpers/react */ 91);

	var _updateHelpersList = __webpack_require__(/*! update-helpers/list */ 93);

	module.exports = {
		// the Router is a local store that handles information about data fetching
		// see ../config/app.jsx
		Router: {
			local: true,
			readSingleItem: function readSingleItem(item, callback) {
				callback(null, item.oldData || null);
			}
		},

		// stores TodoLists
		// changes are react style updates
		TodoList: {
			applyUpdate: _updateHelpersReact.applyUpdate,
			mergeUpdates: _updateHelpersReact.mergeUpdates
		},

		// stores TodoItems
		// changes are in the default format
		TodoItem: {},

		// stores chats in a chat room
		// changes are lists of new messages
		// errors result in a error item
		ChatRoom: {
			applyUpdate: _updateHelpersList.applyUpdate,
			mergeUpdates: _updateHelpersList.mergeUpdates,
			applyNewError: function applyNewError(oldData, error) {
				var errorMessage = {
					user: "System",
					message: error.message
				};
				return (oldData || []).concat(errorMessage);
			}
		},

		// stores information about each chat user
		// currently this only stores the message count
		// uses defaults for everything (simple key-value data)
		ChatUser: {}
	};

/***/ },
/* 91 */
/*!*************************************!*\
  !*** ./app/update-helpers/react.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	// a helper method for merging react style updates
	// (not totally correct, but fine for now)
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.mergeUpdates = mergeUpdates;

	function _interopRequire(obj) { return obj && obj.__esModule ? obj["default"] : obj; }

	function mergeUpdates(a, b) {
		if (typeof a === "object" && typeof b === "object") {
			var res = {};
			Object.keys(a).concat(Object.keys(b)).forEach(function (key) {
				if (a[key] && b[key]) {
					switch (key) {
						case "$push":
							res[key] = a[key].concat(b[key]);
							break;
						case "$unshift":
							res[key] = b[key].concat(a[key]);
							break;
						case "$splice":
							res[key] = a[key].concat(b[key]);
							break;
						case "$set":
							res[key] = b[key];
							break;
						case "$merge":
							var o = res[key] = {};
							Object.keys(a[key]).forEach(function (x) {
								o[x] = a[key][x];
							});
							Object.keys(b[key]).forEach(function (x) {
								o[x] = b[key][x];
							});
							break;
					}
					res[key] = mergeUpdates(a[key], b[key]);
				} else if (a[key]) res[key] = a[key];else res[key] = b[key];
			});
		}
		return a || b;
	}

	var _reactLibUpdate = __webpack_require__(/*! react/lib/update */ 92);

	exports.applyUpdate = _interopRequire(_reactLibUpdate);

/***/ },
/* 92 */
/*!***********************************!*\
  !*** external "react/lib/update" ***!
  \***********************************/
/***/ function(module, exports) {

	module.exports = require("react/lib/update");

/***/ },
/* 93 */
/*!************************************!*\
  !*** ./app/update-helpers/list.js ***!
  \************************************/
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.mergeUpdates = mergeUpdates;
	exports.applyUpdate = applyUpdate;

	function mergeUpdates(a, b) {
		return a.concat(b);
	}

	function applyUpdate(oldData, update) {
		return oldData.concat(update.map(function (u) {
			return _extends({ sending: true }, u);
		}));
	}

/***/ },
/* 94 */
/*!********************************!*\
  !*** ./app/mainPrerender.html ***!
  \********************************/
/***/ function(module, exports) {

	module.exports = "<!DOCTYPE html><html><head><meta charset=\"utf-8\"><link rel=\"stylesheet\" href=\"STYLE_URL\"></head><body><script>var __StoreData = DATA;</script><div id=\"content\">CONTENT</div><script src=\"SCRIPT_URL\"></script></body></html>\n";

/***/ },
/* 95 */
/*!*********************************************!*\
  !*** ./config/createStoresForPrerender.jsx ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports["default"] = createStoresForPrerender;

	var _itemsStore = __webpack_require__(/*! items-store */ 48);

	// create stores for prerending
	// readItems contains async methods for fetching the data from database

	function createStoresForPrerender(storesDescriptions, readItems) {
		return Object.keys(storesDescriptions).reduce(function (obj, name) {
			obj[name] = new _itemsStore.ItemsStore(Object.assign({
				readSingleItem: readItems[name],
				queueRequest: function queueRequest(fn) {
					fn();
				}
			}, storesDescriptions[name]));
			return obj;
		}, {});
	}

	module.exports = exports["default"];

/***/ },
/* 96 */
/*!********************************!*\
  !*** ./config/Prerenderer.jsx ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _react = __webpack_require__(/*! react */ 3);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(/*! react-router */ 4);

	var _reactRouter2 = _interopRequireDefault(_reactRouter);

	var _async = __webpack_require__(/*! async */ 97);

	var _async2 = _interopRequireDefault(_async);

	var _StoresWrapper = __webpack_require__(/*! ./StoresWrapper */ 98);

	var _StoresWrapper2 = _interopRequireDefault(_StoresWrapper);

	var Prerenderer = (function () {
		function Prerenderer(routes) {
			_classCallCheck(this, Prerenderer);

			this.routes = routes;
		}

		_createClass(Prerenderer, [{
			key: "getContent",
			value: function getContent(path, stores, callback) {
				// run the path thought react-router
				_reactRouter2["default"].run(this.routes, path, function (Application, state) {
					// wait until every store is charged by the components
					// for faster response time there could be a timeout here
					_async2["default"].forEach(state.routes, function (route, innerCallback) {
						if (route.handler.chargeStores) {
							route.handler.chargeStores(stores, state.params, innerCallback);
						} else {
							innerCallback();
						}
					}, function () {

						// prerender the application with the stores
						var application = _react2["default"].renderToString(_react2["default"].createElement(_StoresWrapper2["default"], { Component: Application, stores: stores }));

						// get the data from the stores for embedding into the page
						var data = Object.keys(stores).reduce(function (obj, name) {
							if (!stores[name].desc.local) obj[name] = stores[name].getData();
							return obj;
						}, {});

						// format the full page
						callback(null, application, data);
					});
				});
			}
		}]);

		return Prerenderer;
	})();

	exports["default"] = Prerenderer;
	module.exports = exports["default"];

/***/ },
/* 97 */
/*!************************!*\
  !*** external "async" ***!
  \************************/
/***/ function(module, exports) {

	module.exports = require("async");

/***/ },
/* 98 */
/*!**********************************!*\
  !*** ./config/StoresWrapper.jsx ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _react = __webpack_require__(/*! react */ 3);

	var _react2 = _interopRequireDefault(_react);

	var StoresWrapper = (function () {
		function StoresWrapper() {
			_classCallCheck(this, StoresWrapper);
		}

		_createClass(StoresWrapper, [{
			key: "getChildContext",
			value: function getChildContext() {
				return {
					stores: this.props.stores
				};
			}
		}, {
			key: "render",
			value: function render() {
				var Application = this.props.Component;
				return _react2["default"].createElement(Application, null);
			}
		}]);

		return StoresWrapper;
	})();

	exports["default"] = StoresWrapper;
	;

	StoresWrapper.childContextTypes = {
		stores: _react2["default"].PropTypes.object
	};
	module.exports = exports["default"];

/***/ }
/******/ ]);