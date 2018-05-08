module.exports =

        __NEXT_REGISTER_PAGE('/', function() {
          var comp = 
      webpackJsonp([5],{

/***/ "./graph.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vx_shape__ = __webpack_require__("./node_modules/@vx/shape/build/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vx_shape___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__vx_shape__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vx_mock_data__ = __webpack_require__("./node_modules/@vx/mock-data/build/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vx_mock_data___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__vx_mock_data__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vx_curve__ = __webpack_require__("./node_modules/@vx/curve/build/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vx_curve___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__vx_curve__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vx_gradient__ = __webpack_require__("./node_modules/@vx/gradient/build/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vx_gradient___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__vx_gradient__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vx_grid__ = __webpack_require__("./node_modules/@vx/grid/build/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vx_grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__vx_grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vx_scale__ = __webpack_require__("./node_modules/@vx/scale/build/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vx_scale___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__vx_scale__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__vx_tooltip__ = __webpack_require__("./node_modules/@vx/tooltip/build/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__vx_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__vx_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__vx_event__ = __webpack_require__("./node_modules/@vx/event/build/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__vx_event___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__vx_event__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_d3_array__ = __webpack_require__("./node_modules/d3-array/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_d3_time_format__ = __webpack_require__("./node_modules/d3-time-format/index.js");
var _jsxFileName = "/Users/v16/code/portfolio/graph.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }












var stock = __WEBPACK_IMPORTED_MODULE_2__vx_mock_data__["appleStock"].slice(800);
var formatDate = Object(__WEBPACK_IMPORTED_MODULE_10_d3_time_format__["a" /* timeFormat */])("%b %d, '%y"); // accessors

var xStock = function xStock(d) {
  return new Date(d.date);
};

var yStock = function yStock(d) {
  return d.close;
};

var bisectDate = Object(__WEBPACK_IMPORTED_MODULE_9_d3_array__["c" /* bisector */])(function (d) {
  return new Date(d.date);
}).left;

var Area =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Area, _React$Component);

  function Area(props) {
    var _this;

    _classCallCheck(this, Area);

    _this = _possibleConstructorReturn(this, (Area.__proto__ || Object.getPrototypeOf(Area)).call(this, props));
    _this.handleTooltip = _this.handleTooltip.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Area, [{
    key: "handleTooltip",
    value: function handleTooltip(_ref) {
      var event = _ref.event,
          data = _ref.data,
          xStock = _ref.xStock,
          xScale = _ref.xScale,
          yScale = _ref.yScale;
      var showTooltip = this.props.showTooltip;

      var _localPoint = Object(__WEBPACK_IMPORTED_MODULE_8__vx_event__["localPoint"])(event),
          x = _localPoint.x;

      var x0 = xScale.invert(x);
      var index = bisectDate(data, x0, 1);
      var d0 = data[index - 1];
      var d1 = data[index];
      var d = d0;

      if (d1 && d1.date) {
        d = x0 - xStock(d0.date) > xStock(d1.date) - x0 ? d1 : d0;
      }

      showTooltip({
        tooltipData: d,
        tooltipLeft: x,
        tooltipTop: yScale(d.close)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          width = _props.width,
          height = _props.height,
          margin = _props.margin,
          showTooltip = _props.showTooltip,
          hideTooltip = _props.hideTooltip,
          tooltipData = _props.tooltipData,
          tooltipTop = _props.tooltipTop,
          tooltipLeft = _props.tooltipLeft,
          events = _props.events;
      if (width < 10) return null; // bounds

      var xMax = width - margin.left - margin.right;
      var yMax = height - margin.top - margin.bottom; // scales

      var xScale = Object(__WEBPACK_IMPORTED_MODULE_6__vx_scale__["scaleTime"])({
        range: [0, xMax],
        domain: Object(__WEBPACK_IMPORTED_MODULE_9_d3_array__["d" /* extent */])(stock, xStock)
      });
      var yScale = Object(__WEBPACK_IMPORTED_MODULE_6__vx_scale__["scaleLinear"])({
        range: [yMax, 0],
        domain: [0, Object(__WEBPACK_IMPORTED_MODULE_9_d3_array__["e" /* max */])(stock, yStock) + yMax / 3],
        nice: true
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
        ref: function ref(s) {
          return _this2.svg = s;
        },
        width: width,
        height: height,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("rect", {
        x: 0,
        y: 0,
        width: width,
        height: height,
        fill: "#32deaa",
        rx: 14,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("defs", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("linearGradient", {
        id: "gradient",
        x1: "0%",
        y1: "0%",
        x2: "0%",
        y2: "100%",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("stop", {
        offset: "0%",
        stopColor: "#FFFFFF",
        stopOpacity: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("stop", {
        offset: "100%",
        stopColor: "#FFFFFF",
        stopOpacity: 0.2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__vx_grid__["GridRows"], {
        lineStyle: {
          pointerEvents: 'none'
        },
        scale: yScale,
        width: xMax,
        strokeDasharray: "2,2",
        stroke: "rgba(255,255,255,0.3)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__vx_grid__["GridColumns"], {
        lineStyle: {
          pointerEvents: 'none'
        },
        scale: xScale,
        height: yMax,
        strokeDasharray: "2,2",
        stroke: "rgba(255,255,255,0.3)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__vx_shape__["AreaClosed"], {
        data: stock,
        xScale: xScale,
        yScale: yScale,
        x: xStock,
        y: yStock,
        strokeWidth: 1,
        stroke: 'url(#gradient)',
        fill: 'url(#gradient)',
        curve: __WEBPACK_IMPORTED_MODULE_3__vx_curve__["curveMonotoneX"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__vx_shape__["Bar"], {
        x: 0,
        y: 0,
        width: width,
        height: height,
        fill: "transparent",
        rx: 14,
        data: stock,
        onTouchStart: function onTouchStart(data) {
          return function (event) {
            return _this2.handleTooltip({
              event: event,
              data: data,
              xStock: xStock,
              xScale: xScale,
              yScale: yScale
            });
          };
        },
        onTouchMove: function onTouchMove(data) {
          return function (event) {
            return _this2.handleTooltip({
              event: event,
              data: data,
              xStock: xStock,
              xScale: xScale,
              yScale: yScale
            });
          };
        },
        onMouseMove: function onMouseMove(data) {
          return function (event) {
            return _this2.handleTooltip({
              event: event,
              data: data,
              xStock: xStock,
              xScale: xScale,
              yScale: yScale
            });
          };
        },
        onMouseLeave: function onMouseLeave(data) {
          return function (event) {
            return hideTooltip();
          };
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }), tooltipData && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__vx_shape__["Line"], {
        from: {
          x: tooltipLeft,
          y: 0
        },
        to: {
          x: tooltipLeft,
          y: yMax
        },
        stroke: "rgba(92, 119, 235, 1.000)",
        strokeWidth: 2,
        style: {
          pointerEvents: 'none'
        },
        strokeDasharray: "2,2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("circle", {
        cx: tooltipLeft,
        cy: tooltipTop + 1,
        r: 4,
        fill: "black",
        fillOpacity: 0.1,
        stroke: "black",
        strokeOpacity: 0.1,
        strokeWidth: 2,
        style: {
          pointerEvents: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("circle", {
        cx: tooltipLeft,
        cy: tooltipTop,
        r: 4,
        fill: "rgba(92, 119, 235, 1.000)",
        stroke: "white",
        strokeWidth: 2,
        style: {
          pointerEvents: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        }
      }))), tooltipData && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__vx_tooltip__["Tooltip"], {
        top: tooltipTop - 12,
        left: tooltipLeft + 12,
        style: {
          backgroundColor: 'rgba(92, 119, 235, 1.000)',
          color: 'white'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        }
      }, "$".concat(yStock(tooltipData))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__vx_tooltip__["Tooltip"], {
        top: yMax - 14,
        left: tooltipLeft,
        style: {
          transform: 'translateX(-50%)'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        }
      }, formatDate(xStock(tooltipData)))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Area;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var _default = Object(__WEBPACK_IMPORTED_MODULE_7__vx_tooltip__["withTooltip"])(Area);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(stock, "stock", "/Users/v16/code/portfolio/graph.js");
  reactHotLoader.register(formatDate, "formatDate", "/Users/v16/code/portfolio/graph.js");
  reactHotLoader.register(xStock, "xStock", "/Users/v16/code/portfolio/graph.js");
  reactHotLoader.register(yStock, "yStock", "/Users/v16/code/portfolio/graph.js");
  reactHotLoader.register(bisectDate, "bisectDate", "/Users/v16/code/portfolio/graph.js");
  reactHotLoader.register(Area, "Area", "/Users/v16/code/portfolio/graph.js");
  reactHotLoader.register(_default, "default", "/Users/v16/code/portfolio/graph.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@vx/bounds/build/enhancers/withBoundingRects.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withBoundingRectsProps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = withBoundingRects;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/no-did-mount-set-state: 0, react/no-find-dom-node: 0 */


var emptyRect = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: 0,
  height: 0
};

var rectShape = _propTypes2.default.shape({
  top: _propTypes2.default.number.isRequired,
  right: _propTypes2.default.number.isRequired,
  bottom: _propTypes2.default.number.isRequired,
  left: _propTypes2.default.number.isRequired,
  width: _propTypes2.default.number.isRequired,
  height: _propTypes2.default.number.isRequired
});

var withBoundingRectsProps = exports.withBoundingRectsProps = {
  getRects: _propTypes2.default.func,
  rect: rectShape,
  parentRect: rectShape
};

function withBoundingRects(BaseComponent) {
  var WrappedComponent = function (_React$PureComponent) {
    _inherits(WrappedComponent, _React$PureComponent);

    function WrappedComponent(props) {
      _classCallCheck(this, WrappedComponent);

      var _this = _possibleConstructorReturn(this, (WrappedComponent.__proto__ || Object.getPrototypeOf(WrappedComponent)).call(this, props));

      _this.state = {
        rect: undefined,
        parentRect: undefined
      };
      _this.getRects = _this.getRects.bind(_this);
      return _this;
    }

    _createClass(WrappedComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        this.node = _reactDom2.default.findDOMNode(this);
        this.setState(function () {
          return _this2.getRects();
        });
      }
    }, {
      key: 'getRects',
      value: function getRects() {
        if (!this.node) return this.state;

        var node = this.node;
        var parentNode = this.node.parentNode;

        var rect = node.getBoundingClientRect ? node.getBoundingClientRect() : emptyRect;

        var parentRect = parentNode && parentNode.getBoundingClientRect ? parentNode.getBoundingClientRect() : emptyRect;

        return { rect: rect, parentRect: parentRect };
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(BaseComponent, _extends({ getRects: this.getRects }, this.state, this.props));
      }
    }]);

    return WrappedComponent;
  }(_react2.default.PureComponent);

  WrappedComponent.propTypes = BaseComponent.propTypes;
  WrappedComponent.defaultProps = BaseComponent.defaultProps;
  WrappedComponent.displayName = 'withBoundingRects(' + (BaseComponent.displayName || '') + ')';

  return WrappedComponent;
}

/***/ }),

/***/ "./node_modules/@vx/bounds/build/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _withBoundingRects = __webpack_require__("./node_modules/@vx/bounds/build/enhancers/withBoundingRects.js");

Object.defineProperty(exports, 'withBoundingRects', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_withBoundingRects).default;
  }
});
Object.defineProperty(exports, 'withBoundingRectsProps', {
  enumerable: true,
  get: function get() {
    return _withBoundingRects.withBoundingRectsProps;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/@vx/curve/build/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _d3Shape = __webpack_require__("./node_modules/d3-shape/index.js");

Object.defineProperty(exports, 'curveBasis', {
  enumerable: true,
  get: function get() {
    return _d3Shape.curveBasis;
  }
});
Object.defineProperty(exports, 'curveBasisClosed', {
  enumerable: true,
  get: function get() {
    return _d3Shape.curveBasisClosed;
  }
});
Object.defineProperty(exports, 'curveBasisOpen', {
  enumerable: true,
  get: function get() {
    return _d3Shape.curveBasisOpen;
  }
});
Object.defineProperty(exports, 'curveStep', {
  enumerable: true,
  get: function get() {
    return _d3Shape.curveStep;
  }
});
Object.defineProperty(exports, 'curveStepAfter', {
  enumerable: true,
  get: function get() {
    return _d3Shape.curveStepAfter;
  }
});
Object.defineProperty(exports, 'curveStepBefore', {
  enumerable: true,
  get: function get() {
    return _d3Shape.curveStepBefore;
  }
});
Object.defineProperty(exports, 'curveBundle', {
  enumerable: true,
  get: function get() {
    return _d3Shape.curveBundle;
  }
});
Object.defineProperty(exports, 'curveLinear', {
  enumerable: true,
  get: function get() {
    return _d3Shape.curveLinear;
  }
});
Object.defineProperty(exports, 'curveLinearClosed', {
  enumerable: true,
  get: function get() {
    return _d3Shape.curveLinearClosed;
  }
});
Object.defineProperty(exports, 'curveCardinal', {
  enumerable: true,
  get: function get() {
    return _d3Shape.curveCardinal;
  }
});
Object.defineProperty(exports, 'curveCardinalClosed', {
  enumerable: true,
  get: function get() {
    return _d3Shape.curveCardinalClosed;
  }
});
Object.defineProperty(exports, 'curveCardinalOpen', {
  enumerable: true,
  get: function get() {
    return _d3Shape.curveCardinalOpen;
  }
});
Object.defineProperty(exports, 'curveCatmullRom', {
  enumerable: true,
  get: function get() {
    return _d3Shape.curveCatmullRom;
  }
});
Object.defineProperty(exports, 'curveCatmullRomClosed', {
  enumerable: true,
  get: function get() {
    return _d3Shape.curveCatmullRomClosed;
  }
});
Object.defineProperty(exports, 'curveCatmullRomOpen', {
  enumerable: true,
  get: function get() {
    return _d3Shape.curveCatmullRomOpen;
  }
});
Object.defineProperty(exports, 'curveMonotoneX', {
  enumerable: true,
  get: function get() {
    return _d3Shape.curveMonotoneX;
  }
});
Object.defineProperty(exports, 'curveMonotoneY', {
  enumerable: true,
  get: function get() {
    return _d3Shape.curveMonotoneY;
  }
});
Object.defineProperty(exports, 'curveNatural', {
  enumerable: true,
  get: function get() {
    return _d3Shape.curveNatural;
  }
});

/***/ }),

/***/ "./node_modules/@vx/event/build/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _localPoint = __webpack_require__("./node_modules/@vx/event/build/localPoint.js");

Object.defineProperty(exports, 'localPoint', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_localPoint).default;
  }
});

var _touchPoint = __webpack_require__("./node_modules/@vx/event/build/touchPoint.js");

Object.defineProperty(exports, 'touchPoint', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_touchPoint).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/@vx/event/build/localPoint.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = localPoint;

var _point = __webpack_require__("./node_modules/@vx/point/build/index.js");

function localPoint(node, event) {
  // called with no args
  if (!node) return;

  // called with localPoint(event)
  if (node.target) {
    event = node;

    // set node to targets owner svg
    node = event.target.ownerSVGElement;

    // find the outermost svg
    while (node.ownerSVGElement) {
      node = node.ownerSVGElement;
    }
  }

  // default to mouse event
  var _event = event,
      clientX = _event.clientX,
      clientY = _event.clientY;

  // support touch event

  if (event.changedTouches) {
    clientX = event.changedTouches[0].clientX;
    clientY = event.changedTouches[0].clientY;
  }

  // calculate coordinates from svg
  if (node.createSVGPoint) {
    var point = node.createSVGPoint();
    point.x = clientX;
    point.y = clientY;
    point = point.matrixTransform(node.getScreenCTM().inverse());
    return new _point.Point({
      x: point.x,
      y: point.y
    });
  }

  // fallback to calculating position from non-svg dom node
  var rect = node.getBoundingClientRect();
  return new _point.Point({
    x: clientX - rect.left - node.clientLeft,
    y: clientY - rect.top - node.clientTop
  });
}

/***/ }),

/***/ "./node_modules/@vx/event/build/touchPoint.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = touchPoint;

var _point = __webpack_require__("./node_modules/@vx/point/build/index.js");

function touchPoint(node, event) {
  if (!node) return;
  var svg = node.ownerSVGElement || node;
  if (svg.createSVGPoint) {
    var point = svg.createSVGPoint();
    point.x = event.changedTouches[0].clientX;
    point.y = event.changedTouches[0].clientY;
    point = point.matrixTransform(node.getScreenCTM().inverse());
    return new _point.Point({
      x: point.x,
      y: point.y
    });
  }
  var rect = node.getBoundingClientRect();
  return new _point.Point({
    x: event.changedTouches[0].clientX - rect.left - node.clientLeft,
    y: event.changedTouches[0].clientY - rect.top - node.clientTop
  });
}

/***/ }),

/***/ "./node_modules/@vx/gradient/build/gradients/DarkgreenGreen.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _LinearGradient = __webpack_require__("./node_modules/@vx/gradient/build/gradients/LinearGradient.js");

var _LinearGradient2 = _interopRequireDefault(_LinearGradient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(_LinearGradient2.default, _extends({ from: '#184E86', to: '#57CA85' }, props));
};

/***/ }),

/***/ "./node_modules/@vx/gradient/build/gradients/LightgreenGreen.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _LinearGradient = __webpack_require__("./node_modules/@vx/gradient/build/gradients/LinearGradient.js");

var _LinearGradient2 = _interopRequireDefault(_LinearGradient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(_LinearGradient2.default, _extends({ from: '#42E695', to: '#3BB2B8' }, props));
};

/***/ }),

/***/ "./node_modules/@vx/gradient/build/gradients/LinearGradient.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = LinearGradient;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

LinearGradient.propTypes = {
  id: _propTypes2.default.string.isRequired,
  from: _propTypes2.default.string,
  to: _propTypes2.default.string,
  x1: _propTypes2.default.string,
  y1: _propTypes2.default.string,
  y2: _propTypes2.default.string,
  fromOffset: _propTypes2.default.string,
  fromOpacity: _propTypes2.default.number,
  toOffset: _propTypes2.default.string,
  toOpacity: _propTypes2.default.number,
  rotate: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  transform: _propTypes2.default.string
};

function LinearGradient(_ref) {
  var children = _ref.children,
      id = _ref.id,
      from = _ref.from,
      to = _ref.to,
      x1 = _ref.x1,
      y1 = _ref.y1,
      x2 = _ref.x2,
      y2 = _ref.y2,
      _ref$fromOffset = _ref.fromOffset,
      fromOffset = _ref$fromOffset === undefined ? '0%' : _ref$fromOffset,
      _ref$fromOpacity = _ref.fromOpacity,
      fromOpacity = _ref$fromOpacity === undefined ? 1 : _ref$fromOpacity,
      _ref$toOffset = _ref.toOffset,
      toOffset = _ref$toOffset === undefined ? '100%' : _ref$toOffset,
      _ref$toOpacity = _ref.toOpacity,
      toOpacity = _ref$toOpacity === undefined ? 1 : _ref$toOpacity,
      rotate = _ref.rotate,
      transform = _ref.transform,
      _ref$vertical = _ref.vertical,
      vertical = _ref$vertical === undefined ? true : _ref$vertical,
      restProps = _objectWithoutProperties(_ref, ['children', 'id', 'from', 'to', 'x1', 'y1', 'x2', 'y2', 'fromOffset', 'fromOpacity', 'toOffset', 'toOpacity', 'rotate', 'transform', 'vertical']);

  if (vertical && !x1 && !x2 && !y1 && !y2) {
    x1 = '0';
    x2 = '0';
    y1 = '0';
    y2 = '1';
  }
  return _react2.default.createElement(
    'defs',
    null,
    _react2.default.createElement(
      'linearGradient',
      _extends({
        id: id,
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2,
        gradientTransform: rotate ? 'rotate(' + rotate + ')' : transform
      }, restProps),
      !!children && children,
      !children && _react2.default.createElement('stop', { offset: fromOffset, stopColor: from, stopOpacity: fromOpacity }),
      !children && _react2.default.createElement('stop', { offset: toOffset, stopColor: to, stopOpacity: toOpacity })
    )
  );
}

/***/ }),

/***/ "./node_modules/@vx/gradient/build/gradients/OrangeRed.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _LinearGradient = __webpack_require__("./node_modules/@vx/gradient/build/gradients/LinearGradient.js");

var _LinearGradient2 = _interopRequireDefault(_LinearGradient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(_LinearGradient2.default, _extends({ from: '#FCE38A', to: '#F38181' }, props));
};

/***/ }),

/***/ "./node_modules/@vx/gradient/build/gradients/PinkBlue.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _LinearGradient = __webpack_require__("./node_modules/@vx/gradient/build/gradients/LinearGradient.js");

var _LinearGradient2 = _interopRequireDefault(_LinearGradient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(_LinearGradient2.default, _extends({ from: '#F02FC2', to: '#6094EA' }, props));
};

/***/ }),

/***/ "./node_modules/@vx/gradient/build/gradients/PinkRed.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _LinearGradient = __webpack_require__("./node_modules/@vx/gradient/build/gradients/LinearGradient.js");

var _LinearGradient2 = _interopRequireDefault(_LinearGradient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(_LinearGradient2.default, _extends({ from: '#F54EA2', to: '#FF7676' }, props));
};

/***/ }),

/***/ "./node_modules/@vx/gradient/build/gradients/PurpleOrange.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _LinearGradient = __webpack_require__("./node_modules/@vx/gradient/build/gradients/LinearGradient.js");

var _LinearGradient2 = _interopRequireDefault(_LinearGradient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(_LinearGradient2.default, _extends({ from: '#7117EA', to: '#EA6060' }, props));
};

/***/ }),

/***/ "./node_modules/@vx/gradient/build/gradients/PurpleRed.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _LinearGradient = __webpack_require__("./node_modules/@vx/gradient/build/gradients/LinearGradient.js");

var _LinearGradient2 = _interopRequireDefault(_LinearGradient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(_LinearGradient2.default, _extends({ from: '#622774', to: '#C53364' }, props));
};

/***/ }),

/***/ "./node_modules/@vx/gradient/build/gradients/PurpleTeal.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _LinearGradient = __webpack_require__("./node_modules/@vx/gradient/build/gradients/LinearGradient.js");

var _LinearGradient2 = _interopRequireDefault(_LinearGradient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(_LinearGradient2.default, _extends({ from: '#5B247A', to: '#1BCEDF' }, props));
};

/***/ }),

/***/ "./node_modules/@vx/gradient/build/gradients/RadialGradient.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = RadialGradient;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

RadialGradient.propTypes = {
  id: _propTypes2.default.string.isRequired,
  from: _propTypes2.default.string,
  to: _propTypes2.default.string,
  fromOffset: _propTypes2.default.string,
  fromOpacity: _propTypes2.default.number,
  toOffset: _propTypes2.default.string,
  toOpacity: _propTypes2.default.number,
  rotate: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  transform: _propTypes2.default.string
};

function RadialGradient(_ref) {
  var children = _ref.children,
      id = _ref.id,
      from = _ref.from,
      to = _ref.to,
      _ref$fromOffset = _ref.fromOffset,
      fromOffset = _ref$fromOffset === undefined ? '0%' : _ref$fromOffset,
      _ref$fromOpacity = _ref.fromOpacity,
      fromOpacity = _ref$fromOpacity === undefined ? 1 : _ref$fromOpacity,
      _ref$toOffset = _ref.toOffset,
      toOffset = _ref$toOffset === undefined ? '100%' : _ref$toOffset,
      _ref$toOpacity = _ref.toOpacity,
      toOpacity = _ref$toOpacity === undefined ? 1 : _ref$toOpacity,
      rotate = _ref.rotate,
      transform = _ref.transform,
      restProps = _objectWithoutProperties(_ref, ['children', 'id', 'from', 'to', 'fromOffset', 'fromOpacity', 'toOffset', 'toOpacity', 'rotate', 'transform']);

  return _react2.default.createElement(
    'defs',
    null,
    _react2.default.createElement(
      'radialGradient',
      _extends({
        id: id,
        gradientTransform: rotate ? 'rotate(' + rotate + ')' : transform
      }, restProps),
      !!children && children,
      !children && _react2.default.createElement('stop', { offset: fromOffset, stopColor: from, stopOpacity: fromOpacity }),
      !children && _react2.default.createElement('stop', { offset: toOffset, stopColor: to, stopOpacity: toOpacity })
    )
  );
}

/***/ }),

/***/ "./node_modules/@vx/gradient/build/gradients/SteelPurple.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _LinearGradient = __webpack_require__("./node_modules/@vx/gradient/build/gradients/LinearGradient.js");

var _LinearGradient2 = _interopRequireDefault(_LinearGradient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(_LinearGradient2.default, _extends({ from: '#65799B', to: '#5E2563' }, props));
};

/***/ }),

/***/ "./node_modules/@vx/gradient/build/gradients/TealBlue.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _LinearGradient = __webpack_require__("./node_modules/@vx/gradient/build/gradients/LinearGradient.js");

var _LinearGradient2 = _interopRequireDefault(_LinearGradient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(_LinearGradient2.default, _extends({ from: '#17EAD9', to: '#6078EA' }, props));
};

/***/ }),

/***/ "./node_modules/@vx/gradient/build/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _LinearGradient = __webpack_require__("./node_modules/@vx/gradient/build/gradients/LinearGradient.js");

Object.defineProperty(exports, 'LinearGradient', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LinearGradient).default;
  }
});

var _RadialGradient = __webpack_require__("./node_modules/@vx/gradient/build/gradients/RadialGradient.js");

Object.defineProperty(exports, 'RadialGradient', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_RadialGradient).default;
  }
});

var _DarkgreenGreen = __webpack_require__("./node_modules/@vx/gradient/build/gradients/DarkgreenGreen.js");

Object.defineProperty(exports, 'GradientDarkgreenGreen', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DarkgreenGreen).default;
  }
});

var _LightgreenGreen = __webpack_require__("./node_modules/@vx/gradient/build/gradients/LightgreenGreen.js");

Object.defineProperty(exports, 'GradientLightgreenGreen', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LightgreenGreen).default;
  }
});

var _OrangeRed = __webpack_require__("./node_modules/@vx/gradient/build/gradients/OrangeRed.js");

Object.defineProperty(exports, 'GradientOrangeRed', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_OrangeRed).default;
  }
});

var _PinkBlue = __webpack_require__("./node_modules/@vx/gradient/build/gradients/PinkBlue.js");

Object.defineProperty(exports, 'GradientPinkBlue', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_PinkBlue).default;
  }
});

var _PinkRed = __webpack_require__("./node_modules/@vx/gradient/build/gradients/PinkRed.js");

Object.defineProperty(exports, 'GradientPinkRed', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_PinkRed).default;
  }
});

var _PurpleOrange = __webpack_require__("./node_modules/@vx/gradient/build/gradients/PurpleOrange.js");

Object.defineProperty(exports, 'GradientPurpleOrange', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_PurpleOrange).default;
  }
});

var _PurpleRed = __webpack_require__("./node_modules/@vx/gradient/build/gradients/PurpleRed.js");

Object.defineProperty(exports, 'GradientPurpleRed', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_PurpleRed).default;
  }
});

var _PurpleTeal = __webpack_require__("./node_modules/@vx/gradient/build/gradients/PurpleTeal.js");

Object.defineProperty(exports, 'GradientPurpleTeal', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_PurpleTeal).default;
  }
});

var _SteelPurple = __webpack_require__("./node_modules/@vx/gradient/build/gradients/SteelPurple.js");

Object.defineProperty(exports, 'GradientSteelPurple', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SteelPurple).default;
  }
});

var _TealBlue = __webpack_require__("./node_modules/@vx/gradient/build/gradients/TealBlue.js");

Object.defineProperty(exports, 'GradientTealBlue', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TealBlue).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/@vx/grid/build/grids/Columns.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Columns;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _shape = __webpack_require__("./node_modules/@vx/shape/build/index.js");

var _group = __webpack_require__("./node_modules/@vx/group/build/index.js");

var _point = __webpack_require__("./node_modules/@vx/point/build/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Columns(_ref) {
  var _ref$top = _ref.top,
      top = _ref$top === undefined ? 0 : _ref$top,
      _ref$left = _ref.left,
      left = _ref$left === undefined ? 0 : _ref$left,
      scale = _ref.scale,
      height = _ref.height,
      _ref$stroke = _ref.stroke,
      stroke = _ref$stroke === undefined ? '#eaf0f6' : _ref$stroke,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === undefined ? 1 : _ref$strokeWidth,
      strokeDasharray = _ref.strokeDasharray,
      className = _ref.className,
      _ref$numTicks = _ref.numTicks,
      numTicks = _ref$numTicks === undefined ? 10 : _ref$numTicks,
      lineStyle = _ref.lineStyle,
      offset = _ref.offset,
      restProps = _objectWithoutProperties(_ref, ['top', 'left', 'scale', 'height', 'stroke', 'strokeWidth', 'strokeDasharray', 'className', 'numTicks', 'lineStyle', 'offset']);

  var ticks = scale.ticks ? scale.ticks(numTicks) : scale.domain();
  return _react2.default.createElement(
    _group.Group,
    { className: (0, _classnames2.default)('vx-columns', className), top: top, left: left },
    ticks.map(function (d, i) {
      var x = offset ? scale(d) + offset : scale(d);
      var fromPoint = new _point.Point({
        x: x,
        y: 0
      });
      var toPoint = new _point.Point({
        x: x,
        y: height
      });
      return _react2.default.createElement(_shape.Line, _extends({
        key: 'column-line-' + d + '-' + i,
        from: fromPoint,
        to: toPoint,
        stroke: stroke,
        strokeWidth: strokeWidth,
        strokeDasharray: strokeDasharray,
        style: lineStyle
      }, restProps));
    })
  );
}

/***/ }),

/***/ "./node_modules/@vx/grid/build/grids/Grid.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Grid;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _group = __webpack_require__("./node_modules/@vx/group/build/index.js");

var _Rows = __webpack_require__("./node_modules/@vx/grid/build/grids/Rows.js");

var _Rows2 = _interopRequireDefault(_Rows);

var _Columns = __webpack_require__("./node_modules/@vx/grid/build/grids/Columns.js");

var _Columns2 = _interopRequireDefault(_Columns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Grid(_ref) {
  var top = _ref.top,
      left = _ref.left,
      xScale = _ref.xScale,
      yScale = _ref.yScale,
      width = _ref.width,
      height = _ref.height,
      className = _ref.className,
      stroke = _ref.stroke,
      strokeWidth = _ref.strokeWidth,
      strokeDasharray = _ref.strokeDasharray,
      numTicksRows = _ref.numTicksRows,
      numTicksColumns = _ref.numTicksColumns,
      rowLineStyle = _ref.rowLineStyle,
      columnLineStyle = _ref.columnLineStyle,
      xOffset = _ref.xOffset,
      yOffset = _ref.yOffset,
      restProps = _objectWithoutProperties(_ref, ['top', 'left', 'xScale', 'yScale', 'width', 'height', 'className', 'stroke', 'strokeWidth', 'strokeDasharray', 'numTicksRows', 'numTicksColumns', 'rowLineStyle', 'columnLineStyle', 'xOffset', 'yOffset']);

  return _react2.default.createElement(
    _group.Group,
    { className: (0, _classnames2.default)('vx-grid', className), top: top, left: left },
    _react2.default.createElement(_Rows2.default, _extends({
      className: className,
      scale: yScale,
      width: width,
      stroke: stroke,
      strokeWidth: strokeWidth,
      strokeDasharray: strokeDasharray,
      numTicks: numTicksRows,
      style: rowLineStyle,
      offset: yOffset
    }, restProps)),
    _react2.default.createElement(_Columns2.default, _extends({
      className: className,
      scale: xScale,
      height: height,
      stroke: stroke,
      strokeWidth: strokeWidth,
      strokeDasharray: strokeDasharray,
      numTicks: numTicksColumns,
      style: columnLineStyle,
      offset: xOffset
    }, restProps))
  );
}

/***/ }),

/***/ "./node_modules/@vx/grid/build/grids/Rows.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Rows;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _shape = __webpack_require__("./node_modules/@vx/shape/build/index.js");

var _group = __webpack_require__("./node_modules/@vx/group/build/index.js");

var _point = __webpack_require__("./node_modules/@vx/point/build/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Rows(_ref) {
  var _ref$top = _ref.top,
      top = _ref$top === undefined ? 0 : _ref$top,
      _ref$left = _ref.left,
      left = _ref$left === undefined ? 0 : _ref$left,
      scale = _ref.scale,
      width = _ref.width,
      _ref$stroke = _ref.stroke,
      stroke = _ref$stroke === undefined ? '#eaf0f6' : _ref$stroke,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === undefined ? 1 : _ref$strokeWidth,
      strokeDasharray = _ref.strokeDasharray,
      className = _ref.className,
      _ref$numTicks = _ref.numTicks,
      numTicks = _ref$numTicks === undefined ? 10 : _ref$numTicks,
      lineStyle = _ref.lineStyle,
      offset = _ref.offset,
      restProps = _objectWithoutProperties(_ref, ['top', 'left', 'scale', 'width', 'stroke', 'strokeWidth', 'strokeDasharray', 'className', 'numTicks', 'lineStyle', 'offset']);

  var ticks = scale.ticks ? scale.ticks(numTicks) : scale.domain();
  return _react2.default.createElement(
    _group.Group,
    { className: (0, _classnames2.default)('vx-rows', className), top: top, left: left },
    ticks.map(function (d, i) {
      var y = offset ? scale(d) + offset : scale(d);
      var fromPoint = new _point.Point({
        x: 0,
        y: y
      });
      var toPoint = new _point.Point({
        x: width,
        y: y
      });
      return _react2.default.createElement(_shape.Line, _extends({
        key: 'row-line-' + d + '-' + i,
        from: fromPoint,
        to: toPoint,
        stroke: stroke,
        strokeWidth: strokeWidth,
        strokeDasharray: strokeDasharray,
        style: lineStyle
      }, restProps));
    })
  );
}

/***/ }),

/***/ "./node_modules/@vx/grid/build/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Rows = __webpack_require__("./node_modules/@vx/grid/build/grids/Rows.js");

Object.defineProperty(exports, 'GridRows', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Rows).default;
  }
});

var _Columns = __webpack_require__("./node_modules/@vx/grid/build/grids/Columns.js");

Object.defineProperty(exports, 'GridColumns', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Columns).default;
  }
});

var _Grid = __webpack_require__("./node_modules/@vx/grid/build/grids/Grid.js");

Object.defineProperty(exports, 'Grid', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Grid).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/@vx/group/build/Group.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Group;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Group(_ref) {
  var _ref$top = _ref.top,
      top = _ref$top === undefined ? 0 : _ref$top,
      _ref$left = _ref.left,
      left = _ref$left === undefined ? 0 : _ref$left,
      transform = _ref.transform,
      className = _ref.className,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ['top', 'left', 'transform', 'className', 'children']);

  return _react2.default.createElement(
    'g',
    _extends({
      className: (0, _classnames2.default)('cx-group', className),
      transform: transform || 'translate(' + left + ', ' + top + ')'
    }, restProps),
    children
  );
}

/***/ }),

/***/ "./node_modules/@vx/group/build/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Group = __webpack_require__("./node_modules/@vx/group/build/Group.js");

Object.defineProperty(exports, 'Group', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Group).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/@vx/mock-data/build/generators/genBin.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = genBin;
var defaultCount = function defaultCount(i, n) {
  return Math.random() * (25 * (n - i));
};

var defaultBin = function defaultBin(i, n) {
  return i * 150;
};

function genBin(n) {
  var bin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultBin;
  var count = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultCount;

  return Array(n).fill(1).reduce(function (data, d, i) {
    return data.concat([{
      bin: bin(i, n),
      count: count(i, n)
    }]);
  }, []);
}

/***/ }),

/***/ "./node_modules/@vx/mock-data/build/generators/genBins.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = genBins;

var _genBin = __webpack_require__("./node_modules/@vx/mock-data/build/generators/genBin.js");

var _genBin2 = _interopRequireDefault(_genBin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function genBins(x, y, bin, count) {
  return Array(x).fill(1).reduce(function (data, d, i) {
    return data.concat([{
      bin: i,
      bins: (0, _genBin2.default)(y, bin, count)
    }]);
  }, []);
}

/***/ }),

/***/ "./node_modules/@vx/mock-data/build/generators/genDateValue.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = genDateValue;
function genDateValue(n) {
  return Array(n).fill(1).map(function (d, i) {
    return {
      date: new Date(Date.now() - i * 3600000),
      value: Math.max(250, Math.random() * 3000 | 0)
    };
  });
}

/***/ }),

/***/ "./node_modules/@vx/mock-data/build/generators/genRandomNormalPoints.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.genPointsRange = genPointsRange;
exports.default = genPoints;

var _d3Random = __webpack_require__("./node_modules/d3-random/index.js");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var random = (0, _d3Random.randomNormal)(0, 0.2);
var sqrt3 = Math.sqrt(3);

function range(n) {
  return Array(n).fill(1);
}

function genPointsRange(n, _ref) {
  var _ref2 = _slicedToArray(_ref, 3),
      offsetX = _ref2[0],
      offsetY = _ref2[1],
      index = _ref2[2];

  return range(n).map(function () {
    return [random() + offsetX, random() + offsetY, index];
  });
}

function genPoints() {
  var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 300;

  return [].concat(_toConsumableArray(genPointsRange(count, [sqrt3, 1, 0])), _toConsumableArray(genPointsRange(count, [-sqrt3, 1, 1])), _toConsumableArray(genPointsRange(count, [0, -1, 2])));
}

/***/ }),

/***/ "./node_modules/@vx/mock-data/build/generators/genStats.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = genStats;

var _d3Random = __webpack_require__("./node_modules/d3-random/index.js");

var random = (0, _d3Random.randomNormal)(4, 3);
var randomOffset = function randomOffset() {
  return Math.random() * 10;
};
var sampleSize = 1000;

function genStats(number) {
  var data = [];
  var i = void 0;

  var _loop = function _loop() {
    var points = [];
    var j = void 0;
    var offset = randomOffset();
    for (j = 0; j < sampleSize; j += 1) {
      points.push(offset + random());
    }

    points.sort(function (a, b) {
      return a - b;
    });

    var firstQuartile = points[Math.round(sampleSize / 4)];
    var thirdQuartile = points[Math.round(3 * sampleSize / 4)];
    var IQR = thirdQuartile - firstQuartile;

    var min = firstQuartile - 1.5 * IQR;
    var max = thirdQuartile + 1.5 * IQR;

    var outliers = points.filter(function (p) {
      return p < min || p > max;
    });
    var binWidth = 2 * IQR * Math.pow(sampleSize - outliers.length, -1 / 3);
    var binNum = Math.round((max - min) / binWidth);
    var actualBinWidth = (max - min) / binNum;

    var bins = Array(binNum + 2).fill(0);
    var values = Array(binNum + 2).fill(min);

    for (var _i = 1; _i <= binNum; _i += 1) {
      values[_i] += actualBinWidth * (_i - 0.5);
    }

    values[values.length - 1] = max;

    points.filter(function (p) {
      return p >= min && p <= max;
    }).forEach(function (p) {
      bins[Math.floor((p - min) / actualBinWidth) + 1] += 1;
    });

    var binData = values.map(function (v, i) {
      return {
        value: v,
        count: bins[i]
      };
    });

    var boxPlot = {
      x: 'Statistics ' + i,
      min: min,
      firstQuartile: firstQuartile,
      median: points[Math.round(sampleSize / 2)],
      thirdQuartile: thirdQuartile,
      max: max,
      outliers: outliers
    };

    data.push({
      boxPlot: boxPlot,
      binData: binData
    });
  };

  for (i = 0; i < number; i += 1) {
    _loop();
  }
  return data;
}

/***/ }),

/***/ "./node_modules/@vx/mock-data/build/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _genDateValue = __webpack_require__("./node_modules/@vx/mock-data/build/generators/genDateValue.js");

Object.defineProperty(exports, 'genDateValue', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_genDateValue).default;
  }
});

var _genRandomNormalPoints = __webpack_require__("./node_modules/@vx/mock-data/build/generators/genRandomNormalPoints.js");

Object.defineProperty(exports, 'genRandomNormalPoints', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_genRandomNormalPoints).default;
  }
});

var _genBin = __webpack_require__("./node_modules/@vx/mock-data/build/generators/genBin.js");

Object.defineProperty(exports, 'genBin', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_genBin).default;
  }
});

var _genBins = __webpack_require__("./node_modules/@vx/mock-data/build/generators/genBins.js");

Object.defineProperty(exports, 'genBins', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_genBins).default;
  }
});

var _genStats = __webpack_require__("./node_modules/@vx/mock-data/build/generators/genStats.js");

Object.defineProperty(exports, 'genStats', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_genStats).default;
  }
});

var _appleStock = __webpack_require__("./node_modules/@vx/mock-data/build/mocks/appleStock.js");

Object.defineProperty(exports, 'appleStock', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_appleStock).default;
  }
});

var _letterFrequency = __webpack_require__("./node_modules/@vx/mock-data/build/mocks/letterFrequency.js");

Object.defineProperty(exports, 'letterFrequency', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_letterFrequency).default;
  }
});

var _browserUsage = __webpack_require__("./node_modules/@vx/mock-data/build/mocks/browserUsage.js");

Object.defineProperty(exports, 'browserUsage', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_browserUsage).default;
  }
});

var _groupDateValue = __webpack_require__("./node_modules/@vx/mock-data/build/mocks/groupDateValue.js");

Object.defineProperty(exports, 'groupDateValue', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_groupDateValue).default;
  }
});

var _cityTemperature = __webpack_require__("./node_modules/@vx/mock-data/build/mocks/cityTemperature.js");

Object.defineProperty(exports, 'cityTemperature', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_cityTemperature).default;
  }
});

var _lesMiserables = __webpack_require__("./node_modules/@vx/mock-data/build/mocks/lesMiserables.js");

Object.defineProperty(exports, 'lesMiserables', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_lesMiserables).default;
  }
});

var _exoplanets = __webpack_require__("./node_modules/@vx/mock-data/build/mocks/exoplanets.js");

Object.defineProperty(exports, 'exoplanets', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_exoplanets).default;
  }
});

var _planets = __webpack_require__("./node_modules/@vx/mock-data/build/mocks/planets.js");

Object.defineProperty(exports, 'planets', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_planets).default;
  }
});

var _shakespeare = __webpack_require__("./node_modules/@vx/mock-data/build/mocks/shakespeare.js");

Object.defineProperty(exports, 'shakespeare', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_shakespeare).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/@vx/mock-data/build/mocks/appleStock.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [{ date: '2007-04-24T07:00:00.000Z', close: 93.24 }, { date: '2007-04-25T07:00:00.000Z', close: 95.35 }, { date: '2007-04-26T07:00:00.000Z', close: 98.84 }, { date: '2007-04-27T07:00:00.000Z', close: 99.92 }, { date: '2007-04-30T07:00:00.000Z', close: 99.8 }, { date: '2007-05-01T07:00:00.000Z', close: 99.47 }, { date: '2007-05-02T07:00:00.000Z', close: 100.39 }, { date: '2007-05-03T07:00:00.000Z', close: 100.4 }, { date: '2007-05-04T07:00:00.000Z', close: 100.81 }, { date: '2007-05-07T07:00:00.000Z', close: 103.92 }, { date: '2007-05-08T07:00:00.000Z', close: 105.06 }, { date: '2007-05-09T07:00:00.000Z', close: 106.88 }, { date: '2007-05-10T07:00:00.000Z', close: 107.34 }, { date: '2007-05-11T07:00:00.000Z', close: 108.74 }, { date: '2007-05-14T07:00:00.000Z', close: 109.36 }, { date: '2007-05-15T07:00:00.000Z', close: 107.52 }, { date: '2007-05-16T07:00:00.000Z', close: 107.34 }, { date: '2007-05-17T07:00:00.000Z', close: 109.44 }, { date: '2007-05-18T07:00:00.000Z', close: 110.02 }, { date: '2007-05-21T07:00:00.000Z', close: 111.98 }, { date: '2007-05-22T07:00:00.000Z', close: 113.54 }, { date: '2007-05-23T07:00:00.000Z', close: 112.89 }, { date: '2007-05-24T07:00:00.000Z', close: 110.69 }, { date: '2007-05-25T07:00:00.000Z', close: 113.62 }, { date: '2007-05-29T07:00:00.000Z', close: 114.35 }, { date: '2007-05-30T07:00:00.000Z', close: 118.77 }, { date: '2007-05-31T07:00:00.000Z', close: 121.19 }, { date: '2007-06-01T07:00:00.000Z', close: 118.4 }, { date: '2007-06-04T07:00:00.000Z', close: 121.33 }, { date: '2007-06-05T07:00:00.000Z', close: 122.67 }, { date: '2007-06-06T07:00:00.000Z', close: 123.64 }, { date: '2007-06-07T07:00:00.000Z', close: 124.07 }, { date: '2007-06-08T07:00:00.000Z', close: 124.49 }, { date: '2007-06-11T07:00:00.000Z', close: 120.19 }, { date: '2007-06-12T07:00:00.000Z', close: 120.38 }, { date: '2007-06-13T07:00:00.000Z', close: 117.5 }, { date: '2007-06-14T07:00:00.000Z', close: 118.75 }, { date: '2007-06-15T07:00:00.000Z', close: 120.5 }, { date: '2007-06-18T07:00:00.000Z', close: 125.09 }, { date: '2007-06-19T07:00:00.000Z', close: 123.66 }, { date: '2007-06-20T07:00:00.000Z', close: 121.55 }, { date: '2007-06-21T07:00:00.000Z', close: 123.9 }, { date: '2007-06-22T07:00:00.000Z', close: 123 }, { date: '2007-06-25T07:00:00.000Z', close: 122.34 }, { date: '2007-06-26T07:00:00.000Z', close: 119.65 }, { date: '2007-06-27T07:00:00.000Z', close: 121.89 }, { date: '2007-06-28T07:00:00.000Z', close: 120.56 }, { date: '2007-06-29T07:00:00.000Z', close: 122.04 }, { date: '2007-07-02T07:00:00.000Z', close: 121.26 }, { date: '2007-07-03T07:00:00.000Z', close: 127.17 }, { date: '2007-07-05T07:00:00.000Z', close: 132.75 }, { date: '2007-07-06T07:00:00.000Z', close: 132.3 }, { date: '2007-07-09T07:00:00.000Z', close: 130.33 }, { date: '2007-07-10T07:00:00.000Z', close: 132.35 }, { date: '2007-07-11T07:00:00.000Z', close: 132.39 }, { date: '2007-07-12T07:00:00.000Z', close: 134.07 }, { date: '2007-07-13T07:00:00.000Z', close: 137.73 }, { date: '2007-07-16T07:00:00.000Z', close: 138.1 }, { date: '2007-07-17T07:00:00.000Z', close: 138.91 }, { date: '2007-07-18T07:00:00.000Z', close: 138.12 }, { date: '2007-07-19T07:00:00.000Z', close: 140 }, { date: '2007-07-20T07:00:00.000Z', close: 143.75 }, { date: '2007-07-23T07:00:00.000Z', close: 143.7 }, { date: '2007-07-24T07:00:00.000Z', close: 134.89 }, { date: '2007-07-25T07:00:00.000Z', close: 137.26 }, { date: '2007-07-26T07:00:00.000Z', close: 146 }, { date: '2007-07-27T07:00:00.000Z', close: 143.85 }, { date: '2007-07-30T07:00:00.000Z', close: 141.43 }, { date: '2007-07-31T07:00:00.000Z', close: 131.76 }, { date: '2007-08-01T07:00:00.000Z', close: 135 }, { date: '2007-08-02T07:00:00.000Z', close: 136.49 }, { date: '2007-08-03T07:00:00.000Z', close: 131.85 }, { date: '2007-08-06T07:00:00.000Z', close: 135.25 }, { date: '2007-08-07T07:00:00.000Z', close: 135.03 }, { date: '2007-08-08T07:00:00.000Z', close: 134.01 }, { date: '2007-08-09T07:00:00.000Z', close: 126.39 }, { date: '2007-08-10T07:00:00.000Z', close: 125 }, { date: '2007-08-13T07:00:00.000Z', close: 127.79 }, { date: '2007-08-14T07:00:00.000Z', close: 124.03 }, { date: '2007-08-15T07:00:00.000Z', close: 119.9 }, { date: '2007-08-16T07:00:00.000Z', close: 117.05 }, { date: '2007-08-17T07:00:00.000Z', close: 122.06 }, { date: '2007-08-20T07:00:00.000Z', close: 122.22 }, { date: '2007-08-21T07:00:00.000Z', close: 127.57 }, { date: '2007-08-22T07:00:00.000Z', close: 132.51 }, { date: '2007-08-23T07:00:00.000Z', close: 131.07 }, { date: '2007-08-24T07:00:00.000Z', close: 135.3 }, { date: '2007-08-27T07:00:00.000Z', close: 132.25 }, { date: '2007-08-28T07:00:00.000Z', close: 126.82 }, { date: '2007-08-29T07:00:00.000Z', close: 134.08 }, { date: '2007-08-30T07:00:00.000Z', close: 136.25 }, { date: '2007-08-31T07:00:00.000Z', close: 138.48 }, { date: '2007-09-04T07:00:00.000Z', close: 144.16 }, { date: '2007-09-05T07:00:00.000Z', close: 136.76 }, { date: '2007-09-06T07:00:00.000Z', close: 135.01 }, { date: '2007-09-07T07:00:00.000Z', close: 131.77 }, { date: '2007-09-10T07:00:00.000Z', close: 136.71 }, { date: '2007-09-11T07:00:00.000Z', close: 135.49 }, { date: '2007-09-12T07:00:00.000Z', close: 136.85 }, { date: '2007-09-13T07:00:00.000Z', close: 137.2 }, { date: '2007-09-14T07:00:00.000Z', close: 138.81 }, { date: '2007-09-17T07:00:00.000Z', close: 138.41 }, { date: '2007-09-18T07:00:00.000Z', close: 140.92 }, { date: '2007-09-19T07:00:00.000Z', close: 140.77 }, { date: '2007-09-20T07:00:00.000Z', close: 140.31 }, { date: '2007-09-21T07:00:00.000Z', close: 144.15 }, { date: '2007-09-24T07:00:00.000Z', close: 148.28 }, { date: '2007-09-25T07:00:00.000Z', close: 153.18 }, { date: '2007-09-26T07:00:00.000Z', close: 152.77 }, { date: '2007-09-27T07:00:00.000Z', close: 154.5 }, { date: '2007-09-28T07:00:00.000Z', close: 153.47 }, { date: '2007-10-01T07:00:00.000Z', close: 156.34 }, { date: '2007-10-02T07:00:00.000Z', close: 158.45 }, { date: '2007-10-03T07:00:00.000Z', close: 157.92 }, { date: '2007-10-04T07:00:00.000Z', close: 156.24 }, { date: '2007-10-05T07:00:00.000Z', close: 161.45 }, { date: '2007-10-08T07:00:00.000Z', close: 167.91 }, { date: '2007-10-09T07:00:00.000Z', close: 167.86 }, { date: '2007-10-10T07:00:00.000Z', close: 166.79 }, { date: '2007-10-11T07:00:00.000Z', close: 162.23 }, { date: '2007-10-12T07:00:00.000Z', close: 167.25 }, { date: '2007-10-15T07:00:00.000Z', close: 166.98 }, { date: '2007-10-16T07:00:00.000Z', close: 169.58 }, { date: '2007-10-17T07:00:00.000Z', close: 172.75 }, { date: '2007-10-18T07:00:00.000Z', close: 173.5 }, { date: '2007-10-19T07:00:00.000Z', close: 170.42 }, { date: '2007-10-22T07:00:00.000Z', close: 174.36 }, { date: '2007-10-23T07:00:00.000Z', close: 186.16 }, { date: '2007-10-24T07:00:00.000Z', close: 185.93 }, { date: '2007-10-25T07:00:00.000Z', close: 182.78 }, { date: '2007-10-26T07:00:00.000Z', close: 184.7 }, { date: '2007-10-29T07:00:00.000Z', close: 185.09 }, { date: '2007-10-30T07:00:00.000Z', close: 187 }, { date: '2007-10-31T07:00:00.000Z', close: 189.95 }, { date: '2007-11-01T07:00:00.000Z', close: 187.44 }, { date: '2007-11-02T07:00:00.000Z', close: 187.87 }, { date: '2007-11-05T08:00:00.000Z', close: 186.18 }, { date: '2007-11-06T08:00:00.000Z', close: 191.79 }, { date: '2007-11-07T08:00:00.000Z', close: 186.3 }, { date: '2007-11-08T08:00:00.000Z', close: 175.47 }, { date: '2007-11-09T08:00:00.000Z', close: 165.37 }, { date: '2007-11-12T08:00:00.000Z', close: 153.76 }, { date: '2007-11-13T08:00:00.000Z', close: 169.96 }, { date: '2007-11-14T08:00:00.000Z', close: 166.11 }, { date: '2007-11-15T08:00:00.000Z', close: 164.3 }, { date: '2007-11-16T08:00:00.000Z', close: 166.39 }, { date: '2007-11-19T08:00:00.000Z', close: 163.95 }, { date: '2007-11-20T08:00:00.000Z', close: 168.85 }, { date: '2007-11-21T08:00:00.000Z', close: 168.46 }, { date: '2007-11-23T08:00:00.000Z', close: 171.54 }, { date: '2007-11-26T08:00:00.000Z', close: 172.54 }, { date: '2007-11-27T08:00:00.000Z', close: 174.81 }, { date: '2007-11-28T08:00:00.000Z', close: 180.22 }, { date: '2007-11-29T08:00:00.000Z', close: 184.29 }, { date: '2007-11-30T08:00:00.000Z', close: 182.22 }, { date: '2007-12-03T08:00:00.000Z', close: 178.86 }, { date: '2007-12-04T08:00:00.000Z', close: 179.81 }, { date: '2007-12-05T08:00:00.000Z', close: 185.5 }, { date: '2007-12-06T08:00:00.000Z', close: 189.95 }, { date: '2007-12-07T08:00:00.000Z', close: 194.3 }, { date: '2007-12-10T08:00:00.000Z', close: 194.21 }, { date: '2007-12-11T08:00:00.000Z', close: 188.54 }, { date: '2007-12-12T08:00:00.000Z', close: 190.86 }, { date: '2007-12-13T08:00:00.000Z', close: 191.83 }, { date: '2007-12-14T08:00:00.000Z', close: 190.39 }, { date: '2007-12-17T08:00:00.000Z', close: 184.4 }, { date: '2007-12-18T08:00:00.000Z', close: 182.98 }, { date: '2007-12-19T08:00:00.000Z', close: 183.12 }, { date: '2007-12-20T08:00:00.000Z', close: 187.21 }, { date: '2007-12-21T08:00:00.000Z', close: 193.91 }, { date: '2007-12-24T08:00:00.000Z', close: 198.8 }, { date: '2007-12-26T08:00:00.000Z', close: 198.95 }, { date: '2007-12-27T08:00:00.000Z', close: 198.57 }, { date: '2007-12-28T08:00:00.000Z', close: 199.83 }, { date: '2007-12-31T08:00:00.000Z', close: 198.08 }, { date: '2008-01-02T08:00:00.000Z', close: 194.84 }, { date: '2008-01-03T08:00:00.000Z', close: 194.93 }, { date: '2008-01-04T08:00:00.000Z', close: 180.05 }, { date: '2008-01-07T08:00:00.000Z', close: 177.64 }, { date: '2008-01-08T08:00:00.000Z', close: 171.25 }, { date: '2008-01-09T08:00:00.000Z', close: 179.4 }, { date: '2008-01-10T08:00:00.000Z', close: 178.02 }, { date: '2008-01-11T08:00:00.000Z', close: 172.69 }, { date: '2008-01-14T08:00:00.000Z', close: 178.78 }, { date: '2008-01-15T08:00:00.000Z', close: 169.04 }, { date: '2008-01-16T08:00:00.000Z', close: 159.64 }, { date: '2008-01-17T08:00:00.000Z', close: 160.89 }, { date: '2008-01-18T08:00:00.000Z', close: 161.36 }, { date: '2008-01-22T08:00:00.000Z', close: 155.64 }, { date: '2008-01-23T08:00:00.000Z', close: 139.07 }, { date: '2008-01-24T08:00:00.000Z', close: 135.6 }, { date: '2008-01-25T08:00:00.000Z', close: 130.01 }, { date: '2008-01-28T08:00:00.000Z', close: 130.01 }, { date: '2008-01-29T08:00:00.000Z', close: 131.54 }, { date: '2008-01-30T08:00:00.000Z', close: 132.18 }, { date: '2008-01-31T08:00:00.000Z', close: 135.36 }, { date: '2008-02-01T08:00:00.000Z', close: 133.75 }, { date: '2008-02-04T08:00:00.000Z', close: 131.65 }, { date: '2008-02-05T08:00:00.000Z', close: 129.36 }, { date: '2008-02-06T08:00:00.000Z', close: 122 }, { date: '2008-02-07T08:00:00.000Z', close: 121.24 }, { date: '2008-02-08T08:00:00.000Z', close: 125.48 }, { date: '2008-02-11T08:00:00.000Z', close: 129.45 }, { date: '2008-02-12T08:00:00.000Z', close: 124.86 }, { date: '2008-02-13T08:00:00.000Z', close: 129.4 }, { date: '2008-02-14T08:00:00.000Z', close: 127.46 }, { date: '2008-02-15T08:00:00.000Z', close: 124.63 }, { date: '2008-02-19T08:00:00.000Z', close: 122.18 }, { date: '2008-02-20T08:00:00.000Z', close: 123.82 }, { date: '2008-02-21T08:00:00.000Z', close: 121.54 }, { date: '2008-02-22T08:00:00.000Z', close: 119.46 }, { date: '2008-02-25T08:00:00.000Z', close: 119.74 }, { date: '2008-02-26T08:00:00.000Z', close: 119.15 }, { date: '2008-02-27T08:00:00.000Z', close: 122.96 }, { date: '2008-02-28T08:00:00.000Z', close: 129.91 }, { date: '2008-02-29T08:00:00.000Z', close: 125.02 }, { date: '2008-03-03T08:00:00.000Z', close: 121.73 }, { date: '2008-03-04T08:00:00.000Z', close: 124.62 }, { date: '2008-03-05T08:00:00.000Z', close: 124.49 }, { date: '2008-03-06T08:00:00.000Z', close: 120.93 }, { date: '2008-03-07T08:00:00.000Z', close: 122.25 }, { date: '2008-03-10T07:00:00.000Z', close: 119.69 }, { date: '2008-03-11T07:00:00.000Z', close: 127.35 }, { date: '2008-03-12T07:00:00.000Z', close: 126.03 }, { date: '2008-03-13T07:00:00.000Z', close: 127.94 }, { date: '2008-03-14T07:00:00.000Z', close: 126.61 }, { date: '2008-03-17T07:00:00.000Z', close: 126.73 }, { date: '2008-03-18T07:00:00.000Z', close: 132.82 }, { date: '2008-03-19T07:00:00.000Z', close: 129.67 }, { date: '2008-03-20T07:00:00.000Z', close: 133.27 }, { date: '2008-03-24T07:00:00.000Z', close: 139.53 }, { date: '2008-03-25T07:00:00.000Z', close: 140.98 }, { date: '2008-03-26T07:00:00.000Z', close: 145.06 }, { date: '2008-03-27T07:00:00.000Z', close: 140.25 }, { date: '2008-03-28T07:00:00.000Z', close: 143.01 }, { date: '2008-03-31T07:00:00.000Z', close: 143.5 }, { date: '2008-04-01T07:00:00.000Z', close: 149.53 }, { date: '2008-04-02T07:00:00.000Z', close: 147.49 }, { date: '2008-04-03T07:00:00.000Z', close: 151.61 }, { date: '2008-04-04T07:00:00.000Z', close: 153.08 }, { date: '2008-04-07T07:00:00.000Z', close: 155.89 }, { date: '2008-04-08T07:00:00.000Z', close: 152.84 }, { date: '2008-04-09T07:00:00.000Z', close: 151.44 }, { date: '2008-04-10T07:00:00.000Z', close: 154.55 }, { date: '2008-04-11T07:00:00.000Z', close: 147.14 }, { date: '2008-04-14T07:00:00.000Z', close: 147.78 }, { date: '2008-04-15T07:00:00.000Z', close: 148.38 }, { date: '2008-04-16T07:00:00.000Z', close: 153.7 }, { date: '2008-04-17T07:00:00.000Z', close: 154.49 }, { date: '2008-04-18T07:00:00.000Z', close: 161.04 }, { date: '2008-04-21T07:00:00.000Z', close: 168.16 }, { date: '2008-04-22T07:00:00.000Z', close: 160.2 }, { date: '2008-04-23T07:00:00.000Z', close: 162.89 }, { date: '2008-04-24T07:00:00.000Z', close: 168.94 }, { date: '2008-04-25T07:00:00.000Z', close: 169.73 }, { date: '2008-04-28T07:00:00.000Z', close: 172.24 }, { date: '2008-04-29T07:00:00.000Z', close: 175.05 }, { date: '2008-04-30T07:00:00.000Z', close: 173.95 }, { date: '2008-05-01T07:00:00.000Z', close: 180 }, { date: '2008-05-02T07:00:00.000Z', close: 180.94 }, { date: '2008-05-05T07:00:00.000Z', close: 184.73 }, { date: '2008-05-06T07:00:00.000Z', close: 186.66 }, { date: '2008-05-07T07:00:00.000Z', close: 182.59 }, { date: '2008-05-08T07:00:00.000Z', close: 185.06 }, { date: '2008-05-09T07:00:00.000Z', close: 183.45 }, { date: '2008-05-12T07:00:00.000Z', close: 188.16 }, { date: '2008-05-13T07:00:00.000Z', close: 189.96 }, { date: '2008-05-14T07:00:00.000Z', close: 186.26 }, { date: '2008-05-15T07:00:00.000Z', close: 189.73 }, { date: '2008-05-16T07:00:00.000Z', close: 187.62 }, { date: '2008-05-19T07:00:00.000Z', close: 183.6 }, { date: '2008-05-20T07:00:00.000Z', close: 185.9 }, { date: '2008-05-21T07:00:00.000Z', close: 178.19 }, { date: '2008-05-22T07:00:00.000Z', close: 177.05 }, { date: '2008-05-23T07:00:00.000Z', close: 181.17 }, { date: '2008-05-27T07:00:00.000Z', close: 186.43 }, { date: '2008-05-28T07:00:00.000Z', close: 187.01 }, { date: '2008-05-29T07:00:00.000Z', close: 186.69 }, { date: '2008-05-30T07:00:00.000Z', close: 188.75 }, { date: '2008-06-02T07:00:00.000Z', close: 186.1 }, { date: '2008-06-03T07:00:00.000Z', close: 185.37 }, { date: '2008-06-04T07:00:00.000Z', close: 185.19 }, { date: '2008-06-05T07:00:00.000Z', close: 189.43 }, { date: '2008-06-06T07:00:00.000Z', close: 185.64 }, { date: '2008-06-09T07:00:00.000Z', close: 181.61 }, { date: '2008-06-10T07:00:00.000Z', close: 185.64 }, { date: '2008-06-11T07:00:00.000Z', close: 180.81 }, { date: '2008-06-12T07:00:00.000Z', close: 173.26 }, { date: '2008-06-13T07:00:00.000Z', close: 172.37 }, { date: '2008-06-16T07:00:00.000Z', close: 176.84 }, { date: '2008-06-17T07:00:00.000Z', close: 181.43 }, { date: '2008-06-18T07:00:00.000Z', close: 178.75 }, { date: '2008-06-19T07:00:00.000Z', close: 180.9 }, { date: '2008-06-20T07:00:00.000Z', close: 175.27 }, { date: '2008-06-23T07:00:00.000Z', close: 173.16 }, { date: '2008-06-24T07:00:00.000Z', close: 173.25 }, { date: '2008-06-25T07:00:00.000Z', close: 177.39 }, { date: '2008-06-26T07:00:00.000Z', close: 168.26 }, { date: '2008-06-27T07:00:00.000Z', close: 170.09 }, { date: '2008-06-30T07:00:00.000Z', close: 167.44 }, { date: '2008-07-01T07:00:00.000Z', close: 174.68 }, { date: '2008-07-02T07:00:00.000Z', close: 168.18 }, { date: '2008-07-03T07:00:00.000Z', close: 170.12 }, { date: '2008-07-07T07:00:00.000Z', close: 175.16 }, { date: '2008-07-08T07:00:00.000Z', close: 179.55 }, { date: '2008-07-09T07:00:00.000Z', close: 174.25 }, { date: '2008-07-10T07:00:00.000Z', close: 176.63 }, { date: '2008-07-11T07:00:00.000Z', close: 172.58 }, { date: '2008-07-14T07:00:00.000Z', close: 173.88 }, { date: '2008-07-15T07:00:00.000Z', close: 169.64 }, { date: '2008-07-16T07:00:00.000Z', close: 172.81 }, { date: '2008-07-17T07:00:00.000Z', close: 171.81 }, { date: '2008-07-18T07:00:00.000Z', close: 165.15 }, { date: '2008-07-21T07:00:00.000Z', close: 166.29 }, { date: '2008-07-22T07:00:00.000Z', close: 162.02 }, { date: '2008-07-23T07:00:00.000Z', close: 166.26 }, { date: '2008-07-24T07:00:00.000Z', close: 159.03 }, { date: '2008-07-25T07:00:00.000Z', close: 162.12 }, { date: '2008-07-28T07:00:00.000Z', close: 154.4 }, { date: '2008-07-29T07:00:00.000Z', close: 157.08 }, { date: '2008-07-30T07:00:00.000Z', close: 159.88 }, { date: '2008-07-31T07:00:00.000Z', close: 158.95 }, { date: '2008-08-01T07:00:00.000Z', close: 156.66 }, { date: '2008-08-04T07:00:00.000Z', close: 153.23 }, { date: '2008-08-05T07:00:00.000Z', close: 160.64 }, { date: '2008-08-06T07:00:00.000Z', close: 164.19 }, { date: '2008-08-07T07:00:00.000Z', close: 163.57 }, { date: '2008-08-08T07:00:00.000Z', close: 169.55 }, { date: '2008-08-11T07:00:00.000Z', close: 173.56 }, { date: '2008-08-12T07:00:00.000Z', close: 176.73 }, { date: '2008-08-13T07:00:00.000Z', close: 179.3 }, { date: '2008-08-14T07:00:00.000Z', close: 179.32 }, { date: '2008-08-15T07:00:00.000Z', close: 175.74 }, { date: '2008-08-18T07:00:00.000Z', close: 175.39 }, { date: '2008-08-19T07:00:00.000Z', close: 173.53 }, { date: '2008-08-20T07:00:00.000Z', close: 175.84 }, { date: '2008-08-21T07:00:00.000Z', close: 174.29 }, { date: '2008-08-22T07:00:00.000Z', close: 176.79 }, { date: '2008-08-25T07:00:00.000Z', close: 172.55 }, { date: '2008-08-26T07:00:00.000Z', close: 173.64 }, { date: '2008-08-27T07:00:00.000Z', close: 174.67 }, { date: '2008-08-28T07:00:00.000Z', close: 173.74 }, { date: '2008-08-29T07:00:00.000Z', close: 169.53 }, { date: '2008-09-02T07:00:00.000Z', close: 166.19 }, { date: '2008-09-03T07:00:00.000Z', close: 166.96 }, { date: '2008-09-04T07:00:00.000Z', close: 161.22 }, { date: '2008-09-05T07:00:00.000Z', close: 160.18 }, { date: '2008-09-08T07:00:00.000Z', close: 157.92 }, { date: '2008-09-09T07:00:00.000Z', close: 151.68 }, { date: '2008-09-10T07:00:00.000Z', close: 151.61 }, { date: '2008-09-11T07:00:00.000Z', close: 152.65 }, { date: '2008-09-12T07:00:00.000Z', close: 148.94 }, { date: '2008-09-15T07:00:00.000Z', close: 140.36 }, { date: '2008-09-16T07:00:00.000Z', close: 139.88 }, { date: '2008-09-17T07:00:00.000Z', close: 127.83 }, { date: '2008-09-18T07:00:00.000Z', close: 134.09 }, { date: '2008-09-19T07:00:00.000Z', close: 140.91 }, { date: '2008-09-22T07:00:00.000Z', close: 131.05 }, { date: '2008-09-23T07:00:00.000Z', close: 126.84 }, { date: '2008-09-24T07:00:00.000Z', close: 128.71 }, { date: '2008-09-25T07:00:00.000Z', close: 131.93 }, { date: '2008-09-26T07:00:00.000Z', close: 128.24 }, { date: '2008-09-29T07:00:00.000Z', close: 105.26 }, { date: '2008-09-30T07:00:00.000Z', close: 113.66 }, { date: '2008-10-01T07:00:00.000Z', close: 109.12 }, { date: '2008-10-02T07:00:00.000Z', close: 100.1 }, { date: '2008-10-03T07:00:00.000Z', close: 97.07 }, { date: '2008-10-06T07:00:00.000Z', close: 98.14 }, { date: '2008-10-07T07:00:00.000Z', close: 89.16 }, { date: '2008-10-08T07:00:00.000Z', close: 89.79 }, { date: '2008-10-09T07:00:00.000Z', close: 88.74 }, { date: '2008-10-10T07:00:00.000Z', close: 96.8 }, { date: '2008-10-13T07:00:00.000Z', close: 110.26 }, { date: '2008-10-14T07:00:00.000Z', close: 104.08 }, { date: '2008-10-15T07:00:00.000Z', close: 97.95 }, { date: '2008-10-16T07:00:00.000Z', close: 101.89 }, { date: '2008-10-17T07:00:00.000Z', close: 97.4 }, { date: '2008-10-20T07:00:00.000Z', close: 98.44 }, { date: '2008-10-21T07:00:00.000Z', close: 91.49 }, { date: '2008-10-22T07:00:00.000Z', close: 96.87 }, { date: '2008-10-23T07:00:00.000Z', close: 98.23 }, { date: '2008-10-24T07:00:00.000Z', close: 96.38 }, { date: '2008-10-27T07:00:00.000Z', close: 92.09 }, { date: '2008-10-28T07:00:00.000Z', close: 99.91 }, { date: '2008-10-29T07:00:00.000Z', close: 104.55 }, { date: '2008-10-30T07:00:00.000Z', close: 111.04 }, { date: '2008-10-31T07:00:00.000Z', close: 107.59 }, { date: '2008-11-03T08:00:00.000Z', close: 106.96 }, { date: '2008-11-04T08:00:00.000Z', close: 110.99 }, { date: '2008-11-05T08:00:00.000Z', close: 103.3 }, { date: '2008-11-06T08:00:00.000Z', close: 99.1 }, { date: '2008-11-07T08:00:00.000Z', close: 98.24 }, { date: '2008-11-10T08:00:00.000Z', close: 95.88 }, { date: '2008-11-11T08:00:00.000Z', close: 94.77 }, { date: '2008-11-12T08:00:00.000Z', close: 90.12 }, { date: '2008-11-13T08:00:00.000Z', close: 96.44 }, { date: '2008-11-14T08:00:00.000Z', close: 90.24 }, { date: '2008-11-17T08:00:00.000Z', close: 88.14 }, { date: '2008-11-18T08:00:00.000Z', close: 89.91 }, { date: '2008-11-19T08:00:00.000Z', close: 86.29 }, { date: '2008-11-20T08:00:00.000Z', close: 80.49 }, { date: '2008-11-21T08:00:00.000Z', close: 82.58 }, { date: '2008-11-24T08:00:00.000Z', close: 92.95 }, { date: '2008-11-25T08:00:00.000Z', close: 90.8 }, { date: '2008-11-26T08:00:00.000Z', close: 95 }, { date: '2008-11-27T08:00:00.000Z', close: 95 }, { date: '2008-11-28T08:00:00.000Z', close: 92.67 }, { date: '2008-12-01T08:00:00.000Z', close: 88.93 }, { date: '2008-12-02T08:00:00.000Z', close: 92.47 }, { date: '2008-12-03T08:00:00.000Z', close: 95.9 }, { date: '2008-12-04T08:00:00.000Z', close: 91.41 }, { date: '2008-12-05T08:00:00.000Z', close: 94 }, { date: '2008-12-08T08:00:00.000Z', close: 99.72 }, { date: '2008-12-09T08:00:00.000Z', close: 100.06 }, { date: '2008-12-10T08:00:00.000Z', close: 98.21 }, { date: '2008-12-11T08:00:00.000Z', close: 95 }, { date: '2008-12-12T08:00:00.000Z', close: 98.27 }, { date: '2008-12-15T08:00:00.000Z', close: 94.75 }, { date: '2008-12-16T08:00:00.000Z', close: 95.43 }, { date: '2008-12-17T08:00:00.000Z', close: 89.16 }, { date: '2008-12-18T08:00:00.000Z', close: 89.43 }, { date: '2008-12-19T08:00:00.000Z', close: 90 }, { date: '2008-12-22T08:00:00.000Z', close: 85.74 }, { date: '2008-12-23T08:00:00.000Z', close: 86.38 }, { date: '2008-12-24T08:00:00.000Z', close: 85.04 }, { date: '2008-12-25T08:00:00.000Z', close: 85.04 }, { date: '2008-12-26T08:00:00.000Z', close: 85.81 }, { date: '2008-12-29T08:00:00.000Z', close: 86.61 }, { date: '2008-12-30T08:00:00.000Z', close: 86.29 }, { date: '2008-12-31T08:00:00.000Z', close: 85.35 }, { date: '2009-01-01T08:00:00.000Z', close: 85.35 }, { date: '2009-01-02T08:00:00.000Z', close: 90.75 }, { date: '2009-01-05T08:00:00.000Z', close: 94.58 }, { date: '2009-01-06T08:00:00.000Z', close: 93.02 }, { date: '2009-01-07T08:00:00.000Z', close: 91.01 }, { date: '2009-01-08T08:00:00.000Z', close: 92.7 }, { date: '2009-01-09T08:00:00.000Z', close: 90.58 }, { date: '2009-01-12T08:00:00.000Z', close: 88.66 }, { date: '2009-01-13T08:00:00.000Z', close: 87.71 }, { date: '2009-01-14T08:00:00.000Z', close: 85.33 }, { date: '2009-01-15T08:00:00.000Z', close: 83.38 }, { date: '2009-01-16T08:00:00.000Z', close: 82.33 }, { date: '2009-01-20T08:00:00.000Z', close: 78.2 }, { date: '2009-01-21T08:00:00.000Z', close: 82.83 }, { date: '2009-01-22T08:00:00.000Z', close: 88.36 }, { date: '2009-01-23T08:00:00.000Z', close: 88.36 }, { date: '2009-01-26T08:00:00.000Z', close: 89.64 }, { date: '2009-01-27T08:00:00.000Z', close: 90.73 }, { date: '2009-01-28T08:00:00.000Z', close: 94.2 }, { date: '2009-01-29T08:00:00.000Z', close: 93 }, { date: '2009-01-30T08:00:00.000Z', close: 90.13 }, { date: '2009-02-02T08:00:00.000Z', close: 91.51 }, { date: '2009-02-03T08:00:00.000Z', close: 92.98 }, { date: '2009-02-04T08:00:00.000Z', close: 93.55 }, { date: '2009-02-05T08:00:00.000Z', close: 96.46 }, { date: '2009-02-06T08:00:00.000Z', close: 99.72 }, { date: '2009-02-09T08:00:00.000Z', close: 102.51 }, { date: '2009-02-10T08:00:00.000Z', close: 97.83 }, { date: '2009-02-11T08:00:00.000Z', close: 96.82 }, { date: '2009-02-12T08:00:00.000Z', close: 99.27 }, { date: '2009-02-13T08:00:00.000Z', close: 99.16 }, { date: '2009-02-17T08:00:00.000Z', close: 94.53 }, { date: '2009-02-18T08:00:00.000Z', close: 94.37 }, { date: '2009-02-19T08:00:00.000Z', close: 90.64 }, { date: '2009-02-20T08:00:00.000Z', close: 91.2 }, { date: '2009-02-23T08:00:00.000Z', close: 86.95 }, { date: '2009-02-24T08:00:00.000Z', close: 90.25 }, { date: '2009-02-25T08:00:00.000Z', close: 91.16 }, { date: '2009-02-26T08:00:00.000Z', close: 89.19 }, { date: '2009-02-27T08:00:00.000Z', close: 89.31 }, { date: '2009-03-02T08:00:00.000Z', close: 87.94 }, { date: '2009-03-03T08:00:00.000Z', close: 88.37 }, { date: '2009-03-04T08:00:00.000Z', close: 91.17 }, { date: '2009-03-05T08:00:00.000Z', close: 88.84 }, { date: '2009-03-06T08:00:00.000Z', close: 85.3 }, { date: '2009-03-09T07:00:00.000Z', close: 83.11 }, { date: '2009-03-10T07:00:00.000Z', close: 88.63 }, { date: '2009-03-11T07:00:00.000Z', close: 92.68 }, { date: '2009-03-12T07:00:00.000Z', close: 96.35 }, { date: '2009-03-13T07:00:00.000Z', close: 95.93 }, { date: '2009-03-16T07:00:00.000Z', close: 95.42 }, { date: '2009-03-17T07:00:00.000Z', close: 99.66 }, { date: '2009-03-18T07:00:00.000Z', close: 101.52 }, { date: '2009-03-19T07:00:00.000Z', close: 101.62 }, { date: '2009-03-20T07:00:00.000Z', close: 101.59 }, { date: '2009-03-23T07:00:00.000Z', close: 107.66 }, { date: '2009-03-24T07:00:00.000Z', close: 106.5 }, { date: '2009-03-25T07:00:00.000Z', close: 106.49 }, { date: '2009-03-26T07:00:00.000Z', close: 109.87 }, { date: '2009-03-27T07:00:00.000Z', close: 106.85 }, { date: '2009-03-30T07:00:00.000Z', close: 104.49 }, { date: '2009-03-31T07:00:00.000Z', close: 105.12 }, { date: '2009-04-01T07:00:00.000Z', close: 108.69 }, { date: '2009-04-02T07:00:00.000Z', close: 112.71 }, { date: '2009-04-03T07:00:00.000Z', close: 115.99 }, { date: '2009-04-06T07:00:00.000Z', close: 118.45 }, { date: '2009-04-07T07:00:00.000Z', close: 115 }, { date: '2009-04-08T07:00:00.000Z', close: 116.32 }, { date: '2009-04-09T07:00:00.000Z', close: 119.57 }, { date: '2009-04-10T07:00:00.000Z', close: 119.57 }, { date: '2009-04-13T07:00:00.000Z', close: 120.22 }, { date: '2009-04-14T07:00:00.000Z', close: 118.31 }, { date: '2009-04-15T07:00:00.000Z', close: 117.64 }, { date: '2009-04-16T07:00:00.000Z', close: 121.45 }, { date: '2009-04-17T07:00:00.000Z', close: 123.42 }, { date: '2009-04-20T07:00:00.000Z', close: 120.5 }, { date: '2009-04-21T07:00:00.000Z', close: 121.76 }, { date: '2009-04-22T07:00:00.000Z', close: 121.51 }, { date: '2009-04-23T07:00:00.000Z', close: 125.4 }, { date: '2009-04-24T07:00:00.000Z', close: 123.9 }, { date: '2009-04-27T07:00:00.000Z', close: 124.73 }, { date: '2009-04-28T07:00:00.000Z', close: 123.9 }, { date: '2009-04-29T07:00:00.000Z', close: 125.14 }, { date: '2009-04-30T07:00:00.000Z', close: 125.83 }, { date: '2009-05-01T07:00:00.000Z', close: 127.24 }, { date: '2009-05-04T07:00:00.000Z', close: 132.07 }, { date: '2009-05-05T07:00:00.000Z', close: 132.71 }, { date: '2009-05-06T07:00:00.000Z', close: 132.5 }, { date: '2009-05-07T07:00:00.000Z', close: 129.06 }, { date: '2009-05-08T07:00:00.000Z', close: 129.19 }, { date: '2009-05-11T07:00:00.000Z', close: 129.57 }, { date: '2009-05-12T07:00:00.000Z', close: 124.42 }, { date: '2009-05-13T07:00:00.000Z', close: 119.49 }, { date: '2009-05-14T07:00:00.000Z', close: 122.95 }, { date: '2009-05-15T07:00:00.000Z', close: 122.42 }, { date: '2009-05-18T07:00:00.000Z', close: 126.65 }, { date: '2009-05-19T07:00:00.000Z', close: 127.45 }, { date: '2009-05-20T07:00:00.000Z', close: 125.87 }, { date: '2009-05-21T07:00:00.000Z', close: 124.18 }, { date: '2009-05-22T07:00:00.000Z', close: 122.5 }, { date: '2009-05-26T07:00:00.000Z', close: 130.78 }, { date: '2009-05-27T07:00:00.000Z', close: 133.05 }, { date: '2009-05-28T07:00:00.000Z', close: 135.07 }, { date: '2009-05-29T07:00:00.000Z', close: 135.81 }, { date: '2009-06-01T07:00:00.000Z', close: 139.35 }, { date: '2009-06-02T07:00:00.000Z', close: 139.49 }, { date: '2009-06-03T07:00:00.000Z', close: 140.95 }, { date: '2009-06-04T07:00:00.000Z', close: 143.74 }, { date: '2009-06-05T07:00:00.000Z', close: 144.67 }, { date: '2009-06-08T07:00:00.000Z', close: 143.85 }, { date: '2009-06-09T07:00:00.000Z', close: 142.72 }, { date: '2009-06-10T07:00:00.000Z', close: 140.25 }, { date: '2009-06-11T07:00:00.000Z', close: 139.95 }, { date: '2009-06-12T07:00:00.000Z', close: 136.97 }, { date: '2009-06-15T07:00:00.000Z', close: 136.09 }, { date: '2009-06-16T07:00:00.000Z', close: 136.35 }, { date: '2009-06-17T07:00:00.000Z', close: 135.58 }, { date: '2009-06-18T07:00:00.000Z', close: 135.88 }, { date: '2009-06-19T07:00:00.000Z', close: 139.48 }, { date: '2009-06-22T07:00:00.000Z', close: 137.37 }, { date: '2009-06-23T07:00:00.000Z', close: 134.01 }, { date: '2009-06-24T07:00:00.000Z', close: 136.22 }, { date: '2009-06-25T07:00:00.000Z', close: 139.86 }, { date: '2009-06-26T07:00:00.000Z', close: 142.44 }, { date: '2009-06-29T07:00:00.000Z', close: 141.97 }, { date: '2009-06-30T07:00:00.000Z', close: 142.43 }, { date: '2009-07-01T07:00:00.000Z', close: 142.83 }, { date: '2009-07-02T07:00:00.000Z', close: 140.02 }, { date: '2009-07-03T07:00:00.000Z', close: 140.02 }, { date: '2009-07-06T07:00:00.000Z', close: 138.61 }, { date: '2009-07-07T07:00:00.000Z', close: 135.4 }, { date: '2009-07-08T07:00:00.000Z', close: 137.22 }, { date: '2009-07-09T07:00:00.000Z', close: 136.36 }, { date: '2009-07-10T07:00:00.000Z', close: 138.52 }, { date: '2009-07-13T07:00:00.000Z', close: 142.34 }, { date: '2009-07-14T07:00:00.000Z', close: 142.27 }, { date: '2009-07-15T07:00:00.000Z', close: 146.88 }, { date: '2009-07-16T07:00:00.000Z', close: 147.52 }, { date: '2009-07-17T07:00:00.000Z', close: 151.75 }, { date: '2009-07-20T07:00:00.000Z', close: 152.91 }, { date: '2009-07-21T07:00:00.000Z', close: 151.51 }, { date: '2009-07-22T07:00:00.000Z', close: 156.74 }, { date: '2009-07-23T07:00:00.000Z', close: 157.82 }, { date: '2009-07-24T07:00:00.000Z', close: 159.99 }, { date: '2009-07-27T07:00:00.000Z', close: 160.1 }, { date: '2009-07-28T07:00:00.000Z', close: 160 }, { date: '2009-07-29T07:00:00.000Z', close: 160.03 }, { date: '2009-07-30T07:00:00.000Z', close: 162.79 }, { date: '2009-07-31T07:00:00.000Z', close: 163.39 }, { date: '2009-08-03T07:00:00.000Z', close: 166.43 }, { date: '2009-08-04T07:00:00.000Z', close: 165.55 }, { date: '2009-08-05T07:00:00.000Z', close: 165.11 }, { date: '2009-08-06T07:00:00.000Z', close: 163.91 }, { date: '2009-08-07T07:00:00.000Z', close: 165.51 }, { date: '2009-08-10T07:00:00.000Z', close: 164.72 }, { date: '2009-08-12T07:00:00.000Z', close: 165.31 }, { date: '2009-08-13T07:00:00.000Z', close: 168.42 }, { date: '2009-08-14T07:00:00.000Z', close: 166.78 }, { date: '2009-08-17T07:00:00.000Z', close: 159.59 }, { date: '2009-08-18T07:00:00.000Z', close: 164 }, { date: '2009-08-19T07:00:00.000Z', close: 164.6 }, { date: '2009-08-20T07:00:00.000Z', close: 166.33 }, { date: '2009-08-21T07:00:00.000Z', close: 169.22 }, { date: '2009-08-24T07:00:00.000Z', close: 169.06 }, { date: '2009-08-25T07:00:00.000Z', close: 169.4 }, { date: '2009-08-26T07:00:00.000Z', close: 167.41 }, { date: '2009-08-27T07:00:00.000Z', close: 169.45 }, { date: '2009-08-28T07:00:00.000Z', close: 170.05 }, { date: '2009-08-31T07:00:00.000Z', close: 168.21 }, { date: '2009-09-01T07:00:00.000Z', close: 165.3 }, { date: '2009-09-02T07:00:00.000Z', close: 165.18 }, { date: '2009-09-03T07:00:00.000Z', close: 166.55 }, { date: '2009-09-04T07:00:00.000Z', close: 170.31 }, { date: '2009-09-08T07:00:00.000Z', close: 172.93 }, { date: '2009-09-09T07:00:00.000Z', close: 171.14 }, { date: '2009-09-10T07:00:00.000Z', close: 172.56 }, { date: '2009-09-11T07:00:00.000Z', close: 172.16 }, { date: '2009-09-14T07:00:00.000Z', close: 173.72 }, { date: '2009-09-15T07:00:00.000Z', close: 175.16 }, { date: '2009-09-16T07:00:00.000Z', close: 181.87 }, { date: '2009-09-17T07:00:00.000Z', close: 184.55 }, { date: '2009-09-18T07:00:00.000Z', close: 185.02 }, { date: '2009-09-21T07:00:00.000Z', close: 184.02 }, { date: '2009-09-22T07:00:00.000Z', close: 184.48 }, { date: '2009-09-23T07:00:00.000Z', close: 185.5 }, { date: '2009-09-24T07:00:00.000Z', close: 183.82 }, { date: '2009-09-25T07:00:00.000Z', close: 182.37 }, { date: '2009-09-28T07:00:00.000Z', close: 186.15 }, { date: '2009-09-29T07:00:00.000Z', close: 185.38 }, { date: '2009-09-30T07:00:00.000Z', close: 185.35 }, { date: '2009-10-01T07:00:00.000Z', close: 180.86 }, { date: '2009-10-02T07:00:00.000Z', close: 184.9 }, { date: '2009-10-05T07:00:00.000Z', close: 186.02 }, { date: '2009-10-06T07:00:00.000Z', close: 190.01 }, { date: '2009-10-07T07:00:00.000Z', close: 190.25 }, { date: '2009-10-08T07:00:00.000Z', close: 189.27 }, { date: '2009-10-09T07:00:00.000Z', close: 190.47 }, { date: '2009-10-12T07:00:00.000Z', close: 190.81 }, { date: '2009-10-13T07:00:00.000Z', close: 190.02 }, { date: '2009-10-14T07:00:00.000Z', close: 191.29 }, { date: '2009-10-15T07:00:00.000Z', close: 190.56 }, { date: '2009-10-16T07:00:00.000Z', close: 188.05 }, { date: '2009-10-19T07:00:00.000Z', close: 189.86 }, { date: '2009-10-20T07:00:00.000Z', close: 198.76 }, { date: '2009-10-21T07:00:00.000Z', close: 204.92 }, { date: '2009-10-22T07:00:00.000Z', close: 205.2 }, { date: '2009-10-23T07:00:00.000Z', close: 203.94 }, { date: '2009-10-26T07:00:00.000Z', close: 202.48 }, { date: '2009-10-27T07:00:00.000Z', close: 197.37 }, { date: '2009-10-28T07:00:00.000Z', close: 192.4 }, { date: '2009-10-29T07:00:00.000Z', close: 196.35 }, { date: '2009-10-30T07:00:00.000Z', close: 188.5 }, { date: '2009-11-02T08:00:00.000Z', close: 189.31 }, { date: '2009-11-03T08:00:00.000Z', close: 188.75 }, { date: '2009-11-04T08:00:00.000Z', close: 190.81 }, { date: '2009-11-05T08:00:00.000Z', close: 194.03 }, { date: '2009-11-06T08:00:00.000Z', close: 194.34 }, { date: '2009-11-09T08:00:00.000Z', close: 201.46 }, { date: '2009-11-10T08:00:00.000Z', close: 202.98 }, { date: '2009-11-11T08:00:00.000Z', close: 203.25 }, { date: '2009-11-12T08:00:00.000Z', close: 201.99 }, { date: '2009-11-13T08:00:00.000Z', close: 204.45 }, { date: '2009-11-16T08:00:00.000Z', close: 206.63 }, { date: '2009-11-17T08:00:00.000Z', close: 207 }, { date: '2009-11-18T08:00:00.000Z', close: 205.96 }, { date: '2009-11-19T08:00:00.000Z', close: 200.51 }, { date: '2009-11-20T08:00:00.000Z', close: 199.92 }, { date: '2009-11-23T08:00:00.000Z', close: 205.88 }, { date: '2009-11-24T08:00:00.000Z', close: 204.44 }, { date: '2009-11-25T08:00:00.000Z', close: 204.19 }, { date: '2009-11-26T08:00:00.000Z', close: 204.19 }, { date: '2009-11-27T08:00:00.000Z', close: 200.59 }, { date: '2009-11-30T08:00:00.000Z', close: 199.91 }, { date: '2009-12-01T08:00:00.000Z', close: 196.97 }, { date: '2009-12-02T08:00:00.000Z', close: 196.23 }, { date: '2009-12-03T08:00:00.000Z', close: 196.48 }, { date: '2009-12-04T08:00:00.000Z', close: 193.32 }, { date: '2009-12-07T08:00:00.000Z', close: 188.95 }, { date: '2009-12-08T08:00:00.000Z', close: 189.87 }, { date: '2009-12-09T08:00:00.000Z', close: 197.8 }, { date: '2009-12-10T08:00:00.000Z', close: 196.43 }, { date: '2009-12-11T08:00:00.000Z', close: 194.67 }, { date: '2009-12-14T08:00:00.000Z', close: 196.98 }, { date: '2009-12-15T08:00:00.000Z', close: 194.17 }, { date: '2009-12-16T08:00:00.000Z', close: 195.03 }, { date: '2009-12-17T08:00:00.000Z', close: 191.86 }, { date: '2009-12-18T08:00:00.000Z', close: 195.43 }, { date: '2009-12-21T08:00:00.000Z', close: 198.23 }, { date: '2009-12-22T08:00:00.000Z', close: 200.36 }, { date: '2009-12-23T08:00:00.000Z', close: 202.1 }, { date: '2009-12-24T08:00:00.000Z', close: 209.04 }, { date: '2009-12-25T08:00:00.000Z', close: 209.04 }, { date: '2009-12-28T08:00:00.000Z', close: 211.61 }, { date: '2009-12-29T08:00:00.000Z', close: 209.1 }, { date: '2009-12-30T08:00:00.000Z', close: 211.64 }, { date: '2009-12-31T08:00:00.000Z', close: 210.73 }, { date: '2010-01-01T08:00:00.000Z', close: 210.73 }, { date: '2010-01-04T08:00:00.000Z', close: 214.01 }, { date: '2010-01-05T08:00:00.000Z', close: 214.38 }, { date: '2010-01-06T08:00:00.000Z', close: 210.97 }, { date: '2010-01-07T08:00:00.000Z', close: 210.58 }, { date: '2010-01-08T08:00:00.000Z', close: 211.98 }, { date: '2010-01-11T08:00:00.000Z', close: 210.11 }, { date: '2010-01-12T08:00:00.000Z', close: 207.72 }, { date: '2010-01-13T08:00:00.000Z', close: 210.65 }, { date: '2010-01-14T08:00:00.000Z', close: 209.43 }, { date: '2010-01-15T08:00:00.000Z', close: 205.93 }, { date: '2010-01-18T08:00:00.000Z', close: 205.93 }, { date: '2010-01-19T08:00:00.000Z', close: 215.04 }, { date: '2010-01-20T08:00:00.000Z', close: 211.72 }, { date: '2010-01-21T08:00:00.000Z', close: 208.07 }, { date: '2010-01-22T08:00:00.000Z', close: 197.75 }, { date: '2010-01-25T08:00:00.000Z', close: 203.08 }, { date: '2010-01-26T08:00:00.000Z', close: 205.94 }, { date: '2010-01-27T08:00:00.000Z', close: 207.88 }, { date: '2010-01-28T08:00:00.000Z', close: 199.29 }, { date: '2010-01-29T08:00:00.000Z', close: 192.06 }, { date: '2010-02-01T08:00:00.000Z', close: 194.73 }, { date: '2010-02-02T08:00:00.000Z', close: 195.86 }, { date: '2010-02-03T08:00:00.000Z', close: 199.23 }, { date: '2010-02-04T08:00:00.000Z', close: 192.05 }, { date: '2010-02-05T08:00:00.000Z', close: 195.46 }, { date: '2010-02-08T08:00:00.000Z', close: 194.12 }, { date: '2010-02-09T08:00:00.000Z', close: 196.19 }, { date: '2010-02-10T08:00:00.000Z', close: 195.12 }, { date: '2010-02-11T08:00:00.000Z', close: 198.67 }, { date: '2010-02-12T08:00:00.000Z', close: 200.38 }, { date: '2010-02-15T08:00:00.000Z', close: 200.38 }, { date: '2010-02-16T08:00:00.000Z', close: 203.4 }, { date: '2010-02-17T08:00:00.000Z', close: 202.55 }, { date: '2010-02-18T08:00:00.000Z', close: 202.93 }, { date: '2010-02-19T08:00:00.000Z', close: 201.67 }, { date: '2010-02-22T08:00:00.000Z', close: 200.42 }, { date: '2010-02-23T08:00:00.000Z', close: 197.06 }, { date: '2010-02-24T08:00:00.000Z', close: 200.66 }, { date: '2010-02-25T08:00:00.000Z', close: 202 }, { date: '2010-02-26T08:00:00.000Z', close: 204.62 }, { date: '2010-03-01T08:00:00.000Z', close: 208.99 }, { date: '2010-03-02T08:00:00.000Z', close: 208.85 }, { date: '2010-03-03T08:00:00.000Z', close: 209.33 }, { date: '2010-03-04T08:00:00.000Z', close: 210.71 }, { date: '2010-03-05T08:00:00.000Z', close: 218.95 }, { date: '2010-03-08T08:00:00.000Z', close: 219.08 }, { date: '2010-03-09T08:00:00.000Z', close: 223.02 }, { date: '2010-03-10T08:00:00.000Z', close: 224.84 }, { date: '2010-03-11T08:00:00.000Z', close: 225.5 }, { date: '2010-03-12T08:00:00.000Z', close: 226.6 }, { date: '2010-03-15T07:00:00.000Z', close: 223.84 }, { date: '2010-03-16T07:00:00.000Z', close: 224.45 }, { date: '2010-03-17T07:00:00.000Z', close: 224.12 }, { date: '2010-03-18T07:00:00.000Z', close: 224.65 }, { date: '2010-03-19T07:00:00.000Z', close: 222.25 }, { date: '2010-03-22T07:00:00.000Z', close: 224.75 }, { date: '2010-03-23T07:00:00.000Z', close: 228.36 }, { date: '2010-03-24T07:00:00.000Z', close: 229.37 }, { date: '2010-03-25T07:00:00.000Z', close: 226.65 }, { date: '2010-03-26T07:00:00.000Z', close: 230.9 }, { date: '2010-03-29T07:00:00.000Z', close: 232.39 }, { date: '2010-03-30T07:00:00.000Z', close: 235.84 }, { date: '2010-03-31T07:00:00.000Z', close: 235 }, { date: '2010-04-01T07:00:00.000Z', close: 235.97 }, { date: '2010-04-02T07:00:00.000Z', close: 235.97 }, { date: '2010-04-05T07:00:00.000Z', close: 238.49 }, { date: '2010-04-06T07:00:00.000Z', close: 239.54 }, { date: '2010-04-07T07:00:00.000Z', close: 240.6 }, { date: '2010-04-08T07:00:00.000Z', close: 239.95 }, { date: '2010-04-09T07:00:00.000Z', close: 241.79 }, { date: '2010-04-12T07:00:00.000Z', close: 242.29 }, { date: '2010-04-13T07:00:00.000Z', close: 242.43 }, { date: '2010-04-14T07:00:00.000Z', close: 245.69 }, { date: '2010-04-15T07:00:00.000Z', close: 248.92 }, { date: '2010-04-16T07:00:00.000Z', close: 247.4 }, { date: '2010-04-19T07:00:00.000Z', close: 247.07 }, { date: '2010-04-20T07:00:00.000Z', close: 244.59 }, { date: '2010-04-21T07:00:00.000Z', close: 259.22 }, { date: '2010-04-22T07:00:00.000Z', close: 266.47 }, { date: '2010-04-23T07:00:00.000Z', close: 270.83 }, { date: '2010-04-26T07:00:00.000Z', close: 269.5 }, { date: '2010-04-27T07:00:00.000Z', close: 262.04 }, { date: '2010-04-28T07:00:00.000Z', close: 261.6 }, { date: '2010-04-29T07:00:00.000Z', close: 268.64 }, { date: '2010-04-30T07:00:00.000Z', close: 261.09 }, { date: '2010-05-03T07:00:00.000Z', close: 266.35 }, { date: '2010-05-04T07:00:00.000Z', close: 258.68 }, { date: '2010-05-05T07:00:00.000Z', close: 255.98 }, { date: '2010-05-06T07:00:00.000Z', close: 246.25 }, { date: '2010-05-07T07:00:00.000Z', close: 235.86 }, { date: '2010-05-10T07:00:00.000Z', close: 253.99 }, { date: '2010-05-11T07:00:00.000Z', close: 256.52 }, { date: '2010-05-12T07:00:00.000Z', close: 262.09 }, { date: '2010-05-13T07:00:00.000Z', close: 258.36 }, { date: '2010-05-14T07:00:00.000Z', close: 253.82 }, { date: '2010-05-17T07:00:00.000Z', close: 254.22 }, { date: '2010-05-18T07:00:00.000Z', close: 252.36 }, { date: '2010-05-19T07:00:00.000Z', close: 248.34 }, { date: '2010-05-20T07:00:00.000Z', close: 237.76 }, { date: '2010-05-21T07:00:00.000Z', close: 242.32 }, { date: '2010-05-24T07:00:00.000Z', close: 246.76 }, { date: '2010-05-25T07:00:00.000Z', close: 245.22 }, { date: '2010-05-26T07:00:00.000Z', close: 244.11 }, { date: '2010-05-27T07:00:00.000Z', close: 253.35 }, { date: '2010-05-28T07:00:00.000Z', close: 256.88 }, { date: '2010-05-31T07:00:00.000Z', close: 256.88 }, { date: '2010-06-01T07:00:00.000Z', close: 260.83 }, { date: '2010-06-02T07:00:00.000Z', close: 263.95 }, { date: '2010-06-03T07:00:00.000Z', close: 263.12 }, { date: '2010-06-04T07:00:00.000Z', close: 255.96 }, { date: '2010-06-07T07:00:00.000Z', close: 250.94 }, { date: '2010-06-08T07:00:00.000Z', close: 249.33 }, { date: '2010-06-09T07:00:00.000Z', close: 243.2 }, { date: '2010-06-10T07:00:00.000Z', close: 250.51 }, { date: '2010-06-11T07:00:00.000Z', close: 253.51 }, { date: '2010-06-14T07:00:00.000Z', close: 254.28 }, { date: '2010-06-15T07:00:00.000Z', close: 259.69 }, { date: '2010-06-16T07:00:00.000Z', close: 267.25 }, { date: '2010-06-17T07:00:00.000Z', close: 271.87 }, { date: '2010-06-18T07:00:00.000Z', close: 274.07 }, { date: '2010-06-21T07:00:00.000Z', close: 270.17 }, { date: '2010-06-22T07:00:00.000Z', close: 273.85 }, { date: '2010-06-23T07:00:00.000Z', close: 270.97 }, { date: '2010-06-24T07:00:00.000Z', close: 269 }, { date: '2010-06-25T07:00:00.000Z', close: 266.7 }, { date: '2010-06-28T07:00:00.000Z', close: 268.3 }, { date: '2010-06-29T07:00:00.000Z', close: 256.17 }, { date: '2010-06-30T07:00:00.000Z', close: 251.53 }, { date: '2010-07-01T07:00:00.000Z', close: 248.48 }, { date: '2010-07-02T07:00:00.000Z', close: 246.94 }, { date: '2010-07-05T07:00:00.000Z', close: 246.94 }, { date: '2010-07-06T07:00:00.000Z', close: 248.63 }, { date: '2010-07-07T07:00:00.000Z', close: 258.66 }, { date: '2010-07-08T07:00:00.000Z', close: 258.09 }, { date: '2010-07-09T07:00:00.000Z', close: 259.62 }, { date: '2010-07-12T07:00:00.000Z', close: 257.28 }, { date: '2010-07-13T07:00:00.000Z', close: 251.8 }, { date: '2010-07-14T07:00:00.000Z', close: 252.73 }, { date: '2010-07-15T07:00:00.000Z', close: 251.45 }, { date: '2010-07-16T07:00:00.000Z', close: 249.9 }, { date: '2010-07-19T07:00:00.000Z', close: 245.58 }, { date: '2010-07-20T07:00:00.000Z', close: 251.89 }, { date: '2010-07-21T07:00:00.000Z', close: 254.24 }, { date: '2010-07-22T07:00:00.000Z', close: 259.02 }, { date: '2010-07-23T07:00:00.000Z', close: 259.94 }, { date: '2010-07-26T07:00:00.000Z', close: 259.28 }, { date: '2010-07-27T07:00:00.000Z', close: 264.08 }, { date: '2010-07-28T07:00:00.000Z', close: 260.96 }, { date: '2010-07-29T07:00:00.000Z', close: 258.11 }, { date: '2010-07-30T07:00:00.000Z', close: 257.25 }, { date: '2010-08-02T07:00:00.000Z', close: 261.85 }, { date: '2010-08-03T07:00:00.000Z', close: 261.93 }, { date: '2010-08-04T07:00:00.000Z', close: 262.98 }, { date: '2010-08-05T07:00:00.000Z', close: 261.7 }, { date: '2010-08-06T07:00:00.000Z', close: 260.09 }, { date: '2010-08-09T07:00:00.000Z', close: 261.75 }, { date: '2010-08-10T07:00:00.000Z', close: 259.41 }, { date: '2010-08-11T07:00:00.000Z', close: 250.19 }, { date: '2010-08-12T07:00:00.000Z', close: 251.79 }, { date: '2010-08-13T07:00:00.000Z', close: 249.1 }, { date: '2010-08-16T07:00:00.000Z', close: 247.64 }, { date: '2010-08-17T07:00:00.000Z', close: 251.97 }, { date: '2010-08-18T07:00:00.000Z', close: 253.07 }, { date: '2010-08-19T07:00:00.000Z', close: 249.88 }, { date: '2010-08-20T07:00:00.000Z', close: 249.64 }, { date: '2010-08-23T07:00:00.000Z', close: 245.8 }, { date: '2010-08-24T07:00:00.000Z', close: 239.93 }, { date: '2010-08-25T07:00:00.000Z', close: 242.89 }, { date: '2010-08-26T07:00:00.000Z', close: 240.28 }, { date: '2010-08-27T07:00:00.000Z', close: 241.62 }, { date: '2010-08-30T07:00:00.000Z', close: 242.5 }, { date: '2010-08-31T07:00:00.000Z', close: 243.1 }, { date: '2010-09-01T07:00:00.000Z', close: 250.33 }, { date: '2010-09-02T07:00:00.000Z', close: 252.17 }, { date: '2010-09-03T07:00:00.000Z', close: 258.77 }, { date: '2010-09-06T07:00:00.000Z', close: 258.77 }, { date: '2010-09-07T07:00:00.000Z', close: 257.81 }, { date: '2010-09-08T07:00:00.000Z', close: 262.92 }, { date: '2010-09-09T07:00:00.000Z', close: 263.07 }, { date: '2010-09-10T07:00:00.000Z', close: 263.41 }, { date: '2010-09-13T07:00:00.000Z', close: 267.04 }, { date: '2010-09-14T07:00:00.000Z', close: 268.06 }, { date: '2010-09-15T07:00:00.000Z', close: 270.22 }, { date: '2010-09-16T07:00:00.000Z', close: 276.57 }, { date: '2010-09-17T07:00:00.000Z', close: 275.37 }, { date: '2010-09-20T07:00:00.000Z', close: 283.23 }, { date: '2010-09-21T07:00:00.000Z', close: 283.77 }, { date: '2010-09-22T07:00:00.000Z', close: 287.75 }, { date: '2010-09-23T07:00:00.000Z', close: 288.92 }, { date: '2010-09-24T07:00:00.000Z', close: 292.32 }, { date: '2010-09-27T07:00:00.000Z', close: 291.16 }, { date: '2010-09-28T07:00:00.000Z', close: 286.86 }, { date: '2010-09-29T07:00:00.000Z', close: 287.37 }, { date: '2010-09-30T07:00:00.000Z', close: 283.75 }, { date: '2010-10-01T07:00:00.000Z', close: 282.52 }, { date: '2010-10-04T07:00:00.000Z', close: 278.64 }, { date: '2010-10-05T07:00:00.000Z', close: 288.94 }, { date: '2010-10-06T07:00:00.000Z', close: 289.19 }, { date: '2010-10-07T07:00:00.000Z', close: 289.22 }, { date: '2010-10-08T07:00:00.000Z', close: 294.07 }, { date: '2010-10-11T07:00:00.000Z', close: 295.36 }, { date: '2010-10-12T07:00:00.000Z', close: 298.54 }, { date: '2010-10-13T07:00:00.000Z', close: 300.14 }, { date: '2010-10-14T07:00:00.000Z', close: 302.31 }, { date: '2010-10-15T07:00:00.000Z', close: 314.74 }, { date: '2010-10-18T07:00:00.000Z', close: 318 }, { date: '2010-10-19T07:00:00.000Z', close: 309.49 }, { date: '2010-10-20T07:00:00.000Z', close: 310.53 }, { date: '2010-10-21T07:00:00.000Z', close: 309.52 }, { date: '2010-10-22T07:00:00.000Z', close: 307.47 }, { date: '2010-10-25T07:00:00.000Z', close: 308.84 }, { date: '2010-10-26T07:00:00.000Z', close: 308.05 }, { date: '2010-10-27T07:00:00.000Z', close: 307.83 }, { date: '2010-10-28T07:00:00.000Z', close: 305.24 }, { date: '2010-10-29T07:00:00.000Z', close: 300.98 }, { date: '2010-11-01T07:00:00.000Z', close: 304.18 }, { date: '2010-11-02T07:00:00.000Z', close: 309.36 }, { date: '2010-11-03T07:00:00.000Z', close: 312.8 }, { date: '2010-11-04T07:00:00.000Z', close: 318.27 }, { date: '2010-11-05T07:00:00.000Z', close: 317.13 }, { date: '2010-11-08T08:00:00.000Z', close: 318.62 }, { date: '2010-11-09T08:00:00.000Z', close: 316.08 }, { date: '2010-11-10T08:00:00.000Z', close: 318.03 }, { date: '2010-11-11T08:00:00.000Z', close: 316.66 }, { date: '2010-11-12T08:00:00.000Z', close: 308.03 }, { date: '2010-11-15T08:00:00.000Z', close: 307.04 }, { date: '2010-11-16T08:00:00.000Z', close: 301.59 }, { date: '2010-11-17T08:00:00.000Z', close: 300.5 }, { date: '2010-11-18T08:00:00.000Z', close: 308.43 }, { date: '2010-11-19T08:00:00.000Z', close: 306.73 }, { date: '2010-11-22T08:00:00.000Z', close: 313.36 }, { date: '2010-11-23T08:00:00.000Z', close: 308.73 }, { date: '2010-11-24T08:00:00.000Z', close: 314.8 }, { date: '2010-11-26T08:00:00.000Z', close: 315 }, { date: '2010-11-29T08:00:00.000Z', close: 316.87 }, { date: '2010-11-30T08:00:00.000Z', close: 311.15 }, { date: '2010-12-01T08:00:00.000Z', close: 316.4 }, { date: '2010-12-02T08:00:00.000Z', close: 318.15 }, { date: '2010-12-03T08:00:00.000Z', close: 317.44 }, { date: '2010-12-06T08:00:00.000Z', close: 320.15 }, { date: '2010-12-07T08:00:00.000Z', close: 318.21 }, { date: '2010-12-08T08:00:00.000Z', close: 321.01 }, { date: '2010-12-09T08:00:00.000Z', close: 319.76 }, { date: '2010-12-10T08:00:00.000Z', close: 320.56 }, { date: '2010-12-13T08:00:00.000Z', close: 321.67 }, { date: '2010-12-14T08:00:00.000Z', close: 320.29 }, { date: '2010-12-15T08:00:00.000Z', close: 320.36 }, { date: '2010-12-16T08:00:00.000Z', close: 321.25 }, { date: '2010-12-17T08:00:00.000Z', close: 320.61 }, { date: '2010-12-20T08:00:00.000Z', close: 322.21 }, { date: '2010-12-21T08:00:00.000Z', close: 324.2 }, { date: '2010-12-22T08:00:00.000Z', close: 325.16 }, { date: '2010-12-23T08:00:00.000Z', close: 323.6 }, { date: '2010-12-27T08:00:00.000Z', close: 324.68 }, { date: '2010-12-28T08:00:00.000Z', close: 325.47 }, { date: '2010-12-29T08:00:00.000Z', close: 325.29 }, { date: '2010-12-30T08:00:00.000Z', close: 323.66 }, { date: '2010-12-31T08:00:00.000Z', close: 322.56 }, { date: '2011-01-03T08:00:00.000Z', close: 329.57 }, { date: '2011-01-04T08:00:00.000Z', close: 331.29 }, { date: '2011-01-05T08:00:00.000Z', close: 334 }, { date: '2011-01-06T08:00:00.000Z', close: 333.73 }, { date: '2011-01-07T08:00:00.000Z', close: 336.12 }, { date: '2011-01-10T08:00:00.000Z', close: 342.46 }, { date: '2011-01-11T08:00:00.000Z', close: 341.64 }, { date: '2011-01-12T08:00:00.000Z', close: 344.42 }, { date: '2011-01-13T08:00:00.000Z', close: 345.68 }, { date: '2011-01-14T08:00:00.000Z', close: 348.48 }, { date: '2011-01-18T08:00:00.000Z', close: 340.65 }, { date: '2011-01-19T08:00:00.000Z', close: 338.84 }, { date: '2011-01-20T08:00:00.000Z', close: 332.68 }, { date: '2011-01-21T08:00:00.000Z', close: 326.72 }, { date: '2011-01-24T08:00:00.000Z', close: 337.45 }, { date: '2011-01-25T08:00:00.000Z', close: 341.4 }, { date: '2011-01-26T08:00:00.000Z', close: 343.85 }, { date: '2011-01-27T08:00:00.000Z', close: 343.21 }, { date: '2011-01-28T08:00:00.000Z', close: 336.1 }, { date: '2011-01-31T08:00:00.000Z', close: 339.32 }, { date: '2011-02-01T08:00:00.000Z', close: 345.03 }, { date: '2011-02-02T08:00:00.000Z', close: 344.32 }, { date: '2011-02-03T08:00:00.000Z', close: 343.44 }, { date: '2011-02-04T08:00:00.000Z', close: 346.5 }, { date: '2011-02-07T08:00:00.000Z', close: 351.88 }, { date: '2011-02-08T08:00:00.000Z', close: 355.2 }, { date: '2011-02-09T08:00:00.000Z', close: 358.16 }, { date: '2011-02-10T08:00:00.000Z', close: 354.54 }, { date: '2011-02-11T08:00:00.000Z', close: 356.85 }, { date: '2011-02-14T08:00:00.000Z', close: 359.18 }, { date: '2011-02-15T08:00:00.000Z', close: 359.9 }, { date: '2011-02-16T08:00:00.000Z', close: 363.13 }, { date: '2011-02-17T08:00:00.000Z', close: 358.3 }, { date: '2011-02-18T08:00:00.000Z', close: 350.56 }, { date: '2011-02-22T08:00:00.000Z', close: 338.61 }, { date: '2011-02-23T08:00:00.000Z', close: 342.62 }, { date: '2011-02-24T08:00:00.000Z', close: 342.88 }, { date: '2011-02-25T08:00:00.000Z', close: 348.16 }, { date: '2011-02-28T08:00:00.000Z', close: 353.21 }, { date: '2011-03-01T08:00:00.000Z', close: 349.31 }, { date: '2011-03-02T08:00:00.000Z', close: 352.12 }, { date: '2011-03-03T08:00:00.000Z', close: 359.56 }, { date: '2011-03-04T08:00:00.000Z', close: 360 }, { date: '2011-03-07T08:00:00.000Z', close: 355.36 }, { date: '2011-03-08T08:00:00.000Z', close: 355.76 }, { date: '2011-03-09T08:00:00.000Z', close: 352.47 }, { date: '2011-03-10T08:00:00.000Z', close: 346.67 }, { date: '2011-03-11T08:00:00.000Z', close: 351.99 }, { date: '2011-03-14T07:00:00.000Z', close: 353.56 }, { date: '2011-03-15T07:00:00.000Z', close: 345.43 }, { date: '2011-03-16T07:00:00.000Z', close: 330.01 }, { date: '2011-03-17T07:00:00.000Z', close: 334.64 }, { date: '2011-03-18T07:00:00.000Z', close: 330.67 }, { date: '2011-03-21T07:00:00.000Z', close: 339.3 }, { date: '2011-03-22T07:00:00.000Z', close: 341.2 }, { date: '2011-03-23T07:00:00.000Z', close: 339.19 }, { date: '2011-03-24T07:00:00.000Z', close: 344.97 }, { date: '2011-03-25T07:00:00.000Z', close: 351.54 }, { date: '2011-03-28T07:00:00.000Z', close: 350.44 }, { date: '2011-03-29T07:00:00.000Z', close: 350.96 }, { date: '2011-03-30T07:00:00.000Z', close: 348.63 }, { date: '2011-03-31T07:00:00.000Z', close: 348.51 }, { date: '2011-04-01T07:00:00.000Z', close: 344.56 }, { date: '2011-04-04T07:00:00.000Z', close: 341.19 }, { date: '2011-04-05T07:00:00.000Z', close: 338.89 }, { date: '2011-04-06T07:00:00.000Z', close: 338.04 }, { date: '2011-04-07T07:00:00.000Z', close: 338.08 }, { date: '2011-04-08T07:00:00.000Z', close: 335.06 }, { date: '2011-04-11T07:00:00.000Z', close: 330.8 }, { date: '2011-04-12T07:00:00.000Z', close: 332.4 }, { date: '2011-04-13T07:00:00.000Z', close: 336.13 }, { date: '2011-04-14T07:00:00.000Z', close: 332.42 }, { date: '2011-04-15T07:00:00.000Z', close: 327.46 }, { date: '2011-04-18T07:00:00.000Z', close: 331.85 }, { date: '2011-04-19T07:00:00.000Z', close: 337.86 }, { date: '2011-04-20T07:00:00.000Z', close: 342.41 }, { date: '2011-04-21T07:00:00.000Z', close: 350.7 }, { date: '2011-04-25T07:00:00.000Z', close: 353.01 }, { date: '2011-04-26T07:00:00.000Z', close: 350.42 }, { date: '2011-04-27T07:00:00.000Z', close: 350.15 }, { date: '2011-04-28T07:00:00.000Z', close: 346.75 }, { date: '2011-04-29T07:00:00.000Z', close: 350.13 }, { date: '2011-05-02T07:00:00.000Z', close: 346.28 }, { date: '2011-05-03T07:00:00.000Z', close: 348.2 }, { date: '2011-05-04T07:00:00.000Z', close: 349.57 }, { date: '2011-05-05T07:00:00.000Z', close: 346.75 }, { date: '2011-05-06T07:00:00.000Z', close: 346.66 }, { date: '2011-05-09T07:00:00.000Z', close: 347.6 }, { date: '2011-05-10T07:00:00.000Z', close: 349.45 }, { date: '2011-05-11T07:00:00.000Z', close: 347.23 }, { date: '2011-05-12T07:00:00.000Z', close: 346.57 }, { date: '2011-05-13T07:00:00.000Z', close: 340.5 }, { date: '2011-05-16T07:00:00.000Z', close: 333.3 }, { date: '2011-05-17T07:00:00.000Z', close: 336.14 }, { date: '2011-05-18T07:00:00.000Z', close: 339.87 }, { date: '2011-05-19T07:00:00.000Z', close: 340.53 }, { date: '2011-05-20T07:00:00.000Z', close: 335.22 }, { date: '2011-05-23T07:00:00.000Z', close: 334.4 }, { date: '2011-05-24T07:00:00.000Z', close: 332.19 }, { date: '2011-05-25T07:00:00.000Z', close: 336.78 }, { date: '2011-05-26T07:00:00.000Z', close: 335 }, { date: '2011-05-27T07:00:00.000Z', close: 337.41 }, { date: '2011-05-31T07:00:00.000Z', close: 347.83 }, { date: '2011-06-01T07:00:00.000Z', close: 345.51 }, { date: '2011-06-02T07:00:00.000Z', close: 346.1 }, { date: '2011-06-03T07:00:00.000Z', close: 343.44 }, { date: '2011-06-06T07:00:00.000Z', close: 338.04 }, { date: '2011-06-07T07:00:00.000Z', close: 332.04 }, { date: '2011-06-08T07:00:00.000Z', close: 332.24 }, { date: '2011-06-09T07:00:00.000Z', close: 331.49 }, { date: '2011-06-10T07:00:00.000Z', close: 325.9 }, { date: '2011-06-13T07:00:00.000Z', close: 326.6 }, { date: '2011-06-14T07:00:00.000Z', close: 332.44 }, { date: '2011-06-15T07:00:00.000Z', close: 326.75 }, { date: '2011-06-16T07:00:00.000Z', close: 325.16 }, { date: '2011-06-17T07:00:00.000Z', close: 320.26 }, { date: '2011-06-20T07:00:00.000Z', close: 315.32 }, { date: '2011-06-21T07:00:00.000Z', close: 325.3 }, { date: '2011-06-22T07:00:00.000Z', close: 322.61 }, { date: '2011-06-23T07:00:00.000Z', close: 331.23 }, { date: '2011-06-24T07:00:00.000Z', close: 326.35 }, { date: '2011-06-27T07:00:00.000Z', close: 332.04 }, { date: '2011-06-28T07:00:00.000Z', close: 335.26 }, { date: '2011-06-29T07:00:00.000Z', close: 334.04 }, { date: '2011-06-30T07:00:00.000Z', close: 335.67 }, { date: '2011-07-01T07:00:00.000Z', close: 343.26 }, { date: '2011-07-05T07:00:00.000Z', close: 349.43 }, { date: '2011-07-06T07:00:00.000Z', close: 351.76 }, { date: '2011-07-07T07:00:00.000Z', close: 357.2 }, { date: '2011-07-08T07:00:00.000Z', close: 359.71 }, { date: '2011-07-11T07:00:00.000Z', close: 354 }, { date: '2011-07-12T07:00:00.000Z', close: 353.75 }, { date: '2011-07-13T07:00:00.000Z', close: 358.02 }, { date: '2011-07-14T07:00:00.000Z', close: 357.77 }, { date: '2011-07-15T07:00:00.000Z', close: 364.92 }, { date: '2011-07-18T07:00:00.000Z', close: 373.8 }, { date: '2011-07-19T07:00:00.000Z', close: 376.85 }, { date: '2011-07-20T07:00:00.000Z', close: 386.9 }, { date: '2011-07-21T07:00:00.000Z', close: 387.29 }, { date: '2011-07-22T07:00:00.000Z', close: 393.3 }, { date: '2011-07-25T07:00:00.000Z', close: 398.5 }, { date: '2011-07-26T07:00:00.000Z', close: 403.41 }, { date: '2011-07-27T07:00:00.000Z', close: 392.59 }, { date: '2011-07-28T07:00:00.000Z', close: 391.82 }, { date: '2011-07-29T07:00:00.000Z', close: 390.48 }, { date: '2011-08-01T07:00:00.000Z', close: 396.75 }, { date: '2011-08-02T07:00:00.000Z', close: 388.91 }, { date: '2011-08-03T07:00:00.000Z', close: 392.57 }, { date: '2011-08-04T07:00:00.000Z', close: 377.37 }, { date: '2011-08-05T07:00:00.000Z', close: 373.62 }, { date: '2011-08-08T07:00:00.000Z', close: 353.21 }, { date: '2011-08-09T07:00:00.000Z', close: 374.01 }, { date: '2011-08-10T07:00:00.000Z', close: 363.69 }, { date: '2011-08-11T07:00:00.000Z', close: 373.7 }, { date: '2011-08-12T07:00:00.000Z', close: 376.99 }, { date: '2011-08-15T07:00:00.000Z', close: 383.41 }, { date: '2011-08-16T07:00:00.000Z', close: 380.48 }, { date: '2011-08-17T07:00:00.000Z', close: 380.44 }, { date: '2011-08-18T07:00:00.000Z', close: 366.05 }, { date: '2011-08-19T07:00:00.000Z', close: 356.03 }, { date: '2011-08-22T07:00:00.000Z', close: 356.44 }, { date: '2011-08-23T07:00:00.000Z', close: 373.6 }, { date: '2011-08-24T07:00:00.000Z', close: 376.18 }, { date: '2011-08-25T07:00:00.000Z', close: 373.72 }, { date: '2011-08-26T07:00:00.000Z', close: 383.58 }, { date: '2011-08-29T07:00:00.000Z', close: 389.97 }, { date: '2011-08-30T07:00:00.000Z', close: 389.99 }, { date: '2011-08-31T07:00:00.000Z', close: 384.83 }, { date: '2011-09-01T07:00:00.000Z', close: 381.03 }, { date: '2011-09-02T07:00:00.000Z', close: 374.05 }, { date: '2011-09-06T07:00:00.000Z', close: 379.74 }, { date: '2011-09-07T07:00:00.000Z', close: 383.93 }, { date: '2011-09-08T07:00:00.000Z', close: 384.14 }, { date: '2011-09-09T07:00:00.000Z', close: 377.48 }, { date: '2011-09-12T07:00:00.000Z', close: 379.94 }, { date: '2011-09-13T07:00:00.000Z', close: 384.62 }, { date: '2011-09-14T07:00:00.000Z', close: 389.3 }, { date: '2011-09-15T07:00:00.000Z', close: 392.96 }, { date: '2011-09-16T07:00:00.000Z', close: 400.5 }, { date: '2011-09-19T07:00:00.000Z', close: 411.63 }, { date: '2011-09-20T07:00:00.000Z', close: 413.45 }, { date: '2011-09-21T07:00:00.000Z', close: 412.14 }, { date: '2011-09-22T07:00:00.000Z', close: 401.82 }, { date: '2011-09-23T07:00:00.000Z', close: 404.3 }, { date: '2011-09-26T07:00:00.000Z', close: 403.17 }, { date: '2011-09-27T07:00:00.000Z', close: 399.26 }, { date: '2011-09-28T07:00:00.000Z', close: 397.01 }, { date: '2011-09-29T07:00:00.000Z', close: 390.57 }, { date: '2011-09-30T07:00:00.000Z', close: 381.32 }, { date: '2011-10-03T07:00:00.000Z', close: 374.6 }, { date: '2011-10-04T07:00:00.000Z', close: 372.5 }, { date: '2011-10-05T07:00:00.000Z', close: 378.25 }, { date: '2011-10-06T07:00:00.000Z', close: 377.37 }, { date: '2011-10-07T07:00:00.000Z', close: 369.8 }, { date: '2011-10-10T07:00:00.000Z', close: 388.81 }, { date: '2011-10-11T07:00:00.000Z', close: 400.29 }, { date: '2011-10-12T07:00:00.000Z', close: 402.19 }, { date: '2011-10-13T07:00:00.000Z', close: 408.43 }, { date: '2011-10-14T07:00:00.000Z', close: 422 }, { date: '2011-10-17T07:00:00.000Z', close: 419.99 }, { date: '2011-10-18T07:00:00.000Z', close: 422.24 }, { date: '2011-10-19T07:00:00.000Z', close: 398.62 }, { date: '2011-10-20T07:00:00.000Z', close: 395.31 }, { date: '2011-10-21T07:00:00.000Z', close: 392.87 }, { date: '2011-10-24T07:00:00.000Z', close: 405.77 }, { date: '2011-10-25T07:00:00.000Z', close: 397.77 }, { date: '2011-10-26T07:00:00.000Z', close: 400.6 }, { date: '2011-10-27T07:00:00.000Z', close: 404.69 }, { date: '2011-10-28T07:00:00.000Z', close: 404.95 }, { date: '2011-10-31T07:00:00.000Z', close: 404.78 }, { date: '2011-11-01T07:00:00.000Z', close: 396.51 }, { date: '2011-11-02T07:00:00.000Z', close: 397.41 }, { date: '2011-11-03T07:00:00.000Z', close: 403.07 }, { date: '2011-11-04T07:00:00.000Z', close: 400.24 }, { date: '2011-11-07T08:00:00.000Z', close: 399.73 }, { date: '2011-11-08T08:00:00.000Z', close: 406.23 }, { date: '2011-11-09T08:00:00.000Z', close: 395.28 }, { date: '2011-11-10T08:00:00.000Z', close: 385.22 }, { date: '2011-11-11T08:00:00.000Z', close: 384.62 }, { date: '2011-11-14T08:00:00.000Z', close: 379.26 }, { date: '2011-11-15T08:00:00.000Z', close: 388.83 }, { date: '2011-11-16T08:00:00.000Z', close: 384.77 }, { date: '2011-11-17T08:00:00.000Z', close: 377.41 }, { date: '2011-11-18T08:00:00.000Z', close: 374.94 }, { date: '2011-11-21T08:00:00.000Z', close: 369.01 }, { date: '2011-11-22T08:00:00.000Z', close: 376.51 }, { date: '2011-11-23T08:00:00.000Z', close: 366.99 }, { date: '2011-11-25T08:00:00.000Z', close: 363.57 }, { date: '2011-11-28T08:00:00.000Z', close: 376.12 }, { date: '2011-11-29T08:00:00.000Z', close: 373.2 }, { date: '2011-11-30T08:00:00.000Z', close: 382.2 }, { date: '2011-12-01T08:00:00.000Z', close: 387.93 }, { date: '2011-12-02T08:00:00.000Z', close: 389.7 }, { date: '2011-12-05T08:00:00.000Z', close: 393.01 }, { date: '2011-12-06T08:00:00.000Z', close: 390.95 }, { date: '2011-12-07T08:00:00.000Z', close: 389.09 }, { date: '2011-12-08T08:00:00.000Z', close: 390.66 }, { date: '2011-12-09T08:00:00.000Z', close: 393.62 }, { date: '2011-12-12T08:00:00.000Z', close: 391.84 }, { date: '2011-12-13T08:00:00.000Z', close: 388.81 }, { date: '2011-12-14T08:00:00.000Z', close: 380.19 }, { date: '2011-12-15T08:00:00.000Z', close: 378.94 }, { date: '2011-12-16T08:00:00.000Z', close: 381.02 }, { date: '2011-12-19T08:00:00.000Z', close: 382.21 }, { date: '2011-12-20T08:00:00.000Z', close: 395.95 }, { date: '2011-12-21T08:00:00.000Z', close: 396.44 }, { date: '2011-12-22T08:00:00.000Z', close: 398.55 }, { date: '2011-12-23T08:00:00.000Z', close: 403.43 }, { date: '2011-12-27T08:00:00.000Z', close: 406.53 }, { date: '2011-12-28T08:00:00.000Z', close: 402.64 }, { date: '2011-12-29T08:00:00.000Z', close: 405.12 }, { date: '2011-12-30T08:00:00.000Z', close: 405 }, { date: '2012-01-03T08:00:00.000Z', close: 411.23 }, { date: '2012-01-04T08:00:00.000Z', close: 413.44 }, { date: '2012-01-05T08:00:00.000Z', close: 418.03 }, { date: '2012-01-06T08:00:00.000Z', close: 422.4 }, { date: '2012-01-09T08:00:00.000Z', close: 421.73 }, { date: '2012-01-10T08:00:00.000Z', close: 423.24 }, { date: '2012-01-11T08:00:00.000Z', close: 422.55 }, { date: '2012-01-12T08:00:00.000Z', close: 421.39 }, { date: '2012-01-13T08:00:00.000Z', close: 419.81 }, { date: '2012-01-17T08:00:00.000Z', close: 424.7 }, { date: '2012-01-18T08:00:00.000Z', close: 429.11 }, { date: '2012-01-19T08:00:00.000Z', close: 427.75 }, { date: '2012-01-20T08:00:00.000Z', close: 420.3 }, { date: '2012-01-23T08:00:00.000Z', close: 427.41 }, { date: '2012-01-24T08:00:00.000Z', close: 420.41 }, { date: '2012-01-25T08:00:00.000Z', close: 446.66 }, { date: '2012-01-26T08:00:00.000Z', close: 444.63 }, { date: '2012-01-27T08:00:00.000Z', close: 447.28 }, { date: '2012-01-30T08:00:00.000Z', close: 453.01 }, { date: '2012-01-31T08:00:00.000Z', close: 456.48 }, { date: '2012-02-01T08:00:00.000Z', close: 456.19 }, { date: '2012-02-02T08:00:00.000Z', close: 455.12 }, { date: '2012-02-03T08:00:00.000Z', close: 459.68 }, { date: '2012-02-06T08:00:00.000Z', close: 463.97 }, { date: '2012-02-07T08:00:00.000Z', close: 468.83 }, { date: '2012-02-08T08:00:00.000Z', close: 476.68 }, { date: '2012-02-09T08:00:00.000Z', close: 493.17 }, { date: '2012-02-10T08:00:00.000Z', close: 493.42 }, { date: '2012-02-13T08:00:00.000Z', close: 502.6 }, { date: '2012-02-14T08:00:00.000Z', close: 509.46 }, { date: '2012-02-15T08:00:00.000Z', close: 497.67 }, { date: '2012-02-16T08:00:00.000Z', close: 502.21 }, { date: '2012-02-17T08:00:00.000Z', close: 502.12 }, { date: '2012-02-21T08:00:00.000Z', close: 514.85 }, { date: '2012-02-22T08:00:00.000Z', close: 513.04 }, { date: '2012-02-23T08:00:00.000Z', close: 516.39 }, { date: '2012-02-24T08:00:00.000Z', close: 522.41 }, { date: '2012-02-27T08:00:00.000Z', close: 525.76 }, { date: '2012-02-28T08:00:00.000Z', close: 535.41 }, { date: '2012-02-29T08:00:00.000Z', close: 542.44 }, { date: '2012-03-01T08:00:00.000Z', close: 544.47 }, { date: '2012-03-02T08:00:00.000Z', close: 545.18 }, { date: '2012-03-05T08:00:00.000Z', close: 533.16 }, { date: '2012-03-06T08:00:00.000Z', close: 530.26 }, { date: '2012-03-07T08:00:00.000Z', close: 530.69 }, { date: '2012-03-08T08:00:00.000Z', close: 541.99 }, { date: '2012-03-09T08:00:00.000Z', close: 545.17 }, { date: '2012-03-12T07:00:00.000Z', close: 552 }, { date: '2012-03-13T07:00:00.000Z', close: 568.1 }, { date: '2012-03-14T07:00:00.000Z', close: 589.58 }, { date: '2012-03-15T07:00:00.000Z', close: 585.56 }, { date: '2012-03-16T07:00:00.000Z', close: 585.57 }, { date: '2012-03-19T07:00:00.000Z', close: 601.1 }, { date: '2012-03-20T07:00:00.000Z', close: 605.96 }, { date: '2012-03-21T07:00:00.000Z', close: 602.5 }, { date: '2012-03-22T07:00:00.000Z', close: 599.34 }, { date: '2012-03-23T07:00:00.000Z', close: 596.05 }, { date: '2012-03-26T07:00:00.000Z', close: 606.98 }, { date: '2012-03-27T07:00:00.000Z', close: 614.48 }, { date: '2012-03-28T07:00:00.000Z', close: 617.62 }, { date: '2012-03-29T07:00:00.000Z', close: 609.86 }, { date: '2012-03-30T07:00:00.000Z', close: 599.55 }, { date: '2012-04-02T07:00:00.000Z', close: 618.63 }, { date: '2012-04-03T07:00:00.000Z', close: 629.32 }, { date: '2012-04-04T07:00:00.000Z', close: 624.31 }, { date: '2012-04-05T07:00:00.000Z', close: 633.68 }, { date: '2012-04-09T07:00:00.000Z', close: 636.23 }, { date: '2012-04-10T07:00:00.000Z', close: 628.44 }, { date: '2012-04-11T07:00:00.000Z', close: 626.2 }, { date: '2012-04-12T07:00:00.000Z', close: 622.77 }, { date: '2012-04-13T07:00:00.000Z', close: 605.23 }, { date: '2012-04-16T07:00:00.000Z', close: 580.13 }, { date: '2012-04-17T07:00:00.000Z', close: 609.7 }, { date: '2012-04-18T07:00:00.000Z', close: 608.34 }, { date: '2012-04-19T07:00:00.000Z', close: 587.44 }, { date: '2012-04-20T07:00:00.000Z', close: 572.98 }, { date: '2012-04-23T07:00:00.000Z', close: 571.7 }, { date: '2012-04-24T07:00:00.000Z', close: 560.28 }, { date: '2012-04-25T07:00:00.000Z', close: 610 }, { date: '2012-04-26T07:00:00.000Z', close: 607.7 }, { date: '2012-04-27T07:00:00.000Z', close: 603 }, { date: '2012-04-30T07:00:00.000Z', close: 583.98 }, { date: '2012-05-01T07:00:00.000Z', close: 582.13 }];

/***/ }),

/***/ "./node_modules/@vx/mock-data/build/mocks/browserUsage.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [{
  date: '2015 Jun 15',
  'Google Chrome': '48.09',
  'Internet Explorer': '24.14',
  Firefox: '18.82',
  Safari: '7.46',
  'Microsoft Edge': '0.03',
  Opera: '1.32',
  Mozilla: '0.12',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Jun 16',
  'Google Chrome': '48',
  'Internet Explorer': '24.19',
  Firefox: '18.96',
  Safari: '7.36',
  'Microsoft Edge': '0.03',
  Opera: '1.32',
  Mozilla: '0.12',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Jun 17',
  'Google Chrome': '47.87',
  'Internet Explorer': '24.44',
  Firefox: '18.91',
  Safari: '7.27',
  'Microsoft Edge': '0.03',
  Opera: '1.36',
  Mozilla: '0.12',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Jun 18',
  'Google Chrome': '48.22',
  'Internet Explorer': '23.83',
  Firefox: '19.16',
  Safari: '7.24',
  'Microsoft Edge': '0.04',
  Opera: '1.39',
  Mozilla: '0.12',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Jun 19',
  'Google Chrome': '47.91',
  'Internet Explorer': '23.86',
  Firefox: '19.35',
  Safari: '7.31',
  'Microsoft Edge': '0.04',
  Opera: '1.41',
  Mozilla: '0.12',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Jun 20',
  'Google Chrome': '48.78',
  'Internet Explorer': '21.14',
  Firefox: '19.66',
  Safari: '8.42',
  'Microsoft Edge': '0.05',
  Opera: '1.83',
  Mozilla: '0.1',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Jun 21',
  'Google Chrome': '49.43',
  'Internet Explorer': '20.55',
  Firefox: '19.42',
  Safari: '8.66',
  'Microsoft Edge': '0.05',
  Opera: '1.75',
  Mozilla: '0.12',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Jun 22',
  'Google Chrome': '48.98',
  'Internet Explorer': '23.47',
  Firefox: '18.84',
  Safari: '7.25',
  'Microsoft Edge': '0.04',
  Opera: '1.28',
  Mozilla: '0.12',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Jun 23',
  'Google Chrome': '48.69',
  'Internet Explorer': '23.76',
  Firefox: '18.89',
  Safari: '7.22',
  'Microsoft Edge': '0.04',
  Opera: '1.27',
  Mozilla: '0.11',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Jun 24',
  'Google Chrome': '49.17',
  'Internet Explorer': '23.35',
  Firefox: '18.91',
  Safari: '7.09',
  'Microsoft Edge': '0.04',
  Opera: '1.32',
  Mozilla: '0.12',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Jun 25',
  'Google Chrome': '49.32',
  'Internet Explorer': '23.39',
  Firefox: '18.76',
  Safari: '7.03',
  'Microsoft Edge': '0.04',
  Opera: '1.34',
  Mozilla: '0.11',
  'Other/Unknown': '0'
}, {
  date: '2015 Jun 26',
  'Google Chrome': '49.39',
  'Internet Explorer': '23.11',
  Firefox: '18.84',
  Safari: '7.14',
  'Microsoft Edge': '0.04',
  Opera: '1.37',
  Mozilla: '0.1',
  'Other/Unknown': '0'
}, {
  date: '2015 Jun 27',
  'Google Chrome': '49.77',
  'Internet Explorer': '20.68',
  Firefox: '19.23',
  Safari: '8.46',
  'Microsoft Edge': '0.05',
  Opera: '1.71',
  Mozilla: '0.09',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Jun 28',
  'Google Chrome': '50.07',
  'Internet Explorer': '20.41',
  Firefox: '18.91',
  Safari: '8.77',
  'Microsoft Edge': '0.05',
  Opera: '1.69',
  Mozilla: '0.1',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Jun 29',
  'Google Chrome': '49.32',
  'Internet Explorer': '23.3',
  Firefox: '18.54',
  Safari: '7.4',
  'Microsoft Edge': '0.04',
  Opera: '1.27',
  Mozilla: '0.11',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Jun 30',
  'Google Chrome': '49.99',
  'Internet Explorer': '22.94',
  Firefox: '18.45',
  Safari: '7.07',
  'Microsoft Edge': '0.07',
  Opera: '1.32',
  Mozilla: '0.13',
  'Other/Unknown': '0.02'
}, {
  date: '2015 Jul 1',
  'Google Chrome': '50.22',
  'Internet Explorer': '22.79',
  Firefox: '18.46',
  Safari: '6.95',
  'Microsoft Edge': '0.07',
  Opera: '1.37',
  Mozilla: '0.12',
  'Other/Unknown': '0.02'
}, {
  date: '2015 Jul 2',
  'Google Chrome': '50.33',
  'Internet Explorer': '22.59',
  Firefox: '18.74',
  Safari: '6.69',
  'Microsoft Edge': '0.07',
  Opera: '1.45',
  Mozilla: '0.12',
  'Other/Unknown': '0.02'
}, {
  date: '2015 Jul 3',
  'Google Chrome': '50.4',
  'Internet Explorer': '21.29',
  Firefox: '19.28',
  Safari: '7.28',
  'Microsoft Edge': '0.08',
  Opera: '1.54',
  Mozilla: '0.11',
  'Other/Unknown': '0.02'
}, {
  date: '2015 Jul 4',
  'Google Chrome': '50.83',
  'Internet Explorer': '20.02',
  Firefox: '19.12',
  Safari: '7.99',
  'Microsoft Edge': '0.08',
  Opera: '1.82',
  Mozilla: '0.11',
  'Other/Unknown': '0.02'
}, {
  date: '2015 Jul 5',
  'Google Chrome': '51.6',
  'Internet Explorer': '19.6',
  Firefox: '18.43',
  Safari: '8.58',
  'Microsoft Edge': '0.07',
  Opera: '1.62',
  Mozilla: '0.1',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Jul 6',
  'Google Chrome': '50.53',
  'Internet Explorer': '22.64',
  Firefox: '18.04',
  Safari: '7.33',
  'Microsoft Edge': '0.07',
  Opera: '1.27',
  Mozilla: '0.11',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Jul 7',
  'Google Chrome': '50.01',
  'Internet Explorer': '23.02',
  Firefox: '18.32',
  Safari: '7.25',
  'Microsoft Edge': '0.07',
  Opera: '1.25',
  Mozilla: '0.06',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Jul 8',
  'Google Chrome': '49.52',
  'Internet Explorer': '23.17',
  Firefox: '18.55',
  Safari: '7.31',
  'Microsoft Edge': '0.07',
  Opera: '1.32',
  Mozilla: '0.05',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Jul 9',
  'Google Chrome': '49.31',
  'Internet Explorer': '23.24',
  Firefox: '18.7',
  Safari: '7.22',
  'Microsoft Edge': '0.08',
  Opera: '1.39',
  Mozilla: '0.05',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Jul 10',
  'Google Chrome': '48.4',
  'Internet Explorer': '23.68',
  Firefox: '18.97',
  Safari: '7.37',
  'Microsoft Edge': '0.09',
  Opera: '1.43',
  Mozilla: '0.05',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Jul 11',
  'Google Chrome': '48.87',
  'Internet Explorer': '21.22',
  Firefox: '19.33',
  Safari: '8.65',
  'Microsoft Edge': '0.1',
  Opera: '1.76',
  Mozilla: '0.06',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Jul 12',
  'Google Chrome': '49.4',
  'Internet Explorer': '20.87',
  Firefox: '18.84',
  Safari: '8.99',
  'Microsoft Edge': '0.09',
  Opera: '1.73',
  Mozilla: '0.07',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Jul 13',
  'Google Chrome': '49.12',
  'Internet Explorer': '23.35',
  Firefox: '18.49',
  Safari: '7.51',
  'Microsoft Edge': '0.07',
  Opera: '1.39',
  Mozilla: '0.05',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Jul 14',
  'Google Chrome': '49.36',
  'Internet Explorer': '23.2',
  Firefox: '18.48',
  Safari: '7.48',
  'Microsoft Edge': '0.08',
  Opera: '1.35',
  Mozilla: '0.05',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Jul 15',
  'Google Chrome': '48.88',
  'Internet Explorer': '23.73',
  Firefox: '18.46',
  Safari: '7.44',
  'Microsoft Edge': '0.09',
  Opera: '1.34',
  Mozilla: '0.05',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Jul 16',
  'Google Chrome': '48.76',
  'Internet Explorer': '23.77',
  Firefox: '18.5',
  Safari: '7.43',
  'Microsoft Edge': '0.09',
  Opera: '1.4',
  Mozilla: '0.05',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Jul 17',
  'Google Chrome': '47.58',
  'Internet Explorer': '24.54',
  Firefox: '18.76',
  Safari: '7.53',
  'Microsoft Edge': '0.09',
  Opera: '1.43',
  Mozilla: '0.06',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Jul 18',
  'Google Chrome': '48.06',
  'Internet Explorer': '21.89',
  Firefox: '19.14',
  Safari: '8.99',
  'Microsoft Edge': '0.11',
  Opera: '1.74',
  Mozilla: '0.07',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Jul 19',
  'Google Chrome': '48.39',
  'Internet Explorer': '21.5',
  Firefox: '19',
  Safari: '9.23',
  'Microsoft Edge': '0.11',
  Opera: '1.7',
  Mozilla: '0.07',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Jul 20',
  'Google Chrome': '48.32',
  'Internet Explorer': '23.91',
  Firefox: '18.62',
  Safari: '7.68',
  'Microsoft Edge': '0.09',
  Opera: '1.32',
  Mozilla: '0.06',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Jul 21',
  'Google Chrome': '47.81',
  'Internet Explorer': '24.98',
  Firefox: '18.34',
  Safari: '7.52',
  'Microsoft Edge': '0.08',
  Opera: '1.2',
  Mozilla: '0.06',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Jul 22',
  'Google Chrome': '48.28',
  'Internet Explorer': '24.4',
  Firefox: '18.45',
  Safari: '7.44',
  'Microsoft Edge': '0.08',
  Opera: '1.29',
  Mozilla: '0.06',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Jul 23',
  'Google Chrome': '48.41',
  'Internet Explorer': '24.2',
  Firefox: '18.57',
  Safari: '7.35',
  'Microsoft Edge': '0.08',
  Opera: '1.31',
  Mozilla: '0.07',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Jul 24',
  'Google Chrome': '48.22',
  'Internet Explorer': '23.96',
  Firefox: '18.67',
  Safari: '7.55',
  'Microsoft Edge': '0.1',
  Opera: '1.42',
  Mozilla: '0.06',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Jul 25',
  'Google Chrome': '48.11',
  'Internet Explorer': '21.86',
  Firefox: '19.28',
  Safari: '8.88',
  'Microsoft Edge': '0.1',
  Opera: '1.65',
  Mozilla: '0.08',
  'Other/Unknown': '0.02'
}, {
  date: '2015 Jul 26',
  'Google Chrome': '48.27',
  'Internet Explorer': '21.57',
  Firefox: '19',
  Safari: '9.38',
  'Microsoft Edge': '0.11',
  Opera: '1.59',
  Mozilla: '0.08',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Jul 27',
  'Google Chrome': '48.5',
  'Internet Explorer': '23.72',
  Firefox: '18.59',
  Safari: '7.76',
  'Microsoft Edge': '0.1',
  Opera: '1.27',
  Mozilla: '0.06',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Jul 28',
  'Google Chrome': '48.48',
  'Internet Explorer': '23.95',
  Firefox: '18.46',
  Safari: '7.61',
  'Microsoft Edge': '0.12',
  Opera: '1.31',
  Mozilla: '0.07',
  'Other/Unknown': '0.02'
}, {
  date: '2015 Jul 29',
  'Google Chrome': '48.33',
  'Internet Explorer': '23.77',
  Firefox: '18.56',
  Safari: '7.51',
  'Microsoft Edge': '0.42',
  Opera: '1.33',
  Mozilla: '0.06',
  'Other/Unknown': '0.02'
}, {
  date: '2015 Jul 30',
  'Google Chrome': '47.8',
  'Internet Explorer': '24.06',
  Firefox: '18.6',
  Safari: '7.46',
  'Microsoft Edge': '0.7',
  Opera: '1.3',
  Mozilla: '0.07',
  'Other/Unknown': '0.02'
}, {
  date: '2015 Jul 31',
  'Google Chrome': '48.41',
  'Internet Explorer': '22.9',
  Firefox: '18.88',
  Safari: '7.48',
  'Microsoft Edge': '0.84',
  Opera: '1.41',
  Mozilla: '0.07',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Aug 1',
  'Google Chrome': '48.8',
  'Internet Explorer': '20.29',
  Firefox: '19.16',
  Safari: '8.75',
  'Microsoft Edge': '1.16',
  Opera: '1.75',
  Mozilla: '0.07',
  'Other/Unknown': '0.02'
}, {
  date: '2015 Aug 2',
  'Google Chrome': '48.95',
  'Internet Explorer': '20.27',
  Firefox: '18.81',
  Safari: '9',
  'Microsoft Edge': '1.23',
  Opera: '1.65',
  Mozilla: '0.08',
  'Other/Unknown': '0.02'
}, {
  date: '2015 Aug 3',
  'Google Chrome': '49.07',
  'Internet Explorer': '22.67',
  Firefox: '18.35',
  Safari: '7.59',
  'Microsoft Edge': '0.93',
  Opera: '1.31',
  Mozilla: '0.07',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Aug 4',
  'Google Chrome': '49.18',
  'Internet Explorer': '22.72',
  Firefox: '18.31',
  Safari: '7.44',
  'Microsoft Edge': '0.95',
  Opera: '1.32',
  Mozilla: '0.07',
  'Other/Unknown': '0.02'
}, {
  date: '2015 Aug 5',
  'Google Chrome': '49.56',
  'Internet Explorer': '22.37',
  Firefox: '18.28',
  Safari: '7.38',
  'Microsoft Edge': '0.99',
  Opera: '1.34',
  Mozilla: '0.06',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Aug 6',
  'Google Chrome': '49.77',
  'Internet Explorer': '21.81',
  Firefox: '18.28',
  Safari: '7.67',
  'Microsoft Edge': '1.12',
  Opera: '1.28',
  Mozilla: '0.05',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Aug 7',
  'Google Chrome': '48.73',
  'Internet Explorer': '22.63',
  Firefox: '18.42',
  Safari: '7.5',
  'Microsoft Edge': '1.26',
  Opera: '1.39',
  Mozilla: '0.06',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Aug 8',
  'Google Chrome': '49.6',
  'Internet Explorer': '18.97',
  Firefox: '19.11',
  Safari: '8.79',
  'Microsoft Edge': '1.69',
  Opera: '1.74',
  Mozilla: '0.09',
  'Other/Unknown': '0.02'
}, {
  date: '2015 Aug 9',
  'Google Chrome': '49.68',
  'Internet Explorer': '18.85',
  Firefox: '18.71',
  Safari: '9.23',
  'Microsoft Edge': '1.72',
  Opera: '1.72',
  Mozilla: '0.08',
  'Other/Unknown': '0.02'
}, {
  date: '2015 Aug 10',
  'Google Chrome': '49.11',
  'Internet Explorer': '22.54',
  Firefox: '17.97',
  Safari: '7.64',
  'Microsoft Edge': '1.28',
  Opera: '1.39',
  Mozilla: '0.06',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Aug 11',
  'Google Chrome': '49.21',
  'Internet Explorer': '22.59',
  Firefox: '17.96',
  Safari: '7.56',
  'Microsoft Edge': '1.27',
  Opera: '1.35',
  Mozilla: '0.05',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Aug 12',
  'Google Chrome': '48.95',
  'Internet Explorer': '22.68',
  Firefox: '18.21',
  Safari: '7.44',
  'Microsoft Edge': '1.3',
  Opera: '1.35',
  Mozilla: '0.06',
  'Other/Unknown': '0.02'
}, {
  date: '2015 Aug 13',
  'Google Chrome': '49.31',
  'Internet Explorer': '22.28',
  Firefox: '18.19',
  Safari: '7.32',
  'Microsoft Edge': '1.31',
  Opera: '1.51',
  Mozilla: '0.06',
  'Other/Unknown': '0.02'
}, {
  date: '2015 Aug 14',
  'Google Chrome': '49.08',
  'Internet Explorer': '21.98',
  Firefox: '18.38',
  Safari: '7.47',
  'Microsoft Edge': '1.43',
  Opera: '1.56',
  Mozilla: '0.07',
  'Other/Unknown': '0.02'
}, {
  date: '2015 Aug 15',
  'Google Chrome': '49.1',
  'Internet Explorer': '19.47',
  Firefox: '18.77',
  Safari: '8.85',
  'Microsoft Edge': '1.87',
  Opera: '1.86',
  Mozilla: '0.08',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Aug 16',
  'Google Chrome': '49.5',
  'Internet Explorer': '19.33',
  Firefox: '18.42',
  Safari: '9.12',
  'Microsoft Edge': '1.83',
  Opera: '1.72',
  Mozilla: '0.08',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Aug 17',
  'Google Chrome': '49.42',
  'Internet Explorer': '22.12',
  Firefox: '18.06',
  Safari: '7.5',
  'Microsoft Edge': '1.36',
  Opera: '1.44',
  Mozilla: '0.08',
  'Other/Unknown': '0.02'
}, {
  date: '2015 Aug 18',
  'Google Chrome': '49.46',
  'Internet Explorer': '22.16',
  Firefox: '18.05',
  Safari: '7.43',
  'Microsoft Edge': '1.41',
  Opera: '1.41',
  Mozilla: '0.06',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Aug 19',
  'Google Chrome': '49.51',
  'Internet Explorer': '22.21',
  Firefox: '17.93',
  Safari: '7.46',
  'Microsoft Edge': '1.39',
  Opera: '1.42',
  Mozilla: '0.07',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Aug 20',
  'Google Chrome': '49.43',
  'Internet Explorer': '22.38',
  Firefox: '17.91',
  Safari: '7.31',
  'Microsoft Edge': '1.42',
  Opera: '1.47',
  Mozilla: '0.06',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Aug 21',
  'Google Chrome': '49.44',
  'Internet Explorer': '21.79',
  Firefox: '18.3',
  Safari: '7.39',
  'Microsoft Edge': '1.51',
  Opera: '1.47',
  Mozilla: '0.08',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Aug 22',
  'Google Chrome': '49.79',
  'Internet Explorer': '19.29',
  Firefox: '18.51',
  Safari: '8.67',
  'Microsoft Edge': '1.91',
  Opera: '1.74',
  Mozilla: '0.08',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Aug 23',
  'Google Chrome': '50.12',
  'Internet Explorer': '18.91',
  Firefox: '18.1',
  Safari: '9.11',
  'Microsoft Edge': '1.89',
  Opera: '1.8',
  Mozilla: '0.07',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Aug 24',
  'Google Chrome': '49.34',
  'Internet Explorer': '22.2',
  Firefox: '18.01',
  Safari: '7.62',
  'Microsoft Edge': '1.48',
  Opera: '1.29',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2015 Aug 25',
  'Google Chrome': '49.21',
  'Internet Explorer': '22.51',
  Firefox: '17.91',
  Safari: '7.47',
  'Microsoft Edge': '1.47',
  Opera: '1.38',
  Mozilla: '0.05',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Aug 26',
  'Google Chrome': '49.06',
  'Internet Explorer': '22.58',
  Firefox: '17.92',
  Safari: '7.52',
  'Microsoft Edge': '1.47',
  Opera: '1.39',
  Mozilla: '0.04',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Aug 27',
  'Google Chrome': '48.89',
  'Internet Explorer': '22.63',
  Firefox: '17.98',
  Safari: '7.57',
  'Microsoft Edge': '1.51',
  Opera: '1.35',
  Mozilla: '0.06',
  'Other/Unknown': '0.02'
}, {
  date: '2015 Aug 28',
  'Google Chrome': '48.69',
  'Internet Explorer': '22.44',
  Firefox: '18.2',
  Safari: '7.56',
  'Microsoft Edge': '1.61',
  Opera: '1.43',
  Mozilla: '0.06',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Aug 29',
  'Google Chrome': '48.64',
  'Internet Explorer': '19.87',
  Firefox: '18.43',
  Safari: '9.16',
  'Microsoft Edge': '2.07',
  Opera: '1.74',
  Mozilla: '0.08',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Aug 30',
  'Google Chrome': '49.72',
  'Internet Explorer': '18.84',
  Firefox: '17.88',
  Safari: '9.76',
  'Microsoft Edge': '2.03',
  Opera: '1.69',
  Mozilla: '0.08',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Aug 31',
  'Google Chrome': '49.43',
  'Internet Explorer': '21.94',
  Firefox: '17.82',
  Safari: '7.87',
  'Microsoft Edge': '1.57',
  Opera: '1.31',
  Mozilla: '0.05',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Sep 1',
  'Google Chrome': '49.65',
  'Internet Explorer': '21.91',
  Firefox: '17.95',
  Safari: '7.52',
  'Microsoft Edge': '1.52',
  Opera: '1.39',
  Mozilla: '0.06',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Sep 2',
  'Google Chrome': '49.73',
  'Internet Explorer': '21.85',
  Firefox: '18.02',
  Safari: '7.49',
  'Microsoft Edge': '1.53',
  Opera: '1.3',
  Mozilla: '0.06',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Sep 3',
  'Google Chrome': '49.59',
  'Internet Explorer': '21.97',
  Firefox: '17.88',
  Safari: '7.6',
  'Microsoft Edge': '1.58',
  Opera: '1.31',
  Mozilla: '0.06',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Sep 4',
  'Google Chrome': '49.52',
  'Internet Explorer': '21.64',
  Firefox: '18.06',
  Safari: '7.62',
  'Microsoft Edge': '1.67',
  Opera: '1.41',
  Mozilla: '0.06',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Sep 5',
  'Google Chrome': '50.28',
  'Internet Explorer': '18.93',
  Firefox: '18.19',
  Safari: '8.71',
  'Microsoft Edge': '2.13',
  Opera: '1.69',
  Mozilla: '0.07',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Sep 6',
  'Google Chrome': '50.25',
  'Internet Explorer': '18.67',
  Firefox: '18.2',
  Safari: '9.04',
  'Microsoft Edge': '2.09',
  Opera: '1.67',
  Mozilla: '0.07',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Sep 7',
  'Google Chrome': '49.83',
  'Internet Explorer': '19.8',
  Firefox: '18.39',
  Safari: '8.63',
  'Microsoft Edge': '1.86',
  Opera: '1.43',
  Mozilla: '0.05',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Sep 8',
  'Google Chrome': '50',
  'Internet Explorer': '21.8',
  Firefox: '17.62',
  Safari: '7.66',
  'Microsoft Edge': '1.55',
  Opera: '1.31',
  Mozilla: '0.06',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Sep 9',
  'Google Chrome': '49.81',
  'Internet Explorer': '21.89',
  Firefox: '17.58',
  Safari: '7.83',
  'Microsoft Edge': '1.59',
  Opera: '1.25',
  Mozilla: '0.05',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Sep 10',
  'Google Chrome': '49.65',
  'Internet Explorer': '21.93',
  Firefox: '17.74',
  Safari: '7.82',
  'Microsoft Edge': '1.6',
  Opera: '1.19',
  Mozilla: '0.05',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Sep 11',
  'Google Chrome': '49.75',
  'Internet Explorer': '21.71',
  Firefox: '17.88',
  Safari: '7.64',
  'Microsoft Edge': '1.67',
  Opera: '1.29',
  Mozilla: '0.05',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Sep 12',
  'Google Chrome': '49.86',
  'Internet Explorer': '19.04',
  Firefox: '17.96',
  Safari: '9.3',
  'Microsoft Edge': '2.21',
  Opera: '1.56',
  Mozilla: '0.06',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Sep 13',
  'Google Chrome': '50.1',
  'Internet Explorer': '18.71',
  Firefox: '17.76',
  Safari: '9.69',
  'Microsoft Edge': '2.19',
  Opera: '1.49',
  Mozilla: '0.06',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Sep 14',
  'Google Chrome': '49.91',
  'Internet Explorer': '21.55',
  Firefox: '17.87',
  Safari: '7.74',
  'Microsoft Edge': '1.66',
  Opera: '1.21',
  Mozilla: '0.05',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Sep 15',
  'Google Chrome': '50.1',
  'Internet Explorer': '21.34',
  Firefox: '17.96',
  Safari: '7.63',
  'Microsoft Edge': '1.66',
  Opera: '1.25',
  Mozilla: '0.05',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Sep 16',
  'Google Chrome': '50.6',
  'Internet Explorer': '21.53',
  Firefox: '17.44',
  Safari: '7.56',
  'Microsoft Edge': '1.59',
  Opera: '1.23',
  Mozilla: '0.05',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Sep 17',
  'Google Chrome': '50.59',
  'Internet Explorer': '21.59',
  Firefox: '17.55',
  Safari: '7.37',
  'Microsoft Edge': '1.6',
  Opera: '1.24',
  Mozilla: '0.05',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Sep 18',
  'Google Chrome': '50.57',
  'Internet Explorer': '21.75',
  Firefox: '17.43',
  Safari: '7.17',
  'Microsoft Edge': '1.7',
  Opera: '1.32',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2015 Sep 19',
  'Google Chrome': '51.33',
  'Internet Explorer': '18.77',
  Firefox: '17.63',
  Safari: '8.37',
  'Microsoft Edge': '2.17',
  Opera: '1.66',
  Mozilla: '0.05',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Sep 20',
  'Google Chrome': '51.41',
  'Internet Explorer': '18.15',
  Firefox: '17.55',
  Safari: '9.09',
  'Microsoft Edge': '2.17',
  Opera: '1.58',
  Mozilla: '0.05',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Sep 21',
  'Google Chrome': '50.76',
  'Internet Explorer': '21.38',
  Firefox: '17.41',
  Safari: '7.52',
  'Microsoft Edge': '1.67',
  Opera: '1.22',
  Mozilla: '0.04',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Sep 22',
  'Google Chrome': '50.6',
  'Internet Explorer': '21.48',
  Firefox: '17.55',
  Safari: '7.41',
  'Microsoft Edge': '1.7',
  Opera: '1.22',
  Mozilla: '0.04',
  'Other/Unknown': '0'
}, {
  date: '2015 Sep 23',
  'Google Chrome': '50.56',
  'Internet Explorer': '21.5',
  Firefox: '17.52',
  Safari: '7.42',
  'Microsoft Edge': '1.71',
  Opera: '1.25',
  Mozilla: '0.04',
  'Other/Unknown': '0'
}, {
  date: '2015 Sep 24',
  'Google Chrome': '50.66',
  'Internet Explorer': '21.34',
  Firefox: '17.52',
  Safari: '7.45',
  'Microsoft Edge': '1.7',
  Opera: '1.29',
  Mozilla: '0.04',
  'Other/Unknown': '0'
}, {
  date: '2015 Sep 25',
  'Google Chrome': '50.87',
  'Internet Explorer': '20.84',
  Firefox: '17.84',
  Safari: '7.24',
  'Microsoft Edge': '1.78',
  Opera: '1.39',
  Mozilla: '0.04',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Sep 26',
  'Google Chrome': '51.66',
  'Internet Explorer': '17.77',
  Firefox: '18.01',
  Safari: '8.52',
  'Microsoft Edge': '2.28',
  Opera: '1.71',
  Mozilla: '0.05',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Sep 27',
  'Google Chrome': '51.99',
  'Internet Explorer': '17.24',
  Firefox: '17.71',
  Safari: '9.17',
  'Microsoft Edge': '2.25',
  Opera: '1.6',
  Mozilla: '0.04',
  'Other/Unknown': '0'
}, {
  date: '2015 Sep 28',
  'Google Chrome': '50.77',
  'Internet Explorer': '21.23',
  Firefox: '17.52',
  Safari: '7.49',
  'Microsoft Edge': '1.73',
  Opera: '1.22',
  Mozilla: '0.03',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Sep 29',
  'Google Chrome': '50.75',
  'Internet Explorer': '21.39',
  Firefox: '17.47',
  Safari: '7.38',
  'Microsoft Edge': '1.74',
  Opera: '1.22',
  Mozilla: '0.04',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Sep 30',
  'Google Chrome': '50.8',
  'Internet Explorer': '21.34',
  Firefox: '17.4',
  Safari: '7.46',
  'Microsoft Edge': '1.74',
  Opera: '1.23',
  Mozilla: '0.03',
  'Other/Unknown': '0'
}, {
  date: '2015 Oct 1',
  'Google Chrome': '50.82',
  'Internet Explorer': '21.39',
  Firefox: '17.19',
  Safari: '7.55',
  'Microsoft Edge': '1.78',
  Opera: '1.24',
  Mozilla: '0.03',
  'Other/Unknown': '0'
}, {
  date: '2015 Oct 2',
  'Google Chrome': '50.93',
  'Internet Explorer': '21.17',
  Firefox: '17.32',
  Safari: '7.38',
  'Microsoft Edge': '1.86',
  Opera: '1.32',
  Mozilla: '0.03',
  'Other/Unknown': '0'
}, {
  date: '2015 Oct 3',
  'Google Chrome': '51.69',
  'Internet Explorer': '18.12',
  Firefox: '17.51',
  Safari: '8.61',
  'Microsoft Edge': '2.34',
  Opera: '1.68',
  Mozilla: '0.03',
  'Other/Unknown': '0'
}, {
  date: '2015 Oct 4',
  'Google Chrome': '52.06',
  'Internet Explorer': '17.59',
  Firefox: '17.18',
  Safari: '9.25',
  'Microsoft Edge': '2.32',
  Opera: '1.58',
  Mozilla: '0.03',
  'Other/Unknown': '0'
}, {
  date: '2015 Oct 5',
  'Google Chrome': '51.4',
  'Internet Explorer': '20.73',
  Firefox: '17.24',
  Safari: '7.56',
  'Microsoft Edge': '1.81',
  Opera: '1.22',
  Mozilla: '0.03',
  'Other/Unknown': '0'
}, {
  date: '2015 Oct 6',
  'Google Chrome': '51.81',
  'Internet Explorer': '20.35',
  Firefox: '17.31',
  Safari: '7.46',
  'Microsoft Edge': '1.79',
  Opera: '1.25',
  Mozilla: '0.03',
  'Other/Unknown': '0'
}, {
  date: '2015 Oct 7',
  'Google Chrome': '51.98',
  'Internet Explorer': '20.18',
  Firefox: '17.29',
  Safari: '7.49',
  'Microsoft Edge': '1.76',
  Opera: '1.27',
  Mozilla: '0.03',
  'Other/Unknown': '0'
}, {
  date: '2015 Oct 8',
  'Google Chrome': '50.97',
  'Internet Explorer': '20.56',
  Firefox: '17.72',
  Safari: '7.63',
  'Microsoft Edge': '1.79',
  Opera: '1.3',
  Mozilla: '0.03',
  'Other/Unknown': '0'
}, {
  date: '2015 Oct 9',
  'Google Chrome': '50.94',
  'Internet Explorer': '20.42',
  Firefox: '17.8',
  Safari: '7.52',
  'Microsoft Edge': '1.88',
  Opera: '1.4',
  Mozilla: '0.03',
  'Other/Unknown': '0'
}, {
  date: '2015 Oct 10',
  'Google Chrome': '51.02',
  'Internet Explorer': '17.74',
  Firefox: '18.26',
  Safari: '8.79',
  'Microsoft Edge': '2.38',
  Opera: '1.75',
  Mozilla: '0.03',
  'Other/Unknown': '0'
}, {
  date: '2015 Oct 11',
  'Google Chrome': '52.07',
  'Internet Explorer': '16.83',
  Firefox: '17.77',
  Safari: '9.23',
  'Microsoft Edge': '2.32',
  Opera: '1.72',
  Mozilla: '0.04',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Oct 12',
  'Google Chrome': '50.9',
  'Internet Explorer': '19.94',
  Firefox: '17.55',
  Safari: '8.27',
  'Microsoft Edge': '1.94',
  Opera: '1.35',
  Mozilla: '0.04',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Oct 13',
  'Google Chrome': '51.52',
  'Internet Explorer': '19.66',
  Firefox: '17.71',
  Safari: '7.76',
  'Microsoft Edge': '1.78',
  Opera: '1.51',
  Mozilla: '0.04',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Oct 14',
  'Google Chrome': '51.75',
  'Internet Explorer': '19.37',
  Firefox: '17.85',
  Safari: '7.72',
  'Microsoft Edge': '1.82',
  Opera: '1.44',
  Mozilla: '0.04',
  'Other/Unknown': '0'
}, {
  date: '2015 Oct 15',
  'Google Chrome': '51.37',
  'Internet Explorer': '19.66',
  Firefox: '17.92',
  Safari: '7.68',
  'Microsoft Edge': '1.87',
  Opera: '1.46',
  Mozilla: '0.03',
  'Other/Unknown': '0'
}, {
  date: '2015 Oct 16',
  'Google Chrome': '51.29',
  'Internet Explorer': '19.56',
  Firefox: '18.06',
  Safari: '7.62',
  'Microsoft Edge': '1.91',
  Opera: '1.52',
  Mozilla: '0.03',
  'Other/Unknown': '0'
}, {
  date: '2015 Oct 17',
  'Google Chrome': '52.47',
  'Internet Explorer': '15.8',
  Firefox: '18.39',
  Safari: '8.96',
  'Microsoft Edge': '2.46',
  Opera: '1.88',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2015 Oct 18',
  'Google Chrome': '51.88',
  'Internet Explorer': '16.03',
  Firefox: '18.07',
  Safari: '9.75',
  'Microsoft Edge': '2.42',
  Opera: '1.79',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2015 Oct 19',
  'Google Chrome': '51.48',
  'Internet Explorer': '19.69',
  Firefox: '17.68',
  Safari: '7.87',
  'Microsoft Edge': '1.83',
  Opera: '1.41',
  Mozilla: '0.03',
  'Other/Unknown': '0'
}, {
  date: '2015 Oct 20',
  'Google Chrome': '51.58',
  'Internet Explorer': '19.73',
  Firefox: '17.63',
  Safari: '7.85',
  'Microsoft Edge': '1.8',
  Opera: '1.38',
  Mozilla: '0.03',
  'Other/Unknown': '0'
}, {
  date: '2015 Oct 21',
  'Google Chrome': '52.04',
  'Internet Explorer': '20.14',
  Firefox: '16.99',
  Safari: '7.63',
  'Microsoft Edge': '1.81',
  Opera: '1.34',
  Mozilla: '0.03',
  'Other/Unknown': '0'
}, {
  date: '2015 Oct 22',
  'Google Chrome': '51.62',
  'Internet Explorer': '20.1',
  Firefox: '17.28',
  Safari: '7.75',
  'Microsoft Edge': '1.86',
  Opera: '1.35',
  Mozilla: '0.04',
  'Other/Unknown': '0'
}, {
  date: '2015 Oct 23',
  'Google Chrome': '51.87',
  'Internet Explorer': '19.88',
  Firefox: '17.17',
  Safari: '7.64',
  'Microsoft Edge': '1.94',
  Opera: '1.45',
  Mozilla: '0.04',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Oct 24',
  'Google Chrome': '52.62',
  'Internet Explorer': '16.25',
  Firefox: '17.52',
  Safari: '9.28',
  'Microsoft Edge': '2.5',
  Opera: '1.78',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2015 Oct 25',
  'Google Chrome': '52.64',
  'Internet Explorer': '16.1',
  Firefox: '17.4',
  Safari: '9.69',
  'Microsoft Edge': '2.46',
  Opera: '1.67',
  Mozilla: '0.04',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Oct 26',
  'Google Chrome': '52.29',
  'Internet Explorer': '19.72',
  Firefox: '17',
  Safari: '7.81',
  'Microsoft Edge': '1.88',
  Opera: '1.26',
  Mozilla: '0.03',
  'Other/Unknown': '0'
}, {
  date: '2015 Oct 27',
  'Google Chrome': '51.88',
  'Internet Explorer': '20.08',
  Firefox: '17.1',
  Safari: '7.73',
  'Microsoft Edge': '1.87',
  Opera: '1.3',
  Mozilla: '0.03',
  'Other/Unknown': '0'
}, {
  date: '2015 Oct 28',
  'Google Chrome': '51.92',
  'Internet Explorer': '19.48',
  Firefox: '17.49',
  Safari: '7.86',
  'Microsoft Edge': '1.93',
  Opera: '1.28',
  Mozilla: '0.03',
  'Other/Unknown': '0'
}, {
  date: '2015 Oct 29',
  'Google Chrome': '51.56',
  'Internet Explorer': '19.74',
  Firefox: '17.83',
  Safari: '7.64',
  'Microsoft Edge': '1.9',
  Opera: '1.31',
  Mozilla: '0.03',
  'Other/Unknown': '0'
}, {
  date: '2015 Oct 30',
  'Google Chrome': '51.8',
  'Internet Explorer': '19.42',
  Firefox: '17.86',
  Safari: '7.5',
  'Microsoft Edge': '1.99',
  Opera: '1.38',
  Mozilla: '0.03',
  'Other/Unknown': '0'
}, {
  date: '2015 Oct 31',
  'Google Chrome': '52.67',
  'Internet Explorer': '16.22',
  Firefox: '18.22',
  Safari: '8.62',
  'Microsoft Edge': '2.46',
  Opera: '1.76',
  Mozilla: '0.04',
  'Other/Unknown': '0'
}, {
  date: '2015 Nov 1',
  'Google Chrome': '52.4',
  'Internet Explorer': '15.92',
  Firefox: '17.77',
  Safari: '9.7',
  'Microsoft Edge': '2.48',
  Opera: '1.62',
  Mozilla: '0.1',
  'Other/Unknown': '0'
}, {
  date: '2015 Nov 2',
  'Google Chrome': '51.9',
  'Internet Explorer': '19.56',
  Firefox: '17.26',
  Safari: '7.93',
  'Microsoft Edge': '1.96',
  Opera: '1.32',
  Mozilla: '0.06',
  'Other/Unknown': '0'
}, {
  date: '2015 Nov 3',
  'Google Chrome': '51.95',
  'Internet Explorer': '19.83',
  Firefox: '17.41',
  Safari: '7.53',
  'Microsoft Edge': '1.89',
  Opera: '1.33',
  Mozilla: '0.06',
  'Other/Unknown': '0'
}, {
  date: '2015 Nov 4',
  'Google Chrome': '52.25',
  'Internet Explorer': '19.61',
  Firefox: '17.24',
  Safari: '7.57',
  'Microsoft Edge': '1.83',
  Opera: '1.44',
  Mozilla: '0.06',
  'Other/Unknown': '0'
}, {
  date: '2015 Nov 5',
  'Google Chrome': '51.98',
  'Internet Explorer': '19.9',
  Firefox: '17.2',
  Safari: '7.63',
  'Microsoft Edge': '1.87',
  Opera: '1.35',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2015 Nov 6',
  'Google Chrome': '51.38',
  'Internet Explorer': '20.09',
  Firefox: '17.39',
  Safari: '7.74',
  'Microsoft Edge': '1.97',
  Opera: '1.36',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2015 Nov 7',
  'Google Chrome': '52.45',
  'Internet Explorer': '16.46',
  Firefox: '17.38',
  Safari: '9.32',
  'Microsoft Edge': '2.6',
  Opera: '1.7',
  Mozilla: '0.08',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Nov 8',
  'Google Chrome': '52.61',
  'Internet Explorer': '16.12',
  Firefox: '16.97',
  Safari: '9.97',
  'Microsoft Edge': '2.55',
  Opera: '1.69',
  Mozilla: '0.08',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Nov 9',
  'Google Chrome': '51.65',
  'Internet Explorer': '20.18',
  Firefox: '16.67',
  Safari: '8.21',
  'Microsoft Edge': '1.96',
  Opera: '1.28',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2015 Nov 10',
  'Google Chrome': '51.95',
  'Internet Explorer': '19.99',
  Firefox: '16.46',
  Safari: '8.29',
  'Microsoft Edge': '1.95',
  Opera: '1.29',
  Mozilla: '0.07',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Nov 11',
  'Google Chrome': '52.74',
  'Internet Explorer': '18.91',
  Firefox: '16.38',
  Safari: '8.49',
  'Microsoft Edge': '2.04',
  Opera: '1.37',
  Mozilla: '0.06',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Nov 12',
  'Google Chrome': '52.16',
  'Internet Explorer': '19.88',
  Firefox: '16.54',
  Safari: '8.03',
  'Microsoft Edge': '1.99',
  Opera: '1.35',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2015 Nov 13',
  'Google Chrome': '52.17',
  'Internet Explorer': '19.7',
  Firefox: '16.65',
  Safari: '7.98',
  'Microsoft Edge': '2.09',
  Opera: '1.35',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2015 Nov 14',
  'Google Chrome': '52.81',
  'Internet Explorer': '16.25',
  Firefox: '17.02',
  Safari: '9.53',
  'Microsoft Edge': '2.71',
  Opera: '1.62',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2015 Nov 15',
  'Google Chrome': '52.89',
  'Internet Explorer': '15.65',
  Firefox: '16.97',
  Safari: '10.25',
  'Microsoft Edge': '2.62',
  Opera: '1.56',
  Mozilla: '0.06',
  'Other/Unknown': '0'
}, {
  date: '2015 Nov 16',
  'Google Chrome': '52.68',
  'Internet Explorer': '19.59',
  Firefox: '16.23',
  Safari: '8.22',
  'Microsoft Edge': '2',
  Opera: '1.24',
  Mozilla: '0.04',
  'Other/Unknown': '0'
}, {
  date: '2015 Nov 17',
  'Google Chrome': '52.6',
  'Internet Explorer': '19.62',
  Firefox: '16.38',
  Safari: '8.12',
  'Microsoft Edge': '1.96',
  Opera: '1.28',
  Mozilla: '0.04',
  'Other/Unknown': '0'
}, {
  date: '2015 Nov 18',
  'Google Chrome': '52.35',
  'Internet Explorer': '19.79',
  Firefox: '16.39',
  Safari: '8.12',
  'Microsoft Edge': '1.99',
  Opera: '1.33',
  Mozilla: '0.04',
  'Other/Unknown': '0'
}, {
  date: '2015 Nov 19',
  'Google Chrome': '52.37',
  'Internet Explorer': '19.81',
  Firefox: '16.46',
  Safari: '8',
  'Microsoft Edge': '2',
  Opera: '1.31',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2015 Nov 20',
  'Google Chrome': '52.2',
  'Internet Explorer': '19.55',
  Firefox: '16.74',
  Safari: '7.96',
  'Microsoft Edge': '2.11',
  Opera: '1.39',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2015 Nov 21',
  'Google Chrome': '52.7',
  'Internet Explorer': '16.03',
  Firefox: '17.04',
  Safari: '9.83',
  'Microsoft Edge': '2.72',
  Opera: '1.62',
  Mozilla: '0.06',
  'Other/Unknown': '0'
}, {
  date: '2015 Nov 22',
  'Google Chrome': '52.72',
  'Internet Explorer': '15.75',
  Firefox: '16.9',
  Safari: '10.36',
  'Microsoft Edge': '2.68',
  Opera: '1.54',
  Mozilla: '0.06',
  'Other/Unknown': '0'
}, {
  date: '2015 Nov 23',
  'Google Chrome': '52.35',
  'Internet Explorer': '19.53',
  Firefox: '16.53',
  Safari: '8.21',
  'Microsoft Edge': '2.04',
  Opera: '1.28',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2015 Nov 24',
  'Google Chrome': '52.33',
  'Internet Explorer': '19.53',
  Firefox: '16.75',
  Safari: '7.96',
  'Microsoft Edge': '2.03',
  Opera: '1.34',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2015 Nov 25',
  'Google Chrome': '52.34',
  'Internet Explorer': '19.04',
  Firefox: '17.02',
  Safari: '7.82',
  'Microsoft Edge': '2.07',
  Opera: '1.64',
  Mozilla: '0.06',
  'Other/Unknown': '0'
}, {
  date: '2015 Nov 26',
  'Google Chrome': '53.29',
  'Internet Explorer': '17.12',
  Firefox: '17.42',
  Safari: '8.12',
  'Microsoft Edge': '2.27',
  Opera: '1.7',
  Mozilla: '0.07',
  'Other/Unknown': '0'
}, {
  date: '2015 Nov 27',
  'Google Chrome': '52.46',
  'Internet Explorer': '17.83',
  Firefox: '17.12',
  Safari: '8.58',
  'Microsoft Edge': '2.49',
  Opera: '1.46',
  Mozilla: '0.06',
  'Other/Unknown': '0'
}, {
  date: '2015 Nov 28',
  'Google Chrome': '52.84',
  'Internet Explorer': '15.74',
  Firefox: '17.03',
  Safari: '9.7',
  'Microsoft Edge': '2.97',
  Opera: '1.67',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2015 Nov 29',
  'Google Chrome': '52.8',
  'Internet Explorer': '15.57',
  Firefox: '16.72',
  Safari: '10.32',
  'Microsoft Edge': '2.91',
  Opera: '1.63',
  Mozilla: '0.06',
  'Other/Unknown': '0'
}, {
  date: '2015 Nov 30',
  'Google Chrome': '52.71',
  'Internet Explorer': '19.08',
  Firefox: '16.21',
  Safari: '8.49',
  'Microsoft Edge': '2.22',
  Opera: '1.24',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2015 Dec 1',
  'Google Chrome': '52.41',
  'Internet Explorer': '19.62',
  Firefox: '16.28',
  Safari: '8.11',
  'Microsoft Edge': '2.25',
  Opera: '1.29',
  Mozilla: '0.04',
  'Other/Unknown': '0'
}, {
  date: '2015 Dec 2',
  'Google Chrome': '52.64',
  'Internet Explorer': '19.41',
  Firefox: '16.18',
  Safari: '8.1',
  'Microsoft Edge': '2.31',
  Opera: '1.31',
  Mozilla: '0.04',
  'Other/Unknown': '0'
}, {
  date: '2015 Dec 3',
  'Google Chrome': '52.37',
  'Internet Explorer': '19.3',
  Firefox: '16.4',
  Safari: '8.23',
  'Microsoft Edge': '2.31',
  Opera: '1.35',
  Mozilla: '0.04',
  'Other/Unknown': '0'
}, {
  date: '2015 Dec 4',
  'Google Chrome': '52.15',
  'Internet Explorer': '19.2',
  Firefox: '16.72',
  Safari: '7.98',
  'Microsoft Edge': '2.46',
  Opera: '1.44',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2015 Dec 5',
  'Google Chrome': '52.15',
  'Internet Explorer': '15.77',
  Firefox: '17.33',
  Safari: '9.82',
  'Microsoft Edge': '3.18',
  Opera: '1.68',
  Mozilla: '0.07',
  'Other/Unknown': '0'
}, {
  date: '2015 Dec 6',
  'Google Chrome': '52.92',
  'Internet Explorer': '15.33',
  Firefox: '16.65',
  Safari: '10.31',
  'Microsoft Edge': '3.06',
  Opera: '1.67',
  Mozilla: '0.06',
  'Other/Unknown': '0'
}, {
  date: '2015 Dec 7',
  'Google Chrome': '52.59',
  'Internet Explorer': '19.15',
  Firefox: '16.25',
  Safari: '8.36',
  'Microsoft Edge': '2.34',
  Opera: '1.26',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2015 Dec 8',
  'Google Chrome': '52.57',
  'Internet Explorer': '19.12',
  Firefox: '16.38',
  Safari: '8.21',
  'Microsoft Edge': '2.38',
  Opera: '1.28',
  Mozilla: '0.05',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Dec 9',
  'Google Chrome': '52.47',
  'Internet Explorer': '19.47',
  Firefox: '16.41',
  Safari: '7.98',
  'Microsoft Edge': '2.31',
  Opera: '1.3',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2015 Dec 10',
  'Google Chrome': '52.22',
  'Internet Explorer': '20',
  Firefox: '16.4',
  Safari: '7.73',
  'Microsoft Edge': '2.35',
  Opera: '1.25',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2015 Dec 11',
  'Google Chrome': '51.97',
  'Internet Explorer': '19.54',
  Firefox: '16.69',
  Safari: '7.91',
  'Microsoft Edge': '2.49',
  Opera: '1.34',
  Mozilla: '0.06',
  'Other/Unknown': '0'
}, {
  date: '2015 Dec 12',
  'Google Chrome': '52.03',
  'Internet Explorer': '16.49',
  Firefox: '16.84',
  Safari: '9.67',
  'Microsoft Edge': '3.18',
  Opera: '1.68',
  Mozilla: '0.1',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Dec 13',
  'Google Chrome': '52.17',
  'Internet Explorer': '16.22',
  Firefox: '16.61',
  Safari: '10.18',
  'Microsoft Edge': '3.16',
  Opera: '1.57',
  Mozilla: '0.08',
  'Other/Unknown': '0'
}, {
  date: '2015 Dec 14',
  'Google Chrome': '51.48',
  'Internet Explorer': '20.71',
  Firefox: '16.04',
  Safari: '8.12',
  'Microsoft Edge': '2.39',
  Opera: '1.21',
  Mozilla: '0.06',
  'Other/Unknown': '0'
}, {
  date: '2015 Dec 15',
  'Google Chrome': '51.64',
  'Internet Explorer': '20.54',
  Firefox: '16.11',
  Safari: '8.05',
  'Microsoft Edge': '2.37',
  Opera: '1.23',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2015 Dec 16',
  'Google Chrome': '51.32',
  'Internet Explorer': '21.04',
  Firefox: '16.04',
  Safari: '7.9',
  'Microsoft Edge': '2.45',
  Opera: '1.2',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2015 Dec 17',
  'Google Chrome': '51.03',
  'Internet Explorer': '21.29',
  Firefox: '16.13',
  Safari: '7.77',
  'Microsoft Edge': '2.46',
  Opera: '1.25',
  Mozilla: '0.06',
  'Other/Unknown': '0'
}, {
  date: '2015 Dec 18',
  'Google Chrome': '50.9',
  'Internet Explorer': '20.71',
  Firefox: '16.59',
  Safari: '7.73',
  'Microsoft Edge': '2.6',
  Opera: '1.38',
  Mozilla: '0.08',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Dec 19',
  'Google Chrome': '51.36',
  'Internet Explorer': '17.02',
  Firefox: '17.13',
  Safari: '9.36',
  'Microsoft Edge': '3.29',
  Opera: '1.75',
  Mozilla: '0.09',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Dec 20',
  'Google Chrome': '52.24',
  'Internet Explorer': '16.39',
  Firefox: '17.18',
  Safari: '9.39',
  'Microsoft Edge': '3.13',
  Opera: '1.58',
  Mozilla: '0.08',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Dec 21',
  'Google Chrome': '51.44',
  'Internet Explorer': '20.62',
  Firefox: '16.64',
  Safari: '7.45',
  'Microsoft Edge': '2.51',
  Opera: '1.28',
  Mozilla: '0.06',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Dec 22',
  'Google Chrome': '51.44',
  'Internet Explorer': '20.64',
  Firefox: '16.72',
  Safari: '7.23',
  'Microsoft Edge': '2.58',
  Opera: '1.33',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2015 Dec 23',
  'Google Chrome': '50.69',
  'Internet Explorer': '21.15',
  Firefox: '16.69',
  Safari: '7.24',
  'Microsoft Edge': '2.7',
  Opera: '1.46',
  Mozilla: '0.06',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Dec 24',
  'Google Chrome': '50.13',
  'Internet Explorer': '20.14',
  Firefox: '16.68',
  Safari: '8',
  'Microsoft Edge': '3.1',
  Opera: '1.85',
  Mozilla: '0.08',
  'Other/Unknown': '0.02'
}, {
  date: '2015 Dec 25',
  'Google Chrome': '50.55',
  'Internet Explorer': '17.4',
  Firefox: '16.92',
  Safari: '9.19',
  'Microsoft Edge': '3.73',
  Opera: '2.1',
  Mozilla: '0.09',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Dec 26',
  'Google Chrome': '50.12',
  'Internet Explorer': '17.8',
  Firefox: '16.92',
  Safari: '9.44',
  'Microsoft Edge': '3.72',
  Opera: '1.9',
  Mozilla: '0.09',
  'Other/Unknown': '0'
}, {
  date: '2015 Dec 27',
  'Google Chrome': '50.68',
  'Internet Explorer': '17.25',
  Firefox: '16.89',
  Safari: '9.55',
  'Microsoft Edge': '3.73',
  Opera: '1.81',
  Mozilla: '0.09',
  'Other/Unknown': '0'
}, {
  date: '2015 Dec 28',
  'Google Chrome': '49.89',
  'Internet Explorer': '21.09',
  Firefox: '16.22',
  Safari: '8.13',
  'Microsoft Edge': '3.21',
  Opera: '1.39',
  Mozilla: '0.07',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Dec 29',
  'Google Chrome': '50.27',
  'Internet Explorer': '20.86',
  Firefox: '16.25',
  Safari: '7.95',
  'Microsoft Edge': '3.22',
  Opera: '1.37',
  Mozilla: '0.08',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Dec 30',
  'Google Chrome': '49.85',
  'Internet Explorer': '21.28',
  Firefox: '16.26',
  Safari: '7.87',
  'Microsoft Edge': '3.29',
  Opera: '1.37',
  Mozilla: '0.08',
  'Other/Unknown': '0.01'
}, {
  date: '2015 Dec 31',
  'Google Chrome': '49.4',
  'Internet Explorer': '20.41',
  Firefox: '16.43',
  Safari: '8.52',
  'Microsoft Edge': '3.57',
  Opera: '1.59',
  Mozilla: '0.08',
  'Other/Unknown': '0.01'
}, {
  date: '2016 Jan 1',
  'Google Chrome': '50.07',
  'Internet Explorer': '16.61',
  Firefox: '17.36',
  Safari: '10.09',
  'Microsoft Edge': '4.01',
  Opera: '1.76',
  Mozilla: '0.09',
  'Other/Unknown': '0.01'
}, {
  date: '2016 Jan 2',
  'Google Chrome': '50.72',
  'Internet Explorer': '16.66',
  Firefox: '17.22',
  Safari: '9.67',
  'Microsoft Edge': '3.91',
  Opera: '1.74',
  Mozilla: '0.08',
  'Other/Unknown': '0'
}, {
  date: '2016 Jan 3',
  'Google Chrome': '51.23',
  'Internet Explorer': '16.46',
  Firefox: '16.95',
  Safari: '9.87',
  'Microsoft Edge': '3.75',
  Opera: '1.67',
  Mozilla: '0.07',
  'Other/Unknown': '0'
}, {
  date: '2016 Jan 4',
  'Google Chrome': '51.26',
  'Internet Explorer': '20.36',
  Firefox: '16.35',
  Safari: '7.84',
  'Microsoft Edge': '2.85',
  Opera: '1.29',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2016 Jan 5',
  'Google Chrome': '51.32',
  'Internet Explorer': '20.21',
  Firefox: '16.35',
  Safari: '7.89',
  'Microsoft Edge': '2.79',
  Opera: '1.36',
  Mozilla: '0.06',
  'Other/Unknown': '0'
}, {
  date: '2016 Jan 6',
  'Google Chrome': '51.81',
  'Internet Explorer': '19.86',
  Firefox: '16.2',
  Safari: '7.93',
  'Microsoft Edge': '2.76',
  Opera: '1.38',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2016 Jan 7',
  'Google Chrome': '51.85',
  'Internet Explorer': '19.82',
  Firefox: '16.31',
  Safari: '7.81',
  'Microsoft Edge': '2.76',
  Opera: '1.4',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2016 Jan 8',
  'Google Chrome': '50.99',
  'Internet Explorer': '20.36',
  Firefox: '16.55',
  Safari: '7.64',
  'Microsoft Edge': '2.9',
  Opera: '1.49',
  Mozilla: '0.06',
  'Other/Unknown': '0.01'
}, {
  date: '2016 Jan 9',
  'Google Chrome': '51.5',
  'Internet Explorer': '16.58',
  Firefox: '17.03',
  Safari: '9.38',
  'Microsoft Edge': '3.57',
  Opera: '1.86',
  Mozilla: '0.07',
  'Other/Unknown': '0.01'
}, {
  date: '2016 Jan 10',
  'Google Chrome': '51.88',
  'Internet Explorer': '15.91',
  Firefox: '17',
  Safari: '9.79',
  'Microsoft Edge': '3.52',
  Opera: '1.81',
  Mozilla: '0.07',
  'Other/Unknown': '0.01'
}, {
  date: '2016 Jan 11',
  'Google Chrome': '51.91',
  'Internet Explorer': '19.73',
  Firefox: '16.3',
  Safari: '7.93',
  'Microsoft Edge': '2.72',
  Opera: '1.37',
  Mozilla: '0.04',
  'Other/Unknown': '0'
}, {
  date: '2016 Jan 12',
  'Google Chrome': '51.99',
  'Internet Explorer': '19.63',
  Firefox: '16.35',
  Safari: '7.84',
  'Microsoft Edge': '2.74',
  Opera: '1.39',
  Mozilla: '0.07',
  'Other/Unknown': '0.01'
}, {
  date: '2016 Jan 13',
  'Google Chrome': '52.31',
  'Internet Explorer': '19.26',
  Firefox: '16.25',
  Safari: '7.95',
  'Microsoft Edge': '2.85',
  Opera: '1.33',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2016 Jan 14',
  'Google Chrome': '52.07',
  'Internet Explorer': '19.64',
  Firefox: '16.1',
  Safari: '7.95',
  'Microsoft Edge': '2.87',
  Opera: '1.32',
  Mozilla: '0.04',
  'Other/Unknown': '0'
}, {
  date: '2016 Jan 15',
  'Google Chrome': '52.21',
  'Internet Explorer': '18.83',
  Firefox: '16.42',
  Safari: '7.98',
  'Microsoft Edge': '3.04',
  Opera: '1.46',
  Mozilla: '0.06',
  'Other/Unknown': '0.01'
}, {
  date: '2016 Jan 16',
  'Google Chrome': '52.65',
  'Internet Explorer': '15.51',
  Firefox: '16.86',
  Safari: '9.5',
  'Microsoft Edge': '3.66',
  Opera: '1.75',
  Mozilla: '0.06',
  'Other/Unknown': '0'
}, {
  date: '2016 Jan 17',
  'Google Chrome': '52.48',
  'Internet Explorer': '15.69',
  Firefox: '16.61',
  Safari: '9.84',
  'Microsoft Edge': '3.66',
  Opera: '1.66',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2016 Jan 18',
  'Google Chrome': '52.07',
  'Internet Explorer': '18.91',
  Firefox: '16.31',
  Safari: '8.36',
  'Microsoft Edge': '3',
  Opera: '1.3',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2016 Jan 19',
  'Google Chrome': '52.51',
  'Internet Explorer': '19.48',
  Firefox: '16.08',
  Safari: '7.91',
  'Microsoft Edge': '2.72',
  Opera: '1.25',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2016 Jan 20',
  'Google Chrome': '52.82',
  'Internet Explorer': '19.01',
  Firefox: '16.14',
  Safari: '7.97',
  'Microsoft Edge': '2.76',
  Opera: '1.25',
  Mozilla: '0.05',
  'Other/Unknown': '0.01'
}, {
  date: '2016 Jan 21',
  'Google Chrome': '52.76',
  'Internet Explorer': '19.26',
  Firefox: '16.12',
  Safari: '7.79',
  'Microsoft Edge': '2.74',
  Opera: '1.3',
  Mozilla: '0.04',
  'Other/Unknown': '0'
}, {
  date: '2016 Jan 22',
  'Google Chrome': '52.56',
  'Internet Explorer': '18.8',
  Firefox: '16.33',
  Safari: '7.9',
  'Microsoft Edge': '2.95',
  Opera: '1.4',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2016 Jan 23',
  'Google Chrome': '52.38',
  'Internet Explorer': '15.76',
  Firefox: '16.79',
  Safari: '9.5',
  'Microsoft Edge': '3.78',
  Opera: '1.72',
  Mozilla: '0.06',
  'Other/Unknown': '0'
}, {
  date: '2016 Jan 24',
  'Google Chrome': '53.12',
  'Internet Explorer': '15.22',
  Firefox: '16.55',
  Safari: '9.83',
  'Microsoft Edge': '3.57',
  Opera: '1.65',
  Mozilla: '0.06',
  'Other/Unknown': '0'
}, {
  date: '2016 Jan 25',
  'Google Chrome': '52.55',
  'Internet Explorer': '19.12',
  Firefox: '16.15',
  Safari: '7.94',
  'Microsoft Edge': '2.89',
  Opera: '1.32',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2016 Jan 26',
  'Google Chrome': '52.45',
  'Internet Explorer': '19.49',
  Firefox: '16.03',
  Safari: '7.83',
  'Microsoft Edge': '2.87',
  Opera: '1.28',
  Mozilla: '0.04',
  'Other/Unknown': '0'
}, {
  date: '2016 Jan 27',
  'Google Chrome': '52.64',
  'Internet Explorer': '19.42',
  Firefox: '16.06',
  Safari: '7.7',
  'Microsoft Edge': '2.84',
  Opera: '1.29',
  Mozilla: '0.04',
  'Other/Unknown': '0'
}, {
  date: '2016 Jan 28',
  'Google Chrome': '51.95',
  'Internet Explorer': '19.87',
  Firefox: '16.15',
  Safari: '7.77',
  'Microsoft Edge': '2.92',
  Opera: '1.32',
  Mozilla: '0.04',
  'Other/Unknown': '0'
}, {
  date: '2016 Jan 29',
  'Google Chrome': '51.03',
  'Internet Explorer': '20',
  Firefox: '16.6',
  Safari: '7.85',
  'Microsoft Edge': '3.07',
  Opera: '1.4',
  Mozilla: '0.04',
  'Other/Unknown': '0'
}, {
  date: '2016 Jan 30',
  'Google Chrome': '50.97',
  'Internet Explorer': '16.86',
  Firefox: '17.28',
  Safari: '9.36',
  'Microsoft Edge': '3.71',
  Opera: '1.76',
  Mozilla: '0.06',
  'Other/Unknown': '0.01'
}, {
  date: '2016 Jan 31',
  'Google Chrome': '52.36',
  'Internet Explorer': '15.75',
  Firefox: '16.71',
  Safari: '9.85',
  'Microsoft Edge': '3.63',
  Opera: '1.63',
  Mozilla: '0.06',
  'Other/Unknown': '0.01'
}, {
  date: '2016 Feb 1',
  'Google Chrome': '52.62',
  'Internet Explorer': '19.09',
  Firefox: '16.1',
  Safari: '7.98',
  'Microsoft Edge': '2.88',
  Opera: '1.28',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2016 Feb 2',
  'Google Chrome': '52.48',
  'Internet Explorer': '19.25',
  Firefox: '16.25',
  Safari: '7.83',
  'Microsoft Edge': '2.85',
  Opera: '1.29',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2016 Feb 3',
  'Google Chrome': '52.47',
  'Internet Explorer': '19.16',
  Firefox: '16.16',
  Safari: '7.94',
  'Microsoft Edge': '2.91',
  Opera: '1.31',
  Mozilla: '0.04',
  'Other/Unknown': '0'
}, {
  date: '2016 Feb 4',
  'Google Chrome': '51.91',
  'Internet Explorer': '19.77',
  Firefox: '16.12',
  Safari: '7.83',
  'Microsoft Edge': '3',
  Opera: '1.31',
  Mozilla: '0.05',
  'Other/Unknown': '0.01'
}, {
  date: '2016 Feb 5',
  'Google Chrome': '51.76',
  'Internet Explorer': '19.36',
  Firefox: '16.44',
  Safari: '7.78',
  'Microsoft Edge': '3.15',
  Opera: '1.44',
  Mozilla: '0.06',
  'Other/Unknown': '0.01'
}, {
  date: '2016 Feb 6',
  'Google Chrome': '52.11',
  'Internet Explorer': '15.66',
  Firefox: '16.99',
  Safari: '9.43',
  'Microsoft Edge': '3.96',
  Opera: '1.78',
  Mozilla: '0.06',
  'Other/Unknown': '0.01'
}, {
  date: '2016 Feb 7',
  'Google Chrome': '52.41',
  'Internet Explorer': '15.14',
  Firefox: '17.12',
  Safari: '9.69',
  'Microsoft Edge': '3.81',
  Opera: '1.77',
  Mozilla: '0.06',
  'Other/Unknown': '0.01'
}, {
  date: '2016 Feb 8',
  'Google Chrome': '51.83',
  'Internet Explorer': '19.4',
  Firefox: '15.93',
  Safari: '8.38',
  'Microsoft Edge': '3.13',
  Opera: '1.27',
  Mozilla: '0.04',
  'Other/Unknown': '0'
}, {
  date: '2016 Feb 9',
  'Google Chrome': '52.01',
  'Internet Explorer': '19.2',
  Firefox: '16.01',
  Safari: '8.25',
  'Microsoft Edge': '3.09',
  Opera: '1.37',
  Mozilla: '0.06',
  'Other/Unknown': '0'
}, {
  date: '2016 Feb 10',
  'Google Chrome': '52.92',
  'Internet Explorer': '18.52',
  Firefox: '15.94',
  Safari: '8.23',
  'Microsoft Edge': '2.93',
  Opera: '1.41',
  Mozilla: '0.05',
  'Other/Unknown': '0.01'
}, {
  date: '2016 Feb 11',
  'Google Chrome': '52.71',
  'Internet Explorer': '18.9',
  Firefox: '16.17',
  Safari: '7.94',
  'Microsoft Edge': '2.88',
  Opera: '1.35',
  Mozilla: '0.05',
  'Other/Unknown': '0.01'
}, {
  date: '2016 Feb 12',
  'Google Chrome': '52.37',
  'Internet Explorer': '18.63',
  Firefox: '16.65',
  Safari: '7.84',
  'Microsoft Edge': '3.01',
  Opera: '1.45',
  Mozilla: '0.05',
  'Other/Unknown': '0.01'
}, {
  date: '2016 Feb 13',
  'Google Chrome': '52.73',
  'Internet Explorer': '14.69',
  Firefox: '17.33',
  Safari: '9.38',
  'Microsoft Edge': '3.92',
  Opera: '1.87',
  Mozilla: '0.07',
  'Other/Unknown': '0.01'
}, {
  date: '2016 Feb 14',
  'Google Chrome': '52.73',
  'Internet Explorer': '14.91',
  Firefox: '17.06',
  Safari: '9.67',
  'Microsoft Edge': '3.85',
  Opera: '1.71',
  Mozilla: '0.06',
  'Other/Unknown': '0.01'
}, {
  date: '2016 Feb 15',
  'Google Chrome': '52.68',
  'Internet Explorer': '17.65',
  Firefox: '16.58',
  Safari: '8.54',
  'Microsoft Edge': '3.2',
  Opera: '1.31',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2016 Feb 16',
  'Google Chrome': '53.18',
  'Internet Explorer': '18.24',
  Firefox: '16.32',
  Safari: '7.98',
  'Microsoft Edge': '2.93',
  Opera: '1.3',
  Mozilla: '0.05',
  'Other/Unknown': '0.01'
}, {
  date: '2016 Feb 17',
  'Google Chrome': '52.8',
  'Internet Explorer': '18.68',
  Firefox: '16.37',
  Safari: '7.83',
  'Microsoft Edge': '2.97',
  Opera: '1.3',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2016 Feb 18',
  'Google Chrome': '52.85',
  'Internet Explorer': '18.74',
  Firefox: '16.32',
  Safari: '7.74',
  'Microsoft Edge': '2.93',
  Opera: '1.37',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2016 Feb 19',
  'Google Chrome': '52.5',
  'Internet Explorer': '18.49',
  Firefox: '16.7',
  Safari: '7.75',
  'Microsoft Edge': '3.08',
  Opera: '1.43',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2016 Feb 20',
  'Google Chrome': '52.15',
  'Internet Explorer': '15.14',
  Firefox: '17.4',
  Safari: '9.45',
  'Microsoft Edge': '3.89',
  Opera: '1.9',
  Mozilla: '0.07',
  'Other/Unknown': '0.01'
}, {
  date: '2016 Feb 21',
  'Google Chrome': '52.1',
  'Internet Explorer': '14.95',
  Firefox: '17.14',
  Safari: '10.17',
  'Microsoft Edge': '3.9',
  Opera: '1.66',
  Mozilla: '0.07',
  'Other/Unknown': '0'
}, {
  date: '2016 Feb 22',
  'Google Chrome': '52.35',
  'Internet Explorer': '18.91',
  Firefox: '16.41',
  Safari: '8.05',
  'Microsoft Edge': '2.97',
  Opera: '1.25',
  Mozilla: '0.04',
  'Other/Unknown': '0'
}, {
  date: '2016 Feb 23',
  'Google Chrome': '52',
  'Internet Explorer': '19.19',
  Firefox: '16.48',
  Safari: '8.07',
  'Microsoft Edge': '2.97',
  Opera: '1.25',
  Mozilla: '0.04',
  'Other/Unknown': '0'
}, {
  date: '2016 Feb 24',
  'Google Chrome': '52.27',
  'Internet Explorer': '18.8',
  Firefox: '16.71',
  Safari: '7.93',
  'Microsoft Edge': '2.96',
  Opera: '1.28',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2016 Feb 25',
  'Google Chrome': '52.2',
  'Internet Explorer': '18.84',
  Firefox: '16.71',
  Safari: '7.91',
  'Microsoft Edge': '2.98',
  Opera: '1.31',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2016 Feb 26',
  'Google Chrome': '52.28',
  'Internet Explorer': '18.37',
  Firefox: '16.95',
  Safari: '7.86',
  'Microsoft Edge': '3.09',
  Opera: '1.39',
  Mozilla: '0.06',
  'Other/Unknown': '0'
}, {
  date: '2016 Feb 27',
  'Google Chrome': '52.63',
  'Internet Explorer': '14.89',
  Firefox: '17.29',
  Safari: '9.44',
  'Microsoft Edge': '3.9',
  Opera: '1.77',
  Mozilla: '0.06',
  'Other/Unknown': '0'
}, {
  date: '2016 Feb 28',
  'Google Chrome': '52.74',
  'Internet Explorer': '14.98',
  Firefox: '16.83',
  Safari: '9.89',
  'Microsoft Edge': '3.85',
  Opera: '1.64',
  Mozilla: '0.06',
  'Other/Unknown': '0.01'
}, {
  date: '2016 Feb 29',
  'Google Chrome': '53.2',
  'Internet Explorer': '18.53',
  Firefox: '16.18',
  Safari: '7.88',
  'Microsoft Edge': '3',
  Opera: '1.17',
  Mozilla: '0.04',
  'Other/Unknown': '0'
}, {
  date: '2016 Mar 1',
  'Google Chrome': '53.27',
  'Internet Explorer': '18.36',
  Firefox: '16.23',
  Safari: '7.99',
  'Microsoft Edge': '2.92',
  Opera: '1.18',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2016 Mar 2',
  'Google Chrome': '53.37',
  'Internet Explorer': '18.14',
  Firefox: '16.21',
  Safari: '8.14',
  'Microsoft Edge': '2.89',
  Opera: '1.19',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2016 Mar 3',
  'Google Chrome': '53.03',
  'Internet Explorer': '18.51',
  Firefox: '16.26',
  Safari: '7.98',
  'Microsoft Edge': '2.97',
  Opera: '1.22',
  Mozilla: '0.04',
  'Other/Unknown': '0'
}, {
  date: '2016 Mar 4',
  'Google Chrome': '52.47',
  'Internet Explorer': '18.63',
  Firefox: '16.48',
  Safari: '7.92',
  'Microsoft Edge': '3.13',
  Opera: '1.32',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2016 Mar 5',
  'Google Chrome': '52.43',
  'Internet Explorer': '14.9',
  Firefox: '17.03',
  Safari: '9.82',
  'Microsoft Edge': '4.04',
  Opera: '1.72',
  Mozilla: '0.06',
  'Other/Unknown': '0.01'
}, {
  date: '2016 Mar 6',
  'Google Chrome': '52.86',
  'Internet Explorer': '14.56',
  Firefox: '16.85',
  Safari: '10.1',
  'Microsoft Edge': '3.95',
  Opera: '1.63',
  Mozilla: '0.06',
  'Other/Unknown': '0'
}, {
  date: '2016 Mar 7',
  'Google Chrome': '52.59',
  'Internet Explorer': '18.9',
  Firefox: '16.25',
  Safari: '7.99',
  'Microsoft Edge': '3.01',
  Opera: '1.22',
  Mozilla: '0.04',
  'Other/Unknown': '0'
}, {
  date: '2016 Mar 8',
  'Google Chrome': '52.75',
  'Internet Explorer': '18.59',
  Firefox: '16.36',
  Safari: '7.99',
  'Microsoft Edge': '3.01',
  Opera: '1.24',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2016 Mar 9',
  'Google Chrome': '53.16',
  'Internet Explorer': '18.21',
  Firefox: '16.39',
  Safari: '7.89',
  'Microsoft Edge': '3.05',
  Opera: '1.26',
  Mozilla: '0.04',
  'Other/Unknown': '0'
}, {
  date: '2016 Mar 10',
  'Google Chrome': '52.99',
  'Internet Explorer': '18.49',
  Firefox: '16.45',
  Safari: '7.7',
  'Microsoft Edge': '3.04',
  Opera: '1.28',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2016 Mar 11',
  'Google Chrome': '52.42',
  'Internet Explorer': '18.46',
  Firefox: '16.68',
  Safari: '7.81',
  'Microsoft Edge': '3.22',
  Opera: '1.36',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2016 Mar 12',
  'Google Chrome': '51.86',
  'Internet Explorer': '15.55',
  Firefox: '17.13',
  Safari: '9.46',
  'Microsoft Edge': '4.16',
  Opera: '1.78',
  Mozilla: '0.06',
  'Other/Unknown': '0.01'
}, {
  date: '2016 Mar 13',
  'Google Chrome': '51.95',
  'Internet Explorer': '15.09',
  Firefox: '17.03',
  Safari: '10.04',
  'Microsoft Edge': '4.17',
  Opera: '1.66',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2016 Mar 14',
  'Google Chrome': '51.94',
  'Internet Explorer': '19.4',
  Firefox: '16.23',
  Safari: '8.01',
  'Microsoft Edge': '3.16',
  Opera: '1.21',
  Mozilla: '0.04',
  'Other/Unknown': '0'
}, {
  date: '2016 Mar 15',
  'Google Chrome': '52.49',
  'Internet Explorer': '18.73',
  Firefox: '16.42',
  Safari: '7.96',
  'Microsoft Edge': '3.11',
  Opera: '1.23',
  Mozilla: '0.05',
  'Other/Unknown': '0.01'
}, {
  date: '2016 Mar 16',
  'Google Chrome': '52.41',
  'Internet Explorer': '18.66',
  Firefox: '16.61',
  Safari: '7.85',
  'Microsoft Edge': '3.17',
  Opera: '1.26',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2016 Mar 17',
  'Google Chrome': '52.26',
  'Internet Explorer': '19.15',
  Firefox: '16.53',
  Safari: '7.58',
  'Microsoft Edge': '3.15',
  Opera: '1.29',
  Mozilla: '0.04',
  'Other/Unknown': '0.01'
}, {
  date: '2016 Mar 18',
  'Google Chrome': '51.98',
  'Internet Explorer': '18.86',
  Firefox: '16.76',
  Safari: '7.69',
  'Microsoft Edge': '3.3',
  Opera: '1.37',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2016 Mar 19',
  'Google Chrome': '51.89',
  'Internet Explorer': '15.61',
  Firefox: '17',
  Safari: '9.39',
  'Microsoft Edge': '4.21',
  Opera: '1.79',
  Mozilla: '0.11',
  'Other/Unknown': '0.01'
}, {
  date: '2016 Mar 20',
  'Google Chrome': '51.86',
  'Internet Explorer': '15.29',
  Firefox: '16.87',
  Safari: '9.91',
  'Microsoft Edge': '4.27',
  Opera: '1.71',
  Mozilla: '0.08',
  'Other/Unknown': '0.01'
}, {
  date: '2016 Mar 21',
  'Google Chrome': '52.74',
  'Internet Explorer': '18.37',
  Firefox: '16.28',
  Safari: '7.99',
  'Microsoft Edge': '3.22',
  Opera: '1.35',
  Mozilla: '0.04',
  'Other/Unknown': '0'
}, {
  date: '2016 Mar 22',
  'Google Chrome': '52.93',
  'Internet Explorer': '18.46',
  Firefox: '16.22',
  Safari: '7.76',
  'Microsoft Edge': '3.12',
  Opera: '1.45',
  Mozilla: '0.05',
  'Other/Unknown': '0.01'
}, {
  date: '2016 Mar 23',
  'Google Chrome': '52.65',
  'Internet Explorer': '18.47',
  Firefox: '16.28',
  Safari: '7.76',
  'Microsoft Edge': '3.22',
  Opera: '1.58',
  Mozilla: '0.03',
  'Other/Unknown': '0'
}, {
  date: '2016 Mar 24',
  'Google Chrome': '52.53',
  'Internet Explorer': '18.25',
  Firefox: '16.21',
  Safari: '8.03',
  'Microsoft Edge': '3.36',
  Opera: '1.58',
  Mozilla: '0.04',
  'Other/Unknown': '0'
}, {
  date: '2016 Mar 25',
  'Google Chrome': '52.15',
  'Internet Explorer': '16.95',
  Firefox: '16.75',
  Safari: '8.7',
  'Microsoft Edge': '3.76',
  Opera: '1.64',
  Mozilla: '0.04',
  'Other/Unknown': '0'
}, {
  date: '2016 Mar 26',
  'Google Chrome': '52.24',
  'Internet Explorer': '15.04',
  Firefox: '17.07',
  Safari: '9.52',
  'Microsoft Edge': '4.23',
  Opera: '1.85',
  Mozilla: '0.04',
  'Other/Unknown': '0'
}, {
  date: '2016 Mar 27',
  'Google Chrome': '52.56',
  'Internet Explorer': '14.27',
  Firefox: '16.98',
  Safari: '10.11',
  'Microsoft Edge': '4.26',
  Opera: '1.78',
  Mozilla: '0.04',
  'Other/Unknown': '0'
}, {
  date: '2016 Mar 28',
  'Google Chrome': '53.31',
  'Internet Explorer': '17.05',
  Firefox: '16.2',
  Safari: '8.49',
  'Microsoft Edge': '3.48',
  Opera: '1.43',
  Mozilla: '0.03',
  'Other/Unknown': '0'
}, {
  date: '2016 Mar 29',
  'Google Chrome': '52.98',
  'Internet Explorer': '17.82',
  Firefox: '16.37',
  Safari: '8.09',
  'Microsoft Edge': '3.23',
  Opera: '1.48',
  Mozilla: '0.03',
  'Other/Unknown': '0'
}, {
  date: '2016 Mar 30',
  'Google Chrome': '53.07',
  'Internet Explorer': '17.84',
  Firefox: '16.37',
  Safari: '7.96',
  'Microsoft Edge': '3.27',
  Opera: '1.45',
  Mozilla: '0.04',
  'Other/Unknown': '0'
}, {
  date: '2016 Mar 31',
  'Google Chrome': '53.4',
  'Internet Explorer': '17.73',
  Firefox: '16.24',
  Safari: '7.84',
  'Microsoft Edge': '3.3',
  Opera: '1.43',
  Mozilla: '0.04',
  'Other/Unknown': '0'
}, {
  date: '2016 Apr 1',
  'Google Chrome': '52.72',
  'Internet Explorer': '18.26',
  Firefox: '16.4',
  Safari: '7.72',
  'Microsoft Edge': '3.4',
  Opera: '1.47',
  Mozilla: '0.04',
  'Other/Unknown': '0'
}, {
  date: '2016 Apr 2',
  'Google Chrome': '52.99',
  'Internet Explorer': '14.44',
  Firefox: '16.96',
  Safari: '9.33',
  'Microsoft Edge': '4.35',
  Opera: '1.87',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2016 Apr 3',
  'Google Chrome': '53.29',
  'Internet Explorer': '14.13',
  Firefox: '16.7',
  Safari: '9.8',
  'Microsoft Edge': '4.2',
  Opera: '1.82',
  Mozilla: '0.06',
  'Other/Unknown': '0'
}, {
  date: '2016 Apr 4',
  'Google Chrome': '53.65',
  'Internet Explorer': '17.74',
  Firefox: '16.06',
  Safari: '7.79',
  'Microsoft Edge': '3.22',
  Opera: '1.5',
  Mozilla: '0.03',
  'Other/Unknown': '0'
}, {
  date: '2016 Apr 5',
  'Google Chrome': '53.21',
  'Internet Explorer': '18.25',
  Firefox: '16.05',
  Safari: '7.71',
  'Microsoft Edge': '3.21',
  Opera: '1.54',
  Mozilla: '0.04',
  'Other/Unknown': '0'
}, {
  date: '2016 Apr 6',
  'Google Chrome': '53.29',
  'Internet Explorer': '18.24',
  Firefox: '16.02',
  Safari: '7.52',
  'Microsoft Edge': '3.28',
  Opera: '1.6',
  Mozilla: '0.04',
  'Other/Unknown': '0'
}, {
  date: '2016 Apr 7',
  'Google Chrome': '52.77',
  'Internet Explorer': '18.33',
  Firefox: '16.26',
  Safari: '7.56',
  'Microsoft Edge': '3.35',
  Opera: '1.69',
  Mozilla: '0.03',
  'Other/Unknown': '0'
}, {
  date: '2016 Apr 8',
  'Google Chrome': '52.41',
  'Internet Explorer': '18.15',
  Firefox: '16.82',
  Safari: '7.65',
  'Microsoft Edge': '3.5',
  Opera: '1.42',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2016 Apr 9',
  'Google Chrome': '52.03',
  'Internet Explorer': '15.11',
  Firefox: '17.19',
  Safari: '9.37',
  'Microsoft Edge': '4.48',
  Opera: '1.77',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2016 Apr 10',
  'Google Chrome': '52.62',
  'Internet Explorer': '14.85',
  Firefox: '16.78',
  Safari: '9.63',
  'Microsoft Edge': '4.42',
  Opera: '1.66',
  Mozilla: '0.04',
  'Other/Unknown': '0'
}, {
  date: '2016 Apr 11',
  'Google Chrome': '52.54',
  'Internet Explorer': '18.79',
  Firefox: '16.17',
  Safari: '7.73',
  'Microsoft Edge': '3.37',
  Opera: '1.34',
  Mozilla: '0.07',
  'Other/Unknown': '0'
}, {
  date: '2016 Apr 12',
  'Google Chrome': '53.2',
  'Internet Explorer': '18.04',
  Firefox: '16.1',
  Safari: '7.61',
  'Microsoft Edge': '3.34',
  Opera: '1.65',
  Mozilla: '0.06',
  'Other/Unknown': '0'
}, {
  date: '2016 Apr 13',
  'Google Chrome': '53.01',
  'Internet Explorer': '17.89',
  Firefox: '16.22',
  Safari: '7.67',
  'Microsoft Edge': '3.39',
  Opera: '1.72',
  Mozilla: '0.1',
  'Other/Unknown': '0'
}, {
  date: '2016 Apr 14',
  'Google Chrome': '53.2',
  'Internet Explorer': '18.06',
  Firefox: '16.08',
  Safari: '7.53',
  'Microsoft Edge': '3.3',
  Opera: '1.68',
  Mozilla: '0.15',
  'Other/Unknown': '0'
}, {
  date: '2016 Apr 15',
  'Google Chrome': '52.96',
  'Internet Explorer': '17.82',
  Firefox: '16.32',
  Safari: '7.52',
  'Microsoft Edge': '3.46',
  Opera: '1.81',
  Mozilla: '0.12',
  'Other/Unknown': '0'
}, {
  date: '2016 Apr 16',
  'Google Chrome': '52.52',
  'Internet Explorer': '14.52',
  Firefox: '17.23',
  Safari: '9.32',
  'Microsoft Edge': '4.47',
  Opera: '1.81',
  Mozilla: '0.13',
  'Other/Unknown': '0'
}, {
  date: '2016 Apr 17',
  'Google Chrome': '52.71',
  'Internet Explorer': '14.25',
  Firefox: '16.94',
  Safari: '9.9',
  'Microsoft Edge': '4.4',
  Opera: '1.7',
  Mozilla: '0.09',
  'Other/Unknown': '0'
}, {
  date: '2016 Apr 18',
  'Google Chrome': '53.22',
  'Internet Explorer': '17.85',
  Firefox: '16.08',
  Safari: '7.79',
  'Microsoft Edge': '3.33',
  Opera: '1.66',
  Mozilla: '0.07',
  'Other/Unknown': '0'
}, {
  date: '2016 Apr 19',
  'Google Chrome': '53.51',
  'Internet Explorer': '17.76',
  Firefox: '16.19',
  Safari: '7.77',
  'Microsoft Edge': '3.27',
  Opera: '1.43',
  Mozilla: '0.06',
  'Other/Unknown': '0'
}, {
  date: '2016 Apr 20',
  'Google Chrome': '53.62',
  'Internet Explorer': '17.44',
  Firefox: '16.12',
  Safari: '7.81',
  'Microsoft Edge': '3.36',
  Opera: '1.57',
  Mozilla: '0.08',
  'Other/Unknown': '0'
}, {
  date: '2016 Apr 21',
  'Google Chrome': '53.4',
  'Internet Explorer': '17.94',
  Firefox: '15.94',
  Safari: '7.59',
  'Microsoft Edge': '3.47',
  Opera: '1.6',
  Mozilla: '0.07',
  'Other/Unknown': '0'
}, {
  date: '2016 Apr 22',
  'Google Chrome': '52.62',
  'Internet Explorer': '18.57',
  Firefox: '16.13',
  Safari: '7.55',
  'Microsoft Edge': '3.61',
  Opera: '1.46',
  Mozilla: '0.08',
  'Other/Unknown': '0'
}, {
  date: '2016 Apr 23',
  'Google Chrome': '52.42',
  'Internet Explorer': '14.46',
  Firefox: '17.12',
  Safari: '9.44',
  'Microsoft Edge': '4.72',
  Opera: '1.75',
  Mozilla: '0.09',
  'Other/Unknown': '0'
}, {
  date: '2016 Apr 24',
  'Google Chrome': '53.43',
  'Internet Explorer': '13.62',
  Firefox: '16.79',
  Safari: '9.84',
  'Microsoft Edge': '4.59',
  Opera: '1.66',
  Mozilla: '0.07',
  'Other/Unknown': '0.01'
}, {
  date: '2016 Apr 25',
  'Google Chrome': '53.48',
  'Internet Explorer': '17.72',
  Firefox: '15.98',
  Safari: '7.79',
  'Microsoft Edge': '3.46',
  Opera: '1.5',
  Mozilla: '0.06',
  'Other/Unknown': '0'
}, {
  date: '2016 Apr 26',
  'Google Chrome': '53.5',
  'Internet Explorer': '17.81',
  Firefox: '16.13',
  Safari: '7.73',
  'Microsoft Edge': '3.4',
  Opera: '1.36',
  Mozilla: '0.07',
  'Other/Unknown': '0'
}, {
  date: '2016 Apr 27',
  'Google Chrome': '53.68',
  'Internet Explorer': '17.4',
  Firefox: '16.39',
  Safari: '7.76',
  'Microsoft Edge': '3.45',
  Opera: '1.24',
  Mozilla: '0.07',
  'Other/Unknown': '0'
}, {
  date: '2016 Apr 28',
  'Google Chrome': '53.08',
  'Internet Explorer': '18.16',
  Firefox: '16.31',
  Safari: '7.68',
  'Microsoft Edge': '3.49',
  Opera: '1.21',
  Mozilla: '0.08',
  'Other/Unknown': '0.01'
}, {
  date: '2016 Apr 29',
  'Google Chrome': '53.09',
  'Internet Explorer': '17.74',
  Firefox: '16.65',
  Safari: '7.59',
  'Microsoft Edge': '3.56',
  Opera: '1.28',
  Mozilla: '0.09',
  'Other/Unknown': '0'
}, {
  date: '2016 Apr 30',
  'Google Chrome': '53.1',
  'Internet Explorer': '14.09',
  Firefox: '16.82',
  Safari: '9.4',
  'Microsoft Edge': '4.86',
  Opera: '1.65',
  Mozilla: '0.1',
  'Other/Unknown': '0'
}, {
  date: '2016 May 1',
  'Google Chrome': '52.76',
  'Internet Explorer': '13.89',
  Firefox: '16.72',
  Safari: '10.07',
  'Microsoft Edge': '4.88',
  Opera: '1.58',
  Mozilla: '0.08',
  'Other/Unknown': '0.01'
}, {
  date: '2016 May 2',
  'Google Chrome': '53.44',
  'Internet Explorer': '17.2',
  Firefox: '16.17',
  Safari: '8.2',
  'Microsoft Edge': '3.67',
  Opera: '1.21',
  Mozilla: '0.1',
  'Other/Unknown': '0'
}, {
  date: '2016 May 3',
  'Google Chrome': '52.97',
  'Internet Explorer': '17.96',
  Firefox: '16.21',
  Safari: '7.85',
  'Microsoft Edge': '3.52',
  Opera: '1.41',
  Mozilla: '0.07',
  'Other/Unknown': '0'
}, {
  date: '2016 May 4',
  'Google Chrome': '53.55',
  'Internet Explorer': '17.62',
  Firefox: '16.01',
  Safari: '7.62',
  'Microsoft Edge': '3.57',
  Opera: '1.54',
  Mozilla: '0.08',
  'Other/Unknown': '0'
}, {
  date: '2016 May 5',
  'Google Chrome': '53.76',
  'Internet Explorer': '17.45',
  Firefox: '15.92',
  Safari: '7.6',
  'Microsoft Edge': '3.63',
  Opera: '1.57',
  Mozilla: '0.08',
  'Other/Unknown': '0'
}, {
  date: '2016 May 6',
  'Google Chrome': '52.97',
  'Internet Explorer': '17.61',
  Firefox: '16.28',
  Safari: '7.72',
  'Microsoft Edge': '3.78',
  Opera: '1.55',
  Mozilla: '0.09',
  'Other/Unknown': '0'
}, {
  date: '2016 May 7',
  'Google Chrome': '51.82',
  'Internet Explorer': '14.56',
  Firefox: '17.28',
  Safari: '9.66',
  'Microsoft Edge': '4.86',
  Opera: '1.72',
  Mozilla: '0.1',
  'Other/Unknown': '0'
}, {
  date: '2016 May 8',
  'Google Chrome': '52.46',
  'Internet Explorer': '14.09',
  Firefox: '17.17',
  Safari: '9.79',
  'Microsoft Edge': '4.69',
  Opera: '1.71',
  Mozilla: '0.09',
  'Other/Unknown': '0'
}, {
  date: '2016 May 9',
  'Google Chrome': '53.05',
  'Internet Explorer': '18.2',
  Firefox: '16.1',
  Safari: '7.92',
  'Microsoft Edge': '3.58',
  Opera: '1.08',
  Mozilla: '0.06',
  'Other/Unknown': '0'
}, {
  date: '2016 May 10',
  'Google Chrome': '52.83',
  'Internet Explorer': '18.34',
  Firefox: '16.14',
  Safari: '7.77',
  'Microsoft Edge': '3.62',
  Opera: '1.24',
  Mozilla: '0.06',
  'Other/Unknown': '0'
}, {
  date: '2016 May 11',
  'Google Chrome': '53.18',
  'Internet Explorer': '17.93',
  Firefox: '16.28',
  Safari: '7.67',
  'Microsoft Edge': '3.6',
  Opera: '1.26',
  Mozilla: '0.07',
  'Other/Unknown': '0'
}, {
  date: '2016 May 12',
  'Google Chrome': '52.5',
  'Internet Explorer': '18.46',
  Firefox: '16.41',
  Safari: '7.53',
  'Microsoft Edge': '3.63',
  Opera: '1.4',
  Mozilla: '0.07',
  'Other/Unknown': '0'
}, {
  date: '2016 May 13',
  'Google Chrome': '51.81',
  'Internet Explorer': '18.58',
  Firefox: '16.66',
  Safari: '7.6',
  'Microsoft Edge': '3.77',
  Opera: '1.48',
  Mozilla: '0.09',
  'Other/Unknown': '0'
}, {
  date: '2016 May 14',
  'Google Chrome': '50.29',
  'Internet Explorer': '15.33',
  Firefox: '17.99',
  Safari: '9.42',
  'Microsoft Edge': '4.96',
  Opera: '1.91',
  Mozilla: '0.1',
  'Other/Unknown': '0'
}, {
  date: '2016 May 15',
  'Google Chrome': '51.36',
  'Internet Explorer': '14.55',
  Firefox: '17.56',
  Safari: '9.66',
  'Microsoft Edge': '4.91',
  Opera: '1.87',
  Mozilla: '0.08',
  'Other/Unknown': '0'
}, {
  date: '2016 May 16',
  'Google Chrome': '52.3',
  'Internet Explorer': '18.24',
  Firefox: '16.41',
  Safari: '7.76',
  'Microsoft Edge': '3.73',
  Opera: '1.49',
  Mozilla: '0.06',
  'Other/Unknown': '0'
}, {
  date: '2016 May 17',
  'Google Chrome': '52.05',
  'Internet Explorer': '18.88',
  Firefox: '16.42',
  Safari: '7.64',
  'Microsoft Edge': '3.57',
  Opera: '1.37',
  Mozilla: '0.06',
  'Other/Unknown': '0'
}, {
  date: '2016 May 18',
  'Google Chrome': '51.99',
  'Internet Explorer': '18.87',
  Firefox: '16.43',
  Safari: '7.76',
  'Microsoft Edge': '3.64',
  Opera: '1.24',
  Mozilla: '0.06',
  'Other/Unknown': '0'
}, {
  date: '2016 May 19',
  'Google Chrome': '51.67',
  'Internet Explorer': '19.25',
  Firefox: '16.18',
  Safari: '7.96',
  'Microsoft Edge': '3.77',
  Opera: '1.1',
  Mozilla: '0.07',
  'Other/Unknown': '0'
}, {
  date: '2016 May 20',
  'Google Chrome': '51.75',
  'Internet Explorer': '18.51',
  Firefox: '16.52',
  Safari: '7.88',
  'Microsoft Edge': '4.09',
  Opera: '1.19',
  Mozilla: '0.07',
  'Other/Unknown': '0'
}, {
  date: '2016 May 21',
  'Google Chrome': '51.83',
  'Internet Explorer': '14.13',
  Firefox: '17.6',
  Safari: '9.54',
  'Microsoft Edge': '5.19',
  Opera: '1.62',
  Mozilla: '0.07',
  'Other/Unknown': '0'
}, {
  date: '2016 May 22',
  'Google Chrome': '52.46',
  'Internet Explorer': '13.53',
  Firefox: '17.44',
  Safari: '9.82',
  'Microsoft Edge': '5.07',
  Opera: '1.61',
  Mozilla: '0.07',
  'Other/Unknown': '0'
}, {
  date: '2016 May 23',
  'Google Chrome': '52.6',
  'Internet Explorer': '18.04',
  Firefox: '16.37',
  Safari: '7.69',
  'Microsoft Edge': '3.95',
  Opera: '1.3',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2016 May 24',
  'Google Chrome': '52.83',
  'Internet Explorer': '17.85',
  Firefox: '16.46',
  Safari: '7.58',
  'Microsoft Edge': '3.91',
  Opera: '1.32',
  Mozilla: '0.06',
  'Other/Unknown': '0'
}, {
  date: '2016 May 25',
  'Google Chrome': '53.16',
  'Internet Explorer': '17.45',
  Firefox: '16.35',
  Safari: '7.6',
  'Microsoft Edge': '3.99',
  Opera: '1.39',
  Mozilla: '0.06',
  'Other/Unknown': '0'
}, {
  date: '2016 May 26',
  'Google Chrome': '52.81',
  'Internet Explorer': '17.8',
  Firefox: '16.38',
  Safari: '7.67',
  'Microsoft Edge': '3.95',
  Opera: '1.33',
  Mozilla: '0.06',
  'Other/Unknown': '0'
}, {
  date: '2016 May 27',
  'Google Chrome': '52.54',
  'Internet Explorer': '17.27',
  Firefox: '16.86',
  Safari: '7.73',
  'Microsoft Edge': '4.17',
  Opera: '1.35',
  Mozilla: '0.07',
  'Other/Unknown': '0'
}, {
  date: '2016 May 28',
  'Google Chrome': '52.58',
  'Internet Explorer': '13.24',
  Firefox: '17.76',
  Safari: '9.27',
  'Microsoft Edge': '5.33',
  Opera: '1.74',
  Mozilla: '0.09',
  'Other/Unknown': '0'
}, {
  date: '2016 May 29',
  'Google Chrome': '52.85',
  'Internet Explorer': '12.95',
  Firefox: '17.78',
  Safari: '9.34',
  'Microsoft Edge': '5.29',
  Opera: '1.72',
  Mozilla: '0.07',
  'Other/Unknown': '0'
}, {
  date: '2016 May 30',
  'Google Chrome': '52.89',
  'Internet Explorer': '14.39',
  Firefox: '17.67',
  Safari: '8.53',
  'Microsoft Edge': '4.86',
  Opera: '1.59',
  Mozilla: '0.07',
  'Other/Unknown': '0'
}, {
  date: '2016 May 31',
  'Google Chrome': '53.61',
  'Internet Explorer': '17.15',
  Firefox: '16.08',
  Safari: '7.6',
  'Microsoft Edge': '4.13',
  Opera: '1.37',
  Mozilla: '0.06',
  'Other/Unknown': '0'
}, {
  date: '2016 Jun 1',
  'Google Chrome': '53.58',
  'Internet Explorer': '16.65',
  Firefox: '16.01',
  Safari: '7.99',
  'Microsoft Edge': '4.29',
  Opera: '1.42',
  Mozilla: '0.06',
  'Other/Unknown': '0'
}, {
  date: '2016 Jun 2',
  'Google Chrome': '52.76',
  'Internet Explorer': '17.4',
  Firefox: '16.35',
  Safari: '7.81',
  'Microsoft Edge': '4.29',
  Opera: '1.33',
  Mozilla: '0.06',
  'Other/Unknown': '0'
}, {
  date: '2016 Jun 3',
  'Google Chrome': '52.44',
  'Internet Explorer': '16.96',
  Firefox: '16.52',
  Safari: '7.71',
  'Microsoft Edge': '4.6',
  Opera: '1.69',
  Mozilla: '0.08',
  'Other/Unknown': '0'
}, {
  date: '2016 Jun 4',
  'Google Chrome': '52.33',
  'Internet Explorer': '12.93',
  Firefox: '17.3',
  Safari: '9.52',
  'Microsoft Edge': '5.88',
  Opera: '1.96',
  Mozilla: '0.08',
  'Other/Unknown': '0'
}, {
  date: '2016 Jun 5',
  'Google Chrome': '52.38',
  'Internet Explorer': '12.56',
  Firefox: '17.42',
  Safari: '9.66',
  'Microsoft Edge': '5.76',
  Opera: '2.14',
  Mozilla: '0.08',
  'Other/Unknown': '0.01'
}, {
  date: '2016 Jun 6',
  'Google Chrome': '52.69',
  'Internet Explorer': '17.32',
  Firefox: '16.31',
  Safari: '7.43',
  'Microsoft Edge': '4.18',
  Opera: '2.01',
  Mozilla: '0.06',
  'Other/Unknown': '0'
}, {
  date: '2016 Jun 7',
  'Google Chrome': '52.95',
  'Internet Explorer': '17.47',
  Firefox: '16.28',
  Safari: '7.65',
  'Microsoft Edge': '4.05',
  Opera: '1.55',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2016 Jun 8',
  'Google Chrome': '52.68',
  'Internet Explorer': '17.66',
  Firefox: '16.3',
  Safari: '7.6',
  'Microsoft Edge': '4.14',
  Opera: '1.56',
  Mozilla: '0.06',
  'Other/Unknown': '0'
}, {
  date: '2016 Jun 9',
  'Google Chrome': '52.3',
  'Internet Explorer': '18.02',
  Firefox: '16.25',
  Safari: '7.85',
  'Microsoft Edge': '4.14',
  Opera: '1.38',
  Mozilla: '0.07',
  'Other/Unknown': '0'
}, {
  date: '2016 Jun 10',
  'Google Chrome': '52.22',
  'Internet Explorer': '17.36',
  Firefox: '16.46',
  Safari: '7.96',
  'Microsoft Edge': '4.44',
  Opera: '1.49',
  Mozilla: '0.07',
  'Other/Unknown': '0'
}, {
  date: '2016 Jun 11',
  'Google Chrome': '52.06',
  'Internet Explorer': '13.19',
  Firefox: '17.21',
  Safari: '9.98',
  'Microsoft Edge': '5.78',
  Opera: '1.69',
  Mozilla: '0.09',
  'Other/Unknown': '0'
}, {
  date: '2016 Jun 12',
  'Google Chrome': '52.09',
  'Internet Explorer': '12.75',
  Firefox: '16.89',
  Safari: '10.65',
  'Microsoft Edge': '5.96',
  Opera: '1.6',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2016 Jun 13',
  'Google Chrome': '53.18',
  'Internet Explorer': '16.87',
  Firefox: '16.21',
  Safari: '8.15',
  'Microsoft Edge': '4.39',
  Opera: '1.15',
  Mozilla: '0.05',
  'Other/Unknown': '0'
}, {
  date: '2016 Jun 14',
  'Google Chrome': '53.45',
  'Internet Explorer': '17.03',
  Firefox: '16.15',
  Safari: '7.8',
  'Microsoft Edge': '4.31',
  Opera: '1.21',
  Mozilla: '0.04',
  'Other/Unknown': '0'
}, {
  date: '2016 Jun 15',
  'Google Chrome': '53.4',
  'Internet Explorer': '18.12',
  Firefox: '16.51',
  Safari: '6.69',
  'Microsoft Edge': '3.84',
  Opera: '1.4',
  Mozilla: '0.04',
  'Other/Unknown': '0'
}];

/***/ }),

/***/ "./node_modules/@vx/mock-data/build/mocks/cityTemperature.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [{
  date: '20111001',
  'New York': '63.4',
  'San Francisco': '62.7',
  Austin: '72.2'
}, {
  date: '20111002',
  'New York': '58.0',
  'San Francisco': '59.9',
  Austin: '67.7'
}, {
  date: '20111003',
  'New York': '53.3',
  'San Francisco': '59.1',
  Austin: '69.4'
}, {
  date: '20111004',
  'New York': '55.7',
  'San Francisco': '58.8',
  Austin: '68.0'
}, {
  date: '20111005',
  'New York': '64.2',
  'San Francisco': '58.7',
  Austin: '72.4'
}, {
  date: '20111006',
  'New York': '58.8',
  'San Francisco': '57.0',
  Austin: '77.0'
}, {
  date: '20111007',
  'New York': '57.9',
  'San Francisco': '56.7',
  Austin: '82.3'
}, {
  date: '20111008',
  'New York': '61.8',
  'San Francisco': '56.8',
  Austin: '78.9'
}, {
  date: '20111009',
  'New York': '69.3',
  'San Francisco': '56.7',
  Austin: '68.8'
}, {
  date: '20111010',
  'New York': '71.2',
  'San Francisco': '60.1',
  Austin: '68.7'
}, {
  date: '20111011',
  'New York': '68.7',
  'San Francisco': '61.1',
  Austin: '70.3'
}, {
  date: '20111012',
  'New York': '61.8',
  'San Francisco': '61.5',
  Austin: '75.3'
}, {
  date: '20111013',
  'New York': '63.0',
  'San Francisco': '64.3',
  Austin: '76.6'
}, {
  date: '20111014',
  'New York': '66.9',
  'San Francisco': '67.1',
  Austin: '66.6'
}, {
  date: '20111015',
  'New York': '61.7',
  'San Francisco': '64.6',
  Austin: '68.0'
}, {
  date: '20111016',
  'New York': '61.8',
  'San Francisco': '61.6',
  Austin: '70.6'
}, {
  date: '20111017',
  'New York': '62.8',
  'San Francisco': '61.1',
  Austin: '71.1'
}, {
  date: '20111018',
  'New York': '60.8',
  'San Francisco': '59.2',
  Austin: '70.0'
}, {
  date: '20111019',
  'New York': '62.1',
  'San Francisco': '58.9',
  Austin: '61.6'
}, {
  date: '20111020',
  'New York': '65.1',
  'San Francisco': '57.2',
  Austin: '57.4'
}, {
  date: '20111021',
  'New York': '55.6',
  'San Francisco': '56.4',
  Austin: '64.3'
}, {
  date: '20111022',
  'New York': '54.4',
  'San Francisco': '60.7',
  Austin: '72.4'
}, {
  date: '20111023',
  'New York': '54.4',
  'San Francisco': '65.1',
  Austin: '72.4'
}, {
  date: '20111024',
  'New York': '54.8',
  'San Francisco': '60.9',
  Austin: '72.5'
}, {
  date: '20111025',
  'New York': '57.9',
  'San Francisco': '56.1',
  Austin: '72.7'
}, {
  date: '20111026',
  'New York': '54.6',
  'San Francisco': '54.6',
  Austin: '73.4'
}, {
  date: '20111027',
  'New York': '54.4',
  'San Francisco': '56.1',
  Austin: '70.7'
}, {
  date: '20111028',
  'New York': '42.5',
  'San Francisco': '58.1',
  Austin: '56.8'
}, {
  date: '20111029',
  'New York': '40.9',
  'San Francisco': '57.5',
  Austin: '51.0'
}, {
  date: '20111030',
  'New York': '38.6',
  'San Francisco': '57.7',
  Austin: '54.9'
}, {
  date: '20111031',
  'New York': '44.2',
  'San Francisco': '55.1',
  Austin: '58.8'
}, {
  date: '20111101',
  'New York': '49.6',
  'San Francisco': '57.9',
  Austin: '62.6'
}, {
  date: '20111102',
  'New York': '47.2',
  'San Francisco': '64.6',
  Austin: '71.0'
}, {
  date: '20111103',
  'New York': '50.1',
  'San Francisco': '56.2',
  Austin: '58.4'
}, {
  date: '20111104',
  'New York': '50.1',
  'San Francisco': '50.5',
  Austin: '45.1'
}, {
  date: '20111105',
  'New York': '43.5',
  'San Francisco': '51.3',
  Austin: '52.2'
}, {
  date: '20111106',
  'New York': '43.8',
  'San Francisco': '52.6',
  Austin: '73.0'
}, {
  date: '20111107',
  'New York': '48.9',
  'San Francisco': '51.4',
  Austin: '75.4'
}, {
  date: '20111108',
  'New York': '55.5',
  'San Francisco': '50.6',
  Austin: '72.1'
}, {
  date: '20111109',
  'New York': '53.7',
  'San Francisco': '54.6',
  Austin: '56.6'
}, {
  date: '20111110',
  'New York': '57.7',
  'San Francisco': '55.6',
  Austin: '55.4'
}, {
  date: '20111111',
  'New York': '48.5',
  'San Francisco': '53.9',
  Austin: '46.7'
}, {
  date: '20111112',
  'New York': '46.8',
  'San Francisco': '54.0',
  Austin: '62.0'
}, {
  date: '20111113',
  'New York': '51.1',
  'San Francisco': '53.8',
  Austin: '71.6'
}, {
  date: '20111114',
  'New York': '56.8',
  'San Francisco': '53.5',
  Austin: '75.5'
}, {
  date: '20111115',
  'New York': '59.7',
  'San Francisco': '53.4',
  Austin: '72.1'
}, {
  date: '20111116',
  'New York': '56.5',
  'San Francisco': '52.2',
  Austin: '65.7'
}, {
  date: '20111117',
  'New York': '49.6',
  'San Francisco': '52.7',
  Austin: '56.8'
}, {
  date: '20111118',
  'New York': '41.5',
  'San Francisco': '53.1',
  Austin: '49.9'
}, {
  date: '20111119',
  'New York': '44.3',
  'San Francisco': '49.0',
  Austin: '71.7'
}, {
  date: '20111120',
  'New York': '54.0',
  'San Francisco': '50.4',
  Austin: '77.7'
}, {
  date: '20111121',
  'New York': '54.1',
  'San Francisco': '51.1',
  Austin: '76.4'
}, {
  date: '20111122',
  'New York': '49.4',
  'San Francisco': '52.3',
  Austin: '68.8'
}, {
  date: '20111123',
  'New York': '50.0',
  'San Francisco': '54.6',
  Austin: '57.0'
}, {
  date: '20111124',
  'New York': '44.0',
  'San Francisco': '55.1',
  Austin: '55.5'
}, {
  date: '20111125',
  'New York': '50.3',
  'San Francisco': '51.5',
  Austin: '61.6'
}, {
  date: '20111126',
  'New York': '52.1',
  'San Francisco': '53.6',
  Austin: '64.1'
}, {
  date: '20111127',
  'New York': '49.6',
  'San Francisco': '52.3',
  Austin: '51.1'
}, {
  date: '20111128',
  'New York': '57.2',
  'San Francisco': '51.0',
  Austin: '43.0'
}, {
  date: '20111129',
  'New York': '59.1',
  'San Francisco': '49.5',
  Austin: '46.4'
}, {
  date: '20111130',
  'New York': '50.6',
  'San Francisco': '49.8',
  Austin: '48.0'
}, {
  date: '20111201',
  'New York': '44.3',
  'San Francisco': '60.4',
  Austin: '48.1'
}, {
  date: '20111202',
  'New York': '43.9',
  'San Francisco': '62.2',
  Austin: '60.6'
}, {
  date: '20111203',
  'New York': '42.1',
  'San Francisco': '58.3',
  Austin: '62.6'
}, {
  date: '20111204',
  'New York': '43.9',
  'San Francisco': '52.7',
  Austin: '57.1'
}, {
  date: '20111205',
  'New York': '50.2',
  'San Francisco': '51.5',
  Austin: '44.2'
}, {
  date: '20111206',
  'New York': '54.2',
  'San Francisco': '49.9',
  Austin: '37.4'
}, {
  date: '20111207',
  'New York': '54.6',
  'San Francisco': '48.6',
  Austin: '35.0'
}, {
  date: '20111208',
  'New York': '43.4',
  'San Francisco': '46.4',
  Austin: '37.0'
}, {
  date: '20111209',
  'New York': '42.2',
  'San Francisco': '49.8',
  Austin: '45.4'
}, {
  date: '20111210',
  'New York': '45.0',
  'San Francisco': '52.1',
  Austin: '50.7'
}, {
  date: '20111211',
  'New York': '33.8',
  'San Francisco': '48.8',
  Austin: '48.6'
}, {
  date: '20111212',
  'New York': '36.8',
  'San Francisco': '47.4',
  Austin: '52.2'
}, {
  date: '20111213',
  'New York': '38.6',
  'San Francisco': '47.2',
  Austin: '60.8'
}, {
  date: '20111214',
  'New York': '41.9',
  'San Francisco': '46.1',
  Austin: '70.0'
}, {
  date: '20111215',
  'New York': '49.6',
  'San Francisco': '48.8',
  Austin: '64.2'
}, {
  date: '20111216',
  'New York': '50.2',
  'San Francisco': '47.9',
  Austin: '50.9'
}, {
  date: '20111217',
  'New York': '40.6',
  'San Francisco': '49.8',
  Austin: '51.6'
}, {
  date: '20111218',
  'New York': '29.1',
  'San Francisco': '49.1',
  Austin: '55.2'
}, {
  date: '20111219',
  'New York': '33.7',
  'San Francisco': '48.3',
  Austin: '62.1'
}, {
  date: '20111220',
  'New York': '45.8',
  'San Francisco': '49.3',
  Austin: '56.3'
}, {
  date: '20111221',
  'New York': '47.4',
  'San Francisco': '48.4',
  Austin: '47.2'
}, {
  date: '20111222',
  'New York': '54.4',
  'San Francisco': '53.3',
  Austin: '52.3'
}, {
  date: '20111223',
  'New York': '47.8',
  'San Francisco': '47.5',
  Austin: '45.2'
}, {
  date: '20111224',
  'New York': '34.9',
  'San Francisco': '47.9',
  Austin: '43.6'
}, {
  date: '20111225',
  'New York': '35.9',
  'San Francisco': '48.9',
  Austin: '42.9'
}, {
  date: '20111226',
  'New York': '43.6',
  'San Francisco': '45.9',
  Austin: '48.2'
}, {
  date: '20111227',
  'New York': '42.9',
  'San Francisco': '47.2',
  Austin: '45.4'
}, {
  date: '20111228',
  'New York': '46.2',
  'San Francisco': '48.9',
  Austin: '44.2'
}, {
  date: '20111229',
  'New York': '30.8',
  'San Francisco': '50.9',
  Austin: '50.4'
}, {
  date: '20111230',
  'New York': '40.8',
  'San Francisco': '52.9',
  Austin: '52.4'
}, {
  date: '20111231',
  'New York': '49.8',
  'San Francisco': '50.1',
  Austin: '53.5'
}, {
  date: '20120101',
  'New York': '46.3',
  'San Francisco': '53.9',
  Austin: '55.9'
}, {
  date: '20120102',
  'New York': '43.2',
  'San Francisco': '53.1',
  Austin: '48.2'
}, {
  date: '20120103',
  'New York': '30.3',
  'San Francisco': '49.7',
  Austin: '41.0'
}, {
  date: '20120104',
  'New York': '19.2',
  'San Francisco': '52.7',
  Austin: '48.9'
}, {
  date: '20120105',
  'New York': '32.1',
  'San Francisco': '52.6',
  Austin: '54.8'
}, {
  date: '20120106',
  'New York': '41.2',
  'San Francisco': '49.0',
  Austin: '61.2'
}, {
  date: '20120107',
  'New York': '47.0',
  'San Francisco': '51.0',
  Austin: '59.7'
}, {
  date: '20120108',
  'New York': '46.0',
  'San Francisco': '56.8',
  Austin: '52.5'
}, {
  date: '20120109',
  'New York': '34.7',
  'San Francisco': '52.3',
  Austin: '54.0'
}, {
  date: '20120110',
  'New York': '39.4',
  'San Francisco': '51.6',
  Austin: '47.7'
}, {
  date: '20120111',
  'New York': '40.4',
  'San Francisco': '49.8',
  Austin: '49.2'
}, {
  date: '20120112',
  'New York': '45.4',
  'San Francisco': '51.9',
  Austin: '48.4'
}, {
  date: '20120113',
  'New York': '40.7',
  'San Francisco': '53.7',
  Austin: '40.2'
}, {
  date: '20120114',
  'New York': '30.4',
  'San Francisco': '52.9',
  Austin: '43.9'
}, {
  date: '20120115',
  'New York': '23.9',
  'San Francisco': '49.7',
  Austin: '45.2'
}, {
  date: '20120116',
  'New York': '22.6',
  'San Francisco': '45.3',
  Austin: '65.0'
}, {
  date: '20120117',
  'New York': '39.8',
  'San Francisco': '43.6',
  Austin: '68.2'
}, {
  date: '20120118',
  'New York': '43.2',
  'San Francisco': '45.0',
  Austin: '47.5'
}, {
  date: '20120119',
  'New York': '26.3',
  'San Francisco': '47.3',
  Austin: '57.1'
}, {
  date: '20120120',
  'New York': '32.8',
  'San Francisco': '51.4',
  Austin: '61.9'
}, {
  date: '20120121',
  'New York': '27.4',
  'San Francisco': '53.7',
  Austin: '54.6'
}, {
  date: '20120122',
  'New York': '25.0',
  'San Francisco': '48.3',
  Austin: '56.7'
}, {
  date: '20120123',
  'New York': '39.4',
  'San Francisco': '52.9',
  Austin: '54.4'
}, {
  date: '20120124',
  'New York': '48.7',
  'San Francisco': '49.1',
  Austin: '52.7'
}, {
  date: '20120125',
  'New York': '43.0',
  'San Francisco': '52.1',
  Austin: '61.8'
}, {
  date: '20120126',
  'New York': '37.1',
  'San Francisco': '53.6',
  Austin: '55.0'
}, {
  date: '20120127',
  'New York': '48.2',
  'San Francisco': '50.4',
  Austin: '50.7'
}, {
  date: '20120128',
  'New York': '43.7',
  'San Francisco': '50.3',
  Austin: '52.9'
}, {
  date: '20120129',
  'New York': '40.1',
  'San Francisco': '53.8',
  Austin: '44.4'
}, {
  date: '20120130',
  'New York': '38.0',
  'San Francisco': '51.9',
  Austin: '49.1'
}, {
  date: '20120131',
  'New York': '43.5',
  'San Francisco': '50.0',
  Austin: '62.8'
}, {
  date: '20120201',
  'New York': '50.4',
  'San Francisco': '50.0',
  Austin: '64.6'
}, {
  date: '20120202',
  'New York': '45.8',
  'San Francisco': '51.3',
  Austin: '61.1'
}, {
  date: '20120203',
  'New York': '37.5',
  'San Francisco': '51.5',
  Austin: '70.0'
}, {
  date: '20120204',
  'New York': '40.8',
  'San Francisco': '52.0',
  Austin: '61.3'
}, {
  date: '20120205',
  'New York': '36.5',
  'San Francisco': '53.8',
  Austin: '48.2'
}, {
  date: '20120206',
  'New York': '39.1',
  'San Francisco': '54.6',
  Austin: '44.2'
}, {
  date: '20120207',
  'New York': '43.2',
  'San Francisco': '54.3',
  Austin: '51.3'
}, {
  date: '20120208',
  'New York': '36.5',
  'San Francisco': '51.9',
  Austin: '49.2'
}, {
  date: '20120209',
  'New York': '36.5',
  'San Francisco': '53.8',
  Austin: '45.7'
}, {
  date: '20120210',
  'New York': '38.3',
  'San Francisco': '53.9',
  Austin: '54.1'
}, {
  date: '20120211',
  'New York': '36.9',
  'San Francisco': '52.3',
  Austin: '44.9'
}, {
  date: '20120212',
  'New York': '29.7',
  'San Francisco': '50.1',
  Austin: '36.5'
}, {
  date: '20120213',
  'New York': '33.1',
  'San Francisco': '49.5',
  Austin: '44.8'
}, {
  date: '20120214',
  'New York': '39.6',
  'San Francisco': '48.6',
  Austin: '52.3'
}, {
  date: '20120215',
  'New York': '42.3',
  'San Francisco': '49.9',
  Austin: '68.0'
}, {
  date: '20120216',
  'New York': '39.7',
  'San Francisco': '52.4',
  Austin: '54.6'
}, {
  date: '20120217',
  'New York': '46.0',
  'San Francisco': '49.9',
  Austin: '53.8'
}, {
  date: '20120218',
  'New York': '41.2',
  'San Francisco': '51.6',
  Austin: '56.2'
}, {
  date: '20120219',
  'New York': '39.8',
  'San Francisco': '47.8',
  Austin: '50.8'
}, {
  date: '20120220',
  'New York': '38.1',
  'San Francisco': '48.7',
  Austin: '53.0'
}, {
  date: '20120221',
  'New York': '37.1',
  'San Francisco': '49.7',
  Austin: '61.0'
}, {
  date: '20120222',
  'New York': '45.5',
  'San Francisco': '53.4',
  Austin: '68.8'
}, {
  date: '20120223',
  'New York': '50.6',
  'San Francisco': '54.1',
  Austin: '69.4'
}, {
  date: '20120224',
  'New York': '42.7',
  'San Francisco': '55.9',
  Austin: '59.3'
}, {
  date: '20120225',
  'New York': '42.6',
  'San Francisco': '51.7',
  Austin: '47.2'
}, {
  date: '20120226',
  'New York': '36.9',
  'San Francisco': '47.7',
  Austin: '47.7'
}, {
  date: '20120227',
  'New York': '40.9',
  'San Francisco': '45.4',
  Austin: '61.9'
}, {
  date: '20120228',
  'New York': '45.9',
  'San Francisco': '47.0',
  Austin: '67.2'
}, {
  date: '20120229',
  'New York': '40.7',
  'San Francisco': '49.8',
  Austin: '70.1'
}, {
  date: '20120301',
  'New York': '41.3',
  'San Francisco': '48.9',
  Austin: '62.1'
}, {
  date: '20120302',
  'New York': '36.8',
  'San Francisco': '48.1',
  Austin: '72.7'
}, {
  date: '20120303',
  'New York': '47.6',
  'San Francisco': '50.7',
  Austin: '59.0'
}, {
  date: '20120304',
  'New York': '44.2',
  'San Francisco': '55.0',
  Austin: '51.8'
}, {
  date: '20120305',
  'New York': '38.5',
  'San Francisco': '48.8',
  Austin: '55.0'
}, {
  date: '20120306',
  'New York': '32.9',
  'San Francisco': '48.4',
  Austin: '61.8'
}, {
  date: '20120307',
  'New York': '43.3',
  'San Francisco': '49.9',
  Austin: '67.1'
}, {
  date: '20120308',
  'New York': '51.2',
  'San Francisco': '49.2',
  Austin: '72.0'
}, {
  date: '20120309',
  'New York': '47.8',
  'San Francisco': '51.7',
  Austin: '46.4'
}, {
  date: '20120310',
  'New York': '37.2',
  'San Francisco': '49.3',
  Austin: '46.7'
}, {
  date: '20120311',
  'New York': '42.9',
  'San Francisco': '50.0',
  Austin: '56.9'
}, {
  date: '20120312',
  'New York': '48.8',
  'San Francisco': '48.6',
  Austin: '61.9'
}, {
  date: '20120313',
  'New York': '52.6',
  'San Francisco': '53.9',
  Austin: '68.8'
}, {
  date: '20120314',
  'New York': '60.5',
  'San Francisco': '55.2',
  Austin: '71.9'
}, {
  date: '20120315',
  'New York': '47.2',
  'San Francisco': '55.9',
  Austin: '72.0'
}, {
  date: '20120316',
  'New York': '44.7',
  'San Francisco': '54.6',
  Austin: '72.5'
}, {
  date: '20120317',
  'New York': '48.2',
  'San Francisco': '48.2',
  Austin: '71.7'
}, {
  date: '20120318',
  'New York': '48.2',
  'San Francisco': '47.1',
  Austin: '71.1'
}, {
  date: '20120319',
  'New York': '53.1',
  'San Francisco': '45.8',
  Austin: '73.0'
}, {
  date: '20120320',
  'New York': '57.8',
  'San Francisco': '49.7',
  Austin: '63.8'
}, {
  date: '20120321',
  'New York': '57.5',
  'San Francisco': '51.4',
  Austin: '60.0'
}, {
  date: '20120322',
  'New York': '57.3',
  'San Francisco': '51.4',
  Austin: '62.3'
}, {
  date: '20120323',
  'New York': '61.7',
  'San Francisco': '48.4',
  Austin: '61.1'
}, {
  date: '20120324',
  'New York': '55.8',
  'San Francisco': '49.0',
  Austin: '62.0'
}, {
  date: '20120325',
  'New York': '48.4',
  'San Francisco': '46.4',
  Austin: '64.6'
}, {
  date: '20120326',
  'New York': '49.8',
  'San Francisco': '49.7',
  Austin: '66.0'
}, {
  date: '20120327',
  'New York': '39.6',
  'San Francisco': '54.1',
  Austin: '65.8'
}, {
  date: '20120328',
  'New York': '49.7',
  'San Francisco': '54.6',
  Austin: '69.2'
}, {
  date: '20120329',
  'New York': '56.8',
  'San Francisco': '52.3',
  Austin: '69.5'
}, {
  date: '20120330',
  'New York': '46.5',
  'San Francisco': '54.5',
  Austin: '73.5'
}, {
  date: '20120331',
  'New York': '42.2',
  'San Francisco': '56.2',
  Austin: '73.9'
}, {
  date: '20120401',
  'New York': '45.3',
  'San Francisco': '51.1',
  Austin: '75.3'
}, {
  date: '20120402',
  'New York': '48.1',
  'San Francisco': '50.5',
  Austin: '75.4'
}, {
  date: '20120403',
  'New York': '51.2',
  'San Francisco': '52.2',
  Austin: '77.3'
}, {
  date: '20120404',
  'New York': '61.0',
  'San Francisco': '50.6',
  Austin: '67.0'
}, {
  date: '20120405',
  'New York': '50.7',
  'San Francisco': '47.9',
  Austin: '71.1'
}, {
  date: '20120406',
  'New York': '48.0',
  'San Francisco': '47.4',
  Austin: '70.4'
}, {
  date: '20120407',
  'New York': '51.1',
  'San Francisco': '49.4',
  Austin: '73.6'
}, {
  date: '20120408',
  'New York': '55.7',
  'San Francisco': '50.0',
  Austin: '71.1'
}, {
  date: '20120409',
  'New York': '58.3',
  'San Francisco': '51.3',
  Austin: '70.0'
}, {
  date: '20120410',
  'New York': '55.0',
  'San Francisco': '53.8',
  Austin: '69.0'
}, {
  date: '20120411',
  'New York': '49.0',
  'San Francisco': '52.9',
  Austin: '69.2'
}, {
  date: '20120412',
  'New York': '51.7',
  'San Francisco': '53.9',
  Austin: '74.5'
}, {
  date: '20120413',
  'New York': '53.1',
  'San Francisco': '50.2',
  Austin: '73.4'
}, {
  date: '20120414',
  'New York': '55.2',
  'San Francisco': '50.9',
  Austin: '76.0'
}, {
  date: '20120415',
  'New York': '62.3',
  'San Francisco': '51.5',
  Austin: '74.5'
}, {
  date: '20120416',
  'New York': '62.9',
  'San Francisco': '51.9',
  Austin: '63.6'
}, {
  date: '20120417',
  'New York': '69.3',
  'San Francisco': '53.2',
  Austin: '67.3'
}, {
  date: '20120418',
  'New York': '59.0',
  'San Francisco': '53.0',
  Austin: '65.1'
}, {
  date: '20120419',
  'New York': '54.1',
  'San Francisco': '55.1',
  Austin: '67.9'
}, {
  date: '20120420',
  'New York': '56.5',
  'San Francisco': '55.8',
  Austin: '68.9'
}, {
  date: '20120421',
  'New York': '58.2',
  'San Francisco': '58.0',
  Austin: '65.1'
}, {
  date: '20120422',
  'New York': '52.4',
  'San Francisco': '52.8',
  Austin: '65.4'
}, {
  date: '20120423',
  'New York': '51.6',
  'San Francisco': '55.1',
  Austin: '70.1'
}, {
  date: '20120424',
  'New York': '49.3',
  'San Francisco': '57.9',
  Austin: '67.0'
}, {
  date: '20120425',
  'New York': '52.5',
  'San Francisco': '57.5',
  Austin: '75.4'
}, {
  date: '20120426',
  'New York': '50.5',
  'San Francisco': '55.3',
  Austin: '77.5'
}, {
  date: '20120427',
  'New York': '51.9',
  'San Francisco': '53.5',
  Austin: '77.0'
}, {
  date: '20120428',
  'New York': '47.4',
  'San Francisco': '54.7',
  Austin: '77.7'
}, {
  date: '20120429',
  'New York': '54.1',
  'San Francisco': '54.0',
  Austin: '77.7'
}, {
  date: '20120430',
  'New York': '51.9',
  'San Francisco': '53.4',
  Austin: '77.7'
}, {
  date: '20120501',
  'New York': '57.4',
  'San Francisco': '52.7',
  Austin: '77.0'
}, {
  date: '20120502',
  'New York': '53.7',
  'San Francisco': '50.7',
  Austin: '77.9'
}, {
  date: '20120503',
  'New York': '53.1',
  'San Francisco': '52.6',
  Austin: '79.1'
}, {
  date: '20120504',
  'New York': '57.2',
  'San Francisco': '53.4',
  Austin: '80.1'
}, {
  date: '20120505',
  'New York': '57.0',
  'San Francisco': '53.1',
  Austin: '82.1'
}, {
  date: '20120506',
  'New York': '56.6',
  'San Francisco': '56.5',
  Austin: '79.0'
}, {
  date: '20120507',
  'New York': '54.6',
  'San Francisco': '55.3',
  Austin: '79.8'
}, {
  date: '20120508',
  'New York': '57.9',
  'San Francisco': '52.0',
  Austin: '70.0'
}, {
  date: '20120509',
  'New York': '59.2',
  'San Francisco': '52.4',
  Austin: '69.8'
}, {
  date: '20120510',
  'New York': '61.1',
  'San Francisco': '53.4',
  Austin: '71.3'
}, {
  date: '20120511',
  'New York': '59.7',
  'San Francisco': '53.1',
  Austin: '69.4'
}, {
  date: '20120512',
  'New York': '64.1',
  'San Francisco': '49.9',
  Austin: '72.0'
}, {
  date: '20120513',
  'New York': '65.3',
  'San Francisco': '52.0',
  Austin: '72.4'
}, {
  date: '20120514',
  'New York': '64.2',
  'San Francisco': '56.0',
  Austin: '72.5'
}, {
  date: '20120515',
  'New York': '62.0',
  'San Francisco': '53.0',
  Austin: '67.6'
}, {
  date: '20120516',
  'New York': '63.8',
  'San Francisco': '51.0',
  Austin: '69.0'
}, {
  date: '20120517',
  'New York': '64.5',
  'San Francisco': '51.4',
  Austin: '72.7'
}, {
  date: '20120518',
  'New York': '61.0',
  'San Francisco': '52.2',
  Austin: '73.7'
}, {
  date: '20120519',
  'New York': '62.6',
  'San Francisco': '52.4',
  Austin: '77.5'
}, {
  date: '20120520',
  'New York': '66.2',
  'San Francisco': '54.5',
  Austin: '75.8'
}, {
  date: '20120521',
  'New York': '62.7',
  'San Francisco': '52.8',
  Austin: '76.9'
}, {
  date: '20120522',
  'New York': '63.7',
  'San Francisco': '53.9',
  Austin: '78.8'
}, {
  date: '20120523',
  'New York': '66.4',
  'San Francisco': '56.5',
  Austin: '77.7'
}, {
  date: '20120524',
  'New York': '64.5',
  'San Francisco': '54.7',
  Austin: '80.6'
}, {
  date: '20120525',
  'New York': '65.4',
  'San Francisco': '52.5',
  Austin: '81.4'
}, {
  date: '20120526',
  'New York': '69.4',
  'San Francisco': '52.1',
  Austin: '82.3'
}, {
  date: '20120527',
  'New York': '71.9',
  'San Francisco': '52.2',
  Austin: '80.3'
}, {
  date: '20120528',
  'New York': '74.4',
  'San Francisco': '52.9',
  Austin: '80.3'
}, {
  date: '20120529',
  'New York': '75.9',
  'San Francisco': '52.1',
  Austin: '82.2'
}, {
  date: '20120530',
  'New York': '72.9',
  'San Francisco': '52.1',
  Austin: '81.9'
}, {
  date: '20120531',
  'New York': '72.5',
  'San Francisco': '53.3',
  Austin: '82.4'
}, {
  date: '20120601',
  'New York': '67.2',
  'San Francisco': '54.8',
  Austin: '77.9'
}, {
  date: '20120602',
  'New York': '68.3',
  'San Francisco': '54.0',
  Austin: '81.1'
}, {
  date: '20120603',
  'New York': '67.7',
  'San Francisco': '52.3',
  Austin: '82.2'
}, {
  date: '20120604',
  'New York': '61.9',
  'San Francisco': '55.3',
  Austin: '81.2'
}, {
  date: '20120605',
  'New York': '58.3',
  'San Francisco': '53.5',
  Austin: '83.0'
}, {
  date: '20120606',
  'New York': '61.7',
  'San Francisco': '54.1',
  Austin: '83.2'
}, {
  date: '20120607',
  'New York': '66.7',
  'San Francisco': '53.9',
  Austin: '82.1'
}, {
  date: '20120608',
  'New York': '68.7',
  'San Francisco': '54.4',
  Austin: '77.5'
}, {
  date: '20120609',
  'New York': '72.2',
  'San Francisco': '55.0',
  Austin: '77.9'
}, {
  date: '20120610',
  'New York': '72.6',
  'San Francisco': '60.0',
  Austin: '82.9'
}, {
  date: '20120611',
  'New York': '69.2',
  'San Francisco': '57.2',
  Austin: '86.8'
}, {
  date: '20120612',
  'New York': '66.9',
  'San Francisco': '55.1',
  Austin: '85.3'
}, {
  date: '20120613',
  'New York': '66.7',
  'San Francisco': '53.3',
  Austin: '76.9'
}, {
  date: '20120614',
  'New York': '67.7',
  'San Francisco': '53.4',
  Austin: '84.5'
}, {
  date: '20120615',
  'New York': '68.5',
  'San Francisco': '54.6',
  Austin: '84.4'
}, {
  date: '20120616',
  'New York': '67.5',
  'San Francisco': '57.0',
  Austin: '83.8'
}, {
  date: '20120617',
  'New York': '64.2',
  'San Francisco': '55.6',
  Austin: '82.5'
}, {
  date: '20120618',
  'New York': '61.7',
  'San Francisco': '52.5',
  Austin: '82.9'
}, {
  date: '20120619',
  'New York': '66.4',
  'San Francisco': '53.9',
  Austin: '82.5'
}, {
  date: '20120620',
  'New York': '77.9',
  'San Francisco': '55.3',
  Austin: '81.3'
}, {
  date: '20120621',
  'New York': '88.3',
  'San Francisco': '53.3',
  Austin: '80.8'
}, {
  date: '20120622',
  'New York': '82.2',
  'San Francisco': '54.1',
  Austin: '81.7'
}, {
  date: '20120623',
  'New York': '77.0',
  'San Francisco': '55.2',
  Austin: '83.9'
}, {
  date: '20120624',
  'New York': '75.4',
  'San Francisco': '55.8',
  Austin: '85.5'
}, {
  date: '20120625',
  'New York': '70.9',
  'San Francisco': '56.8',
  Austin: '87.2'
}, {
  date: '20120626',
  'New York': '65.9',
  'San Francisco': '57.5',
  Austin: '88.0'
}, {
  date: '20120627',
  'New York': '73.5',
  'San Francisco': '57.7',
  Austin: '89.6'
}, {
  date: '20120628',
  'New York': '77.4',
  'San Francisco': '56.6',
  Austin: '86.7'
}, {
  date: '20120629',
  'New York': '79.6',
  'San Francisco': '56.4',
  Austin: '85.3'
}, {
  date: '20120630',
  'New York': '84.2',
  'San Francisco': '58.4',
  Austin: '81.7'
}, {
  date: '20120701',
  'New York': '81.8',
  'San Francisco': '58.8',
  Austin: '78.5'
}, {
  date: '20120702',
  'New York': '82.5',
  'San Francisco': '56.4',
  Austin: '83.1'
}, {
  date: '20120703',
  'New York': '80.2',
  'San Francisco': '56.5',
  Austin: '83.1'
}, {
  date: '20120704',
  'New York': '77.8',
  'San Francisco': '55.8',
  Austin: '84.5'
}, {
  date: '20120705',
  'New York': '86.1',
  'San Francisco': '54.8',
  Austin: '84.6'
}, {
  date: '20120706',
  'New York': '79.9',
  'San Francisco': '54.9',
  Austin: '84.2'
}, {
  date: '20120707',
  'New York': '83.5',
  'San Francisco': '54.7',
  Austin: '86.7'
}, {
  date: '20120708',
  'New York': '81.5',
  'San Francisco': '52.8',
  Austin: '84.3'
}, {
  date: '20120709',
  'New York': '77.8',
  'San Francisco': '53.7',
  Austin: '83.7'
}, {
  date: '20120710',
  'New York': '76.1',
  'San Francisco': '53.1',
  Austin: '77.1'
}, {
  date: '20120711',
  'New York': '76.3',
  'San Francisco': '52.7',
  Austin: '77.4'
}, {
  date: '20120712',
  'New York': '75.8',
  'San Francisco': '52.0',
  Austin: '80.6'
}, {
  date: '20120713',
  'New York': '77.2',
  'San Francisco': '53.4',
  Austin: '81.4'
}, {
  date: '20120714',
  'New York': '79.3',
  'San Francisco': '54.0',
  Austin: '80.2'
}, {
  date: '20120715',
  'New York': '78.9',
  'San Francisco': '54.0',
  Austin: '81.8'
}, {
  date: '20120716',
  'New York': '79.6',
  'San Francisco': '54.5',
  Austin: '77.3'
}, {
  date: '20120717',
  'New York': '83.3',
  'San Francisco': '56.7',
  Austin: '80.8'
}, {
  date: '20120718',
  'New York': '84.3',
  'San Francisco': '57.5',
  Austin: '81.6'
}, {
  date: '20120719',
  'New York': '75.1',
  'San Francisco': '57.1',
  Austin: '80.9'
}, {
  date: '20120720',
  'New York': '68.4',
  'San Francisco': '58.1',
  Austin: '83.9'
}, {
  date: '20120721',
  'New York': '68.4',
  'San Francisco': '57.6',
  Austin: '85.6'
}, {
  date: '20120722',
  'New York': '72.2',
  'San Francisco': '56.0',
  Austin: '83.6'
}, {
  date: '20120723',
  'New York': '75.6',
  'San Francisco': '56.6',
  Austin: '84.0'
}, {
  date: '20120724',
  'New York': '82.6',
  'San Francisco': '57.8',
  Austin: '83.0'
}, {
  date: '20120725',
  'New York': '78.4',
  'San Francisco': '57.5',
  Austin: '84.8'
}, {
  date: '20120726',
  'New York': '77.0',
  'San Francisco': '56.4',
  Austin: '84.4'
}, {
  date: '20120727',
  'New York': '79.4',
  'San Francisco': '55.3',
  Austin: '84.3'
}, {
  date: '20120728',
  'New York': '77.4',
  'San Francisco': '55.0',
  Austin: '83.9'
}, {
  date: '20120729',
  'New York': '72.5',
  'San Francisco': '55.6',
  Austin: '85.0'
}, {
  date: '20120730',
  'New York': '72.9',
  'San Francisco': '55.6',
  Austin: '84.9'
}, {
  date: '20120731',
  'New York': '73.6',
  'San Francisco': '55.9',
  Austin: '86.3'
}, {
  date: '20120801',
  'New York': '75.0',
  'San Francisco': '55.4',
  Austin: '86.5'
}, {
  date: '20120802',
  'New York': '77.7',
  'San Francisco': '54.4',
  Austin: '85.8'
}, {
  date: '20120803',
  'New York': '79.7',
  'San Francisco': '53.7',
  Austin: '85.3'
}, {
  date: '20120804',
  'New York': '79.6',
  'San Francisco': '54.1',
  Austin: '86.0'
}, {
  date: '20120805',
  'New York': '81.5',
  'San Francisco': '57.8',
  Austin: '84.2'
}, {
  date: '20120806',
  'New York': '80.0',
  'San Francisco': '58.2',
  Austin: '81.9'
}, {
  date: '20120807',
  'New York': '75.7',
  'San Francisco': '58.0',
  Austin: '86.5'
}, {
  date: '20120808',
  'New York': '77.8',
  'San Francisco': '57.0',
  Austin: '86.1'
}, {
  date: '20120809',
  'New York': '78.6',
  'San Francisco': '55.0',
  Austin: '86.8'
}, {
  date: '20120810',
  'New York': '77.8',
  'San Francisco': '54.8',
  Austin: '88.0'
}, {
  date: '20120811',
  'New York': '78.5',
  'San Francisco': '53.0',
  Austin: '85.1'
}, {
  date: '20120812',
  'New York': '78.8',
  'San Francisco': '52.5',
  Austin: '87.4'
}, {
  date: '20120813',
  'New York': '78.6',
  'San Francisco': '53.3',
  Austin: '88.0'
}, {
  date: '20120814',
  'New York': '76.8',
  'San Francisco': '53.9',
  Austin: '88.0'
}, {
  date: '20120815',
  'New York': '76.7',
  'San Francisco': '56.2',
  Austin: '87.2'
}, {
  date: '20120816',
  'New York': '75.9',
  'San Francisco': '57.1',
  Austin: '86.1'
}, {
  date: '20120817',
  'New York': '77.6',
  'San Francisco': '55.3',
  Austin: '86.8'
}, {
  date: '20120818',
  'New York': '72.6',
  'San Francisco': '56.2',
  Austin: '84.9'
}, {
  date: '20120819',
  'New York': '70.4',
  'San Francisco': '54.3',
  Austin: '76.8'
}, {
  date: '20120820',
  'New York': '71.8',
  'San Francisco': '53.1',
  Austin: '80.6'
}, {
  date: '20120821',
  'New York': '73.6',
  'San Francisco': '53.4',
  Austin: '80.0'
}, {
  date: '20120822',
  'New York': '74.7',
  'San Francisco': '54.5',
  Austin: '78.2'
}, {
  date: '20120823',
  'New York': '74.6',
  'San Francisco': '55.7',
  Austin: '79.1'
}, {
  date: '20120824',
  'New York': '76.0',
  'San Francisco': '54.8',
  Austin: '81.9'
}, {
  date: '20120825',
  'New York': '76.2',
  'San Francisco': '53.8',
  Austin: '84.7'
}, {
  date: '20120826',
  'New York': '73.4',
  'San Francisco': '56.5',
  Austin: '83.5'
}, {
  date: '20120827',
  'New York': '74.6',
  'San Francisco': '58.3',
  Austin: '82.1'
}, {
  date: '20120828',
  'New York': '79.4',
  'San Francisco': '58.7',
  Austin: '84.0'
}, {
  date: '20120829',
  'New York': '74.7',
  'San Francisco': '57.5',
  Austin: '85.7'
}, {
  date: '20120830',
  'New York': '73.5',
  'San Francisco': '55.9',
  Austin: '87.2'
}, {
  date: '20120831',
  'New York': '77.9',
  'San Francisco': '55.4',
  Austin: '82.9'
}, {
  date: '20120901',
  'New York': '80.7',
  'San Francisco': '55.7',
  Austin: '84.8'
}, {
  date: '20120902',
  'New York': '75.1',
  'San Francisco': '53.1',
  Austin: '83.9'
}, {
  date: '20120903',
  'New York': '73.5',
  'San Francisco': '53.5',
  Austin: '85.5'
}, {
  date: '20120904',
  'New York': '73.5',
  'San Francisco': '52.5',
  Austin: '86.4'
}, {
  date: '20120905',
  'New York': '77.7',
  'San Francisco': '54.5',
  Austin: '85.8'
}, {
  date: '20120906',
  'New York': '74.2',
  'San Francisco': '56.3',
  Austin: '85.4'
}, {
  date: '20120907',
  'New York': '76.0',
  'San Francisco': '56.4',
  Austin: '85.3'
}, {
  date: '20120908',
  'New York': '77.1',
  'San Francisco': '56.5',
  Austin: '81.9'
}, {
  date: '20120909',
  'New York': '69.7',
  'San Francisco': '56.4',
  Austin: '74.8'
}, {
  date: '20120910',
  'New York': '67.8',
  'San Francisco': '55.4',
  Austin: '71.6'
}, {
  date: '20120911',
  'New York': '64.0',
  'San Francisco': '56.2',
  Austin: '75.9'
}, {
  date: '20120912',
  'New York': '68.1',
  'San Francisco': '55.7',
  Austin: '82.1'
}, {
  date: '20120913',
  'New York': '69.3',
  'San Francisco': '54.3',
  Austin: '80.5'
}, {
  date: '20120914',
  'New York': '70.0',
  'San Francisco': '55.2',
  Austin: '70.0'
}, {
  date: '20120915',
  'New York': '69.3',
  'San Francisco': '54.3',
  Austin: '71.2'
}, {
  date: '20120916',
  'New York': '66.3',
  'San Francisco': '52.9',
  Austin: '70.3'
}, {
  date: '20120917',
  'New York': '67.0',
  'San Francisco': '54.8',
  Austin: '72.1'
}, {
  date: '20120918',
  'New York': '72.8',
  'San Francisco': '54.8',
  Austin: '73.7'
}, {
  date: '20120919',
  'New York': '67.2',
  'San Francisco': '56.8',
  Austin: '72.7'
}, {
  date: '20120920',
  'New York': '62.1',
  'San Francisco': '55.4',
  Austin: '71.7'
}, {
  date: '20120921',
  'New York': '64.0',
  'San Francisco': '55.8',
  Austin: '72.9'
}, {
  date: '20120922',
  'New York': '65.5',
  'San Francisco': '55.9',
  Austin: '73.1'
}, {
  date: '20120923',
  'New York': '65.7',
  'San Francisco': '52.8',
  Austin: '75.6'
}, {
  date: '20120924',
  'New York': '60.4',
  'San Francisco': '54.5',
  Austin: '78.3'
}, {
  date: '20120925',
  'New York': '63.2',
  'San Francisco': '53.3',
  Austin: '78.3'
}, {
  date: '20120926',
  'New York': '68.5',
  'San Francisco': '53.6',
  Austin: '79.6'
}, {
  date: '20120927',
  'New York': '69.2',
  'San Francisco': '52.1',
  Austin: '76.4'
}, {
  date: '20120928',
  'New York': '68.7',
  'San Francisco': '52.6',
  Austin: '77.2'
}, {
  date: '20120929',
  'New York': '62.5',
  'San Francisco': '53.9',
  Austin: '75.2'
}, {
  date: '20120930',
  'New York': '62.3',
  'San Francisco': '55.1',
  Austin: '71.9'
}];

/***/ }),

/***/ "./node_modules/@vx/mock-data/build/mocks/exoplanets.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [{
  name: 'Jupiter',
  radius: '10.97',
  distance: '0'
}, {
  name: 'Saturn',
  radius: '9.14',
  distance: '0'
}, {
  name: 'Uranus',
  radius: '3.98',
  distance: '0'
}, {
  name: 'Neptune',
  radius: '3.86',
  distance: '0'
}, {
  name: 'Earth',
  radius: '1',
  distance: '0'
}, {
  name: 'Venus',
  radius: '0.950',
  distance: '0'
}, {
  name: 'Mars',
  radius: '0.532',
  distance: '0'
}, {
  name: 'Mercury',
  radius: '0.383',
  distance: '0'
}, {
  name: 'Pluto',
  radius: '0.181',
  distance: '0'
}, {
  name: '11 Com b',
  radius: '12.64',
  distance: '110.60'
}, {
  name: '11 UMi b',
  radius: '12.89',
  distance: '119.50'
}, {
  name: '14 And b',
  radius: '13.18',
  distance: '76.40'
}, {
  name: '14 Her b',
  radius: '13.24',
  distance: '18.10'
}, {
  name: '16 Cyg B b',
  radius: '13.69',
  distance: '21.41'
}, {
  name: '18 Del b',
  radius: '12.90',
  distance: '73.10'
}, {
  name: '1RXS1609 b',
  radius: '19.04',
  distance: '145.00'
}, {
  name: '24 Sex b',
  radius: '13.62',
  distance: '74.80'
}, {
  name: '24 Sex c',
  radius: '13.99',
  distance: '74.80'
}, {
  name: '2M 0103(AB) b',
  radius: '12.74',
  distance: '47.20'
}, {
  name: '2M 0122-2439 b',
  radius: '12.74',
  distance: '36.00'
}, {
  name: '2M 044144 b',
  radius: '13.04',
  distance: '140.00'
}, {
  name: '2M 0746+20 b',
  radius: '10.86',
  distance: '12.21'
}, {
  name: '2M 2140+16 b',
  radius: '10.30',
  distance: '25.00'
}, {
  name: '2M 2206-20 b',
  radius: '14.56',
  distance: '26.67'
}, {
  name: '2M1207 b',
  radius: '13.31',
  distance: '52.40'
}, {
  name: '30 Ari B b',
  radius: '12.92',
  distance: '39.40'
}, {
  name: '4 Uma b',
  radius: '13.06',
  distance: '78.50'
}, {
  name: '42 Dra b',
  radius: '13.32',
  distance: '97.30'
}, {
  name: '47 Uma b',
  radius: '13.51',
  distance: '13.97'
}, {
  name: '47 Uma c',
  radius: '14.21',
  distance: '13.97'
}, {
  name: '47 Uma d',
  radius: '13.70',
  distance: '13.97'
}, {
  name: '51 Peg b',
  radius: '14.28',
  distance: '14.70'
}, {
  name: '55 Cnc b',
  radius: '14.03',
  distance: '12.34'
}, {
  name: '55 Cnc c',
  radius: '8.48',
  distance: '12.34'
}, {
  name: '55 Cnc d',
  radius: '13.33',
  distance: '12.34'
}, {
  name: '55 Cnc e',
  radius: '1.99',
  distance: '12.34'
}, {
  name: '55 Cnc f',
  radius: '7.75',
  distance: '12.34'
}, {
  name: '6 Lyn b',
  radius: '13.53',
  distance: '56.90'
}, {
  name: '61 Vir b',
  radius: '1.89',
  distance: '8.52'
}, {
  name: '61 Vir c',
  radius: '4.63',
  distance: '8.52'
}, {
  name: '61 Vir d',
  radius: '5.26',
  distance: '8.52'
}, {
  name: '7 CMa b',
  radius: '13.50',
  distance: '19.75'
}, {
  name: '70 Vir b',
  radius: '13.09',
  distance: '22.00'
}, {
  name: '75 Cet b',
  radius: '13.37',
  distance: '81.50'
}, {
  name: '81 Cet b',
  radius: '13.19',
  distance: '97.20'
}, {
  name: '91 Aqr b',
  radius: '13.41',
  distance: '45.90'
}, {
  name: 'AB Pic b',
  radius: '12.79',
  distance: '47.30'
}, {
  name: 'alf Ari b',
  radius: '13.66',
  distance: '20.20'
}, {
  name: 'alf Cen B b',
  radius: '1.10',
  distance: '1.30'
}, {
  name: 'BD +48 738 b',
  radius: '13.90',
  distance: ''
}, {
  name: 'BD+15 2940 b',
  radius: '13.81',
  distance: '585.00'
}, {
  name: 'BD+20 274 c',
  radius: '13.22',
  distance: ''
}, {
  name: 'BD-061339 b',
  radius: '3.29',
  distance: '20.00'
}, {
  name: 'BD-061339 c',
  radius: '9.22',
  distance: '20.00'
}, {
  name: 'BD-082823 b',
  radius: '4.04',
  distance: '42.20'
}, {
  name: 'BD-082823 c',
  radius: '14.44',
  distance: '42.20'
}, {
  name: 'BD-10 3166 b',
  radius: '14.26',
  distance: '66.00'
}, {
  name: 'BD-17 63 b',
  radius: '13.20',
  distance: '34.60'
}, {
  name: 'BD14 4559 b',
  radius: '13.75',
  distance: '50.00'
}, {
  name: 'BD20 2457 b',
  radius: '12.60',
  distance: '200.00'
}, {
  name: 'BD20 2457 c',
  radius: '12.82',
  distance: '200.00'
}, {
  name: 'beta Pic b',
  radius: '13.07',
  distance: '19.30'
}, {
  name: 'CD-35 2722 b',
  radius: '12.44',
  distance: '21.30'
}, {
  name: 'CFBDS 1458 b',
  radius: '13.10',
  distance: '23.10'
}, {
  name: 'CHXR 73 b',
  radius: '12.78',
  distance: ''
}, {
  name: 'CoRoT-1 b',
  radius: '16.69',
  distance: '460.00'
}, {
  name: 'CoRoT-10 b',
  radius: '10.86',
  distance: '345.00'
}, {
  name: 'CoRoT-11 b',
  radius: '16.02',
  distance: '560.00'
}, {
  name: 'CoRoT-12 b',
  radius: '16.13',
  distance: '1150.00'
}, {
  name: 'CoRoT-13 b',
  radius: '9.91',
  distance: '1310.00'
}, {
  name: 'CoRoT-14 b',
  radius: '12.21',
  distance: '1340.00'
}, {
  name: 'CoRoT-16 b',
  radius: '13.10',
  distance: '840.00'
}, {
  name: 'CoRoT-17 b',
  radius: '11.42',
  distance: '920.00'
}, {
  name: 'CoRoT-18 b',
  radius: '14.67',
  distance: '870.00'
}, {
  name: 'CoRoT-19 b',
  radius: '14.45',
  distance: '800.00'
}, {
  name: 'CoRoT-2 b',
  radius: '16.41',
  distance: '300.00'
}, {
  name: 'CoRoT-20 b',
  radius: '9.41',
  distance: '1230.00'
}, {
  name: 'CoRoT-21 b',
  radius: '14.56',
  distance: ''
}, {
  name: 'CoRoT-23 b',
  radius: '12.10',
  distance: '600.00'
}, {
  name: 'CoRoT-25 b',
  radius: '12.10',
  distance: '1000.00'
}, {
  name: 'CoRoT-26 b',
  radius: '14.11',
  distance: '1670.00'
}, {
  name: 'CoRoT-3 b',
  radius: '11.31',
  distance: '680.00'
}, {
  name: 'CoRoT-4 b',
  radius: '13.33',
  distance: ''
}, {
  name: 'CoRoT-5 b',
  radius: '14.90',
  distance: '400.00'
}, {
  name: 'CoRoT-6 b',
  radius: '13.06',
  distance: ''
}, {
  name: 'CoRoT-7 b',
  radius: '1.67',
  distance: '150.00'
}, {
  name: 'CoRoT-7 c',
  radius: '2.43',
  distance: '150.00'
}, {
  name: 'CoRoT-8 b',
  radius: '6.37',
  distance: '380.00'
}, {
  name: 'CoRoT-9 b',
  radius: '10.53',
  distance: '460.00'
}, {
  name: 'CT Cha b',
  radius: '24.64',
  distance: '165.00'
}, {
  name: 'DH Tau b',
  radius: '12.81',
  distance: ''
}, {
  name: 'DP Leo b',
  radius: '13.07',
  distance: ''
}, {
  name: 'eps CrB b',
  radius: '13.02',
  distance: '67.90'
}, {
  name: 'eps Eridani b',
  radius: '13.73',
  distance: '3.20'
}, {
  name: 'eps Tau b',
  radius: '13.03',
  distance: '45.00'
}, {
  name: 'Fomalhaut b',
  radius: '13.61',
  distance: '7.70'
}, {
  name: 'FU Tau b',
  radius: '12.74',
  distance: '140.00'
}, {
  name: 'gamma 1 Leo b',
  radius: '12.97',
  distance: '38.50'
}, {
  name: 'gamma Cephei b',
  radius: '13.65',
  distance: '13.79'
}, {
  name: 'GJ 1214 b',
  radius: '2.67',
  distance: '13.00'
}, {
  name: 'GJ 163 b',
  radius: '3.71',
  distance: '15.00'
}, {
  name: 'GJ 163 c',
  radius: '2.43',
  distance: '15.00'
}, {
  name: 'Gj 163 d',
  radius: '5.58',
  distance: '15.00'
}, {
  name: 'GJ 176 b',
  radius: '2.43',
  distance: '9.42'
}, {
  name: 'GJ 3021 b',
  radius: '13.38',
  distance: '17.62'
}, {
  name: 'GJ 317 b',
  radius: '13.66',
  distance: '15.10'
}, {
  name: 'GJ 317 c',
  radius: '13.61',
  distance: '15.10'
}, {
  name: 'GJ 328 b',
  radius: '13.49',
  distance: '19.80'
}, {
  name: 'GJ 3470 b',
  radius: '4.19',
  distance: '30.70'
}, {
  name: 'GJ 3634 b',
  radius: '2.20',
  distance: '19.80'
}, {
  name: 'GJ 433 b',
  radius: '2.01',
  distance: '9.04'
}, {
  name: 'GJ 433 c',
  radius: '7.63',
  distance: '9.04'
}, {
  name: 'GJ 436 b',
  radius: '4.09',
  distance: '10.20'
}, {
  name: 'GJ 504 b',
  radius: '13.24',
  distance: '17.56'
}, {
  name: 'GJ 667C b',
  radius: '1.95',
  distance: '7.23'
}, {
  name: 'GJ 667C c',
  radius: '1.74',
  distance: '7.23'
}, {
  name: 'GJ 667C d',
  radius: '2.19',
  distance: '7.23'
}, {
  name: 'GJ 667C e',
  radius: '1.52',
  distance: '7.23'
}, {
  name: 'GJ 667C f',
  radius: '1.52',
  distance: '7.23'
}, {
  name: 'GJ 667C g',
  radius: '1.93',
  distance: '7.23'
}, {
  name: 'GJ 674 b',
  radius: '3.62',
  distance: '4.54'
}, {
  name: 'GJ 676A b',
  radius: '13.21',
  distance: '16.45'
}, {
  name: 'GJ 676A c',
  radius: '13.37',
  distance: '16.45'
}, {
  name: 'GJ 676A d',
  radius: '1.90',
  distance: '16.45'
}, {
  name: 'GJ 676A e',
  radius: '3.87',
  distance: '16.45'
}, {
  name: 'GJ 832 b',
  radius: '14.13',
  distance: '4.94'
}, {
  name: 'GJ 849 b',
  radius: '13.97',
  distance: '9.10'
}, {
  name: 'GJ 849 c',
  radius: '13.98',
  distance: '9.10'
}, {
  name: 'Gl 179 b',
  radius: '14.02',
  distance: '12.30'
}, {
  name: 'Gl 581 b',
  radius: '4.29',
  distance: '6.21'
}, {
  name: 'Gl 581 c',
  radius: '1.94',
  distance: '6.21'
}, {
  name: 'Gl 581 d',
  radius: '2.05',
  distance: '6.21'
}, {
  name: 'Gl 581 e',
  radius: '1.27',
  distance: '6.21'
}, {
  name: 'Gl 649 b',
  radius: '14.44',
  distance: '10.34'
}, {
  name: 'Gl 649 c',
  radius: '3.49',
  distance: '10.34'
}, {
  name: 'Gl 86 b',
  radius: '13.31',
  distance: '10.90'
}, {
  name: 'Gliese 876 b',
  radius: '13.56',
  distance: '4.70'
}, {
  name: 'Gliese 876 c',
  radius: '14.08',
  distance: '4.70'
}, {
  name: 'Gliese 876 d',
  radius: '2.15',
  distance: '4.70'
}, {
  name: 'Gliese 876 e',
  radius: '4.09',
  distance: '4.70'
}, {
  name: 'GQ Lup b',
  radius: '20.16',
  distance: '140.00'
}, {
  name: 'GSC 06214-00210 b',
  radius: '12.69',
  distance: '145.00'
}, {
  name: 'HAT-P-1 b',
  radius: '14.77',
  distance: '139.00'
}, {
  name: 'HAT-P-11 b',
  radius: '4.73',
  distance: '38.00'
}, {
  name: 'HAT-P-12 b',
  radius: '10.69',
  distance: '142.50'
}, {
  name: 'HAT-P-13 b',
  radius: '14.34',
  distance: '214.00'
}, {
  name: 'HAT-P-13 c',
  radius: '12.76',
  distance: '214.00'
}, {
  name: 'HAT-P-14 b',
  radius: '13.44',
  distance: '205.00'
}, {
  name: 'HAT-P-15 b',
  radius: '12.01',
  distance: '190.00'
}, {
  name: 'HAT-P-16 b',
  radius: '14.44',
  distance: '235.00'
}, {
  name: 'HAT-P-17 b',
  radius: '11.31',
  distance: '90.00'
}, {
  name: 'HAT-P-17 c',
  radius: '13.77',
  distance: '90.00'
}, {
  name: 'HAT-P-18 b',
  radius: '11.09',
  distance: '166.00'
}, {
  name: 'HAT-P-19 b',
  radius: '12.68',
  distance: '215.00'
}, {
  name: 'HAT-P-2 b',
  radius: '10.65',
  distance: '118.00'
}, {
  name: 'HAT-P-20 b',
  radius: '9.71',
  distance: '70.00'
}, {
  name: 'HAT-P-21 b',
  radius: '11.47',
  distance: '254.00'
}, {
  name: 'HAT-P-22 b',
  radius: '12.10',
  distance: '82.00'
}, {
  name: 'HAT-P-23 b',
  radius: '15.32',
  distance: '393.00'
}, {
  name: 'HAT-P-24 b',
  radius: '13.91',
  distance: '306.00'
}, {
  name: 'HAT-P-25 b',
  radius: '13.33',
  distance: '297.00'
}, {
  name: 'HAT-P-26 b',
  radius: '6.32',
  distance: '134.00'
}, {
  name: 'HAT-P-27-WASP-40 b',
  radius: '11.82',
  distance: '204.00'
}, {
  name: 'HAT-P-28 b',
  radius: '13.57',
  distance: '395.00'
}, {
  name: 'HAT-P-29 b',
  radius: '12.40',
  distance: '322.00'
}, {
  name: 'HAT-P-3 b',
  radius: '9.26',
  distance: '130.00'
}, {
  name: 'HAT-P-30-WASP-51 b',
  radius: '15.01',
  distance: '193.00'
}, {
  name: 'HAT-P-31 b',
  radius: '11.98',
  distance: '354.00'
}, {
  name: 'HAT-P-32 b',
  radius: '22.81',
  distance: '320.00'
}, {
  name: 'HAT-P-33 b',
  radius: '20.46',
  distance: '419.00'
}, {
  name: 'HAT-P-34 b',
  radius: '12.40',
  distance: '257.00'
}, {
  name: 'HAT-P-35 b',
  radius: '14.92',
  distance: '535.00'
}, {
  name: 'HAT-P-36 b',
  radius: '14.16',
  distance: '317.00'
}, {
  name: 'HAT-P-37 b',
  radius: '13.19',
  distance: '411.00'
}, {
  name: 'HAT-P-38 b',
  radius: '9.24',
  distance: '249.00'
}, {
  name: 'HAT-P-39 b',
  radius: '17.60',
  distance: '642.00'
}, {
  name: 'HAT-P-4 b',
  radius: '14.22',
  distance: '310.00'
}, {
  name: 'HAT-P-40 b',
  radius: '19.38',
  distance: '501.00'
}, {
  name: 'HAT-P-41 b',
  radius: '17.12',
  distance: '311.00'
}, {
  name: 'HAT-P-42 b',
  radius: '14.30',
  distance: '447.00'
}, {
  name: 'HAT-P-43 b',
  radius: '14.37',
  distance: '543.00'
}, {
  name: 'HAT-P-44 b',
  radius: '14.34',
  distance: '374.00'
}, {
  name: 'HAT-P-44 c',
  radius: '13.65',
  distance: '374.00'
}, {
  name: 'HAT-P-45 b',
  radius: '15.97',
  distance: '305.00'
}, {
  name: 'HAT-P-46 b',
  radius: '14.38',
  distance: '296.00'
}, {
  name: 'HAT-P-46 c',
  radius: '13.55',
  distance: '296.00'
}, {
  name: 'HAT-P-5 b',
  radius: '14.02',
  distance: '340.00'
}, {
  name: 'HAT-P-6 b',
  radius: '14.90',
  distance: '200.00'
}, {
  name: 'HAT-P-7 b',
  radius: '15.92',
  distance: '320.00'
}, {
  name: 'HAT-P-8 b',
  radius: '16.80',
  distance: '230.00'
}, {
  name: 'HAT-P-9 b',
  radius: '15.68',
  distance: '480.00'
}, {
  name: 'HATS-1 b',
  radius: '14.58',
  distance: '303.00'
}, {
  name: 'HATS-2 b',
  radius: '13.08',
  distance: '360.00'
}, {
  name: 'HATS-3 b',
  radius: '15.47',
  distance: '453.00'
}, {
  name: 'HD 100655 b',
  radius: '13.69',
  distance: '122.00'
}, {
  name: 'HD 100777 b',
  radius: '13.86',
  distance: '52.80'
}, {
  name: 'HD 10180 c',
  radius: '3.85',
  distance: '39.40'
}, {
  name: 'HD 10180 d',
  radius: '3.62',
  distance: '39.40'
}, {
  name: 'HD 10180 e',
  radius: '5.54',
  distance: '39.40'
}, {
  name: 'HD 10180 f',
  radius: '5.39',
  distance: '39.40'
}, {
  name: 'HD 10180 g',
  radius: '5.06',
  distance: '39.40'
}, {
  name: 'HD 10180 h',
  radius: '9.38',
  distance: '39.40'
}, {
  name: 'HD 101930 b',
  radius: '11.69',
  distance: '30.49'
}, {
  name: 'HD 102117 b',
  radius: '8.56',
  distance: '42.00'
}, {
  name: 'HD 102195 b',
  radius: '14.30',
  distance: '28.98'
}, {
  name: 'HD 102272 b',
  radius: '13.14',
  distance: '360.00'
}, {
  name: 'HD 102272 c',
  radius: '13.50',
  distance: '360.00'
}, {
  name: 'HD 102329 b',
  radius: '13.14',
  distance: '158.00'
}, {
  name: 'HD 102365 b',
  radius: '4.29',
  distance: '9.24'
}, {
  name: 'HD 102956 b',
  radius: '13.94',
  distance: '126.00'
}, {
  name: 'HD 103197 b',
  radius: '6.25',
  distance: '49.30'
}, {
  name: 'HD 103774 b',
  radius: '14.32',
  distance: '55.00'
}, {
  name: 'HD 104067 b',
  radius: '8.95',
  distance: '20.80'
}, {
  name: 'HD 104985 b',
  radius: '13.11',
  distance: '102.00'
}, {
  name: 'HD 106252 b',
  radius: '13.03',
  distance: '37.44'
}, {
  name: 'HD 106270 b',
  radius: '12.87',
  distance: '84.90'
}, {
  name: 'HD 10647 b',
  radius: '13.96',
  distance: '17.30'
}, {
  name: 'HD 106515A b',
  radius: '12.87',
  distance: '35.20'
}, {
  name: 'HD 10697 b',
  radius: '13.11',
  distance: '32.56'
}, {
  name: 'HD 107148 b',
  radius: '9.57',
  distance: '51.30'
}, {
  name: 'HD 108147 b',
  radius: '10.81',
  distance: '38.57'
}, {
  name: 'HD 108863 b',
  radius: '13.50',
  distance: '139.00'
}, {
  name: 'HD 108874 b',
  radius: '13.79',
  distance: '68.50'
}, {
  name: 'HD 108874 c',
  radius: '13.92',
  distance: '68.50'
}, {
  name: 'HD 109246 b',
  radius: '14.05',
  distance: '65.60'
}, {
  name: 'HD 109271 b',
  radius: '4.85',
  distance: '62.00'
}, {
  name: 'HD 109271 c',
  radius: '5.87',
  distance: '62.00'
}, {
  name: 'HD 109749 b',
  radius: '11.25',
  distance: '59.00'
}, {
  name: 'HD 110014 b',
  radius: '12.87',
  distance: '90.00'
}, {
  name: 'HD 111232 b',
  radius: '13.08',
  distance: '29.00'
}, {
  name: 'HD 113337 b',
  radius: '13.40',
  distance: '36.90'
}, {
  name: 'HD 113538 b',
  radius: '11.02',
  distance: '15.80'
}, {
  name: 'HD 113538 c',
  radius: '14.08',
  distance: '15.80'
}, {
  name: 'HD 114386 b',
  radius: '13.83',
  distance: '28.00'
}, {
  name: 'HD 114386 c',
  radius: '13.78',
  distance: '28.00'
}, {
  name: 'HD 114729 b',
  radius: '14.01',
  distance: '35.00'
}, {
  name: 'HD 114762 b',
  radius: '12.87',
  distance: '39.46'
}, {
  name: 'HD 114783 b',
  radius: '13.93',
  distance: '20.40'
}, {
  name: 'HD 11506 b',
  radius: '13.37',
  distance: '53.82'
}, {
  name: 'HD 11506 c',
  radius: '14.02',
  distance: '53.82'
}, {
  name: 'HD 116029 b',
  radius: '13.59',
  distance: '123.20'
}, {
  name: 'HD 117207 b',
  radius: '13.60',
  distance: '33.00'
}, {
  name: 'HD 117618 b',
  radius: '8.73',
  distance: '38.00'
}, {
  name: 'HD 117618 c',
  radius: '10.10',
  distance: '38.00'
}, {
  name: 'HD 118203 b',
  radius: '13.59',
  distance: '88.60'
}, {
  name: 'HD 11964 b',
  radius: '14.14',
  distance: '33.98'
}, {
  name: 'HD 11964 c',
  radius: '5.54',
  distance: '33.98'
}, {
  name: 'HD 11977 b',
  radius: '13.09',
  distance: '66.50'
}, {
  name: 'HD 120084 b',
  radius: '13.19',
  distance: '97.70'
}, {
  name: 'HD 121504 b',
  radius: '13.84',
  distance: '44.37'
}, {
  name: 'HD 122430 b',
  radius: '13.34',
  distance: '135.00'
}, {
  name: 'HD 125595 b',
  radius: '3.89',
  distance: '27.40'
}, {
  name: 'HD 125612 b',
  radius: '13.43',
  distance: '52.82'
}, {
  name: 'HD 125612 c',
  radius: '4.66',
  distance: '52.82'
}, {
  name: 'HD 125612 d',
  radius: '13.05',
  distance: '52.82'
}, {
  name: 'HD 126525 b',
  radius: '9.93',
  distance: '38.10'
}, {
  name: 'HD 12661 b',
  radius: '13.55',
  distance: '37.16'
}, {
  name: 'HD 12661 c',
  radius: '13.72',
  distance: '37.16'
}, {
  name: 'HD 126614 b',
  radius: '14.37',
  distance: '72.40'
}, {
  name: 'HD 128311 b',
  radius: '13.57',
  distance: '16.60'
}, {
  name: 'HD 128311 c',
  radius: '13.40',
  distance: '16.60'
}, {
  name: 'HD 129445 b',
  radius: '13.71',
  distance: '67.61'
}, {
  name: 'HD 130322 b',
  radius: '13.92',
  distance: '30.00'
}, {
  name: 'HD 131496 b',
  radius: '13.57',
  distance: '110.00'
}, {
  name: 'HD 13189 b',
  radius: '12.77',
  distance: '185.00'
}, {
  name: 'HD 132406 b',
  radius: '13.16',
  distance: '71.00'
}, {
  name: 'HD 132563B b',
  radius: '13.75',
  distance: '96.00'
}, {
  name: 'HD 134060 b',
  radius: '3.52',
  distance: '24.20'
}, {
  name: 'HD 134060 c',
  radius: '7.95',
  distance: '24.20'
}, {
  name: 'HD 134606 b',
  radius: '2.57',
  distance: '26.50'
}, {
  name: 'HD 134606 c',
  radius: '3.69',
  distance: '26.50'
}, {
  name: 'HD 134606 d',
  radius: '7.03',
  distance: '26.50'
}, {
  name: 'HD 134987 b',
  radius: '13.72',
  distance: '22.20'
}, {
  name: 'HD 134987 c',
  radius: '14.02',
  distance: '22.20'
}, {
  name: 'HD 136352 b',
  radius: '1.92',
  distance: '14.80'
}, {
  name: 'HD 136352 c',
  radius: '3.56',
  distance: '14.80'
}, {
  name: 'HD 136352 d',
  radius: '3.22',
  distance: '14.80'
}, {
  name: 'HD 136418 b',
  radius: '13.61',
  distance: '98.20'
}, {
  name: 'HD 137388 b',
  radius: '9.90',
  distance: '38.00'
}, {
  name: 'HD 13808 b',
  radius: '3.37',
  distance: '28.60'
}, {
  name: 'HD 13808 c',
  radius: '3.57',
  distance: '28.60'
}, {
  name: 'HD 13908 b',
  radius: '13.93',
  distance: '71.20'
}, {
  name: 'HD 13908 c',
  radius: '13.14',
  distance: '71.20'
}, {
  name: 'HD 13931 b',
  radius: '13.64',
  distance: '44.20'
}, {
  name: 'HD 139357 b',
  radius: '12.92',
  distance: '121.40'
}, {
  name: 'HD 141937 b',
  radius: '12.93',
  distance: '33.46'
}, {
  name: 'HD 142 b',
  radius: '13.82',
  distance: '20.60'
}, {
  name: 'HD 142 c',
  radius: '13.19',
  distance: '20.60'
}, {
  name: 'HD 142022 A b',
  radius: '13.20',
  distance: '35.87'
}, {
  name: 'HD 142245 b',
  radius: '13.64',
  distance: '109.50'
}, {
  name: 'HD 142415 b',
  radius: '13.71',
  distance: '34.20'
}, {
  name: 'HD 143361 b',
  radius: '13.42',
  distance: '59.35'
}, {
  name: 'HD 145377 b',
  radius: '13.15',
  distance: '57.70'
}, {
  name: 'HD 145457 b',
  radius: '13.45',
  distance: '126.00'
}, {
  name: 'HD 1461 b',
  radius: '2.30',
  distance: '23.40'
}, {
  name: 'HD 1461 c',
  radius: '2.03',
  distance: '23.40'
}, {
  name: 'HD 147018 b',
  radius: '13.59',
  distance: '42.96'
}, {
  name: 'HD 147018 c',
  radius: '13.09',
  distance: '42.96'
}, {
  name: 'HD 147513 b',
  radius: '13.84',
  distance: '12.90'
}, {
  name: 'HD 148156 b',
  radius: '14.00',
  distance: '53.05'
}, {
  name: 'HD 148427 b',
  radius: '13.94',
  distance: '59.30'
}, {
  name: 'HD 149026 b',
  radius: '8.04',
  distance: '78.90'
}, {
  name: 'HD 149143 b',
  radius: '13.79',
  distance: '63.00'
}, {
  name: 'HD 1502 b',
  radius: '13.42',
  distance: '159.00'
}, {
  name: 'HD 150433 b',
  radius: '8.45',
  distance: '29.60'
}, {
  name: 'HD 150706 b',
  radius: '13.48',
  distance: '27.20'
}, {
  name: 'HD 152079 b',
  radius: '13.43',
  distance: '85.17'
}, {
  name: 'HD 152581 b',
  radius: '13.74',
  distance: '186.00'
}, {
  name: 'HD 153950 b',
  radius: '13.48',
  distance: '49.60'
}, {
  name: 'HD 154088 b',
  radius: '2.06',
  distance: '17.80'
}, {
  name: 'HD 154345 b',
  radius: '13.93',
  distance: '18.06'
}, {
  name: 'HD 154672 b',
  radius: '13.21',
  distance: '65.80'
}, {
  name: 'HD 154857 b',
  radius: '13.66',
  distance: '68.50'
}, {
  name: 'HD 155358 b',
  radius: '14.00',
  distance: '43.00'
}, {
  name: 'HD 155358 c',
  radius: '14.02',
  distance: '43.00'
}, {
  name: 'HD 156279 b',
  radius: '12.93',
  distance: '36.60'
}, {
  name: 'HD 156411 b',
  radius: '14.06',
  distance: '55.10'
}, {
  name: 'HD 156668 b',
  radius: '1.72',
  distance: '24.50'
}, {
  name: 'HD 157172 b',
  radius: '7.00',
  distance: '31.90'
}, {
  name: 'HD 158038 b',
  radius: '13.66',
  distance: '103.60'
}, {
  name: 'HD 159243 b',
  radius: '13.81',
  distance: '69.20'
}, {
  name: 'HD 159243 c',
  radius: '13.57',
  distance: '69.20'
}, {
  name: 'HD 159868 b',
  radius: '13.59',
  distance: '52.70'
}, {
  name: 'HD 159868 c',
  radius: '14.07',
  distance: '52.70'
}, {
  name: 'HD 16141 b',
  radius: '9.70',
  distance: '35.90'
}, {
  name: 'HD 16175 b',
  radius: '13.27',
  distance: '59.80'
}, {
  name: 'HD 162020 b',
  radius: '12.76',
  distance: '31.26'
}, {
  name: 'HD 163607 b',
  radius: '14.05',
  distance: '69.00'
}, {
  name: 'HD 163607 c',
  radius: '13.55',
  distance: '69.00'
}, {
  name: 'HD 16417 b',
  radius: '5.13',
  distance: '25.50'
}, {
  name: 'HD 164509 b',
  radius: '14.26',
  distance: '52.00'
}, {
  name: 'HD 164604 b',
  radius: '13.48',
  distance: '38.00'
}, {
  name: 'HD 164922 b',
  radius: '14.40',
  distance: '21.93'
}, {
  name: 'HD 166724 b',
  radius: '13.30',
  distance: '42.30'
}, {
  name: 'HD 167042 b',
  radius: '13.71',
  distance: '50.00'
}, {
  name: 'HD 168443 b',
  radius: '13.03',
  distance: '37.38'
}, {
  name: 'HD 168443 c',
  radius: '12.69',
  distance: '37.38'
}, {
  name: 'HD 168746 b',
  radius: '10.07',
  distance: '43.12'
}, {
  name: 'HD 1690 b',
  radius: '13.12',
  distance: '319.00'
}, {
  name: 'HD 169830 b',
  radius: '13.45',
  distance: '36.32'
}, {
  name: 'HD 169830 c',
  radius: '13.30',
  distance: '36.32'
}, {
  name: 'HD 170469 b',
  radius: '14.11',
  distance: '64.97'
}, {
  name: 'HD 17092 b',
  radius: '13.25',
  distance: '109.00'
}, {
  name: 'HD 171028 b',
  radius: '13.62',
  distance: '90.00'
}, {
  name: 'HD 171238 b',
  radius: '13.50',
  distance: '50.28'
}, {
  name: 'HD 17156 b',
  radius: '12.26',
  distance: '78.24'
}, {
  name: 'HD 173416 b',
  radius: '13.48',
  distance: '135.00'
}, {
  name: 'HD 175167 b',
  radius: '13.02',
  distance: '67.02'
}, {
  name: 'HD 175541 b',
  radius: '14.15',
  distance: '128.00'
}, {
  name: 'HD 176051 b',
  radius: '13.74',
  distance: '14.99'
}, {
  name: 'HD 177830 b',
  radius: '13.75',
  distance: '59.00'
}, {
  name: 'HD 177830 c',
  radius: '7.93',
  distance: '59.00'
}, {
  name: 'HD 178911 B b',
  radius: '13.11',
  distance: '46.73'
}, {
  name: 'HD 179079 b',
  radius: '5.58',
  distance: '63.69'
}, {
  name: 'HD 179949 b',
  radius: '13.95',
  distance: '27.00'
}, {
  name: 'HD 180314 b',
  radius: '12.58',
  distance: '132.00'
}, {
  name: 'HD 180902 b',
  radius: '13.71',
  distance: '110.00'
}, {
  name: 'HD 181342 b',
  radius: '13.39',
  distance: '110.60'
}, {
  name: 'HD 181433 b',
  radius: '2.30',
  distance: '26.15'
}, {
  name: 'HD 181433 c',
  radius: '14.13',
  distance: '26.15'
}, {
  name: 'HD 181433 d',
  radius: '14.21',
  distance: '26.15'
}, {
  name: 'HD 181720 b',
  radius: '14.39',
  distance: '56.00'
}, {
  name: 'HD 183263 b',
  radius: '13.35',
  distance: '53.00'
}, {
  name: 'HD 183263 c',
  radius: '13.33',
  distance: '53.00'
}, {
  name: 'HD 185269 b',
  radius: '13.95',
  distance: '47.00'
}, {
  name: 'HD 187085 b',
  radius: '14.06',
  distance: '44.98'
}, {
  name: 'HD 187123 b',
  radius: '14.23',
  distance: '50.00'
}, {
  name: 'HD 187123 c',
  radius: '13.62',
  distance: '50.00'
}, {
  name: 'HD 18742 b',
  radius: '13.48',
  distance: '135.00'
}, {
  name: 'HD 188015 b',
  radius: '13.82',
  distance: '52.60'
}, {
  name: 'HD 189567 b',
  radius: '3.32',
  distance: '17.70'
}, {
  name: 'HD 189733 b',
  radius: '12.75',
  distance: '19.30'
}, {
  name: 'HD 190360 b',
  radius: '13.74',
  distance: '15.89'
}, {
  name: 'HD 190360 c',
  radius: '4.61',
  distance: '15.89'
}, {
  name: 'HD 190647 b',
  radius: '13.64',
  distance: '54.20'
}, {
  name: 'HD 190984 b',
  radius: '13.42',
  distance: '103.00'
}, {
  name: 'HD 192263 b',
  radius: '14.07',
  distance: '19.90'
}, {
  name: 'HD 192310 b',
  radius: '4.43',
  distance: '8.82'
}, {
  name: 'HD 192310 c',
  radius: '5.38',
  distance: '8.82'
}, {
  name: 'HD 192699 b',
  radius: '13.51',
  distance: '67.00'
}, {
  name: 'HD 195019 b',
  radius: '13.34',
  distance: '37.36'
}, {
  name: 'HD 196050 b',
  radius: '13.46',
  distance: '46.90'
}, {
  name: 'HD 196067 b',
  radius: '13.01',
  distance: '44.30'
}, {
  name: 'HD 196885 A b',
  radius: '13.44',
  distance: '33.00'
}, {
  name: 'HD 197037 b',
  radius: '14.03',
  distance: '33.00'
}, {
  name: 'HD 19994 b',
  radius: '13.69',
  distance: '22.38'
}, {
  name: 'HD 20003 b',
  radius: '3.67',
  distance: '43.80'
}, {
  name: 'HD 20003 c',
  radius: '3.90',
  distance: '43.80'
}, {
  name: 'HD 200964 b',
  radius: '13.65',
  distance: '68.40'
}, {
  name: 'HD 200964 c',
  radius: '13.97',
  distance: '68.40'
}, {
  name: 'HD 202206 b',
  radius: '12.68',
  distance: '46.34'
}, {
  name: 'HD 202206 c',
  radius: '13.52',
  distance: '46.34'
}, {
  name: 'HD 20367 b',
  radius: '13.90',
  distance: '27.00'
}, {
  name: 'HD 2039 b',
  radius: '13.22',
  distance: '89.80'
}, {
  name: 'HD 204313 b',
  radius: '13.36',
  distance: '47.37'
}, {
  name: 'HD 204313 c',
  radius: '4.48',
  distance: '47.37'
}, {
  name: 'HD 204313 d',
  radius: '13.69',
  distance: '47.37'
}, {
  name: 'HD 204941 b',
  radius: '10.93',
  distance: '27.00'
}, {
  name: 'HD 205739 b',
  radius: '13.78',
  distance: '90.30'
}, {
  name: 'HD 206610 b',
  radius: '13.57',
  distance: '194.00'
}, {
  name: 'HD 20781 b',
  radius: '3.67',
  distance: '35.40'
}, {
  name: 'HD 20781 c',
  radius: '4.27',
  distance: '35.40'
}, {
  name: 'HD 20782 b',
  radius: '13.64',
  distance: '36.02'
}, {
  name: 'HD 207832 b',
  radius: '14.13',
  distance: '54.40'
}, {
  name: 'HD 207832 c',
  radius: '14.00',
  distance: '54.40'
}, {
  name: 'HD 20794 b',
  radius: '1.44',
  distance: '6.06'
}, {
  name: 'HD 20794 c',
  radius: '1.38',
  distance: '6.06'
}, {
  name: 'HD 20794 d',
  radius: '1.83',
  distance: '6.06'
}, {
  name: 'HD 208487 b',
  radius: '14.34',
  distance: '45.00'
}, {
  name: 'HD 208527 b',
  radius: '12.86',
  distance: '320.20'
}, {
  name: 'HD 20868 b',
  radius: '13.62',
  distance: '48.90'
}, {
  name: 'HD 209458 b',
  radius: '15.46',
  distance: '47.00'
}, {
  name: 'HD 210277 b',
  radius: '13.83',
  distance: '21.29'
}, {
  name: 'HD 210702 b',
  radius: '13.64',
  distance: '56.00'
}, {
  name: 'HD 212301 b',
  radius: '14.30',
  distance: '52.70'
}, {
  name: 'HD 212771 b',
  radius: '13.55',
  distance: '131.00'
}, {
  name: 'HD 213240 b',
  radius: '13.26',
  distance: '40.75'
}, {
  name: 'HD 215152 b',
  radius: '1.45',
  distance: '21.50'
}, {
  name: 'HD 215152 c',
  radius: '1.52',
  distance: '21.50'
}, {
  name: 'HD 215456 b',
  radius: '6.35',
  distance: '38.00'
}, {
  name: 'HD 215456 c',
  radius: '10.46',
  distance: '38.00'
}, {
  name: 'HD 215497 b',
  radius: '2.10',
  distance: '44.00'
}, {
  name: 'HD 215497 c',
  radius: '14.44',
  distance: '44.00'
}, {
  name: 'HD 216435 b',
  radius: '13.82',
  distance: '33.30'
}, {
  name: 'HD 216437 b',
  radius: '13.66',
  distance: '26.50'
}, {
  name: 'HD 216770 b',
  radius: '14.12',
  distance: '38.00'
}, {
  name: 'HD 21693 b',
  radius: '3.35',
  distance: '32.40'
}, {
  name: 'HD 21693 c',
  radius: '4.95',
  distance: '32.40'
}, {
  name: 'HD 217107 b',
  radius: '13.80',
  distance: '19.72'
}, {
  name: 'HD 217107 c',
  radius: '13.52',
  distance: '19.72'
}, {
  name: 'HD 217786 b',
  radius: '12.80',
  distance: '54.80'
}, {
  name: 'HD 218566 b',
  radius: '9.57',
  distance: '29.94'
}, {
  name: 'HD 219077 b',
  radius: '12.84',
  distance: '29.35'
}, {
  name: 'HD 219415 b',
  radius: '13.86',
  distance: ''
}, {
  name: 'HD 219828 b',
  radius: '5.01',
  distance: '81.10'
}, {
  name: 'HD 220074 b',
  radius: '12.81',
  distance: '290.20'
}, {
  name: 'HD 220689 b',
  radius: '13.83',
  distance: '44.60'
}, {
  name: 'HD 220773 b',
  radius: '13.76',
  distance: '49.00'
}, {
  name: 'HD 221287 b',
  radius: '13.42',
  distance: '52.90'
}, {
  name: 'HD 222155 b',
  radius: '13.64',
  distance: '49.10'
}, {
  name: 'HD 222582 b',
  radius: '13.02',
  distance: '42.00'
}, {
  name: 'HD 224693 b',
  radius: '14.08',
  distance: '94.00'
}, {
  name: 'HD 22781 b',
  radius: '12.78',
  distance: '31.79'
}, {
  name: 'HD 23079 b',
  radius: '13.51',
  distance: '34.80'
}, {
  name: 'HD 23127 b',
  radius: '13.74',
  distance: '89.10'
}, {
  name: 'HD 231701 b',
  radius: '13.89',
  distance: '108.40'
}, {
  name: 'HD 233604 b',
  radius: '13.03',
  distance: ''
}, {
  name: 'HD 23596 b',
  radius: '13.00',
  distance: '52.00'
}, {
  name: 'HD 240210 b',
  radius: '13.07',
  distance: '143.00'
}, {
  name: 'HD 240237 b',
  radius: '13.19',
  distance: '1500.00'
}, {
  name: 'HD 24040 b',
  radius: '13.31',
  distance: '46.51'
}, {
  name: 'HD 25171 b',
  radius: '13.95',
  distance: '55.00'
}, {
  name: 'HD 2638 b',
  radius: '14.26',
  distance: '53.71'
}, {
  name: 'HD 27442 b',
  radius: '13.79',
  distance: '18.10'
}, {
  name: 'HD 27631 b',
  radius: '13.69',
  distance: '45.50'
}, {
  name: 'HD 27894 b',
  radius: '14.15',
  distance: '42.37'
}, {
  name: 'HD 28185 b',
  radius: '13.15',
  distance: '39.40'
}, {
  name: 'HD 28254 b',
  radius: '13.86',
  distance: '56.20'
}, {
  name: 'HD 285507 b',
  radius: '13.90',
  distance: '41.30'
}, {
  name: 'HD 28678 b',
  radius: '13.69',
  distance: '227.00'
}, {
  name: 'HD 290327 b',
  radius: '13.51',
  distance: '54.90'
}, {
  name: 'HD 2952 b',
  radius: '13.65',
  distance: '115.20'
}, {
  name: 'HD 30177 b',
  radius: '13.02',
  distance: '55.00'
}, {
  name: 'HD 30562 b',
  radius: '13.81',
  distance: '26.50'
}, {
  name: 'HD 30856 b',
  radius: '13.66',
  distance: '118.10'
}, {
  name: 'HD 31253 b',
  radius: '14.25',
  distance: '53.82'
}, {
  name: 'HD 31527 b',
  radius: '3.58',
  distance: '38.60'
}, {
  name: 'HD 31527 c',
  radius: '4.28',
  distance: '38.60'
}, {
  name: 'HD 31527 d',
  radius: '4.38',
  distance: '38.60'
}, {
  name: 'HD 32518 b',
  radius: '13.43',
  distance: '117.40'
}, {
  name: 'HD 330075 b',
  radius: '14.15',
  distance: '50.20'
}, {
  name: 'HD 33142 b',
  radius: '13.81',
  distance: '126.00'
}, {
  name: 'HD 33283 b',
  radius: '14.44',
  distance: '86.00'
}, {
  name: 'HD 33564 b',
  radius: '12.95',
  distance: '20.98'
}, {
  name: 'HD 34445 b',
  radius: '14.03',
  distance: '46.50'
}, {
  name: 'HD 3651 b',
  radius: '9.32',
  distance: '11.00'
}, {
  name: 'HD 3651 c',
  radius: '6.46',
  distance: '11.00'
}, {
  name: 'HD 37124 b',
  radius: '14.11',
  distance: '33.00'
}, {
  name: 'HD 37124 c',
  radius: '14.12',
  distance: '33.00'
}, {
  name: 'HD 37124 d',
  radius: '14.09',
  distance: '33.00'
}, {
  name: 'HD 37605 b',
  radius: '13.46',
  distance: '44.00'
}, {
  name: 'HD 37605 c',
  radius: '13.32',
  distance: '44.00'
}, {
  name: 'HD 38283 b',
  radius: '14.43',
  distance: '37.70'
}, {
  name: 'HD 38529 b',
  radius: '14.04',
  distance: '39.28'
}, {
  name: 'HD 38529 c',
  radius: '12.67',
  distance: '39.28'
}, {
  name: 'HD 38801 b',
  radius: '12.89',
  distance: '99.40'
}, {
  name: 'HD 38858 b',
  radius: '6.18',
  distance: '15.20'
}, {
  name: 'HD 39091 b',
  radius: '12.90',
  distance: '18.32'
}, {
  name: 'HD 39194 b',
  radius: '1.64',
  distance: '25.90'
}, {
  name: 'HD 39194 c',
  radius: '2.03',
  distance: '25.90'
}, {
  name: 'HD 39194 d',
  radius: '1.90',
  distance: '25.90'
}, {
  name: 'HD 40307 b',
  radius: '1.69',
  distance: '12.80'
}, {
  name: 'HD 40307 c',
  radius: '2.14',
  distance: '12.80'
}, {
  name: 'HD 40307 d',
  radius: '3.21',
  distance: '12.80'
}, {
  name: 'HD 40307 e',
  radius: '1.70',
  distance: '12.80'
}, {
  name: 'HD 40307 f',
  radius: '2.04',
  distance: '12.80'
}, {
  name: 'HD 40307 g',
  radius: '2.39',
  distance: '12.80'
}, {
  name: 'HD 40979 b',
  radius: '13.39',
  distance: '33.30'
}, {
  name: 'HD 41004 A b',
  radius: '13.51',
  distance: '42.50'
}, {
  name: 'HD 41004 B b',
  radius: '12.66',
  distance: '43.03'
}, {
  name: 'HD 4113 b',
  radius: '13.72',
  distance: '44.00'
}, {
  name: 'HD 41248 b',
  radius: '4.03',
  distance: '52.38'
}, {
  name: 'HD 41248 c',
  radius: '3.30',
  distance: '52.38'
}, {
  name: 'HD 4203 b',
  radius: '13.60',
  distance: '77.50'
}, {
  name: 'HD 4208 b',
  radius: '14.03',
  distance: '33.90'
}, {
  name: 'HD 4308 b',
  radius: '3.81',
  distance: '21.90'
}, {
  name: 'HD 4313 b',
  radius: '13.55',
  distance: '137.00'
}, {
  name: 'HD 43197 b',
  radius: '14.16',
  distance: '54.90'
}, {
  name: 'HD 43691 b',
  radius: '13.52',
  distance: '93.20'
}, {
  name: 'HD 44219 b',
  radius: '14.18',
  distance: '50.43'
}, {
  name: 'HD 45184 b',
  radius: '3.78',
  distance: '21.90'
}, {
  name: 'HD 45350 b',
  radius: '13.66',
  distance: '49.00'
}, {
  name: 'HD 45364 b',
  radius: '8.98',
  distance: '32.60'
}, {
  name: 'HD 45364 c',
  radius: '14.12',
  distance: '32.60'
}, {
  name: 'HD 45652 b',
  radius: '14.27',
  distance: '36.00'
}, {
  name: 'HD 46375 b',
  radius: '10.53',
  distance: '33.40'
}, {
  name: 'HD 47186 b',
  radius: '5.24',
  distance: '37.84'
}, {
  name: 'HD 47186 c',
  radius: '14.41',
  distance: '37.84'
}, {
  name: 'HD 47536 b',
  radius: '13.21',
  distance: '121.36'
}, {
  name: 'HD 47536 c',
  radius: '13.00',
  distance: '121.36'
}, {
  name: 'HD 48265 b',
  radius: '13.86',
  distance: '87.40'
}, {
  name: 'HD 49674 b',
  radius: '6.83',
  distance: '40.70'
}, {
  name: 'HD 50499 b',
  radius: '13.68',
  distance: '47.26'
}, {
  name: 'HD 50554 b',
  radius: '13.20',
  distance: '31.03'
}, {
  name: 'HD 51608 b',
  radius: '3.85',
  distance: '34.80'
}, {
  name: 'HD 51608 c',
  radius: '4.59',
  distance: '34.80'
}, {
  name: 'HD 52265 b',
  radius: '13.90',
  distance: '28.00'
}, {
  name: 'HD 52265 c',
  radius: '14.35',
  distance: '28.00'
}, {
  name: 'HD 5319 b',
  radius: '13.63',
  distance: '100.00'
}, {
  name: 'HD 5608 b',
  radius: '13.71',
  distance: '58.20'
}, {
  name: 'HD 5891 b',
  radius: '13.03',
  distance: '251.00'
}, {
  name: 'HD 59686 b',
  radius: '13.19',
  distance: '92.00'
}, {
  name: 'HD 60532 b',
  radius: '13.41',
  distance: '25.70'
}, {
  name: 'HD 60532 c',
  radius: '13.04',
  distance: '25.70'
}, {
  name: 'HD 62509 b',
  radius: '13.45',
  distance: '10.34'
}, {
  name: 'HD 63454 b',
  radius: '14.37',
  distance: '35.80'
}, {
  name: 'HD 63765 b',
  radius: '14.13',
  distance: '32.60'
}, {
  name: 'HD 6434 b',
  radius: '14.36',
  distance: '40.32'
}, {
  name: 'HD 65216 b',
  radius: '13.84',
  distance: '34.30'
}, {
  name: 'HD 65216 c',
  radius: '9.22',
  distance: '34.30'
}, {
  name: 'HD 66141 b',
  radius: '13.07',
  distance: '80.90'
}, {
  name: 'HD 66428 b',
  radius: '13.46',
  distance: '55.00'
}, {
  name: 'HD 6718 b',
  radius: '13.72',
  distance: '55.90'
}, {
  name: 'HD 68988 b',
  radius: '13.64',
  distance: '58.00'
}, {
  name: 'HD 69830 b',
  radius: '3.40',
  distance: '12.60'
}, {
  name: 'HD 69830 c',
  radius: '3.68',
  distance: '12.60'
}, {
  name: 'HD 69830 d',
  radius: '4.66',
  distance: '12.60'
}, {
  name: 'HD 70573 b',
  radius: '13.12',
  distance: '45.70'
}, {
  name: 'HD 70642 b',
  radius: '13.61',
  distance: '28.80'
}, {
  name: 'HD 7199 b',
  radius: '11.47',
  distance: '36.00'
}, {
  name: 'HD 72659 b',
  radius: '13.41',
  distance: '49.80'
}, {
  name: 'HD 73256 b',
  radius: '13.64',
  distance: '36.50'
}, {
  name: 'HD 73267 b',
  radius: '13.42',
  distance: '54.91'
}, {
  name: 'HD 73526 b',
  radius: '13.45',
  distance: '99.00'
}, {
  name: 'HD 73526 c',
  radius: '13.51',
  distance: '99.00'
}, {
  name: 'HD 73534 b',
  radius: '13.86',
  distance: '96.99'
}, {
  name: 'HD 74156 b',
  radius: '13.64',
  distance: '64.56'
}, {
  name: 'HD 74156 c',
  radius: '13.01',
  distance: '64.56'
}, {
  name: 'HD 7449 b',
  radius: '13.88',
  distance: '39.00'
}, {
  name: 'HD 7449 c',
  radius: '13.61',
  distance: '39.00'
}, {
  name: 'HD 75289 b',
  radius: '14.33',
  distance: '28.94'
}, {
  name: 'HD 75898 b',
  radius: '13.51',
  distance: '80.58'
}, {
  name: 'HD 76700 b',
  radius: '9.24',
  distance: '59.70'
}, {
  name: 'HD 77338 b',
  radius: '14.18',
  distance: '40.75'
}, {
  name: 'HD 7924 b',
  radius: '2.56',
  distance: '16.80'
}, {
  name: 'HD 79498 b',
  radius: '13.79',
  distance: '49.00'
}, {
  name: 'HD 80606 b',
  radius: '10.32',
  distance: '58.40'
}, {
  name: 'HD 81040 b',
  radius: '13.07',
  distance: '32.56'
}, {
  name: 'HD 81688 b',
  radius: '13.48',
  distance: '88.26'
}, {
  name: 'HD 82886 b',
  radius: '13.81',
  distance: '125.00'
}, {
  name: 'HD 82943 b',
  radius: '13.23',
  distance: '27.46'
}, {
  name: 'HD 82943 c',
  radius: '13.23',
  distance: '27.46'
}, {
  name: 'HD 82943 d',
  radius: '14.43',
  distance: '27.46'
}, {
  name: 'HD 83443 b',
  radius: '14.35',
  distance: '43.54'
}, {
  name: 'HD 8535 b',
  radius: '14.10',
  distance: '52.50'
}, {
  name: 'HD 85390 b',
  radius: '7.38',
  distance: '33.96'
}, {
  name: 'HD 85390 c',
  radius: '10.10',
  distance: '33.96'
}, {
  name: 'HD 85512 b',
  radius: '1.60',
  distance: '11.15'
}, {
  name: 'HD 8574 b',
  radius: '13.59',
  distance: '44.20'
}, {
  name: 'HD 86081 b',
  radius: '13.74',
  distance: '91.00'
}, {
  name: 'HD 86226 b',
  radius: '13.74',
  distance: '42.48'
}, {
  name: 'HD 86264 b',
  radius: '13.07',
  distance: '72.60'
}, {
  name: 'HD 8673 b',
  radius: '12.77',
  distance: '38.25'
}, {
  name: 'HD 87883 b',
  radius: '12.83',
  distance: '18.10'
}, {
  name: 'HD 88133 b',
  radius: '9.83',
  distance: '74.50'
}, {
  name: 'HD 89307 b',
  radius: '13.61',
  distance: '30.90'
}, {
  name: 'HD 89744 b',
  radius: '13.05',
  distance: '40.00'
}, {
  name: 'HD 89744 c',
  radius: '13.34',
  distance: '40.00'
}, {
  name: 'HD 90156 b',
  radius: '4.61',
  distance: '39.60'
}, {
  name: 'HD 92788 b',
  radius: '13.32',
  distance: '32.82'
}, {
  name: 'HD 92788 c',
  radius: '13.91',
  distance: '32.82'
}, {
  name: 'HD 93083 b',
  radius: '14.39',
  distance: '28.90'
}, {
  name: 'HD 93385 b',
  radius: '2.42',
  distance: '42.20'
}, {
  name: 'HD 93385 c',
  radius: '3.33',
  distance: '42.20'
}, {
  name: 'HD 9446 b',
  radius: '14.09',
  distance: '53.00'
}, {
  name: 'HD 9446 c',
  radius: '13.66',
  distance: '53.00'
}, {
  name: 'HD 95086 b',
  radius: '13.19',
  distance: '90.40'
}, {
  name: 'HD 95089 b',
  radius: '13.84',
  distance: '139.00'
}, {
  name: 'HD 9578 b',
  radius: '14.08',
  distance: '57.24'
}, {
  name: 'HD 96063 b',
  radius: '13.97',
  distance: '158.00'
}, {
  name: 'HD 96127 b',
  radius: '13.31',
  distance: '540.00'
}, {
  name: 'HD 96167 b',
  radius: '14.10',
  distance: '84.00'
}, {
  name: 'HD 96700 b',
  radius: '2.53',
  distance: '25.60'
}, {
  name: 'HD 96700 c',
  radius: '3.78',
  distance: '25.60'
}, {
  name: 'HD 97658 b',
  radius: '2.34',
  distance: '21.10'
}, {
  name: 'HD 98219 b',
  radius: '13.66',
  distance: '134.00'
}, {
  name: 'HD 98649 b',
  radius: '13.02',
  distance: '40.30'
}, {
  name: 'HD 99109 b',
  radius: '14.24',
  distance: '60.50'
}, {
  name: 'HD 99492 b',
  radius: '6.63',
  distance: '18.00'
}, {
  name: 'HD 99492 c',
  radius: '14.40',
  distance: '18.00'
}, {
  name: 'HD 99706 b',
  radius: '13.77',
  distance: '129.00'
}, {
  name: 'HIP 12961 b',
  radius: '14.41',
  distance: '23.00'
}, {
  name: 'HIP 13044 b',
  radius: '13.82',
  distance: '701.00'
}, {
  name: 'HIP 14810 b',
  radius: '13.32',
  distance: '52.90'
}, {
  name: 'HIP 14810 c',
  radius: '13.81',
  distance: '52.90'
}, {
  name: 'HIP 14810 d',
  radius: '14.18',
  distance: '52.90'
}, {
  name: 'HIP 5158 b',
  radius: '13.76',
  distance: '45.00'
}, {
  name: 'HIP 5158 c',
  radius: '12.74',
  distance: '45.00'
}, {
  name: 'HIP 57050 b',
  radius: '11.65',
  distance: '11.00'
}, {
  name: 'HIP 57274 b',
  radius: '3.57',
  distance: '25.92'
}, {
  name: 'HIP 57274 c',
  radius: '14.34',
  distance: '25.92'
}, {
  name: 'HIP 57274 d',
  radius: '14.22',
  distance: '25.92'
}, {
  name: 'HIP 63242 b',
  radius: '12.89',
  distance: '135.00'
}, {
  name: 'HIP 70849 b',
  radius: '12.96',
  distance: '24.00'
}, {
  name: 'HIP 75458 b',
  radius: '12.97',
  distance: '31.50'
}, {
  name: 'HIP 77900 b',
  radius: '12.56',
  distance: ''
}, {
  name: 'HIP 78530 b',
  radius: '12.57',
  distance: '156.70'
}, {
  name: 'HIP 79431 b',
  radius: '13.59',
  distance: '14.40'
}, {
  name: 'HIP 91258 b',
  radius: '13.83',
  distance: '44.90'
}, {
  name: 'HN Peg b',
  radius: '12.32',
  distance: '18.40'
}, {
  name: 'HR 228 b',
  radius: '13.47',
  distance: ''
}, {
  name: 'HR 228 c',
  radius: '13.47',
  distance: ''
}, {
  name: 'HR 810 b',
  radius: '13.56',
  distance: '17.17'
}, {
  name: 'HR 8799 b',
  radius: '12.32',
  distance: '39.40'
}, {
  name: 'HR 8799 c',
  radius: '14.56',
  distance: '39.40'
}, {
  name: 'HR 8799 d',
  radius: '13.44',
  distance: '39.40'
}, {
  name: 'HR 8799 e',
  radius: '12.96',
  distance: '39.40'
}, {
  name: 'HU Aqr(AB) c',
  radius: '13.08',
  distance: ''
}, {
  name: 'HW Vir(AB) b',
  radius: '12.76',
  distance: '181.00'
}, {
  name: 'kappa And b',
  radius: '12.74',
  distance: '51.60'
}, {
  name: 'kappa CrB b',
  radius: '13.71',
  distance: '31.10'
}, {
  name: 'KELT-1 b',
  radius: '12.50',
  distance: '263.00'
}, {
  name: 'KELT-2A b',
  radius: '14.63',
  distance: '128.90'
}, {
  name: 'KELT-3 b',
  radius: '14.93',
  distance: '178.00'
}, {
  name: 'KELT-6 b',
  radius: '13.33',
  distance: ''
}, {
  name: 'Kepler-10 b',
  radius: '1.41',
  distance: '173.00'
}, {
  name: 'Kepler-10 c',
  radius: '2.23',
  distance: '173.00'
}, {
  name: 'Kepler-11 b',
  radius: '1.80',
  distance: ''
}, {
  name: 'Kepler-11 c',
  radius: '2.87',
  distance: ''
}, {
  name: 'Kepler-11 d',
  radius: '3.12',
  distance: ''
}, {
  name: 'Kepler-11 e',
  radius: '4.53',
  distance: ''
}, {
  name: 'Kepler-11 f',
  radius: '2.49',
  distance: ''
}, {
  name: 'Kepler-11 g',
  radius: '3.67',
  distance: ''
}, {
  name: 'Kepler-12 b',
  radius: '18.98',
  distance: ''
}, {
  name: 'Kepler-13 b',
  radius: '20.50',
  distance: ''
}, {
  name: 'Kepler-14 b',
  radius: '12.72',
  distance: '980.00'
}, {
  name: 'Kepler-15 b',
  radius: '10.75',
  distance: ''
}, {
  name: 'Kepler-16(AB) b',
  radius: '8.44',
  distance: ''
}, {
  name: 'Kepler-17 b',
  radius: '14.69',
  distance: '800.00'
}, {
  name: 'Kepler-18 b',
  radius: '2.00',
  distance: ''
}, {
  name: 'Kepler-18 c',
  radius: '5.48',
  distance: ''
}, {
  name: 'Kepler-18 d',
  radius: '6.96',
  distance: ''
}, {
  name: 'Kepler-19 b',
  radius: '2.22',
  distance: ''
}, {
  name: 'Kepler-20 b',
  radius: '1.90',
  distance: '290.00'
}, {
  name: 'Kepler-20 c',
  radius: '3.06',
  distance: '290.00'
}, {
  name: 'Kepler-20 d',
  radius: '2.80',
  distance: '290.00'
}, {
  name: 'Kepler-20 e',
  radius: '0.87',
  distance: '290.00'
}, {
  name: 'Kepler-20 f',
  radius: '1.01',
  distance: '290.00'
}, {
  name: 'Kepler-21 b',
  radius: '1.63',
  distance: '108.00'
}, {
  name: 'Kepler-22 b',
  radius: '2.35',
  distance: '190.00'
}, {
  name: 'Kepler-23 b',
  radius: '1.90',
  distance: ''
}, {
  name: 'Kepler-23 c',
  radius: '3.25',
  distance: ''
}, {
  name: 'Kepler-24 b',
  radius: '2.35',
  distance: ''
}, {
  name: 'Kepler-24 c',
  radius: '2.80',
  distance: ''
}, {
  name: 'Kepler-25 b',
  radius: '2.58',
  distance: ''
}, {
  name: 'Kepler-25 c',
  radius: '4.48',
  distance: ''
}, {
  name: 'Kepler-26 b',
  radius: '3.58',
  distance: ''
}, {
  name: 'Kepler-26 c',
  radius: '3.58',
  distance: ''
}, {
  name: 'Kepler-27 b',
  radius: '4.03',
  distance: ''
}, {
  name: 'Kepler-27 c',
  radius: '4.93',
  distance: ''
}, {
  name: 'Kepler-28 b',
  radius: '3.58',
  distance: ''
}, {
  name: 'Kepler-28 c',
  radius: '3.36',
  distance: ''
}, {
  name: 'Kepler-29 b',
  radius: '3.58',
  distance: ''
}, {
  name: 'Kepler-29 c',
  radius: '2.91',
  distance: ''
}, {
  name: 'Kepler-30 b',
  radius: '3.92',
  distance: ''
}, {
  name: 'Kepler-30 c',
  radius: '12.32',
  distance: ''
}, {
  name: 'Kepler-30 d',
  radius: '8.85',
  distance: ''
}, {
  name: 'Kepler-31 b',
  radius: '4.26',
  distance: ''
}, {
  name: 'Kepler-31 c',
  radius: '4.26',
  distance: ''
}, {
  name: 'Kepler-32 b',
  radius: '4.14',
  distance: ''
}, {
  name: 'Kepler-32 c',
  radius: '3.70',
  distance: ''
}, {
  name: 'Kepler-33 b',
  radius: '1.79',
  distance: ''
}, {
  name: 'Kepler-33 c',
  radius: '3.25',
  distance: ''
}, {
  name: 'Kepler-33 d',
  radius: '5.38',
  distance: ''
}, {
  name: 'Kepler-33 e',
  radius: '4.03',
  distance: ''
}, {
  name: 'Kepler-33 f',
  radius: '4.48',
  distance: ''
}, {
  name: 'Kepler-34(AB)  b',
  radius: '8.55',
  distance: '1499.00'
}, {
  name: 'Kepler-35(AB) b',
  radius: '8.15',
  distance: '1645.00'
}, {
  name: 'Kepler-36 b',
  radius: '1.48',
  distance: ''
}, {
  name: 'Kepler-36 c',
  radius: '3.68',
  distance: ''
}, {
  name: 'Kepler-37 b',
  radius: '0.30',
  distance: '66.00'
}, {
  name: 'Kepler-37 c',
  radius: '0.74',
  distance: '66.00'
}, {
  name: 'Kepler-37 d',
  radius: '1.98',
  distance: '66.00'
}, {
  name: 'Kepler-38(AB) b',
  radius: '4.37',
  distance: ''
}, {
  name: 'Kepler-39 b',
  radius: '13.66',
  distance: '1200.00'
}, {
  name: 'Kepler-4 b',
  radius: '4.00',
  distance: '550.00'
}, {
  name: 'Kepler-40 b',
  radius: '13.10',
  distance: '2700.00'
}, {
  name: 'Kepler-41  b',
  radius: '9.42',
  distance: '730.00'
}, {
  name: 'Kepler-42 b',
  radius: '0.78',
  distance: '38.70'
}, {
  name: 'Kepler-42 c',
  radius: '0.73',
  distance: '38.70'
}, {
  name: 'Kepler-42 d',
  radius: '0.57',
  distance: '38.70'
}, {
  name: 'Kepler-43 b',
  radius: '13.44',
  distance: '1950.00'
}, {
  name: 'Kepler-44 b',
  radius: '13.89',
  distance: '2250.00'
}, {
  name: 'Kepler-45 b',
  radius: '10.75',
  distance: '333.00'
}, {
  name: 'Kepler-46 b',
  radius: '9.09',
  distance: '857.00'
}, {
  name: 'Kepler-46 c',
  radius: '14.38',
  distance: '857.00'
}, {
  name: 'Kepler-47(AB) b',
  radius: '3.02',
  distance: ''
}, {
  name: 'Kepler-47(AB) c',
  radius: '4.59',
  distance: ''
}, {
  name: 'Kepler-48 b',
  radius: '2.02',
  distance: ''
}, {
  name: 'Kepler-48 c',
  radius: '3.36',
  distance: ''
}, {
  name: 'Kepler-49 b',
  radius: '2.69',
  distance: ''
}, {
  name: 'Kepler-49 c',
  radius: '2.58',
  distance: ''
}, {
  name: 'Kepler-5 b',
  radius: '16.03',
  distance: ''
}, {
  name: 'Kepler-50 b',
  radius: '2.24',
  distance: ''
}, {
  name: 'Kepler-50 c',
  radius: '2.80',
  distance: ''
}, {
  name: 'Kepler-51 b',
  radius: '7.06',
  distance: ''
}, {
  name: 'Kepler-51 c',
  radius: '5.71',
  distance: ''
}, {
  name: 'Kepler-52 b',
  radius: '2.13',
  distance: ''
}, {
  name: 'Kepler-52 c',
  radius: '1.79',
  distance: ''
}, {
  name: 'Kepler-53 b',
  radius: '2.91',
  distance: ''
}, {
  name: 'Kepler-53 c',
  radius: '3.14',
  distance: ''
}, {
  name: 'Kepler-54 b',
  radius: '2.13',
  distance: ''
}, {
  name: 'Kepler-54 c',
  radius: '1.23',
  distance: ''
}, {
  name: 'Kepler-55 b',
  radius: '2.46',
  distance: ''
}, {
  name: 'Kepler-55 c',
  radius: '2.24',
  distance: ''
}, {
  name: 'Kepler-56 b',
  radius: '6.50',
  distance: ''
}, {
  name: 'Kepler-56 c',
  radius: '9.86',
  distance: ''
}, {
  name: 'Kepler-56 d',
  radius: '13.33',
  distance: ''
}, {
  name: 'Kepler-57 b',
  radius: '2.24',
  distance: ''
}, {
  name: 'Kepler-57 c',
  radius: '1.57',
  distance: ''
}, {
  name: 'Kepler-58 b',
  radius: '2.80',
  distance: ''
}, {
  name: 'Kepler-58 c',
  radius: '2.91',
  distance: ''
}, {
  name: 'Kepler-59 b',
  radius: '1.10',
  distance: ''
}, {
  name: 'Kepler-59 c',
  radius: '2.02',
  distance: ''
}, {
  name: 'Kepler-6 b',
  radius: '14.82',
  distance: ''
}, {
  name: 'Kepler-60 b',
  radius: '2.24',
  distance: ''
}, {
  name: 'Kepler-60 c',
  radius: '2.46',
  distance: ''
}, {
  name: 'Kepler-60 d',
  radius: '2.58',
  distance: ''
}, {
  name: 'Kepler-61 b',
  radius: '2.15',
  distance: '326.00'
}, {
  name: 'Kepler-62 b',
  radius: '1.31',
  distance: '368.00'
}, {
  name: 'Kepler-62 c',
  radius: '0.54',
  distance: '368.00'
}, {
  name: 'Kepler-62 d',
  radius: '1.95',
  distance: '368.00'
}, {
  name: 'Kepler-62 e',
  radius: '1.61',
  distance: '368.00'
}, {
  name: 'Kepler-62 f',
  radius: '1.41',
  distance: '368.00'
}, {
  name: 'Kepler-63 b',
  radius: '6.10',
  distance: '200.00'
}, {
  name: 'Kepler-65 b',
  radius: '1.42',
  distance: ''
}, {
  name: 'Kepler-65 c',
  radius: '2.58',
  distance: ''
}, {
  name: 'Kepler-65 d',
  radius: '1.51',
  distance: ''
}, {
  name: 'Kepler-66 b',
  radius: '2.80',
  distance: '1107.00'
}, {
  name: 'Kepler-67 b',
  radius: '2.91',
  distance: '1107.00'
}, {
  name: 'Kepler-68 b',
  radius: '2.30',
  distance: '135.00'
}, {
  name: 'Kepler-68 c',
  radius: '0.91',
  distance: '135.00'
}, {
  name: 'Kepler-68 d',
  radius: '13.89',
  distance: '135.00'
}, {
  name: 'Kepler-69 b',
  radius: '2.24',
  distance: ''
}, {
  name: 'Kepler-69 c',
  radius: '1.71',
  distance: ''
}, {
  name: 'Kepler-7 b',
  radius: '18.08',
  distance: ''
}, {
  name: 'Kepler-70  b',
  radius: '0.76',
  distance: '1180.00'
}, {
  name: 'Kepler-70 c',
  radius: '0.87',
  distance: '1180.00'
}, {
  name: 'Kepler-71 b',
  radius: '11.71',
  distance: ''
}, {
  name: 'Kepler-74 b',
  radius: '14.78',
  distance: '1330.00'
}, {
  name: 'Kepler-75 b',
  radius: '11.54',
  distance: '1140.00'
}, {
  name: 'Kepler-76 b',
  radius: '14.00',
  distance: ''
}, {
  name: 'Kepler-77 b',
  radius: '10.75',
  distance: '570.00'
}, {
  name: 'Kepler-78 b',
  radius: '1.20',
  distance: ''
}, {
  name: 'Kepler-79 b',
  radius: '3.30',
  distance: ''
}, {
  name: 'Kepler-79 c',
  radius: '3.73',
  distance: ''
}, {
  name: 'Kepler-79 d',
  radius: '7.17',
  distance: ''
}, {
  name: 'Kepler-79 e',
  radius: '3.49',
  distance: ''
}, {
  name: 'Kepler-8 b',
  radius: '15.89',
  distance: '1330.00'
}, {
  name: 'Kepler-80 b',
  radius: '2.35',
  distance: ''
}, {
  name: 'Kepler-80 c',
  radius: '2.58',
  distance: ''
}, {
  name: 'Kepler-80 d',
  radius: '1.40',
  distance: ''
}, {
  name: 'Kepler-80 e',
  radius: '1.50',
  distance: ''
}, {
  name: 'Kepler-80 f',
  radius: '1.30',
  distance: ''
}, {
  name: 'Kepler-81 b',
  radius: '2.54',
  distance: ''
}, {
  name: 'Kepler-81 c',
  radius: '2.45',
  distance: ''
}, {
  name: 'Kepler-82 b',
  radius: '4.00',
  distance: ''
}, {
  name: 'Kepler-82 c',
  radius: '5.30',
  distance: ''
}, {
  name: 'Kepler-83 b',
  radius: '2.34',
  distance: ''
}, {
  name: 'Kepler-83 c',
  radius: '1.94',
  distance: ''
}, {
  name: 'Kepler-84 b',
  radius: '2.20',
  distance: ''
}, {
  name: 'Kepler-84 c',
  radius: '2.40',
  distance: ''
}, {
  name: 'Kepler-85 b',
  radius: '1.99',
  distance: ''
}, {
  name: 'Kepler-85 c',
  radius: '2.21',
  distance: ''
}, {
  name: 'Kepler-86 b',
  radius: '10.14',
  distance: ''
}, {
  name: 'Kepler-87 b',
  radius: '13.55',
  distance: ''
}, {
  name: 'Kepler-87 c',
  radius: '6.15',
  distance: ''
}, {
  name: 'Kepler-88 b',
  radius: '4.22',
  distance: '385.00'
}, {
  name: 'Kepler-88 c',
  radius: '14.04',
  distance: '385.00'
}, {
  name: 'Kepler-89 b',
  radius: '1.71',
  distance: ''
}, {
  name: 'Kepler-89 c',
  radius: '4.32',
  distance: ''
}, {
  name: 'Kepler-89 d',
  radius: '11.20',
  distance: ''
}, {
  name: 'Kepler-89 e',
  radius: '6.16',
  distance: ''
}, {
  name: 'Kepler-9 b',
  radius: '9.42',
  distance: ''
}, {
  name: 'Kepler-9 c',
  radius: '9.21',
  distance: ''
}, {
  name: 'Kepler-9 d',
  radius: '1.65',
  distance: ''
}, {
  name: 'Kepler-90 b',
  radius: '1.31',
  distance: ''
}, {
  name: 'Kepler-90 c',
  radius: '1.19',
  distance: ''
}, {
  name: 'Kepler-90 d',
  radius: '2.88',
  distance: ''
}, {
  name: 'Kepler-90 e',
  radius: '2.67',
  distance: ''
}, {
  name: 'Kepler-90 f',
  radius: '2.89',
  distance: ''
}, {
  name: 'Kepler-90 g',
  radius: '8.12',
  distance: ''
}, {
  name: 'Kepler-90 h',
  radius: '11.31',
  distance: ''
}, {
  name: 'KIC-10255705 b',
  radius: '7.28',
  distance: ''
}, {
  name: 'KIC-10905746 b',
  radius: '2.65',
  distance: ''
}, {
  name: 'KIC-11152511 b',
  radius: '4.03',
  distance: ''
}, {
  name: 'KIC-12351927(AB) b',
  radius: '4.37',
  distance: ''
}, {
  name: 'KIC-12454613 b',
  radius: '2.69',
  distance: ''
}, {
  name: 'KIC-12557548 b',
  radius: '0.85',
  distance: '470.00'
}, {
  name: 'KIC-5010054 b',
  radius: '6.94',
  distance: ''
}, {
  name: 'KIC-5094412 b',
  radius: '5.71',
  distance: ''
}, {
  name: 'KIC-5522786 b',
  radius: '1.23',
  distance: ''
}, {
  name: 'KIC-5732155 b',
  radius: '12.77',
  distance: ''
}, {
  name: 'KIC-6185331 b',
  radius: '8.06',
  distance: ''
}, {
  name: 'KIC-6372194 b',
  radius: '8.29',
  distance: ''
}, {
  name: 'KIC-6436029 c',
  radius: '3.07',
  distance: ''
}, {
  name: 'KIC-8852719 b',
  radius: '3.53',
  distance: ''
}, {
  name: 'KIC-9662267 b',
  radius: '3.81',
  distance: ''
}, {
  name: 'KIC-9704149 b',
  radius: '4.48',
  distance: ''
}, {
  name: 'KOI-111 b',
  radius: '2.14',
  distance: ''
}, {
  name: 'KOI-111 c',
  radius: '2.05',
  distance: ''
}, {
  name: 'KOI-115 b',
  radius: '4.82',
  distance: ''
}, {
  name: 'KOI-115 c',
  radius: '1.91',
  distance: ''
}, {
  name: 'KOI-117 b',
  radius: '1.58',
  distance: ''
}, {
  name: 'KOI-117 c',
  radius: '1.71',
  distance: ''
}, {
  name: 'KOI-1203 b',
  radius: '2.90',
  distance: ''
}, {
  name: 'KOI-1203 c',
  radius: '2.80',
  distance: ''
}, {
  name: 'KOI-1215 b',
  radius: '2.92',
  distance: ''
}, {
  name: 'KOI-1215 c',
  radius: '3.36',
  distance: ''
}, {
  name: 'KOI-1236 b',
  radius: '4.31',
  distance: ''
}, {
  name: 'KOI-1236 c',
  radius: '3.10',
  distance: ''
}, {
  name: 'KOI-1278 b',
  radius: '2.46',
  distance: ''
}, {
  name: 'KOI-1278 c',
  radius: '3.10',
  distance: ''
}, {
  name: 'KOI-156 b',
  radius: '1.18',
  distance: ''
}, {
  name: 'KOI-156 c',
  radius: '1.60',
  distance: ''
}, {
  name: 'KOI-156 d',
  radius: '2.53',
  distance: ''
}, {
  name: 'KOI-1563 b',
  radius: '3.61',
  distance: ''
}, {
  name: 'KOI-1563 c',
  radius: '3.30',
  distance: ''
}, {
  name: 'KOI-1576 c',
  radius: '2.80',
  distance: ''
}, {
  name: 'KOI-1676 b',
  radius: '3.20',
  distance: ''
}, {
  name: 'KOI-1781 b',
  radius: '1.88',
  distance: ''
}, {
  name: 'KOI-1843 b',
  radius: '0.58',
  distance: ''
}, {
  name: 'KOI-1873 b',
  radius: '2.31',
  distance: ''
}, {
  name: 'KOI-1873 c',
  radius: '5.41',
  distance: ''
}, {
  name: 'KOI-202 b',
  radius: '11.42',
  distance: ''
}, {
  name: 'KOI-2025 b',
  radius: '3.10',
  distance: ''
}, {
  name: 'KOI-2025 c',
  radius: '2.80',
  distance: ''
}, {
  name: 'KOI-206 b',
  radius: '7.84',
  distance: ''
}, {
  name: 'KOI-2672 b',
  radius: '3.47',
  distance: ''
}, {
  name: 'KOI-2672 c',
  radius: '5.26',
  distance: ''
}, {
  name: 'KOI-274 b',
  radius: '1.13',
  distance: ''
}, {
  name: 'KOI-274 c',
  radius: '1.13',
  distance: ''
}, {
  name: 'KOI-282 b',
  radius: '2.90',
  distance: ''
}, {
  name: 'KOI-285 b',
  radius: '3.52',
  distance: ''
}, {
  name: 'KOI-285 c',
  radius: '2.61',
  distance: ''
}, {
  name: 'KOI-370 b',
  radius: '2.65',
  distance: ''
}, {
  name: 'KOI-370 c',
  radius: '4.42',
  distance: ''
}, {
  name: 'KOI-523 b',
  radius: '2.90',
  distance: ''
}, {
  name: 'KOI-523 c',
  radius: '7.11',
  distance: ''
}, {
  name: 'KOI-680 b',
  radius: '7.28',
  distance: ''
}, {
  name: 'KOI-730 b',
  radius: '3.47',
  distance: ''
}, {
  name: 'KOI-730 c',
  radius: '2.58',
  distance: ''
}, {
  name: 'KOI-730 d',
  radius: '2.80',
  distance: ''
}, {
  name: 'KOI-730 e',
  radius: '2.02',
  distance: ''
}, {
  name: 'KOI-82 b',
  radius: '2.20',
  distance: ''
}, {
  name: 'KOI-82 c',
  radius: '1.34',
  distance: ''
}, {
  name: 'KOI-82 d',
  radius: '0.69',
  distance: ''
}, {
  name: 'KOI-834 b',
  radius: '5.61',
  distance: ''
}, {
  name: 'KOI-834 c',
  radius: '2.00',
  distance: ''
}, {
  name: 'ksi Aql b',
  radius: '13.46',
  distance: '62.70'
}, {
  name: 'LKCA 15 b',
  radius: '13.13',
  distance: '145.00'
}, {
  name: 'MOA-2007-BLG-192-L b',
  radius: '1.54',
  distance: '700.00'
}, {
  name: 'MOA-2007-BLG-400-L b',
  radius: '13.97',
  distance: '6000.00'
}, {
  name: 'MOA-2008-BLG-310-L b',
  radius: '10.07',
  distance: '6000.00'
}, {
  name: 'MOA-2008-BLG-379L b',
  radius: '13.17',
  distance: '3600.00'
}, {
  name: 'MOA-2009-BLG-266L b',
  radius: '3.38',
  distance: '3040.00'
}, {
  name: 'MOA-2009-BLG-319 b',
  radius: '8.14',
  distance: '6100.00'
}, {
  name: 'MOA-2009-BLG-387L b',
  radius: '13.50',
  distance: '5700.00'
}, {
  name: 'MOA-2010-BLG-328L b',
  radius: '3.42',
  distance: '810.00'
}, {
  name: 'MOA-2010-BLG-477L b',
  radius: '13.74',
  distance: '2300.00'
}, {
  name: 'MOA-2011-BLG-293L b',
  radius: '13.23',
  distance: '7700.00'
}, {
  name: 'MOA-2011-BLG-322 b',
  radius: '12.96',
  distance: '7740.00'
}, {
  name: 'MOA-bin-1 b',
  radius: '13.34',
  distance: '5100.00'
}, {
  name: 'mu Ara b',
  radius: '13.69',
  distance: '15.30'
}, {
  name: 'mu Ara c',
  radius: '3.41',
  distance: '15.30'
}, {
  name: 'mu Ara d',
  radius: '14.23',
  distance: '15.30'
}, {
  name: 'mu Ara e',
  radius: '13.66',
  distance: '15.30'
}, {
  name: 'NGC 2423 3 b',
  radius: '12.89',
  distance: '766.00'
}, {
  name: 'NGC 4349 No 127 b',
  radius: '12.63',
  distance: '2176.00'
}, {
  name: 'NN Ser(AB) c',
  radius: '13.07',
  distance: '500.00'
}, {
  name: 'NN Ser(AB) d',
  radius: '13.55',
  distance: '500.00'
}, {
  name: 'nu Oph b',
  radius: '12.55',
  distance: '46.80'
}, {
  name: 'nu Oph c',
  radius: '12.50',
  distance: '46.80'
}, {
  name: 'NY Vir b',
  radius: '13.49',
  distance: ''
}, {
  name: 'OGLE-05-071L b',
  radius: '13.37',
  distance: '3300.00'
}, {
  name: 'OGLE-05-169L b',
  radius: '3.78',
  distance: '2700.00'
}, {
  name: 'OGLE-05-390L b',
  radius: '1.94',
  distance: '6500.00'
}, {
  name: 'OGLE-06-109L b',
  radius: '14.07',
  distance: '1510.00'
}, {
  name: 'OGLE-06-109L c',
  radius: '11.04',
  distance: '1510.00'
}, {
  name: 'OGLE-2007-BLG-368L b',
  radius: '5.15',
  distance: '5900.00'
}, {
  name: 'OGLE-2009-BLG-151_MOA-2009-232 b',
  radius: '12.97',
  distance: '390.00'
}, {
  name: 'OGLE-2011-BLG-0251 b',
  radius: '13.88',
  distance: '4090.00'
}, {
  name: 'OGLE-2011-BLG-0420 b',
  radius: '12.88',
  distance: '1990.00'
}, {
  name: 'OGLE-2012-BLG-0026L b',
  radius: '7.22',
  distance: '4080.00'
}, {
  name: 'OGLE-2012-BLG-0026L c',
  radius: '14.04',
  distance: '4080.00'
}, {
  name: 'OGLE-2012-BLG-0358L b',
  radius: '13.58',
  distance: '1760.00'
}, {
  name: 'OGLE-2012-BLG-0406L b',
  radius: '13.41',
  distance: '4970.00'
}, {
  name: 'OGLE-TR-10 b',
  radius: '19.26',
  distance: '1500.00'
}, {
  name: 'OGLE-TR-111 b',
  radius: '12.06',
  distance: '1500.00'
}, {
  name: 'OGLE-TR-113 b',
  radius: '12.43',
  distance: '1500.00'
}, {
  name: 'OGLE-TR-132 b',
  radius: '13.78',
  distance: '1500.00'
}, {
  name: 'OGLE-TR-182 b',
  radius: '16.46',
  distance: ''
}, {
  name: 'OGLE-TR-211 b',
  radius: '14.11',
  distance: ''
}, {
  name: 'OGLE-TR-56 b',
  radius: '13.44',
  distance: '1500.00'
}, {
  name: 'OGLE2-TR-L9 b',
  radius: '18.08',
  distance: '900.00'
}, {
  name: 'OGLE235-MOA53 b',
  radius: '13.50',
  distance: '5200.00'
}, {
  name: 'ome Ser b',
  radius: '13.62',
  distance: '80.60'
}, {
  name: 'omi CrB b',
  radius: '13.68',
  distance: '84.00'
}, {
  name: 'omi UMa b',
  radius: '13.23',
  distance: '56.30'
}, {
  name: 'Oph 11 b',
  radius: '12.60',
  distance: '145.00'
}, {
  name: 'PH1-Kepler-64 b',
  radius: '6.19',
  distance: ''
}, {
  name: 'POTS-1 b',
  radius: '10.54',
  distance: ''
}, {
  name: 'Pr0201 c',
  radius: '14.14',
  distance: ''
}, {
  name: 'Pr0211 b',
  radius: '13.59',
  distance: ''
}, {
  name: 'PSR 1257 12 b',
  radius: '0.30',
  distance: '710.00'
}, {
  name: 'PSR 1257 12 c',
  radius: '1.72',
  distance: '710.00'
}, {
  name: 'PSR 1257 12 d',
  radius: '1.66',
  distance: '710.00'
}, {
  name: 'PSR 1719-14 b',
  radius: '4.48',
  distance: '1200.00'
}, {
  name: 'PSR B1620-26 b',
  radius: '13.51',
  distance: '3800.00'
}, {
  name: 'Qatar-1 b',
  radius: '13.04',
  distance: ''
}, {
  name: 'Qatar-2 b',
  radius: '12.81',
  distance: ''
}, {
  name: 'Ross 458(AB) c',
  radius: '12.98',
  distance: '114.00'
}, {
  name: 'ROXs 42B b',
  radius: '12.83',
  distance: '135.00'
}, {
  name: 'RR Cae b',
  radius: '13.22',
  distance: ''
}, {
  name: 'SR 12 AB c',
  radius: '12.80',
  distance: '125.00'
}, {
  name: 'SWEEPS-04b',
  radius: '9.07',
  distance: '8500.00'
}, {
  name: 'SWEEPS-11b',
  radius: '12.66',
  distance: '8500.00'
}, {
  name: 'tau Boo b',
  radius: '13.14',
  distance: '15.60'
}, {
  name: 'tau Gem b',
  radius: '12.55',
  distance: '98.40'
}, {
  name: 'TrES-1b',
  radius: '12.31',
  distance: '157.00'
}, {
  name: 'TrES-2b',
  radius: '13.09',
  distance: '220.00'
}, {
  name: 'TrES-3b',
  radius: '14.62',
  distance: ''
}, {
  name: 'TrES-4b',
  radius: '19.11',
  distance: '479.00'
}, {
  name: 'TrES-5b',
  radius: '13.54',
  distance: '360.00'
}, {
  name: 'ups And b',
  radius: '14.15',
  distance: '13.47'
}, {
  name: 'ups And c',
  radius: '13.66',
  distance: '13.47'
}, {
  name: 'ups And d',
  radius: '12.91',
  distance: '13.47'
}, {
  name: 'ups And e',
  radius: '13.90',
  distance: '13.47'
}, {
  name: 'USco1602-2401 b',
  radius: '12.22',
  distance: ''
}, {
  name: 'USco1610-1913 b',
  radius: '12.56',
  distance: ''
}, {
  name: 'USco1612-1800 b',
  radius: '12.46',
  distance: ''
}, {
  name: 'UScoCTIO 108 b',
  radius: '12.72',
  distance: '145.00'
}, {
  name: 'UZ For(ab) d',
  radius: '12.96',
  distance: ''
}, {
  name: 'V391 Peg b',
  radius: '13.41',
  distance: '1400.00'
}, {
  name: 'WASP-1 b',
  radius: '16.62',
  distance: ''
}, {
  name: 'WASP-10 b',
  radius: '12.10',
  distance: '90.00'
}, {
  name: 'WASP-100 b',
  radius: '18.93',
  distance: ''
}, {
  name: 'WASP-101 b',
  radius: '15.79',
  distance: ''
}, {
  name: 'WASP-11-HAT-P-10 b',
  radius: '11.70',
  distance: '125.00'
}, {
  name: 'WASP-12 b',
  radius: '19.44',
  distance: '427.00'
}, {
  name: 'WASP-13 b',
  radius: '15.29',
  distance: '156.00'
}, {
  name: 'WASP-14 b',
  radius: '14.35',
  distance: '160.00'
}, {
  name: 'WASP-15 b',
  radius: '15.99',
  distance: '308.00'
}, {
  name: 'WASP-16 b',
  radius: '11.29',
  distance: ''
}, {
  name: 'WASP-17 b',
  radius: '22.30',
  distance: ''
}, {
  name: 'WASP-18 b',
  radius: '13.05',
  distance: '100.00'
}, {
  name: 'WASP-19 b',
  radius: '15.62',
  distance: ''
}, {
  name: 'WASP-2 b',
  radius: '12.08',
  distance: '144.00'
}, {
  name: 'WASP-20 b',
  radius: '10.08',
  distance: ''
}, {
  name: 'WASP-21 b',
  radius: '13.55',
  distance: '230.00'
}, {
  name: 'WASP-22 b',
  radius: '12.97',
  distance: '300.00'
}, {
  name: 'WASP-23 b',
  radius: '10.77',
  distance: ''
}, {
  name: 'WASP-24 b',
  radius: '12.36',
  distance: '330.00'
}, {
  name: 'WASP-25 b',
  radius: '14.11',
  distance: '169.00'
}, {
  name: 'WASP-26 b',
  radius: '14.35',
  distance: '250.00'
}, {
  name: 'WASP-28 b',
  radius: '12.54',
  distance: '334.00'
}, {
  name: 'WASP-29 b',
  radius: '9.42',
  distance: '80.00'
}, {
  name: 'WASP-3 b',
  radius: '16.28',
  distance: '223.00'
}, {
  name: 'WASP-31 b',
  radius: '17.21',
  distance: '400.00'
}, {
  name: 'WASP-32 b',
  radius: '13.22',
  distance: ''
}, {
  name: 'WASP-33 b',
  radius: '16.11',
  distance: '116.00'
}, {
  name: 'WASP-34 b',
  radius: '13.66',
  distance: '120.00'
}, {
  name: 'WASP-35 b',
  radius: '14.78',
  distance: ''
}, {
  name: 'WASP-36 b',
  radius: '14.21',
  distance: '450.00'
}, {
  name: 'WASP-37 b',
  radius: '12.72',
  distance: '338.00'
}, {
  name: 'WASP-38 b',
  radius: '12.08',
  distance: '110.00'
}, {
  name: 'WASP-39 b',
  radius: '14.22',
  distance: '230.00'
}, {
  name: 'WASP-4 b',
  radius: '15.62',
  distance: '300.00'
}, {
  name: 'WASP-41 b',
  radius: '13.55',
  distance: '180.00'
}, {
  name: 'WASP-42 b',
  radius: '12.10',
  distance: ''
}, {
  name: 'WASP-43 b',
  radius: '11.60',
  distance: ''
}, {
  name: 'WASP-44 b',
  radius: '12.77',
  distance: ''
}, {
  name: 'WASP-45 b',
  radius: '12.99',
  distance: ''
}, {
  name: 'WASP-46 b',
  radius: '14.67',
  distance: ''
}, {
  name: 'WASP-47 b',
  radius: '12.88',
  distance: '200.00'
}, {
  name: 'WASP-48 b',
  radius: '18.70',
  distance: ''
}, {
  name: 'WASP-49 b',
  radius: '12.49',
  distance: ''
}, {
  name: 'WASP-5 b',
  radius: '13.12',
  distance: '297.00'
}, {
  name: 'WASP-50 b',
  radius: '12.75',
  distance: '230.00'
}, {
  name: 'WASP-52 b',
  radius: '14.22',
  distance: '140.00'
}, {
  name: 'WASP-53 b',
  radius: '13.44',
  distance: ''
}, {
  name: 'WASP-54 b',
  radius: '15.68',
  distance: ''
}, {
  name: 'WASP-55 b',
  radius: '14.56',
  distance: '330.00'
}, {
  name: 'WASP-56 b',
  radius: '13.44',
  distance: ''
}, {
  name: 'WASP-57 b',
  radius: '12.32',
  distance: ''
}, {
  name: 'WASP-58 b',
  radius: '15.34',
  distance: '300.00'
}, {
  name: 'WASP-59 b',
  radius: '10.08',
  distance: '125.00'
}, {
  name: 'WASP-6 b',
  radius: '13.71',
  distance: '307.00'
}, {
  name: 'WASP-60 b',
  radius: '10.08',
  distance: '400.00'
}, {
  name: 'WASP-61 b',
  radius: '13.89',
  distance: '480.00'
}, {
  name: 'WASP-62 b',
  radius: '15.57',
  distance: '160.00'
}, {
  name: 'WASP-63 b',
  radius: '16.02',
  distance: '330.00'
}, {
  name: 'WASP-64 b',
  radius: '7.84',
  distance: ''
}, {
  name: 'WASP-65 b',
  radius: '12.45',
  distance: '310.00'
}, {
  name: 'WASP-66 b',
  radius: '15.57',
  distance: '380.00'
}, {
  name: 'WASP-67 b',
  radius: '15.68',
  distance: '225.00'
}, {
  name: 'WASP-68 b',
  radius: '10.08',
  distance: ''
}, {
  name: 'WASP-69 b',
  radius: '11.20',
  distance: ''
}, {
  name: 'WASP-7 b',
  radius: '14.90',
  distance: '140.00'
}, {
  name: 'WASP-70 b',
  radius: '8.96',
  distance: ''
}, {
  name: 'WASP-71 b',
  radius: '16.80',
  distance: '200.00'
}, {
  name: 'WASP-72 b',
  radius: '14.22',
  distance: ''
}, {
  name: 'WASP-75 b',
  radius: '14.22',
  distance: '260.00'
}, {
  name: 'WASP-76 b',
  radius: '20.50',
  distance: '120.00'
}, {
  name: 'WASP-77A b',
  radius: '13.55',
  distance: ''
}, {
  name: 'WASP-78 b',
  radius: '19.60',
  distance: '550.00'
}, {
  name: 'WASP-79 b',
  radius: '19.04',
  distance: '240.00'
}, {
  name: 'WASP-8 b',
  radius: '11.63',
  distance: '87.00'
}, {
  name: 'WASP-80 b',
  radius: '10.66',
  distance: '60.00'
}, {
  name: 'WASP-82 b',
  radius: '18.70',
  distance: '200.00'
}, {
  name: 'WASP-84 b',
  radius: '10.55',
  distance: '120.00'
}, {
  name: 'WASP-90 b',
  radius: '18.26',
  distance: '340.00'
}, {
  name: 'WASP-95 b',
  radius: '13.55',
  distance: ''
}, {
  name: 'WASP-96 b',
  radius: '13.44',
  distance: ''
}, {
  name: 'WASP-97 b',
  radius: '12.66',
  distance: ''
}, {
  name: 'WASP-98 b',
  radius: '12.32',
  distance: ''
}, {
  name: 'WASP-99 b',
  radius: '12.32',
  distance: ''
}, {
  name: 'WD 0806-661B b',
  radius: '13.01',
  distance: '19.20'
}, {
  name: 'WISE 1217+16A b',
  radius: '11.20',
  distance: '10.00'
}, {
  name: 'WISE 1711+3500 b',
  radius: '12.74',
  distance: '19.00'
}, {
  name: 'WTS-1 b',
  radius: '16.69',
  distance: '3200.00'
}, {
  name: 'WTS-2 b',
  radius: '14.56',
  distance: '1000.00'
}, {
  name: 'XO-1 b',
  radius: '13.26',
  distance: '200.00'
}, {
  name: 'XO-2 b',
  radius: '10.90',
  distance: '149.00'
}, {
  name: 'XO-3 b',
  radius: '13.63',
  distance: '260.00'
}, {
  name: 'XO-4 b',
  radius: '15.01',
  distance: '293.00'
}, {
  name: 'XO-5 b',
  radius: '11.54',
  distance: '255.00'
}];

/***/ }),

/***/ "./node_modules/@vx/mock-data/build/mocks/groupDateValue.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [{ key: 'Group1', value: '37', date: '04/23/12' }, { key: 'Group2', value: '12', date: '04/23/12' }, { key: 'Group3', value: '46', date: '04/23/12' }, { key: 'Group1', value: '32', date: '04/24/12' }, { key: 'Group2', value: '19', date: '04/24/12' }, { key: 'Group3', value: '42', date: '04/24/12' }, { key: 'Group1', value: '45', date: '04/25/12' }, { key: 'Group2', value: '16', date: '04/25/12' }, { key: 'Group3', value: '44', date: '04/25/12' }, { key: 'Group1', value: '24', date: '04/26/12' }, { key: 'Group2', value: '52', date: '04/26/12' }, { key: 'Group3', value: '64', date: '04/26/12' }];

/***/ }),

/***/ "./node_modules/@vx/mock-data/build/mocks/lesMiserables.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  nodes: [{ id: 'Myriel', group: 1 }, { id: 'Napoleon', group: 1 }, { id: 'Mlle.Baptistine', group: 1 }, { id: 'Mme.Magloire', group: 1 }, { id: 'CountessdeLo', group: 1 }, { id: 'Geborand', group: 1 }, { id: 'Champtercier', group: 1 }, { id: 'Cravatte', group: 1 }, { id: 'Count', group: 1 }, { id: 'OldMan', group: 1 }, { id: 'Labarre', group: 2 }, { id: 'Valjean', group: 2 }, { id: 'Marguerite', group: 3 }, { id: 'Mme.deR', group: 2 }, { id: 'Isabeau', group: 2 }, { id: 'Gervais', group: 2 }, { id: 'Tholomyes', group: 3 }, { id: 'Listolier', group: 3 }, { id: 'Fameuil', group: 3 }, { id: 'Blacheville', group: 3 }, { id: 'Favourite', group: 3 }, { id: 'Dahlia', group: 3 }, { id: 'Zephine', group: 3 }, { id: 'Fantine', group: 3 }, { id: 'Mme.Thenardier', group: 4 }, { id: 'Thenardier', group: 4 }, { id: 'Cosette', group: 5 }, { id: 'Javert', group: 4 }, { id: 'Fauchelevent', group: 0 }, { id: 'Bamatabois', group: 2 }, { id: 'Perpetue', group: 3 }, { id: 'Simplice', group: 2 }, { id: 'Scaufflaire', group: 2 }, { id: 'Woman1', group: 2 }, { id: 'Judge', group: 2 }, { id: 'Champmathieu', group: 2 }, { id: 'Brevet', group: 2 }, { id: 'Chenildieu', group: 2 }, { id: 'Cochepaille', group: 2 }, { id: 'Pontmercy', group: 4 }, { id: 'Boulatruelle', group: 6 }, { id: 'Eponine', group: 4 }, { id: 'Anzelma', group: 4 }, { id: 'Woman2', group: 5 }, { id: 'MotherInnocent', group: 0 }, { id: 'Gribier', group: 0 }, { id: 'Jondrette', group: 7 }, { id: 'Mme.Burgon', group: 7 }, { id: 'Gavroche', group: 8 }, { id: 'Gillenormand', group: 5 }, { id: 'Magnon', group: 5 }, { id: 'Mlle.Gillenormand', group: 5 }, { id: 'Mme.Pontmercy', group: 5 }, { id: 'Mlle.Vaubois', group: 5 }, { id: 'Lt.Gillenormand', group: 5 }, { id: 'Marius', group: 8 }, { id: 'BaronessT', group: 5 }, { id: 'Mabeuf', group: 8 }, { id: 'Enjolras', group: 8 }, { id: 'Combeferre', group: 8 }, { id: 'Prouvaire', group: 8 }, { id: 'Feuilly', group: 8 }, { id: 'Courfeyrac', group: 8 }, { id: 'Bahorel', group: 8 }, { id: 'Bossuet', group: 8 }, { id: 'Joly', group: 8 }, { id: 'Grantaire', group: 8 }, { id: 'MotherPlutarch', group: 9 }, { id: 'Gueulemer', group: 4 }, { id: 'Babet', group: 4 }, { id: 'Claquesous', group: 4 }, { id: 'Montparnasse', group: 4 }, { id: 'Toussaint', group: 5 }, { id: 'Child1', group: 10 }, { id: 'Child2', group: 10 }, { id: 'Brujon', group: 4 }, { id: 'Mme.Hucheloup', group: 8 }],
  links: [{ source: 'Napoleon', target: 'Myriel', value: 1 }, { source: 'Mlle.Baptistine', target: 'Myriel', value: 8 }, { source: 'Mme.Magloire', target: 'Myriel', value: 10 }, { source: 'Mme.Magloire', target: 'Mlle.Baptistine', value: 6 }, { source: 'CountessdeLo', target: 'Myriel', value: 1 }, { source: 'Geborand', target: 'Myriel', value: 1 }, { source: 'Champtercier', target: 'Myriel', value: 1 }, { source: 'Cravatte', target: 'Myriel', value: 1 }, { source: 'Count', target: 'Myriel', value: 2 }, { source: 'OldMan', target: 'Myriel', value: 1 }, { source: 'Valjean', target: 'Labarre', value: 1 }, { source: 'Valjean', target: 'Mme.Magloire', value: 3 }, { source: 'Valjean', target: 'Mlle.Baptistine', value: 3 }, { source: 'Valjean', target: 'Myriel', value: 5 }, { source: 'Marguerite', target: 'Valjean', value: 1 }, { source: 'Mme.deR', target: 'Valjean', value: 1 }, { source: 'Isabeau', target: 'Valjean', value: 1 }, { source: 'Gervais', target: 'Valjean', value: 1 }, { source: 'Listolier', target: 'Tholomyes', value: 4 }, { source: 'Fameuil', target: 'Tholomyes', value: 4 }, { source: 'Fameuil', target: 'Listolier', value: 4 }, { source: 'Blacheville', target: 'Tholomyes', value: 4 }, { source: 'Blacheville', target: 'Listolier', value: 4 }, { source: 'Blacheville', target: 'Fameuil', value: 4 }, { source: 'Favourite', target: 'Tholomyes', value: 3 }, { source: 'Favourite', target: 'Listolier', value: 3 }, { source: 'Favourite', target: 'Fameuil', value: 3 }, { source: 'Favourite', target: 'Blacheville', value: 4 }, { source: 'Dahlia', target: 'Tholomyes', value: 3 }, { source: 'Dahlia', target: 'Listolier', value: 3 }, { source: 'Dahlia', target: 'Fameuil', value: 3 }, { source: 'Dahlia', target: 'Blacheville', value: 3 }, { source: 'Dahlia', target: 'Favourite', value: 5 }, { source: 'Zephine', target: 'Tholomyes', value: 3 }, { source: 'Zephine', target: 'Listolier', value: 3 }, { source: 'Zephine', target: 'Fameuil', value: 3 }, { source: 'Zephine', target: 'Blacheville', value: 3 }, { source: 'Zephine', target: 'Favourite', value: 4 }, { source: 'Zephine', target: 'Dahlia', value: 4 }, { source: 'Fantine', target: 'Tholomyes', value: 3 }, { source: 'Fantine', target: 'Listolier', value: 3 }, { source: 'Fantine', target: 'Fameuil', value: 3 }, { source: 'Fantine', target: 'Blacheville', value: 3 }, { source: 'Fantine', target: 'Favourite', value: 4 }, { source: 'Fantine', target: 'Dahlia', value: 4 }, { source: 'Fantine', target: 'Zephine', value: 4 }, { source: 'Fantine', target: 'Marguerite', value: 2 }, { source: 'Fantine', target: 'Valjean', value: 9 }, { source: 'Mme.Thenardier', target: 'Fantine', value: 2 }, { source: 'Mme.Thenardier', target: 'Valjean', value: 7 }, { source: 'Thenardier', target: 'Mme.Thenardier', value: 13 }, { source: 'Thenardier', target: 'Fantine', value: 1 }, { source: 'Thenardier', target: 'Valjean', value: 12 }, { source: 'Cosette', target: 'Mme.Thenardier', value: 4 }, { source: 'Cosette', target: 'Valjean', value: 31 }, { source: 'Cosette', target: 'Tholomyes', value: 1 }, { source: 'Cosette', target: 'Thenardier', value: 1 }, { source: 'Javert', target: 'Valjean', value: 17 }, { source: 'Javert', target: 'Fantine', value: 5 }, { source: 'Javert', target: 'Thenardier', value: 5 }, { source: 'Javert', target: 'Mme.Thenardier', value: 1 }, { source: 'Javert', target: 'Cosette', value: 1 }, { source: 'Fauchelevent', target: 'Valjean', value: 8 }, { source: 'Fauchelevent', target: 'Javert', value: 1 }, { source: 'Bamatabois', target: 'Fantine', value: 1 }, { source: 'Bamatabois', target: 'Javert', value: 1 }, { source: 'Bamatabois', target: 'Valjean', value: 2 }, { source: 'Perpetue', target: 'Fantine', value: 1 }, { source: 'Simplice', target: 'Perpetue', value: 2 }, { source: 'Simplice', target: 'Valjean', value: 3 }, { source: 'Simplice', target: 'Fantine', value: 2 }, { source: 'Simplice', target: 'Javert', value: 1 }, { source: 'Scaufflaire', target: 'Valjean', value: 1 }, { source: 'Woman1', target: 'Valjean', value: 2 }, { source: 'Woman1', target: 'Javert', value: 1 }, { source: 'Judge', target: 'Valjean', value: 3 }, { source: 'Judge', target: 'Bamatabois', value: 2 }, { source: 'Champmathieu', target: 'Valjean', value: 3 }, { source: 'Champmathieu', target: 'Judge', value: 3 }, { source: 'Champmathieu', target: 'Bamatabois', value: 2 }, { source: 'Brevet', target: 'Judge', value: 2 }, { source: 'Brevet', target: 'Champmathieu', value: 2 }, { source: 'Brevet', target: 'Valjean', value: 2 }, { source: 'Brevet', target: 'Bamatabois', value: 1 }, { source: 'Chenildieu', target: 'Judge', value: 2 }, { source: 'Chenildieu', target: 'Champmathieu', value: 2 }, { source: 'Chenildieu', target: 'Brevet', value: 2 }, { source: 'Chenildieu', target: 'Valjean', value: 2 }, { source: 'Chenildieu', target: 'Bamatabois', value: 1 }, { source: 'Cochepaille', target: 'Judge', value: 2 }, { source: 'Cochepaille', target: 'Champmathieu', value: 2 }, { source: 'Cochepaille', target: 'Brevet', value: 2 }, { source: 'Cochepaille', target: 'Chenildieu', value: 2 }, { source: 'Cochepaille', target: 'Valjean', value: 2 }, { source: 'Cochepaille', target: 'Bamatabois', value: 1 }, { source: 'Pontmercy', target: 'Thenardier', value: 1 }, { source: 'Boulatruelle', target: 'Thenardier', value: 1 }, { source: 'Eponine', target: 'Mme.Thenardier', value: 2 }, { source: 'Eponine', target: 'Thenardier', value: 3 }, { source: 'Anzelma', target: 'Eponine', value: 2 }, { source: 'Anzelma', target: 'Thenardier', value: 2 }, { source: 'Anzelma', target: 'Mme.Thenardier', value: 1 }, { source: 'Woman2', target: 'Valjean', value: 3 }, { source: 'Woman2', target: 'Cosette', value: 1 }, { source: 'Woman2', target: 'Javert', value: 1 }, { source: 'MotherInnocent', target: 'Fauchelevent', value: 3 }, { source: 'MotherInnocent', target: 'Valjean', value: 1 }, { source: 'Gribier', target: 'Fauchelevent', value: 2 }, { source: 'Mme.Burgon', target: 'Jondrette', value: 1 }, { source: 'Gavroche', target: 'Mme.Burgon', value: 2 }, { source: 'Gavroche', target: 'Thenardier', value: 1 }, { source: 'Gavroche', target: 'Javert', value: 1 }, { source: 'Gavroche', target: 'Valjean', value: 1 }, { source: 'Gillenormand', target: 'Cosette', value: 3 }, { source: 'Gillenormand', target: 'Valjean', value: 2 }, { source: 'Magnon', target: 'Gillenormand', value: 1 }, { source: 'Magnon', target: 'Mme.Thenardier', value: 1 }, { source: 'Mlle.Gillenormand', target: 'Gillenormand', value: 9 }, { source: 'Mlle.Gillenormand', target: 'Cosette', value: 2 }, { source: 'Mlle.Gillenormand', target: 'Valjean', value: 2 }, { source: 'Mme.Pontmercy', target: 'Mlle.Gillenormand', value: 1 }, { source: 'Mme.Pontmercy', target: 'Pontmercy', value: 1 }, { source: 'Mlle.Vaubois', target: 'Mlle.Gillenormand', value: 1 }, { source: 'Lt.Gillenormand', target: 'Mlle.Gillenormand', value: 2 }, { source: 'Lt.Gillenormand', target: 'Gillenormand', value: 1 }, { source: 'Lt.Gillenormand', target: 'Cosette', value: 1 }, { source: 'Marius', target: 'Mlle.Gillenormand', value: 6 }, { source: 'Marius', target: 'Gillenormand', value: 12 }, { source: 'Marius', target: 'Pontmercy', value: 1 }, { source: 'Marius', target: 'Lt.Gillenormand', value: 1 }, { source: 'Marius', target: 'Cosette', value: 21 }, { source: 'Marius', target: 'Valjean', value: 19 }, { source: 'Marius', target: 'Tholomyes', value: 1 }, { source: 'Marius', target: 'Thenardier', value: 2 }, { source: 'Marius', target: 'Eponine', value: 5 }, { source: 'Marius', target: 'Gavroche', value: 4 }, { source: 'BaronessT', target: 'Gillenormand', value: 1 }, { source: 'BaronessT', target: 'Marius', value: 1 }, { source: 'Mabeuf', target: 'Marius', value: 1 }, { source: 'Mabeuf', target: 'Eponine', value: 1 }, { source: 'Mabeuf', target: 'Gavroche', value: 1 }, { source: 'Enjolras', target: 'Marius', value: 7 }, { source: 'Enjolras', target: 'Gavroche', value: 7 }, { source: 'Enjolras', target: 'Javert', value: 6 }, { source: 'Enjolras', target: 'Mabeuf', value: 1 }, { source: 'Enjolras', target: 'Valjean', value: 4 }, { source: 'Combeferre', target: 'Enjolras', value: 15 }, { source: 'Combeferre', target: 'Marius', value: 5 }, { source: 'Combeferre', target: 'Gavroche', value: 6 }, { source: 'Combeferre', target: 'Mabeuf', value: 2 }, { source: 'Prouvaire', target: 'Gavroche', value: 1 }, { source: 'Prouvaire', target: 'Enjolras', value: 4 }, { source: 'Prouvaire', target: 'Combeferre', value: 2 }, { source: 'Feuilly', target: 'Gavroche', value: 2 }, { source: 'Feuilly', target: 'Enjolras', value: 6 }, { source: 'Feuilly', target: 'Prouvaire', value: 2 }, { source: 'Feuilly', target: 'Combeferre', value: 5 }, { source: 'Feuilly', target: 'Mabeuf', value: 1 }, { source: 'Feuilly', target: 'Marius', value: 1 }, { source: 'Courfeyrac', target: 'Marius', value: 9 }, { source: 'Courfeyrac', target: 'Enjolras', value: 17 }, { source: 'Courfeyrac', target: 'Combeferre', value: 13 }, { source: 'Courfeyrac', target: 'Gavroche', value: 7 }, { source: 'Courfeyrac', target: 'Mabeuf', value: 2 }, { source: 'Courfeyrac', target: 'Eponine', value: 1 }, { source: 'Courfeyrac', target: 'Feuilly', value: 6 }, { source: 'Courfeyrac', target: 'Prouvaire', value: 3 }, { source: 'Bahorel', target: 'Combeferre', value: 5 }, { source: 'Bahorel', target: 'Gavroche', value: 5 }, { source: 'Bahorel', target: 'Courfeyrac', value: 6 }, { source: 'Bahorel', target: 'Mabeuf', value: 2 }, { source: 'Bahorel', target: 'Enjolras', value: 4 }, { source: 'Bahorel', target: 'Feuilly', value: 3 }, { source: 'Bahorel', target: 'Prouvaire', value: 2 }, { source: 'Bahorel', target: 'Marius', value: 1 }, { source: 'Bossuet', target: 'Marius', value: 5 }, { source: 'Bossuet', target: 'Courfeyrac', value: 12 }, { source: 'Bossuet', target: 'Gavroche', value: 5 }, { source: 'Bossuet', target: 'Bahorel', value: 4 }, { source: 'Bossuet', target: 'Enjolras', value: 10 }, { source: 'Bossuet', target: 'Feuilly', value: 6 }, { source: 'Bossuet', target: 'Prouvaire', value: 2 }, { source: 'Bossuet', target: 'Combeferre', value: 9 }, { source: 'Bossuet', target: 'Mabeuf', value: 1 }, { source: 'Bossuet', target: 'Valjean', value: 1 }, { source: 'Joly', target: 'Bahorel', value: 5 }, { source: 'Joly', target: 'Bossuet', value: 7 }, { source: 'Joly', target: 'Gavroche', value: 3 }, { source: 'Joly', target: 'Courfeyrac', value: 5 }, { source: 'Joly', target: 'Enjolras', value: 5 }, { source: 'Joly', target: 'Feuilly', value: 5 }, { source: 'Joly', target: 'Prouvaire', value: 2 }, { source: 'Joly', target: 'Combeferre', value: 5 }, { source: 'Joly', target: 'Mabeuf', value: 1 }, { source: 'Joly', target: 'Marius', value: 2 }, { source: 'Grantaire', target: 'Bossuet', value: 3 }, { source: 'Grantaire', target: 'Enjolras', value: 3 }, { source: 'Grantaire', target: 'Combeferre', value: 1 }, { source: 'Grantaire', target: 'Courfeyrac', value: 2 }, { source: 'Grantaire', target: 'Joly', value: 2 }, { source: 'Grantaire', target: 'Gavroche', value: 1 }, { source: 'Grantaire', target: 'Bahorel', value: 1 }, { source: 'Grantaire', target: 'Feuilly', value: 1 }, { source: 'Grantaire', target: 'Prouvaire', value: 1 }, { source: 'MotherPlutarch', target: 'Mabeuf', value: 3 }, { source: 'Gueulemer', target: 'Thenardier', value: 5 }, { source: 'Gueulemer', target: 'Valjean', value: 1 }, { source: 'Gueulemer', target: 'Mme.Thenardier', value: 1 }, { source: 'Gueulemer', target: 'Javert', value: 1 }, { source: 'Gueulemer', target: 'Gavroche', value: 1 }, { source: 'Gueulemer', target: 'Eponine', value: 1 }, { source: 'Babet', target: 'Thenardier', value: 6 }, { source: 'Babet', target: 'Gueulemer', value: 6 }, { source: 'Babet', target: 'Valjean', value: 1 }, { source: 'Babet', target: 'Mme.Thenardier', value: 1 }, { source: 'Babet', target: 'Javert', value: 2 }, { source: 'Babet', target: 'Gavroche', value: 1 }, { source: 'Babet', target: 'Eponine', value: 1 }, { source: 'Claquesous', target: 'Thenardier', value: 4 }, { source: 'Claquesous', target: 'Babet', value: 4 }, { source: 'Claquesous', target: 'Gueulemer', value: 4 }, { source: 'Claquesous', target: 'Valjean', value: 1 }, { source: 'Claquesous', target: 'Mme.Thenardier', value: 1 }, { source: 'Claquesous', target: 'Javert', value: 1 }, { source: 'Claquesous', target: 'Eponine', value: 1 }, { source: 'Claquesous', target: 'Enjolras', value: 1 }, { source: 'Montparnasse', target: 'Javert', value: 1 }, { source: 'Montparnasse', target: 'Babet', value: 2 }, { source: 'Montparnasse', target: 'Gueulemer', value: 2 }, { source: 'Montparnasse', target: 'Claquesous', value: 2 }, { source: 'Montparnasse', target: 'Valjean', value: 1 }, { source: 'Montparnasse', target: 'Gavroche', value: 1 }, { source: 'Montparnasse', target: 'Eponine', value: 1 }, { source: 'Montparnasse', target: 'Thenardier', value: 1 }, { source: 'Toussaint', target: 'Cosette', value: 2 }, { source: 'Toussaint', target: 'Javert', value: 1 }, { source: 'Toussaint', target: 'Valjean', value: 1 }, { source: 'Child1', target: 'Gavroche', value: 2 }, { source: 'Child2', target: 'Gavroche', value: 2 }, { source: 'Child2', target: 'Child1', value: 3 }, { source: 'Brujon', target: 'Babet', value: 3 }, { source: 'Brujon', target: 'Gueulemer', value: 3 }, { source: 'Brujon', target: 'Thenardier', value: 3 }, { source: 'Brujon', target: 'Gavroche', value: 1 }, { source: 'Brujon', target: 'Eponine', value: 1 }, { source: 'Brujon', target: 'Claquesous', value: 1 }, { source: 'Brujon', target: 'Montparnasse', value: 1 }, { source: 'Mme.Hucheloup', target: 'Bossuet', value: 1 }, { source: 'Mme.Hucheloup', target: 'Joly', value: 1 }, { source: 'Mme.Hucheloup', target: 'Grantaire', value: 1 }, { source: 'Mme.Hucheloup', target: 'Bahorel', value: 1 }, { source: 'Mme.Hucheloup', target: 'Courfeyrac', value: 1 }, { source: 'Mme.Hucheloup', target: 'Gavroche', value: 1 }, { source: 'Mme.Hucheloup', target: 'Enjolras', value: 1 }]
};

/***/ }),

/***/ "./node_modules/@vx/mock-data/build/mocks/letterFrequency.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [{ letter: 'A', frequency: 0.08167 }, { letter: 'B', frequency: 0.01492 }, { letter: 'C', frequency: 0.02782 }, { letter: 'D', frequency: 0.04253 }, { letter: 'E', frequency: 0.12702 }, { letter: 'F', frequency: 0.02288 }, { letter: 'G', frequency: 0.02015 }, { letter: 'H', frequency: 0.06094 }, { letter: 'I', frequency: 0.06966 }, { letter: 'J', frequency: 0.00153 }, { letter: 'K', frequency: 0.00772 }, { letter: 'L', frequency: 0.04025 }, { letter: 'M', frequency: 0.02406 }, { letter: 'N', frequency: 0.06749 }, { letter: 'O', frequency: 0.07507 }, { letter: 'P', frequency: 0.01929 }, { letter: 'Q', frequency: 0.00095 }, { letter: 'R', frequency: 0.05987 }, { letter: 'S', frequency: 0.06327 }, { letter: 'T', frequency: 0.09056 }, { letter: 'U', frequency: 0.02758 }, { letter: 'V', frequency: 0.00978 }, { letter: 'W', frequency: 0.0236 }, { letter: 'X', frequency: 0.0015 }, { letter: 'Y', frequency: 0.01974 }, { letter: 'Z', frequency: 0.00074 }];

/***/ }),

/***/ "./node_modules/@vx/mock-data/build/mocks/planets.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [{
  name: 'Jupiter',
  radius: '10.97',
  distance: '0'
}, {
  name: 'Saturn',
  radius: '9.14',
  distance: '0'
}, {
  name: 'Uranus',
  radius: '3.98',
  distance: '0'
}, {
  name: 'Neptune',
  radius: '3.86',
  distance: '0'
}, {
  name: 'Earth',
  radius: '1',
  distance: '0'
}, {
  name: 'Venus',
  radius: '0.950',
  distance: '0'
}, {
  name: 'Mars',
  radius: '0.532',
  distance: '0'
}, {
  name: 'Mercury',
  radius: '0.383',
  distance: '0'
}, {
  name: 'Pluto',
  radius: '0.181',
  distance: '0'
}];

/***/ }),

/***/ "./node_modules/@vx/mock-data/build/mocks/shakespeare.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [{
  id: 'Shakespeare',
  parent: null,
  size: 0
}, {
  id: 'Comedies',
  parent: 'Shakespeare',
  size: null
}, {
  id: 'Tragedies',
  parent: 'Shakespeare',
  size: null
}, {
  id: 'Histories',
  parent: 'Shakespeare',
  size: null
}, {
  id: 'As You Like It',
  parent: 'Comedies',
  size: null
}, {
  id: 'Adam',
  parent: 'As You Like It',
  size: 10
}, {
  id: 'Amiens',
  parent: 'As You Like It',
  size: 10
}, {
  id: 'Audrey',
  parent: 'As You Like It',
  size: 12
}, {
  id: 'Celia',
  parent: 'As You Like It',
  size: 108
}, {
  id: 'Charles',
  parent: 'As You Like It',
  size: 8
}, {
  id: 'Corin',
  parent: 'As You Like It',
  size: 24
}, {
  id: 'Dennis',
  parent: 'As You Like It',
  size: 2
}, {
  id: 'Duke',
  parent: 'As You Like It',
  size: 32
}, {
  id: 'Frederick',
  parent: 'As You Like It',
  size: 20
}, {
  id: 'Hymen',
  parent: 'As You Like It',
  size: 1
}, {
  id: 'Jaques (lord)',
  parent: 'As You Like It',
  size: 57
}, {
  id: 'Jaques (son)',
  parent: 'As You Like It',
  size: 2
}, {
  id: 'Le Beau',
  parent: 'As You Like It',
  size: 14
}, {
  id: 'Oliver',
  parent: 'As You Like It',
  size: 37
}, {
  id: 'Orlando',
  parent: 'As You Like It',
  size: 120
}, {
  id: 'Phebe',
  parent: 'As You Like It',
  size: 23
}, {
  id: 'Rosalind',
  parent: 'As You Like It',
  size: 201
}, {
  id: 'Silvius',
  parent: 'As You Like It',
  size: 24
}, {
  id: 'Sir Oliver Martext',
  parent: 'As You Like It',
  size: 3
}, {
  id: 'Touchstone',
  parent: 'As You Like It',
  size: 74
}, {
  id: 'William',
  parent: 'As You Like It',
  size: 11
}, {
  id: 'Comedy Of Errors',
  parent: 'Comedies',
  size: null
}, {
  id: 'Adriana',
  parent: 'Comedy Of Errors',
  size: 79
}, {
  id: 'Aegeon',
  parent: 'Comedy Of Errors',
  size: 17
}, {
  id: 'Aemilia',
  parent: 'Comedy Of Errors',
  size: 16
}, {
  id: 'Angelo',
  parent: 'Comedy Of Errors',
  size: 31
}, {
  id: 'Antipholus of Ephesus',
  parent: 'Comedy Of Errors',
  size: 76
}, {
  id: 'Antipholus of Syracuse',
  parent: 'Comedy Of Errors',
  size: 103
}, {
  id: 'Balthazar',
  parent: 'Comedy Of Errors',
  size: 5
}, {
  id: 'Courtezan',
  parent: 'Comedy Of Errors',
  size: 11
}, {
  id: 'Dromio of Ephesus',
  parent: 'Comedy Of Errors',
  size: 63
}, {
  id: 'Dromio of Syracuse',
  parent: 'Comedy Of Errors',
  size: 99
}, {
  id: 'Luce',
  parent: 'Comedy Of Errors',
  size: 7
}, {
  id: 'Luciana',
  parent: 'Comedy Of Errors',
  size: 43
}, {
  id: 'Pinch',
  parent: 'Comedy Of Errors',
  size: 6
}, {
  id: 'Solinus',
  parent: 'Comedy Of Errors',
  size: 22
}, {
  id: 'Merchant Of Venice',
  parent: 'Comedies',
  size: null
}, {
  id: 'Antonio',
  parent: 'Merchant Of Venice',
  size: 47
}, {
  id: 'Balthasar',
  parent: 'Merchant Of Venice',
  size: 1
}, {
  id: 'Bassanio',
  parent: 'Merchant Of Venice',
  size: 73
}, {
  id: 'Duke (of Venice)',
  parent: 'Merchant Of Venice',
  size: 18
}, {
  id: 'Gratiano',
  parent: 'Merchant Of Venice',
  size: 48
}, {
  id: 'Jessica',
  parent: 'Merchant Of Venice',
  size: 26
}, {
  id: 'Launcelot Gobbo',
  parent: 'Merchant Of Venice',
  size: 44
}, {
  id: 'Leonardo',
  parent: 'Merchant Of Venice',
  size: 2
}, {
  id: 'Lorenzo',
  parent: 'Merchant Of Venice',
  size: 47
}, {
  id: 'Nerissa',
  parent: 'Merchant Of Venice',
  size: 36
}, {
  id: 'Old Gobbo',
  parent: 'Merchant Of Venice',
  size: 19
}, {
  id: 'Portia',
  parent: 'Merchant Of Venice',
  size: 117
}, {
  id: 'Prince of Arragon',
  parent: 'Merchant Of Venice',
  size: 4
}, {
  id: 'Prince of Morocco',
  parent: 'Merchant Of Venice',
  size: 7
}, {
  id: 'Salanio',
  parent: 'Merchant Of Venice',
  size: 18
}, {
  id: 'Salarino',
  parent: 'Merchant Of Venice',
  size: 27
}, {
  id: 'Salerio',
  parent: 'Merchant Of Venice',
  size: 6
}, {
  id: 'Shylock',
  parent: 'Merchant Of Venice',
  size: 79
}, {
  id: 'Stephano',
  parent: 'Merchant Of Venice',
  size: 3
}, {
  id: 'Tubal',
  parent: 'Merchant Of Venice',
  size: 8
}, {
  id: "Midsummer Night's Dream",
  parent: 'Comedies',
  size: null
}, {
  id: 'Bottom',
  parent: "Midsummer Night's Dream",
  size: 59
}, {
  id: 'Cobweb',
  parent: "Midsummer Night's Dream",
  size: 4
}, {
  id: 'Demetrius',
  parent: "Midsummer Night's Dream",
  size: 48
}, {
  id: 'Egeus',
  parent: "Midsummer Night's Dream",
  size: 7
}, {
  id: 'Fairy',
  parent: "Midsummer Night's Dream",
  size: 4
}, {
  id: 'Flute',
  parent: "Midsummer Night's Dream",
  size: 18
}, {
  id: 'Helena',
  parent: "Midsummer Night's Dream",
  size: 36
}, {
  id: 'Hermia',
  parent: "Midsummer Night's Dream",
  size: 48
}, {
  id: 'Hippolyta',
  parent: "Midsummer Night's Dream",
  size: 14
}, {
  id: 'Lysander',
  parent: "Midsummer Night's Dream",
  size: 50
}, {
  id: 'Moth',
  parent: "Midsummer Night's Dream",
  size: 2
}, {
  id: 'Mustardseed',
  parent: "Midsummer Night's Dream",
  size: 5
}, {
  id: 'Oberon',
  parent: "Midsummer Night's Dream",
  size: 29
}, {
  id: 'Peaseblossom',
  parent: "Midsummer Night's Dream",
  size: 4
}, {
  id: 'Philostrate',
  parent: "Midsummer Night's Dream",
  size: 6
}, {
  id: 'Puck',
  parent: "Midsummer Night's Dream",
  size: 33
}, {
  id: 'Quince',
  parent: "Midsummer Night's Dream",
  size: 40
}, {
  id: 'Snout',
  parent: "Midsummer Night's Dream",
  size: 9
}, {
  id: 'Snug',
  parent: "Midsummer Night's Dream",
  size: 4
}, {
  id: 'Starveling',
  parent: "Midsummer Night's Dream",
  size: 7
}, {
  id: 'Theseus',
  parent: "Midsummer Night's Dream",
  size: 48
}, {
  id: 'Titania',
  parent: "Midsummer Night's Dream",
  size: 23
}, {
  id: 'Taming Of The Shrew',
  parent: 'Comedies',
  size: null
}, {
  id: 'Baptista Minola',
  parent: 'Taming Of The Shrew',
  size: 68
}, {
  id: 'Bianca',
  parent: 'Taming Of The Shrew',
  size: 29
}, {
  id: 'Biondello',
  parent: 'Taming Of The Shrew',
  size: 39
}, {
  id: 'Christopher Sly',
  parent: 'Taming Of The Shrew',
  size: 24
}, {
  id: 'Curtis',
  parent: 'Taming Of The Shrew',
  size: 20
}, {
  id: 'Gremio',
  parent: 'Taming Of The Shrew',
  size: 58
}, {
  id: 'Grumio',
  parent: 'Taming Of The Shrew',
  size: 63
}, {
  id: 'Haberdasher',
  parent: 'Taming Of The Shrew',
  size: 1
}, {
  id: 'Hortensio',
  parent: 'Taming Of The Shrew',
  size: 70
}, {
  id: 'Joseph',
  parent: 'Taming Of The Shrew',
  size: 1
}, {
  id: 'Katherina',
  parent: 'Taming Of The Shrew',
  size: 82
}, {
  id: 'Lucentio',
  parent: 'Taming Of The Shrew',
  size: 61
}, {
  id: 'Nathaniel',
  parent: 'Taming Of The Shrew',
  size: 4
}, {
  id: 'Nicholas',
  parent: 'Taming Of The Shrew',
  size: 1
}, {
  id: 'Peter',
  parent: 'Taming Of The Shrew',
  size: 2
}, {
  id: 'Petruchio',
  parent: 'Taming Of The Shrew',
  size: 158
}, {
  id: 'Philip',
  parent: 'Taming Of The Shrew',
  size: 1
}, {
  id: 'Tranio',
  parent: 'Taming Of The Shrew',
  size: 90
}, {
  id: 'Vincentio',
  parent: 'Taming Of The Shrew',
  size: 23
}, {
  id: 'The Tempest',
  parent: 'Comedies',
  size: null
}, {
  id: 'Adrian',
  parent: 'The Tempest',
  size: 9
}, {
  id: 'Alonso',
  parent: 'The Tempest',
  size: 40
}, {
  id: 'Antonio, duke of Milan',
  parent: 'The Tempest',
  size: 57
}, {
  id: 'Ariel',
  parent: 'The Tempest',
  size: 45
}, {
  id: 'Caliban',
  parent: 'The Tempest',
  size: 50
}, {
  id: 'Ceres',
  parent: 'The Tempest',
  size: 4
}, {
  id: 'Ferdinand',
  parent: 'The Tempest',
  size: 31
}, {
  id: 'Francisco',
  parent: 'The Tempest',
  size: 2
}, {
  id: 'Gonzalo',
  parent: 'The Tempest',
  size: 52
}, {
  id: 'Iris',
  parent: 'The Tempest',
  size: 4
}, {
  id: 'Juno',
  parent: 'The Tempest',
  size: 2
}, {
  id: 'Master',
  parent: 'The Tempest',
  size: 2
}, {
  id: 'Miranda',
  parent: 'The Tempest',
  size: 50
}, {
  id: 'Nymphs',
  parent: 'The Tempest',
  size: 0
}, {
  id: 'Prospero',
  parent: 'The Tempest',
  size: 114
}, {
  id: 'Reapers',
  parent: 'The Tempest',
  size: 0
}, {
  id: 'Sebastian',
  parent: 'The Tempest',
  size: 67
}, {
  id: 'Stephano (Servant to Portia)',
  parent: 'The Tempest',
  size: 60
}, {
  id: 'Trinculo',
  parent: 'The Tempest',
  size: 39
}, {
  id: 'Henry VIII',
  parent: 'Histories',
  size: null
}, {
  id: 'Anne Bullen',
  parent: 'Henry VIII',
  size: 18
}, {
  id: 'Archbishop Cranmer',
  parent: 'Henry VIII',
  size: 21
}, {
  id: 'Bishop Lincoln',
  parent: 'Henry VIII',
  size: 2
}, {
  id: 'Brandon',
  parent: 'Henry VIII',
  size: 6
}, {
  id: 'Capucius',
  parent: 'Henry VIII',
  size: 5
}, {
  id: 'Cardinal Campeius',
  parent: 'Henry VIII',
  size: 14
}, {
  id: 'Cardinal Wolsey',
  parent: 'Henry VIII',
  size: 79
}, {
  id: 'Cromwell',
  parent: 'Henry VIII',
  size: 21
}, {
  id: 'Doctor Butts',
  parent: 'Henry VIII',
  size: 4
}, {
  id: 'Duke of Buckingham',
  parent: 'Henry VIII',
  size: 26
}, {
  id: 'Duke of Norfolk',
  parent: 'Henry VIII',
  size: 48
}, {
  id: 'Duke of Suffolk',
  parent: 'Henry VIII',
  size: 30
}, {
  id: 'Earl of Surrey',
  parent: 'Henry VIII',
  size: 24
}, {
  id: 'First Secretary to Wolsey',
  parent: 'Henry VIII',
  size: 2
}, {
  id: 'Gardiner',
  parent: 'Henry VIII',
  size: 22
}, {
  id: 'Garter',
  parent: 'Henry VIII',
  size: 1
}, {
  id: 'Griffith',
  parent: 'Henry VIII',
  size: 13
}, {
  id: 'King Henry VIII',
  parent: 'Henry VIII',
  size: 81
}, {
  id: 'Lord Abergavenny',
  parent: 'Henry VIII',
  size: 5
}, {
  id: 'Lord Chamberlain',
  parent: 'Henry VIII',
  size: 38
}, {
  id: 'Lord Chancellor',
  parent: 'Henry VIII',
  size: 7
}, {
  id: 'Lord Sands',
  parent: 'Henry VIII',
  size: 17
}, {
  id: 'Old Lady',
  parent: 'Henry VIII',
  size: 14
}, {
  id: 'Patience',
  parent: 'Henry VIII',
  size: 3
}, {
  id: 'Porter (door-keeper of the Council-chamber)',
  parent: 'Henry VIII',
  size: 10
}, {
  id: 'Queen Katharine',
  parent: 'Henry VIII',
  size: 50
}, {
  id: 'Sir Anthony Denny',
  parent: 'Henry VIII',
  size: 3
}, {
  id: 'Sir Henry Guildford',
  parent: 'Henry VIII',
  size: 1
}, {
  id: 'Sir Nicholas Vaux',
  parent: 'Henry VIII',
  size: 1
}, {
  id: 'Sir Thomas Lovell',
  parent: 'Henry VIII',
  size: 21
}, {
  id: 'Surveyor to the Duke of Buckingham',
  parent: 'Henry VIII',
  size: 9
}, {
  id: 'History Of King John',
  parent: 'Histories',
  size: null
}, {
  id: 'Arthur Duke of Bretagne',
  parent: 'History Of King John',
  size: 23
}, {
  id: 'Blanch',
  parent: 'History Of King John',
  size: 9
}, {
  id: 'Cardinal Pandulph',
  parent: 'History Of King John',
  size: 23
}, {
  id: 'Chatillon',
  parent: 'History Of King John',
  size: 5
}, {
  id: 'Constance',
  parent: 'History Of King John',
  size: 36
}, {
  id: 'Essex',
  parent: 'History Of King John',
  size: 1
}, {
  id: 'Faulconbridge',
  parent: 'History Of King John',
  size: 4
}, {
  id: 'Hubert de Burgh',
  parent: 'History Of King John',
  size: 52
}, {
  id: 'James Gurney',
  parent: 'History Of King John',
  size: 1
}, {
  id: 'King John',
  parent: 'History Of King John',
  size: 95
}, {
  id: 'King Phillip',
  parent: 'History Of King John',
  size: 43
}, {
  id: 'Lady Faulconbridge',
  parent: 'History Of King John',
  size: 5
}, {
  id: 'Lewis the Dauphin',
  parent: 'History Of King John',
  size: 29
}, {
  id: 'Lord Bigot',
  parent: 'History Of King John',
  size: 6
}, {
  id: 'Lymoges duke of Austria',
  parent: 'History Of King John',
  size: 16
}, {
  id: 'Melun',
  parent: 'History Of King John',
  size: 3
}, {
  id: 'Pembroke earl of Pembroke',
  parent: 'History Of King John',
  size: 20
}, {
  id: 'Peter of Pomfret',
  parent: 'History Of King John',
  size: 1
}, {
  id: 'Philip the Bastard',
  parent: 'History Of King John',
  size: 89
}, {
  id: 'Prince Henry',
  parent: 'History Of King John',
  size: 8
}, {
  id: 'Queen Elinor',
  parent: 'History Of King John',
  size: 22
}, {
  id: 'Salisbury earl of Salisbury',
  parent: 'History Of King John',
  size: 36
}, {
  id: 'Antony And Cleopatra',
  parent: 'Tragedies',
  size: null
}, {
  id: 'Agrippa',
  parent: 'Antony And Cleopatra',
  size: 28
}, {
  id: 'Alexas',
  parent: 'Antony And Cleopatra',
  size: 15
}, {
  id: 'Antony',
  parent: 'Antony And Cleopatra',
  size: 202
}, {
  id: 'Canidius',
  parent: 'Antony And Cleopatra',
  size: 10
}, {
  id: 'Captain',
  parent: 'Antony And Cleopatra',
  size: 1
}, {
  id: 'Charmian',
  parent: 'Antony And Cleopatra',
  size: 63
}, {
  id: 'Cleopatra',
  parent: 'Antony And Cleopatra',
  size: 204
}, {
  id: 'Demetrius (Friend to Antony)',
  parent: 'Antony And Cleopatra',
  size: 2
}, {
  id: 'Dercetas',
  parent: 'Antony And Cleopatra',
  size: 5
}, {
  id: 'Diomedes',
  parent: 'Antony And Cleopatra',
  size: 7
}, {
  id: 'Dolabella',
  parent: 'Antony And Cleopatra',
  size: 23
}, {
  id: 'Domitius Enobarus',
  parent: 'Antony And Cleopatra',
  size: 113
}, {
  id: 'Egyptian',
  parent: 'Antony And Cleopatra',
  size: 2
}, {
  id: 'Eros',
  parent: 'Antony And Cleopatra',
  size: 27
}, {
  id: 'Euphronius',
  parent: 'Antony And Cleopatra',
  size: 5
}, {
  id: 'Gallus',
  parent: 'Antony And Cleopatra',
  size: 1
}, {
  id: 'Iras',
  parent: 'Antony And Cleopatra',
  size: 18
}, {
  id: 'Lepidus',
  parent: 'Antony And Cleopatra',
  size: 30
}, {
  id: 'Mardian',
  parent: 'Antony And Cleopatra',
  size: 7
}, {
  id: 'Mecaenas',
  parent: 'Antony And Cleopatra',
  size: 16
}, {
  id: 'Menas',
  parent: 'Antony And Cleopatra',
  size: 35
}, {
  id: 'Menecrates',
  parent: 'Antony And Cleopatra',
  size: 2
}, {
  id: 'Octavia',
  parent: 'Antony And Cleopatra',
  size: 13
}, {
  id: 'Octavius',
  parent: 'Antony And Cleopatra',
  size: 98
}, {
  id: 'Philo',
  parent: 'Antony And Cleopatra',
  size: 2
}, {
  id: 'Pompey',
  parent: 'Antony And Cleopatra',
  size: 41
}, {
  id: 'Proculeius',
  parent: 'Antony And Cleopatra',
  size: 10
}, {
  id: 'Scarus',
  parent: 'Antony And Cleopatra',
  size: 12
}, {
  id: 'Seleucus',
  parent: 'Antony And Cleopatra',
  size: 3
}, {
  id: 'Silius',
  parent: 'Antony And Cleopatra',
  size: 3
}, {
  id: 'Taurus',
  parent: 'Antony And Cleopatra',
  size: 1
}, {
  id: 'Thyreus',
  parent: 'Antony And Cleopatra',
  size: 12
}, {
  id: 'Varrius',
  parent: 'Antony And Cleopatra',
  size: 1
}, {
  id: 'Ventidius',
  parent: 'Antony And Cleopatra',
  size: 4
}, {
  id: 'Coriolanus',
  parent: 'Tragedies',
  size: null
}, {
  id: 'Aedile',
  parent: 'Coriolanus',
  size: 10
}, {
  id: 'Cominius',
  parent: 'Coriolanus',
  size: 67
}, {
  id: 'Coriolanus (Caius Marcius Coriolanus)',
  parent: 'Coriolanus',
  size: 189
}, {
  id: 'Junius Brutus',
  parent: 'Coriolanus',
  size: 91
}, {
  id: 'Lieutenant',
  parent: 'Coriolanus',
  size: 4
}, {
  id: 'Menenius Agrippa',
  parent: 'Coriolanus',
  size: 162
}, {
  id: 'Patrician',
  parent: 'Coriolanus',
  size: 3
}, {
  id: 'Roman',
  parent: 'Coriolanus',
  size: 10
}, {
  id: 'Sicinius Velutus',
  parent: 'Coriolanus',
  size: 117
}, {
  id: 'Titus Lartius',
  parent: 'Coriolanus',
  size: 23
}, {
  id: 'Tullus Aufidius',
  parent: 'Coriolanus',
  size: 45
}, {
  id: 'Valeria',
  parent: 'Coriolanus',
  size: 14
}, {
  id: 'Virgilia',
  parent: 'Coriolanus',
  size: 26
}, {
  id: 'Volsce',
  parent: 'Coriolanus',
  size: 9
}, {
  id: 'Volumnia',
  parent: 'Coriolanus',
  size: 57
}, {
  id: 'Young Coriolanus',
  parent: 'Coriolanus',
  size: 1
}, {
  id: 'Cymbeline',
  parent: 'Tragedies',
  size: null
}, {
  id: 'Arviragus',
  parent: 'Cymbeline',
  size: 46
}, {
  id: 'Belarius',
  parent: 'Cymbeline',
  size: 58
}, {
  id: 'Caius Lucius',
  parent: 'Cymbeline',
  size: 25
}, {
  id: 'Cloten',
  parent: 'Cymbeline',
  size: 77
}, {
  id: 'Cornelius (physician)',
  parent: 'Cymbeline',
  size: 13
}, {
  id: 'Cymbeline, King of Britain',
  parent: 'Cymbeline',
  size: 81
}, {
  id: 'Guiderius',
  parent: 'Cymbeline',
  size: 62
}, {
  id: 'Helen',
  parent: 'Cymbeline',
  size: 0
}, {
  id: 'Iachimo',
  parent: 'Cymbeline',
  size: 77
}, {
  id: 'Imogen',
  parent: 'Cymbeline',
  size: 118
}, {
  id: 'Jupiter',
  parent: 'Cymbeline',
  size: 1
}, {
  id: 'Philario',
  parent: 'Cymbeline',
  size: 14
}, {
  id: 'Pisanio',
  parent: 'Cymbeline',
  size: 58
}, {
  id: 'Posthumus Leonatus',
  parent: 'Cymbeline',
  size: 77
}, {
  id: 'Queen',
  parent: 'Cymbeline',
  size: 27
}, {
  id: 'Roman Captain',
  parent: 'Cymbeline',
  size: 4
}, {
  id: 'Sicilius Leonatus',
  parent: 'Cymbeline',
  size: 7
}, {
  id: 'The Tragedy of Hamlet, Prince of Denmark',
  parent: 'Tragedies',
  size: null
}, {
  id: 'Bernardo',
  parent: 'The Tragedy of Hamlet, Prince of Denmark',
  size: 19
}, {
  id: 'Claudius, King of Denmark',
  parent: 'The Tragedy of Hamlet, Prince of Denmark',
  size: 102
}, {
  id: 'Cornelius',
  parent: 'The Tragedy of Hamlet, Prince of Denmark',
  size: 1
}, {
  id: "Father's Ghost",
  parent: 'The Tragedy of Hamlet, Prince of Denmark',
  size: 15
}, {
  id: 'Fortinbras',
  parent: 'The Tragedy of Hamlet, Prince of Denmark',
  size: 6
}, {
  id: 'Francisco ',
  parent: 'The Tragedy of Hamlet, Prince of Denmark',
  size: 8
}, {
  id: 'Gertrude',
  parent: 'The Tragedy of Hamlet, Prince of Denmark',
  size: 69
}, {
  id: 'Guildenstern',
  parent: 'The Tragedy of Hamlet, Prince of Denmark',
  size: 29
}, {
  id: 'Hamlet',
  parent: 'The Tragedy of Hamlet, Prince of Denmark',
  size: 358
}, {
  id: 'Horatio',
  parent: 'The Tragedy of Hamlet, Prince of Denmark',
  size: 109
}, {
  id: 'Laertes',
  parent: 'The Tragedy of Hamlet, Prince of Denmark',
  size: 62
}, {
  id: 'Lucianus',
  parent: 'The Tragedy of Hamlet, Prince of Denmark',
  size: 0
}, {
  id: 'Marcellus',
  parent: 'The Tragedy of Hamlet, Prince of Denmark',
  size: 37
}, {
  id: 'Ophelia',
  parent: 'The Tragedy of Hamlet, Prince of Denmark',
  size: 58
}, {
  id: 'Osric',
  parent: 'The Tragedy of Hamlet, Prince of Denmark',
  size: 25
}, {
  id: 'Polonius',
  parent: 'The Tragedy of Hamlet, Prince of Denmark',
  size: 86
}, {
  id: 'Reynaldo',
  parent: 'The Tragedy of Hamlet, Prince of Denmark',
  size: 13
}, {
  id: 'Rosencrantz',
  parent: 'The Tragedy of Hamlet, Prince of Denmark',
  size: 48
}, {
  id: 'Voltemand',
  parent: 'The Tragedy of Hamlet, Prince of Denmark',
  size: 1
}, {
  id: 'Julius Caesar',
  parent: 'Tragedies',
  size: null
}, {
  id: 'Antony (Marcus Antonius)',
  parent: 'Julius Caesar',
  size: 51
}, {
  id: 'Artemidorus of Cnidos',
  parent: 'Julius Caesar',
  size: 4
}, {
  id: 'Brutus (Marcus Brutus)',
  parent: 'Julius Caesar',
  size: 194
}, {
  id: 'Caesar (Julius Caesar)',
  parent: 'Julius Caesar',
  size: 42
}, {
  id: 'Calpurnia',
  parent: 'Julius Caesar',
  size: 6
}, {
  id: 'Casca',
  parent: 'Julius Caesar',
  size: 39
}, {
  id: 'Cassius',
  parent: 'Julius Caesar',
  size: 140
}, {
  id: 'Cicero',
  parent: 'Julius Caesar',
  size: 4
}, {
  id: 'Cinna',
  parent: 'Julius Caesar',
  size: 11
}, {
  id: 'Cinna the Poet',
  parent: 'Julius Caesar',
  size: 8
}, {
  id: 'Claudius',
  parent: 'Julius Caesar',
  size: 2
}, {
  id: 'Clitus',
  parent: 'Julius Caesar',
  size: 8
}, {
  id: 'Dardanius',
  parent: 'Julius Caesar',
  size: 3
}, {
  id: 'Decius Brutus',
  parent: 'Julius Caesar',
  size: 12
}, {
  id: 'Flavius',
  parent: 'Julius Caesar',
  size: 5
}, {
  id: 'Lepidus (Marcus Antonius Lepidus)',
  parent: 'Julius Caesar',
  size: 3
}, {
  id: 'Ligarius',
  parent: 'Julius Caesar',
  size: 5
}, {
  id: 'Lucilius',
  parent: 'Julius Caesar',
  size: 10
}, {
  id: 'Lucius',
  parent: 'Julius Caesar',
  size: 24
}, {
  id: 'Marullus',
  parent: 'Julius Caesar',
  size: 6
}, {
  id: 'Messala',
  parent: 'Julius Caesar',
  size: 20
}, {
  id: 'Metellus Cimber',
  parent: 'Julius Caesar',
  size: 5
}, {
  id: 'Octavius (Octavius Caesar)',
  parent: 'Julius Caesar',
  size: 19
}, {
  id: 'Pindarus',
  parent: 'Julius Caesar',
  size: 5
}, {
  id: 'Popilius (Popilius Lena)',
  parent: 'Julius Caesar',
  size: 2
}, {
  id: 'Portia (wife of Brutus)',
  parent: 'Julius Caesar',
  size: 16
}, {
  id: 'Publius',
  parent: 'Julius Caesar',
  size: 2
}, {
  id: 'Strato',
  parent: 'Julius Caesar',
  size: 4
}, {
  id: 'Tintinius',
  parent: 'Julius Caesar',
  size: 10
}, {
  id: 'Trebonius',
  parent: 'Julius Caesar',
  size: 4
}, {
  id: 'Varro',
  parent: 'Julius Caesar',
  size: 6
}, {
  id: 'Volumnius',
  parent: 'Julius Caesar',
  size: 3
}, {
  id: 'Young Cato',
  parent: 'Julius Caesar',
  size: 3
}, {
  id: 'King Lear',
  parent: 'Tragedies',
  size: null
}, {
  id: 'Cordelia',
  parent: 'King Lear',
  size: 31
}, {
  id: 'Curan',
  parent: 'King Lear',
  size: 4
}, {
  id: 'Duke of Albany',
  parent: 'King Lear',
  size: 58
}, {
  id: 'Duke of Burgundy',
  parent: 'King Lear',
  size: 5
}, {
  id: 'Duke of Cornwall',
  parent: 'King Lear',
  size: 53
}, {
  id: 'Earl of Gloucester',
  parent: 'King Lear',
  size: 118
}, {
  id: 'Earl of Kent',
  parent: 'King Lear',
  size: 127
}, {
  id: 'Edgar',
  parent: 'King Lear',
  size: 98
}, {
  id: 'Edmund',
  parent: 'King Lear',
  size: 79
}, {
  id: 'Goneril',
  parent: 'King Lear',
  size: 53
}, {
  id: 'King of France',
  parent: 'King Lear',
  size: 5
}, {
  id: 'Lear',
  parent: 'King Lear',
  size: 188
}, {
  id: 'Oswald',
  parent: 'King Lear',
  size: 38
}, {
  id: 'Regan',
  parent: 'King Lear',
  size: 73
}, {
  id: 'The Tragedy Of Macbeth',
  parent: 'Tragedies',
  size: null
}, {
  id: 'Angus',
  parent: 'The Tragedy Of Macbeth',
  size: 4
}, {
  id: 'Banquo',
  parent: 'The Tragedy Of Macbeth',
  size: 33
}, {
  id: 'Caithness',
  parent: 'The Tragedy Of Macbeth',
  size: 3
}, {
  id: 'Donalbain',
  parent: 'The Tragedy Of Macbeth',
  size: 3
}, {
  id: 'Duncan',
  parent: 'The Tragedy Of Macbeth',
  size: 18
}, {
  id: 'Fleance',
  parent: 'The Tragedy Of Macbeth',
  size: 2
}, {
  id: 'Hecate',
  parent: 'The Tragedy Of Macbeth',
  size: 2
}, {
  id: 'Lady Macbeth',
  parent: 'The Tragedy Of Macbeth',
  size: 59
}, {
  id: 'Lady Macduff',
  parent: 'The Tragedy Of Macbeth',
  size: 19
}, {
  id: 'Lennox',
  parent: 'The Tragedy Of Macbeth',
  size: 21
}, {
  id: 'Macbeth',
  parent: 'The Tragedy Of Macbeth',
  size: 146
}, {
  id: 'Macduff',
  parent: 'The Tragedy Of Macbeth',
  size: 59
}, {
  id: 'Malcolm',
  parent: 'The Tragedy Of Macbeth',
  size: 40
}, {
  id: 'Menteith',
  parent: 'The Tragedy Of Macbeth',
  size: 5
}, {
  id: 'Porter',
  parent: 'The Tragedy Of Macbeth',
  size: 4
}, {
  id: 'Ross',
  parent: 'The Tragedy Of Macbeth',
  size: 39
}, {
  id: 'Seyton',
  parent: 'The Tragedy Of Macbeth',
  size: 5
}, {
  id: 'Siward',
  parent: 'The Tragedy Of Macbeth',
  size: 11
}, {
  id: "Son (Macduff's son)",
  parent: 'The Tragedy Of Macbeth',
  size: 14
}, {
  id: 'Young Siward',
  parent: 'The Tragedy Of Macbeth',
  size: 4
}, {
  id: 'The Tragedy Of Othello',
  parent: 'Tragedies',
  size: null
}, {
  id: 'Bianca (Mistress to Cassio)',
  parent: 'The Tragedy Of Othello',
  size: 15
}, {
  id: 'Brabantio',
  parent: 'The Tragedy Of Othello',
  size: 30
}, {
  id: 'Cassio',
  parent: 'The Tragedy Of Othello',
  size: 110
}, {
  id: 'Desdemona',
  parent: 'The Tragedy Of Othello',
  size: 165
}, {
  id: 'Duke of Venice',
  parent: 'The Tragedy Of Othello',
  size: 25
}, {
  id: 'Emilia',
  parent: 'The Tragedy Of Othello',
  size: 103
}, {
  id: 'Gratiano (Brother to Brabantio)',
  parent: 'The Tragedy Of Othello',
  size: 20
}, {
  id: 'Iago',
  parent: 'The Tragedy Of Othello',
  size: 272
}, {
  id: 'Lodovico',
  parent: 'The Tragedy Of Othello',
  size: 33
}, {
  id: 'Montano',
  parent: 'The Tragedy Of Othello',
  size: 24
}, {
  id: 'Othello',
  parent: 'The Tragedy Of Othello',
  size: 274
}, {
  id: 'Roderigo',
  parent: 'The Tragedy Of Othello',
  size: 59
}, {
  id: 'Romeo And Juliet',
  parent: 'Tragedies',
  size: null
}, {
  id: 'Abraham',
  parent: 'Romeo And Juliet',
  size: 5
}, {
  id: 'Balthasar (Servant to Romeo)',
  parent: 'Romeo And Juliet',
  size: 12
}, {
  id: 'Benvolio',
  parent: 'Romeo And Juliet',
  size: 64
}, {
  id: 'Capulet',
  parent: 'Romeo And Juliet',
  size: 51
}, {
  id: 'Friar John',
  parent: 'Romeo And Juliet',
  size: 4
}, {
  id: 'Friar Laurence',
  parent: 'Romeo And Juliet',
  size: 55
}, {
  id: 'Gregory',
  parent: 'Romeo And Juliet',
  size: 15
}, {
  id: 'Juliet',
  parent: 'Romeo And Juliet',
  size: 118
}, {
  id: 'Lady Capulet',
  parent: 'Romeo And Juliet',
  size: 45
}, {
  id: 'Lady Montague',
  parent: 'Romeo And Juliet',
  size: 2
}, {
  id: 'Mercutio',
  parent: 'Romeo And Juliet',
  size: 62
}, {
  id: 'Montague',
  parent: 'Romeo And Juliet',
  size: 10
}, {
  id: 'Paris',
  parent: 'Romeo And Juliet',
  size: 23
}, {
  id: "Peter (Servant to Juliet's Nurse)",
  parent: 'Romeo And Juliet',
  size: 13
}, {
  id: 'Prince Escalus',
  parent: 'Romeo And Juliet',
  size: 16
}, {
  id: 'Romeo',
  parent: 'Romeo And Juliet',
  size: 163
}, {
  id: 'Sampson',
  parent: 'Romeo And Juliet',
  size: 20
}, {
  id: 'Tybalt',
  parent: 'Romeo And Juliet',
  size: 17
}];

/***/ }),

/***/ "./node_modules/@vx/point/build/Point.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Point = function () {
  function Point(_ref) {
    var _ref$x = _ref.x,
        x = _ref$x === undefined ? 0 : _ref$x,
        _ref$y = _ref.y,
        y = _ref$y === undefined ? 0 : _ref$y;

    _classCallCheck(this, Point);

    this.x = x;
    this.y = y;
  }

  _createClass(Point, [{
    key: "value",
    value: function value() {
      return {
        x: this.x,
        y: this.y
      };
    }
  }, {
    key: "toArray",
    value: function toArray() {
      return [this.x, this.y];
    }
  }]);

  return Point;
}();

exports.default = Point;

/***/ }),

/***/ "./node_modules/@vx/point/build/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Point = __webpack_require__("./node_modules/@vx/point/build/Point.js");

Object.defineProperty(exports, 'Point', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Point).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/@vx/scale/build/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _band = __webpack_require__("./node_modules/@vx/scale/build/scales/band.js");

Object.defineProperty(exports, 'scaleBand', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_band).default;
  }
});

var _point = __webpack_require__("./node_modules/@vx/scale/build/scales/point.js");

Object.defineProperty(exports, 'scalePoint', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_point).default;
  }
});

var _linear = __webpack_require__("./node_modules/@vx/scale/build/scales/linear.js");

Object.defineProperty(exports, 'scaleLinear', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_linear).default;
  }
});

var _time = __webpack_require__("./node_modules/@vx/scale/build/scales/time.js");

Object.defineProperty(exports, 'scaleTime', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_time).default;
  }
});

var _utc = __webpack_require__("./node_modules/@vx/scale/build/scales/utc.js");

Object.defineProperty(exports, 'scaleUtc', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_utc).default;
  }
});

var _log = __webpack_require__("./node_modules/@vx/scale/build/scales/log.js");

Object.defineProperty(exports, 'scaleLog', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_log).default;
  }
});

var _power = __webpack_require__("./node_modules/@vx/scale/build/scales/power.js");

Object.defineProperty(exports, 'scalePower', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_power).default;
  }
});

var _ordinal = __webpack_require__("./node_modules/@vx/scale/build/scales/ordinal.js");

Object.defineProperty(exports, 'scaleOrdinal', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ordinal).default;
  }
});

var _quantize = __webpack_require__("./node_modules/@vx/scale/build/scales/quantize.js");

Object.defineProperty(exports, 'scaleQuantize', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_quantize).default;
  }
});

var _quantile = __webpack_require__("./node_modules/@vx/scale/build/scales/quantile.js");

Object.defineProperty(exports, 'scaleQuantile', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_quantile).default;
  }
});

var _threshold = __webpack_require__("./node_modules/@vx/scale/build/scales/threshold.js");

Object.defineProperty(exports, 'scaleThreshold', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_threshold).default;
  }
});

var _updateScale = __webpack_require__("./node_modules/@vx/scale/build/util/updateScale.js");

Object.defineProperty(exports, 'updateScale', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_updateScale).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/@vx/scale/build/scales/band.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _d3Scale = __webpack_require__("./node_modules/d3-scale/index.js");

exports.default = function (_ref) {
  var range = _ref.range,
      rangeRound = _ref.rangeRound,
      domain = _ref.domain,
      padding = _ref.padding,
      paddingInner = _ref.paddingInner,
      paddingOuter = _ref.paddingOuter,
      align = _ref.align,
      tickFormat = _ref.tickFormat;

  var scale = (0, _d3Scale.scaleBand)();

  if (range) scale.range(range);
  if (rangeRound) scale.rangeRound(rangeRound);
  if (domain) scale.domain(domain);
  if (padding) scale.padding(padding);
  if (paddingInner) scale.paddingInner(paddingInner);
  if (paddingOuter) scale.paddingOuter(paddingOuter);
  if (align) scale.align(align);
  if (tickFormat) scale.tickFormat = tickFormat;

  return scale;
};

/***/ }),

/***/ "./node_modules/@vx/scale/build/scales/linear.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _d3Scale = __webpack_require__("./node_modules/d3-scale/index.js");

exports.default = function (_ref) {
  var range = _ref.range,
      rangeRound = _ref.rangeRound,
      domain = _ref.domain,
      _ref$nice = _ref.nice,
      nice = _ref$nice === undefined ? false : _ref$nice,
      _ref$clamp = _ref.clamp,
      clamp = _ref$clamp === undefined ? false : _ref$clamp;

  var scale = (0, _d3Scale.scaleLinear)();

  if (range) scale.range(range);
  if (rangeRound) scale.rangeRound(rangeRound);
  if (domain) scale.domain(domain);
  if (nice) scale.nice();
  if (clamp) scale.clamp(true);

  return scale;
};

/***/ }),

/***/ "./node_modules/@vx/scale/build/scales/log.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _d3Scale = __webpack_require__("./node_modules/d3-scale/index.js");

exports.default = function (_ref) {
  var range = _ref.range,
      rangeRound = _ref.rangeRound,
      domain = _ref.domain,
      base = _ref.base,
      _ref$nice = _ref.nice,
      nice = _ref$nice === undefined ? false : _ref$nice,
      _ref$clamp = _ref.clamp,
      clamp = _ref$clamp === undefined ? false : _ref$clamp;

  var scale = (0, _d3Scale.scaleLog)();

  if (range) scale.range(range);
  if (rangeRound) scale.rangeRound(rangeRound);
  if (domain) scale.domain(domain);
  if (nice) scale.nice();
  if (clamp) scale.clamp(true);
  if (base) scale.base(base);

  return scale;
};

/***/ }),

/***/ "./node_modules/@vx/scale/build/scales/ordinal.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _d3Scale = __webpack_require__("./node_modules/d3-scale/index.js");

exports.default = function (_ref) {
  var range = _ref.range,
      domain = _ref.domain,
      unknown = _ref.unknown;

  var scale = (0, _d3Scale.scaleOrdinal)();

  if (range) scale.range(range);
  if (domain) scale.domain(domain);
  if (unknown) scale.unknown(unknown);

  return scale;
};

/***/ }),

/***/ "./node_modules/@vx/scale/build/scales/point.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _d3Scale = __webpack_require__("./node_modules/d3-scale/index.js");

exports.default = function (_ref) {
  var range = _ref.range,
      rangeRound = _ref.rangeRound,
      domain = _ref.domain,
      padding = _ref.padding,
      align = _ref.align,
      _ref$nice = _ref.nice,
      nice = _ref$nice === undefined ? false : _ref$nice;

  var scale = (0, _d3Scale.scalePoint)();

  if (range) scale.range(range);
  if (rangeRound) scale.rangeRound(rangeRound);
  if (domain) scale.domain(domain);
  if (nice) scale.nice();
  if (padding) scale.padding(padding);
  if (align) scale.align(align);

  return scale;
};

/***/ }),

/***/ "./node_modules/@vx/scale/build/scales/power.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _d3Scale = __webpack_require__("./node_modules/d3-scale/index.js");

exports.default = function (_ref) {
  var range = _ref.range,
      rangeRound = _ref.rangeRound,
      domain = _ref.domain,
      exponent = _ref.exponent,
      _ref$nice = _ref.nice,
      nice = _ref$nice === undefined ? false : _ref$nice,
      _ref$clamp = _ref.clamp,
      clamp = _ref$clamp === undefined ? false : _ref$clamp;

  var scale = (0, _d3Scale.scalePow)();

  if (range) scale.range(range);
  if (rangeRound) scale.rangeRound(rangeRound);
  if (domain) scale.domain(domain);
  if (nice) scale.nice();
  if (clamp) scale.clamp(true);
  if (exponent) scale.exponent(exponent);

  return scale;
};

/***/ }),

/***/ "./node_modules/@vx/scale/build/scales/quantile.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _d3Scale = __webpack_require__("./node_modules/d3-scale/index.js");

exports.default = function (_ref) {
  var range = _ref.range,
      domain = _ref.domain;

  var scale = (0, _d3Scale.scaleQuantile)();

  if (range) scale.range(range);
  if (domain) scale.domain(domain);

  return scale;
};

/***/ }),

/***/ "./node_modules/@vx/scale/build/scales/quantize.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _d3Scale = __webpack_require__("./node_modules/d3-scale/index.js");

exports.default = function (_ref) {
  var range = _ref.range,
      domain = _ref.domain,
      ticks = _ref.ticks,
      tickFormat = _ref.tickFormat,
      _ref$nice = _ref.nice,
      nice = _ref$nice === undefined ? false : _ref$nice;

  var scale = (0, _d3Scale.scaleQuantize)();

  if (range) scale.range(range);
  if (domain) scale.domain(domain);
  if (nice) scale.nice();
  if (ticks) scale.ticks(ticks);
  if (tickFormat) scale.tickFormat(tickFormat);

  return scale;
};

/***/ }),

/***/ "./node_modules/@vx/scale/build/scales/threshold.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _d3Scale = __webpack_require__("./node_modules/d3-scale/index.js");

exports.default = function (_ref) {
  var range = _ref.range,
      domain = _ref.domain;

  var scale = (0, _d3Scale.scaleThreshold)();

  if (range) scale.range(range);
  if (domain) scale.domain(domain);

  return scale;
};

/***/ }),

/***/ "./node_modules/@vx/scale/build/scales/time.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _d3Scale = __webpack_require__("./node_modules/d3-scale/index.js");

exports.default = function (_ref) {
  var range = _ref.range,
      rangeRound = _ref.rangeRound,
      domain = _ref.domain,
      _ref$nice = _ref.nice,
      nice = _ref$nice === undefined ? false : _ref$nice,
      _ref$clamp = _ref.clamp,
      clamp = _ref$clamp === undefined ? false : _ref$clamp;

  var scale = (0, _d3Scale.scaleTime)();

  if (range) scale.range(range);
  if (rangeRound) scale.rangeRound(rangeRound);
  if (domain) scale.domain(domain);
  if (nice) scale.nice();
  if (clamp) scale.clamp(true);

  return scale;
};

/***/ }),

/***/ "./node_modules/@vx/scale/build/scales/utc.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _d3Scale = __webpack_require__("./node_modules/d3-scale/index.js");

exports.default = function (_ref) {
  var range = _ref.range,
      rangeRound = _ref.rangeRound,
      domain = _ref.domain,
      _ref$nice = _ref.nice,
      nice = _ref$nice === undefined ? false : _ref$nice,
      _ref$clamp = _ref.clamp,
      clamp = _ref$clamp === undefined ? false : _ref$clamp;

  var scale = (0, _d3Scale.scaleUtc)();

  if (range) scale.range(range);
  if (rangeRound) scale.rangeRound(rangeRound);
  if (domain) scale.domain(domain);
  if (nice) scale.nice();
  if (clamp) scale.clamp(true);

  return scale;
};

/***/ }),

/***/ "./node_modules/@vx/scale/build/util/updateScale.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateScale;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function updateScale(scale, _ref) {
  var args = _objectWithoutProperties(_ref, []);

  var nextScale = scale.copy();
  Object.keys(args).forEach(function (key) {
    if (nextScale.hasOwnProperty(key)) nextScale[key](args[key]);
  });
  return nextScale;
}

/***/ }),

/***/ "./node_modules/@vx/shape/build/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Arc = __webpack_require__("./node_modules/@vx/shape/build/shapes/Arc.js");

Object.defineProperty(exports, 'Arc', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Arc).default;
  }
});

var _Pie = __webpack_require__("./node_modules/@vx/shape/build/shapes/Pie.js");

Object.defineProperty(exports, 'Pie', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Pie).default;
  }
});

var _Line = __webpack_require__("./node_modules/@vx/shape/build/shapes/Line.js");

Object.defineProperty(exports, 'Line', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Line).default;
  }
});

var _LinePath = __webpack_require__("./node_modules/@vx/shape/build/shapes/LinePath.js");

Object.defineProperty(exports, 'LinePath', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LinePath).default;
  }
});

var _LineRadial = __webpack_require__("./node_modules/@vx/shape/build/shapes/LineRadial.js");

Object.defineProperty(exports, 'LineRadial', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LineRadial).default;
  }
});

var _Area = __webpack_require__("./node_modules/@vx/shape/build/shapes/Area.js");

Object.defineProperty(exports, 'Area', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Area).default;
  }
});

var _AreaClosed = __webpack_require__("./node_modules/@vx/shape/build/shapes/AreaClosed.js");

Object.defineProperty(exports, 'AreaClosed', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_AreaClosed).default;
  }
});

var _AreaStack = __webpack_require__("./node_modules/@vx/shape/build/shapes/AreaStack.js");

Object.defineProperty(exports, 'AreaStack', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_AreaStack).default;
  }
});

var _Bar = __webpack_require__("./node_modules/@vx/shape/build/shapes/Bar.js");

Object.defineProperty(exports, 'Bar', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Bar).default;
  }
});

var _BarGroup = __webpack_require__("./node_modules/@vx/shape/build/shapes/BarGroup.js");

Object.defineProperty(exports, 'BarGroup', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_BarGroup).default;
  }
});

var _BarStack = __webpack_require__("./node_modules/@vx/shape/build/shapes/BarStack.js");

Object.defineProperty(exports, 'BarStack', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_BarStack).default;
  }
});

var _BarStackHorizontal = __webpack_require__("./node_modules/@vx/shape/build/shapes/BarStackHorizontal.js");

Object.defineProperty(exports, 'BarStackHorizontal', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_BarStackHorizontal).default;
  }
});

var _Stack = __webpack_require__("./node_modules/@vx/shape/build/shapes/Stack.js");

Object.defineProperty(exports, 'Stack', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Stack).default;
  }
});

var _callOrValue = __webpack_require__("./node_modules/@vx/shape/build/util/callOrValue.js");

Object.defineProperty(exports, 'callOrValue', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_callOrValue).default;
  }
});

var _stackOffset = __webpack_require__("./node_modules/@vx/shape/build/util/stackOffset.js");

Object.defineProperty(exports, 'stackOffset', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_stackOffset).default;
  }
});
Object.defineProperty(exports, 'STACK_OFFSETS', {
  enumerable: true,
  get: function get() {
    return _stackOffset.STACK_OFFSETS;
  }
});
Object.defineProperty(exports, 'STACK_OFFSET_NAMES', {
  enumerable: true,
  get: function get() {
    return _stackOffset.STACK_OFFSET_NAMES;
  }
});

var _stackOrder = __webpack_require__("./node_modules/@vx/shape/build/util/stackOrder.js");

Object.defineProperty(exports, 'stackOrder', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_stackOrder).default;
  }
});
Object.defineProperty(exports, 'STACK_ORDERS', {
  enumerable: true,
  get: function get() {
    return _stackOrder.STACK_ORDERS;
  }
});
Object.defineProperty(exports, 'STACK_ORDER_NAMES', {
  enumerable: true,
  get: function get() {
    return _stackOrder.STACK_ORDER_NAMES;
  }
});

var _LinkHorizontal = __webpack_require__("./node_modules/@vx/shape/build/shapes/link/diagonal/LinkHorizontal.js");

Object.defineProperty(exports, 'LinkHorizontal', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LinkHorizontal).default;
  }
});
Object.defineProperty(exports, 'pathHorizontalDiagonal', {
  enumerable: true,
  get: function get() {
    return _LinkHorizontal.pathHorizontalDiagonal;
  }
});

var _LinkVertical = __webpack_require__("./node_modules/@vx/shape/build/shapes/link/diagonal/LinkVertical.js");

Object.defineProperty(exports, 'LinkVertical', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LinkVertical).default;
  }
});
Object.defineProperty(exports, 'pathVerticalDiagonal', {
  enumerable: true,
  get: function get() {
    return _LinkVertical.pathVerticalDiagonal;
  }
});

var _LinkRadial = __webpack_require__("./node_modules/@vx/shape/build/shapes/link/diagonal/LinkRadial.js");

Object.defineProperty(exports, 'LinkRadial', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LinkRadial).default;
  }
});
Object.defineProperty(exports, 'pathRadialDiagonal', {
  enumerable: true,
  get: function get() {
    return _LinkRadial.pathRadialDiagonal;
  }
});

var _LinkHorizontalCurve = __webpack_require__("./node_modules/@vx/shape/build/shapes/link/curve/LinkHorizontalCurve.js");

Object.defineProperty(exports, 'LinkHorizontalCurve', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LinkHorizontalCurve).default;
  }
});
Object.defineProperty(exports, 'pathHorizontalCurve', {
  enumerable: true,
  get: function get() {
    return _LinkHorizontalCurve.pathHorizontalCurve;
  }
});

var _LinkVerticalCurve = __webpack_require__("./node_modules/@vx/shape/build/shapes/link/curve/LinkVerticalCurve.js");

Object.defineProperty(exports, 'LinkVerticalCurve', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LinkVerticalCurve).default;
  }
});
Object.defineProperty(exports, 'pathVerticalCurve', {
  enumerable: true,
  get: function get() {
    return _LinkVerticalCurve.pathVerticalCurve;
  }
});

var _LinkRadialCurve = __webpack_require__("./node_modules/@vx/shape/build/shapes/link/curve/LinkRadialCurve.js");

Object.defineProperty(exports, 'LinkRadialCurve', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LinkRadialCurve).default;
  }
});
Object.defineProperty(exports, 'pathRadialCurve', {
  enumerable: true,
  get: function get() {
    return _LinkRadialCurve.pathRadialCurve;
  }
});

var _LinkHorizontalLine = __webpack_require__("./node_modules/@vx/shape/build/shapes/link/line/LinkHorizontalLine.js");

Object.defineProperty(exports, 'LinkHorizontalLine', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LinkHorizontalLine).default;
  }
});
Object.defineProperty(exports, 'pathHorizontalLine', {
  enumerable: true,
  get: function get() {
    return _LinkHorizontalLine.pathHorizontalLine;
  }
});

var _LinkVerticalLine = __webpack_require__("./node_modules/@vx/shape/build/shapes/link/line/LinkVerticalLine.js");

Object.defineProperty(exports, 'LinkVerticalLine', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LinkVerticalLine).default;
  }
});
Object.defineProperty(exports, 'pathVerticalLine', {
  enumerable: true,
  get: function get() {
    return _LinkVerticalLine.pathVerticalLine;
  }
});

var _LinkRadialLine = __webpack_require__("./node_modules/@vx/shape/build/shapes/link/line/LinkRadialLine.js");

Object.defineProperty(exports, 'LinkRadialLine', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LinkRadialLine).default;
  }
});
Object.defineProperty(exports, 'pathRadialLine', {
  enumerable: true,
  get: function get() {
    return _LinkRadialLine.pathRadialLine;
  }
});

var _LinkHorizontalStep = __webpack_require__("./node_modules/@vx/shape/build/shapes/link/step/LinkHorizontalStep.js");

Object.defineProperty(exports, 'LinkHorizontalStep', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LinkHorizontalStep).default;
  }
});
Object.defineProperty(exports, 'pathHorizontalStep', {
  enumerable: true,
  get: function get() {
    return _LinkHorizontalStep.pathHorizontalStep;
  }
});

var _LinkVerticalStep = __webpack_require__("./node_modules/@vx/shape/build/shapes/link/step/LinkVerticalStep.js");

Object.defineProperty(exports, 'LinkVerticalStep', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LinkVerticalStep).default;
  }
});
Object.defineProperty(exports, 'pathVerticalStep', {
  enumerable: true,
  get: function get() {
    return _LinkVerticalStep.pathVerticalStep;
  }
});

var _LinkRadialStep = __webpack_require__("./node_modules/@vx/shape/build/shapes/link/step/LinkRadialStep.js");

Object.defineProperty(exports, 'LinkRadialStep', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LinkRadialStep).default;
  }
});
Object.defineProperty(exports, 'pathRadialStep', {
  enumerable: true,
  get: function get() {
    return _LinkRadialStep.pathRadialStep;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/@vx/shape/build/shapes/Arc.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Arc;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _d3Shape = __webpack_require__("./node_modules/d3-shape/index.js");

var _additionalProps = __webpack_require__("./node_modules/@vx/shape/build/util/additionalProps.js");

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Arc(_ref) {
  var className = _ref.className,
      data = _ref.data,
      centroid = _ref.centroid,
      innerRadius = _ref.innerRadius,
      outerRadius = _ref.outerRadius,
      cornerRadius = _ref.cornerRadius,
      startAngle = _ref.startAngle,
      endAngle = _ref.endAngle,
      padAngle = _ref.padAngle,
      padRadius = _ref.padRadius,
      restProps = _objectWithoutProperties(_ref, ['className', 'data', 'centroid', 'innerRadius', 'outerRadius', 'cornerRadius', 'startAngle', 'endAngle', 'padAngle', 'padRadius']);

  var arc = (0, _d3Shape.arc)();
  if (centroid) arc.centroid(centroid);
  if (innerRadius) arc.innerRadius(innerRadius);
  if (outerRadius) arc.outerRadius(outerRadius);
  if (cornerRadius) arc.cornerRadius(cornerRadius);
  if (startAngle) arc.startAngle(startAngle);
  if (endAngle) arc.endAngle(endAngle);
  if (padAngle) arc.padAngle(padAngle);
  if (padRadius) arc.padRadius(padRadius);
  return _react2.default.createElement('path', _extends({ className: (0, _classnames2.default)('vx-arc', className), d: arc(data) }, (0, _additionalProps2.default)(restProps, data)));
}

/***/ }),

/***/ "./node_modules/@vx/shape/build/shapes/Area.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Area;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d3Shape = __webpack_require__("./node_modules/d3-shape/index.js");

var _additionalProps = __webpack_require__("./node_modules/@vx/shape/build/util/additionalProps.js");

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

Area.propTypes = {
  x: _propTypes2.default.func,
  x0: _propTypes2.default.func,
  x1: _propTypes2.default.func,
  y: _propTypes2.default.func,
  y0: _propTypes2.default.func,
  y1: _propTypes2.default.func,
  xScale: _propTypes2.default.func,
  yScale: _propTypes2.default.func,
  data: _propTypes2.default.array,
  defined: _propTypes2.default.func,
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool, _propTypes2.default.object, _propTypes2.default.array]),
  innerRef: _propTypes2.default.func,
  strokeDasharray: _propTypes2.default.string,
  strokeWidth: _propTypes2.default.number,
  stroke: _propTypes2.default.string,
  fill: _propTypes2.default.string,
  curve: _propTypes2.default.func
};

function Area(_ref) {
  var children = _ref.children,
      x = _ref.x,
      x0 = _ref.x0,
      x1 = _ref.x1,
      y = _ref.y,
      y0 = _ref.y0,
      y1 = _ref.y1,
      xScale = _ref.xScale,
      yScale = _ref.yScale,
      _ref$data = _ref.data,
      data = _ref$data === undefined ? [] : _ref$data,
      _ref$defined = _ref.defined,
      defined = _ref$defined === undefined ? function () {
    return true;
  } : _ref$defined,
      className = _ref.className,
      strokeDasharray = _ref.strokeDasharray,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === undefined ? 2 : _ref$strokeWidth,
      _ref$stroke = _ref.stroke,
      stroke = _ref$stroke === undefined ? 'black' : _ref$stroke,
      _ref$fill = _ref.fill,
      fill = _ref$fill === undefined ? 'rgba(0,0,0,0.3)' : _ref$fill,
      curve = _ref.curve,
      innerRef = _ref.innerRef,
      restProps = _objectWithoutProperties(_ref, ['children', 'x', 'x0', 'x1', 'y', 'y0', 'y1', 'xScale', 'yScale', 'data', 'defined', 'className', 'strokeDasharray', 'strokeWidth', 'stroke', 'fill', 'curve', 'innerRef']);

  var path = (0, _d3Shape.area)();
  if (x) path.x(function (d) {
    return xScale(x(d));
  });
  if (x0) path.x0(function (d) {
    return xScale(x0(d));
  });
  if (x1) path.x1(function (d) {
    return xScale(x1(d));
  });
  if (y) path.y(function (d) {
    return yScale(y(d));
  });
  if (y0) path.y0(function (d) {
    return yScale(y0(d));
  });
  if (y1) path.y1(function (d) {
    return yScale(y1(d));
  });
  if (defined) path.defined(defined);
  if (curve) path.curve(curve);
  if (children) return children({ path: path });
  return _react2.default.createElement(
    'g',
    null,
    _react2.default.createElement('path', _extends({
      ref: innerRef,
      className: (0, _classnames2.default)('vx-area', className),
      d: path(data),
      stroke: stroke,
      strokeWidth: strokeWidth,
      strokeDasharray: strokeDasharray,
      fill: fill
    }, (0, _additionalProps2.default)(restProps, data)))
  );
}

/***/ }),

/***/ "./node_modules/@vx/shape/build/shapes/AreaClosed.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = AreaClosed;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d3Shape = __webpack_require__("./node_modules/d3-shape/index.js");

var _additionalProps = __webpack_require__("./node_modules/@vx/shape/build/util/additionalProps.js");

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

AreaClosed.propTypes = {
  innerRef: _propTypes2.default.func
};

function AreaClosed(_ref) {
  var x = _ref.x,
      y = _ref.y,
      xScale = _ref.xScale,
      yScale = _ref.yScale,
      data = _ref.data,
      _ref$defined = _ref.defined,
      defined = _ref$defined === undefined ? function () {
    return true;
  } : _ref$defined,
      className = _ref.className,
      strokeDasharray = _ref.strokeDasharray,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === undefined ? 2 : _ref$strokeWidth,
      _ref$stroke = _ref.stroke,
      stroke = _ref$stroke === undefined ? 'black' : _ref$stroke,
      _ref$fill = _ref.fill,
      fill = _ref$fill === undefined ? 'rgba(0,0,0,0.3)' : _ref$fill,
      curve = _ref.curve,
      innerRef = _ref.innerRef,
      restProps = _objectWithoutProperties(_ref, ['x', 'y', 'xScale', 'yScale', 'data', 'defined', 'className', 'strokeDasharray', 'strokeWidth', 'stroke', 'fill', 'curve', 'innerRef']);

  var path = (0, _d3Shape.area)().x(function (d) {
    return xScale(x(d));
  }).y0(yScale.range()[0]).y1(function (d) {
    return yScale(y(d));
  }).defined(defined);
  if (curve) path.curve(curve);
  return _react2.default.createElement(
    'g',
    null,
    _react2.default.createElement('path', _extends({
      ref: innerRef,
      className: (0, _classnames2.default)('vx-area-closed', className),
      d: path(data),
      stroke: stroke,
      strokeWidth: strokeWidth,
      strokeDasharray: strokeDasharray,
      fill: fill
    }, (0, _additionalProps2.default)(restProps, data)))
  );
}

/***/ }),

/***/ "./node_modules/@vx/shape/build/shapes/AreaStack.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = AreaStack;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _additionalProps = __webpack_require__("./node_modules/@vx/shape/build/util/additionalProps.js");

var _additionalProps2 = _interopRequireDefault(_additionalProps);

var _d3Shape = __webpack_require__("./node_modules/d3-shape/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function AreaStack(_ref) {
  var className = _ref.className,
      _ref$top = _ref.top,
      top = _ref$top === undefined ? 0 : _ref$top,
      _ref$left = _ref.left,
      left = _ref$left === undefined ? 0 : _ref$left,
      keys = _ref.keys,
      data = _ref.data,
      curve = _ref.curve,
      defined = _ref.defined,
      x = _ref.x,
      x0 = _ref.x0,
      x1 = _ref.x1,
      y0 = _ref.y0,
      y1 = _ref.y1,
      glyph = _ref.glyph,
      _ref$reverse = _ref.reverse,
      reverse = _ref$reverse === undefined ? false : _ref$reverse,
      restProps = _objectWithoutProperties(_ref, ['className', 'top', 'left', 'keys', 'data', 'curve', 'defined', 'x', 'x0', 'x1', 'y0', 'y1', 'glyph', 'reverse']);

  var stack = (0, _d3Shape.stack)();
  if (keys) stack.keys(keys);

  var path = (0, _d3Shape.area)();
  if (x) path.x(x);
  if (x0) path.x0(x0);
  if (x1) path.x1(x1);
  if (y0) path.y0(y0);
  if (y1) path.y1(y1);
  if (curve) path.curve(curve);
  if (defined) path.defined(defined);

  var seriesData = stack(data);
  if (reverse) seriesData.reverse();

  return _react2.default.createElement(
    'g',
    null,
    seriesData.map(function (series, i) {
      return _react2.default.createElement('path', _extends({
        className: (0, _classnames2.default)('vx-area-stack', className),
        key: 'area-stack-' + i + '-' + (series.key || ''),
        d: path(series)
      }, (0, _additionalProps2.default)(restProps, {
        datum: series[i],
        index: i,
        series: series
      })));
    }),
    !!glyph && _react2.default.createElement(
      'g',
      { className: 'vx-area-stack-glyphs' },
      data.map(glyph)
    )
  );
}

/***/ }),

/***/ "./node_modules/@vx/shape/build/shapes/Bar.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Bar;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _additionalProps = __webpack_require__("./node_modules/@vx/shape/build/util/additionalProps.js");

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

Bar.propTypes = {
  innerRef: _propTypes2.default.func
};

function Bar(_ref) {
  var className = _ref.className,
      innerRef = _ref.innerRef,
      data = _ref.data,
      _ref$x = _ref.x,
      x = _ref$x === undefined ? 0 : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === undefined ? 0 : _ref$y,
      width = _ref.width,
      height = _ref.height,
      rx = _ref.rx,
      ry = _ref.ry,
      _ref$fill = _ref.fill,
      fill = _ref$fill === undefined ? 'steelblue' : _ref$fill,
      fillOpacity = _ref.fillOpacity,
      stroke = _ref.stroke,
      strokeWidth = _ref.strokeWidth,
      strokeDasharray = _ref.strokeDasharray,
      strokeLinecap = _ref.strokeLinecap,
      strokeLinejoin = _ref.strokeLinejoin,
      strokeMiterlimit = _ref.strokeMiterlimit,
      strokeOpacity = _ref.strokeOpacity,
      restProps = _objectWithoutProperties(_ref, ['className', 'innerRef', 'data', 'x', 'y', 'width', 'height', 'rx', 'ry', 'fill', 'fillOpacity', 'stroke', 'strokeWidth', 'strokeDasharray', 'strokeLinecap', 'strokeLinejoin', 'strokeMiterlimit', 'strokeOpacity']);

  return _react2.default.createElement('rect', _extends({
    ref: innerRef,
    className: (0, _classnames2.default)('vx-bar', className),
    x: x,
    y: y,
    width: width,
    height: height,
    rx: rx,
    ry: ry,
    fill: fill,
    fillOpacity: fillOpacity,
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeDasharray: strokeDasharray,
    strokeLinecap: strokeLinecap,
    strokeLinejoin: strokeLinejoin,
    strokeMiterlimit: strokeMiterlimit,
    strokeOpacity: strokeOpacity
  }, (0, _additionalProps2.default)(restProps, data)));
}

/***/ }),

/***/ "./node_modules/@vx/shape/build/shapes/BarGroup.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = BarGroup;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _group = __webpack_require__("./node_modules/@vx/group/build/index.js");

var _Bar = __webpack_require__("./node_modules/@vx/shape/build/shapes/Bar.js");

var _Bar2 = _interopRequireDefault(_Bar);

var _additionalProps = __webpack_require__("./node_modules/@vx/shape/build/util/additionalProps.js");

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function BarGroup(_ref) {
  var data = _ref.data,
      className = _ref.className,
      top = _ref.top,
      left = _ref.left,
      x0 = _ref.x0,
      x0Scale = _ref.x0Scale,
      x1Scale = _ref.x1Scale,
      yScale = _ref.yScale,
      zScale = _ref.zScale,
      keys = _ref.keys,
      height = _ref.height,
      restProps = _objectWithoutProperties(_ref, ['data', 'className', 'top', 'left', 'x0', 'x0Scale', 'x1Scale', 'yScale', 'zScale', 'keys', 'height']);

  var format = x0Scale.tickFormat ? x0Scale.tickFormat() : function (d) {
    return d;
  };
  return _react2.default.createElement(
    _group.Group,
    { className: (0, _classnames2.default)('vx-bar-group', className), top: top, left: left },
    data && data.map(function (d, i) {
      return _react2.default.createElement(
        _group.Group,
        { key: 'bar-group-' + i + '-' + x0(d), left: x0Scale(x0(d)) },
        keys && keys.map(function (key, i) {
          var value = d[key];
          return _react2.default.createElement(_Bar2.default, _extends({
            key: 'bar-group-bar-' + i + '-' + value + '-' + key,
            x: x1Scale(key),
            y: yScale(value),
            width: x1Scale.bandwidth(),
            height: height - yScale(value),
            fill: zScale(key),
            data: {
              key: key,
              value: value,
              x: format(x0(d)),
              data: d
            }
          }, restProps));
        })
      );
    })
  );
}

BarGroup.propTypes = {
  data: _propTypes2.default.array.isRequired,
  x0: _propTypes2.default.func.isRequired,
  x0Scale: _propTypes2.default.func.isRequired,
  x1Scale: _propTypes2.default.func.isRequired,
  yScale: _propTypes2.default.func.isRequired,
  zScale: _propTypes2.default.func.isRequired,
  keys: _propTypes2.default.array.isRequired,
  height: _propTypes2.default.number.isRequired,
  className: _propTypes2.default.string,
  top: _propTypes2.default.number,
  left: _propTypes2.default.number
};

/***/ }),

/***/ "./node_modules/@vx/shape/build/shapes/BarStack.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = BarStack;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _group = __webpack_require__("./node_modules/@vx/group/build/index.js");

var _Bar = __webpack_require__("./node_modules/@vx/shape/build/shapes/Bar.js");

var _Bar2 = _interopRequireDefault(_Bar);

var _d3Shape = __webpack_require__("./node_modules/d3-shape/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function BarStack(_ref) {
  var data = _ref.data,
      className = _ref.className,
      top = _ref.top,
      left = _ref.left,
      x = _ref.x,
      xScale = _ref.xScale,
      yScale = _ref.yScale,
      zScale = _ref.zScale,
      keys = _ref.keys,
      height = _ref.height,
      restProps = _objectWithoutProperties(_ref, ['data', 'className', 'top', 'left', 'x', 'xScale', 'yScale', 'zScale', 'keys', 'height']);

  var series = (0, _d3Shape.stack)().keys(keys)(data);
  var format = xScale.tickFormat ? xScale.tickFormat() : function (d) {
    return d;
  };
  var bandwidth = xScale.bandwidth();
  var step = xScale.step();
  var paddingInner = xScale.paddingInner();
  var paddingOuter = xScale.paddingOuter();
  return _react2.default.createElement(
    _group.Group,
    { className: (0, _classnames2.default)('vx-bar-stack', className), top: top, left: left },
    series && series.map(function (s, i) {
      return _react2.default.createElement(
        _group.Group,
        { key: 'vx-bar-stack-' + i },
        s.map(function (d, ii) {
          var barHeight = yScale(d[0]) - yScale(d[1]);
          return _react2.default.createElement(_Bar2.default, _extends({
            key: 'bar-group-bar-' + i + '-' + ii + '-' + s.key,
            x: xScale(x(d.data)),
            y: yScale(d[1]),
            width: bandwidth,
            height: barHeight,
            fill: zScale(s.key),
            data: {
              bandwidth: bandwidth,
              paddingInner: paddingInner,
              paddingOuter: paddingOuter,
              step: step,
              key: s.key,
              value: d[1],
              height: barHeight,
              width: bandwidth,
              x: x(d.data),
              xFormatted: format(x(d.data)),
              data: d.data
            }
          }, restProps));
        })
      );
    })
  );
}

BarStack.propTypes = {
  data: _propTypes2.default.array.isRequired,
  x: _propTypes2.default.func.isRequired,
  xScale: _propTypes2.default.func.isRequired,
  yScale: _propTypes2.default.func.isRequired,
  zScale: _propTypes2.default.func.isRequired,
  keys: _propTypes2.default.array.isRequired,
  className: _propTypes2.default.string,
  top: _propTypes2.default.number,
  left: _propTypes2.default.number
};

/***/ }),

/***/ "./node_modules/@vx/shape/build/shapes/BarStackHorizontal.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = BarStackHorizontal;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _group = __webpack_require__("./node_modules/@vx/group/build/index.js");

var _Bar = __webpack_require__("./node_modules/@vx/shape/build/shapes/Bar.js");

var _Bar2 = _interopRequireDefault(_Bar);

var _d3Shape = __webpack_require__("./node_modules/d3-shape/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function BarStackHorizontal(_ref) {
  var data = _ref.data,
      className = _ref.className,
      top = _ref.top,
      left = _ref.left,
      y = _ref.y,
      xScale = _ref.xScale,
      yScale = _ref.yScale,
      zScale = _ref.zScale,
      keys = _ref.keys,
      height = _ref.height,
      restProps = _objectWithoutProperties(_ref, ['data', 'className', 'top', 'left', 'y', 'xScale', 'yScale', 'zScale', 'keys', 'height']);

  var series = (0, _d3Shape.stack)().keys(keys)(data);
  var format = yScale.tickFormat ? yScale.tickFormat() : function (d) {
    return d;
  };
  var bandwidth = yScale.bandwidth();
  var step = yScale.step();
  var paddingInner = yScale.paddingInner();
  var paddingOuter = yScale.paddingOuter();
  return _react2.default.createElement(
    _group.Group,
    { className: (0, _classnames2.default)('vx-bar-stack-horizontal', className), top: top, left: left },
    series && series.map(function (s, i) {
      return _react2.default.createElement(
        _group.Group,
        { key: 'vx-bar-stack-horizontal-' + i },
        s.map(function (d, ii) {
          var barWidth = xScale(d[1]) - xScale(d[0]);
          return _react2.default.createElement(_Bar2.default, _extends({
            key: 'bar-group-bar-' + i + '-' + ii + '-' + s.key,
            x: xScale(d[0]),
            y: yScale(y(d.data)),
            width: barWidth,
            height: bandwidth,
            fill: zScale(s.key),
            data: {
              bandwidth: bandwidth,
              paddingInner: paddingInner,
              paddingOuter: paddingOuter,
              step: step,
              key: s.key,
              value: d[0],
              height: bandwidth,
              width: barWidth,
              y: y(d.data),
              yFormatted: format(y(d.data)),
              data: d.data
            }
          }, restProps));
        })
      );
    })
  );
}

BarStackHorizontal.propTypes = {
  data: _propTypes2.default.array.isRequired,
  y: _propTypes2.default.func.isRequired,
  xScale: _propTypes2.default.func.isRequired,
  yScale: _propTypes2.default.func.isRequired,
  zScale: _propTypes2.default.func.isRequired,
  keys: _propTypes2.default.array.isRequired,
  className: _propTypes2.default.string,
  top: _propTypes2.default.number,
  left: _propTypes2.default.number
};

/***/ }),

/***/ "./node_modules/@vx/shape/build/shapes/Line.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Line;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _point = __webpack_require__("./node_modules/@vx/point/build/index.js");

var _additionalProps = __webpack_require__("./node_modules/@vx/shape/build/util/additionalProps.js");

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

Line.propTypes = {
  innerRef: _propTypes2.default.func
};

function Line(_ref) {
  var _ref$from = _ref.from,
      from = _ref$from === undefined ? new _point.Point({ x: 0, y: 0 }) : _ref$from,
      _ref$to = _ref.to,
      to = _ref$to === undefined ? new _point.Point({ x: 1, y: 1 }) : _ref$to,
      _ref$stroke = _ref.stroke,
      stroke = _ref$stroke === undefined ? 'black' : _ref$stroke,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === undefined ? 1 : _ref$strokeWidth,
      _ref$strokeDasharray = _ref.strokeDasharray,
      strokeDasharray = _ref$strokeDasharray === undefined ? '' : _ref$strokeDasharray,
      _ref$transform = _ref.transform,
      transform = _ref$transform === undefined ? '' : _ref$transform,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      data = _ref.data,
      innerRef = _ref.innerRef,
      restProps = _objectWithoutProperties(_ref, ['from', 'to', 'stroke', 'strokeWidth', 'strokeDasharray', 'transform', 'className', 'data', 'innerRef']);

  return _react2.default.createElement('line', _extends({
    ref: innerRef,
    className: (0, _classnames2.default)('vx-line', className),
    x1: from.x,
    y1: from.y,
    x2: to.x,
    y2: to.y,
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeDasharray: strokeDasharray,
    transform: transform
  }, (0, _additionalProps2.default)(restProps, data)));
}

/***/ }),

/***/ "./node_modules/@vx/shape/build/shapes/LinePath.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = LinePath;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d3Shape = __webpack_require__("./node_modules/d3-shape/index.js");

var _curve = __webpack_require__("./node_modules/@vx/curve/build/index.js");

var _additionalProps = __webpack_require__("./node_modules/@vx/shape/build/util/additionalProps.js");

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

LinePath.propTypes = {
  innerRef: _propTypes2.default.func
};

function LinePath(_ref) {
  var data = _ref.data,
      xScale = _ref.xScale,
      yScale = _ref.yScale,
      x = _ref.x,
      y = _ref.y,
      _ref$defined = _ref.defined,
      defined = _ref$defined === undefined ? function () {
    return true;
  } : _ref$defined,
      className = _ref.className,
      _ref$stroke = _ref.stroke,
      stroke = _ref$stroke === undefined ? 'steelblue' : _ref$stroke,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === undefined ? 2 : _ref$strokeWidth,
      _ref$strokeDasharray = _ref.strokeDasharray,
      strokeDasharray = _ref$strokeDasharray === undefined ? '' : _ref$strokeDasharray,
      _ref$strokeDashoffset = _ref.strokeDashoffset,
      strokeDashoffset = _ref$strokeDashoffset === undefined ? 0 : _ref$strokeDashoffset,
      _ref$fill = _ref.fill,
      fill = _ref$fill === undefined ? 'none' : _ref$fill,
      _ref$curve = _ref.curve,
      curve = _ref$curve === undefined ? _curve.curveLinear : _ref$curve,
      glyph = _ref.glyph,
      innerRef = _ref.innerRef,
      restProps = _objectWithoutProperties(_ref, ['data', 'xScale', 'yScale', 'x', 'y', 'defined', 'className', 'stroke', 'strokeWidth', 'strokeDasharray', 'strokeDashoffset', 'fill', 'curve', 'glyph', 'innerRef']);

  var path = (0, _d3Shape.line)().x(function (d) {
    return xScale(x(d));
  }).y(function (d) {
    return yScale(y(d));
  }).defined(defined).curve(curve);
  return _react2.default.createElement(
    'g',
    null,
    _react2.default.createElement('path', _extends({
      ref: innerRef,
      className: (0, _classnames2.default)('vx-linepath', className),
      d: path(data),
      stroke: stroke,
      strokeWidth: strokeWidth,
      strokeDasharray: strokeDasharray,
      strokeDashoffset: strokeDashoffset,
      fill: fill
    }, (0, _additionalProps2.default)(restProps, data))),
    glyph && _react2.default.createElement(
      'g',
      { className: 'vx-linepath-glyphs' },
      data.map(glyph)
    )
  );
}

/***/ }),

/***/ "./node_modules/@vx/shape/build/shapes/LineRadial.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = LineRadial;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d3Shape = __webpack_require__("./node_modules/d3-shape/index.js");

var _additionalProps = __webpack_require__("./node_modules/@vx/shape/build/util/additionalProps.js");

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

LineRadial.propTypes = {
  innerRef: _propTypes2.default.func
};

function LineRadial(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      angle = _ref.angle,
      radius = _ref.radius,
      defined = _ref.defined,
      curve = _ref.curve,
      data = _ref.data,
      innerRef = _ref.innerRef,
      restProps = _objectWithoutProperties(_ref, ['className', 'angle', 'radius', 'defined', 'curve', 'data', 'innerRef']);

  var path = (0, _d3Shape.radialLine)();
  if (angle) path.angle(angle);
  if (radius) path.radius(radius);
  if (defined) path.defined(defined);
  if (curve) path.curve(curve);
  return _react2.default.createElement(
    'g',
    null,
    _react2.default.createElement('path', _extends({
      ref: innerRef,
      className: (0, _classnames2.default)('vx-line-radial', className),
      d: path(data)
    }, (0, _additionalProps2.default)(restProps, data)))
  );
}

/***/ }),

/***/ "./node_modules/@vx/shape/build/shapes/Pie.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Pie;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _group = __webpack_require__("./node_modules/@vx/group/build/index.js");

var _d3Shape = __webpack_require__("./node_modules/d3-shape/index.js");

var _additionalProps = __webpack_require__("./node_modules/@vx/shape/build/util/additionalProps.js");

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Pie(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      _ref$top = _ref.top,
      top = _ref$top === undefined ? 0 : _ref$top,
      _ref$left = _ref.left,
      left = _ref$left === undefined ? 0 : _ref$left,
      data = _ref.data,
      centroid = _ref.centroid,
      _ref$innerRadius = _ref.innerRadius,
      innerRadius = _ref$innerRadius === undefined ? 0 : _ref$innerRadius,
      outerRadius = _ref.outerRadius,
      cornerRadius = _ref.cornerRadius,
      _ref$startAngle = _ref.startAngle,
      startAngle = _ref$startAngle === undefined ? 0 : _ref$startAngle,
      endAngle = _ref.endAngle,
      padAngle = _ref.padAngle,
      padRadius = _ref.padRadius,
      pieSort = _ref.pieSort,
      pieValue = _ref.pieValue,
      restProps = _objectWithoutProperties(_ref, ['className', 'top', 'left', 'data', 'centroid', 'innerRadius', 'outerRadius', 'cornerRadius', 'startAngle', 'endAngle', 'padAngle', 'padRadius', 'pieSort', 'pieValue']);

  var path = (0, _d3Shape.arc)();
  path.innerRadius(innerRadius);
  if (outerRadius) path.outerRadius(outerRadius);
  if (cornerRadius) path.cornerRadius(cornerRadius);
  if (padRadius) path.padRadius(padRadius);
  var pie = (0, _d3Shape.pie)();
  if (pieSort) pie.sort(pieSort);
  if (pieValue) pie.value(pieValue);
  if (padAngle) pie.padAngle(padAngle);
  var arcs = pie(data);
  return _react2.default.createElement(
    _group.Group,
    { className: 'vx-pie-arcs-group', top: top, left: left },
    arcs.map(function (arc, i) {
      var c = void 0;
      if (centroid) c = path.centroid(arc);
      return _react2.default.createElement(
        'g',
        { key: 'pie-arc-' + i },
        _react2.default.createElement('path', _extends({
          className: (0, _classnames2.default)('vx-pie-arc', className),
          d: path(arc)
        }, (0, _additionalProps2.default)(restProps, _extends({}, arc, {
          index: i,
          centroid: c
        })))),
        centroid && centroid(c, arc)
      );
    })
  );
}

/***/ }),

/***/ "./node_modules/@vx/shape/build/shapes/Stack.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Stack;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _group = __webpack_require__("./node_modules/@vx/group/build/index.js");

var _additionalProps = __webpack_require__("./node_modules/@vx/shape/build/util/additionalProps.js");

var _additionalProps2 = _interopRequireDefault(_additionalProps);

var _stackOrder = __webpack_require__("./node_modules/@vx/shape/build/util/stackOrder.js");

var _stackOrder2 = _interopRequireDefault(_stackOrder);

var _stackOffset = __webpack_require__("./node_modules/@vx/shape/build/util/stackOffset.js");

var _stackOffset2 = _interopRequireDefault(_stackOffset);

var _d3Shape = __webpack_require__("./node_modules/d3-shape/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Stack(_ref) {
  var className = _ref.className,
      _ref$top = _ref.top,
      top = _ref$top === undefined ? 0 : _ref$top,
      _ref$left = _ref.left,
      left = _ref$left === undefined ? 0 : _ref$left,
      keys = _ref.keys,
      data = _ref.data,
      curve = _ref.curve,
      defined = _ref.defined,
      x = _ref.x,
      x0 = _ref.x0,
      x1 = _ref.x1,
      y0 = _ref.y0,
      y1 = _ref.y1,
      value = _ref.value,
      order = _ref.order,
      offset = _ref.offset,
      render = _ref.render,
      _ref$reverse = _ref.reverse,
      reverse = _ref$reverse === undefined ? false : _ref$reverse,
      restProps = _objectWithoutProperties(_ref, ['className', 'top', 'left', 'keys', 'data', 'curve', 'defined', 'x', 'x0', 'x1', 'y0', 'y1', 'value', 'order', 'offset', 'render', 'reverse']);

  var stack = (0, _d3Shape.stack)();
  if (keys) stack.keys(keys);
  if (value) stack.value(value);
  if (order) stack.order((0, _stackOrder2.default)(order));
  if (offset) stack.offset((0, _stackOffset2.default)(offset));

  var path = (0, _d3Shape.area)();
  if (x) path.x(x);
  if (x0) path.x0(x0);
  if (x1) path.x1(x1);
  if (y0) path.y0(y0);
  if (y1) path.y1(y1);
  if (curve) path.curve(curve);
  if (defined) path.defined(defined);

  var seriesData = stack(data);
  if (reverse) seriesData.reverse();

  if (render) return _react2.default.createElement(
    _group.Group,
    { top: top, left: left },
    render({ seriesData: seriesData, path: path })
  );

  return _react2.default.createElement(
    _group.Group,
    { top: top, left: left },
    seriesData.map(function (series, i) {
      return _react2.default.createElement('path', _extends({
        className: (0, _classnames2.default)('vx-stack', className),
        key: 'stack-' + i + '-' + (series.key || ''),
        d: path(series)
      }, (0, _additionalProps2.default)(restProps, {
        datum: series[i],
        index: i,
        series: series
      })));
    })
  );
}

/***/ }),

/***/ "./node_modules/@vx/shape/build/shapes/link/curve/LinkHorizontalCurve.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.pathHorizontalCurve = pathHorizontalCurve;
exports.default = LinkHorizontalCurve;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d3Path = __webpack_require__("./node_modules/d3-path/index.js");

var _additionalProps = __webpack_require__("./node_modules/@vx/shape/build/util/additionalProps.js");

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function pathHorizontalCurve(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y,
      percent = _ref.percent;

  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);

    var sx = x(sourceData);
    var sy = y(sourceData);
    var tx = x(targetData);
    var ty = y(targetData);

    var dx = tx - sx;
    var dy = ty - sy;
    var ix = percent * (dx + dy);
    var iy = percent * (dy - dx);

    var path = (0, _d3Path.path)();
    path.moveTo(sx, sy);
    path.bezierCurveTo(sx + ix, sy + iy, tx + iy, ty - ix, tx, ty);

    return path.toString();
  };
}

LinkHorizontalCurve.propTypes = {
  innerRef: _propTypes2.default.func,
  percent: _propTypes2.default.number,
  x: _propTypes2.default.func,
  y: _propTypes2.default.func,
  source: _propTypes2.default.func,
  target: _propTypes2.default.func,
  path: _propTypes2.default.func
};

function LinkHorizontalCurve(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.y;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.x;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      _ref2$percent = _ref2.percent,
      percent = _ref2$percent === undefined ? 0.2 : _ref2$percent,
      restProps = _objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target', 'percent']);

  path = path || pathHorizontalCurve({ source: source, target: target, x: x, y: y, percent: percent });
  return _react2.default.createElement('path', _extends({
    ref: innerRef,
    className: (0, _classnames2.default)('vx-link', className),
    d: path(data)
  }, (0, _additionalProps2.default)(restProps, data)));
}

/***/ }),

/***/ "./node_modules/@vx/shape/build/shapes/link/curve/LinkRadialCurve.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.pathRadialCurve = pathRadialCurve;
exports.default = LinkRadialCurve;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d3Path = __webpack_require__("./node_modules/d3-path/index.js");

var _additionalProps = __webpack_require__("./node_modules/@vx/shape/build/util/additionalProps.js");

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function pathRadialCurve(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y,
      percent = _ref.percent;

  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);

    var sa = x(sourceData) - Math.PI / 2;
    var sr = y(sourceData);
    var ta = x(targetData) - Math.PI / 2;
    var tr = y(targetData);

    var sc = Math.cos(sa);
    var ss = Math.sin(sa);
    var tc = Math.cos(ta);
    var ts = Math.sin(ta);

    var sx = sr * sc;
    var sy = sr * ss;
    var tx = tr * tc;
    var ty = tr * ts;

    var dx = tx - sx;
    var dy = ty - sy;
    var ix = percent * (dx + dy);
    var iy = percent * (dy - dx);

    var path = (0, _d3Path.path)();
    path.moveTo(sx, sy);
    path.bezierCurveTo(sx + ix, sy + iy, tx + iy, ty - ix, tx, ty);

    return path.toString();
  };
}

LinkRadialCurve.propTypes = {
  innerRef: _propTypes2.default.func,
  percent: _propTypes2.default.number,
  x: _propTypes2.default.func,
  y: _propTypes2.default.func,
  source: _propTypes2.default.func,
  target: _propTypes2.default.func,
  path: _propTypes2.default.func
};

function LinkRadialCurve(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.x;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.y;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      _ref2$percent = _ref2.percent,
      percent = _ref2$percent === undefined ? 0.2 : _ref2$percent,
      restProps = _objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target', 'percent']);

  path = path || pathRadialCurve({ source: source, target: target, x: x, y: y, percent: percent });
  return _react2.default.createElement('path', _extends({
    ref: innerRef,
    className: (0, _classnames2.default)('vx-link', className),
    d: path(data)
  }, (0, _additionalProps2.default)(restProps, data)));
}

/***/ }),

/***/ "./node_modules/@vx/shape/build/shapes/link/curve/LinkVerticalCurve.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.pathVerticalCurve = pathVerticalCurve;
exports.default = LinkVerticalCurve;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d3Path = __webpack_require__("./node_modules/d3-path/index.js");

var _additionalProps = __webpack_require__("./node_modules/@vx/shape/build/util/additionalProps.js");

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function pathVerticalCurve(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y,
      percent = _ref.percent;

  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);

    var sx = x(sourceData);
    var sy = y(sourceData);
    var tx = x(targetData);
    var ty = y(targetData);

    var dx = tx - sx;
    var dy = ty - sy;
    var ix = percent * (dx + dy);
    var iy = percent * (dy - dx);

    var path = (0, _d3Path.path)();
    path.moveTo(sx, sy);
    path.bezierCurveTo(sx + ix, sy + iy, tx + iy, ty - ix, tx, ty);

    return path.toString();
  };
}

LinkVerticalCurve.propTypes = {
  innerRef: _propTypes2.default.func,
  percent: _propTypes2.default.number,
  x: _propTypes2.default.func,
  y: _propTypes2.default.func,
  source: _propTypes2.default.func,
  target: _propTypes2.default.func,
  path: _propTypes2.default.func
};

function LinkVerticalCurve(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.x;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.y;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      _ref2$percent = _ref2.percent,
      percent = _ref2$percent === undefined ? 0.2 : _ref2$percent,
      restProps = _objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target', 'percent']);

  path = path || pathVerticalCurve({ source: source, target: target, x: x, y: y, percent: percent });
  return _react2.default.createElement('path', _extends({
    ref: innerRef,
    className: (0, _classnames2.default)('vx-link', className),
    d: path(data)
  }, (0, _additionalProps2.default)(restProps, data)));
}

/***/ }),

/***/ "./node_modules/@vx/shape/build/shapes/link/diagonal/LinkHorizontal.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.pathHorizontalDiagonal = pathHorizontalDiagonal;
exports.default = LinkHorizontal;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d3Shape = __webpack_require__("./node_modules/d3-shape/index.js");

var _additionalProps = __webpack_require__("./node_modules/@vx/shape/build/util/additionalProps.js");

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function pathHorizontalDiagonal(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y;

  return function (data) {
    var link = (0, _d3Shape.linkHorizontal)();
    link.x(x);
    link.y(y);
    link.source(source);
    link.target(target);
    return link(data);
  };
}

LinkHorizontal.propTypes = {
  innerRef: _propTypes2.default.func,
  x: _propTypes2.default.func,
  y: _propTypes2.default.func,
  source: _propTypes2.default.func,
  target: _propTypes2.default.func,
  path: _propTypes2.default.func
};

function LinkHorizontal(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.y;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.x;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      restProps = _objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target']);

  path = path || pathHorizontalDiagonal({ source: source, target: target, x: x, y: y });
  return _react2.default.createElement('path', _extends({
    ref: innerRef,
    className: (0, _classnames2.default)('vx-link-horizontal', className),
    d: path(data)
  }, (0, _additionalProps2.default)(restProps, data)));
}

/***/ }),

/***/ "./node_modules/@vx/shape/build/shapes/link/diagonal/LinkRadial.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.pathRadialDiagonal = pathRadialDiagonal;
exports.default = LinkRadial;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d3Shape = __webpack_require__("./node_modules/d3-shape/index.js");

var _additionalProps = __webpack_require__("./node_modules/@vx/shape/build/util/additionalProps.js");

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function pathRadialDiagonal(_ref) {
  var source = _ref.source,
      target = _ref.target,
      angle = _ref.angle,
      radius = _ref.radius;

  return function (data) {
    var link = (0, _d3Shape.linkRadial)();
    link.angle(angle);
    link.radius(radius);
    link.source(source);
    link.target(target);
    return link(data);
  };
}

LinkRadial.propTypes = {
  innerRef: _propTypes2.default.func,
  angle: _propTypes2.default.func,
  radius: _propTypes2.default.func,
  source: _propTypes2.default.func,
  target: _propTypes2.default.func,
  path: _propTypes2.default.func
};

function LinkRadial(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path = _ref2.path,
      _ref2$angle = _ref2.angle,
      angle = _ref2$angle === undefined ? function (d) {
    return d.x;
  } : _ref2$angle,
      _ref2$radius = _ref2.radius,
      radius = _ref2$radius === undefined ? function (d) {
    return d.y;
  } : _ref2$radius,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      restProps = _objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'angle', 'radius', 'source', 'target']);

  path = path || pathRadialDiagonal({ source: source, target: target, angle: angle, radius: radius });
  return _react2.default.createElement('path', _extends({
    ref: innerRef,
    className: (0, _classnames2.default)('vx-link-radius', className),
    d: path(data)
  }, (0, _additionalProps2.default)(restProps, data)));
}

/***/ }),

/***/ "./node_modules/@vx/shape/build/shapes/link/diagonal/LinkVertical.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.pathVerticalDiagonal = pathVerticalDiagonal;
exports.default = LinkVertical;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d3Shape = __webpack_require__("./node_modules/d3-shape/index.js");

var _additionalProps = __webpack_require__("./node_modules/@vx/shape/build/util/additionalProps.js");

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function pathVerticalDiagonal(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y;

  return function (data) {
    var link = (0, _d3Shape.linkVertical)();
    link.x(x);
    link.y(y);
    link.source(source);
    link.target(target);
    return link(data);
  };
}

LinkVertical.propTypes = {
  innerRef: _propTypes2.default.func,
  x: _propTypes2.default.func,
  y: _propTypes2.default.func,
  source: _propTypes2.default.func,
  target: _propTypes2.default.func,
  path: _propTypes2.default.func
};

function LinkVertical(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.x;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.y;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      restProps = _objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target']);

  path = path || pathVerticalDiagonal({ source: source, target: target, x: x, y: y });
  return _react2.default.createElement('path', _extends({
    ref: innerRef,
    className: (0, _classnames2.default)('vx-link-vertical', className),
    d: path(data)
  }, (0, _additionalProps2.default)(restProps, data)));
}

/***/ }),

/***/ "./node_modules/@vx/shape/build/shapes/link/line/LinkHorizontalLine.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.pathHorizontalLine = pathHorizontalLine;
exports.default = LinkHorizontalLine;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d3Path = __webpack_require__("./node_modules/d3-path/index.js");

var _additionalProps = __webpack_require__("./node_modules/@vx/shape/build/util/additionalProps.js");

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function pathHorizontalLine(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y;

  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);

    var sx = x(sourceData);
    var sy = y(sourceData);
    var tx = x(targetData);
    var ty = y(targetData);

    var path = (0, _d3Path.path)();
    path.moveTo(sx, sy);
    path.lineTo(tx, ty);

    return path.toString();
  };
}

LinkHorizontalLine.propTypes = {
  innerRef: _propTypes2.default.func,
  path: _propTypes2.default.func,
  x: _propTypes2.default.func,
  y: _propTypes2.default.func,
  source: _propTypes2.default.func,
  target: _propTypes2.default.func
};

function LinkHorizontalLine(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.y;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.x;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      restProps = _objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target']);

  path = path || pathHorizontalLine({ source: source, target: target, x: x, y: y });
  return _react2.default.createElement('path', _extends({
    ref: innerRef,
    className: (0, _classnames2.default)('vx-link', className),
    d: path(data)
  }, (0, _additionalProps2.default)(restProps, data)));
}

/***/ }),

/***/ "./node_modules/@vx/shape/build/shapes/link/line/LinkRadialLine.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.pathRadialLine = pathRadialLine;
exports.default = LinkRadialStep;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d3Path = __webpack_require__("./node_modules/d3-path/index.js");

var _additionalProps = __webpack_require__("./node_modules/@vx/shape/build/util/additionalProps.js");

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function pathRadialLine(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y;

  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);

    var sa = x(sourceData) - Math.PI / 2;
    var sr = y(sourceData);
    var ta = x(targetData) - Math.PI / 2;
    var tr = y(targetData);

    var sc = Math.cos(sa);
    var ss = Math.sin(sa);
    var tc = Math.cos(ta);
    var ts = Math.sin(ta);

    var path = (0, _d3Path.path)();
    path.moveTo(sr * sc, sr * ss);
    path.lineTo(tr * tc, tr * ts);

    return path.toString();
  };
}

LinkRadialStep.propTypes = {
  innerRef: _propTypes2.default.func,
  path: _propTypes2.default.func,
  x: _propTypes2.default.func,
  y: _propTypes2.default.func,
  source: _propTypes2.default.func,
  target: _propTypes2.default.func
};

function LinkRadialStep(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.x;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.y;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      restProps = _objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target']);

  path = path || pathRadialLine({ source: source, target: target, x: x, y: y });
  return _react2.default.createElement('path', _extends({
    ref: innerRef,
    className: (0, _classnames2.default)('vx-link', className),
    d: path(data)
  }, (0, _additionalProps2.default)(restProps, data)));
}

/***/ }),

/***/ "./node_modules/@vx/shape/build/shapes/link/line/LinkVerticalLine.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.pathVerticalLine = pathVerticalLine;
exports.default = LinkVerticalLine;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d3Path = __webpack_require__("./node_modules/d3-path/index.js");

var _additionalProps = __webpack_require__("./node_modules/@vx/shape/build/util/additionalProps.js");

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function pathVerticalLine(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y;

  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);

    var sx = x(sourceData);
    var sy = y(sourceData);
    var tx = x(targetData);
    var ty = y(targetData);

    var path = (0, _d3Path.path)();
    path.moveTo(sx, sy);
    path.lineTo(tx, ty);

    return path.toString();
  };
}

LinkVerticalLine.propTypes = {
  innerRef: _propTypes2.default.func,
  path: _propTypes2.default.func,
  x: _propTypes2.default.func,
  y: _propTypes2.default.func,
  source: _propTypes2.default.func,
  target: _propTypes2.default.func
};

function LinkVerticalLine(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.x;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.y;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      restProps = _objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target']);

  path = path || pathVerticalLine({ source: source, target: target, x: x, y: y });
  return _react2.default.createElement('path', _extends({
    ref: innerRef,
    className: (0, _classnames2.default)('vx-link', className),
    d: path(data)
  }, (0, _additionalProps2.default)(restProps, data)));
}

/***/ }),

/***/ "./node_modules/@vx/shape/build/shapes/link/step/LinkHorizontalStep.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.pathHorizontalStep = pathHorizontalStep;
exports.default = LinkHorizontalStep;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d3Path = __webpack_require__("./node_modules/d3-path/index.js");

var _additionalProps = __webpack_require__("./node_modules/@vx/shape/build/util/additionalProps.js");

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function pathHorizontalStep(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y,
      percent = _ref.percent;

  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);

    var sx = x(sourceData);
    var sy = y(sourceData);
    var tx = x(targetData);
    var ty = y(targetData);

    var path = (0, _d3Path.path)();
    path.moveTo(sx, sy);
    path.lineTo(sx + (tx - sx) * percent, sy);
    path.lineTo(sx + (tx - sx) * percent, ty);
    path.lineTo(tx, ty);

    return path.toString();
  };
}

LinkHorizontalStep.propTypes = {
  innerRef: _propTypes2.default.func,
  percent: _propTypes2.default.number,
  x: _propTypes2.default.func,
  y: _propTypes2.default.func,
  source: _propTypes2.default.func,
  target: _propTypes2.default.func,
  path: _propTypes2.default.func
};

function LinkHorizontalStep(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path = _ref2.path,
      _ref2$percent = _ref2.percent,
      percent = _ref2$percent === undefined ? 0.5 : _ref2$percent,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.y;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.x;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      restProps = _objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'percent', 'x', 'y', 'source', 'target']);

  path = path || pathHorizontalStep({ source: source, target: target, x: x, y: y, percent: percent });
  return _react2.default.createElement('path', _extends({
    ref: innerRef,
    className: (0, _classnames2.default)('vx-link', className),
    d: path(data)
  }, (0, _additionalProps2.default)(restProps, data)));
}

/***/ }),

/***/ "./node_modules/@vx/shape/build/shapes/link/step/LinkRadialStep.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.pathRadialStep = pathRadialStep;
exports.default = LinkRadialStep;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _additionalProps = __webpack_require__("./node_modules/@vx/shape/build/util/additionalProps.js");

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function pathRadialStep(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y;

  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);

    var sx = x(sourceData);
    var sy = y(sourceData);
    var tx = x(targetData);
    var ty = y(targetData);

    var sa = sx - Math.PI / 2;
    var sr = sy;
    var ta = tx - Math.PI / 2;
    var tr = ty;

    var sc = Math.cos(sa);
    var ss = Math.sin(sa);
    var tc = Math.cos(ta);
    var ts = Math.sin(ta);
    var sf = Math.abs(ta - sa) > Math.PI ? ta <= sa : ta > sa;

    return '\n      M' + sr * sc + ',' + sr * ss + '\n      A' + sr + ',' + sr + ',0,0,' + (sf ? 1 : 0) + ',' + sr * tc + ',' + sr * ts + '\n      L' + tr * tc + ',' + tr * ts + '\n    ';
  };
}

LinkRadialStep.propTypes = {
  innerRef: _propTypes2.default.func,
  x: _propTypes2.default.func,
  y: _propTypes2.default.func,
  source: _propTypes2.default.func,
  target: _propTypes2.default.func,
  path: _propTypes2.default.func
};

function LinkRadialStep(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.x;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.y;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      restProps = _objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target']);

  path = path || pathRadialStep({ source: source, target: target, x: x, y: y });
  return _react2.default.createElement('path', _extends({
    ref: innerRef,
    className: (0, _classnames2.default)('vx-link', className),
    d: path(data)
  }, (0, _additionalProps2.default)(restProps, data)));
}

/***/ }),

/***/ "./node_modules/@vx/shape/build/shapes/link/step/LinkVerticalStep.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.pathVerticalStep = pathVerticalStep;
exports.default = LinkVerticalStep;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d3Path = __webpack_require__("./node_modules/d3-path/index.js");

var _additionalProps = __webpack_require__("./node_modules/@vx/shape/build/util/additionalProps.js");

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function pathVerticalStep(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y,
      percent = _ref.percent;

  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);

    var sx = x(sourceData);
    var sy = y(sourceData);
    var tx = x(targetData);
    var ty = y(targetData);

    var path = (0, _d3Path.path)();
    path.moveTo(sx, sy);
    path.lineTo(sx, sy + (ty - sy) * percent);
    path.lineTo(tx, sy + (ty - sy) * percent);
    path.lineTo(tx, ty);

    return path.toString();
  };
}

LinkVerticalStep.propTypes = {
  innerRef: _propTypes2.default.func,
  percent: _propTypes2.default.number,
  x: _propTypes2.default.func,
  y: _propTypes2.default.func,
  source: _propTypes2.default.func,
  target: _propTypes2.default.func,
  path: _propTypes2.default.func
};

function LinkVerticalStep(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path = _ref2.path,
      _ref2$percent = _ref2.percent,
      percent = _ref2$percent === undefined ? 0.5 : _ref2$percent,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.x;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.y;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      restProps = _objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'percent', 'x', 'y', 'source', 'target']);

  path = path || pathVerticalStep({ source: source, target: target, x: x, y: y, percent: percent });
  return _react2.default.createElement('path', _extends({
    ref: innerRef,
    className: (0, _classnames2.default)('vx-link', className),
    d: path(data)
  }, (0, _additionalProps2.default)(restProps, data)));
}

/***/ }),

/***/ "./node_modules/@vx/shape/build/util/additionalProps.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = additionalProps;

var _callOrValue = __webpack_require__("./node_modules/@vx/shape/build/util/callOrValue.js");

var _callOrValue2 = _interopRequireDefault(_callOrValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function additionalProps(restProps, data) {
  return Object.keys(restProps).reduce(function (ret, cur) {
    ret[cur] = (0, _callOrValue2.default)(restProps[cur], data);
    return ret;
  }, {});
}

/***/ }),

/***/ "./node_modules/@vx/shape/build/util/callOrValue.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = callOrValue;
function callOrValue(maybeFn, data) {
  if (typeof maybeFn === 'function') {
    return maybeFn(data);
  }
  return maybeFn;
}

/***/ }),

/***/ "./node_modules/@vx/shape/build/util/stackOffset.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.STACK_OFFSET_NAMES = exports.STACK_OFFSETS = undefined;
exports.default = stackOffset;

var _d3Shape = __webpack_require__("./node_modules/d3-shape/index.js");

var STACK_OFFSETS = exports.STACK_OFFSETS = {
  expand: _d3Shape.stackOffsetExpand,
  diverging: _d3Shape.stackOffsetDiverging,
  none: _d3Shape.stackOffsetNone,
  silhouette: _d3Shape.stackOffsetSilhouette,
  wiggle: _d3Shape.stackOffsetWiggle
};

var STACK_OFFSET_NAMES = exports.STACK_OFFSET_NAMES = Object.keys(STACK_OFFSETS);

function stackOffset(offset) {
  return STACK_OFFSETS[offset] || STACK_OFFSETS.none;
}

/***/ }),

/***/ "./node_modules/@vx/shape/build/util/stackOrder.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.STACK_ORDER_NAMES = exports.STACK_ORDERS = undefined;
exports.default = stackOrder;

var _d3Shape = __webpack_require__("./node_modules/d3-shape/index.js");

var STACK_ORDERS = exports.STACK_ORDERS = {
  ascending: _d3Shape.stackOrderAscending,
  descending: _d3Shape.stackOrderDescending,
  insideout: _d3Shape.stackOrderInsideOut,
  none: _d3Shape.stackOrderNone,
  reverse: _d3Shape.stackOrderReverse
};

var STACK_ORDER_NAMES = exports.STACK_ORDER_NAMES = Object.keys(STACK_ORDERS);

function stackOrder(order) {
  return STACK_ORDERS[order] || STACK_ORDERS.none;
}

/***/ }),

/***/ "./node_modules/@vx/tooltip/build/enhancers/withTooltip.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withTooltipPropTypes = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = withTooltip;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var withTooltipPropTypes = exports.withTooltipPropTypes = {
  tooltipOpen: _propTypes2.default.bool,
  tooltipLeft: _propTypes2.default.number,
  tooltipTop: _propTypes2.default.number,
  tooltipData: _propTypes2.default.object,
  updateTooltip: _propTypes2.default.func,
  showTooltip: _propTypes2.default.func,
  hideTooltip: _propTypes2.default.func
};

function withTooltip(BaseComponent) {
  var containerProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    style: {
      position: 'relative',
      width: 'inherit',
      height: 'inherit'
    }
  };

  var WrappedComponent = function (_React$PureComponent) {
    _inherits(WrappedComponent, _React$PureComponent);

    function WrappedComponent(props) {
      _classCallCheck(this, WrappedComponent);

      var _this = _possibleConstructorReturn(this, (WrappedComponent.__proto__ || Object.getPrototypeOf(WrappedComponent)).call(this, props));

      _this.state = {
        tooltipOpen: false,
        tooltipLeft: undefined,
        tooltipTop: undefined,
        tooltipData: undefined
      };
      _this.updateTooltip = _this.updateTooltip.bind(_this);
      _this.showTooltip = _this.showTooltip.bind(_this);
      _this.hideTooltip = _this.hideTooltip.bind(_this);
      return _this;
    }

    _createClass(WrappedComponent, [{
      key: 'updateTooltip',
      value: function updateTooltip(_ref) {
        var tooltipOpen = _ref.tooltipOpen,
            tooltipLeft = _ref.tooltipLeft,
            tooltipTop = _ref.tooltipTop,
            tooltipData = _ref.tooltipData;

        this.setState(function (prevState) {
          return _extends({}, prevState, {
            tooltipOpen: tooltipOpen,
            tooltipLeft: tooltipLeft,
            tooltipTop: tooltipTop,
            tooltipData: tooltipData
          });
        });
      }
    }, {
      key: 'showTooltip',
      value: function showTooltip(_ref2) {
        var tooltipLeft = _ref2.tooltipLeft,
            tooltipTop = _ref2.tooltipTop,
            tooltipData = _ref2.tooltipData;

        this.updateTooltip({
          tooltipOpen: true,
          tooltipLeft: tooltipLeft,
          tooltipTop: tooltipTop,
          tooltipData: tooltipData
        });
      }
    }, {
      key: 'hideTooltip',
      value: function hideTooltip() {
        this.updateTooltip({
          tooltipOpen: false,
          tooltipLeft: undefined,
          tooltipTop: undefined,
          tooltipData: undefined
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          containerProps,
          _react2.default.createElement(BaseComponent, _extends({
            updateTooltip: this.updateTooltip,
            showTooltip: this.showTooltip,
            hideTooltip: this.hideTooltip
          }, this.state, this.props))
        );
      }
    }]);

    return WrappedComponent;
  }(_react2.default.PureComponent);

  return WrappedComponent;
}

/***/ }),

/***/ "./node_modules/@vx/tooltip/build/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _withTooltip = __webpack_require__("./node_modules/@vx/tooltip/build/enhancers/withTooltip.js");

Object.defineProperty(exports, 'withTooltip', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_withTooltip).default;
  }
});

var _Tooltip = __webpack_require__("./node_modules/@vx/tooltip/build/tooltips/Tooltip.js");

Object.defineProperty(exports, 'Tooltip', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Tooltip).default;
  }
});

var _TooltipWithBounds = __webpack_require__("./node_modules/@vx/tooltip/build/tooltips/TooltipWithBounds.js");

Object.defineProperty(exports, 'TooltipWithBounds', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TooltipWithBounds).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/@vx/tooltip/build/tooltips/Tooltip.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Tooltip;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Tooltip(_ref) {
  var className = _ref.className,
      top = _ref.top,
      left = _ref.left,
      style = _ref.style,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ['className', 'top', 'left', 'style', 'children']);

  return _react2.default.createElement(
    'div',
    _extends({
      className: (0, _classnames2.default)('vx-tooltip-portal', className),
      style: _extends({
        position: 'absolute',
        backgroundColor: 'white',
        color: '#666666',
        padding: '.3rem .5rem',
        borderRadius: '3px',
        fontSize: '14px',
        boxShadow: '0 1px 2px rgba(33,33,33,0.2)',
        lineHeight: '1em',
        pointerEvents: 'none',
        top: top,
        left: left
      }, style)
    }, restProps),
    children
  );
}

Tooltip.propTypes = {
  left: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  top: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  children: _propTypes2.default.any
};

/***/ }),

/***/ "./node_modules/@vx/tooltip/build/tooltips/TooltipWithBounds.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint react/forbid-prop-types: 0 */


var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _bounds = __webpack_require__("./node_modules/@vx/bounds/build/index.js");

var _Tooltip = __webpack_require__("./node_modules/@vx/tooltip/build/tooltips/Tooltip.js");

var _Tooltip2 = _interopRequireDefault(_Tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = _extends({}, _bounds.withBoundingRectsProps, _Tooltip2.default.propTypes, {
  offsetLeft: _propTypes2.default.number,
  offsetTop: _propTypes2.default.number
});

var defaultProps = {};

function TooltipWithBounds(_ref) {
  var initialLeft = _ref.left,
      initialTop = _ref.top,
      _ref$offsetLeft = _ref.offsetLeft,
      offsetLeft = _ref$offsetLeft === undefined ? 10 : _ref$offsetLeft,
      _ref$offsetTop = _ref.offsetTop,
      offsetTop = _ref$offsetTop === undefined ? 10 : _ref$offsetTop,
      rect = _ref.rect,
      parentRect = _ref.parentRect,
      children = _ref.children,
      style = _ref.style,
      otherProps = _objectWithoutProperties(_ref, ['left', 'top', 'offsetLeft', 'offsetTop', 'rect', 'parentRect', 'children', 'style']);

  var left = initialLeft;
  var top = initialTop;

  if (rect && parentRect) {
    left = offsetLeft + rect.right > parentRect.right || offsetLeft + rect.right > window.innerWidth ? left - rect.width - offsetLeft : left + offsetLeft;

    top = offsetTop + rect.bottom > parentRect.bottom || offsetTop + rect.bottom > window.innerHeight ? top - rect.height - offsetTop : top + offsetTop;
  }

  return _react2.default.createElement(
    _Tooltip2.default,
    _extends({
      style: _extends({ top: 0, transform: 'translate(' + left + 'px, ' + top + 'px)' }, style)
    }, otherProps),
    children
  );
}

TooltipWithBounds.propTypes = propTypes;
TooltipWithBounds.defaultProps = defaultProps;

exports.default = (0, _bounds.withBoundingRects)(TooltipWithBounds);

/***/ }),

/***/ "./node_modules/classnames/index.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),

/***/ "./node_modules/d3-array/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_bisect__ = __webpack_require__("./node_modules/d3-array/src/bisect.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__src_bisect__["a"]; });
/* unused harmony reexport bisectRight */
/* unused harmony reexport bisectLeft */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_ascending__ = __webpack_require__("./node_modules/d3-array/src/ascending.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__src_ascending__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_bisector__ = __webpack_require__("./node_modules/d3-array/src/bisector.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__src_bisector__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_cross__ = __webpack_require__("./node_modules/d3-array/src/cross.js");
/* unused harmony reexport cross */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_descending__ = __webpack_require__("./node_modules/d3-array/src/descending.js");
/* unused harmony reexport descending */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_deviation__ = __webpack_require__("./node_modules/d3-array/src/deviation.js");
/* unused harmony reexport deviation */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_extent__ = __webpack_require__("./node_modules/d3-array/src/extent.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_6__src_extent__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_histogram__ = __webpack_require__("./node_modules/d3-array/src/histogram.js");
/* unused harmony reexport histogram */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_threshold_freedmanDiaconis__ = __webpack_require__("./node_modules/d3-array/src/threshold/freedmanDiaconis.js");
/* unused harmony reexport thresholdFreedmanDiaconis */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_threshold_scott__ = __webpack_require__("./node_modules/d3-array/src/threshold/scott.js");
/* unused harmony reexport thresholdScott */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_threshold_sturges__ = __webpack_require__("./node_modules/d3-array/src/threshold/sturges.js");
/* unused harmony reexport thresholdSturges */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_max__ = __webpack_require__("./node_modules/d3-array/src/max.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_11__src_max__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_mean__ = __webpack_require__("./node_modules/d3-array/src/mean.js");
/* unused harmony reexport mean */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_median__ = __webpack_require__("./node_modules/d3-array/src/median.js");
/* unused harmony reexport median */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_merge__ = __webpack_require__("./node_modules/d3-array/src/merge.js");
/* unused harmony reexport merge */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_min__ = __webpack_require__("./node_modules/d3-array/src/min.js");
/* unused harmony reexport min */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_pairs__ = __webpack_require__("./node_modules/d3-array/src/pairs.js");
/* unused harmony reexport pairs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_permute__ = __webpack_require__("./node_modules/d3-array/src/permute.js");
/* unused harmony reexport permute */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__src_quantile__ = __webpack_require__("./node_modules/d3-array/src/quantile.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_18__src_quantile__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__src_range__ = __webpack_require__("./node_modules/d3-array/src/range.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_19__src_range__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__src_scan__ = __webpack_require__("./node_modules/d3-array/src/scan.js");
/* unused harmony reexport scan */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__src_shuffle__ = __webpack_require__("./node_modules/d3-array/src/shuffle.js");
/* unused harmony reexport shuffle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__src_sum__ = __webpack_require__("./node_modules/d3-array/src/sum.js");
/* unused harmony reexport sum */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__src_ticks__ = __webpack_require__("./node_modules/d3-array/src/ticks.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_23__src_ticks__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_23__src_ticks__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_23__src_ticks__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__src_transpose__ = __webpack_require__("./node_modules/d3-array/src/transpose.js");
/* unused harmony reexport transpose */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__src_variance__ = __webpack_require__("./node_modules/d3-array/src/variance.js");
/* unused harmony reexport variance */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__src_zip__ = __webpack_require__("./node_modules/d3-array/src/zip.js");
/* unused harmony reexport zip */





























/***/ }),

/***/ "./node_modules/d3-array/src/array.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return slice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return map; });
var array = Array.prototype;

var slice = array.slice;
var map = array.map;


/***/ }),

/***/ "./node_modules/d3-array/src/ascending.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
});


/***/ }),

/***/ "./node_modules/d3-array/src/bisect.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export bisectRight */
/* unused harmony export bisectLeft */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__("./node_modules/d3-array/src/ascending.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bisector__ = __webpack_require__("./node_modules/d3-array/src/bisector.js");



var ascendingBisect = Object(__WEBPACK_IMPORTED_MODULE_1__bisector__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */]);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
/* harmony default export */ __webpack_exports__["a"] = (bisectRight);


/***/ }),

/***/ "./node_modules/d3-array/src/bisector.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__("./node_modules/d3-array/src/ascending.js");


/* harmony default export */ __webpack_exports__["a"] = (function(compare) {
  if (compare.length === 1) compare = ascendingComparator(compare);
  return {
    left: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    },
    right: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) > 0) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }
  };
});

function ascendingComparator(f) {
  return function(d, x) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */])(f(d), x);
  };
}


/***/ }),

/***/ "./node_modules/d3-array/src/constant.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-array/src/cross.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pairs__ = __webpack_require__("./node_modules/d3-array/src/pairs.js");


/* unused harmony default export */ var _unused_webpack_default_export = (function(values0, values1, reduce) {
  var n0 = values0.length,
      n1 = values1.length,
      values = new Array(n0 * n1),
      i0,
      i1,
      i,
      value0;

  if (reduce == null) reduce = __WEBPACK_IMPORTED_MODULE_0__pairs__["a" /* pair */];

  for (i0 = i = 0; i0 < n0; ++i0) {
    for (value0 = values0[i0], i1 = 0; i1 < n1; ++i1, ++i) {
      values[i] = reduce(value0, values1[i1]);
    }
  }

  return values;
});


/***/ }),

/***/ "./node_modules/d3-array/src/descending.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
});


/***/ }),

/***/ "./node_modules/d3-array/src/deviation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__variance__ = __webpack_require__("./node_modules/d3-array/src/variance.js");


/* harmony default export */ __webpack_exports__["a"] = (function(array, f) {
  var v = Object(__WEBPACK_IMPORTED_MODULE_0__variance__["a" /* default */])(array, f);
  return v ? Math.sqrt(v) : v;
});


/***/ }),

/***/ "./node_modules/d3-array/src/extent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  return [min, max];
});


/***/ }),

/***/ "./node_modules/d3-array/src/histogram.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__("./node_modules/d3-array/src/array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bisect__ = __webpack_require__("./node_modules/d3-array/src/bisect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__("./node_modules/d3-array/src/constant.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__extent__ = __webpack_require__("./node_modules/d3-array/src/extent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__identity__ = __webpack_require__("./node_modules/d3-array/src/identity.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__range__ = __webpack_require__("./node_modules/d3-array/src/range.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ticks__ = __webpack_require__("./node_modules/d3-array/src/ticks.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__threshold_sturges__ = __webpack_require__("./node_modules/d3-array/src/threshold/sturges.js");









/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var value = __WEBPACK_IMPORTED_MODULE_4__identity__["a" /* default */],
      domain = __WEBPACK_IMPORTED_MODULE_3__extent__["a" /* default */],
      threshold = __WEBPACK_IMPORTED_MODULE_7__threshold_sturges__["a" /* default */];

  function histogram(data) {
    var i,
        n = data.length,
        x,
        values = new Array(n);

    for (i = 0; i < n; ++i) {
      values[i] = value(data[i], i, data);
    }

    var xz = domain(values),
        x0 = xz[0],
        x1 = xz[1],
        tz = threshold(values, x0, x1);

    // Convert number of thresholds into uniform thresholds.
    if (!Array.isArray(tz)) {
      tz = Object(__WEBPACK_IMPORTED_MODULE_6__ticks__["c" /* tickStep */])(x0, x1, tz);
      tz = Object(__WEBPACK_IMPORTED_MODULE_5__range__["a" /* default */])(Math.ceil(x0 / tz) * tz, Math.floor(x1 / tz) * tz, tz); // exclusive
    }

    // Remove any thresholds outside the domain.
    var m = tz.length;
    while (tz[0] <= x0) tz.shift(), --m;
    while (tz[m - 1] > x1) tz.pop(), --m;

    var bins = new Array(m + 1),
        bin;

    // Initialize bins.
    for (i = 0; i <= m; ++i) {
      bin = bins[i] = [];
      bin.x0 = i > 0 ? tz[i - 1] : x0;
      bin.x1 = i < m ? tz[i] : x1;
    }

    // Assign data to bins by value, ignoring any outside the domain.
    for (i = 0; i < n; ++i) {
      x = values[i];
      if (x0 <= x && x <= x1) {
        bins[Object(__WEBPACK_IMPORTED_MODULE_1__bisect__["a" /* default */])(tz, x, 0, m)].push(data[i]);
      }
    }

    return bins;
  }

  histogram.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(_), histogram) : value;
  };

  histogram.domain = function(_) {
    return arguments.length ? (domain = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])([_[0], _[1]]), histogram) : domain;
  };

  histogram.thresholds = function(_) {
    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? Object(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__array__["b" /* slice */].call(_)) : Object(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(_), histogram) : threshold;
  };

  return histogram;
});


/***/ }),

/***/ "./node_modules/d3-array/src/identity.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x;
});


/***/ }),

/***/ "./node_modules/d3-array/src/max.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  return max;
});


/***/ }),

/***/ "./node_modules/d3-array/src/mean.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__("./node_modules/d3-array/src/number.js");


/* unused harmony default export */ var _unused_webpack_default_export = (function(values, valueof) {
  var n = values.length,
      m = n,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(values[i]))) sum += value;
      else --m;
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(valueof(values[i], i, values)))) sum += value;
      else --m;
    }
  }

  if (m) return sum / m;
});


/***/ }),

/***/ "./node_modules/d3-array/src/median.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__("./node_modules/d3-array/src/ascending.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__number__ = __webpack_require__("./node_modules/d3-array/src/number.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quantile__ = __webpack_require__("./node_modules/d3-array/src/quantile.js");




/* unused harmony default export */ var _unused_webpack_default_export = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      numbers = [];

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_1__number__["a" /* default */])(values[i]))) {
        numbers.push(value);
      }
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_1__number__["a" /* default */])(valueof(values[i], i, values)))) {
        numbers.push(value);
      }
    }
  }

  return Object(__WEBPACK_IMPORTED_MODULE_2__quantile__["a" /* default */])(numbers.sort(__WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */]), 0.5);
});


/***/ }),

/***/ "./node_modules/d3-array/src/merge.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(arrays) {
  var n = arrays.length,
      m,
      i = -1,
      j = 0,
      merged,
      array;

  while (++i < n) j += arrays[i].length;
  merged = new Array(j);

  while (--n >= 0) {
    array = arrays[n];
    m = array.length;
    while (--m >= 0) {
      merged[--j] = array[m];
    }
  }

  return merged;
});


/***/ }),

/***/ "./node_modules/d3-array/src/min.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  return min;
});


/***/ }),

/***/ "./node_modules/d3-array/src/number.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x === null ? NaN : +x;
});


/***/ }),

/***/ "./node_modules/d3-array/src/pairs.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pair;
/* unused harmony default export */ var _unused_webpack_default_export = (function(array, f) {
  if (f == null) f = pair;
  var i = 0, n = array.length - 1, p = array[0], pairs = new Array(n < 0 ? 0 : n);
  while (i < n) pairs[i] = f(p, p = array[++i]);
  return pairs;
});

function pair(a, b) {
  return [a, b];
}


/***/ }),

/***/ "./node_modules/d3-array/src/permute.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(array, indexes) {
  var i = indexes.length, permutes = new Array(i);
  while (i--) permutes[i] = array[indexes[i]];
  return permutes;
});


/***/ }),

/***/ "./node_modules/d3-array/src/quantile.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__("./node_modules/d3-array/src/number.js");


/* harmony default export */ __webpack_exports__["a"] = (function(values, p, valueof) {
  if (valueof == null) valueof = __WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */];
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
  if (p >= 1) return +valueof(values[n - 1], n - 1, values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = +valueof(values[i0], i0, values),
      value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
});


/***/ }),

/***/ "./node_modules/d3-array/src/range.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
});


/***/ }),

/***/ "./node_modules/d3-array/src/scan.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__("./node_modules/d3-array/src/ascending.js");


/* unused harmony default export */ var _unused_webpack_default_export = (function(values, compare) {
  if (!(n = values.length)) return;
  var n,
      i = 0,
      j = 0,
      xi,
      xj = values[j];

  if (compare == null) compare = __WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */];

  while (++i < n) {
    if (compare(xi = values[i], xj) < 0 || compare(xj, xj) !== 0) {
      xj = xi, j = i;
    }
  }

  if (compare(xj, xj) === 0) return j;
});


/***/ }),

/***/ "./node_modules/d3-array/src/shuffle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(array, i0, i1) {
  var m = (i1 == null ? array.length : i1) - (i0 = i0 == null ? 0 : +i0),
      t,
      i;

  while (m) {
    i = Math.random() * m-- | 0;
    t = array[m + i0];
    array[m + i0] = array[i + i0];
    array[i + i0] = t;
  }

  return array;
});


/***/ }),

/***/ "./node_modules/d3-array/src/sum.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (value = +values[i]) sum += value; // Note: zero and null are equivalent.
    }
  }

  else {
    while (++i < n) {
      if (value = +valueof(values[i], i, values)) sum += value;
    }
  }

  return sum;
});


/***/ }),

/***/ "./node_modules/d3-array/src/threshold/freedmanDiaconis.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__("./node_modules/d3-array/src/array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ascending__ = __webpack_require__("./node_modules/d3-array/src/ascending.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__number__ = __webpack_require__("./node_modules/d3-array/src/number.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quantile__ = __webpack_require__("./node_modules/d3-array/src/quantile.js");





/* unused harmony default export */ var _unused_webpack_default_export = (function(values, min, max) {
  values = __WEBPACK_IMPORTED_MODULE_0__array__["a" /* map */].call(values, __WEBPACK_IMPORTED_MODULE_2__number__["a" /* default */]).sort(__WEBPACK_IMPORTED_MODULE_1__ascending__["a" /* default */]);
  return Math.ceil((max - min) / (2 * (Object(__WEBPACK_IMPORTED_MODULE_3__quantile__["a" /* default */])(values, 0.75) - Object(__WEBPACK_IMPORTED_MODULE_3__quantile__["a" /* default */])(values, 0.25)) * Math.pow(values.length, -1 / 3)));
});


/***/ }),

/***/ "./node_modules/d3-array/src/threshold/scott.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__deviation__ = __webpack_require__("./node_modules/d3-array/src/deviation.js");


/* unused harmony default export */ var _unused_webpack_default_export = (function(values, min, max) {
  return Math.ceil((max - min) / (3.5 * Object(__WEBPACK_IMPORTED_MODULE_0__deviation__["a" /* default */])(values) * Math.pow(values.length, -1 / 3)));
});


/***/ }),

/***/ "./node_modules/d3-array/src/threshold/sturges.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(values) {
  return Math.ceil(Math.log(values.length) / Math.LN2) + 1;
});


/***/ }),

/***/ "./node_modules/d3-array/src/ticks.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = tickIncrement;
/* harmony export (immutable) */ __webpack_exports__["c"] = tickStep;
var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

/* harmony default export */ __webpack_exports__["a"] = (function(start, stop, count) {
  var reverse,
      i = -1,
      n,
      ticks,
      step;

  stop = +stop, start = +start, count = +count;
  if (start === stop && count > 0) return [start];
  if (reverse = stop < start) n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

  if (step > 0) {
    start = Math.ceil(start / step);
    stop = Math.floor(stop / step);
    ticks = new Array(n = Math.ceil(stop - start + 1));
    while (++i < n) ticks[i] = (start + i) * step;
  } else {
    start = Math.floor(start * step);
    stop = Math.ceil(stop * step);
    ticks = new Array(n = Math.ceil(start - stop + 1));
    while (++i < n) ticks[i] = (start - i) / step;
  }

  if (reverse) ticks.reverse();

  return ticks;
});

function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log(step) / Math.LN10),
      error = step / Math.pow(10, power);
  return power >= 0
      ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
      : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}

function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}


/***/ }),

/***/ "./node_modules/d3-array/src/transpose.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__min__ = __webpack_require__("./node_modules/d3-array/src/min.js");


/* harmony default export */ __webpack_exports__["a"] = (function(matrix) {
  if (!(n = matrix.length)) return [];
  for (var i = -1, m = Object(__WEBPACK_IMPORTED_MODULE_0__min__["a" /* default */])(matrix, length), transpose = new Array(m); ++i < m;) {
    for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n;) {
      row[j] = matrix[j][i];
    }
  }
  return transpose;
});

function length(d) {
  return d.length;
}


/***/ }),

/***/ "./node_modules/d3-array/src/variance.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__("./node_modules/d3-array/src/number.js");


/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      m = 0,
      i = -1,
      mean = 0,
      value,
      delta,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(values[i]))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(valueof(values[i], i, values)))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  }

  if (m > 1) return sum / (m - 1);
});


/***/ }),

/***/ "./node_modules/d3-array/src/zip.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transpose__ = __webpack_require__("./node_modules/d3-array/src/transpose.js");


/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__transpose__["a" /* default */])(arguments);
});


/***/ }),

/***/ "./node_modules/d3-collection/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_nest__ = __webpack_require__("./node_modules/d3-collection/src/nest.js");
/* unused harmony reexport nest */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_set__ = __webpack_require__("./node_modules/d3-collection/src/set.js");
/* unused harmony reexport set */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_map__ = __webpack_require__("./node_modules/d3-collection/src/map.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__src_map__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_keys__ = __webpack_require__("./node_modules/d3-collection/src/keys.js");
/* unused harmony reexport keys */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_values__ = __webpack_require__("./node_modules/d3-collection/src/values.js");
/* unused harmony reexport values */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_entries__ = __webpack_require__("./node_modules/d3-collection/src/entries.js");
/* unused harmony reexport entries */








/***/ }),

/***/ "./node_modules/d3-collection/src/entries.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(map) {
  var entries = [];
  for (var key in map) entries.push({key: key, value: map[key]});
  return entries;
});


/***/ }),

/***/ "./node_modules/d3-collection/src/keys.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(map) {
  var keys = [];
  for (var key in map) keys.push(key);
  return keys;
});


/***/ }),

/***/ "./node_modules/d3-collection/src/map.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return prefix; });
var prefix = "$";

function Map() {}

Map.prototype = map.prototype = {
  constructor: Map,
  has: function(key) {
    return (prefix + key) in this;
  },
  get: function(key) {
    return this[prefix + key];
  },
  set: function(key, value) {
    this[prefix + key] = value;
    return this;
  },
  remove: function(key) {
    var property = prefix + key;
    return property in this && delete this[property];
  },
  clear: function() {
    for (var property in this) if (property[0] === prefix) delete this[property];
  },
  keys: function() {
    var keys = [];
    for (var property in this) if (property[0] === prefix) keys.push(property.slice(1));
    return keys;
  },
  values: function() {
    var values = [];
    for (var property in this) if (property[0] === prefix) values.push(this[property]);
    return values;
  },
  entries: function() {
    var entries = [];
    for (var property in this) if (property[0] === prefix) entries.push({key: property.slice(1), value: this[property]});
    return entries;
  },
  size: function() {
    var size = 0;
    for (var property in this) if (property[0] === prefix) ++size;
    return size;
  },
  empty: function() {
    for (var property in this) if (property[0] === prefix) return false;
    return true;
  },
  each: function(f) {
    for (var property in this) if (property[0] === prefix) f(this[property], property.slice(1), this);
  }
};

function map(object, f) {
  var map = new Map;

  // Copy constructor.
  if (object instanceof Map) object.each(function(value, key) { map.set(key, value); });

  // Index array by numeric index or specified key function.
  else if (Array.isArray(object)) {
    var i = -1,
        n = object.length,
        o;

    if (f == null) while (++i < n) map.set(i, object[i]);
    else while (++i < n) map.set(f(o = object[i], i, object), o);
  }

  // Convert object to map.
  else if (object) for (var key in object) map.set(key, object[key]);

  return map;
}

/* harmony default export */ __webpack_exports__["a"] = (map);


/***/ }),

/***/ "./node_modules/d3-collection/src/nest.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map__ = __webpack_require__("./node_modules/d3-collection/src/map.js");


/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var keys = [],
      sortKeys = [],
      sortValues,
      rollup,
      nest;

  function apply(array, depth, createResult, setResult) {
    if (depth >= keys.length) {
      if (sortValues != null) array.sort(sortValues);
      return rollup != null ? rollup(array) : array;
    }

    var i = -1,
        n = array.length,
        key = keys[depth++],
        keyValue,
        value,
        valuesByKey = Object(__WEBPACK_IMPORTED_MODULE_0__map__["a" /* default */])(),
        values,
        result = createResult();

    while (++i < n) {
      if (values = valuesByKey.get(keyValue = key(value = array[i]) + "")) {
        values.push(value);
      } else {
        valuesByKey.set(keyValue, [value]);
      }
    }

    valuesByKey.each(function(values, key) {
      setResult(result, key, apply(values, depth, createResult, setResult));
    });

    return result;
  }

  function entries(map, depth) {
    if (++depth > keys.length) return map;
    var array, sortKey = sortKeys[depth - 1];
    if (rollup != null && depth >= keys.length) array = map.entries();
    else array = [], map.each(function(v, k) { array.push({key: k, values: entries(v, depth)}); });
    return sortKey != null ? array.sort(function(a, b) { return sortKey(a.key, b.key); }) : array;
  }

  return nest = {
    object: function(array) { return apply(array, 0, createObject, setObject); },
    map: function(array) { return apply(array, 0, createMap, setMap); },
    entries: function(array) { return entries(apply(array, 0, createMap, setMap), 0); },
    key: function(d) { keys.push(d); return nest; },
    sortKeys: function(order) { sortKeys[keys.length - 1] = order; return nest; },
    sortValues: function(order) { sortValues = order; return nest; },
    rollup: function(f) { rollup = f; return nest; }
  };
});

function createObject() {
  return {};
}

function setObject(object, key, value) {
  object[key] = value;
}

function createMap() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__map__["a" /* default */])();
}

function setMap(map, key, value) {
  map.set(key, value);
}


/***/ }),

/***/ "./node_modules/d3-collection/src/set.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map__ = __webpack_require__("./node_modules/d3-collection/src/map.js");


function Set() {}

var proto = __WEBPACK_IMPORTED_MODULE_0__map__["a" /* default */].prototype;

Set.prototype = set.prototype = {
  constructor: Set,
  has: proto.has,
  add: function(value) {
    value += "";
    this[__WEBPACK_IMPORTED_MODULE_0__map__["b" /* prefix */] + value] = value;
    return this;
  },
  remove: proto.remove,
  clear: proto.clear,
  values: proto.keys,
  size: proto.size,
  empty: proto.empty,
  each: proto.each
};

function set(object, f) {
  var set = new Set;

  // Copy constructor.
  if (object instanceof Set) object.each(function(value) { set.add(value); });

  // Otherwise, assume it’s an array.
  else if (object) {
    var i = -1, n = object.length;
    if (f == null) while (++i < n) set.add(object[i]);
    else while (++i < n) set.add(f(object[i], i, object));
  }

  return set;
}

/* unused harmony default export */ var _unused_webpack_default_export = (set);


/***/ }),

/***/ "./node_modules/d3-collection/src/values.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(map) {
  var values = [];
  for (var key in map) values.push(map[key]);
  return values;
});


/***/ }),

/***/ "./node_modules/d3-color/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_color__ = __webpack_require__("./node_modules/d3-color/src/color.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_color__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__src_color__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__src_color__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_lab__ = __webpack_require__("./node_modules/d3-color/src/lab.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__src_lab__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__src_lab__["b"]; });
/* unused harmony reexport lch */
/* unused harmony reexport gray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_cubehelix__ = __webpack_require__("./node_modules/d3-color/src/cubehelix.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__src_cubehelix__["a"]; });





/***/ }),

/***/ "./node_modules/d3-color/src/color.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Color;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return darker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return brighter; });
/* harmony export (immutable) */ __webpack_exports__["e"] = color;
/* harmony export (immutable) */ __webpack_exports__["h"] = rgbConvert;
/* harmony export (immutable) */ __webpack_exports__["g"] = rgb;
/* harmony export (immutable) */ __webpack_exports__["b"] = Rgb;
/* unused harmony export hslConvert */
/* harmony export (immutable) */ __webpack_exports__["f"] = hsl;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__define__ = __webpack_require__("./node_modules/d3-color/src/define.js");


function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex3 = /^#([0-9a-f]{3})$/,
    reHex6 = /^#([0-9a-f]{6})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Color, color, {
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: function() {
    return this.rgb().hex();
  },
  toString: function() {
    return this.rgb() + "";
  }
});

function color(format) {
  var m;
  format = (format + "").trim().toLowerCase();
  return (m = reHex3.exec(format)) ? (m = parseInt(m[1], 16), new Rgb((m >> 8 & 0xf) | (m >> 4 & 0x0f0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1)) // #f00
      : (m = reHex6.exec(format)) ? rgbn(parseInt(m[1], 16)) // #ff0000
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format])
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Rgb, rgb, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return (0 <= this.r && this.r <= 255)
        && (0 <= this.g && this.g <= 255)
        && (0 <= this.b && this.b <= 255)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: function() {
    return "#" + hex(this.r) + hex(this.g) + hex(this.b);
  },
  toString: function() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(")
        + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.b) || 0))
        + (a === 1 ? ")" : ", " + a + ")");
  }
}));

function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Hsl, hsl, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  }
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}


/***/ }),

/***/ "./node_modules/d3-color/src/cubehelix.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cubehelix;
/* unused harmony export Cubehelix */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__define__ = __webpack_require__("./node_modules/d3-color/src/define.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__("./node_modules/d3-color/src/color.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__("./node_modules/d3-color/src/math.js");




var A = -0.14861,
    B = +1.78277,
    C = -0.29227,
    D = -0.90649,
    E = +1.97294,
    ED = E * D,
    EB = E * B,
    BC_DA = B * C - D * A;

function cubehelixConvert(o) {
  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof __WEBPACK_IMPORTED_MODULE_1__color__["b" /* Rgb */])) o = Object(__WEBPACK_IMPORTED_MODULE_1__color__["h" /* rgbConvert */])(o);
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
      bl = b - l,
      k = (E * (g - l) - C * bl) / D,
      s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), // NaN if l=0 or l=1
      h = s ? Math.atan2(k, bl) * __WEBPACK_IMPORTED_MODULE_2__math__["b" /* rad2deg */] - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}

function cubehelix(h, s, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}

function Cubehelix(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Cubehelix, cubehelix, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* Color */], {
  brighter: function(k) {
    k = k == null ? __WEBPACK_IMPORTED_MODULE_1__color__["c" /* brighter */] : Math.pow(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* brighter */], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? __WEBPACK_IMPORTED_MODULE_1__color__["d" /* darker */] : Math.pow(__WEBPACK_IMPORTED_MODULE_1__color__["d" /* darker */], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * __WEBPACK_IMPORTED_MODULE_2__math__["a" /* deg2rad */],
        l = +this.l,
        a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
        cosh = Math.cos(h),
        sinh = Math.sin(h);
    return new __WEBPACK_IMPORTED_MODULE_1__color__["b" /* Rgb */](
      255 * (l + a * (A * cosh + B * sinh)),
      255 * (l + a * (C * cosh + D * sinh)),
      255 * (l + a * (E * cosh)),
      this.opacity
    );
  }
}));


/***/ }),

/***/ "./node_modules/d3-color/src/define.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = extend;
/* harmony default export */ __webpack_exports__["a"] = (function(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
});

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}


/***/ }),

/***/ "./node_modules/d3-color/src/lab.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export gray */
/* harmony export (immutable) */ __webpack_exports__["a"] = lab;
/* unused harmony export Lab */
/* unused harmony export lch */
/* harmony export (immutable) */ __webpack_exports__["b"] = hcl;
/* unused harmony export Hcl */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__define__ = __webpack_require__("./node_modules/d3-color/src/define.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__("./node_modules/d3-color/src/color.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__("./node_modules/d3-color/src/math.js");




// https://beta.observablehq.com/@mbostock/lab-and-rgb
var K = 18,
    Xn = 0.96422,
    Yn = 1,
    Zn = 0.82521,
    t0 = 4 / 29,
    t1 = 6 / 29,
    t2 = 3 * t1 * t1,
    t3 = t1 * t1 * t1;

function labConvert(o) {
  if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
  if (o instanceof Hcl) {
    if (isNaN(o.h)) return new Lab(o.l, 0, 0, o.opacity);
    var h = o.h * __WEBPACK_IMPORTED_MODULE_2__math__["a" /* deg2rad */];
    return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
  }
  if (!(o instanceof __WEBPACK_IMPORTED_MODULE_1__color__["b" /* Rgb */])) o = Object(__WEBPACK_IMPORTED_MODULE_1__color__["h" /* rgbConvert */])(o);
  var r = rgb2lrgb(o.r),
      g = rgb2lrgb(o.g),
      b = rgb2lrgb(o.b),
      y = xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / Yn), x, z;
  if (r === g && g === b) x = z = y; else {
    x = xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / Xn);
    z = xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / Zn);
  }
  return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}

function gray(l, opacity) {
  return new Lab(l, 0, 0, opacity == null ? 1 : opacity);
}

function lab(l, a, b, opacity) {
  return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
}

function Lab(l, a, b, opacity) {
  this.l = +l;
  this.a = +a;
  this.b = +b;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Lab, lab, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* Color */], {
  brighter: function(k) {
    return new Lab(this.l + K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  darker: function(k) {
    return new Lab(this.l - K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  rgb: function() {
    var y = (this.l + 16) / 116,
        x = isNaN(this.a) ? y : y + this.a / 500,
        z = isNaN(this.b) ? y : y - this.b / 200;
    x = Xn * lab2xyz(x);
    y = Yn * lab2xyz(y);
    z = Zn * lab2xyz(z);
    return new __WEBPACK_IMPORTED_MODULE_1__color__["b" /* Rgb */](
      lrgb2rgb( 3.1338561 * x - 1.6168667 * y - 0.4906146 * z),
      lrgb2rgb(-0.9787684 * x + 1.9161415 * y + 0.0334540 * z),
      lrgb2rgb( 0.0719453 * x - 0.2289914 * y + 1.4052427 * z),
      this.opacity
    );
  }
}));

function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}

function lab2xyz(t) {
  return t > t1 ? t * t * t : t2 * (t - t0);
}

function lrgb2rgb(x) {
  return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}

function rgb2lrgb(x) {
  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}

function hclConvert(o) {
  if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
  if (!(o instanceof Lab)) o = labConvert(o);
  if (o.a === 0 && o.b === 0) return new Hcl(NaN, 0, o.l, o.opacity);
  var h = Math.atan2(o.b, o.a) * __WEBPACK_IMPORTED_MODULE_2__math__["b" /* rad2deg */];
  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}

function lch(l, c, h, opacity) {
  return arguments.length === 1 ? hclConvert(l) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function hcl(h, c, l, opacity) {
  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function Hcl(h, c, l, opacity) {
  this.h = +h;
  this.c = +c;
  this.l = +l;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Hcl, hcl, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* Color */], {
  brighter: function(k) {
    return new Hcl(this.h, this.c, this.l + K * (k == null ? 1 : k), this.opacity);
  },
  darker: function(k) {
    return new Hcl(this.h, this.c, this.l - K * (k == null ? 1 : k), this.opacity);
  },
  rgb: function() {
    return labConvert(this).rgb();
  }
}));


/***/ }),

/***/ "./node_modules/d3-color/src/math.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deg2rad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return rad2deg; });
var deg2rad = Math.PI / 180;
var rad2deg = 180 / Math.PI;


/***/ }),

/***/ "./node_modules/d3-format/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__ = __webpack_require__("./node_modules/d3-format/src/defaultLocale.js");
/* unused harmony reexport formatDefaultLocale */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_locale__ = __webpack_require__("./node_modules/d3-format/src/locale.js");
/* unused harmony reexport formatLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_formatSpecifier__ = __webpack_require__("./node_modules/d3-format/src/formatSpecifier.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__src_formatSpecifier__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_precisionFixed__ = __webpack_require__("./node_modules/d3-format/src/precisionFixed.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__src_precisionFixed__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_precisionPrefix__ = __webpack_require__("./node_modules/d3-format/src/precisionPrefix.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__src_precisionPrefix__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_precisionRound__ = __webpack_require__("./node_modules/d3-format/src/precisionRound.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__src_precisionRound__["a"]; });








/***/ }),

/***/ "./node_modules/d3-format/src/defaultLocale.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatPrefix; });
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__locale__ = __webpack_require__("./node_modules/d3-format/src/locale.js");


var locale;
var format;
var formatPrefix;

defaultLocale({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});

function defaultLocale(definition) {
  locale = Object(__WEBPACK_IMPORTED_MODULE_0__locale__["a" /* default */])(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}


/***/ }),

/***/ "./node_modules/d3-format/src/exponent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatDecimal__ = __webpack_require__("./node_modules/d3-format/src/formatDecimal.js");


/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x = Object(__WEBPACK_IMPORTED_MODULE_0__formatDecimal__["a" /* default */])(Math.abs(x)), x ? x[1] : NaN;
});


/***/ }),

/***/ "./node_modules/d3-format/src/formatDecimal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimal(1.23) returns ["123", 0].
/* harmony default export */ __webpack_exports__["a"] = (function(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
  var i, coefficient = x.slice(0, i);

  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x.slice(i + 1)
  ];
});


/***/ }),

/***/ "./node_modules/d3-format/src/formatDefault.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x, p) {
  x = x.toPrecision(p);

  out: for (var n = x.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (x[i]) {
      case ".": i0 = i1 = i; break;
      case "0": if (i0 === 0) i0 = i; i1 = i; break;
      case "e": break out;
      default: if (i0 > 0) i0 = 0; break;
    }
  }

  return i0 > 0 ? x.slice(0, i0) + x.slice(i1 + 1) : x;
});


/***/ }),

/***/ "./node_modules/d3-format/src/formatGroup.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(grouping, thousands) {
  return function(value, width) {
    var i = value.length,
        t = [],
        j = 0,
        g = grouping[0],
        length = 0;

    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }

    return t.reverse().join(thousands);
  };
});


/***/ }),

/***/ "./node_modules/d3-format/src/formatNumerals.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
});


/***/ }),

/***/ "./node_modules/d3-format/src/formatPrefixAuto.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return prefixExponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatDecimal__ = __webpack_require__("./node_modules/d3-format/src/formatDecimal.js");


var prefixExponent;

/* harmony default export */ __webpack_exports__["a"] = (function(x, p) {
  var d = Object(__WEBPACK_IMPORTED_MODULE_0__formatDecimal__["a" /* default */])(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1],
      i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
      n = coefficient.length;
  return i === n ? coefficient
      : i > n ? coefficient + new Array(i - n + 1).join("0")
      : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
      : "0." + new Array(1 - i).join("0") + Object(__WEBPACK_IMPORTED_MODULE_0__formatDecimal__["a" /* default */])(x, Math.max(0, p + i - 1))[0]; // less than 1y!
});


/***/ }),

/***/ "./node_modules/d3-format/src/formatRounded.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatDecimal__ = __webpack_require__("./node_modules/d3-format/src/formatDecimal.js");


/* harmony default export */ __webpack_exports__["a"] = (function(x, p) {
  var d = Object(__WEBPACK_IMPORTED_MODULE_0__formatDecimal__["a" /* default */])(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
      : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
      : coefficient + new Array(exponent - coefficient.length + 2).join("0");
});


/***/ }),

/***/ "./node_modules/d3-format/src/formatSpecifier.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = formatSpecifier;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatTypes__ = __webpack_require__("./node_modules/d3-format/src/formatTypes.js");


// [[fill]align][sign][symbol][0][width][,][.precision][type]
var re = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;

function formatSpecifier(specifier) {
  return new FormatSpecifier(specifier);
}

formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

function FormatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);

  var match,
      fill = match[1] || " ",
      align = match[2] || ">",
      sign = match[3] || "-",
      symbol = match[4] || "",
      zero = !!match[5],
      width = match[6] && +match[6],
      comma = !!match[7],
      precision = match[8] && +match[8].slice(1),
      type = match[9] || "";

  // The "n" type is an alias for ",g".
  if (type === "n") comma = true, type = "g";

  // Map invalid types to the default format.
  else if (!__WEBPACK_IMPORTED_MODULE_0__formatTypes__["a" /* default */][type]) type = "";

  // If zero fill is specified, padding goes after sign and before digits.
  if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

  this.fill = fill;
  this.align = align;
  this.sign = sign;
  this.symbol = symbol;
  this.zero = zero;
  this.width = width;
  this.comma = comma;
  this.precision = precision;
  this.type = type;
}

FormatSpecifier.prototype.toString = function() {
  return this.fill
      + this.align
      + this.sign
      + this.symbol
      + (this.zero ? "0" : "")
      + (this.width == null ? "" : Math.max(1, this.width | 0))
      + (this.comma ? "," : "")
      + (this.precision == null ? "" : "." + Math.max(0, this.precision | 0))
      + this.type;
};


/***/ }),

/***/ "./node_modules/d3-format/src/formatTypes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatDefault__ = __webpack_require__("./node_modules/d3-format/src/formatDefault.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formatPrefixAuto__ = __webpack_require__("./node_modules/d3-format/src/formatPrefixAuto.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formatRounded__ = __webpack_require__("./node_modules/d3-format/src/formatRounded.js");




/* harmony default export */ __webpack_exports__["a"] = ({
  "": __WEBPACK_IMPORTED_MODULE_0__formatDefault__["a" /* default */],
  "%": function(x, p) { return (x * 100).toFixed(p); },
  "b": function(x) { return Math.round(x).toString(2); },
  "c": function(x) { return x + ""; },
  "d": function(x) { return Math.round(x).toString(10); },
  "e": function(x, p) { return x.toExponential(p); },
  "f": function(x, p) { return x.toFixed(p); },
  "g": function(x, p) { return x.toPrecision(p); },
  "o": function(x) { return Math.round(x).toString(8); },
  "p": function(x, p) { return Object(__WEBPACK_IMPORTED_MODULE_2__formatRounded__["a" /* default */])(x * 100, p); },
  "r": __WEBPACK_IMPORTED_MODULE_2__formatRounded__["a" /* default */],
  "s": __WEBPACK_IMPORTED_MODULE_1__formatPrefixAuto__["a" /* default */],
  "X": function(x) { return Math.round(x).toString(16).toUpperCase(); },
  "x": function(x) { return Math.round(x).toString(16); }
});


/***/ }),

/***/ "./node_modules/d3-format/src/identity.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x;
});


/***/ }),

/***/ "./node_modules/d3-format/src/locale.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exponent__ = __webpack_require__("./node_modules/d3-format/src/exponent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formatGroup__ = __webpack_require__("./node_modules/d3-format/src/formatGroup.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formatNumerals__ = __webpack_require__("./node_modules/d3-format/src/formatNumerals.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__formatSpecifier__ = __webpack_require__("./node_modules/d3-format/src/formatSpecifier.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__formatTypes__ = __webpack_require__("./node_modules/d3-format/src/formatTypes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__formatPrefixAuto__ = __webpack_require__("./node_modules/d3-format/src/formatPrefixAuto.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__identity__ = __webpack_require__("./node_modules/d3-format/src/identity.js");








var prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

/* harmony default export */ __webpack_exports__["a"] = (function(locale) {
  var group = locale.grouping && locale.thousands ? Object(__WEBPACK_IMPORTED_MODULE_1__formatGroup__["a" /* default */])(locale.grouping, locale.thousands) : __WEBPACK_IMPORTED_MODULE_6__identity__["a" /* default */],
      currency = locale.currency,
      decimal = locale.decimal,
      numerals = locale.numerals ? Object(__WEBPACK_IMPORTED_MODULE_2__formatNumerals__["a" /* default */])(locale.numerals) : __WEBPACK_IMPORTED_MODULE_6__identity__["a" /* default */],
      percent = locale.percent || "%";

  function newFormat(specifier) {
    specifier = Object(__WEBPACK_IMPORTED_MODULE_3__formatSpecifier__["a" /* default */])(specifier);

    var fill = specifier.fill,
        align = specifier.align,
        sign = specifier.sign,
        symbol = specifier.symbol,
        zero = specifier.zero,
        width = specifier.width,
        comma = specifier.comma,
        precision = specifier.precision,
        type = specifier.type;

    // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.
    var prefix = symbol === "$" ? currency[0] : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
        suffix = symbol === "$" ? currency[1] : /[%p]/.test(type) ? percent : "";

    // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?
    var formatType = __WEBPACK_IMPORTED_MODULE_4__formatTypes__["a" /* default */][type],
        maybeSuffix = !type || /[defgprs%]/.test(type);

    // Set the default precision if not specified,
    // or clamp the specified precision to the supported range.
    // For significant precision, it must be in [1, 21].
    // For fixed precision, it must be in [0, 20].
    precision = precision == null ? (type ? 6 : 12)
        : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
        : Math.max(0, Math.min(20, precision));

    function format(value) {
      var valuePrefix = prefix,
          valueSuffix = suffix,
          i, n, c;

      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;

        // Perform the initial formatting.
        var valueNegative = value < 0;
        value = formatType(Math.abs(value), precision);

        // If a negative value rounds to zero during formatting, treat as positive.
        if (valueNegative && +value === 0) valueNegative = false;

        // Compute the prefix and suffix.
        valuePrefix = (valueNegative ? (sign === "(" ? sign : "-") : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + __WEBPACK_IMPORTED_MODULE_5__formatPrefixAuto__["b" /* prefixExponent */] / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

        // Break the formatted value into the integer “value” part that can be
        // grouped, and fractional or exponential “suffix” part that is not.
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }

      // If the fill character is not "0", grouping is applied before padding.
      if (comma && !zero) value = group(value, Infinity);

      // Compute the padding.
      var length = valuePrefix.length + value.length + valueSuffix.length,
          padding = length < width ? new Array(width - length + 1).join(fill) : "";

      // If the fill character is "0", grouping is applied after padding.
      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

      // Reconstruct the final output based on the desired alignment.
      switch (align) {
        case "<": value = valuePrefix + value + valueSuffix + padding; break;
        case "=": value = valuePrefix + padding + value + valueSuffix; break;
        case "^": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;
        default: value = padding + valuePrefix + value + valueSuffix; break;
      }

      return numerals(value);
    }

    format.toString = function() {
      return specifier + "";
    };

    return format;
  }

  function formatPrefix(specifier, value) {
    var f = newFormat((specifier = Object(__WEBPACK_IMPORTED_MODULE_3__formatSpecifier__["a" /* default */])(specifier), specifier.type = "f", specifier)),
        e = Math.max(-8, Math.min(8, Math.floor(Object(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(value) / 3))) * 3,
        k = Math.pow(10, -e),
        prefix = prefixes[8 + e / 3];
    return function(value) {
      return f(k * value) + prefix;
    };
  }

  return {
    format: newFormat,
    formatPrefix: formatPrefix
  };
});


/***/ }),

/***/ "./node_modules/d3-format/src/precisionFixed.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exponent__ = __webpack_require__("./node_modules/d3-format/src/exponent.js");


/* harmony default export */ __webpack_exports__["a"] = (function(step) {
  return Math.max(0, -Object(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(Math.abs(step)));
});


/***/ }),

/***/ "./node_modules/d3-format/src/precisionPrefix.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exponent__ = __webpack_require__("./node_modules/d3-format/src/exponent.js");


/* harmony default export */ __webpack_exports__["a"] = (function(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Object(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(value) / 3))) * 3 - Object(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(Math.abs(step)));
});


/***/ }),

/***/ "./node_modules/d3-format/src/precisionRound.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exponent__ = __webpack_require__("./node_modules/d3-format/src/exponent.js");


/* harmony default export */ __webpack_exports__["a"] = (function(step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, Object(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(max) - Object(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(step)) + 1;
});


/***/ }),

/***/ "./node_modules/d3-interpolate/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_value__ = __webpack_require__("./node_modules/d3-interpolate/src/value.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_value__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_array__ = __webpack_require__("./node_modules/d3-interpolate/src/array.js");
/* unused harmony reexport interpolateArray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_basis__ = __webpack_require__("./node_modules/d3-interpolate/src/basis.js");
/* unused harmony reexport interpolateBasis */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_basisClosed__ = __webpack_require__("./node_modules/d3-interpolate/src/basisClosed.js");
/* unused harmony reexport interpolateBasisClosed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_date__ = __webpack_require__("./node_modules/d3-interpolate/src/date.js");
/* unused harmony reexport interpolateDate */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_number__ = __webpack_require__("./node_modules/d3-interpolate/src/number.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__src_number__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_object__ = __webpack_require__("./node_modules/d3-interpolate/src/object.js");
/* unused harmony reexport interpolateObject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_round__ = __webpack_require__("./node_modules/d3-interpolate/src/round.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_7__src_round__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_string__ = __webpack_require__("./node_modules/d3-interpolate/src/string.js");
/* unused harmony reexport interpolateString */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_transform_index__ = __webpack_require__("./node_modules/d3-interpolate/src/transform/index.js");
/* unused harmony reexport interpolateTransformCss */
/* unused harmony reexport interpolateTransformSvg */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_zoom__ = __webpack_require__("./node_modules/d3-interpolate/src/zoom.js");
/* unused harmony reexport interpolateZoom */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_rgb__ = __webpack_require__("./node_modules/d3-interpolate/src/rgb.js");
/* unused harmony reexport interpolateRgb */
/* unused harmony reexport interpolateRgbBasis */
/* unused harmony reexport interpolateRgbBasisClosed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_hsl__ = __webpack_require__("./node_modules/d3-interpolate/src/hsl.js");
/* unused harmony reexport interpolateHsl */
/* unused harmony reexport interpolateHslLong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_lab__ = __webpack_require__("./node_modules/d3-interpolate/src/lab.js");
/* unused harmony reexport interpolateLab */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_hcl__ = __webpack_require__("./node_modules/d3-interpolate/src/hcl.js");
/* unused harmony reexport interpolateHcl */
/* unused harmony reexport interpolateHclLong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_cubehelix__ = __webpack_require__("./node_modules/d3-interpolate/src/cubehelix.js");
/* unused harmony reexport interpolateCubehelix */
/* unused harmony reexport interpolateCubehelixLong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_piecewise__ = __webpack_require__("./node_modules/d3-interpolate/src/piecewise.js");
/* unused harmony reexport piecewise */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_quantize__ = __webpack_require__("./node_modules/d3-interpolate/src/quantize.js");
/* unused harmony reexport quantize */




















/***/ }),

/***/ "./node_modules/d3-interpolate/src/array.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__value__ = __webpack_require__("./node_modules/d3-interpolate/src/value.js");


/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = Object(__WEBPACK_IMPORTED_MODULE_0__value__["a" /* default */])(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/basis.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = basis;
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
      + (4 - 6 * t2 + 3 * t3) * v1
      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
      + t3 * v3) / 6;
}

/* harmony default export */ __webpack_exports__["b"] = (function(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/basisClosed.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basis__ = __webpack_require__("./node_modules/d3-interpolate/src/basis.js");


/* harmony default export */ __webpack_exports__["a"] = (function(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return Object(__WEBPACK_IMPORTED_MODULE_0__basis__["a" /* basis */])((t - i / n) * n, v0, v1, v2, v3);
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/color.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = hue;
/* harmony export (immutable) */ __webpack_exports__["b"] = gamma;
/* harmony export (immutable) */ __webpack_exports__["a"] = nogamma;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__("./node_modules/d3-interpolate/src/constant.js");


function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(isNaN(a) ? b : a);
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/constant.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/cubehelix.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export cubehelixLong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__("./node_modules/d3-color/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__("./node_modules/d3-interpolate/src/color.js");



function cubehelix(hue) {
  return (function cubehelixGamma(y) {
    y = +y;

    function cubehelix(start, end) {
      var h = hue((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(start)).h, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(end)).h),
          s = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.s, end.s),
          l = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.l, end.l),
          opacity = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
      return function(t) {
        start.h = h(t);
        start.s = s(t);
        start.l = l(Math.pow(t, y));
        start.opacity = opacity(t);
        return start + "";
      };
    }

    cubehelix.gamma = cubehelixGamma;

    return cubehelix;
  })(1);
}

/* unused harmony default export */ var _unused_webpack_default_export = (cubehelix(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* hue */]));
var cubehelixLong = cubehelix(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */]);


/***/ }),

/***/ "./node_modules/d3-interpolate/src/date.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var d = new Date;
  return a = +a, b -= a, function(t) {
    return d.setTime(a + b * t), d;
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/hcl.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hclLong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__("./node_modules/d3-color/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__("./node_modules/d3-interpolate/src/color.js");



function hcl(hue) {
  return function(start, end) {
    var h = hue((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["c" /* hcl */])(start)).h, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["c" /* hcl */])(end)).h),
        c = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.c, end.c),
        l = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.l, end.l),
        opacity = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.c = c(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* unused harmony default export */ var _unused_webpack_default_export = (hcl(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* hue */]));
var hclLong = hcl(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */]);


/***/ }),

/***/ "./node_modules/d3-interpolate/src/hsl.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hslLong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__("./node_modules/d3-color/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__("./node_modules/d3-interpolate/src/color.js");



function hsl(hue) {
  return function(start, end) {
    var h = hue((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["d" /* hsl */])(start)).h, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["d" /* hsl */])(end)).h),
        s = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.s, end.s),
        l = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.l, end.l),
        opacity = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.s = s(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* unused harmony default export */ var _unused_webpack_default_export = (hsl(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* hue */]));
var hslLong = hsl(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */]);


/***/ }),

/***/ "./node_modules/d3-interpolate/src/lab.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__("./node_modules/d3-color/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__("./node_modules/d3-interpolate/src/color.js");



function lab(start, end) {
  var l = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["e" /* lab */])(start)).l, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["e" /* lab */])(end)).l),
      a = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.a, end.a),
      b = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.b, end.b),
      opacity = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
  return function(t) {
    start.l = l(t);
    start.a = a(t);
    start.b = b(t);
    start.opacity = opacity(t);
    return start + "";
  };
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/number.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return a = +a, b -= a, function(t) {
    return a + b * t;
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/object.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__value__ = __webpack_require__("./node_modules/d3-interpolate/src/value.js");


/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = Object(__WEBPACK_IMPORTED_MODULE_0__value__["a" /* default */])(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/piecewise.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
function piecewise(interpolate, values) {
  var i = 0, n = values.length - 1, v = values[0], I = new Array(n < 0 ? 0 : n);
  while (i < n) I[i] = interpolate(v, v = values[++i]);
  return function(t) {
    var i = Math.max(0, Math.min(n - 1, Math.floor(t *= n)));
    return I[i](t - i);
  };
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/quantize.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(interpolator, n) {
  var samples = new Array(n);
  for (var i = 0; i < n; ++i) samples[i] = interpolator(i / (n - 1));
  return samples;
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/rgb.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export rgbBasis */
/* unused harmony export rgbBasisClosed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__("./node_modules/d3-color/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__basis__ = __webpack_require__("./node_modules/d3-interpolate/src/basis.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basisClosed__ = __webpack_require__("./node_modules/d3-interpolate/src/basisClosed.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__color__ = __webpack_require__("./node_modules/d3-interpolate/src/color.js");





/* harmony default export */ __webpack_exports__["a"] = ((function rgbGamma(y) {
  var color = Object(__WEBPACK_IMPORTED_MODULE_3__color__["b" /* gamma */])(y);

  function rgb(start, end) {
    var r = color((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* rgb */])(start)).r, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* rgb */])(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = Object(__WEBPACK_IMPORTED_MODULE_3__color__["a" /* default */])(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
})(1));

function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i, color;
    for (i = 0; i < n; ++i) {
      color = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* rgb */])(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function(t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = rgbSpline(__WEBPACK_IMPORTED_MODULE_1__basis__["b" /* default */]);
var rgbBasisClosed = rgbSpline(__WEBPACK_IMPORTED_MODULE_2__basisClosed__["a" /* default */]);


/***/ }),

/***/ "./node_modules/d3-interpolate/src/round.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return a = +a, b -= a, function(t) {
    return Math.round(a + b * t);
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/string.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__("./node_modules/d3-interpolate/src/number.js");


var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/transform/decompose.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return identity; });
var degrees = 180 / Math.PI;

var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

/* harmony default export */ __webpack_exports__["a"] = (function(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/transform/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export interpolateTransformCss */
/* unused harmony export interpolateTransformSvg */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__("./node_modules/d3-interpolate/src/number.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parse__ = __webpack_require__("./node_modules/d3-interpolate/src/transform/parse.js");



function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({i: i - 4, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(xa, xb)}, {i: i - 2, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(ya, yb)});
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
      q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(a, b)});
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(a, b)});
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({i: i - 4, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(xa, xb)}, {i: i - 2, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(ya, yb)});
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function(a, b) {
    var s = [], // string constants and placeholders
        q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(__WEBPACK_IMPORTED_MODULE_1__parse__["a" /* parseCss */], "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(__WEBPACK_IMPORTED_MODULE_1__parse__["b" /* parseSvg */], ", ", ")", ")");


/***/ }),

/***/ "./node_modules/d3-interpolate/src/transform/parse.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = parseCss;
/* harmony export (immutable) */ __webpack_exports__["b"] = parseSvg;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__decompose__ = __webpack_require__("./node_modules/d3-interpolate/src/transform/decompose.js");


var cssNode,
    cssRoot,
    cssView,
    svgNode;

function parseCss(value) {
  if (value === "none") return __WEBPACK_IMPORTED_MODULE_0__decompose__["b" /* identity */];
  if (!cssNode) cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
  cssNode.style.transform = value;
  value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
  cssRoot.removeChild(cssNode);
  value = value.slice(7, -1).split(",");
  return Object(__WEBPACK_IMPORTED_MODULE_0__decompose__["a" /* default */])(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
}

function parseSvg(value) {
  if (value == null) return __WEBPACK_IMPORTED_MODULE_0__decompose__["b" /* identity */];
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return __WEBPACK_IMPORTED_MODULE_0__decompose__["b" /* identity */];
  value = value.matrix;
  return Object(__WEBPACK_IMPORTED_MODULE_0__decompose__["a" /* default */])(value.a, value.b, value.c, value.d, value.e, value.f);
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/value.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__("./node_modules/d3-color/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rgb__ = __webpack_require__("./node_modules/d3-interpolate/src/rgb.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__array__ = __webpack_require__("./node_modules/d3-interpolate/src/array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__date__ = __webpack_require__("./node_modules/d3-interpolate/src/date.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__number__ = __webpack_require__("./node_modules/d3-interpolate/src/number.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__object__ = __webpack_require__("./node_modules/d3-interpolate/src/object.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__string__ = __webpack_require__("./node_modules/d3-interpolate/src/string.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constant__ = __webpack_require__("./node_modules/d3-interpolate/src/constant.js");









/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? Object(__WEBPACK_IMPORTED_MODULE_7__constant__["a" /* default */])(b)
      : (t === "number" ? __WEBPACK_IMPORTED_MODULE_4__number__["a" /* default */]
      : t === "string" ? ((c = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["a" /* color */])(b)) ? (b = c, __WEBPACK_IMPORTED_MODULE_1__rgb__["a" /* default */]) : __WEBPACK_IMPORTED_MODULE_6__string__["a" /* default */])
      : b instanceof __WEBPACK_IMPORTED_MODULE_0_d3_color__["a" /* color */] ? __WEBPACK_IMPORTED_MODULE_1__rgb__["a" /* default */]
      : b instanceof Date ? __WEBPACK_IMPORTED_MODULE_3__date__["a" /* default */]
      : Array.isArray(b) ? __WEBPACK_IMPORTED_MODULE_2__array__["a" /* default */]
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? __WEBPACK_IMPORTED_MODULE_5__object__["a" /* default */]
      : __WEBPACK_IMPORTED_MODULE_4__number__["a" /* default */])(a, b);
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/zoom.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var rho = Math.SQRT2,
    rho2 = 2,
    rho4 = 4,
    epsilon2 = 1e-12;

function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}

function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}

function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}

// p0 = [ux0, uy0, w0]
// p1 = [ux1, uy1, w1]
/* unused harmony default export */ var _unused_webpack_default_export = (function(p0, p1) {
  var ux0 = p0[0], uy0 = p0[1], w0 = p0[2],
      ux1 = p1[0], uy1 = p1[1], w1 = p1[2],
      dx = ux1 - ux0,
      dy = uy1 - uy0,
      d2 = dx * dx + dy * dy,
      i,
      S;

  // Special case for u0 ≅ u1.
  if (d2 < epsilon2) {
    S = Math.log(w1 / w0) / rho;
    i = function(t) {
      return [
        ux0 + t * dx,
        uy0 + t * dy,
        w0 * Math.exp(rho * t * S)
      ];
    }
  }

  // General case.
  else {
    var d1 = Math.sqrt(d2),
        b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
        b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
        r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
        r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
    S = (r1 - r0) / rho;
    i = function(t) {
      var s = t * S,
          coshr0 = cosh(r0),
          u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
      return [
        ux0 + u * dx,
        uy0 + u * dy,
        w0 * coshr0 / cosh(rho * s + r0)
      ];
    }
  }

  i.duration = S * 1000;

  return i;
});


/***/ }),

/***/ "./node_modules/d3-path/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_path__ = __webpack_require__("./node_modules/d3-path/src/path.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "path", function() { return __WEBPACK_IMPORTED_MODULE_0__src_path__["a"]; });



/***/ }),

/***/ "./node_modules/d3-path/src/path.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var pi = Math.PI,
    tau = 2 * pi,
    epsilon = 1e-6,
    tauEpsilon = tau - epsilon;

function Path() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null; // end of current subpath
  this._ = "";
}

function path() {
  return new Path;
}

Path.prototype = path.prototype = {
  constructor: Path,
  moveTo: function(x, y) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
  },
  closePath: function() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  },
  lineTo: function(x, y) {
    this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  quadraticCurveTo: function(x1, y1, x, y) {
    this._ += "Q" + (+x1) + "," + (+y1) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) {
    this._ += "C" + (+x1) + "," + (+y1) + "," + (+x2) + "," + (+y2) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  arcTo: function(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
    var x0 = this._x1,
        y0 = this._y1,
        x21 = x2 - x1,
        y21 = y2 - y1,
        x01 = x0 - x1,
        y01 = y0 - y1,
        l01_2 = x01 * x01 + y01 * y01;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x1,y1).
    if (this._x1 === null) {
      this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
    else if (!(l01_2 > epsilon)) {}

    // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
    // Equivalently, is (x1,y1) coincident with (x2,y2)?
    // Or, is the radius zero? Line to (x1,y1).
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
      this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Otherwise, draw an arc!
    else {
      var x20 = x2 - x0,
          y20 = y2 - y0,
          l21_2 = x21 * x21 + y21 * y21,
          l20_2 = x20 * x20 + y20 * y20,
          l21 = Math.sqrt(l21_2),
          l01 = Math.sqrt(l01_2),
          l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
          t01 = l / l01,
          t21 = l / l21;

      // If the start tangent is not coincident with (x0,y0), line to.
      if (Math.abs(t01 - 1) > epsilon) {
        this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
      }

      this._ += "A" + r + "," + r + ",0,0," + (+(y01 * x20 > x01 * y20)) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
    }
  },
  arc: function(x, y, r, a0, a1, ccw) {
    x = +x, y = +y, r = +r;
    var dx = r * Math.cos(a0),
        dy = r * Math.sin(a0),
        x0 = x + dx,
        y0 = y + dy,
        cw = 1 ^ ccw,
        da = ccw ? a0 - a1 : a1 - a0;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x0,y0).
    if (this._x1 === null) {
      this._ += "M" + x0 + "," + y0;
    }

    // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
    else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
      this._ += "L" + x0 + "," + y0;
    }

    // Is this arc empty? We’re done.
    if (!r) return;

    // Does the angle go the wrong way? Flip the direction.
    if (da < 0) da = da % tau + tau;

    // Is this a complete circle? Draw two arcs to complete the circle.
    if (da > tauEpsilon) {
      this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
    }

    // Is this arc non-empty? Draw an arc!
    else if (da > epsilon) {
      this._ += "A" + r + "," + r + ",0," + (+(da >= pi)) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
    }
  },
  rect: function(x, y, w, h) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + (+w) + "v" + (+h) + "h" + (-w) + "Z";
  },
  toString: function() {
    return this._;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (path);


/***/ }),

/***/ "./node_modules/d3-random/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_uniform__ = __webpack_require__("./node_modules/d3-random/src/uniform.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "randomUniform", function() { return __WEBPACK_IMPORTED_MODULE_0__src_uniform__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_normal__ = __webpack_require__("./node_modules/d3-random/src/normal.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "randomNormal", function() { return __WEBPACK_IMPORTED_MODULE_1__src_normal__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_logNormal__ = __webpack_require__("./node_modules/d3-random/src/logNormal.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "randomLogNormal", function() { return __WEBPACK_IMPORTED_MODULE_2__src_logNormal__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_bates__ = __webpack_require__("./node_modules/d3-random/src/bates.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "randomBates", function() { return __WEBPACK_IMPORTED_MODULE_3__src_bates__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_irwinHall__ = __webpack_require__("./node_modules/d3-random/src/irwinHall.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "randomIrwinHall", function() { return __WEBPACK_IMPORTED_MODULE_4__src_irwinHall__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_exponential__ = __webpack_require__("./node_modules/d3-random/src/exponential.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "randomExponential", function() { return __WEBPACK_IMPORTED_MODULE_5__src_exponential__["a"]; });








/***/ }),

/***/ "./node_modules/d3-random/src/bates.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultSource__ = __webpack_require__("./node_modules/d3-random/src/defaultSource.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__irwinHall__ = __webpack_require__("./node_modules/d3-random/src/irwinHall.js");



/* harmony default export */ __webpack_exports__["a"] = ((function sourceRandomBates(source) {
  function randomBates(n) {
    var randomIrwinHall = __WEBPACK_IMPORTED_MODULE_1__irwinHall__["a" /* default */].source(source)(n);
    return function() {
      return randomIrwinHall() / n;
    };
  }

  randomBates.source = sourceRandomBates;

  return randomBates;
})(__WEBPACK_IMPORTED_MODULE_0__defaultSource__["a" /* default */]));


/***/ }),

/***/ "./node_modules/d3-random/src/defaultSource.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  return Math.random();
});


/***/ }),

/***/ "./node_modules/d3-random/src/exponential.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultSource__ = __webpack_require__("./node_modules/d3-random/src/defaultSource.js");


/* harmony default export */ __webpack_exports__["a"] = ((function sourceRandomExponential(source) {
  function randomExponential(lambda) {
    return function() {
      return -Math.log(1 - source()) / lambda;
    };
  }

  randomExponential.source = sourceRandomExponential;

  return randomExponential;
})(__WEBPACK_IMPORTED_MODULE_0__defaultSource__["a" /* default */]));


/***/ }),

/***/ "./node_modules/d3-random/src/irwinHall.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultSource__ = __webpack_require__("./node_modules/d3-random/src/defaultSource.js");


/* harmony default export */ __webpack_exports__["a"] = ((function sourceRandomIrwinHall(source) {
  function randomIrwinHall(n) {
    return function() {
      for (var sum = 0, i = 0; i < n; ++i) sum += source();
      return sum;
    };
  }

  randomIrwinHall.source = sourceRandomIrwinHall;

  return randomIrwinHall;
})(__WEBPACK_IMPORTED_MODULE_0__defaultSource__["a" /* default */]));


/***/ }),

/***/ "./node_modules/d3-random/src/logNormal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultSource__ = __webpack_require__("./node_modules/d3-random/src/defaultSource.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__normal__ = __webpack_require__("./node_modules/d3-random/src/normal.js");



/* harmony default export */ __webpack_exports__["a"] = ((function sourceRandomLogNormal(source) {
  function randomLogNormal() {
    var randomNormal = __WEBPACK_IMPORTED_MODULE_1__normal__["a" /* default */].source(source).apply(this, arguments);
    return function() {
      return Math.exp(randomNormal());
    };
  }

  randomLogNormal.source = sourceRandomLogNormal;

  return randomLogNormal;
})(__WEBPACK_IMPORTED_MODULE_0__defaultSource__["a" /* default */]));


/***/ }),

/***/ "./node_modules/d3-random/src/normal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultSource__ = __webpack_require__("./node_modules/d3-random/src/defaultSource.js");


/* harmony default export */ __webpack_exports__["a"] = ((function sourceRandomNormal(source) {
  function randomNormal(mu, sigma) {
    var x, r;
    mu = mu == null ? 0 : +mu;
    sigma = sigma == null ? 1 : +sigma;
    return function() {
      var y;

      // If available, use the second previously-generated uniform random.
      if (x != null) y = x, x = null;

      // Otherwise, generate a new x and y.
      else do {
        x = source() * 2 - 1;
        y = source() * 2 - 1;
        r = x * x + y * y;
      } while (!r || r > 1);

      return mu + sigma * y * Math.sqrt(-2 * Math.log(r) / r);
    };
  }

  randomNormal.source = sourceRandomNormal;

  return randomNormal;
})(__WEBPACK_IMPORTED_MODULE_0__defaultSource__["a" /* default */]));


/***/ }),

/***/ "./node_modules/d3-random/src/uniform.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultSource__ = __webpack_require__("./node_modules/d3-random/src/defaultSource.js");


/* harmony default export */ __webpack_exports__["a"] = ((function sourceRandomUniform(source) {
  function randomUniform(min, max) {
    min = min == null ? 0 : +min;
    max = max == null ? 1 : +max;
    if (arguments.length === 1) max = min, min = 0;
    else max -= min;
    return function() {
      return source() * max + min;
    };
  }

  randomUniform.source = sourceRandomUniform;

  return randomUniform;
})(__WEBPACK_IMPORTED_MODULE_0__defaultSource__["a" /* default */]));


/***/ }),

/***/ "./node_modules/d3-scale/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_band__ = __webpack_require__("./node_modules/d3-scale/src/band.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleBand", function() { return __WEBPACK_IMPORTED_MODULE_0__src_band__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scalePoint", function() { return __WEBPACK_IMPORTED_MODULE_0__src_band__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_identity__ = __webpack_require__("./node_modules/d3-scale/src/identity.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleIdentity", function() { return __WEBPACK_IMPORTED_MODULE_1__src_identity__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_linear__ = __webpack_require__("./node_modules/d3-scale/src/linear.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleLinear", function() { return __WEBPACK_IMPORTED_MODULE_2__src_linear__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_log__ = __webpack_require__("./node_modules/d3-scale/src/log.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleLog", function() { return __WEBPACK_IMPORTED_MODULE_3__src_log__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_ordinal__ = __webpack_require__("./node_modules/d3-scale/src/ordinal.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleOrdinal", function() { return __WEBPACK_IMPORTED_MODULE_4__src_ordinal__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleImplicit", function() { return __WEBPACK_IMPORTED_MODULE_4__src_ordinal__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_pow__ = __webpack_require__("./node_modules/d3-scale/src/pow.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scalePow", function() { return __WEBPACK_IMPORTED_MODULE_5__src_pow__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleSqrt", function() { return __WEBPACK_IMPORTED_MODULE_5__src_pow__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_quantile__ = __webpack_require__("./node_modules/d3-scale/src/quantile.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleQuantile", function() { return __WEBPACK_IMPORTED_MODULE_6__src_quantile__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_quantize__ = __webpack_require__("./node_modules/d3-scale/src/quantize.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleQuantize", function() { return __WEBPACK_IMPORTED_MODULE_7__src_quantize__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_threshold__ = __webpack_require__("./node_modules/d3-scale/src/threshold.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleThreshold", function() { return __WEBPACK_IMPORTED_MODULE_8__src_threshold__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_time__ = __webpack_require__("./node_modules/d3-scale/src/time.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleTime", function() { return __WEBPACK_IMPORTED_MODULE_9__src_time__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_utcTime__ = __webpack_require__("./node_modules/d3-scale/src/utcTime.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleUtc", function() { return __WEBPACK_IMPORTED_MODULE_10__src_utcTime__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_sequential__ = __webpack_require__("./node_modules/d3-scale/src/sequential.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleSequential", function() { return __WEBPACK_IMPORTED_MODULE_11__src_sequential__["a"]; });

























/***/ }),

/***/ "./node_modules/d3-scale/src/array.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return slice; });
var array = Array.prototype;

var map = array.map;
var slice = array.slice;


/***/ }),

/***/ "./node_modules/d3-scale/src/band.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = band;
/* harmony export (immutable) */ __webpack_exports__["b"] = point;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__("./node_modules/d3-array/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ordinal__ = __webpack_require__("./node_modules/d3-scale/src/ordinal.js");



function band() {
  var scale = Object(__WEBPACK_IMPORTED_MODULE_1__ordinal__["a" /* default */])().unknown(undefined),
      domain = scale.domain,
      ordinalRange = scale.range,
      range = [0, 1],
      step,
      bandwidth,
      round = false,
      paddingInner = 0,
      paddingOuter = 0,
      align = 0.5;

  delete scale.unknown;

  function rescale() {
    var n = domain().length,
        reverse = range[1] < range[0],
        start = range[reverse - 0],
        stop = range[1 - reverse];
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round) step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
    var values = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["g" /* range */])(n).map(function(i) { return start + step * i; });
    return ordinalRange(reverse ? values.reverse() : values);
  }

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.range = function(_) {
    return arguments.length ? (range = [+_[0], +_[1]], rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = [+_[0], +_[1]], round = true, rescale();
  };

  scale.bandwidth = function() {
    return bandwidth;
  };

  scale.step = function() {
    return step;
  };

  scale.round = function(_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };

  scale.padding = function(_) {
    return arguments.length ? (paddingInner = paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
  };

  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
  };

  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingOuter;
  };

  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };

  scale.copy = function() {
    return band()
        .domain(domain())
        .range(range)
        .round(round)
        .paddingInner(paddingInner)
        .paddingOuter(paddingOuter)
        .align(align);
  };

  return rescale();
}

function pointish(scale) {
  var copy = scale.copy;

  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;

  scale.copy = function() {
    return pointish(copy());
  };

  return scale;
}

function point() {
  return pointish(band().paddingInner(1));
}


/***/ }),

/***/ "./node_modules/d3-scale/src/constant.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-scale/src/continuous.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = deinterpolateLinear;
/* harmony export (immutable) */ __webpack_exports__["a"] = copy;
/* harmony export (immutable) */ __webpack_exports__["b"] = continuous;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__("./node_modules/d3-array/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__("./node_modules/d3-interpolate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__array__ = __webpack_require__("./node_modules/d3-scale/src/array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constant__ = __webpack_require__("./node_modules/d3-scale/src/constant.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__number__ = __webpack_require__("./node_modules/d3-scale/src/number.js");






var unit = [0, 1];

function deinterpolateLinear(a, b) {
  return (b -= (a = +a))
      ? function(x) { return (x - a) / b; }
      : Object(__WEBPACK_IMPORTED_MODULE_3__constant__["a" /* default */])(b);
}

function deinterpolateClamp(deinterpolate) {
  return function(a, b) {
    var d = deinterpolate(a = +a, b = +b);
    return function(x) { return x <= a ? 0 : x >= b ? 1 : d(x); };
  };
}

function reinterpolateClamp(reinterpolate) {
  return function(a, b) {
    var r = reinterpolate(a = +a, b = +b);
    return function(t) { return t <= 0 ? a : t >= 1 ? b : r(t); };
  };
}

function bimap(domain, range, deinterpolate, reinterpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0) d0 = deinterpolate(d1, d0), r0 = reinterpolate(r1, r0);
  else d0 = deinterpolate(d0, d1), r0 = reinterpolate(r0, r1);
  return function(x) { return r0(d0(x)); };
}

function polymap(domain, range, deinterpolate, reinterpolate) {
  var j = Math.min(domain.length, range.length) - 1,
      d = new Array(j),
      r = new Array(j),
      i = -1;

  // Reverse descending domains.
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }

  while (++i < j) {
    d[i] = deinterpolate(domain[i], domain[i + 1]);
    r[i] = reinterpolate(range[i], range[i + 1]);
  }

  return function(x) {
    var i = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["b" /* bisect */])(domain, x, 1, j) - 1;
    return r[i](d[i](x));
  };
}

function copy(source, target) {
  return target
      .domain(source.domain())
      .range(source.range())
      .interpolate(source.interpolate())
      .clamp(source.clamp());
}

// deinterpolate(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// reinterpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding domain value x in [a,b].
function continuous(deinterpolate, reinterpolate) {
  var domain = unit,
      range = unit,
      interpolate = __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["a" /* interpolate */],
      clamp = false,
      piecewise,
      output,
      input;

  function rescale() {
    piecewise = Math.min(domain.length, range.length) > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return (output || (output = piecewise(domain, range, clamp ? deinterpolateClamp(deinterpolate) : deinterpolate, interpolate)))(+x);
  }

  scale.invert = function(y) {
    return (input || (input = piecewise(range, domain, deinterpolateLinear, clamp ? reinterpolateClamp(reinterpolate) : reinterpolate)))(+y);
  };

  scale.domain = function(_) {
    return arguments.length ? (domain = __WEBPACK_IMPORTED_MODULE_2__array__["a" /* map */].call(_, __WEBPACK_IMPORTED_MODULE_4__number__["a" /* default */]), rescale()) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = __WEBPACK_IMPORTED_MODULE_2__array__["b" /* slice */].call(_), rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = __WEBPACK_IMPORTED_MODULE_2__array__["b" /* slice */].call(_), interpolate = __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["c" /* interpolateRound */], rescale();
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, rescale()) : clamp;
  };

  scale.interpolate = function(_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };

  return rescale();
}


/***/ }),

/***/ "./node_modules/d3-scale/src/identity.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = identity;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__("./node_modules/d3-scale/src/array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__linear__ = __webpack_require__("./node_modules/d3-scale/src/linear.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__number__ = __webpack_require__("./node_modules/d3-scale/src/number.js");




function identity() {
  var domain = [0, 1];

  function scale(x) {
    return +x;
  }

  scale.invert = scale;

  scale.domain = scale.range = function(_) {
    return arguments.length ? (domain = __WEBPACK_IMPORTED_MODULE_0__array__["a" /* map */].call(_, __WEBPACK_IMPORTED_MODULE_2__number__["a" /* default */]), scale) : domain.slice();
  };

  scale.copy = function() {
    return identity().domain(domain);
  };

  return Object(__WEBPACK_IMPORTED_MODULE_1__linear__["b" /* linearish */])(scale);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/linear.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = linearish;
/* harmony export (immutable) */ __webpack_exports__["a"] = linear;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__("./node_modules/d3-array/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__("./node_modules/d3-interpolate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__continuous__ = __webpack_require__("./node_modules/d3-scale/src/continuous.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tickFormat__ = __webpack_require__("./node_modules/d3-scale/src/tickFormat.js");





function linearish(scale) {
  var domain = scale.domain;

  scale.ticks = function(count) {
    var d = domain();
    return Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["j" /* ticks */])(d[0], d[d.length - 1], count == null ? 10 : count);
  };

  scale.tickFormat = function(count, specifier) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__tickFormat__["a" /* default */])(domain(), count, specifier);
  };

  scale.nice = function(count) {
    if (count == null) count = 10;

    var d = domain(),
        i0 = 0,
        i1 = d.length - 1,
        start = d[i0],
        stop = d[i1],
        step;

    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }

    step = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["h" /* tickIncrement */])(start, stop, count);

    if (step > 0) {
      start = Math.floor(start / step) * step;
      stop = Math.ceil(stop / step) * step;
      step = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["h" /* tickIncrement */])(start, stop, count);
    } else if (step < 0) {
      start = Math.ceil(start * step) / step;
      stop = Math.floor(stop * step) / step;
      step = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["h" /* tickIncrement */])(start, stop, count);
    }

    if (step > 0) {
      d[i0] = Math.floor(start / step) * step;
      d[i1] = Math.ceil(stop / step) * step;
      domain(d);
    } else if (step < 0) {
      d[i0] = Math.ceil(start * step) / step;
      d[i1] = Math.floor(stop * step) / step;
      domain(d);
    }

    return scale;
  };

  return scale;
}

function linear() {
  var scale = Object(__WEBPACK_IMPORTED_MODULE_2__continuous__["b" /* default */])(__WEBPACK_IMPORTED_MODULE_2__continuous__["c" /* deinterpolateLinear */], __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["b" /* interpolateNumber */]);

  scale.copy = function() {
    return Object(__WEBPACK_IMPORTED_MODULE_2__continuous__["a" /* copy */])(scale, linear());
  };

  return linearish(scale);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/log.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = log;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__("./node_modules/d3-array/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__("./node_modules/d3-format/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__("./node_modules/d3-scale/src/constant.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nice__ = __webpack_require__("./node_modules/d3-scale/src/nice.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__continuous__ = __webpack_require__("./node_modules/d3-scale/src/continuous.js");






function deinterpolate(a, b) {
  return (b = Math.log(b / a))
      ? function(x) { return Math.log(x / a) / b; }
      : Object(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(b);
}

function reinterpolate(a, b) {
  return a < 0
      ? function(t) { return -Math.pow(-b, t) * Math.pow(-a, 1 - t); }
      : function(t) { return Math.pow(b, t) * Math.pow(a, 1 - t); };
}

function pow10(x) {
  return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
}

function powp(base) {
  return base === 10 ? pow10
      : base === Math.E ? Math.exp
      : function(x) { return Math.pow(base, x); };
}

function logp(base) {
  return base === Math.E ? Math.log
      : base === 10 && Math.log10
      || base === 2 && Math.log2
      || (base = Math.log(base), function(x) { return Math.log(x) / base; });
}

function reflect(f) {
  return function(x) {
    return -f(-x);
  };
}

function log() {
  var scale = Object(__WEBPACK_IMPORTED_MODULE_4__continuous__["b" /* default */])(deinterpolate, reinterpolate).domain([1, 10]),
      domain = scale.domain,
      base = 10,
      logs = logp(10),
      pows = powp(10);

  function rescale() {
    logs = logp(base), pows = powp(base);
    if (domain()[0] < 0) logs = reflect(logs), pows = reflect(pows);
    return scale;
  }

  scale.base = function(_) {
    return arguments.length ? (base = +_, rescale()) : base;
  };

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.ticks = function(count) {
    var d = domain(),
        u = d[0],
        v = d[d.length - 1],
        r;

    if (r = v < u) i = u, u = v, v = i;

    var i = logs(u),
        j = logs(v),
        p,
        k,
        t,
        n = count == null ? 10 : +count,
        z = [];

    if (!(base % 1) && j - i < n) {
      i = Math.round(i) - 1, j = Math.round(j) + 1;
      if (u > 0) for (; i < j; ++i) {
        for (k = 1, p = pows(i); k < base; ++k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      } else for (; i < j; ++i) {
        for (k = base - 1, p = pows(i); k >= 1; --k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      }
    } else {
      z = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["j" /* ticks */])(i, j, Math.min(j - i, n)).map(pows);
    }

    return r ? z.reverse() : z;
  };

  scale.tickFormat = function(count, specifier) {
    if (specifier == null) specifier = base === 10 ? ".0e" : ",";
    if (typeof specifier !== "function") specifier = Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["a" /* format */])(specifier);
    if (count === Infinity) return specifier;
    if (count == null) count = 10;
    var k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?
    return function(d) {
      var i = d / pows(Math.round(logs(d)));
      if (i * base < base - 0.5) i *= base;
      return i <= k ? specifier(d) : "";
    };
  };

  scale.nice = function() {
    return domain(Object(__WEBPACK_IMPORTED_MODULE_3__nice__["a" /* default */])(domain(), {
      floor: function(x) { return pows(Math.floor(logs(x))); },
      ceil: function(x) { return pows(Math.ceil(logs(x))); }
    }));
  };

  scale.copy = function() {
    return Object(__WEBPACK_IMPORTED_MODULE_4__continuous__["a" /* copy */])(scale, log().base(base));
  };

  return scale;
}


/***/ }),

/***/ "./node_modules/d3-scale/src/nice.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(domain, interval) {
  domain = domain.slice();

  var i0 = 0,
      i1 = domain.length - 1,
      x0 = domain[i0],
      x1 = domain[i1],
      t;

  if (x1 < x0) {
    t = i0, i0 = i1, i1 = t;
    t = x0, x0 = x1, x1 = t;
  }

  domain[i0] = interval.floor(x0);
  domain[i1] = interval.ceil(x1);
  return domain;
});


/***/ }),

/***/ "./node_modules/d3-scale/src/number.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return +x;
});


/***/ }),

/***/ "./node_modules/d3-scale/src/ordinal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return implicit; });
/* harmony export (immutable) */ __webpack_exports__["a"] = ordinal;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_collection__ = __webpack_require__("./node_modules/d3-collection/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__("./node_modules/d3-scale/src/array.js");



var implicit = {name: "implicit"};

function ordinal(range) {
  var index = Object(__WEBPACK_IMPORTED_MODULE_0_d3_collection__["a" /* map */])(),
      domain = [],
      unknown = implicit;

  range = range == null ? [] : __WEBPACK_IMPORTED_MODULE_1__array__["b" /* slice */].call(range);

  function scale(d) {
    var key = d + "", i = index.get(key);
    if (!i) {
      if (unknown !== implicit) return unknown;
      index.set(key, i = domain.push(d));
    }
    return range[(i - 1) % range.length];
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [], index = Object(__WEBPACK_IMPORTED_MODULE_0_d3_collection__["a" /* map */])();
    var i = -1, n = _.length, d, key;
    while (++i < n) if (!index.has(key = (d = _[i]) + "")) index.set(key, domain.push(d));
    return scale;
  };

  scale.range = function(_) {
    return arguments.length ? (range = __WEBPACK_IMPORTED_MODULE_1__array__["b" /* slice */].call(_), scale) : range.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return ordinal()
        .domain(domain)
        .range(range)
        .unknown(unknown);
  };

  return scale;
}


/***/ }),

/***/ "./node_modules/d3-scale/src/pow.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pow;
/* harmony export (immutable) */ __webpack_exports__["b"] = sqrt;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__("./node_modules/d3-scale/src/constant.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__linear__ = __webpack_require__("./node_modules/d3-scale/src/linear.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__continuous__ = __webpack_require__("./node_modules/d3-scale/src/continuous.js");




function raise(x, exponent) {
  return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
}

function pow() {
  var exponent = 1,
      scale = Object(__WEBPACK_IMPORTED_MODULE_2__continuous__["b" /* default */])(deinterpolate, reinterpolate),
      domain = scale.domain;

  function deinterpolate(a, b) {
    return (b = raise(b, exponent) - (a = raise(a, exponent)))
        ? function(x) { return (raise(x, exponent) - a) / b; }
        : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(b);
  }

  function reinterpolate(a, b) {
    b = raise(b, exponent) - (a = raise(a, exponent));
    return function(t) { return raise(a + b * t, 1 / exponent); };
  }

  scale.exponent = function(_) {
    return arguments.length ? (exponent = +_, domain(domain())) : exponent;
  };

  scale.copy = function() {
    return Object(__WEBPACK_IMPORTED_MODULE_2__continuous__["a" /* copy */])(scale, pow().exponent(exponent));
  };

  return Object(__WEBPACK_IMPORTED_MODULE_1__linear__["b" /* linearish */])(scale);
}

function sqrt() {
  return pow().exponent(0.5);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/quantile.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = quantile;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__("./node_modules/d3-array/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__("./node_modules/d3-scale/src/array.js");



function quantile() {
  var domain = [],
      range = [],
      thresholds = [];

  function rescale() {
    var i = 0, n = Math.max(1, range.length);
    thresholds = new Array(n - 1);
    while (++i < n) thresholds[i - 1] = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["f" /* quantile */])(domain, i / n);
    return scale;
  }

  function scale(x) {
    if (!isNaN(x = +x)) return range[Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["b" /* bisect */])(thresholds, x)];
  }

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN] : [
      i > 0 ? thresholds[i - 1] : domain[0],
      i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
    ];
  };

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (var i = 0, n = _.length, d; i < n; ++i) if (d = _[i], d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(__WEBPACK_IMPORTED_MODULE_0_d3_array__["a" /* ascending */]);
    return rescale();
  };

  scale.range = function(_) {
    return arguments.length ? (range = __WEBPACK_IMPORTED_MODULE_1__array__["b" /* slice */].call(_), rescale()) : range.slice();
  };

  scale.quantiles = function() {
    return thresholds.slice();
  };

  scale.copy = function() {
    return quantile()
        .domain(domain)
        .range(range);
  };

  return scale;
}


/***/ }),

/***/ "./node_modules/d3-scale/src/quantize.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = quantize;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__("./node_modules/d3-array/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__("./node_modules/d3-scale/src/array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__linear__ = __webpack_require__("./node_modules/d3-scale/src/linear.js");




function quantize() {
  var x0 = 0,
      x1 = 1,
      n = 1,
      domain = [0.5],
      range = [0, 1];

  function scale(x) {
    if (x <= x) return range[Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["b" /* bisect */])(domain, x, 0, n)];
  }

  function rescale() {
    var i = -1;
    domain = new Array(n);
    while (++i < n) domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
    return scale;
  }

  scale.domain = function(_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], rescale()) : [x0, x1];
  };

  scale.range = function(_) {
    return arguments.length ? (n = (range = __WEBPACK_IMPORTED_MODULE_1__array__["b" /* slice */].call(_)).length - 1, rescale()) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN]
        : i < 1 ? [x0, domain[0]]
        : i >= n ? [domain[n - 1], x1]
        : [domain[i - 1], domain[i]];
  };

  scale.copy = function() {
    return quantize()
        .domain([x0, x1])
        .range(range);
  };

  return Object(__WEBPACK_IMPORTED_MODULE_2__linear__["b" /* linearish */])(scale);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/sequential.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = sequential;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__linear__ = __webpack_require__("./node_modules/d3-scale/src/linear.js");


function sequential(interpolator) {
  var x0 = 0,
      x1 = 1,
      clamp = false;

  function scale(x) {
    var t = (x - x0) / (x1 - x0);
    return interpolator(clamp ? Math.max(0, Math.min(1, t)) : t);
  }

  scale.domain = function(_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], scale) : [x0, x1];
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.copy = function() {
    return sequential(interpolator).domain([x0, x1]).clamp(clamp);
  };

  return Object(__WEBPACK_IMPORTED_MODULE_0__linear__["b" /* linearish */])(scale);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/threshold.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = threshold;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__("./node_modules/d3-array/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__("./node_modules/d3-scale/src/array.js");



function threshold() {
  var domain = [0.5],
      range = [0, 1],
      n = 1;

  function scale(x) {
    if (x <= x) return range[Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["b" /* bisect */])(domain, x, 0, n)];
  }

  scale.domain = function(_) {
    return arguments.length ? (domain = __WEBPACK_IMPORTED_MODULE_1__array__["b" /* slice */].call(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = __WEBPACK_IMPORTED_MODULE_1__array__["b" /* slice */].call(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return [domain[i - 1], domain[i]];
  };

  scale.copy = function() {
    return threshold()
        .domain(domain)
        .range(range);
  };

  return scale;
}


/***/ }),

/***/ "./node_modules/d3-scale/src/tickFormat.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__("./node_modules/d3-array/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__("./node_modules/d3-format/index.js");



/* harmony default export */ __webpack_exports__["a"] = (function(domain, count, specifier) {
  var start = domain[0],
      stop = domain[domain.length - 1],
      step = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["i" /* tickStep */])(start, stop, count == null ? 10 : count),
      precision;
  specifier = Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["c" /* formatSpecifier */])(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["e" /* precisionPrefix */])(step, value))) specifier.precision = precision;
      return Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["b" /* formatPrefix */])(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* precisionRound */])(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["d" /* precisionFixed */])(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["a" /* format */])(specifier);
});


/***/ }),

/***/ "./node_modules/d3-scale/src/time.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = calendar;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__("./node_modules/d3-array/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__("./node_modules/d3-interpolate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_time__ = __webpack_require__("./node_modules/d3-time/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_time_format__ = __webpack_require__("./node_modules/d3-time-format/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__array__ = __webpack_require__("./node_modules/d3-scale/src/array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__continuous__ = __webpack_require__("./node_modules/d3-scale/src/continuous.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nice__ = __webpack_require__("./node_modules/d3-scale/src/nice.js");








var durationSecond = 1000,
    durationMinute = durationSecond * 60,
    durationHour = durationMinute * 60,
    durationDay = durationHour * 24,
    durationWeek = durationDay * 7,
    durationMonth = durationDay * 30,
    durationYear = durationDay * 365;

function date(t) {
  return new Date(t);
}

function number(t) {
  return t instanceof Date ? +t : +new Date(+t);
}

function calendar(year, month, week, day, hour, minute, second, millisecond, format) {
  var scale = Object(__WEBPACK_IMPORTED_MODULE_5__continuous__["b" /* default */])(__WEBPACK_IMPORTED_MODULE_5__continuous__["c" /* deinterpolateLinear */], __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["b" /* interpolateNumber */]),
      invert = scale.invert,
      domain = scale.domain;

  var formatMillisecond = format(".%L"),
      formatSecond = format(":%S"),
      formatMinute = format("%I:%M"),
      formatHour = format("%I %p"),
      formatDay = format("%a %d"),
      formatWeek = format("%b %d"),
      formatMonth = format("%B"),
      formatYear = format("%Y");

  var tickIntervals = [
    [second,  1,      durationSecond],
    [second,  5,  5 * durationSecond],
    [second, 15, 15 * durationSecond],
    [second, 30, 30 * durationSecond],
    [minute,  1,      durationMinute],
    [minute,  5,  5 * durationMinute],
    [minute, 15, 15 * durationMinute],
    [minute, 30, 30 * durationMinute],
    [  hour,  1,      durationHour  ],
    [  hour,  3,  3 * durationHour  ],
    [  hour,  6,  6 * durationHour  ],
    [  hour, 12, 12 * durationHour  ],
    [   day,  1,      durationDay   ],
    [   day,  2,  2 * durationDay   ],
    [  week,  1,      durationWeek  ],
    [ month,  1,      durationMonth ],
    [ month,  3,  3 * durationMonth ],
    [  year,  1,      durationYear  ]
  ];

  function tickFormat(date) {
    return (second(date) < date ? formatMillisecond
        : minute(date) < date ? formatSecond
        : hour(date) < date ? formatMinute
        : day(date) < date ? formatHour
        : month(date) < date ? (week(date) < date ? formatDay : formatWeek)
        : year(date) < date ? formatMonth
        : formatYear)(date);
  }

  function tickInterval(interval, start, stop, step) {
    if (interval == null) interval = 10;

    // If a desired tick count is specified, pick a reasonable tick interval
    // based on the extent of the domain and a rough estimate of tick size.
    // Otherwise, assume interval is already a time interval and use it.
    if (typeof interval === "number") {
      var target = Math.abs(stop - start) / interval,
          i = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["c" /* bisector */])(function(i) { return i[2]; }).right(tickIntervals, target);
      if (i === tickIntervals.length) {
        step = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["i" /* tickStep */])(start / durationYear, stop / durationYear, interval);
        interval = year;
      } else if (i) {
        i = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
        step = i[1];
        interval = i[0];
      } else {
        step = Math.max(Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["i" /* tickStep */])(start, stop, interval), 1);
        interval = millisecond;
      }
    }

    return step == null ? interval : interval.every(step);
  }

  scale.invert = function(y) {
    return new Date(invert(y));
  };

  scale.domain = function(_) {
    return arguments.length ? domain(__WEBPACK_IMPORTED_MODULE_4__array__["a" /* map */].call(_, number)) : domain().map(date);
  };

  scale.ticks = function(interval, step) {
    var d = domain(),
        t0 = d[0],
        t1 = d[d.length - 1],
        r = t1 < t0,
        t;
    if (r) t = t0, t0 = t1, t1 = t;
    t = tickInterval(interval, t0, t1, step);
    t = t ? t.range(t0, t1 + 1) : []; // inclusive stop
    return r ? t.reverse() : t;
  };

  scale.tickFormat = function(count, specifier) {
    return specifier == null ? tickFormat : format(specifier);
  };

  scale.nice = function(interval, step) {
    var d = domain();
    return (interval = tickInterval(interval, d[0], d[d.length - 1], step))
        ? domain(Object(__WEBPACK_IMPORTED_MODULE_6__nice__["a" /* default */])(d, interval))
        : scale;
  };

  scale.copy = function() {
    return Object(__WEBPACK_IMPORTED_MODULE_5__continuous__["a" /* copy */])(scale, calendar(year, month, week, day, hour, minute, second, millisecond, format));
  };

  return scale;
}

/* harmony default export */ __webpack_exports__["b"] = (function() {
  return calendar(__WEBPACK_IMPORTED_MODULE_2_d3_time__["k" /* timeYear */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["f" /* timeMonth */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["j" /* timeWeek */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["a" /* timeDay */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["b" /* timeHour */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["d" /* timeMinute */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["g" /* timeSecond */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["c" /* timeMillisecond */], __WEBPACK_IMPORTED_MODULE_3_d3_time_format__["a" /* timeFormat */]).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]);
});


/***/ }),

/***/ "./node_modules/d3-scale/src/utcTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__time__ = __webpack_require__("./node_modules/d3-scale/src/time.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_time_format__ = __webpack_require__("./node_modules/d3-time-format/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_time__ = __webpack_require__("./node_modules/d3-time/index.js");




/* harmony default export */ __webpack_exports__["a"] = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__time__["a" /* calendar */])(__WEBPACK_IMPORTED_MODULE_2_d3_time__["v" /* utcYear */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["q" /* utcMonth */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["u" /* utcWeek */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["l" /* utcDay */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["m" /* utcHour */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["o" /* utcMinute */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["r" /* utcSecond */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["n" /* utcMillisecond */], __WEBPACK_IMPORTED_MODULE_1_d3_time_format__["b" /* utcFormat */]).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]);
});


/***/ }),

/***/ "./node_modules/d3-shape/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_arc__ = __webpack_require__("./node_modules/d3-shape/src/arc.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "arc", function() { return __WEBPACK_IMPORTED_MODULE_0__src_arc__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_area__ = __webpack_require__("./node_modules/d3-shape/src/area.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "area", function() { return __WEBPACK_IMPORTED_MODULE_1__src_area__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_line__ = __webpack_require__("./node_modules/d3-shape/src/line.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "line", function() { return __WEBPACK_IMPORTED_MODULE_2__src_line__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_pie__ = __webpack_require__("./node_modules/d3-shape/src/pie.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pie", function() { return __WEBPACK_IMPORTED_MODULE_3__src_pie__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_areaRadial__ = __webpack_require__("./node_modules/d3-shape/src/areaRadial.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "areaRadial", function() { return __WEBPACK_IMPORTED_MODULE_4__src_areaRadial__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "radialArea", function() { return __WEBPACK_IMPORTED_MODULE_4__src_areaRadial__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_lineRadial__ = __webpack_require__("./node_modules/d3-shape/src/lineRadial.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "lineRadial", function() { return __WEBPACK_IMPORTED_MODULE_5__src_lineRadial__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "radialLine", function() { return __WEBPACK_IMPORTED_MODULE_5__src_lineRadial__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_pointRadial__ = __webpack_require__("./node_modules/d3-shape/src/pointRadial.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pointRadial", function() { return __WEBPACK_IMPORTED_MODULE_6__src_pointRadial__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_link_index__ = __webpack_require__("./node_modules/d3-shape/src/link/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "linkHorizontal", function() { return __WEBPACK_IMPORTED_MODULE_7__src_link_index__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "linkVertical", function() { return __WEBPACK_IMPORTED_MODULE_7__src_link_index__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "linkRadial", function() { return __WEBPACK_IMPORTED_MODULE_7__src_link_index__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_symbol__ = __webpack_require__("./node_modules/d3-shape/src/symbol.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "symbol", function() { return __WEBPACK_IMPORTED_MODULE_8__src_symbol__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "symbols", function() { return __WEBPACK_IMPORTED_MODULE_8__src_symbol__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_symbol_circle__ = __webpack_require__("./node_modules/d3-shape/src/symbol/circle.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "symbolCircle", function() { return __WEBPACK_IMPORTED_MODULE_9__src_symbol_circle__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_symbol_cross__ = __webpack_require__("./node_modules/d3-shape/src/symbol/cross.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "symbolCross", function() { return __WEBPACK_IMPORTED_MODULE_10__src_symbol_cross__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_symbol_diamond__ = __webpack_require__("./node_modules/d3-shape/src/symbol/diamond.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "symbolDiamond", function() { return __WEBPACK_IMPORTED_MODULE_11__src_symbol_diamond__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_symbol_square__ = __webpack_require__("./node_modules/d3-shape/src/symbol/square.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "symbolSquare", function() { return __WEBPACK_IMPORTED_MODULE_12__src_symbol_square__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_symbol_star__ = __webpack_require__("./node_modules/d3-shape/src/symbol/star.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "symbolStar", function() { return __WEBPACK_IMPORTED_MODULE_13__src_symbol_star__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_symbol_triangle__ = __webpack_require__("./node_modules/d3-shape/src/symbol/triangle.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "symbolTriangle", function() { return __WEBPACK_IMPORTED_MODULE_14__src_symbol_triangle__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_symbol_wye__ = __webpack_require__("./node_modules/d3-shape/src/symbol/wye.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "symbolWye", function() { return __WEBPACK_IMPORTED_MODULE_15__src_symbol_wye__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_curve_basisClosed__ = __webpack_require__("./node_modules/d3-shape/src/curve/basisClosed.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveBasisClosed", function() { return __WEBPACK_IMPORTED_MODULE_16__src_curve_basisClosed__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_curve_basisOpen__ = __webpack_require__("./node_modules/d3-shape/src/curve/basisOpen.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveBasisOpen", function() { return __WEBPACK_IMPORTED_MODULE_17__src_curve_basisOpen__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__src_curve_basis__ = __webpack_require__("./node_modules/d3-shape/src/curve/basis.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveBasis", function() { return __WEBPACK_IMPORTED_MODULE_18__src_curve_basis__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__src_curve_bundle__ = __webpack_require__("./node_modules/d3-shape/src/curve/bundle.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveBundle", function() { return __WEBPACK_IMPORTED_MODULE_19__src_curve_bundle__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__src_curve_cardinalClosed__ = __webpack_require__("./node_modules/d3-shape/src/curve/cardinalClosed.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveCardinalClosed", function() { return __WEBPACK_IMPORTED_MODULE_20__src_curve_cardinalClosed__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__src_curve_cardinalOpen__ = __webpack_require__("./node_modules/d3-shape/src/curve/cardinalOpen.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveCardinalOpen", function() { return __WEBPACK_IMPORTED_MODULE_21__src_curve_cardinalOpen__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__src_curve_cardinal__ = __webpack_require__("./node_modules/d3-shape/src/curve/cardinal.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveCardinal", function() { return __WEBPACK_IMPORTED_MODULE_22__src_curve_cardinal__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__src_curve_catmullRomClosed__ = __webpack_require__("./node_modules/d3-shape/src/curve/catmullRomClosed.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveCatmullRomClosed", function() { return __WEBPACK_IMPORTED_MODULE_23__src_curve_catmullRomClosed__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__src_curve_catmullRomOpen__ = __webpack_require__("./node_modules/d3-shape/src/curve/catmullRomOpen.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveCatmullRomOpen", function() { return __WEBPACK_IMPORTED_MODULE_24__src_curve_catmullRomOpen__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__src_curve_catmullRom__ = __webpack_require__("./node_modules/d3-shape/src/curve/catmullRom.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveCatmullRom", function() { return __WEBPACK_IMPORTED_MODULE_25__src_curve_catmullRom__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__src_curve_linearClosed__ = __webpack_require__("./node_modules/d3-shape/src/curve/linearClosed.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveLinearClosed", function() { return __WEBPACK_IMPORTED_MODULE_26__src_curve_linearClosed__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__src_curve_linear__ = __webpack_require__("./node_modules/d3-shape/src/curve/linear.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveLinear", function() { return __WEBPACK_IMPORTED_MODULE_27__src_curve_linear__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__src_curve_monotone__ = __webpack_require__("./node_modules/d3-shape/src/curve/monotone.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveMonotoneX", function() { return __WEBPACK_IMPORTED_MODULE_28__src_curve_monotone__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveMonotoneY", function() { return __WEBPACK_IMPORTED_MODULE_28__src_curve_monotone__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__src_curve_natural__ = __webpack_require__("./node_modules/d3-shape/src/curve/natural.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveNatural", function() { return __WEBPACK_IMPORTED_MODULE_29__src_curve_natural__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__src_curve_step__ = __webpack_require__("./node_modules/d3-shape/src/curve/step.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveStep", function() { return __WEBPACK_IMPORTED_MODULE_30__src_curve_step__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveStepAfter", function() { return __WEBPACK_IMPORTED_MODULE_30__src_curve_step__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveStepBefore", function() { return __WEBPACK_IMPORTED_MODULE_30__src_curve_step__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__src_stack__ = __webpack_require__("./node_modules/d3-shape/src/stack.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stack", function() { return __WEBPACK_IMPORTED_MODULE_31__src_stack__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__src_offset_expand__ = __webpack_require__("./node_modules/d3-shape/src/offset/expand.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stackOffsetExpand", function() { return __WEBPACK_IMPORTED_MODULE_32__src_offset_expand__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__src_offset_diverging__ = __webpack_require__("./node_modules/d3-shape/src/offset/diverging.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stackOffsetDiverging", function() { return __WEBPACK_IMPORTED_MODULE_33__src_offset_diverging__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__src_offset_none__ = __webpack_require__("./node_modules/d3-shape/src/offset/none.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stackOffsetNone", function() { return __WEBPACK_IMPORTED_MODULE_34__src_offset_none__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__src_offset_silhouette__ = __webpack_require__("./node_modules/d3-shape/src/offset/silhouette.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stackOffsetSilhouette", function() { return __WEBPACK_IMPORTED_MODULE_35__src_offset_silhouette__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__src_offset_wiggle__ = __webpack_require__("./node_modules/d3-shape/src/offset/wiggle.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stackOffsetWiggle", function() { return __WEBPACK_IMPORTED_MODULE_36__src_offset_wiggle__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__src_order_ascending__ = __webpack_require__("./node_modules/d3-shape/src/order/ascending.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stackOrderAscending", function() { return __WEBPACK_IMPORTED_MODULE_37__src_order_ascending__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__src_order_descending__ = __webpack_require__("./node_modules/d3-shape/src/order/descending.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stackOrderDescending", function() { return __WEBPACK_IMPORTED_MODULE_38__src_order_descending__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__src_order_insideOut__ = __webpack_require__("./node_modules/d3-shape/src/order/insideOut.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stackOrderInsideOut", function() { return __WEBPACK_IMPORTED_MODULE_39__src_order_insideOut__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__src_order_none__ = __webpack_require__("./node_modules/d3-shape/src/order/none.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stackOrderNone", function() { return __WEBPACK_IMPORTED_MODULE_40__src_order_none__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__src_order_reverse__ = __webpack_require__("./node_modules/d3-shape/src/order/reverse.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stackOrderReverse", function() { return __WEBPACK_IMPORTED_MODULE_41__src_order_reverse__["a"]; });




 // Note: radialArea is deprecated!
 // Note: radialLine is deprecated!









































/***/ }),

/***/ "./node_modules/d3-shape/src/arc.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_path__ = __webpack_require__("./node_modules/d3-path/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__("./node_modules/d3-shape/src/constant.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__("./node_modules/d3-shape/src/math.js");




function arcInnerRadius(d) {
  return d.innerRadius;
}

function arcOuterRadius(d) {
  return d.outerRadius;
}

function arcStartAngle(d) {
  return d.startAngle;
}

function arcEndAngle(d) {
  return d.endAngle;
}

function arcPadAngle(d) {
  return d && d.padAngle; // Note: optional!
}

function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
  var x10 = x1 - x0, y10 = y1 - y0,
      x32 = x3 - x2, y32 = y3 - y2,
      t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / (y32 * x10 - x32 * y10);
  return [x0 + t * x10, y0 + t * y10];
}

// Compute perpendicular offset line of length rc.
// http://mathworld.wolfram.com/Circle-LineIntersection.html
function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
  var x01 = x0 - x1,
      y01 = y0 - y1,
      lo = (cw ? rc : -rc) / Object(__WEBPACK_IMPORTED_MODULE_2__math__["l" /* sqrt */])(x01 * x01 + y01 * y01),
      ox = lo * y01,
      oy = -lo * x01,
      x11 = x0 + ox,
      y11 = y0 + oy,
      x10 = x1 + ox,
      y10 = y1 + oy,
      x00 = (x11 + x10) / 2,
      y00 = (y11 + y10) / 2,
      dx = x10 - x11,
      dy = y10 - y11,
      d2 = dx * dx + dy * dy,
      r = r1 - rc,
      D = x11 * y10 - x10 * y11,
      d = (dy < 0 ? -1 : 1) * Object(__WEBPACK_IMPORTED_MODULE_2__math__["l" /* sqrt */])(Object(__WEBPACK_IMPORTED_MODULE_2__math__["h" /* max */])(0, r * r * d2 - D * D)),
      cx0 = (D * dy - dx * d) / d2,
      cy0 = (-D * dx - dy * d) / d2,
      cx1 = (D * dy + dx * d) / d2,
      cy1 = (-D * dx + dy * d) / d2,
      dx0 = cx0 - x00,
      dy0 = cy0 - y00,
      dx1 = cx1 - x00,
      dy1 = cy1 - y00;

  // Pick the closer of the two intersection points.
  // TODO Is there a faster way to determine which intersection to use?
  if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;

  return {
    cx: cx0,
    cy: cy0,
    x01: -ox,
    y01: -oy,
    x11: cx0 * (r1 / r - 1),
    y11: cy0 * (r1 / r - 1)
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var innerRadius = arcInnerRadius,
      outerRadius = arcOuterRadius,
      cornerRadius = Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(0),
      padRadius = null,
      startAngle = arcStartAngle,
      endAngle = arcEndAngle,
      padAngle = arcPadAngle,
      context = null;

  function arc() {
    var buffer,
        r,
        r0 = +innerRadius.apply(this, arguments),
        r1 = +outerRadius.apply(this, arguments),
        a0 = startAngle.apply(this, arguments) - __WEBPACK_IMPORTED_MODULE_2__math__["g" /* halfPi */],
        a1 = endAngle.apply(this, arguments) - __WEBPACK_IMPORTED_MODULE_2__math__["g" /* halfPi */],
        da = Object(__WEBPACK_IMPORTED_MODULE_2__math__["a" /* abs */])(a1 - a0),
        cw = a1 > a0;

    if (!context) context = buffer = Object(__WEBPACK_IMPORTED_MODULE_0_d3_path__["path"])();

    // Ensure that the outer radius is always larger than the inner radius.
    if (r1 < r0) r = r1, r1 = r0, r0 = r;

    // Is it a point?
    if (!(r1 > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */])) context.moveTo(0, 0);

    // Or is it a circle or annulus?
    else if (da > __WEBPACK_IMPORTED_MODULE_2__math__["m" /* tau */] - __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */]) {
      context.moveTo(r1 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["e" /* cos */])(a0), r1 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["k" /* sin */])(a0));
      context.arc(0, 0, r1, a0, a1, !cw);
      if (r0 > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */]) {
        context.moveTo(r0 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["e" /* cos */])(a1), r0 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["k" /* sin */])(a1));
        context.arc(0, 0, r0, a1, a0, cw);
      }
    }

    // Or is it a circular or annular sector?
    else {
      var a01 = a0,
          a11 = a1,
          a00 = a0,
          a10 = a1,
          da0 = da,
          da1 = da,
          ap = padAngle.apply(this, arguments) / 2,
          rp = (ap > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */]) && (padRadius ? +padRadius.apply(this, arguments) : Object(__WEBPACK_IMPORTED_MODULE_2__math__["l" /* sqrt */])(r0 * r0 + r1 * r1)),
          rc = Object(__WEBPACK_IMPORTED_MODULE_2__math__["i" /* min */])(Object(__WEBPACK_IMPORTED_MODULE_2__math__["a" /* abs */])(r1 - r0) / 2, +cornerRadius.apply(this, arguments)),
          rc0 = rc,
          rc1 = rc,
          t0,
          t1;

      // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.
      if (rp > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */]) {
        var p0 = Object(__WEBPACK_IMPORTED_MODULE_2__math__["c" /* asin */])(rp / r0 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["k" /* sin */])(ap)),
            p1 = Object(__WEBPACK_IMPORTED_MODULE_2__math__["c" /* asin */])(rp / r1 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["k" /* sin */])(ap));
        if ((da0 -= p0 * 2) > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */]) p0 *= (cw ? 1 : -1), a00 += p0, a10 -= p0;
        else da0 = 0, a00 = a10 = (a0 + a1) / 2;
        if ((da1 -= p1 * 2) > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */]) p1 *= (cw ? 1 : -1), a01 += p1, a11 -= p1;
        else da1 = 0, a01 = a11 = (a0 + a1) / 2;
      }

      var x01 = r1 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["e" /* cos */])(a01),
          y01 = r1 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["k" /* sin */])(a01),
          x10 = r0 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["e" /* cos */])(a10),
          y10 = r0 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["k" /* sin */])(a10);

      // Apply rounded corners?
      if (rc > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */]) {
        var x11 = r1 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["e" /* cos */])(a11),
            y11 = r1 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["k" /* sin */])(a11),
            x00 = r0 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["e" /* cos */])(a00),
            y00 = r0 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["k" /* sin */])(a00);

        // Restrict the corner radius according to the sector angle.
        if (da < __WEBPACK_IMPORTED_MODULE_2__math__["j" /* pi */]) {
          var oc = da0 > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */] ? intersect(x01, y01, x00, y00, x11, y11, x10, y10) : [x10, y10],
              ax = x01 - oc[0],
              ay = y01 - oc[1],
              bx = x11 - oc[0],
              by = y11 - oc[1],
              kc = 1 / Object(__WEBPACK_IMPORTED_MODULE_2__math__["k" /* sin */])(Object(__WEBPACK_IMPORTED_MODULE_2__math__["b" /* acos */])((ax * bx + ay * by) / (Object(__WEBPACK_IMPORTED_MODULE_2__math__["l" /* sqrt */])(ax * ax + ay * ay) * Object(__WEBPACK_IMPORTED_MODULE_2__math__["l" /* sqrt */])(bx * bx + by * by))) / 2),
              lc = Object(__WEBPACK_IMPORTED_MODULE_2__math__["l" /* sqrt */])(oc[0] * oc[0] + oc[1] * oc[1]);
          rc0 = Object(__WEBPACK_IMPORTED_MODULE_2__math__["i" /* min */])(rc, (r0 - lc) / (kc - 1));
          rc1 = Object(__WEBPACK_IMPORTED_MODULE_2__math__["i" /* min */])(rc, (r1 - lc) / (kc + 1));
        }
      }

      // Is the sector collapsed to a line?
      if (!(da1 > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */])) context.moveTo(x01, y01);

      // Does the sector’s outer ring have rounded corners?
      else if (rc1 > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */]) {
        t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
        t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);

        context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t0.y01, t0.x01), Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc1, Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t0.y01, t0.x01), Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r1, Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t0.cy + t0.y11, t0.cx + t0.x11), Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
          context.arc(t1.cx, t1.cy, rc1, Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t1.y11, t1.x11), Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t1.y01, t1.x01), !cw);
        }
      }

      // Or is the outer ring just a circular arc?
      else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);

      // Is there no inner ring, and it’s a circular sector?
      // Or perhaps it’s an annular sector collapsed due to padding?
      if (!(r0 > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */]) || !(da0 > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */])) context.lineTo(x10, y10);

      // Does the sector’s inner ring (or point) have rounded corners?
      else if (rc0 > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */]) {
        t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
        t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);

        context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t0.y01, t0.x01), Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc0, Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t0.y01, t0.x01), Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r0, Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t0.cy + t0.y11, t0.cx + t0.x11), Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t1.cy + t1.y11, t1.cx + t1.x11), cw);
          context.arc(t1.cx, t1.cy, rc0, Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t1.y11, t1.x11), Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t1.y01, t1.x01), !cw);
        }
      }

      // Or is the inner ring just a circular arc?
      else context.arc(0, 0, r0, a10, a00, cw);
    }

    context.closePath();

    if (buffer) return context = null, buffer + "" || null;
  }

  arc.centroid = function() {
    var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2,
        a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - __WEBPACK_IMPORTED_MODULE_2__math__["j" /* pi */] / 2;
    return [Object(__WEBPACK_IMPORTED_MODULE_2__math__["e" /* cos */])(a) * r, Object(__WEBPACK_IMPORTED_MODULE_2__math__["k" /* sin */])(a) * r];
  };

  arc.innerRadius = function(_) {
    return arguments.length ? (innerRadius = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), arc) : innerRadius;
  };

  arc.outerRadius = function(_) {
    return arguments.length ? (outerRadius = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), arc) : outerRadius;
  };

  arc.cornerRadius = function(_) {
    return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), arc) : cornerRadius;
  };

  arc.padRadius = function(_) {
    return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), arc) : padRadius;
  };

  arc.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), arc) : startAngle;
  };

  arc.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), arc) : endAngle;
  };

  arc.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), arc) : padAngle;
  };

  arc.context = function(_) {
    return arguments.length ? ((context = _ == null ? null : _), arc) : context;
  };

  return arc;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/area.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_path__ = __webpack_require__("./node_modules/d3-path/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__("./node_modules/d3-shape/src/constant.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__curve_linear__ = __webpack_require__("./node_modules/d3-shape/src/curve/linear.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__line__ = __webpack_require__("./node_modules/d3-shape/src/line.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__point__ = __webpack_require__("./node_modules/d3-shape/src/point.js");






/* harmony default export */ __webpack_exports__["a"] = (function() {
  var x0 = __WEBPACK_IMPORTED_MODULE_4__point__["a" /* x */],
      x1 = null,
      y0 = Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(0),
      y1 = __WEBPACK_IMPORTED_MODULE_4__point__["b" /* y */],
      defined = Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(true),
      context = null,
      curve = __WEBPACK_IMPORTED_MODULE_2__curve_linear__["a" /* default */],
      output = null;

  function area(data) {
    var i,
        j,
        k,
        n = data.length,
        d,
        defined0 = false,
        buffer,
        x0z = new Array(n),
        y0z = new Array(n);

    if (context == null) output = curve(buffer = Object(__WEBPACK_IMPORTED_MODULE_0_d3_path__["path"])());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) {
          j = i;
          output.areaStart();
          output.lineStart();
        } else {
          output.lineEnd();
          output.lineStart();
          for (k = i - 1; k >= j; --k) {
            output.point(x0z[k], y0z[k]);
          }
          output.lineEnd();
          output.areaEnd();
        }
      }
      if (defined0) {
        x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
        output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
      }
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  function arealine() {
    return Object(__WEBPACK_IMPORTED_MODULE_3__line__["a" /* default */])().defined(defined).curve(curve).context(context);
  }

  area.x = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), x1 = null, area) : x0;
  };

  area.x0 = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), area) : x0;
  };

  area.x1 = function(_) {
    return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), area) : x1;
  };

  area.y = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), y1 = null, area) : y0;
  };

  area.y0 = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), area) : y0;
  };

  area.y1 = function(_) {
    return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), area) : y1;
  };

  area.lineX0 =
  area.lineY0 = function() {
    return arealine().x(x0).y(y0);
  };

  area.lineY1 = function() {
    return arealine().x(x0).y(y1);
  };

  area.lineX1 = function() {
    return arealine().x(x1).y(y0);
  };

  area.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(!!_), area) : defined;
  };

  area.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
  };

  area.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
  };

  return area;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/areaRadial.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curve_radial__ = __webpack_require__("./node_modules/d3-shape/src/curve/radial.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__area__ = __webpack_require__("./node_modules/d3-shape/src/area.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lineRadial__ = __webpack_require__("./node_modules/d3-shape/src/lineRadial.js");




/* harmony default export */ __webpack_exports__["a"] = (function() {
  var a = Object(__WEBPACK_IMPORTED_MODULE_1__area__["a" /* default */])().curve(__WEBPACK_IMPORTED_MODULE_0__curve_radial__["a" /* curveRadialLinear */]),
      c = a.curve,
      x0 = a.lineX0,
      x1 = a.lineX1,
      y0 = a.lineY0,
      y1 = a.lineY1;

  a.angle = a.x, delete a.x;
  a.startAngle = a.x0, delete a.x0;
  a.endAngle = a.x1, delete a.x1;
  a.radius = a.y, delete a.y;
  a.innerRadius = a.y0, delete a.y0;
  a.outerRadius = a.y1, delete a.y1;
  a.lineStartAngle = function() { return Object(__WEBPACK_IMPORTED_MODULE_2__lineRadial__["b" /* lineRadial */])(x0()); }, delete a.lineX0;
  a.lineEndAngle = function() { return Object(__WEBPACK_IMPORTED_MODULE_2__lineRadial__["b" /* lineRadial */])(x1()); }, delete a.lineX1;
  a.lineInnerRadius = function() { return Object(__WEBPACK_IMPORTED_MODULE_2__lineRadial__["b" /* lineRadial */])(y0()); }, delete a.lineY0;
  a.lineOuterRadius = function() { return Object(__WEBPACK_IMPORTED_MODULE_2__lineRadial__["b" /* lineRadial */])(y1()); }, delete a.lineY1;

  a.curve = function(_) {
    return arguments.length ? c(Object(__WEBPACK_IMPORTED_MODULE_0__curve_radial__["b" /* default */])(_)) : c()._curve;
  };

  return a;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/array.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slice; });
var slice = Array.prototype.slice;


/***/ }),

/***/ "./node_modules/d3-shape/src/constant.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function constant() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/basis.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = point;
/* harmony export (immutable) */ __webpack_exports__["a"] = Basis;
function point(that, x, y) {
  that._context.bezierCurveTo(
    (2 * that._x0 + that._x1) / 3,
    (2 * that._y0 + that._y1) / 3,
    (that._x0 + 2 * that._x1) / 3,
    (that._y0 + 2 * that._y1) / 3,
    (that._x0 + 4 * that._x1 + x) / 6,
    (that._y0 + 4 * that._y1 + y) / 6
  );
}

function Basis(context) {
  this._context = context;
}

Basis.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3: point(this, this._x1, this._y1); // proceed
      case 2: this._context.lineTo(this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6); // proceed
      default: point(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ __webpack_exports__["b"] = (function(context) {
  return new Basis(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/basisClosed.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noop__ = __webpack_require__("./node_modules/d3-shape/src/noop.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__basis__ = __webpack_require__("./node_modules/d3-shape/src/curve/basis.js");



function BasisClosed(context) {
  this._context = context;
}

BasisClosed.prototype = {
  areaStart: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  areaEnd: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
        this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2);
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._x2 = x, this._y2 = y; break;
      case 1: this._point = 2; this._x3 = x, this._y3 = y; break;
      case 2: this._point = 3; this._x4 = x, this._y4 = y; this._context.moveTo((this._x0 + 4 * this._x1 + x) / 6, (this._y0 + 4 * this._y1 + y) / 6); break;
      default: Object(__WEBPACK_IMPORTED_MODULE_1__basis__["c" /* point */])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (function(context) {
  return new BasisClosed(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/basisOpen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basis__ = __webpack_require__("./node_modules/d3-shape/src/curve/basis.js");


function BasisOpen(context) {
  this._context = context;
}

BasisOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; var x0 = (this._x0 + 4 * this._x1 + x) / 6, y0 = (this._y0 + 4 * this._y1 + y) / 6; this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0); break;
      case 3: this._point = 4; // proceed
      default: Object(__WEBPACK_IMPORTED_MODULE_0__basis__["c" /* point */])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (function(context) {
  return new BasisOpen(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/bundle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basis__ = __webpack_require__("./node_modules/d3-shape/src/curve/basis.js");


function Bundle(context, beta) {
  this._basis = new __WEBPACK_IMPORTED_MODULE_0__basis__["a" /* Basis */](context);
  this._beta = beta;
}

Bundle.prototype = {
  lineStart: function() {
    this._x = [];
    this._y = [];
    this._basis.lineStart();
  },
  lineEnd: function() {
    var x = this._x,
        y = this._y,
        j = x.length - 1;

    if (j > 0) {
      var x0 = x[0],
          y0 = y[0],
          dx = x[j] - x0,
          dy = y[j] - y0,
          i = -1,
          t;

      while (++i <= j) {
        t = i / j;
        this._basis.point(
          this._beta * x[i] + (1 - this._beta) * (x0 + t * dx),
          this._beta * y[i] + (1 - this._beta) * (y0 + t * dy)
        );
      }
    }

    this._x = this._y = null;
    this._basis.lineEnd();
  },
  point: function(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

/* harmony default export */ __webpack_exports__["a"] = ((function custom(beta) {

  function bundle(context) {
    return beta === 1 ? new __WEBPACK_IMPORTED_MODULE_0__basis__["a" /* Basis */](context) : new Bundle(context, beta);
  }

  bundle.beta = function(beta) {
    return custom(+beta);
  };

  return bundle;
})(0.85));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/cardinal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = point;
/* harmony export (immutable) */ __webpack_exports__["a"] = Cardinal;
function point(that, x, y) {
  that._context.bezierCurveTo(
    that._x1 + that._k * (that._x2 - that._x0),
    that._y1 + that._k * (that._y2 - that._y0),
    that._x2 + that._k * (that._x1 - x),
    that._y2 + that._k * (that._y1 - y),
    that._x2,
    that._y2
  );
}

function Cardinal(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

Cardinal.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: point(this, this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; this._x1 = x, this._y1 = y; break;
      case 2: this._point = 3; // proceed
      default: point(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["b"] = ((function custom(tension) {

  function cardinal(context) {
    return new Cardinal(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/cardinalClosed.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = CardinalClosed;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noop__ = __webpack_require__("./node_modules/d3-shape/src/noop.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cardinal__ = __webpack_require__("./node_modules/d3-shape/src/curve/cardinal.js");



function CardinalClosed(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalClosed.prototype = {
  areaStart: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  areaEnd: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
      case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
      case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
      default: Object(__WEBPACK_IMPORTED_MODULE_1__cardinal__["c" /* point */])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["b"] = ((function custom(tension) {

  function cardinal(context) {
    return new CardinalClosed(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/cardinalOpen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = CardinalOpen;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cardinal__ = __webpack_require__("./node_modules/d3-shape/src/curve/cardinal.js");


function CardinalOpen(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
      case 3: this._point = 4; // proceed
      default: Object(__WEBPACK_IMPORTED_MODULE_0__cardinal__["c" /* point */])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["b"] = ((function custom(tension) {

  function cardinal(context) {
    return new CardinalOpen(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/catmullRom.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = point;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-shape/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cardinal__ = __webpack_require__("./node_modules/d3-shape/src/curve/cardinal.js");



function point(that, x, y) {
  var x1 = that._x1,
      y1 = that._y1,
      x2 = that._x2,
      y2 = that._y2;

  if (that._l01_a > __WEBPACK_IMPORTED_MODULE_0__math__["f" /* epsilon */]) {
    var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a,
        n = 3 * that._l01_a * (that._l01_a + that._l12_a);
    x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
    y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
  }

  if (that._l23_a > __WEBPACK_IMPORTED_MODULE_0__math__["f" /* epsilon */]) {
    var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a,
        m = 3 * that._l23_a * (that._l23_a + that._l12_a);
    x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
    y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
  }

  that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
}

function CatmullRom(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRom.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: this.point(this._x2, this._y2); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; // proceed
      default: point(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["a"] = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRom(context, alpha) : new __WEBPACK_IMPORTED_MODULE_1__cardinal__["a" /* Cardinal */](context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/catmullRomClosed.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cardinalClosed__ = __webpack_require__("./node_modules/d3-shape/src/curve/cardinalClosed.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__noop__ = __webpack_require__("./node_modules/d3-shape/src/noop.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__catmullRom__ = __webpack_require__("./node_modules/d3-shape/src/curve/catmullRom.js");




function CatmullRomClosed(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRomClosed.prototype = {
  areaStart: __WEBPACK_IMPORTED_MODULE_1__noop__["a" /* default */],
  areaEnd: __WEBPACK_IMPORTED_MODULE_1__noop__["a" /* default */],
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
      case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
      case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
      default: Object(__WEBPACK_IMPORTED_MODULE_2__catmullRom__["b" /* point */])(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["a"] = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRomClosed(context, alpha) : new __WEBPACK_IMPORTED_MODULE_0__cardinalClosed__["a" /* CardinalClosed */](context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/catmullRomOpen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cardinalOpen__ = __webpack_require__("./node_modules/d3-shape/src/curve/cardinalOpen.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__catmullRom__ = __webpack_require__("./node_modules/d3-shape/src/curve/catmullRom.js");



function CatmullRomOpen(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRomOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
      case 3: this._point = 4; // proceed
      default: Object(__WEBPACK_IMPORTED_MODULE_1__catmullRom__["b" /* point */])(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["a"] = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRomOpen(context, alpha) : new __WEBPACK_IMPORTED_MODULE_0__cardinalOpen__["a" /* CardinalOpen */](context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/linear.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function Linear(context) {
  this._context = context;
}

Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // proceed
      default: this._context.lineTo(x, y); break;
    }
  }
};

/* harmony default export */ __webpack_exports__["a"] = (function(context) {
  return new Linear(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/linearClosed.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noop__ = __webpack_require__("./node_modules/d3-shape/src/noop.js");


function LinearClosed(context) {
  this._context = context;
}

LinearClosed.prototype = {
  areaStart: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  areaEnd: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._point) this._context.closePath();
  },
  point: function(x, y) {
    x = +x, y = +y;
    if (this._point) this._context.lineTo(x, y);
    else this._point = 1, this._context.moveTo(x, y);
  }
};

/* harmony default export */ __webpack_exports__["a"] = (function(context) {
  return new LinearClosed(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/monotone.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = monotoneX;
/* harmony export (immutable) */ __webpack_exports__["b"] = monotoneY;
function sign(x) {
  return x < 0 ? -1 : 1;
}

// Calculate the slopes of the tangents (Hermite-type interpolation) based on
// the following paper: Steffen, M. 1990. A Simple Method for Monotonic
// Interpolation in One Dimension. Astronomy and Astrophysics, Vol. 239, NO.
// NOV(II), P. 443, 1990.
function slope3(that, x2, y2) {
  var h0 = that._x1 - that._x0,
      h1 = x2 - that._x1,
      s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0),
      s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0),
      p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}

// Calculate a one-sided slope.
function slope2(that, t) {
  var h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}

// According to https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Representations
// "you can express cubic Hermite interpolation in terms of cubic Bézier curves
// with respect to the four values p0, p0 + m0 / 3, p1 - m1 / 3, p1".
function point(that, t0, t1) {
  var x0 = that._x0,
      y0 = that._y0,
      x1 = that._x1,
      y1 = that._y1,
      dx = (x1 - x0) / 3;
  that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
}

function MonotoneX(context) {
  this._context = context;
}

MonotoneX.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 =
    this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x1, this._y1); break;
      case 3: point(this, this._t0, slope2(this, this._t0)); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    var t1 = NaN;

    x = +x, y = +y;
    if (x === this._x1 && y === this._y1) return; // Ignore coincident points.
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; point(this, slope2(this, t1 = slope3(this, x, y)), t1); break;
      default: point(this, this._t0, t1 = slope3(this, x, y)); break;
    }

    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
    this._t0 = t1;
  }
}

function MonotoneY(context) {
  this._context = new ReflectContext(context);
}

(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x, y) {
  MonotoneX.prototype.point.call(this, y, x);
};

function ReflectContext(context) {
  this._context = context;
}

ReflectContext.prototype = {
  moveTo: function(x, y) { this._context.moveTo(y, x); },
  closePath: function() { this._context.closePath(); },
  lineTo: function(x, y) { this._context.lineTo(y, x); },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) { this._context.bezierCurveTo(y1, x1, y2, x2, y, x); }
};

function monotoneX(context) {
  return new MonotoneX(context);
}

function monotoneY(context) {
  return new MonotoneY(context);
}


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/natural.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function Natural(context) {
  this._context = context;
}

Natural.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [];
    this._y = [];
  },
  lineEnd: function() {
    var x = this._x,
        y = this._y,
        n = x.length;

    if (n) {
      this._line ? this._context.lineTo(x[0], y[0]) : this._context.moveTo(x[0], y[0]);
      if (n === 2) {
        this._context.lineTo(x[1], y[1]);
      } else {
        var px = controlPoints(x),
            py = controlPoints(y);
        for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
          this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x[i1], y[i1]);
        }
      }
    }

    if (this._line || (this._line !== 0 && n === 1)) this._context.closePath();
    this._line = 1 - this._line;
    this._x = this._y = null;
  },
  point: function(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

// See https://www.particleincell.com/2012/bezier-splines/ for derivation.
function controlPoints(x) {
  var i,
      n = x.length - 1,
      m,
      a = new Array(n),
      b = new Array(n),
      r = new Array(n);
  a[0] = 0, b[0] = 2, r[0] = x[0] + 2 * x[1];
  for (i = 1; i < n - 1; ++i) a[i] = 1, b[i] = 4, r[i] = 4 * x[i] + 2 * x[i + 1];
  a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x[n - 1] + x[n];
  for (i = 1; i < n; ++i) m = a[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
  a[n - 1] = r[n - 1] / b[n - 1];
  for (i = n - 2; i >= 0; --i) a[i] = (r[i] - a[i + 1]) / b[i];
  b[n - 1] = (x[n] + a[n - 1]) / 2;
  for (i = 0; i < n - 1; ++i) b[i] = 2 * x[i + 1] - a[i + 1];
  return [a, b];
}

/* harmony default export */ __webpack_exports__["a"] = (function(context) {
  return new Natural(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/radial.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return curveRadialLinear; });
/* harmony export (immutable) */ __webpack_exports__["b"] = curveRadial;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__linear__ = __webpack_require__("./node_modules/d3-shape/src/curve/linear.js");


var curveRadialLinear = curveRadial(__WEBPACK_IMPORTED_MODULE_0__linear__["a" /* default */]);

function Radial(curve) {
  this._curve = curve;
}

Radial.prototype = {
  areaStart: function() {
    this._curve.areaStart();
  },
  areaEnd: function() {
    this._curve.areaEnd();
  },
  lineStart: function() {
    this._curve.lineStart();
  },
  lineEnd: function() {
    this._curve.lineEnd();
  },
  point: function(a, r) {
    this._curve.point(r * Math.sin(a), r * -Math.cos(a));
  }
};

function curveRadial(curve) {

  function radial(context) {
    return new Radial(curve(context));
  }

  radial._curve = curve;

  return radial;
}


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/step.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = stepBefore;
/* harmony export (immutable) */ __webpack_exports__["b"] = stepAfter;
function Step(context, t) {
  this._context = context;
  this._t = t;
}

Step.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // proceed
      default: {
        if (this._t <= 0) {
          this._context.lineTo(this._x, y);
          this._context.lineTo(x, y);
        } else {
          var x1 = this._x * (1 - this._t) + x * this._t;
          this._context.lineTo(x1, this._y);
          this._context.lineTo(x1, y);
        }
        break;
      }
    }
    this._x = x, this._y = y;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (function(context) {
  return new Step(context, 0.5);
});

function stepBefore(context) {
  return new Step(context, 0);
}

function stepAfter(context) {
  return new Step(context, 1);
}


/***/ }),

/***/ "./node_modules/d3-shape/src/descending.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/identity.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(d) {
  return d;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/line.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_path__ = __webpack_require__("./node_modules/d3-path/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__("./node_modules/d3-shape/src/constant.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__curve_linear__ = __webpack_require__("./node_modules/d3-shape/src/curve/linear.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__point__ = __webpack_require__("./node_modules/d3-shape/src/point.js");





/* harmony default export */ __webpack_exports__["a"] = (function() {
  var x = __WEBPACK_IMPORTED_MODULE_3__point__["a" /* x */],
      y = __WEBPACK_IMPORTED_MODULE_3__point__["b" /* y */],
      defined = Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(true),
      context = null,
      curve = __WEBPACK_IMPORTED_MODULE_2__curve_linear__["a" /* default */],
      output = null;

  function line(data) {
    var i,
        n = data.length,
        d,
        defined0 = false,
        buffer;

    if (context == null) output = curve(buffer = Object(__WEBPACK_IMPORTED_MODULE_0_d3_path__["path"])());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) output.lineStart();
        else output.lineEnd();
      }
      if (defined0) output.point(+x(d, i, data), +y(d, i, data));
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  line.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), line) : x;
  };

  line.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), line) : y;
  };

  line.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(!!_), line) : defined;
  };

  line.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
  };

  line.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
  };

  return line;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/lineRadial.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = lineRadial;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curve_radial__ = __webpack_require__("./node_modules/d3-shape/src/curve/radial.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__line__ = __webpack_require__("./node_modules/d3-shape/src/line.js");



function lineRadial(l) {
  var c = l.curve;

  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;

  l.curve = function(_) {
    return arguments.length ? c(Object(__WEBPACK_IMPORTED_MODULE_0__curve_radial__["b" /* default */])(_)) : c()._curve;
  };

  return l;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return lineRadial(Object(__WEBPACK_IMPORTED_MODULE_1__line__["a" /* default */])().curve(__WEBPACK_IMPORTED_MODULE_0__curve_radial__["a" /* curveRadialLinear */]));
});


/***/ }),

/***/ "./node_modules/d3-shape/src/link/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = linkHorizontal;
/* harmony export (immutable) */ __webpack_exports__["c"] = linkVertical;
/* harmony export (immutable) */ __webpack_exports__["b"] = linkRadial;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_path__ = __webpack_require__("./node_modules/d3-path/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__("./node_modules/d3-shape/src/array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__("./node_modules/d3-shape/src/constant.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__point__ = __webpack_require__("./node_modules/d3-shape/src/point.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pointRadial__ = __webpack_require__("./node_modules/d3-shape/src/pointRadial.js");






function linkSource(d) {
  return d.source;
}

function linkTarget(d) {
  return d.target;
}

function link(curve) {
  var source = linkSource,
      target = linkTarget,
      x = __WEBPACK_IMPORTED_MODULE_3__point__["a" /* x */],
      y = __WEBPACK_IMPORTED_MODULE_3__point__["b" /* y */],
      context = null;

  function link() {
    var buffer, argv = __WEBPACK_IMPORTED_MODULE_1__array__["a" /* slice */].call(arguments), s = source.apply(this, argv), t = target.apply(this, argv);
    if (!context) context = buffer = Object(__WEBPACK_IMPORTED_MODULE_0_d3_path__["path"])();
    curve(context, +x.apply(this, (argv[0] = s, argv)), +y.apply(this, argv), +x.apply(this, (argv[0] = t, argv)), +y.apply(this, argv));
    if (buffer) return context = null, buffer + "" || null;
  }

  link.source = function(_) {
    return arguments.length ? (source = _, link) : source;
  };

  link.target = function(_) {
    return arguments.length ? (target = _, link) : target;
  };

  link.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(+_), link) : x;
  };

  link.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(+_), link) : y;
  };

  link.context = function(_) {
    return arguments.length ? ((context = _ == null ? null : _), link) : context;
  };

  return link;
}

function curveHorizontal(context, x0, y0, x1, y1) {
  context.moveTo(x0, y0);
  context.bezierCurveTo(x0 = (x0 + x1) / 2, y0, x0, y1, x1, y1);
}

function curveVertical(context, x0, y0, x1, y1) {
  context.moveTo(x0, y0);
  context.bezierCurveTo(x0, y0 = (y0 + y1) / 2, x1, y0, x1, y1);
}

function curveRadial(context, x0, y0, x1, y1) {
  var p0 = Object(__WEBPACK_IMPORTED_MODULE_4__pointRadial__["a" /* default */])(x0, y0),
      p1 = Object(__WEBPACK_IMPORTED_MODULE_4__pointRadial__["a" /* default */])(x0, y0 = (y0 + y1) / 2),
      p2 = Object(__WEBPACK_IMPORTED_MODULE_4__pointRadial__["a" /* default */])(x1, y0),
      p3 = Object(__WEBPACK_IMPORTED_MODULE_4__pointRadial__["a" /* default */])(x1, y1);
  context.moveTo(p0[0], p0[1]);
  context.bezierCurveTo(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1]);
}

function linkHorizontal() {
  return link(curveHorizontal);
}

function linkVertical() {
  return link(curveVertical);
}

function linkRadial() {
  var l = link(curveRadial);
  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;
  return l;
}


/***/ }),

/***/ "./node_modules/d3-shape/src/math.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return abs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return atan2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return cos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return sin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return sqrt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return epsilon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return pi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return halfPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return tau; });
/* harmony export (immutable) */ __webpack_exports__["b"] = acos;
/* harmony export (immutable) */ __webpack_exports__["c"] = asin;
var abs = Math.abs;
var atan2 = Math.atan2;
var cos = Math.cos;
var max = Math.max;
var min = Math.min;
var sin = Math.sin;
var sqrt = Math.sqrt;

var epsilon = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var tau = 2 * pi;

function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}

function asin(x) {
  return x >= 1 ? halfPi : x <= -1 ? -halfPi : Math.asin(x);
}


/***/ }),

/***/ "./node_modules/d3-shape/src/noop.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {});


/***/ }),

/***/ "./node_modules/d3-shape/src/offset/diverging.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(series, order) {
  if (!((n = series.length) > 1)) return;
  for (var i, j = 0, d, dy, yp, yn, n, m = series[order[0]].length; j < m; ++j) {
    for (yp = yn = 0, i = 0; i < n; ++i) {
      if ((dy = (d = series[order[i]][j])[1] - d[0]) >= 0) {
        d[0] = yp, d[1] = yp += dy;
      } else if (dy < 0) {
        d[1] = yn, d[0] = yn += dy;
      } else {
        d[0] = yp;
      }
    }
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/offset/expand.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none__ = __webpack_require__("./node_modules/d3-shape/src/offset/none.js");


/* harmony default export */ __webpack_exports__["a"] = (function(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var i, n, j = 0, m = series[0].length, y; j < m; ++j) {
    for (y = i = 0; i < n; ++i) y += series[i][j][1] || 0;
    if (y) for (i = 0; i < n; ++i) series[i][j][1] /= y;
  }
  Object(__WEBPACK_IMPORTED_MODULE_0__none__["a" /* default */])(series, order);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/offset/none.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(series, order) {
  if (!((n = series.length) > 1)) return;
  for (var i = 1, j, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
    s0 = s1, s1 = series[order[i]];
    for (j = 0; j < m; ++j) {
      s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
    }
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/offset/silhouette.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none__ = __webpack_require__("./node_modules/d3-shape/src/offset/none.js");


/* harmony default export */ __webpack_exports__["a"] = (function(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var j = 0, s0 = series[order[0]], n, m = s0.length; j < m; ++j) {
    for (var i = 0, y = 0; i < n; ++i) y += series[i][j][1] || 0;
    s0[j][1] += s0[j][0] = -y / 2;
  }
  Object(__WEBPACK_IMPORTED_MODULE_0__none__["a" /* default */])(series, order);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/offset/wiggle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none__ = __webpack_require__("./node_modules/d3-shape/src/offset/none.js");


/* harmony default export */ __webpack_exports__["a"] = (function(series, order) {
  if (!((n = series.length) > 0) || !((m = (s0 = series[order[0]]).length) > 0)) return;
  for (var y = 0, j = 1, s0, m, n; j < m; ++j) {
    for (var i = 0, s1 = 0, s2 = 0; i < n; ++i) {
      var si = series[order[i]],
          sij0 = si[j][1] || 0,
          sij1 = si[j - 1][1] || 0,
          s3 = (sij0 - sij1) / 2;
      for (var k = 0; k < i; ++k) {
        var sk = series[order[k]],
            skj0 = sk[j][1] || 0,
            skj1 = sk[j - 1][1] || 0;
        s3 += skj0 - skj1;
      }
      s1 += sij0, s2 += s3 * sij0;
    }
    s0[j - 1][1] += s0[j - 1][0] = y;
    if (s1) y -= s2 / s1;
  }
  s0[j - 1][1] += s0[j - 1][0] = y;
  Object(__WEBPACK_IMPORTED_MODULE_0__none__["a" /* default */])(series, order);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/order/ascending.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = sum;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none__ = __webpack_require__("./node_modules/d3-shape/src/order/none.js");


/* harmony default export */ __webpack_exports__["a"] = (function(series) {
  var sums = series.map(sum);
  return Object(__WEBPACK_IMPORTED_MODULE_0__none__["a" /* default */])(series).sort(function(a, b) { return sums[a] - sums[b]; });
});

function sum(series) {
  var s = 0, i = -1, n = series.length, v;
  while (++i < n) if (v = +series[i][1]) s += v;
  return s;
}


/***/ }),

/***/ "./node_modules/d3-shape/src/order/descending.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__("./node_modules/d3-shape/src/order/ascending.js");


/* harmony default export */ __webpack_exports__["a"] = (function(series) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */])(series).reverse();
});


/***/ }),

/***/ "./node_modules/d3-shape/src/order/insideOut.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none__ = __webpack_require__("./node_modules/d3-shape/src/order/none.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ascending__ = __webpack_require__("./node_modules/d3-shape/src/order/ascending.js");



/* harmony default export */ __webpack_exports__["a"] = (function(series) {
  var n = series.length,
      i,
      j,
      sums = series.map(__WEBPACK_IMPORTED_MODULE_1__ascending__["b" /* sum */]),
      order = Object(__WEBPACK_IMPORTED_MODULE_0__none__["a" /* default */])(series).sort(function(a, b) { return sums[b] - sums[a]; }),
      top = 0,
      bottom = 0,
      tops = [],
      bottoms = [];

  for (i = 0; i < n; ++i) {
    j = order[i];
    if (top < bottom) {
      top += sums[j];
      tops.push(j);
    } else {
      bottom += sums[j];
      bottoms.push(j);
    }
  }

  return bottoms.reverse().concat(tops);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/order/none.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(series) {
  var n = series.length, o = new Array(n);
  while (--n >= 0) o[n] = n;
  return o;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/order/reverse.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none__ = __webpack_require__("./node_modules/d3-shape/src/order/none.js");


/* harmony default export */ __webpack_exports__["a"] = (function(series) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__none__["a" /* default */])(series).reverse();
});


/***/ }),

/***/ "./node_modules/d3-shape/src/pie.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__("./node_modules/d3-shape/src/constant.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__descending__ = __webpack_require__("./node_modules/d3-shape/src/descending.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__identity__ = __webpack_require__("./node_modules/d3-shape/src/identity.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math__ = __webpack_require__("./node_modules/d3-shape/src/math.js");





/* harmony default export */ __webpack_exports__["a"] = (function() {
  var value = __WEBPACK_IMPORTED_MODULE_2__identity__["a" /* default */],
      sortValues = __WEBPACK_IMPORTED_MODULE_1__descending__["a" /* default */],
      sort = null,
      startAngle = Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(0),
      endAngle = Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_3__math__["m" /* tau */]),
      padAngle = Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(0);

  function pie(data) {
    var i,
        n = data.length,
        j,
        k,
        sum = 0,
        index = new Array(n),
        arcs = new Array(n),
        a0 = +startAngle.apply(this, arguments),
        da = Math.min(__WEBPACK_IMPORTED_MODULE_3__math__["m" /* tau */], Math.max(-__WEBPACK_IMPORTED_MODULE_3__math__["m" /* tau */], endAngle.apply(this, arguments) - a0)),
        a1,
        p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)),
        pa = p * (da < 0 ? -1 : 1),
        v;

    for (i = 0; i < n; ++i) {
      if ((v = arcs[index[i] = i] = +value(data[i], i, data)) > 0) {
        sum += v;
      }
    }

    // Optionally sort the arcs by previously-computed values or by data.
    if (sortValues != null) index.sort(function(i, j) { return sortValues(arcs[i], arcs[j]); });
    else if (sort != null) index.sort(function(i, j) { return sort(data[i], data[j]); });

    // Compute the arcs! They are stored in the original data's order.
    for (i = 0, k = sum ? (da - n * pa) / sum : 0; i < n; ++i, a0 = a1) {
      j = index[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k : 0) + pa, arcs[j] = {
        data: data[j],
        index: i,
        value: v,
        startAngle: a0,
        endAngle: a1,
        padAngle: p
      };
    }

    return arcs;
  }

  pie.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(+_), pie) : value;
  };

  pie.sortValues = function(_) {
    return arguments.length ? (sortValues = _, sort = null, pie) : sortValues;
  };

  pie.sort = function(_) {
    return arguments.length ? (sort = _, sortValues = null, pie) : sort;
  };

  pie.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(+_), pie) : startAngle;
  };

  pie.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(+_), pie) : endAngle;
  };

  pie.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(+_), pie) : padAngle;
  };

  return pie;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/point.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = x;
/* harmony export (immutable) */ __webpack_exports__["b"] = y;
function x(p) {
  return p[0];
}

function y(p) {
  return p[1];
}


/***/ }),

/***/ "./node_modules/d3-shape/src/pointRadial.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x, y) {
  return [(y = +y) * Math.cos(x -= Math.PI / 2), y * Math.sin(x)];
});


/***/ }),

/***/ "./node_modules/d3-shape/src/stack.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__("./node_modules/d3-shape/src/array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__("./node_modules/d3-shape/src/constant.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__offset_none__ = __webpack_require__("./node_modules/d3-shape/src/offset/none.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_none__ = __webpack_require__("./node_modules/d3-shape/src/order/none.js");





function stackValue(d, key) {
  return d[key];
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var keys = Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])([]),
      order = __WEBPACK_IMPORTED_MODULE_3__order_none__["a" /* default */],
      offset = __WEBPACK_IMPORTED_MODULE_2__offset_none__["a" /* default */],
      value = stackValue;

  function stack(data) {
    var kz = keys.apply(this, arguments),
        i,
        m = data.length,
        n = kz.length,
        sz = new Array(n),
        oz;

    for (i = 0; i < n; ++i) {
      for (var ki = kz[i], si = sz[i] = new Array(m), j = 0, sij; j < m; ++j) {
        si[j] = sij = [0, +value(data[j], ki, j, data)];
        sij.data = data[j];
      }
      si.key = ki;
    }

    for (i = 0, oz = order(sz); i < n; ++i) {
      sz[oz[i]].index = i;
    }

    offset(sz, oz);
    return sz;
  }

  stack.keys = function(_) {
    return arguments.length ? (keys = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__array__["a" /* slice */].call(_)), stack) : keys;
  };

  stack.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), stack) : value;
  };

  stack.order = function(_) {
    return arguments.length ? (order = _ == null ? __WEBPACK_IMPORTED_MODULE_3__order_none__["a" /* default */] : typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__array__["a" /* slice */].call(_)), stack) : order;
  };

  stack.offset = function(_) {
    return arguments.length ? (offset = _ == null ? __WEBPACK_IMPORTED_MODULE_2__offset_none__["a" /* default */] : _, stack) : offset;
  };

  return stack;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return symbols; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_path__ = __webpack_require__("./node_modules/d3-path/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__symbol_circle__ = __webpack_require__("./node_modules/d3-shape/src/symbol/circle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__symbol_cross__ = __webpack_require__("./node_modules/d3-shape/src/symbol/cross.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__symbol_diamond__ = __webpack_require__("./node_modules/d3-shape/src/symbol/diamond.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__symbol_star__ = __webpack_require__("./node_modules/d3-shape/src/symbol/star.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__symbol_square__ = __webpack_require__("./node_modules/d3-shape/src/symbol/square.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__symbol_triangle__ = __webpack_require__("./node_modules/d3-shape/src/symbol/triangle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__symbol_wye__ = __webpack_require__("./node_modules/d3-shape/src/symbol/wye.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constant__ = __webpack_require__("./node_modules/d3-shape/src/constant.js");










var symbols = [
  __WEBPACK_IMPORTED_MODULE_1__symbol_circle__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__symbol_cross__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_3__symbol_diamond__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_5__symbol_square__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_4__symbol_star__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_6__symbol_triangle__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_7__symbol_wye__["a" /* default */]
];

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var type = Object(__WEBPACK_IMPORTED_MODULE_8__constant__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__symbol_circle__["a" /* default */]),
      size = Object(__WEBPACK_IMPORTED_MODULE_8__constant__["a" /* default */])(64),
      context = null;

  function symbol() {
    var buffer;
    if (!context) context = buffer = Object(__WEBPACK_IMPORTED_MODULE_0_d3_path__["path"])();
    type.apply(this, arguments).draw(context, +size.apply(this, arguments));
    if (buffer) return context = null, buffer + "" || null;
  }

  symbol.type = function(_) {
    return arguments.length ? (type = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_8__constant__["a" /* default */])(_), symbol) : type;
  };

  symbol.size = function(_) {
    return arguments.length ? (size = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_8__constant__["a" /* default */])(+_), symbol) : size;
  };

  symbol.context = function(_) {
    return arguments.length ? (context = _ == null ? null : _, symbol) : context;
  };

  return symbol;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/circle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-shape/src/math.js");


/* harmony default export */ __webpack_exports__["a"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size / __WEBPACK_IMPORTED_MODULE_0__math__["j" /* pi */]);
    context.moveTo(r, 0);
    context.arc(0, 0, r, 0, __WEBPACK_IMPORTED_MODULE_0__math__["m" /* tau */]);
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/cross.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size / 5) / 2;
    context.moveTo(-3 * r, -r);
    context.lineTo(-r, -r);
    context.lineTo(-r, -3 * r);
    context.lineTo(r, -3 * r);
    context.lineTo(r, -r);
    context.lineTo(3 * r, -r);
    context.lineTo(3 * r, r);
    context.lineTo(r, r);
    context.lineTo(r, 3 * r);
    context.lineTo(-r, 3 * r);
    context.lineTo(-r, r);
    context.lineTo(-3 * r, r);
    context.closePath();
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/diamond.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var tan30 = Math.sqrt(1 / 3),
    tan30_2 = tan30 * 2;

/* harmony default export */ __webpack_exports__["a"] = ({
  draw: function(context, size) {
    var y = Math.sqrt(size / tan30_2),
        x = y * tan30;
    context.moveTo(0, -y);
    context.lineTo(x, 0);
    context.lineTo(0, y);
    context.lineTo(-x, 0);
    context.closePath();
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/square.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  draw: function(context, size) {
    var w = Math.sqrt(size),
        x = -w / 2;
    context.rect(x, x, w, w);
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/star.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-shape/src/math.js");


var ka = 0.89081309152928522810,
    kr = Math.sin(__WEBPACK_IMPORTED_MODULE_0__math__["j" /* pi */] / 10) / Math.sin(7 * __WEBPACK_IMPORTED_MODULE_0__math__["j" /* pi */] / 10),
    kx = Math.sin(__WEBPACK_IMPORTED_MODULE_0__math__["m" /* tau */] / 10) * kr,
    ky = -Math.cos(__WEBPACK_IMPORTED_MODULE_0__math__["m" /* tau */] / 10) * kr;

/* harmony default export */ __webpack_exports__["a"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size * ka),
        x = kx * r,
        y = ky * r;
    context.moveTo(0, -r);
    context.lineTo(x, y);
    for (var i = 1; i < 5; ++i) {
      var a = __WEBPACK_IMPORTED_MODULE_0__math__["m" /* tau */] * i / 5,
          c = Math.cos(a),
          s = Math.sin(a);
      context.lineTo(s * r, -c * r);
      context.lineTo(c * x - s * y, s * x + c * y);
    }
    context.closePath();
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/triangle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var sqrt3 = Math.sqrt(3);

/* harmony default export */ __webpack_exports__["a"] = ({
  draw: function(context, size) {
    var y = -Math.sqrt(size / (sqrt3 * 3));
    context.moveTo(0, y * 2);
    context.lineTo(-sqrt3 * y, -y);
    context.lineTo(sqrt3 * y, -y);
    context.closePath();
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/wye.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var c = -0.5,
    s = Math.sqrt(3) / 2,
    k = 1 / Math.sqrt(12),
    a = (k / 2 + 1) * 3;

/* harmony default export */ __webpack_exports__["a"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size / a),
        x0 = r / 2,
        y0 = r * k,
        x1 = x0,
        y1 = r * k + r,
        x2 = -x1,
        y2 = y1;
    context.moveTo(x0, y0);
    context.lineTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(c * x0 - s * y0, s * x0 + c * y0);
    context.lineTo(c * x1 - s * y1, s * x1 + c * y1);
    context.lineTo(c * x2 - s * y2, s * x2 + c * y2);
    context.lineTo(c * x0 + s * y0, c * y0 - s * x0);
    context.lineTo(c * x1 + s * y1, c * y1 - s * x1);
    context.lineTo(c * x2 + s * y2, c * y2 - s * x2);
    context.closePath();
  }
});


/***/ }),

/***/ "./node_modules/d3-time-format/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__ = __webpack_require__("./node_modules/d3-time-format/src/defaultLocale.js");
/* unused harmony reexport timeFormatDefaultLocale */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__["a"]; });
/* unused harmony reexport timeParse */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__["b"]; });
/* unused harmony reexport utcParse */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_locale__ = __webpack_require__("./node_modules/d3-time-format/src/locale.js");
/* unused harmony reexport timeFormatLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_isoFormat__ = __webpack_require__("./node_modules/d3-time-format/src/isoFormat.js");
/* unused harmony reexport isoFormat */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_isoParse__ = __webpack_require__("./node_modules/d3-time-format/src/isoParse.js");
/* unused harmony reexport isoParse */






/***/ }),

/***/ "./node_modules/d3-time-format/src/defaultLocale.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return timeFormat; });
/* unused harmony export timeParse */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return utcFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return utcParse; });
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__locale__ = __webpack_require__("./node_modules/d3-time-format/src/locale.js");


var locale;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;

defaultLocale({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});

function defaultLocale(definition) {
  locale = Object(__WEBPACK_IMPORTED_MODULE_0__locale__["a" /* default */])(definition);
  timeFormat = locale.format;
  timeParse = locale.parse;
  utcFormat = locale.utcFormat;
  utcParse = locale.utcParse;
  return locale;
}


/***/ }),

/***/ "./node_modules/d3-time-format/src/isoFormat.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isoSpecifier; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultLocale__ = __webpack_require__("./node_modules/d3-time-format/src/defaultLocale.js");


var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";

function formatIsoNative(date) {
  return date.toISOString();
}

var formatIso = Date.prototype.toISOString
    ? formatIsoNative
    : Object(__WEBPACK_IMPORTED_MODULE_0__defaultLocale__["b" /* utcFormat */])(isoSpecifier);

/* unused harmony default export */ var _unused_webpack_default_export = (formatIso);


/***/ }),

/***/ "./node_modules/d3-time-format/src/isoParse.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isoFormat__ = __webpack_require__("./node_modules/d3-time-format/src/isoFormat.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defaultLocale__ = __webpack_require__("./node_modules/d3-time-format/src/defaultLocale.js");



function parseIsoNative(string) {
  var date = new Date(string);
  return isNaN(date) ? null : date;
}

var parseIso = +new Date("2000-01-01T00:00:00.000Z")
    ? parseIsoNative
    : Object(__WEBPACK_IMPORTED_MODULE_1__defaultLocale__["c" /* utcParse */])(__WEBPACK_IMPORTED_MODULE_0__isoFormat__["a" /* isoSpecifier */]);

/* unused harmony default export */ var _unused_webpack_default_export = (parseIso);


/***/ }),

/***/ "./node_modules/d3-time-format/src/locale.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = formatLocale;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_time__ = __webpack_require__("./node_modules/d3-time/index.js");


function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date.setFullYear(d.y);
    return date;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}

function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date.setUTCFullYear(d.y);
    return date;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}

function newYear(y) {
  return {y: y, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0};
}

function formatLocale(locale) {
  var locale_dateTime = locale.dateTime,
      locale_date = locale.date,
      locale_time = locale.time,
      locale_periods = locale.periods,
      locale_weekdays = locale.days,
      locale_shortWeekdays = locale.shortDays,
      locale_months = locale.months,
      locale_shortMonths = locale.shortMonths;

  var periodRe = formatRe(locale_periods),
      periodLookup = formatLookup(locale_periods),
      weekdayRe = formatRe(locale_weekdays),
      weekdayLookup = formatLookup(locale_weekdays),
      shortWeekdayRe = formatRe(locale_shortWeekdays),
      shortWeekdayLookup = formatLookup(locale_shortWeekdays),
      monthRe = formatRe(locale_months),
      monthLookup = formatLookup(locale_months),
      shortMonthRe = formatRe(locale_shortMonths),
      shortMonthLookup = formatLookup(locale_shortMonths);

  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };

  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };

  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };

  // These recursive directive definitions must be deferred.
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);

  function newFormat(specifier, formats) {
    return function(date) {
      var string = [],
          i = -1,
          j = 0,
          n = specifier.length,
          c,
          pad,
          format;

      if (!(date instanceof Date)) date = new Date(+date);

      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
          else pad = c === "e" ? " " : "0";
          if (format = formats[c]) c = format(date, pad);
          string.push(c);
          j = i + 1;
        }
      }

      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }

  function newParse(specifier, newDate) {
    return function(string) {
      var d = newYear(1900),
          i = parseSpecifier(d, specifier, string += "", 0),
          week, day;
      if (i != string.length) return null;

      // If a UNIX timestamp is specified, return it.
      if ("Q" in d) return new Date(d.Q);

      // The am-pm flag is 0 for AM, and 1 for PM.
      if ("p" in d) d.H = d.H % 12 + d.p * 12;

      // Convert day-of-week and week-of-year to day-of-year.
      if ("V" in d) {
        if (d.V < 1 || d.V > 53) return null;
        if (!("w" in d)) d.w = 1;
        if ("Z" in d) {
          week = utcDate(newYear(d.y)), day = week.getUTCDay();
          week = day > 4 || day === 0 ? __WEBPACK_IMPORTED_MODULE_0_d3_time__["p" /* utcMonday */].ceil(week) : Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["p" /* utcMonday */])(week);
          week = __WEBPACK_IMPORTED_MODULE_0_d3_time__["l" /* utcDay */].offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = newDate(newYear(d.y)), day = week.getDay();
          week = day > 4 || day === 0 ? __WEBPACK_IMPORTED_MODULE_0_d3_time__["e" /* timeMonday */].ceil(week) : Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["e" /* timeMonday */])(week);
          week = __WEBPACK_IMPORTED_MODULE_0_d3_time__["a" /* timeDay */].offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day = "Z" in d ? utcDate(newYear(d.y)).getUTCDay() : newDate(newYear(d.y)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
      }

      // If a time zone is specified, all fields are interpreted as UTC and then
      // offset according to the specified time zone.
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }

      // Otherwise, all fields are in local time.
      return newDate(d);
    };
  }

  function parseSpecifier(d, specifier, string, j) {
    var i = 0,
        n = specifier.length,
        m = string.length,
        c,
        parse;

    while (i < n) {
      if (j >= m) return -1;
      c = specifier.charCodeAt(i++);
      if (c === 37) {
        c = specifier.charAt(i++);
        parse = parses[c in pads ? specifier.charAt(i++) : c];
        if (!parse || ((j = parse(d, string, j)) < 0)) return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }

    return j;
  }

  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }

  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }

  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }

  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }

  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }

  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }

  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }

  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }

  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }

  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }

  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }

  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }

  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }

  return {
    format: function(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function() { return specifier; };
      return f;
    },
    parse: function(specifier) {
      var p = newParse(specifier += "", localDate);
      p.toString = function() { return specifier; };
      return p;
    },
    utcFormat: function(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function() { return specifier; };
      return f;
    },
    utcParse: function(specifier) {
      var p = newParse(specifier, utcDate);
      p.toString = function() { return specifier; };
      return p;
    }
  };
}

var pads = {"-": "", "_": " ", "0": "0"},
    numberRe = /^\s*\d+/, // note: ignores next directive
    percentRe = /^%/,
    requoteRe = /[\\^$*+?|[\]().{}]/g;

function pad(value, fill, width) {
  var sign = value < 0 ? "-" : "",
      string = (sign ? -value : value) + "",
      length = string.length;
  return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}

function requote(s) {
  return s.replace(requoteRe, "\\$&");
}

function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}

function formatLookup(names) {
  var map = {}, i = -1, n = names.length;
  while (++i < n) map[names[i].toLowerCase()] = i;
  return map;
}

function parseWeekdayNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}

function parseWeekdayNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberISO(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}

function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}

function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
}

function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}

function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}

function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}

function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}

function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}

function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}

function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}

function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}

function parseMicroseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;
}

function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}

function parseUnixTimestamp(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}

function parseUnixTimestampSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = (+n[0]) * 1000, i + n[0].length) : -1;
}

function formatDayOfMonth(d, p) {
  return pad(d.getDate(), p, 2);
}

function formatHour24(d, p) {
  return pad(d.getHours(), p, 2);
}

function formatHour12(d, p) {
  return pad(d.getHours() % 12 || 12, p, 2);
}

function formatDayOfYear(d, p) {
  return pad(1 + __WEBPACK_IMPORTED_MODULE_0_d3_time__["a" /* timeDay */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["k" /* timeYear */])(d), d), p, 3);
}

function formatMilliseconds(d, p) {
  return pad(d.getMilliseconds(), p, 3);
}

function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}

function formatMonthNumber(d, p) {
  return pad(d.getMonth() + 1, p, 2);
}

function formatMinutes(d, p) {
  return pad(d.getMinutes(), p, 2);
}

function formatSeconds(d, p) {
  return pad(d.getSeconds(), p, 2);
}

function formatWeekdayNumberMonday(d) {
  var day = d.getDay();
  return day === 0 ? 7 : day;
}

function formatWeekNumberSunday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["h" /* timeSunday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["k" /* timeYear */])(d), d), p, 2);
}

function formatWeekNumberISO(d, p) {
  var day = d.getDay();
  d = (day >= 4 || day === 0) ? Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["i" /* timeThursday */])(d) : __WEBPACK_IMPORTED_MODULE_0_d3_time__["i" /* timeThursday */].ceil(d);
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["i" /* timeThursday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["k" /* timeYear */])(d), d) + (Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["k" /* timeYear */])(d).getDay() === 4), p, 2);
}

function formatWeekdayNumberSunday(d) {
  return d.getDay();
}

function formatWeekNumberMonday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["e" /* timeMonday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["k" /* timeYear */])(d), d), p, 2);
}

function formatYear(d, p) {
  return pad(d.getFullYear() % 100, p, 2);
}

function formatFullYear(d, p) {
  return pad(d.getFullYear() % 10000, p, 4);
}

function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+"))
      + pad(z / 60 | 0, "0", 2)
      + pad(z % 60, "0", 2);
}

function formatUTCDayOfMonth(d, p) {
  return pad(d.getUTCDate(), p, 2);
}

function formatUTCHour24(d, p) {
  return pad(d.getUTCHours(), p, 2);
}

function formatUTCHour12(d, p) {
  return pad(d.getUTCHours() % 12 || 12, p, 2);
}

function formatUTCDayOfYear(d, p) {
  return pad(1 + __WEBPACK_IMPORTED_MODULE_0_d3_time__["l" /* utcDay */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["v" /* utcYear */])(d), d), p, 3);
}

function formatUTCMilliseconds(d, p) {
  return pad(d.getUTCMilliseconds(), p, 3);
}

function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}

function formatUTCMonthNumber(d, p) {
  return pad(d.getUTCMonth() + 1, p, 2);
}

function formatUTCMinutes(d, p) {
  return pad(d.getUTCMinutes(), p, 2);
}

function formatUTCSeconds(d, p) {
  return pad(d.getUTCSeconds(), p, 2);
}

function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}

function formatUTCWeekNumberSunday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["s" /* utcSunday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["v" /* utcYear */])(d), d), p, 2);
}

function formatUTCWeekNumberISO(d, p) {
  var day = d.getUTCDay();
  d = (day >= 4 || day === 0) ? Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["t" /* utcThursday */])(d) : __WEBPACK_IMPORTED_MODULE_0_d3_time__["t" /* utcThursday */].ceil(d);
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["t" /* utcThursday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["v" /* utcYear */])(d), d) + (Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["v" /* utcYear */])(d).getUTCDay() === 4), p, 2);
}

function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}

function formatUTCWeekNumberMonday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["p" /* utcMonday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["v" /* utcYear */])(d), d), p, 2);
}

function formatUTCYear(d, p) {
  return pad(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCFullYear(d, p) {
  return pad(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCZone() {
  return "+0000";
}

function formatLiteralPercent() {
  return "%";
}

function formatUnixTimestamp(d) {
  return +d;
}

function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1000);
}


/***/ }),

/***/ "./node_modules/d3-time/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_interval__ = __webpack_require__("./node_modules/d3-time/src/interval.js");
/* unused harmony reexport timeInterval */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_millisecond__ = __webpack_require__("./node_modules/d3-time/src/millisecond.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__src_millisecond__["a"]; });
/* unused harmony reexport timeMilliseconds */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_1__src_millisecond__["a"]; });
/* unused harmony reexport utcMilliseconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_second__ = __webpack_require__("./node_modules/d3-time/src/second.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__src_second__["a"]; });
/* unused harmony reexport timeSeconds */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_2__src_second__["a"]; });
/* unused harmony reexport utcSeconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_minute__ = __webpack_require__("./node_modules/d3-time/src/minute.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__src_minute__["a"]; });
/* unused harmony reexport timeMinutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_hour__ = __webpack_require__("./node_modules/d3-time/src/hour.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__src_hour__["a"]; });
/* unused harmony reexport timeHours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_day__ = __webpack_require__("./node_modules/d3-time/src/day.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__src_day__["a"]; });
/* unused harmony reexport timeDays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_week__ = __webpack_require__("./node_modules/d3-time/src/week.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["b"]; });
/* unused harmony reexport timeWeeks */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["b"]; });
/* unused harmony reexport timeSundays */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["a"]; });
/* unused harmony reexport timeMondays */
/* unused harmony reexport timeTuesday */
/* unused harmony reexport timeTuesdays */
/* unused harmony reexport timeWednesday */
/* unused harmony reexport timeWednesdays */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["c"]; });
/* unused harmony reexport timeThursdays */
/* unused harmony reexport timeFriday */
/* unused harmony reexport timeFridays */
/* unused harmony reexport timeSaturday */
/* unused harmony reexport timeSaturdays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_month__ = __webpack_require__("./node_modules/d3-time/src/month.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_7__src_month__["a"]; });
/* unused harmony reexport timeMonths */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_year__ = __webpack_require__("./node_modules/d3-time/src/year.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_8__src_year__["a"]; });
/* unused harmony reexport timeYears */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_utcMinute__ = __webpack_require__("./node_modules/d3-time/src/utcMinute.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_9__src_utcMinute__["a"]; });
/* unused harmony reexport utcMinutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_utcHour__ = __webpack_require__("./node_modules/d3-time/src/utcHour.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_10__src_utcHour__["a"]; });
/* unused harmony reexport utcHours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_utcDay__ = __webpack_require__("./node_modules/d3-time/src/utcDay.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_11__src_utcDay__["a"]; });
/* unused harmony reexport utcDays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__ = __webpack_require__("./node_modules/d3-time/src/utcWeek.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["b"]; });
/* unused harmony reexport utcWeeks */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["b"]; });
/* unused harmony reexport utcSundays */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["a"]; });
/* unused harmony reexport utcMondays */
/* unused harmony reexport utcTuesday */
/* unused harmony reexport utcTuesdays */
/* unused harmony reexport utcWednesday */
/* unused harmony reexport utcWednesdays */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["c"]; });
/* unused harmony reexport utcThursdays */
/* unused harmony reexport utcFriday */
/* unused harmony reexport utcFridays */
/* unused harmony reexport utcSaturday */
/* unused harmony reexport utcSaturdays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_utcMonth__ = __webpack_require__("./node_modules/d3-time/src/utcMonth.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_13__src_utcMonth__["a"]; });
/* unused harmony reexport utcMonths */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_utcYear__ = __webpack_require__("./node_modules/d3-time/src/utcYear.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_14__src_utcYear__["a"]; });
/* unused harmony reexport utcYears */































/***/ }),

/***/ "./node_modules/d3-time/src/day.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export days */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__("./node_modules/d3-time/src/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__("./node_modules/d3-time/src/duration.js");



var day = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setDate(date.getDate() + step);
}, function(start, end) {
  return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */]) / __WEBPACK_IMPORTED_MODULE_1__duration__["a" /* durationDay */];
}, function(date) {
  return date.getDate() - 1;
});

/* harmony default export */ __webpack_exports__["a"] = (day);
var days = day.range;


/***/ }),

/***/ "./node_modules/d3-time/src/duration.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return durationSecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return durationMinute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return durationHour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return durationDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return durationWeek; });
var durationSecond = 1e3;
var durationMinute = 6e4;
var durationHour = 36e5;
var durationDay = 864e5;
var durationWeek = 6048e5;


/***/ }),

/***/ "./node_modules/d3-time/src/hour.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__("./node_modules/d3-time/src/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__("./node_modules/d3-time/src/duration.js");



var hour = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  var offset = date.getTimezoneOffset() * __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */] % __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationHour */];
  if (offset < 0) offset += __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationHour */];
  date.setTime(Math.floor((+date - offset) / __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationHour */]) * __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationHour */] + offset);
}, function(date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationHour */]);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationHour */];
}, function(date) {
  return date.getHours();
});

/* harmony default export */ __webpack_exports__["a"] = (hour);
var hours = hour.range;


/***/ }),

/***/ "./node_modules/d3-time/src/interval.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = newInterval;
var t0 = new Date,
    t1 = new Date;

function newInterval(floori, offseti, count, field) {

  function interval(date) {
    return floori(date = new Date(+date)), date;
  }

  interval.floor = interval;

  interval.ceil = function(date) {
    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
  };

  interval.round = function(date) {
    var d0 = interval(date),
        d1 = interval.ceil(date);
    return date - d0 < d1 - date ? d0 : d1;
  };

  interval.offset = function(date, step) {
    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
  };

  interval.range = function(start, stop, step) {
    var range = [], previous;
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
    do range.push(previous = new Date(+start)), offseti(start, step), floori(start);
    while (previous < start && start < stop);
    return range;
  };

  interval.filter = function(test) {
    return newInterval(function(date) {
      if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);
    }, function(date, step) {
      if (date >= date) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date, -1), !test(date)) {} // eslint-disable-line no-empty
        } else while (--step >= 0) {
          while (offseti(date, +1), !test(date)) {} // eslint-disable-line no-empty
        }
      }
    });
  };

  if (count) {
    interval.count = function(start, end) {
      t0.setTime(+start), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count(t0, t1));
    };

    interval.every = function(step) {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null
          : !(step > 1) ? interval
          : interval.filter(field
              ? function(d) { return field(d) % step === 0; }
              : function(d) { return interval.count(0, d) % step === 0; });
    };
  }

  return interval;
}


/***/ }),

/***/ "./node_modules/d3-time/src/millisecond.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export milliseconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__("./node_modules/d3-time/src/interval.js");


var millisecond = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function() {
  // noop
}, function(date, step) {
  date.setTime(+date + step);
}, function(start, end) {
  return end - start;
});

// An optimized implementation for this simple case.
millisecond.every = function(k) {
  k = Math.floor(k);
  if (!isFinite(k) || !(k > 0)) return null;
  if (!(k > 1)) return millisecond;
  return Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
    date.setTime(Math.floor(date / k) * k);
  }, function(date, step) {
    date.setTime(+date + step * k);
  }, function(start, end) {
    return (end - start) / k;
  });
};

/* harmony default export */ __webpack_exports__["a"] = (millisecond);
var milliseconds = millisecond.range;


/***/ }),

/***/ "./node_modules/d3-time/src/minute.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export minutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__("./node_modules/d3-time/src/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__("./node_modules/d3-time/src/duration.js");



var minute = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setTime(Math.floor(date / __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */]) * __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */]);
}, function(date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */]);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */];
}, function(date) {
  return date.getMinutes();
});

/* harmony default export */ __webpack_exports__["a"] = (minute);
var minutes = minute.range;


/***/ }),

/***/ "./node_modules/d3-time/src/month.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export months */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__("./node_modules/d3-time/src/interval.js");


var month = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setMonth(date.getMonth() + step);
}, function(start, end) {
  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, function(date) {
  return date.getMonth();
});

/* harmony default export */ __webpack_exports__["a"] = (month);
var months = month.range;


/***/ }),

/***/ "./node_modules/d3-time/src/second.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export seconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__("./node_modules/d3-time/src/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__("./node_modules/d3-time/src/duration.js");



var second = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setTime(Math.floor(date / __WEBPACK_IMPORTED_MODULE_1__duration__["d" /* durationSecond */]) * __WEBPACK_IMPORTED_MODULE_1__duration__["d" /* durationSecond */]);
}, function(date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration__["d" /* durationSecond */]);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["d" /* durationSecond */];
}, function(date) {
  return date.getUTCSeconds();
});

/* harmony default export */ __webpack_exports__["a"] = (second);
var seconds = second.range;


/***/ }),

/***/ "./node_modules/d3-time/src/utcDay.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export utcDays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__("./node_modules/d3-time/src/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__("./node_modules/d3-time/src/duration.js");



var utcDay = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCDate(date.getUTCDate() + step);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["a" /* durationDay */];
}, function(date) {
  return date.getUTCDate() - 1;
});

/* harmony default export */ __webpack_exports__["a"] = (utcDay);
var utcDays = utcDay.range;


/***/ }),

/***/ "./node_modules/d3-time/src/utcHour.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export utcHours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__("./node_modules/d3-time/src/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__("./node_modules/d3-time/src/duration.js");



var utcHour = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setUTCMinutes(0, 0, 0);
}, function(date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationHour */]);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationHour */];
}, function(date) {
  return date.getUTCHours();
});

/* harmony default export */ __webpack_exports__["a"] = (utcHour);
var utcHours = utcHour.range;


/***/ }),

/***/ "./node_modules/d3-time/src/utcMinute.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export utcMinutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__("./node_modules/d3-time/src/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__("./node_modules/d3-time/src/duration.js");



var utcMinute = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setUTCSeconds(0, 0);
}, function(date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */]);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */];
}, function(date) {
  return date.getUTCMinutes();
});

/* harmony default export */ __webpack_exports__["a"] = (utcMinute);
var utcMinutes = utcMinute.range;


/***/ }),

/***/ "./node_modules/d3-time/src/utcMonth.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export utcMonths */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__("./node_modules/d3-time/src/interval.js");


var utcMonth = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setUTCDate(1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCMonth(date.getUTCMonth() + step);
}, function(start, end) {
  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, function(date) {
  return date.getUTCMonth();
});

/* harmony default export */ __webpack_exports__["a"] = (utcMonth);
var utcMonths = utcMonth.range;


/***/ }),

/***/ "./node_modules/d3-time/src/utcWeek.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return utcSunday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return utcMonday; });
/* unused harmony export utcTuesday */
/* unused harmony export utcWednesday */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return utcThursday; });
/* unused harmony export utcFriday */
/* unused harmony export utcSaturday */
/* unused harmony export utcSundays */
/* unused harmony export utcMondays */
/* unused harmony export utcTuesdays */
/* unused harmony export utcWednesdays */
/* unused harmony export utcThursdays */
/* unused harmony export utcFridays */
/* unused harmony export utcSaturdays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__("./node_modules/d3-time/src/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__("./node_modules/d3-time/src/duration.js");



function utcWeekday(i) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCDate(date.getUTCDate() + step * 7);
  }, function(start, end) {
    return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["e" /* durationWeek */];
  });
}

var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);

var utcSundays = utcSunday.range;
var utcMondays = utcMonday.range;
var utcTuesdays = utcTuesday.range;
var utcWednesdays = utcWednesday.range;
var utcThursdays = utcThursday.range;
var utcFridays = utcFriday.range;
var utcSaturdays = utcSaturday.range;


/***/ }),

/***/ "./node_modules/d3-time/src/utcYear.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export utcYears */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__("./node_modules/d3-time/src/interval.js");


var utcYear = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCFullYear(date.getUTCFullYear() + step);
}, function(start, end) {
  return end.getUTCFullYear() - start.getUTCFullYear();
}, function(date) {
  return date.getUTCFullYear();
});

// An optimized implementation for this simple case.
utcYear.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCFullYear(date.getUTCFullYear() + step * k);
  });
};

/* harmony default export */ __webpack_exports__["a"] = (utcYear);
var utcYears = utcYear.range;


/***/ }),

/***/ "./node_modules/d3-time/src/week.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return sunday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return monday; });
/* unused harmony export tuesday */
/* unused harmony export wednesday */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return thursday; });
/* unused harmony export friday */
/* unused harmony export saturday */
/* unused harmony export sundays */
/* unused harmony export mondays */
/* unused harmony export tuesdays */
/* unused harmony export wednesdays */
/* unused harmony export thursdays */
/* unused harmony export fridays */
/* unused harmony export saturdays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__("./node_modules/d3-time/src/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__("./node_modules/d3-time/src/duration.js");



function weekday(i) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
    date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setDate(date.getDate() + step * 7);
  }, function(start, end) {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */]) / __WEBPACK_IMPORTED_MODULE_1__duration__["e" /* durationWeek */];
  });
}

var sunday = weekday(0);
var monday = weekday(1);
var tuesday = weekday(2);
var wednesday = weekday(3);
var thursday = weekday(4);
var friday = weekday(5);
var saturday = weekday(6);

var sundays = sunday.range;
var mondays = monday.range;
var tuesdays = tuesday.range;
var wednesdays = wednesday.range;
var thursdays = thursday.range;
var fridays = friday.range;
var saturdays = saturday.range;


/***/ }),

/***/ "./node_modules/d3-time/src/year.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export years */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__("./node_modules/d3-time/src/interval.js");


var year = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setFullYear(date.getFullYear() + step);
}, function(start, end) {
  return end.getFullYear() - start.getFullYear();
}, function(date) {
  return date.getFullYear();
});

// An optimized implementation for this simple case.
year.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
    date.setFullYear(Math.floor(date.getFullYear() / k) * k);
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setFullYear(date.getFullYear() + step * k);
  });
};

/* harmony default export */ __webpack_exports__["a"] = (year);
var years = year.range;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_css__ = __webpack_require__("./style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__graph_js__ = __webpack_require__("./graph.js");
var _jsxFileName = "/Users/v16/code/portfolio/pages/index.jsx";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "rectbox blue",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "portCanvas",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "third",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "portValue",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, "$12000"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "portName",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, "Current Balance")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "third",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "portStat green",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, "+7.33%"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "portName",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, "Change")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "third",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "portStat green",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, "$620"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "portName",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, "Profit/Loss"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__graph_js__["a" /* default */], {
        width: 500,
        height: 300,
        margin: {
          top: 5,
          left: 5,
          right: 5,
          bottom: 5
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      })));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);


;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Index, "Index", "/Users/v16/code/portfolio/pages/index.jsx");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./style.css":
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1525764815396");
          });
      }
    }
  

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.jsx");


/***/ })

},[4])
          return { page: comp.default }
        })
      ;
//# sourceMappingURL=index.js.map