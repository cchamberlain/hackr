webpackJsonp([2],{

/***/ 220:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _itemsStore = __webpack_require__(198);

	var _containersReadmePage = __webpack_require__(221);

	var _containersReadmePage2 = _interopRequireDefault(_containersReadmePage);

	exports["default"] = (0, _itemsStore.createContainer)(_containersReadmePage2["default"]);
	module.exports = exports["default"];

/***/ },

/***/ 221:
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

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _ReadmePageCss = __webpack_require__(222);

	var _ReadmePageCss2 = _interopRequireDefault(_ReadmePageCss);

	var ReadmePage = (function (_React$Component) {
		_inherits(ReadmePage, _React$Component);

		function ReadmePage() {
			_classCallCheck(this, ReadmePage);

			_get(Object.getPrototypeOf(ReadmePage.prototype), "constructor", this).apply(this, arguments);
		}

		_createClass(ReadmePage, [{
			key: "render",
			value: function render() {
				var readme = { __html: __webpack_require__(224) };
				return _react2["default"].createElement("div", { className: _ReadmePageCss2["default"]["this"], dangerouslySetInnerHTML: readme });
			}
		}], [{
			key: "getProps",
			value: function getProps() {
				return {};
			}
		}]);

		return ReadmePage;
	})(_react2["default"].Component);

	exports["default"] = ReadmePage;
	module.exports = exports["default"];

/***/ },

/***/ 222:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(223);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(214)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?module&localIdentName=[path][name]---[local]---[hash:base64:5]!./ReadmePage.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?module&localIdentName=[path][name]---[local]---[hash:base64:5]!./ReadmePage.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 223:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(213)();
	exports.locals = {
	  "this": "app-containers-ReadmePage---this---3KDqB"
	};
	exports.push([module.id, ".app-containers-ReadmePage---this---3KDqB {\n\tbackground-color: white;\n\tborder: 1px dotted gray;\n\tpadding: 1em;\n}\n", ""]);

/***/ },

/***/ 224:
/***/ function(module, exports) {

	module.exports = "<h1 id=\"hackr\">hackr</h1>\n<p>Future game.</p>\n";

/***/ }

});