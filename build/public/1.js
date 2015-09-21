webpackJsonp([1],{

/***/ 217:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _itemsStore = __webpack_require__(198);

	var _containersSomePage = __webpack_require__(218);

	var _containersSomePage2 = _interopRequireDefault(_containersSomePage);

	exports["default"] = (0, _itemsStore.createContainer)(_containersSomePage2["default"]);
	module.exports = exports["default"];

/***/ },

/***/ 218:
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

	var SomePage = (function (_React$Component) {
		_inherits(SomePage, _React$Component);

		function SomePage() {
			_classCallCheck(this, SomePage);

			_get(Object.getPrototypeOf(SomePage.prototype), "constructor", this).apply(this, arguments);
		}

		_createClass(SomePage, [{
			key: "render",
			value: function render() {
				return _react2["default"].createElement(
					"div",
					null,
					_react2["default"].createElement(
						"h2",
						null,
						"SomePage"
					),
					_react2["default"].createElement(
						"p",
						null,
						"This is just some page... (loaded on demand)"
					)
				);
			}
		}], [{
			key: "getProps",
			value: function getProps() {
				return {};
			}
		}]);

		return SomePage;
	})(_react2["default"].Component);

	exports["default"] = SomePage;
	module.exports = exports["default"];

/***/ }

});