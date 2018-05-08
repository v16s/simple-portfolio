webpackHotUpdate(5,{

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

/***/ })

})
//# sourceMappingURL=5.a31b5b8554e9c5581c08.hot-update.js.map