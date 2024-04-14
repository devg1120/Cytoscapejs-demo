/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var sbgnStylesheet = __webpack_require__(1);
var cytoscape = window.cytoscape;

var cy = window.cy = cytoscape({
  container: document.getElementById('cy'),
  elements: fetch('./demo.json').then(function (res) {
    return res.json();
  }),
  layout: { name: 'preset' },
  style: sbgnStylesheet(cytoscape)
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["cytoscapeSbgnStylesheet"] = factory();else root["cytoscapeSbgnStylesheet"] = factory();
})(typeof self !== 'undefined' ? self : undefined, function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/ });
          /******/
        }
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "";
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 6);
      /******/
    }(
    /************************************************************************/
    /******/[
    /* 0 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var sbgnDataHandler = {
        isMultimer: function isMultimer(node) {
          return node.data('class').includes('multimer');
        },
        hasClonemarker: function hasClonemarker(node) {
          return node.data('clonemarker');
        },
        getStateVars: function getStateVars(node) {
          return node.data('stateVariables');
        },
        getUnitInfos: function getUnitInfos(node) {
          return node.data('unitsOfInformation');
        },
        hasAuxItems: function hasAuxItems(node) {
          return node.data('stateVariables').length + node.data('unitsOfInformation').length > 0;
        },
        sbgnClass: function sbgnClass(element) {
          return element.data('class');
        },
        sbgnLabel: function sbgnLabel(element) {
          return element.data('label');
        },
        stateVarLabel: function stateVarLabel(stateVar) {
          var variable = stateVar.state.variable;
          var value = stateVar.state.value;
          if (value && variable) {
            return value + '@' + variable;
          }
          if (value) {
            return value;
          }

          if (variable) {
            return variable;
          }
          return '';
        }
      };

      module.exports = sbgnDataHandler;

      /***/
    },
    /* 1 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var _slicedToArray = function () {
        function sliceIterator(arr, i) {
          var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;_e = err;
          } finally {
            try {
              if (!_n && _i["return"]) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }return _arr;
        }return function (arr, i) {
          if (Array.isArray(arr)) {
            return arr;
          } else if (Symbol.iterator in Object(arr)) {
            return sliceIterator(arr, i);
          } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          }
        };
      }();

      var styleMap2Str = function styleMap2Str(styleMap) {
        if (!styleMap) {
          return '';
        }

        var s = '';

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = styleMap[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _ref = _step.value;

            var _ref2 = _slicedToArray(_ref, 2);

            var k = _ref2[0];
            var v = _ref2[1];

            s += k + '=' + '"' + v + '"' + ' ';
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return s;
      };

      var svg = function svg(svgStr) {
        var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
        var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;

        var parser = new DOMParser();
        var svgText = '<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE svg><svg xmlns=\'http://www.w3.org/2000/svg\' version=\'1.1\' width=\'' + width + '\' height=\'' + height + '\'>' + svgStr + '</svg>';
        return parser.parseFromString(svgText, 'text/xml').documentElement;
      };

      var svgStr = function svgStr(svgText, viewPortWidth, viewPortHeight, viewBoxX, viewBoxY, viewBoxWidth, viewBoxHeight) {
        var s = svg(svgText, viewPortWidth, viewPortHeight, viewBoxX, viewBoxY, viewBoxWidth, viewBoxHeight);

        // base64
        // let data = 'data:image/svg+xml;base64,' + btoa(s.outerHTML);

        // uri component string
        var data = 'data:image/svg+xml;utf8,' + encodeURIComponent(s.outerHTML);

        return data;
      };

      module.exports = {
        svgStr: svgStr,
        styleMap2Str: styleMap2Str
      };

      /***/
    },
    /* 2 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
          }return arr2;
        } else {
          return Array.from(arr);
        }
      }

      var styleMap2Str = __webpack_require__(1).styleMap2Str;

      var baseRectangle = function baseRectangle(x, y, w, h, r1, r2, r3, r4, styleMap) {
        return '\n  <path ' + styleMap2Str(styleMap) + ' d=\'\n    M ' + (x + r1) + ' ' + y + '\n    L ' + (x + w - r2) + ' ' + y + ' Q ' + (x + w) + ' ' + y + ' ' + (x + w) + ' ' + (y + r2) + '\n    L ' + (x + w) + ' ' + (y + h - r3) + ' Q ' + (x + w) + ' ' + (y + h) + ' ' + (x + w - r3) + ' ' + (y + h) + '\n    L ' + (x + r4) + ' ' + (y + h) + ' Q ' + x + ' ' + (y + h) + ' ' + x + ' ' + (y + h - r4) + '\n    L ' + x + ' ' + (y + r1) + ' Q ' + x + ' ' + y + ' ' + (x + r1) + ' ' + y + '\n    Z\'\n  />\n  ';
      };

      var baseShapes = {
        barrel: function barrel(x, y, width, height, styleMap) {
          return '\n\n    <g ' + styleMap2Str(styleMap) + '>\n      <path d="M ' + (0 * width + x) + ' ' + (.03 * height + y) + ' L ' + (0 * width + x) + ' ' + (.97 * height + y) + ' Q ' + (0.06 * width + x) + ' ' + (height + y) + ' ' + (0.25 * width + x) + ' ' + (height + y) + '"/>\n\n      <path d="M ' + (0.25 * width + x) + ' ' + (height + y) + ' L ' + (0.75 * width + x) + ' ' + (height + y) + ' Q ' + (0.95 * width + x) + ' ' + (height + y) + ' ' + (width + x) + ' ' + (0.95 * height + y) + '"/>\n\n      <path d="M ' + (width + x) + ' ' + (.95 * height + y) + ' L ' + (width + x) + ' ' + (0.05 * height + y) + ' Q ' + (width + x) + ' ' + (0 * height + y) + ' ' + (0.75 * width + x) + ' ' + (0 * height + y) + '"/>\n\n      <path d="M ' + (0.75 * width + x) + ' ' + (0 * height + y) + ' L ' + (0.25 * width + x) + ' ' + (0 * height + y) + ' Q ' + (0.06 * width + x) + ' ' + (0 * height + y) + ' ' + (0 * width + x) + ' ' + (0.03 * height + y) + '"/>\n    </g>\n\n    ';
        },
        circle: function circle(cx, cy, r, styleMap) {
          return '<circle cx=\'' + cx + '\' cy=\'' + cy + '\' r=\'' + r + '\' ' + styleMap2Str(styleMap) + ' />';
        },
        clipPath: function clipPath(id, baseShapeFn, baseShapeFnArgs, styleMap) {
          return '\n      <defs>\n        <clipPath id=\'' + id + '\' ' + styleMap2Str(styleMap) + '>\n        ' + baseShapeFn.apply(undefined, _toConsumableArray(baseShapeFnArgs)) + '\n        </clipPath>\n      </defs>\n    ';
        },
        concaveHexagon: function concaveHexagon(x, y, width, height, styleMap) {
          return '\n    <polygon ' + styleMap2Str(styleMap) + '\n      points=\'' + (x + 0) + ', ' + (y + 0) + ', ' + (x + width) + ', ' + (y + 0) + ', ' + (x + 0.85 * width) + ', ' + (y + 0.5 * height) + ', ' + (x + width) + ', ' + (y + height) + ', ' + (x + 0) + ', ' + (y + height) + ', ' + (x + 0.15 * width) + ', ' + (y + 0.5 * height) + '\'\n    />';
        },
        cutRectangle: function cutRectangle(x, y, width, height, cornerLength, styleMap) {
          return '\n    <polygon ' + styleMap2Str(styleMap) + '\n      points=\'\n      ' + (x + 0 * width) + ' ' + (y + cornerLength) + ' ' + (x + cornerLength) + ' ' + (y + 0 * height) + ' ' + (x + width - cornerLength) + ' ' + (y + 0 * height) + ' ' + (x + width) + ' ' + (y + cornerLength) + '\n      ' + (x + width) + ' ' + (y + height - cornerLength) + ' ' + (x + width - cornerLength) + ' ' + (y + height) + ' ' + (x + cornerLength) + ' ' + (y + height) + ' ' + (x + 0 * width) + ' ' + (y + height - cornerLength) + '\n      \'\n    />\n    ';
        },
        ellipse: function ellipse(cx, cy, rx, ry, styleMap) {
          return '\n      <ellipse cx=\'' + cx + '\' cy=\'' + cy + '\' rx=\'' + rx + '\' ry=\'' + ry + '\' ' + styleMap2Str(styleMap) + ' />\n    ';
        },
        hexagon: function hexagon(x, y, width, height, styleMap) {
          return '\n    <polygon ' + styleMap2Str(styleMap) + '\n      points=\'' + (x + 0) + ', ' + (y + 0.5 * height) + ', ' + (x + 0.25 * width) + ', ' + (y + 0 * height) + ', ' + (x + 0.75 * width) + ', ' + (y + 0 * height) + ', ' + (x + width) + ', ' + (y + 0.5 * height) + ', ' + (x + 0.75 * width) + ', ' + (y + height) + ', ' + (x + 0.25 * width) + ', ' + (y + height) + '\'\n    />';
        },
        line: function line(x1, y1, x2, y2, styleMap) {
          return '<line x1=\'' + x1 + '\' y1=\'' + y1 + '\' x2=\'' + x2 + '\' y2=\'' + y2 + '\' ' + styleMap2Str(styleMap) + ' />';
        },
        rectangle: function rectangle(x, y, width, height, styleMap) {
          return baseRectangle(x, y, width, height, 0, 0, 0, 0, styleMap);
        },
        roundBottomRectangle: function roundBottomRectangle(x, y, width, height, styleMap) {
          return baseRectangle(x, y, width, height, 0, 0, .3 * height, .3 * height, styleMap);
        },
        roundRectangle: function roundRectangle(x, y, width, height, styleMap) {
          return baseRectangle(x, y, width, height, .04 * width, .04 * width, .04 * width, .04 * width, styleMap);
        },
        stadium: function stadium(x, y, width, height, styleMap) {
          var radiusRatio = .24 * Math.max(width, height);
          return baseRectangle(x, y, width, height, radiusRatio, radiusRatio, radiusRatio, radiusRatio, styleMap);
        },
        square: function square(x, y, length, styleMap) {
          return baseRectangle(x, y, length, length, 0, 0, 0, 0, styleMap);
        },
        text: function text(t, x, y, styleMap) {
          return '<text x=\'' + x + '\' y=\'' + y + '\' ' + styleMap2Str(styleMap) + '>' + t + '</text>';
        }
      };

      module.exports = baseShapes;

      /***/
    },
    /* 3 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var sbgnData = __webpack_require__(0);

      var sbgnStyle = new Map().set('unspecified entity', { w: 32, h: 32, shape: 'ellipse' }).set('simple chemical', { w: 48, h: 48, shape: 'ellipse' }).set('simple chemical multimer', { w: 48, h: 48, shape: 'ellipse' }).set('macromolecule', { w: 96, h: 48, shape: 'roundrectangle' }).set('macromolecule multimer', { w: 96, h: 48, shape: 'roundrectangle' }).set('nucleic acid feature', { w: 88, h: 56, shape: 'bottomroundrectangle' }).set('nucleic acid feature multimer', { w: 88, h: 52, shape: 'bottomroundrectangle' }).set('complex', { w: 10, h: 10, shape: 'cutrectangle' }).set('complex multimer', { w: 10, h: 10, shape: 'cutrectangle' }).set('source and sink', { w: 60, h: 60, shape: 'polygon' }).set('perturbing agent', { w: 140, h: 60, shape: 'concavehexagon' }).set('phenotype', { w: 140, h: 60, shape: 'hexagon' }).set('process', { w: 25, h: 25, shape: 'square' }).set('uncertain process', { w: 25, h: 25, shape: 'square' }).set('omitted process', { w: 25, h: 25, shape: 'square' }).set('association', { w: 25, h: 25, shape: 'ellipse' }).set('dissociation', { w: 25, h: 25, shape: 'ellipse' }).set('compartment', { w: 50, h: 50, shape: 'barrel' }).set('tag', { w: 100, h: 65, shape: 'tag' }).set('and', { w: 40, h: 40, shape: 'ellipse' }).set('or', { w: 40, h: 40, shape: 'ellipse' }).set('not', { w: 40, h: 40, shape: 'ellipse' });

      var sbgnArrowMap = new Map().set('necessary stimulation', 'triangle-cross').set('inhibition', 'tee').set('catalysis', 'circle').set('stimulation', 'triangle').set('production', 'triangle').set('modulation', 'diamond');

      var elementStyle = {
        sbgnShape: function sbgnShape(node) {
          var sbgnClass = sbgnData.sbgnClass(node).replace(' multimer', '');
          var style = sbgnStyle.get(sbgnClass);
          return style ? style.shape : 'ellipse';
        },
        sbgnArrowShape: function sbgnArrowShape(edge) {
          var sbgnClass = sbgnData.sbgnClass(edge);
          var shape = sbgnArrowMap.get(sbgnClass);
          return shape ? shape : 'none';
        },
        sbgnContent: function sbgnContent(node) {
          var sbgnClass = sbgnData.sbgnClass(node).replace(' multimer', '');
          var content = sbgnData.sbgnLabel(node);

          if (sbgnClass == 'and') {
            content = 'AND';
          }
          if (sbgnClass == 'or') {
            content = 'OR';
          }
          if (sbgnClass == 'not') {
            content = 'NOT';
          }
          if (sbgnClass == 'omitted process') {
            content = '\\\\';
          }
          if (sbgnClass == 'uncertain process') {
            content = '?';
          }

          return content;
        },
        dimensions: function dimensions(node) {
          var sbgnClass = sbgnData.sbgnClass(node);
          var dim = sbgnStyle.get(sbgnClass);
          if (dim == null) {
            throw new TypeError(sbgnClass + ' does not have a default width / height');
          }
          return dim;
        },
        width: function width(node) {
          return this.dimensions(node).w;
        },
        height: function height(node) {
          return this.dimensions(node).h;
        }
      };

      module.exports = elementStyle;

      /***/
    },
    /* 4 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
          }return arr2;
        } else {
          return Array.from(arr);
        }
      }

      var textWidth = __webpack_require__(11);

      var baseShapes = __webpack_require__(2);
      var sbgnData = __webpack_require__(0);

      var auxiliaryItems = {
        multiImgCloneMarker: function multiImgCloneMarker(x, y, width, height) {

          var cloneStyle = new Map().set('stroke', '#6A6A6A').set('stroke-width', '1').set('fill', '#D2D2D2');

          return baseShapes.rectangle(x, y, width, height, cloneStyle);
        },
        multiImgUnitOfInformation: function multiImgUnitOfInformation(x, y, width, height, uInfo) {
          var borderWidth = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 3;
          var fontSize = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 14;

          var text = uInfo.label.text;
          var uinfoRectStyle = new Map().set('stroke', '#555555').set('stroke-width', '' + borderWidth).set('fill', 'white').set('fill-opacity', 1);

          var textStyle = new Map().set('alignment-baseline', 'middle').set('font-size', fontSize + 'px').set('font-family', 'Helvetica Neue, Helvetica, sans-serif').set('text-anchor', 'middle');

          var uInfoWidth = textWidth(text, { family: textStyle.get('font-family'), size: fontSize }) + 5;

          var unitOfInformationSvg = '\n      ' + baseShapes.roundRectangle(x, y, uInfoWidth, height, uinfoRectStyle) + '\n      ' + baseShapes.text(text, x + uInfoWidth / 2, y + height / 2, textStyle) + '\n    ';

          return unitOfInformationSvg;
        },
        multiImgStateVar: function multiImgStateVar(x, y, width, height, stateVar) {
          var borderWidth = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 3;
          var fontSize = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 14;

          var stateVarStyle = new Map().set('stroke', '#555555').set('stroke-width', '' + borderWidth).set('fill', 'white').set('fill-opacity', 1);

          var textStyle = new Map().set('alignment-baseline', 'middle').set('font-size', fontSize + 'px').set('font-family', 'Helvetica Neue, Helvetica, sans-serif').set('text-anchor', 'middle');

          var tw = textWidth(sbgnData.stateVarLabel(stateVar), { family: textStyle.get('font-family'), size: fontSize }) + 10;
          var w = Math.max(tw, 30);
          var statevariableSvg = '\n      ' + baseShapes.stadium(x, y, w, height, stateVarStyle) + '\n      ' + baseShapes.text(sbgnData.stateVarLabel(stateVar), x + w / 2, y + height / 2, textStyle) + '\n    ';

          return statevariableSvg;
        },
        cloneMarker: function cloneMarker(nodeWidth, nodeHeight, shapeFn, shapeFnArgs) {
          var clipId = 'clonemarker';

          var cloneMarkerStyle = new Map().set('stroke', '#6A6A6A').set('stroke-width', '1.5').set('clip-path', 'url(#' + clipId + ')').set('fill', '#D2D2D2');

          var cloneMarkerSvg = '\n      ' + baseShapes.clipPath(clipId, baseShapes.rectangle, [0, 3 * nodeHeight / 4, nodeWidth, nodeHeight, new Map()]) + '\n      ' + shapeFn.apply(undefined, _toConsumableArray(shapeFnArgs).concat([cloneMarkerStyle])) + '\n    ';

          return cloneMarkerSvg;
        }
      };

      module.exports = auxiliaryItems;

      /***/
    },
    /* 5 */
    /***/function (module, exports, __webpack_require__) {

      /* WEBPACK VAR INJECTION */(function (global) {
        /**
        * lodash (Custom Build) <https://lodash.com/>
        * Build: `lodash modularize exports="npm" -o ./`
        * Copyright jQuery Foundation and other contributors <https://jquery.org/>
        * Released under MIT license <https://lodash.com/license>
        * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
        * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
        */

        /** Used as the `TypeError` message for "Functions" methods. */
        var FUNC_ERROR_TEXT = 'Expected a function';

        /** Used to stand-in for `undefined` hash values. */
        var HASH_UNDEFINED = '__lodash_hash_undefined__';

        /** `Object#toString` result references. */
        var funcTag = '[object Function]',
            genTag = '[object GeneratorFunction]';

        /**
         * Used to match `RegExp`
         * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
         */
        var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

        /** Used to detect host constructors (Safari). */
        var reIsHostCtor = /^\[object .+?Constructor\]$/;

        /** Detect free variable `global` from Node.js. */
        var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

        /** Detect free variable `self`. */
        var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

        /** Used as a reference to the global object. */
        var root = freeGlobal || freeSelf || Function('return this')();

        /**
         * Gets the value at `key` of `object`.
         *
         * @private
         * @param {Object} [object] The object to query.
         * @param {string} key The key of the property to get.
         * @returns {*} Returns the property value.
         */
        function getValue(object, key) {
          return object == null ? undefined : object[key];
        }

        /**
         * Checks if `value` is a host object in IE < 9.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
         */
        function isHostObject(value) {
          // Many host objects are `Object` objects that can coerce to strings
          // despite having improperly defined `toString` methods.
          var result = false;
          if (value != null && typeof value.toString != 'function') {
            try {
              result = !!(value + '');
            } catch (e) {}
          }
          return result;
        }

        /** Used for built-in method references. */
        var arrayProto = Array.prototype,
            funcProto = Function.prototype,
            objectProto = Object.prototype;

        /** Used to detect overreaching core-js shims. */
        var coreJsData = root['__core-js_shared__'];

        /** Used to detect methods masquerading as native. */
        var maskSrcKey = function () {
          var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
          return uid ? 'Symbol(src)_1.' + uid : '';
        }();

        /** Used to resolve the decompiled source of functions. */
        var funcToString = funcProto.toString;

        /** Used to check objects for own properties. */
        var hasOwnProperty = objectProto.hasOwnProperty;

        /**
         * Used to resolve the
         * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
         * of values.
         */
        var objectToString = objectProto.toString;

        /** Used to detect if a method is native. */
        var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

        /** Built-in value references. */
        var splice = arrayProto.splice;

        /* Built-in method references that are verified to be native. */
        var Map = getNative(root, 'Map'),
            nativeCreate = getNative(Object, 'create');

        /**
         * Creates a hash object.
         *
         * @private
         * @constructor
         * @param {Array} [entries] The key-value pairs to cache.
         */
        function Hash(entries) {
          var index = -1,
              length = entries ? entries.length : 0;

          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }

        /**
         * Removes all key-value entries from the hash.
         *
         * @private
         * @name clear
         * @memberOf Hash
         */
        function hashClear() {
          this.__data__ = nativeCreate ? nativeCreate(null) : {};
        }

        /**
         * Removes `key` and its value from the hash.
         *
         * @private
         * @name delete
         * @memberOf Hash
         * @param {Object} hash The hash to modify.
         * @param {string} key The key of the value to remove.
         * @returns {boolean} Returns `true` if the entry was removed, else `false`.
         */
        function hashDelete(key) {
          return this.has(key) && delete this.__data__[key];
        }

        /**
         * Gets the hash value for `key`.
         *
         * @private
         * @name get
         * @memberOf Hash
         * @param {string} key The key of the value to get.
         * @returns {*} Returns the entry value.
         */
        function hashGet(key) {
          var data = this.__data__;
          if (nativeCreate) {
            var result = data[key];
            return result === HASH_UNDEFINED ? undefined : result;
          }
          return hasOwnProperty.call(data, key) ? data[key] : undefined;
        }

        /**
         * Checks if a hash value for `key` exists.
         *
         * @private
         * @name has
         * @memberOf Hash
         * @param {string} key The key of the entry to check.
         * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
         */
        function hashHas(key) {
          var data = this.__data__;
          return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
        }

        /**
         * Sets the hash `key` to `value`.
         *
         * @private
         * @name set
         * @memberOf Hash
         * @param {string} key The key of the value to set.
         * @param {*} value The value to set.
         * @returns {Object} Returns the hash instance.
         */
        function hashSet(key, value) {
          var data = this.__data__;
          data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
          return this;
        }

        // Add methods to `Hash`.
        Hash.prototype.clear = hashClear;
        Hash.prototype['delete'] = hashDelete;
        Hash.prototype.get = hashGet;
        Hash.prototype.has = hashHas;
        Hash.prototype.set = hashSet;

        /**
         * Creates an list cache object.
         *
         * @private
         * @constructor
         * @param {Array} [entries] The key-value pairs to cache.
         */
        function ListCache(entries) {
          var index = -1,
              length = entries ? entries.length : 0;

          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }

        /**
         * Removes all key-value entries from the list cache.
         *
         * @private
         * @name clear
         * @memberOf ListCache
         */
        function listCacheClear() {
          this.__data__ = [];
        }

        /**
         * Removes `key` and its value from the list cache.
         *
         * @private
         * @name delete
         * @memberOf ListCache
         * @param {string} key The key of the value to remove.
         * @returns {boolean} Returns `true` if the entry was removed, else `false`.
         */
        function listCacheDelete(key) {
          var data = this.__data__,
              index = assocIndexOf(data, key);

          if (index < 0) {
            return false;
          }
          var lastIndex = data.length - 1;
          if (index == lastIndex) {
            data.pop();
          } else {
            splice.call(data, index, 1);
          }
          return true;
        }

        /**
         * Gets the list cache value for `key`.
         *
         * @private
         * @name get
         * @memberOf ListCache
         * @param {string} key The key of the value to get.
         * @returns {*} Returns the entry value.
         */
        function listCacheGet(key) {
          var data = this.__data__,
              index = assocIndexOf(data, key);

          return index < 0 ? undefined : data[index][1];
        }

        /**
         * Checks if a list cache value for `key` exists.
         *
         * @private
         * @name has
         * @memberOf ListCache
         * @param {string} key The key of the entry to check.
         * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
         */
        function listCacheHas(key) {
          return assocIndexOf(this.__data__, key) > -1;
        }

        /**
         * Sets the list cache `key` to `value`.
         *
         * @private
         * @name set
         * @memberOf ListCache
         * @param {string} key The key of the value to set.
         * @param {*} value The value to set.
         * @returns {Object} Returns the list cache instance.
         */
        function listCacheSet(key, value) {
          var data = this.__data__,
              index = assocIndexOf(data, key);

          if (index < 0) {
            data.push([key, value]);
          } else {
            data[index][1] = value;
          }
          return this;
        }

        // Add methods to `ListCache`.
        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype['delete'] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has = listCacheHas;
        ListCache.prototype.set = listCacheSet;

        /**
         * Creates a map cache object to store key-value pairs.
         *
         * @private
         * @constructor
         * @param {Array} [entries] The key-value pairs to cache.
         */
        function MapCache(entries) {
          var index = -1,
              length = entries ? entries.length : 0;

          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }

        /**
         * Removes all key-value entries from the map.
         *
         * @private
         * @name clear
         * @memberOf MapCache
         */
        function mapCacheClear() {
          this.__data__ = {
            'hash': new Hash(),
            'map': new (Map || ListCache)(),
            'string': new Hash()
          };
        }

        /**
         * Removes `key` and its value from the map.
         *
         * @private
         * @name delete
         * @memberOf MapCache
         * @param {string} key The key of the value to remove.
         * @returns {boolean} Returns `true` if the entry was removed, else `false`.
         */
        function mapCacheDelete(key) {
          return getMapData(this, key)['delete'](key);
        }

        /**
         * Gets the map value for `key`.
         *
         * @private
         * @name get
         * @memberOf MapCache
         * @param {string} key The key of the value to get.
         * @returns {*} Returns the entry value.
         */
        function mapCacheGet(key) {
          return getMapData(this, key).get(key);
        }

        /**
         * Checks if a map value for `key` exists.
         *
         * @private
         * @name has
         * @memberOf MapCache
         * @param {string} key The key of the entry to check.
         * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
         */
        function mapCacheHas(key) {
          return getMapData(this, key).has(key);
        }

        /**
         * Sets the map `key` to `value`.
         *
         * @private
         * @name set
         * @memberOf MapCache
         * @param {string} key The key of the value to set.
         * @param {*} value The value to set.
         * @returns {Object} Returns the map cache instance.
         */
        function mapCacheSet(key, value) {
          getMapData(this, key).set(key, value);
          return this;
        }

        // Add methods to `MapCache`.
        MapCache.prototype.clear = mapCacheClear;
        MapCache.prototype['delete'] = mapCacheDelete;
        MapCache.prototype.get = mapCacheGet;
        MapCache.prototype.has = mapCacheHas;
        MapCache.prototype.set = mapCacheSet;

        /**
         * Gets the index at which the `key` is found in `array` of key-value pairs.
         *
         * @private
         * @param {Array} array The array to inspect.
         * @param {*} key The key to search for.
         * @returns {number} Returns the index of the matched value, else `-1`.
         */
        function assocIndexOf(array, key) {
          var length = array.length;
          while (length--) {
            if (eq(array[length][0], key)) {
              return length;
            }
          }
          return -1;
        }

        /**
         * The base implementation of `_.isNative` without bad shim checks.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a native function,
         *  else `false`.
         */
        function baseIsNative(value) {
          if (!isObject(value) || isMasked(value)) {
            return false;
          }
          var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
          return pattern.test(toSource(value));
        }

        /**
         * Gets the data for `map`.
         *
         * @private
         * @param {Object} map The map to query.
         * @param {string} key The reference key.
         * @returns {*} Returns the map data.
         */
        function getMapData(map, key) {
          var data = map.__data__;
          return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
        }

        /**
         * Gets the native function at `key` of `object`.
         *
         * @private
         * @param {Object} object The object to query.
         * @param {string} key The key of the method to get.
         * @returns {*} Returns the function if it's native, else `undefined`.
         */
        function getNative(object, key) {
          var value = getValue(object, key);
          return baseIsNative(value) ? value : undefined;
        }

        /**
         * Checks if `value` is suitable for use as unique object key.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
         */
        function isKeyable(value) {
          var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
          return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
        }

        /**
         * Checks if `func` has its source masked.
         *
         * @private
         * @param {Function} func The function to check.
         * @returns {boolean} Returns `true` if `func` is masked, else `false`.
         */
        function isMasked(func) {
          return !!maskSrcKey && maskSrcKey in func;
        }

        /**
         * Converts `func` to its source code.
         *
         * @private
         * @param {Function} func The function to process.
         * @returns {string} Returns the source code.
         */
        function toSource(func) {
          if (func != null) {
            try {
              return funcToString.call(func);
            } catch (e) {}
            try {
              return func + '';
            } catch (e) {}
          }
          return '';
        }

        /**
         * Creates a function that memoizes the result of `func`. If `resolver` is
         * provided, it determines the cache key for storing the result based on the
         * arguments provided to the memoized function. By default, the first argument
         * provided to the memoized function is used as the map cache key. The `func`
         * is invoked with the `this` binding of the memoized function.
         *
         * **Note:** The cache is exposed as the `cache` property on the memoized
         * function. Its creation may be customized by replacing the `_.memoize.Cache`
         * constructor with one whose instances implement the
         * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
         * method interface of `delete`, `get`, `has`, and `set`.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Function
         * @param {Function} func The function to have its output memoized.
         * @param {Function} [resolver] The function to resolve the cache key.
         * @returns {Function} Returns the new memoized function.
         * @example
         *
         * var object = { 'a': 1, 'b': 2 };
         * var other = { 'c': 3, 'd': 4 };
         *
         * var values = _.memoize(_.values);
         * values(object);
         * // => [1, 2]
         *
         * values(other);
         * // => [3, 4]
         *
         * object.a = 2;
         * values(object);
         * // => [1, 2]
         *
         * // Modify the result cache.
         * values.cache.set(object, ['a', 'b']);
         * values(object);
         * // => ['a', 'b']
         *
         * // Replace `_.memoize.Cache`.
         * _.memoize.Cache = WeakMap;
         */
        function memoize(func, resolver) {
          if (typeof func != 'function' || resolver && typeof resolver != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          var memoized = function memoized() {
            var args = arguments,
                key = resolver ? resolver.apply(this, args) : args[0],
                cache = memoized.cache;

            if (cache.has(key)) {
              return cache.get(key);
            }
            var result = func.apply(this, args);
            memoized.cache = cache.set(key, result);
            return result;
          };
          memoized.cache = new (memoize.Cache || MapCache)();
          return memoized;
        }

        // Assign cache to `_.memoize`.
        memoize.Cache = MapCache;

        /**
         * Performs a
         * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
         * comparison between two values to determine if they are equivalent.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to compare.
         * @param {*} other The other value to compare.
         * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
         * @example
         *
         * var object = { 'a': 1 };
         * var other = { 'a': 1 };
         *
         * _.eq(object, object);
         * // => true
         *
         * _.eq(object, other);
         * // => false
         *
         * _.eq('a', 'a');
         * // => true
         *
         * _.eq('a', Object('a'));
         * // => false
         *
         * _.eq(NaN, NaN);
         * // => true
         */
        function eq(value, other) {
          return value === other || value !== value && other !== other;
        }

        /**
         * Checks if `value` is classified as a `Function` object.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a function, else `false`.
         * @example
         *
         * _.isFunction(_);
         * // => true
         *
         * _.isFunction(/abc/);
         * // => false
         */
        function isFunction(value) {
          // The use of `Object#toString` avoids issues with the `typeof` operator
          // in Safari 8-9 which returns 'object' for typed array and other constructors.
          var tag = isObject(value) ? objectToString.call(value) : '';
          return tag == funcTag || tag == genTag;
        }

        /**
         * Checks if `value` is the
         * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
         * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an object, else `false`.
         * @example
         *
         * _.isObject({});
         * // => true
         *
         * _.isObject([1, 2, 3]);
         * // => true
         *
         * _.isObject(_.noop);
         * // => true
         *
         * _.isObject(null);
         * // => false
         */
        function isObject(value) {
          var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
          return !!value && (type == 'object' || type == 'function');
        }

        module.exports = memoize;

        /* WEBPACK VAR INJECTION */
      }).call(exports, __webpack_require__(9));

      /***/
    },
    /* 6 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var sbgnStyleSheet = __webpack_require__(7);

      var defaultOptions = {};

      module.exports = function (cytoscape) {
        return sbgnStyleSheet(cytoscape);
      };

      /***/
    },
    /* 7 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var elementStyle = __webpack_require__(3);
      var sbgnsvg = __webpack_require__(8);

      var sbgnStyleSheet = function sbgnStyleSheet(cytoscape) {

        return cytoscape.stylesheet()
        // general node style
        .selector('node').css({
          'shape': function shape(node) {
            return elementStyle.sbgnShape(node);
          },
          'content': function content(node) {
            return elementStyle.sbgnContent(node);
          },
          'font-size': 20,
          'width': function width(node) {
            return elementStyle.width(node);
          },
          'height': function height(node) {
            return elementStyle.height(node);
          },
          'text-valign': 'center',
          'text-halign': 'center',
          'border-width': 1.5,
          'border-color': '#555',
          'background-color': '#f6f6f6',
          'text-opacity': 1,
          'opacity': 1,
          'text-outline-color': 'white',
          'text-outline-opacity': 1,
          'text-outline-width': 0.75
        }).selector('node:selected').css({
          'background-color': '#d67614',
          'target-arrow-color': '#000',
          'text-outline-color': '#000'
        }).selector('node:active').css({
          'overlay-color': '#d67614',
          'overlay-padding': '14'
        })

        // draw sbgn specific styling (auxiliary items, clonemarker, etc.)
        .selector('\n          node[class="unspecified entity"],\n          node[class="simple chemical"], node[class="simple chemical multimer"],\n          node[class="macromolecule"], node[class="macromolecule multimer"],\n          node[class="nucleic acid feature"], node[class="nucleic acid feature multimer"],\n          node[class="perturbing agent"],\n          node[class="phenotype"],\n          node[class="complex"], node[class="complex multimer"], node[class="compartment"]\n        ').css({
          'background-image': function backgroundImage(node) {
            return sbgnsvg.draw(node).bgImage;
          },
          'background-width': function backgroundWidth(node) {
            return sbgnsvg.draw(node).bgWidth;
          },
          'background-position-x': function backgroundPositionX(node) {
            return sbgnsvg.draw(node).bgPosX;
          },
          'background-position-y': function backgroundPositionY(node) {
            return sbgnsvg.draw(node).bgPosY;
          },
          'background-fit': function backgroundFit(node) {
            return sbgnsvg.draw(node).bgFit;
          },
          'background-clip': function backgroundClip(node) {
            return sbgnsvg.draw(node).bgClip;
          },
          'padding': function padding(node) {
            return sbgnsvg.draw(node).padding;
          },
          'border-width': function borderWidth(node) {
            return sbgnsvg.draw(node).borderWidth;
          }
        }).selector('\n          node[class="simple chemical multimer"],\n          node[class="macromolecule multimer"],\n          node[class="nucleic acid feature multimer"],\n          node[class="complex multimer"]\n        ').css({
          'ghost': 'yes',
          'ghost-opacity': 1
        }).selector('\n          node[class="macromolecule multimer"],\n          node[class="nucleic acid feature multimer"]\n        ').css({
          'ghost-offset-x': 12,
          'ghost-offset-y': 12
        }).selector('\n          node[class="simple chemical multimer"]\n        ').css({
          'ghost-offset-x': 5,
          'ghost-offset-y': 5
        }).selector('\n          node[class="complex multimer"]\n        ').css({
          'ghost-offset-x': 16,
          'ghost-offset-y': 16
        })

        // compound node specific style
        .selector('node[class="complex"], node[class="complex multimer"], node[class="compartment"]').css({
          'compound-sizing-wrt-labels': 'exclude',
          'text-valign': 'bottom',
          'text-halign': 'center'
        })

        // process node specific style
        .selector('node[class="association"], node[class="dissociation"]').css({
          'background-opacity': 1
        }).selector('node[class="association"]').css({
          'background-color': '#6B6B6B'
        })

        // source and sink and dissociation are drawn differently because
        // of their unique shape
        .selector('node[class="source and sink"]').css({
          'background-image': function backgroundImage(node) {
            return sbgnsvg.draw(node);
          },
          'background-fit': 'none',
          'background-width': '100%',
          'background-height': '100%',
          'background-clip': 'none',
          'background-repeat': 'no-repeat',
          'border-width': 0,
          'shape-polygon-points': '-0.86, 0.5, -0.75, 0.65, -1, 0.95, -0.95, 1, -0.65, 0.75, -0.5, 0.86, 0, 1, 0.5, 0.86, 0.71, 0.71, 0.86, 0.5, 1, 0, 0.86, -0.5, 0.75, -0.65, 1, -0.95, 0.95, -1, 0.65, -0.75, 0.5, -0.86, 0, -1, -0.5, -0.86, -0.71, -0.71, -0.86, -0.5, -1, 0'
        })

        // source and sink and dissociation are drawn differently because
        // of their unique shape
        .selector('node[class="dissociation"]').css({
          'background-image': function backgroundImage(node) {
            return sbgnsvg.draw(node);
          },
          'background-fit': 'none',
          'background-width': '100%',
          'background-height': '100%',
          'background-clip': 'none',
          'background-repeat': 'no-repeat',
          'border-width': 0
        })

        // edge styling
        .selector('edge').css({
          'arrow-scale': 1.75,
          'curve-style': 'bezier',
          'line-color': '#555',
          'target-arrow-fill': 'hollow',
          'source-arrow-fill': 'hollow',
          'width': 1.5,
          'target-arrow-color': '#555',
          'source-arrow-color': '#555',
          'text-border-color': '#555',
          'color': '#555'
        }).selector('edge:selected').css({
          'color': '#d67614',
          'line-color': '#d67614',
          'text-border-color': '#d67614',
          'source-arrow-color': '#d67614',
          'target-arrow-color': '#d67614'
        }).selector('edge:active').css({
          'background-opacity': 0.7, 'overlay-color': '#d67614',
          'overlay-padding': '8'
        }).selector('edge[cardinality > 0]').css({
          'text-background-shape': 'rectangle',
          'text-border-opacity': '1',
          'text-border-width': '1',
          'text-background-color': 'white',
          'text-background-opacity': '1'
        }).selector('edge[class="consumption"][cardinality > 0], edge[class="production"][cardinality > 0]').css({
          'source-label': function sourceLabel(edge) {
            return '' + edge.data('cardinality');
          },
          'source-text-offset': 10
        }).selector('edge[class]').css({
          'target-arrow-shape': function targetArrowShape(edge) {
            return elementStyle.sbgnArrowShape(edge);
          },
          'source-arrow-shape': 'none'
        }).selector('edge[class="inhibition"]').css({
          'target-arrow-fill': 'filled'
        }).selector('edge[class="production"]').css({
          'target-arrow-fill': 'filled'
        })

        // core
        .selector('core').css({
          'selection-box-color': '#d67614',
          'selection-box-opacity': '0.2', 'selection-box-border-color': '#d67614'
        });
      };

      module.exports = sbgnStyleSheet;

      /***/
    },
    /* 8 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var memoize = __webpack_require__(5);

      var containerNodes = __webpack_require__(10);
      var entityPoolNodes = __webpack_require__(17);
      var processNodes = __webpack_require__(18);

      var sbgnData = __webpack_require__(0);

      var cacheKeyFn = function cacheKeyFn(node) {
        return '' + JSON.stringify(node.id());
      };

      var sbgnNodeShapeMap = new Map()
      // process nodes
      .set('dissociation', memoize(processNodes.dissociation, cacheKeyFn)).set('phenotype', memoize(processNodes.phenotype, cacheKeyFn))

      // entity pool nodes
      .set('source and sink', memoize(entityPoolNodes.sourceAndSink, cacheKeyFn)).set('unspecified entity', memoize(entityPoolNodes.unspecifiedEntity, cacheKeyFn)).set('simple chemical', memoize(entityPoolNodes.simpleChemical, cacheKeyFn)).set('macromolecule', memoize(entityPoolNodes.macromolecule, cacheKeyFn)).set('nucleic acid feature', memoize(entityPoolNodes.nucleicAcidFeature, cacheKeyFn)).set('complex', memoize(entityPoolNodes.complex, cacheKeyFn)).set('perturbing agent', memoize(entityPoolNodes.perturbingAgent, cacheKeyFn))

      // container nodes
      .set('compartment', memoize(containerNodes.compartment, cacheKeyFn));

      var draw = function draw(node) {
        var sbgnClass = sbgnData.sbgnClass(node).replace(' multimer', '');
        var shapeFn = sbgnNodeShapeMap.get(sbgnClass);
        if (shapeFn == null) {
          throw new TypeError(sbgnClass + ' does not have a shape implementation');
        }
        return shapeFn(node);
      };

      module.exports = {
        draw: draw
      };

      /***/
    },
    /* 9 */
    /***/function (module, exports) {

      var g;

      // This works in non-strict mode
      g = function () {
        return this;
      }();

      try {
        // This works if eval is allowed (see CSP)
        g = g || Function("return this")() || (1, eval)("this");
      } catch (e) {
        // This works if the window reference is available
        if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === "object") g = window;
      }

      // g can still be undefined, but nothing to do about it...
      // We return undefined, instead of nothing here, so it's
      // easier to handle this case. if(!global) { ...}

      module.exports = g;

      /***/
    },
    /* 10 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var svgStr = __webpack_require__(1).svgStr;
      var sbgnData = __webpack_require__(0);
      var memoize = __webpack_require__(5);

      var auxiliaryItems = __webpack_require__(4);
      var baseShapes = __webpack_require__(2);

      var containerNodes = {
        compartment: function compartment(node) {
          var auxItemWidth = 60;
          var auxItemHeight = 40;
          var uInfos = sbgnData.getUnitInfos(node);

          var style = new Map().set('stroke', '#555555').set('stroke-width', '6');

          var uInfoSvg = svgStr(uInfos.length > 0 ? auxiliaryItems.multiImgUnitOfInformation(2, 0, auxItemWidth - 5, auxItemHeight - 3, uInfos[0]) : '', auxItemWidth, auxItemHeight);

          var lineSvg = svgStr(uInfos.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight);

          return {
            bgImage: [lineSvg, uInfoSvg],
            bgWidth: ['100%'],
            bgPosX: ['0%', '25%'],
            bgPosY: ['19px', '0%'],
            bgFit: ['contain', 'none'],
            bgClip: 'node',
            padding: '38px',
            borderWidth: '4'
          };
        }
      };

      module.exports = containerNodes;

      /***/
    },
    /* 11 */
    /***/function (module, exports, __webpack_require__) {

      var util = __webpack_require__(12);
      var extend = __webpack_require__(16);

      var supported = function supported() {
        if (typeof document === 'undefined' || typeof document.createElement !== 'function') return false;

        var canvas = document.createElement('canvas');
        if (typeof canvas.getContext !== 'function') return false;

        var context = canvas.getContext('2d');
        return !!context && typeof context.measureText === 'function';
      };

      var initialize = function initialize() {
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');

        var width = function width(str, options) {
          options = extend({
            style: 'normal',
            variant: 'normal',
            weight: 'normal',
            size: 'medium',
            family: 'sans-serif',
            align: 'start',
            baseline: 'alphabetic'
          }, options);

          var size = options.size;
          if (typeof size === 'number') size = size + 'px';

          context.font = util.format('%s %s %s %s %s', options.style, options.variant, options.weight, size, options.family);
          context.textAlign = options.align;
          context.textBaseline = options.baseline;

          return context.measureText(str).width;
        };

        width.supported = true;
        return width;
      };

      module.exports = supported() ? initialize() : function () {
        var width = function width() {
          return 0;
        };

        width.supported = false;
        return width;
      }();

      /***/
    },
    /* 12 */
    /***/function (module, exports, __webpack_require__) {

      /* WEBPACK VAR INJECTION */(function (process) {
        // Copyright Joyent, Inc. and other Node contributors.
        //
        // Permission is hereby granted, free of charge, to any person obtaining a
        // copy of this software and associated documentation files (the
        // "Software"), to deal in the Software without restriction, including
        // without limitation the rights to use, copy, modify, merge, publish,
        // distribute, sublicense, and/or sell copies of the Software, and to permit
        // persons to whom the Software is furnished to do so, subject to the
        // following conditions:
        //
        // The above copyright notice and this permission notice shall be included
        // in all copies or substantial portions of the Software.
        //
        // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
        // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
        // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
        // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
        // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
        // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
        // USE OR OTHER DEALINGS IN THE SOFTWARE.

        var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(obj) {
          var keys = Object.keys(obj);
          var descriptors = {};
          for (var i = 0; i < keys.length; i++) {
            descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
          }
          return descriptors;
        };

        var formatRegExp = /%[sdj%]/g;
        exports.format = function (f) {
          if (!isString(f)) {
            var objects = [];
            for (var i = 0; i < arguments.length; i++) {
              objects.push(inspect(arguments[i]));
            }
            return objects.join(' ');
          }

          var i = 1;
          var args = arguments;
          var len = args.length;
          var str = String(f).replace(formatRegExp, function (x) {
            if (x === '%%') return '%';
            if (i >= len) return x;
            switch (x) {
              case '%s':
                return String(args[i++]);
              case '%d':
                return Number(args[i++]);
              case '%j':
                try {
                  return JSON.stringify(args[i++]);
                } catch (_) {
                  return '[Circular]';
                }
              default:
                return x;
            }
          });
          for (var x = args[i]; i < len; x = args[++i]) {
            if (isNull(x) || !isObject(x)) {
              str += ' ' + x;
            } else {
              str += ' ' + inspect(x);
            }
          }
          return str;
        };

        // Mark that a method should not be used.
        // Returns a modified function which warns once by default.
        // If --no-deprecation is set, then it is a no-op.
        exports.deprecate = function (fn, msg) {
          if (typeof process !== 'undefined' && process.noDeprecation === true) {
            return fn;
          }

          // Allow for deprecating things in the process of starting up.
          if (typeof process === 'undefined') {
            return function () {
              return exports.deprecate(fn, msg).apply(this, arguments);
            };
          }

          var warned = false;
          function deprecated() {
            if (!warned) {
              if (process.throwDeprecation) {
                throw new Error(msg);
              } else if (process.traceDeprecation) {
                console.trace(msg);
              } else {
                console.error(msg);
              }
              warned = true;
            }
            return fn.apply(this, arguments);
          }

          return deprecated;
        };

        var debugs = {};
        var debugEnviron;
        exports.debuglog = function (set) {
          if (isUndefined(debugEnviron)) debugEnviron = process.env.NODE_DEBUG || '';
          set = set.toUpperCase();
          if (!debugs[set]) {
            if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
              var pid = process.pid;
              debugs[set] = function () {
                var msg = exports.format.apply(exports, arguments);
                console.error('%s %d: %s', set, pid, msg);
              };
            } else {
              debugs[set] = function () {};
            }
          }
          return debugs[set];
        };

        /**
         * Echos the value of a value. Trys to print the value out
         * in the best way possible given the different types.
         *
         * @param {Object} obj The object to print out.
         * @param {Object} opts Optional options object that alters the output.
         */
        /* legacy: obj, showHidden, depth, colors*/
        function inspect(obj, opts) {
          // default options
          var ctx = {
            seen: [],
            stylize: stylizeNoColor
          };
          // legacy...
          if (arguments.length >= 3) ctx.depth = arguments[2];
          if (arguments.length >= 4) ctx.colors = arguments[3];
          if (isBoolean(opts)) {
            // legacy...
            ctx.showHidden = opts;
          } else if (opts) {
            // got an "options" object
            exports._extend(ctx, opts);
          }
          // set default options
          if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
          if (isUndefined(ctx.depth)) ctx.depth = 2;
          if (isUndefined(ctx.colors)) ctx.colors = false;
          if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
          if (ctx.colors) ctx.stylize = stylizeWithColor;
          return formatValue(ctx, obj, ctx.depth);
        }
        exports.inspect = inspect;

        // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
        inspect.colors = {
          'bold': [1, 22],
          'italic': [3, 23],
          'underline': [4, 24],
          'inverse': [7, 27],
          'white': [37, 39],
          'grey': [90, 39],
          'black': [30, 39],
          'blue': [34, 39],
          'cyan': [36, 39],
          'green': [32, 39],
          'magenta': [35, 39],
          'red': [31, 39],
          'yellow': [33, 39]
        };

        // Don't use 'blue' not visible on cmd.exe
        inspect.styles = {
          'special': 'cyan',
          'number': 'yellow',
          'boolean': 'yellow',
          'undefined': 'grey',
          'null': 'bold',
          'string': 'green',
          'date': 'magenta',
          // "name": intentionally not styling
          'regexp': 'red'
        };

        function stylizeWithColor(str, styleType) {
          var style = inspect.styles[styleType];

          if (style) {
            return '\x1B[' + inspect.colors[style][0] + 'm' + str + '\x1B[' + inspect.colors[style][1] + 'm';
          } else {
            return str;
          }
        }

        function stylizeNoColor(str, styleType) {
          return str;
        }

        function arrayToHash(array) {
          var hash = {};

          array.forEach(function (val, idx) {
            hash[val] = true;
          });

          return hash;
        }

        function formatValue(ctx, value, recurseTimes) {
          // Provide a hook for user-specified inspect functions.
          // Check that value is an object with an inspect function on it
          if (ctx.customInspect && value && isFunction(value.inspect) &&
          // Filter out the util module, it's inspect function is special
          value.inspect !== exports.inspect &&
          // Also filter out any prototype objects using the circular check.
          !(value.constructor && value.constructor.prototype === value)) {
            var ret = value.inspect(recurseTimes, ctx);
            if (!isString(ret)) {
              ret = formatValue(ctx, ret, recurseTimes);
            }
            return ret;
          }

          // Primitive types cannot have properties
          var primitive = formatPrimitive(ctx, value);
          if (primitive) {
            return primitive;
          }

          // Look up the keys of the object.
          var keys = Object.keys(value);
          var visibleKeys = arrayToHash(keys);

          if (ctx.showHidden) {
            keys = Object.getOwnPropertyNames(value);
          }

          // IE doesn't make error fields non-enumerable
          // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
          if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
            return formatError(value);
          }

          // Some type of object without properties can be shortcutted.
          if (keys.length === 0) {
            if (isFunction(value)) {
              var name = value.name ? ': ' + value.name : '';
              return ctx.stylize('[Function' + name + ']', 'special');
            }
            if (isRegExp(value)) {
              return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
            }
            if (isDate(value)) {
              return ctx.stylize(Date.prototype.toString.call(value), 'date');
            }
            if (isError(value)) {
              return formatError(value);
            }
          }

          var base = '',
              array = false,
              braces = ['{', '}'];

          // Make Array say that they are Array
          if (isArray(value)) {
            array = true;
            braces = ['[', ']'];
          }

          // Make functions say that they are functions
          if (isFunction(value)) {
            var n = value.name ? ': ' + value.name : '';
            base = ' [Function' + n + ']';
          }

          // Make RegExps say that they are RegExps
          if (isRegExp(value)) {
            base = ' ' + RegExp.prototype.toString.call(value);
          }

          // Make dates with properties first say the date
          if (isDate(value)) {
            base = ' ' + Date.prototype.toUTCString.call(value);
          }

          // Make error with message first say the error
          if (isError(value)) {
            base = ' ' + formatError(value);
          }

          if (keys.length === 0 && (!array || value.length == 0)) {
            return braces[0] + base + braces[1];
          }

          if (recurseTimes < 0) {
            if (isRegExp(value)) {
              return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
            } else {
              return ctx.stylize('[Object]', 'special');
            }
          }

          ctx.seen.push(value);

          var output;
          if (array) {
            output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
          } else {
            output = keys.map(function (key) {
              return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
            });
          }

          ctx.seen.pop();

          return reduceToSingleString(output, base, braces);
        }

        function formatPrimitive(ctx, value) {
          if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');
          if (isString(value)) {
            var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
            return ctx.stylize(simple, 'string');
          }
          if (isNumber(value)) return ctx.stylize('' + value, 'number');
          if (isBoolean(value)) return ctx.stylize('' + value, 'boolean');
          // For some reason typeof null is "object", so special case here.
          if (isNull(value)) return ctx.stylize('null', 'null');
        }

        function formatError(value) {
          return '[' + Error.prototype.toString.call(value) + ']';
        }

        function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
          var output = [];
          for (var i = 0, l = value.length; i < l; ++i) {
            if (hasOwnProperty(value, String(i))) {
              output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
            } else {
              output.push('');
            }
          }
          keys.forEach(function (key) {
            if (!key.match(/^\d+$/)) {
              output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
            }
          });
          return output;
        }

        function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
          var name, str, desc;
          desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
          if (desc.get) {
            if (desc.set) {
              str = ctx.stylize('[Getter/Setter]', 'special');
            } else {
              str = ctx.stylize('[Getter]', 'special');
            }
          } else {
            if (desc.set) {
              str = ctx.stylize('[Setter]', 'special');
            }
          }
          if (!hasOwnProperty(visibleKeys, key)) {
            name = '[' + key + ']';
          }
          if (!str) {
            if (ctx.seen.indexOf(desc.value) < 0) {
              if (isNull(recurseTimes)) {
                str = formatValue(ctx, desc.value, null);
              } else {
                str = formatValue(ctx, desc.value, recurseTimes - 1);
              }
              if (str.indexOf('\n') > -1) {
                if (array) {
                  str = str.split('\n').map(function (line) {
                    return '  ' + line;
                  }).join('\n').substr(2);
                } else {
                  str = '\n' + str.split('\n').map(function (line) {
                    return '   ' + line;
                  }).join('\n');
                }
              }
            } else {
              str = ctx.stylize('[Circular]', 'special');
            }
          }
          if (isUndefined(name)) {
            if (array && key.match(/^\d+$/)) {
              return str;
            }
            name = JSON.stringify('' + key);
            if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
              name = name.substr(1, name.length - 2);
              name = ctx.stylize(name, 'name');
            } else {
              name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
              name = ctx.stylize(name, 'string');
            }
          }

          return name + ': ' + str;
        }

        function reduceToSingleString(output, base, braces) {
          var numLinesEst = 0;
          var length = output.reduce(function (prev, cur) {
            numLinesEst++;
            if (cur.indexOf('\n') >= 0) numLinesEst++;
            return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
          }, 0);

          if (length > 60) {
            return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
          }

          return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
        }

        // NOTE: These type checking functions intentionally don't use `instanceof`
        // because it is fragile and can be easily faked with `Object.create()`.
        function isArray(ar) {
          return Array.isArray(ar);
        }
        exports.isArray = isArray;

        function isBoolean(arg) {
          return typeof arg === 'boolean';
        }
        exports.isBoolean = isBoolean;

        function isNull(arg) {
          return arg === null;
        }
        exports.isNull = isNull;

        function isNullOrUndefined(arg) {
          return arg == null;
        }
        exports.isNullOrUndefined = isNullOrUndefined;

        function isNumber(arg) {
          return typeof arg === 'number';
        }
        exports.isNumber = isNumber;

        function isString(arg) {
          return typeof arg === 'string';
        }
        exports.isString = isString;

        function isSymbol(arg) {
          return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'symbol';
        }
        exports.isSymbol = isSymbol;

        function isUndefined(arg) {
          return arg === void 0;
        }
        exports.isUndefined = isUndefined;

        function isRegExp(re) {
          return isObject(re) && objectToString(re) === '[object RegExp]';
        }
        exports.isRegExp = isRegExp;

        function isObject(arg) {
          return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && arg !== null;
        }
        exports.isObject = isObject;

        function isDate(d) {
          return isObject(d) && objectToString(d) === '[object Date]';
        }
        exports.isDate = isDate;

        function isError(e) {
          return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
        }
        exports.isError = isError;

        function isFunction(arg) {
          return typeof arg === 'function';
        }
        exports.isFunction = isFunction;

        function isPrimitive(arg) {
          return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'symbol' || // ES6 symbol
          typeof arg === 'undefined';
        }
        exports.isPrimitive = isPrimitive;

        exports.isBuffer = __webpack_require__(14);

        function objectToString(o) {
          return Object.prototype.toString.call(o);
        }

        function pad(n) {
          return n < 10 ? '0' + n.toString(10) : n.toString(10);
        }

        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        // 26 Feb 16:19:34
        function timestamp() {
          var d = new Date();
          var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
          return [d.getDate(), months[d.getMonth()], time].join(' ');
        }

        // log is just a thin wrapper to console.log that prepends a timestamp
        exports.log = function () {
          console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
        };

        /**
         * Inherit the prototype methods from one constructor into another.
         *
         * The Function.prototype.inherits from lang.js rewritten as a standalone
         * function (not on Function.prototype). NOTE: If this file is to be loaded
         * during bootstrapping this function needs to be rewritten using some native
         * functions as prototype setup using normal JavaScript does not work as
         * expected during bootstrapping (see mirror.js in r114903).
         *
         * @param {function} ctor Constructor function which needs to inherit the
         *     prototype.
         * @param {function} superCtor Constructor function to inherit prototype from.
         */
        exports.inherits = __webpack_require__(15);

        exports._extend = function (origin, add) {
          // Don't do anything if add isn't an object
          if (!add || !isObject(add)) return origin;

          var keys = Object.keys(add);
          var i = keys.length;
          while (i--) {
            origin[keys[i]] = add[keys[i]];
          }
          return origin;
        };

        function hasOwnProperty(obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        }

        var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

        exports.promisify = function promisify(original) {
          if (typeof original !== 'function') throw new TypeError('The "original" argument must be of type Function');

          if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
            var fn = original[kCustomPromisifiedSymbol];
            if (typeof fn !== 'function') {
              throw new TypeError('The "util.promisify.custom" argument must be of type Function');
            }
            Object.defineProperty(fn, kCustomPromisifiedSymbol, {
              value: fn, enumerable: false, writable: false, configurable: true
            });
            return fn;
          }

          function fn() {
            var promiseResolve, promiseReject;
            var promise = new Promise(function (resolve, reject) {
              promiseResolve = resolve;
              promiseReject = reject;
            });

            var args = [];
            for (var i = 0; i < arguments.length; i++) {
              args.push(arguments[i]);
            }
            args.push(function (err, value) {
              if (err) {
                promiseReject(err);
              } else {
                promiseResolve(value);
              }
            });

            try {
              original.apply(this, args);
            } catch (err) {
              promiseReject(err);
            }

            return promise;
          }

          Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

          if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
            value: fn, enumerable: false, writable: false, configurable: true
          });
          return Object.defineProperties(fn, getOwnPropertyDescriptors(original));
        };

        exports.promisify.custom = kCustomPromisifiedSymbol;

        function callbackifyOnRejected(reason, cb) {
          // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
          // Because `null` is a special error value in callbacks which means "no error
          // occurred", we error-wrap so the callback consumer can distinguish between
          // "the promise rejected with null" or "the promise fulfilled with undefined".
          if (!reason) {
            var newReason = new Error('Promise was rejected with a falsy value');
            newReason.reason = reason;
            reason = newReason;
          }
          return cb(reason);
        }

        function callbackify(original) {
          if (typeof original !== 'function') {
            throw new TypeError('The "original" argument must be of type Function');
          }

          // We DO NOT return the promise as it gives the user a false sense that
          // the promise is actually somehow related to the callback's execution
          // and that the callback throwing will reject the promise.
          function callbackified() {
            var args = [];
            for (var i = 0; i < arguments.length; i++) {
              args.push(arguments[i]);
            }

            var maybeCb = args.pop();
            if (typeof maybeCb !== 'function') {
              throw new TypeError('The last argument must be of type Function');
            }
            var self = this;
            var cb = function cb() {
              return maybeCb.apply(self, arguments);
            };
            // In true node style we process the callback on `nextTick` with all the
            // implications (stack, `uncaughtException`, `async_hooks`)
            original.apply(this, args).then(function (ret) {
              process.nextTick(cb, null, ret);
            }, function (rej) {
              process.nextTick(callbackifyOnRejected, rej, cb);
            });
          }

          Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
          Object.defineProperties(callbackified, getOwnPropertyDescriptors(original));
          return callbackified;
        }
        exports.callbackify = callbackify;

        /* WEBPACK VAR INJECTION */
      }).call(exports, __webpack_require__(13));

      /***/
    },
    /* 13 */
    /***/function (module, exports) {

      // shim for using process in browser
      var process = module.exports = {};

      // cached from whatever global is present so that test runners that stub it
      // don't break things.  But we need to wrap it in a try catch in case it is
      // wrapped in strict mode code which doesn't define any globals.  It's inside a
      // function because try/catches deoptimize in certain engines.

      var cachedSetTimeout;
      var cachedClearTimeout;

      function defaultSetTimout() {
        throw new Error('setTimeout has not been defined');
      }
      function defaultClearTimeout() {
        throw new Error('clearTimeout has not been defined');
      }
      (function () {
        try {
          if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
          } else {
            cachedSetTimeout = defaultSetTimout;
          }
        } catch (e) {
          cachedSetTimeout = defaultSetTimout;
        }
        try {
          if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
          } else {
            cachedClearTimeout = defaultClearTimeout;
          }
        } catch (e) {
          cachedClearTimeout = defaultClearTimeout;
        }
      })();
      function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
          //normal enviroments in sane situations
          return setTimeout(fun, 0);
        }
        // if setTimeout wasn't available but was latter defined
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
        }
        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedSetTimeout(fun, 0);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
          }
        }
      }
      function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
          //normal enviroments in sane situations
          return clearTimeout(marker);
        }
        // if clearTimeout wasn't available but was latter defined
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
        }
        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedClearTimeout(marker);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
          }
        }
      }
      var queue = [];
      var draining = false;
      var currentQueue;
      var queueIndex = -1;

      function cleanUpNextTick() {
        if (!draining || !currentQueue) {
          return;
        }
        draining = false;
        if (currentQueue.length) {
          queue = currentQueue.concat(queue);
        } else {
          queueIndex = -1;
        }
        if (queue.length) {
          drainQueue();
        }
      }

      function drainQueue() {
        if (draining) {
          return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;

        var len = queue.length;
        while (len) {
          currentQueue = queue;
          queue = [];
          while (++queueIndex < len) {
            if (currentQueue) {
              currentQueue[queueIndex].run();
            }
          }
          queueIndex = -1;
          len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
      }

      process.nextTick = function (fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
          }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
        }
      };

      // v8 likes predictible objects
      function Item(fun, array) {
        this.fun = fun;
        this.array = array;
      }
      Item.prototype.run = function () {
        this.fun.apply(null, this.array);
      };
      process.title = 'browser';
      process.browser = true;
      process.env = {};
      process.argv = [];
      process.version = ''; // empty string to avoid regexp issues
      process.versions = {};

      function noop() {}

      process.on = noop;
      process.addListener = noop;
      process.once = noop;
      process.off = noop;
      process.removeListener = noop;
      process.removeAllListeners = noop;
      process.emit = noop;
      process.prependListener = noop;
      process.prependOnceListener = noop;

      process.listeners = function (name) {
        return [];
      };

      process.binding = function (name) {
        throw new Error('process.binding is not supported');
      };

      process.cwd = function () {
        return '/';
      };
      process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
      };
      process.umask = function () {
        return 0;
      };

      /***/
    },
    /* 14 */
    /***/function (module, exports) {

      module.exports = function isBuffer(arg) {
        return arg && (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
      };

      /***/
    },
    /* 15 */
    /***/function (module, exports) {

      if (typeof Object.create === 'function') {
        // implementation from standard node.js 'util' module
        module.exports = function inherits(ctor, superCtor) {
          ctor.super_ = superCtor;
          ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
              value: ctor,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
        };
      } else {
        // old school shim for old browsers
        module.exports = function inherits(ctor, superCtor) {
          ctor.super_ = superCtor;
          var TempCtor = function TempCtor() {};
          TempCtor.prototype = superCtor.prototype;
          ctor.prototype = new TempCtor();
          ctor.prototype.constructor = ctor;
        };
      }

      /***/
    },
    /* 16 */
    /***/function (module, exports) {

      module.exports = extend;

      var hasOwnProperty = Object.prototype.hasOwnProperty;

      function extend() {
        var target = {};

        for (var i = 0; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      }

      /***/
    },
    /* 17 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var baseShapes = __webpack_require__(2);
      var auxiliaryItems = __webpack_require__(4);

      var svgStr = __webpack_require__(1).svgStr;
      var getUnitInfos = __webpack_require__(0).getUnitInfos;
      var getStateVars = __webpack_require__(0).getStateVars;
      var hasClonemarker = __webpack_require__(0).hasClonemarker;

      var element = __webpack_require__(3);

      var entityPoolNodes = {
        unspecifiedEntity: function unspecifiedEntity(node) {
          var auxItemWidth = 100;
          var auxItemHeight = 20;
          var borderWidth = 2;
          var fontSize = 10;
          var uInfos = getUnitInfos(node);
          var sVars = getStateVars(node);

          var style = new Map().set('stroke', '#6A6A6A').set('stroke-width', '1');

          var cloneMarkerSvg = svgStr(hasClonemarker(node) ? auxiliaryItems.multiImgCloneMarker(0, 2, auxItemWidth, auxItemHeight - 3) : '', auxItemWidth, auxItemHeight);

          var uInfoSvg = svgStr(uInfos.length > 0 ? auxiliaryItems.multiImgUnitOfInformation(2, 0, auxItemWidth - 5, auxItemHeight - 3, uInfos[0], borderWidth, fontSize) : '', auxItemWidth, auxItemHeight);

          var sVarSvg = svgStr(sVars.length > 0 ? auxiliaryItems.multiImgStateVar(2, 0, auxItemWidth - 5, auxItemHeight - 3, sVars[0], borderWidth, fontSize) : '', auxItemWidth, auxItemHeight);

          var topLine = svgStr(uInfos.length + sVars.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight);

          var bottomLine = svgStr(hasClonemarker(node) || uInfos.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight);
          return {
            bgImage: [bottomLine, topLine, cloneMarkerSvg, uInfoSvg, sVarSvg],
            bgWidth: ['100%', '100%', '100%'],
            bgPosX: ['0%', '0%', '0%', '20px', '40px'],
            bgPosY: ['52px', '8px', '32px', '44px', '0%'],
            bgFit: ['cover', 'cover', 'none', 'none'],
            bgClip: 'node',
            padding: '8px',
            borderWidth: 2
          };
        },
        simpleChemical: function simpleChemical(node) {
          var auxItemWidth = 100;
          var auxItemHeight = 20;
          var borderWidth = 2;
          var fontSize = 10;
          var uInfos = getUnitInfos(node);

          var style = new Map().set('stroke', '#6A6A6A').set('stroke-width', '1');

          var cloneMarkerSvg = svgStr(hasClonemarker(node) ? auxiliaryItems.multiImgCloneMarker(0, 2, auxItemWidth, auxItemHeight - 3) : '', auxItemWidth, auxItemHeight);

          var uInfoSvg = svgStr(uInfos.length > 0 ? auxiliaryItems.multiImgUnitOfInformation(2, 0, auxItemWidth - 5, auxItemHeight - 3, uInfos[0], borderWidth, fontSize) : '', auxItemWidth, auxItemHeight);

          var topLine = svgStr(uInfos.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight);

          var bottomLine = svgStr(hasClonemarker(node) || uInfos.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight);

          return {
            bgImage: [bottomLine, topLine, cloneMarkerSvg, uInfoSvg],
            bgWidth: ['100%', '100%', '100%'],
            bgPosX: ['0%', '0%', '0%', '12px'],
            bgPosY: ['52px', '8px', '48px', '0px'],
            bgFit: ['cover', 'cover', 'none', 'none'],
            bgClip: 'node',
            padding: '8px',
            borderWidth: 2
          };
        },
        macromolecule: function macromolecule(node) {
          var auxItemWidth = 100;
          var auxItemHeight = 20;
          var borderWidth = 2;
          var fontSize = 10;
          var uInfos = getUnitInfos(node);
          var sVars = getStateVars(node);

          var style = new Map().set('stroke', '#6A6A6A').set('stroke-width', '1');

          var cloneMarkerSvg = svgStr(hasClonemarker(node) ? auxiliaryItems.multiImgCloneMarker(0, 2, auxItemWidth, auxItemHeight - 3) : '', auxItemWidth, auxItemHeight);

          var uInfoSvg = svgStr(uInfos.length > 0 ? auxiliaryItems.multiImgUnitOfInformation(2, 0, auxItemWidth - 5, auxItemHeight - 3, uInfos[0], borderWidth, fontSize) : '', auxItemWidth, auxItemHeight);

          var sVarSvg = svgStr(sVars.length > 0 ? auxiliaryItems.multiImgStateVar(2, 0, auxItemWidth - 5, auxItemHeight - 3, sVars[0], borderWidth, fontSize) : '', auxItemWidth, auxItemHeight);

          var topLine = svgStr(uInfos.length + sVars.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight);

          var bottomLine = svgStr(hasClonemarker(node) || uInfos.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight);

          return {
            bgImage: [bottomLine, topLine, cloneMarkerSvg, uInfoSvg, sVarSvg],
            bgWidth: ['100%', '100%', '100%'],
            bgPosX: ['0%', '0%', '0%', '20px', '40px'],
            bgPosY: ['52px', '8px', '52px', '44px', '0%'],
            bgFit: ['cover', 'cover', 'none', 'none'],
            bgClip: 'node',
            padding: '8px',
            borderWidth: 2
          };
        },
        nucleicAcidFeature: function nucleicAcidFeature(node) {
          var auxItemWidth = 100;
          var auxItemHeight = 20;
          var borderWidth = 2;
          var fontSize = 10;
          var uInfos = getUnitInfos(node);
          var sVars = getStateVars(node);

          var style = new Map().set('stroke', '#6A6A6A').set('stroke-width', '1');

          var cloneMarkerSvg = svgStr(hasClonemarker(node) ? auxiliaryItems.multiImgCloneMarker(0, 2, auxItemWidth, auxItemHeight - 3) : '', auxItemWidth, auxItemHeight);

          var uInfoSvg = svgStr(uInfos.length > 0 ? auxiliaryItems.multiImgUnitOfInformation(2, 0, auxItemWidth - 5, auxItemHeight - 3, uInfos[0], borderWidth, fontSize) : '', auxItemWidth, auxItemHeight);

          var sVarSvg = svgStr(sVars.length > 0 ? auxiliaryItems.multiImgStateVar(2, 0, auxItemWidth - 5, auxItemHeight - 3, sVars[0], borderWidth, fontSize) : '', auxItemWidth, auxItemHeight);

          var topLine = svgStr(sVars.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight);

          var bottomLine = svgStr(hasClonemarker(node) || uInfos.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight);

          return {
            bgImage: [bottomLine, topLine, cloneMarkerSvg, uInfoSvg, sVarSvg],
            bgWidth: ['100%', '100%', '100%'],
            bgPosX: ['0%', '0%', '0%', '20px', '40px'],
            bgPosY: ['52px', '8px', '52px', '44px', '0%'],
            bgFit: ['cover', 'cover', 'none', 'none'],
            bgClip: 'node',
            padding: '8px',
            borderWidth: 2
          };
        },
        complex: function complex(node) {
          var itemW = 60;
          var itemH = 24;
          var uInfos = getUnitInfos(node);
          var sVars = getStateVars(node);

          var images = [];
          var bgWidth = [];
          var bgHeight = [];
          var bgPosX = [];
          var bgPosY = [];
          var bgFit = [];

          var style = new Map().set('stroke', '#555555').set('stroke-width', '6');

          // order of svg image generation matters
          if (uInfos.length + sVars.length > 0) {
            var topLineSvg = svgStr(baseShapes.line(0, 0, itemW, 0, style), itemW, itemH);
            images.push(topLineSvg);
            bgWidth.push('100%');
            bgPosX.push('0%');
            bgPosY.push('11px');
            bgFit.push('none');
          }

          if (hasClonemarker(node)) {
            var bottomLineSvg = svgStr(baseShapes.line(0, 0, itemW, 0, style), itemW, itemH);
            images.push(bottomLineSvg);
            bgWidth.push('100%');
            bgPosX.push('0%');
            bgPosY.push('100%');
            bgFit.push('none');
          }

          if (hasClonemarker(node)) {
            var cloneSvg = svgStr(auxiliaryItems.multiImgCloneMarker(0, 2, itemW, itemH - 3), itemW, itemH);
            images.push(cloneSvg);
            bgWidth.push('100%');
            bgPosX.push('0%');
            bgPosY.push('100%');
            bgFit.push('none');
          }

          if (uInfos.length > 0) {
            var uInfoSvg = svgStr(auxiliaryItems.multiImgUnitOfInformation(2, 0, itemW - 5, itemH - 3, uInfos[0]), itemW, itemH);
            images.push(uInfoSvg);
            bgPosX.push('25%');
            bgPosY.push('0%');
            bgFit.push('none');
          }

          if (sVars.length > 0) {
            var sVarSvg = svgStr(auxiliaryItems.multiImgStateVar(2, 0, itemW - 5, itemH - 3, sVars[0]), itemW, itemH);
            images.push(sVarSvg);
            bgPosX.push('88%');
            bgPosY.push('0%');
            bgFit.push('none');
          }

          return {
            bgImage: images,
            bgWidth: bgWidth,
            bgPosX: bgPosX,
            bgPosY: bgPosY,
            bgFit: bgFit,
            bgClip: 'node',
            padding: '22px',
            borderWidth: 4
          };
        },
        sourceAndSink: function sourceAndSink(node) {
          var _element$dimensions = element.dimensions(node),
              nw = _element$dimensions.w,
              nh = _element$dimensions.h;

          var centerX = nw / 2;
          var centerY = nh / 2;
          var radius = (nw - 2) / 2;

          var styleMap = new Map().set('stroke', '#6A6A6A').set('stroke-linecap', 'square').set('stroke-width', '1.5').set('fill', 'none');

          var shapeArgs = [centerX, centerY, radius];

          var sourceAndSinkSvg = '\n      ' + baseShapes.circle.apply(baseShapes, shapeArgs.concat([styleMap])) + '\n      ' + (hasClonemarker(node) ? auxiliaryItems.cloneMarker(nw, nh, baseShapes.circle, shapeArgs) : '') + '\n      ' + baseShapes.line(0, nh, nw, 0, styleMap) + '\n    ';

          return svgStr(sourceAndSinkSvg, nw, nh, 0, 0, nw, nh);
        },
        perturbingAgent: function perturbingAgent(node) {
          var auxItemWidth = 100;
          var auxItemHeight = 20;
          var borderWidth = 2;
          var fontSize = 10;
          var uInfos = getUnitInfos(node);

          var style = new Map().set('stroke', '#6A6A6A').set('stroke-width', '1');

          var cloneMarkerSvg = svgStr(hasClonemarker(node) ? auxiliaryItems.multiImgCloneMarker(0, 2, auxItemWidth, auxItemHeight - 3) : '', auxItemWidth, auxItemHeight);

          var uInfoSvg = svgStr(uInfos.length > 0 ? auxiliaryItems.multiImgUnitOfInformation(2, 0, auxItemWidth - 5, auxItemHeight - 3, uInfos[0], borderWidth, fontSize) : '', auxItemWidth, auxItemHeight);

          var topLine = svgStr(uInfos.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight);

          var bottomLine = svgStr(hasClonemarker(node) || uInfos.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight);

          return {
            bgImage: [bottomLine, topLine, cloneMarkerSvg, uInfoSvg],
            bgWidth: ['100%', '100%', '100%'],
            bgPosX: ['0%', '0%', '0%', '20px'],
            bgPosY: ['56px', '8px', '56px', '0%'],
            bgFit: ['cover', 'cover', 'none', 'none'],
            bgClip: 'node',
            padding: '8px',
            borderWidth: 2
          };
        }
      };

      module.exports = entityPoolNodes;

      /***/
    },
    /* 18 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var baseShapes = __webpack_require__(2);
      var auxiliaryItems = __webpack_require__(4);

      var svgStr = __webpack_require__(1).svgStr;
      var hasClonemarker = __webpack_require__(0).hasClonemarker;

      var element = __webpack_require__(3);

      var processNodes = {
        dissociation: function dissociation(node) {
          var _element$dimensions = element.dimensions(node),
              nw = _element$dimensions.w,
              nh = _element$dimensions.h;

          var centerX = nw / 2;
          var centerY = nh / 2;
          var outerRadius = (Math.min(nw, nh) - 2) / 2;
          var innerRadius = (Math.min(nw, nh) - 2) / 3;

          var styleMap = new Map().set('stroke', '#6A6A6A').set('stroke-width', '2').set('fill', 'none');

          var dissociationSvg = '\n      ' + baseShapes.circle(centerX, centerY, outerRadius, styleMap) + '\n      ' + baseShapes.circle(centerX, centerY, innerRadius, styleMap) + '\n    ';
          return svgStr(dissociationSvg, nw, nh);
        },
        phenotype: function phenotype(node) {
          var auxItemWidth = 100;
          var auxItemHeight = 20;

          var style = new Map().set('stroke', '#6A6A6A').set('stroke-width', '1');

          var cloneMarkerSvg = svgStr(hasClonemarker(node) ? auxiliaryItems.multiImgCloneMarker(0, 2, auxItemWidth, auxItemHeight - 3) : '', auxItemWidth, auxItemHeight, 0, 0, auxItemWidth, auxItemHeight);

          var bottomLine = svgStr(hasClonemarker(node) ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight, 0, 0, auxItemWidth, auxItemHeight);

          return {
            bgImage: [bottomLine, cloneMarkerSvg],
            bgWidth: ['100%', '100%'],
            bgPosX: ['0%', '0%'],
            bgPosY: ['56px', '56px'],
            bgFit: ['cover', 'none'],
            bgClip: 'node',
            padding: '8px',
            borderWidth: 2
          };
        }
      };

      module.exports = processNodes;

      /***/
    }]
    /******/)
  );
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
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
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWE4YzVmMDQ5MDQwMTIzMDZiMzEiLCJ3ZWJwYWNrOi8vLy4vZGVtby5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6L3dlYnBhY2svYm9vdHN0cmFwIGI3NzAwMGYyMDQzMjNiNjdkZjk5Iiwid2VicGFjazovLy93ZWJwYWNrOi8vL3NyYy9zYmduU3R5bGUvdXRpbC9zYmduLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3NyYy9zYmduU3R5bGUvdXRpbC9zdmcuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vc3JjL3NiZ25TdHlsZS9nbHlwaC9iYXNlU2hhcGVzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3NyYy9zYmduU3R5bGUvZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9zcmMvc2JnblN0eWxlL2dseXBoL2F1eGlsaWFyeUl0ZW1zLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy9sb2Rhc2gubWVtb2l6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vc3JjL3NiZ25TdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9zcmMvc2JnblN0eWxlL2dseXBoL2luZGV4LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9zcmMvc2JnblN0eWxlL2dseXBoL2NvbnRhaW5lck5vZGVzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy90ZXh0LXdpZHRoL2luZGV4LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy91dGlsL3V0aWwuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9ub2RlX21vZHVsZXMvdXRpbC9zdXBwb3J0L2lzQnVmZmVyQnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9ub2RlX21vZHVsZXMvdXRpbC9ub2RlX21vZHVsZXMvaW5oZXJpdHMvaW5oZXJpdHNfYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9ub2RlX21vZHVsZXMveHRlbmQvaW1tdXRhYmxlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3NyYy9zYmduU3R5bGUvZ2x5cGgvZW50aXR5UG9vbE5vZGVzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3NyYy9zYmduU3R5bGUvZ2x5cGgvcHJvY2Vzc05vZGVzLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiXSwibmFtZXMiOlsic2JnblN0eWxlc2hlZXQiLCJyZXF1aXJlIiwiY3l0b3NjYXBlIiwid2luZG93IiwiY3kiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZWxlbWVudHMiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwibGF5b3V0IiwibmFtZSIsInN0eWxlIiwic2JnbkRhdGFIYW5kbGVyIiwibm9kZSIsImVsZW1lbnQiLCJ2YXJpYWJsZSIsInN0YXRlVmFyIiwidmFsdWUiLCJtb2R1bGUiLCJzdHlsZU1hcDJTdHIiLCJzIiwiayIsInYiLCJzdmciLCJ3aWR0aCIsImhlaWdodCIsInBhcnNlciIsInN2Z1RleHQiLCJzdmdTdHIiLCJkYXRhIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiYmFzZVJlY3RhbmdsZSIsIngiLCJ5IiwiYmFzZVNoYXBlcyIsImJhc2VTaGFwZUZuIiwicmFkaXVzUmF0aW8iLCJNYXRoIiwic2JnbkRhdGEiLCJzYmduU3R5bGUiLCJ3IiwiaCIsInNoYXBlIiwic2JnbkFycm93TWFwIiwiZWxlbWVudFN0eWxlIiwic2JnbkNsYXNzIiwiY29udGVudCIsImRpbSIsInRleHRXaWR0aCIsImF1eGlsaWFyeUl0ZW1zIiwiY2xvbmVTdHlsZSIsImJvcmRlcldpZHRoIiwiZm9udFNpemUiLCJ0ZXh0IiwidUluZm8iLCJ1aW5mb1JlY3RTdHlsZSIsInRleHRTdHlsZSIsInVJbmZvV2lkdGgiLCJmYW1pbHkiLCJzaXplIiwidW5pdE9mSW5mb3JtYXRpb25TdmciLCJzdGF0ZVZhclN0eWxlIiwidHciLCJzdGF0ZXZhcmlhYmxlU3ZnIiwiY2xpcElkIiwiY2xvbmVNYXJrZXJTdHlsZSIsImNsb25lTWFya2VyU3ZnIiwic2hhcGVGbiIsInNiZ25TdHlsZVNoZWV0IiwiZGVmYXVsdE9wdGlvbnMiLCJzYmduc3ZnIiwiZWRnZSIsIm1lbW9pemUiLCJjb250YWluZXJOb2RlcyIsImVudGl0eVBvb2xOb2RlcyIsInByb2Nlc3NOb2RlcyIsImNhY2hlS2V5Rm4iLCJKU09OIiwic2Jnbk5vZGVTaGFwZU1hcCIsImRyYXciLCJhdXhJdGVtV2lkdGgiLCJhdXhJdGVtSGVpZ2h0IiwidUluZm9zIiwidUluZm9TdmciLCJsaW5lU3ZnIiwiYmdJbWFnZSIsImJnV2lkdGgiLCJiZ1Bvc1giLCJiZ1Bvc1kiLCJiZ0ZpdCIsImJnQ2xpcCIsInBhZGRpbmciLCJnZXRVbml0SW5mb3MiLCJnZXRTdGF0ZVZhcnMiLCJoYXNDbG9uZW1hcmtlciIsInNWYXJzIiwic1ZhclN2ZyIsInRvcExpbmUiLCJib3R0b21MaW5lIiwiaXRlbVciLCJpdGVtSCIsImltYWdlcyIsImJnSGVpZ2h0IiwidG9wTGluZVN2ZyIsImJvdHRvbUxpbmVTdmciLCJjbG9uZVN2ZyIsImNlbnRlclgiLCJudyIsImNlbnRlclkiLCJuaCIsInJhZGl1cyIsInN0eWxlTWFwIiwic2hhcGVBcmdzIiwic291cmNlQW5kU2lua1N2ZyIsIm91dGVyUmFkaXVzIiwiaW5uZXJSYWRpdXMiLCJkaXNzb2NpYXRpb25TdmciXSwibWFwcGluZ3MiOiI7UUFB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Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQUEsY0FDQSwrQkFEQTs7QUFHQTtBQUNBO0FBQ0csV0FGSCxNQUVHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQUFBLGNBQ0EscUNBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBLDhCQURBO0FBRUEsMkNBRkE7QUFHQTtBQUhBO0FBS0E7O0FBRUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQSxrQ0FDQSxnREFEQSxHQUVBLFFBRkE7QUFHQTs7QUFFQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQSxpR0FDQSxxQkFEQSxHQUVBLGNBRkE7QUFHQTs7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0ssYUFGTCxDQUVLO0FBQ0w7QUFDQTtBQUNLLGFBRkwsQ0FFSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUEsZ0JBQ0EscURBREE7QUFBQSxnQkFFQSxzQkFGQTs7QUFJ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aWxlIjoiLi9idWlsZC9kZW1vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMWE4YzVmMDQ5MDQwMTIzMDZiMzEiLCJ2YXIgc2JnblN0eWxlc2hlZXQgPSByZXF1aXJlKCcuL2J1aWxkL2J1bmRsZS5qcycpO1xyXG52YXIgY3l0b3NjYXBlID0gd2luZG93LmN5dG9zY2FwZTtcclxuXHJcbnZhciBjeSA9IHdpbmRvdy5jeSA9IGN5dG9zY2FwZSh7XHJcbiAgY29udGFpbmVyOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3knKSxcclxuICBlbGVtZW50czogZmV0Y2goJy4vZGVtby5qc29uJykudGhlbiggcmVzID0+IHJlcy5qc29uKCkgKSxcclxuICBsYXlvdXQ6IHsgbmFtZTogJ3ByZXNldCcgfSxcclxuICBzdHlsZTogc2JnblN0eWxlc2hlZXQoY3l0b3NjYXBlKVxyXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZW1vLmpzIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiY3l0b3NjYXBlU2JnblN0eWxlc2hlZXRcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiY3l0b3NjYXBlU2JnblN0eWxlc2hlZXRcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGI3NzAwMGYyMDQzMjNiNjdkZjk5XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6L3dlYnBhY2svYm9vdHN0cmFwIGI3NzAwMGYyMDQzMjNiNjdkZjk5IiwiY29uc3Qgc2JnbkRhdGFIYW5kbGVyID0ge1xyXG4gIGlzTXVsdGltZXIgKG5vZGUpIHtcclxuICAgIHJldHVybiBub2RlLmRhdGEoJ2NsYXNzJykuaW5jbHVkZXMoJ211bHRpbWVyJyk7XHJcbiAgfSxcclxuICBoYXNDbG9uZW1hcmtlciAobm9kZSkge1xyXG4gICAgcmV0dXJuIG5vZGUuZGF0YSgnY2xvbmVtYXJrZXInKTtcclxuICB9LFxyXG4gIGdldFN0YXRlVmFycyAobm9kZSkge1xyXG4gICAgcmV0dXJuIG5vZGUuZGF0YSgnc3RhdGVWYXJpYWJsZXMnKTtcclxuICB9LFxyXG4gIGdldFVuaXRJbmZvcyAobm9kZSkge1xyXG4gICAgcmV0dXJuIG5vZGUuZGF0YSgndW5pdHNPZkluZm9ybWF0aW9uJyk7XHJcbiAgfSxcclxuICBoYXNBdXhJdGVtcyAobm9kZSkge1xyXG4gICAgcmV0dXJuIChub2RlLmRhdGEoJ3N0YXRlVmFyaWFibGVzJykubGVuZ3RoICsgbm9kZS5kYXRhKCd1bml0c09mSW5mb3JtYXRpb24nKS5sZW5ndGggPiAwKTtcclxuICB9LFxyXG4gIHNiZ25DbGFzcyAoZWxlbWVudCkge1xyXG4gICAgcmV0dXJuIGVsZW1lbnQuZGF0YSgnY2xhc3MnKTtcclxuICB9LFxyXG4gIHNiZ25MYWJlbCAoZWxlbWVudCkge1xyXG4gICAgcmV0dXJuIGVsZW1lbnQuZGF0YSgnbGFiZWwnKTtcclxuICB9LFxyXG4gIHN0YXRlVmFyTGFiZWwgKHN0YXRlVmFyKSB7XHJcbiAgICBjb25zdCB2YXJpYWJsZSA9IHN0YXRlVmFyLnN0YXRlLnZhcmlhYmxlO1xyXG4gICAgY29uc3QgdmFsdWUgPSBzdGF0ZVZhci5zdGF0ZS52YWx1ZTtcclxuICAgIGlmICh2YWx1ZSAmJiB2YXJpYWJsZSkge1xyXG4gICAgICByZXR1cm4gYCR7dmFsdWV9QCR7dmFyaWFibGV9YDtcclxuICAgIH1cclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHZhcmlhYmxlKSB7XHJcbiAgICAgIHJldHVybiB2YXJpYWJsZTtcclxuICAgIH1cclxuICAgIHJldHVybiAnJztcclxuICB9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHNiZ25EYXRhSGFuZGxlcjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NiZ25TdHlsZS91dGlsL3NiZ24uanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9zcmMvc2JnblN0eWxlL3V0aWwvc2Jnbi5qcyIsImNvbnN0IHN0eWxlTWFwMlN0ciA9IChzdHlsZU1hcCkgPT4ge1xyXG4gIGlmKCAhc3R5bGVNYXAgKXtcclxuICAgIHJldHVybiAnJztcclxuICB9XHJcblxyXG4gIGxldCBzID0gJyc7XHJcblxyXG4gIGZvciggbGV0IFtrLCB2XSBvZiBzdHlsZU1hcCApe1xyXG4gICAgcyArPSBrICsgJz0nICsgJ1wiJyArIHYgKyAnXCInICsgJyAnO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHM7XHJcbn07XHJcblxyXG5jb25zdCBzdmcgPSAoc3ZnU3RyLCB3aWR0aCA9IDEwMCwgaGVpZ2h0ID0gMTAwKSA9PiB7XHJcbiAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xyXG4gIGxldCBzdmdUZXh0ID1cclxuICBgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+PCFET0NUWVBFIHN2Zz48c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgdmVyc2lvbj0nMS4xJyB3aWR0aD0nJHt3aWR0aH0nIGhlaWdodD0nJHtoZWlnaHR9Jz4ke3N2Z1N0cn08L3N2Zz5gO1xyXG4gIHJldHVybiBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHN2Z1RleHQsICd0ZXh0L3htbCcpLmRvY3VtZW50RWxlbWVudDtcclxufTtcclxuXHJcbmNvbnN0IHN2Z1N0ciA9IChzdmdUZXh0LCB2aWV3UG9ydFdpZHRoLCB2aWV3UG9ydEhlaWdodCwgdmlld0JveFgsIHZpZXdCb3hZLCB2aWV3Qm94V2lkdGgsIHZpZXdCb3hIZWlnaHQpID0+IHtcclxuICBsZXQgcyA9IHN2ZyhzdmdUZXh0LCB2aWV3UG9ydFdpZHRoLCB2aWV3UG9ydEhlaWdodCwgdmlld0JveFgsIHZpZXdCb3hZLCB2aWV3Qm94V2lkdGgsIHZpZXdCb3hIZWlnaHQpO1xyXG5cclxuICAvLyBiYXNlNjRcclxuICAvLyBsZXQgZGF0YSA9ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCcgKyBidG9hKHMub3V0ZXJIVE1MKTtcclxuXHJcbiAgLy8gdXJpIGNvbXBvbmVudCBzdHJpbmdcclxuICBsZXQgZGF0YSA9ICdkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCwnICsgZW5jb2RlVVJJQ29tcG9uZW50KHMub3V0ZXJIVE1MKTtcclxuXHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBzdmdTdHI6IHN2Z1N0cixcclxuICBzdHlsZU1hcDJTdHI6IHN0eWxlTWFwMlN0clxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2JnblN0eWxlL3V0aWwvc3ZnLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vc3JjL3NiZ25TdHlsZS91dGlsL3N2Zy5qcyIsImNvbnN0IHN0eWxlTWFwMlN0ciA9IHJlcXVpcmUoJy4uL3V0aWwvc3ZnLmpzJykuc3R5bGVNYXAyU3RyO1xyXG5cclxubGV0IGJhc2VSZWN0YW5nbGUgPSBmdW5jdGlvbiAoeCwgeSwgdywgaCwgcjEsIHIyLCByMywgcjQsIHN0eWxlTWFwKSB7XHJcbiAgcmV0dXJuIGBcclxuICA8cGF0aCAke3N0eWxlTWFwMlN0cihzdHlsZU1hcCl9IGQ9J1xyXG4gICAgTSAke3ggKyByMX0gJHt5fVxyXG4gICAgTCAke3ggKyB3IC0gcjJ9ICR7eX0gUSAke3ggKyB3fSAke3l9ICR7eCArIHd9ICR7eSArIHIyfVxyXG4gICAgTCAke3ggKyB3IH0gJHt5ICsgaCAtIHIzfSBRICR7eCArIHd9ICR7eSArIGh9ICR7eCArIHcgLSByM30gJHt5ICsgaH1cclxuICAgIEwgJHt4ICsgcjR9ICR7eSArIGh9IFEgJHt4fSAke3kgKyBofSAke3h9ICR7eSArIGggLSByNH1cclxuICAgIEwgJHt4fSAke3kgKyByMX0gUSAke3h9ICR7eX0gJHt4ICsgcjF9ICR7eX1cclxuICAgIFonXHJcbiAgLz5cclxuICBgO1xyXG59O1xyXG5cclxuY29uc3QgYmFzZVNoYXBlcyA9IHtcclxuICBiYXJyZWwgKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlTWFwKSB7XHJcbiAgICByZXR1cm4gYFxyXG5cclxuICAgIDxnICR7c3R5bGVNYXAyU3RyKHN0eWxlTWFwKX0+XHJcbiAgICAgIDxwYXRoIGQ9XCJNICR7MCp3aWR0aCArIHh9ICR7LjAzKmhlaWdodCArIHl9IEwgJHswKndpZHRoICsgeH0gJHsuOTcqaGVpZ2h0ICsgeX0gUSAkezAuMDYqd2lkdGggKyB4fSAke2hlaWdodCArIHl9ICR7MC4yNSp3aWR0aCArIHh9ICR7aGVpZ2h0ICsgeX1cIi8+XHJcblxyXG4gICAgICA8cGF0aCBkPVwiTSAkezAuMjUqd2lkdGggKyB4fSAke2hlaWdodCArIHl9IEwgJHswLjc1KndpZHRoICsgeH0gJHtoZWlnaHQgKyB5fSBRICR7MC45NSp3aWR0aCArIHh9ICR7aGVpZ2h0ICsgeX0gJHt3aWR0aCArIHh9ICR7MC45NSpoZWlnaHQgKyB5fVwiLz5cclxuXHJcbiAgICAgIDxwYXRoIGQ9XCJNICR7d2lkdGggKyB4fSAkey45NSpoZWlnaHQgKyB5fSBMICR7d2lkdGggKyB4fSAkezAuMDUqaGVpZ2h0ICsgeX0gUSAke3dpZHRoICsgeH0gJHswKmhlaWdodCArIHl9ICR7MC43NSp3aWR0aCArIHh9ICR7MCpoZWlnaHQgKyB5fVwiLz5cclxuXHJcbiAgICAgIDxwYXRoIGQ9XCJNICR7MC43NSp3aWR0aCArIHh9ICR7MCpoZWlnaHQgKyB5fSBMICR7MC4yNSp3aWR0aCArIHh9ICR7MCpoZWlnaHQgKyB5fSBRICR7MC4wNip3aWR0aCArIHh9ICR7MCpoZWlnaHQgKyB5fSAkezAqd2lkdGggKyB4fSAkezAuMDMqaGVpZ2h0ICsgeX1cIi8+XHJcbiAgICA8L2c+XHJcblxyXG4gICAgYDtcclxuICB9LFxyXG5cclxuICBjaXJjbGUgKGN4LCBjeSwgciwgc3R5bGVNYXApIHtcclxuICAgIHJldHVybiBgPGNpcmNsZSBjeD0nJHtjeH0nIGN5PScke2N5fScgcj0nJHtyfScgJHtzdHlsZU1hcDJTdHIoc3R5bGVNYXApfSAvPmA7XHJcbiAgfSxcclxuXHJcbiAgY2xpcFBhdGggKGlkLCBiYXNlU2hhcGVGbiwgYmFzZVNoYXBlRm5BcmdzLCBzdHlsZU1hcCkge1xyXG4gICAgcmV0dXJuIGBcclxuICAgICAgPGRlZnM+XHJcbiAgICAgICAgPGNsaXBQYXRoIGlkPScke2lkfScgJHtzdHlsZU1hcDJTdHIoc3R5bGVNYXApfT5cclxuICAgICAgICAke2Jhc2VTaGFwZUZuKC4uLmJhc2VTaGFwZUZuQXJncyl9XHJcbiAgICAgICAgPC9jbGlwUGF0aD5cclxuICAgICAgPC9kZWZzPlxyXG4gICAgYDtcclxuICB9LFxyXG5cclxuICBjb25jYXZlSGV4YWdvbiAoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGVNYXApIHtcclxuICAgIHJldHVybiBgXHJcbiAgICA8cG9seWdvbiAke3N0eWxlTWFwMlN0cihzdHlsZU1hcCl9XHJcbiAgICAgIHBvaW50cz0nJHt4ICsgMH0sICR7eSArIDB9LCAke3ggKyB3aWR0aH0sICR7eSArIDB9LCAke3ggKyAwLjg1KndpZHRofSwgJHt5ICsgMC41KmhlaWdodH0sICR7eCArIHdpZHRofSwgJHt5ICsgaGVpZ2h0fSwgJHt4ICsgMH0sICR7eSArIGhlaWdodH0sICR7IHggKyAwLjE1KndpZHRofSwgJHt5ICsgMC41KmhlaWdodH0nXHJcbiAgICAvPmA7XHJcbiAgfSxcclxuXHJcbiAgY3V0UmVjdGFuZ2xlICh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb3JuZXJMZW5ndGgsIHN0eWxlTWFwKSB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgPHBvbHlnb24gJHtzdHlsZU1hcDJTdHIoc3R5bGVNYXApfVxyXG4gICAgICBwb2ludHM9J1xyXG4gICAgICAke3ggKyAwKndpZHRofSAke3kgKyBjb3JuZXJMZW5ndGh9ICR7eCArIGNvcm5lckxlbmd0aH0gJHt5ICsgMCpoZWlnaHR9ICR7eCArIHdpZHRoIC0gY29ybmVyTGVuZ3RofSAke3kgKyAwKmhlaWdodH0gJHt4ICsgd2lkdGh9ICR7eSArIGNvcm5lckxlbmd0aH1cclxuICAgICAgJHt4ICsgd2lkdGh9ICR7eSArIGhlaWdodCAtIGNvcm5lckxlbmd0aH0gJHt4ICsgd2lkdGggLSBjb3JuZXJMZW5ndGh9ICR7eSArIGhlaWdodH0gJHt4ICsgY29ybmVyTGVuZ3RofSAke3kgKyBoZWlnaHR9ICR7eCArIDAqd2lkdGh9ICR7eSArIGhlaWdodCAtIGNvcm5lckxlbmd0aH1cclxuICAgICAgJ1xyXG4gICAgLz5cclxuICAgIGA7XHJcbiAgfSxcclxuXHJcbiAgZWxsaXBzZSAoY3gsIGN5LCByeCwgcnksIHN0eWxlTWFwKSB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgICA8ZWxsaXBzZSBjeD0nJHtjeH0nIGN5PScke2N5fScgcng9JyR7cnh9JyByeT0nJHtyeX0nICR7c3R5bGVNYXAyU3RyKHN0eWxlTWFwKX0gLz5cclxuICAgIGA7XHJcbiAgfSxcclxuXHJcbiAgaGV4YWdvbiAoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGVNYXApIHtcclxuICAgIHJldHVybiBgXHJcbiAgICA8cG9seWdvbiAke3N0eWxlTWFwMlN0cihzdHlsZU1hcCl9XHJcbiAgICAgIHBvaW50cz0nJHt4ICsgMH0sICR7eSArIDAuNSpoZWlnaHR9LCAke3ggKyAwLjI1KndpZHRofSwgJHt5ICsgMCpoZWlnaHR9LCAke3ggKyAwLjc1KndpZHRofSwgJHt5ICsgMCpoZWlnaHR9LCAke3ggKyB3aWR0aH0sICR7eSArIDAuNSpoZWlnaHR9LCAke3ggKyAwLjc1KndpZHRofSwgJHt5ICsgaGVpZ2h0fSwgJHt4ICsgMC4yNSp3aWR0aH0sICR7eSArIGhlaWdodH0nXHJcbiAgICAvPmA7XHJcbiAgfSxcclxuXHJcbiAgbGluZSAoeDEsIHkxLCB4MiwgeTIsIHN0eWxlTWFwKSB7XHJcbiAgICByZXR1cm4gYDxsaW5lIHgxPScke3gxfScgeTE9JyR7eTF9JyB4Mj0nJHt4Mn0nIHkyPScke3kyfScgJHtzdHlsZU1hcDJTdHIoc3R5bGVNYXApfSAvPmA7XHJcbiAgfSxcclxuXHJcbiAgcmVjdGFuZ2xlICh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZU1hcCkge1xyXG4gICAgcmV0dXJuIGJhc2VSZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgMCwgMCwgMCwgMCwgc3R5bGVNYXApO1xyXG4gIH0sXHJcblxyXG4gIHJvdW5kQm90dG9tUmVjdGFuZ2xlICh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZU1hcCkge1xyXG4gICAgcmV0dXJuIGJhc2VSZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgMCwgMCwgLjMqaGVpZ2h0LCAuMypoZWlnaHQsIHN0eWxlTWFwKTtcclxuICB9LFxyXG5cclxuICByb3VuZFJlY3RhbmdsZSAoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGVNYXApIHtcclxuICAgIHJldHVybiBiYXNlUmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIC4wNCp3aWR0aCwgLjA0KndpZHRoLCAuMDQqd2lkdGgsIC4wNCp3aWR0aCwgc3R5bGVNYXApO1xyXG4gIH0sXHJcblxyXG4gIHN0YWRpdW0gKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlTWFwKSB7XHJcbiAgICBjb25zdCByYWRpdXNSYXRpbyA9IC4yNCAqIE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgcmV0dXJuIGJhc2VSZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzUmF0aW8sIHJhZGl1c1JhdGlvLCByYWRpdXNSYXRpbywgcmFkaXVzUmF0aW8sIHN0eWxlTWFwKTtcclxuICB9LFxyXG5cclxuICBzcXVhcmUgKHgsIHksIGxlbmd0aCwgc3R5bGVNYXApIHtcclxuICAgIHJldHVybiBiYXNlUmVjdGFuZ2xlKHgsIHksIGxlbmd0aCwgbGVuZ3RoLCAwLCAwLCAwLCAwLCBzdHlsZU1hcCk7XHJcbiAgfSxcclxuXHJcbiAgdGV4dCAodCwgeCwgeSwgc3R5bGVNYXApIHtcclxuICAgIHJldHVybiBgPHRleHQgeD0nJHt4fScgeT0nJHt5fScgJHtzdHlsZU1hcDJTdHIoc3R5bGVNYXApfT4ke3R9PC90ZXh0PmA7XHJcbiAgfVxyXG5cclxufTtcclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VTaGFwZXM7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zYmduU3R5bGUvZ2x5cGgvYmFzZVNoYXBlcy5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3NyYy9zYmduU3R5bGUvZ2x5cGgvYmFzZVNoYXBlcy5qcyIsImNvbnN0IHNiZ25EYXRhID0gcmVxdWlyZSgnLi91dGlsL3NiZ24uanMnKTtcclxuXHJcbmNvbnN0IHNiZ25TdHlsZSA9IG5ldyBNYXAoKVxyXG4uc2V0KCd1bnNwZWNpZmllZCBlbnRpdHknLCB7dzogMzIsIGg6IDMyLCBzaGFwZTogJ2VsbGlwc2UnfSlcclxuLnNldCgnc2ltcGxlIGNoZW1pY2FsJywge3c6IDQ4LCBoOiA0OCwgc2hhcGU6ICdlbGxpcHNlJ30pXHJcbi5zZXQoJ3NpbXBsZSBjaGVtaWNhbCBtdWx0aW1lcicsIHt3OiA0OCwgaDogNDgsIHNoYXBlOiAnZWxsaXBzZSd9KVxyXG4uc2V0KCdtYWNyb21vbGVjdWxlJywge3c6IDk2LCBoOiA0OCwgc2hhcGU6ICdyb3VuZHJlY3RhbmdsZSd9KVxyXG4uc2V0KCdtYWNyb21vbGVjdWxlIG11bHRpbWVyJywge3c6IDk2LCBoOiA0OCwgc2hhcGU6ICdyb3VuZHJlY3RhbmdsZSd9KVxyXG4uc2V0KCdudWNsZWljIGFjaWQgZmVhdHVyZScsIHt3OiA4OCwgaDogNTYsIHNoYXBlOiAnYm90dG9tcm91bmRyZWN0YW5nbGUnfSlcclxuLnNldCgnbnVjbGVpYyBhY2lkIGZlYXR1cmUgbXVsdGltZXInLCB7dzogODgsIGg6IDUyLCBzaGFwZTogJ2JvdHRvbXJvdW5kcmVjdGFuZ2xlJ30pXHJcbi5zZXQoJ2NvbXBsZXgnLCB7dzogMTAsIGg6IDEwLCBzaGFwZTogJ2N1dHJlY3RhbmdsZSd9KVxyXG4uc2V0KCdjb21wbGV4IG11bHRpbWVyJywge3c6IDEwLCBoOiAxMCwgc2hhcGU6ICdjdXRyZWN0YW5nbGUnfSlcclxuLnNldCgnc291cmNlIGFuZCBzaW5rJywge3c6IDYwLCBoOiA2MCwgc2hhcGU6ICdwb2x5Z29uJ30pXHJcbi5zZXQoJ3BlcnR1cmJpbmcgYWdlbnQnLCB7dzogMTQwLCBoOiA2MCwgc2hhcGU6ICdjb25jYXZlaGV4YWdvbid9KVxyXG5cclxuLnNldCgncGhlbm90eXBlJywge3c6IDE0MCwgaDogNjAsIHNoYXBlOiAnaGV4YWdvbid9KVxyXG4uc2V0KCdwcm9jZXNzJywge3c6MjUsIGg6IDI1LCBzaGFwZTogJ3NxdWFyZSd9KVxyXG4uc2V0KCd1bmNlcnRhaW4gcHJvY2VzcycsIHt3OjI1LCBoOiAyNSwgc2hhcGU6ICdzcXVhcmUnfSlcclxuLnNldCgnb21pdHRlZCBwcm9jZXNzJywge3c6MjUsIGg6IDI1LCBzaGFwZTogJ3NxdWFyZSd9KVxyXG4uc2V0KCdhc3NvY2lhdGlvbicsIHt3OjI1LCBoOiAyNSwgc2hhcGU6ICdlbGxpcHNlJ30pXHJcbi5zZXQoJ2Rpc3NvY2lhdGlvbicsIHt3OjI1LCBoOiAyNSwgc2hhcGU6ICdlbGxpcHNlJ30pXHJcblxyXG4uc2V0KCdjb21wYXJ0bWVudCcsIHt3OiA1MCwgaDogNTAsIHNoYXBlOiAnYmFycmVsJ30pXHJcblxyXG4uc2V0KCd0YWcnLCB7dzogMTAwLCBoOiA2NSwgc2hhcGU6ICd0YWcnfSlcclxuLnNldCgnYW5kJywge3c6IDQwLCBoOiA0MCwgc2hhcGU6ICdlbGxpcHNlJ30pXHJcbi5zZXQoJ29yJywge3c6IDQwLCBoOiA0MCwgc2hhcGU6ICdlbGxpcHNlJ30pXHJcbi5zZXQoJ25vdCcsIHt3OiA0MCwgaDogNDAsIHNoYXBlOiAnZWxsaXBzZSd9KTtcclxuXHJcbmNvbnN0IHNiZ25BcnJvd01hcCA9IG5ldyBNYXAoKVxyXG4uc2V0KCduZWNlc3Nhcnkgc3RpbXVsYXRpb24nLCAndHJpYW5nbGUtY3Jvc3MnKVxyXG4uc2V0KCdpbmhpYml0aW9uJywgJ3RlZScpXHJcbi5zZXQoJ2NhdGFseXNpcycsICdjaXJjbGUnKVxyXG4uc2V0KCdzdGltdWxhdGlvbicsICd0cmlhbmdsZScpXHJcbi5zZXQoJ3Byb2R1Y3Rpb24nLCAndHJpYW5nbGUnKVxyXG4uc2V0KCdtb2R1bGF0aW9uJywgJ2RpYW1vbmQnKTtcclxuXHJcbmNvbnN0IGVsZW1lbnRTdHlsZSA9IHtcclxuICBzYmduU2hhcGUgKG5vZGUpIHtcclxuICAgIGNvbnN0IHNiZ25DbGFzcyA9IHNiZ25EYXRhLnNiZ25DbGFzcyhub2RlKS5yZXBsYWNlKCcgbXVsdGltZXInLCAnJyk7XHJcbiAgICBjb25zdCBzdHlsZSA9IHNiZ25TdHlsZS5nZXQoc2JnbkNsYXNzKTtcclxuICAgIHJldHVybiBzdHlsZSA/IHN0eWxlLnNoYXBlIDogJ2VsbGlwc2UnO1xyXG4gIH0sXHJcblxyXG4gIHNiZ25BcnJvd1NoYXBlIChlZGdlKSB7XHJcbiAgICBjb25zdCBzYmduQ2xhc3MgPSBzYmduRGF0YS5zYmduQ2xhc3MoZWRnZSk7XHJcbiAgICBjb25zdCBzaGFwZSA9IHNiZ25BcnJvd01hcC5nZXQoc2JnbkNsYXNzKTtcclxuICAgIHJldHVybiBzaGFwZSA/IHNoYXBlIDogJ25vbmUnO1xyXG4gIH0sXHJcblxyXG4gIHNiZ25Db250ZW50IChub2RlKSB7XHJcbiAgICBjb25zdCBzYmduQ2xhc3MgPSBzYmduRGF0YS5zYmduQ2xhc3Mobm9kZSkucmVwbGFjZSgnIG11bHRpbWVyJywgJycpO1xyXG4gICAgbGV0IGNvbnRlbnQgPSBzYmduRGF0YS5zYmduTGFiZWwobm9kZSk7XHJcblxyXG4gICAgaWYgKHNiZ25DbGFzcyA9PSAnYW5kJykge1xyXG4gICAgICBjb250ZW50ID0gJ0FORCc7XHJcbiAgICB9XHJcbiAgICBpZiAoc2JnbkNsYXNzID09ICdvcicpIHtcclxuICAgICAgY29udGVudCA9ICdPUic7XHJcbiAgICB9XHJcbiAgICBpZiAoc2JnbkNsYXNzID09ICdub3QnKSB7XHJcbiAgICAgIGNvbnRlbnQgPSAnTk9UJztcclxuICAgIH1cclxuICAgIGlmIChzYmduQ2xhc3MgPT0gJ29taXR0ZWQgcHJvY2VzcycpIHtcclxuICAgICAgY29udGVudCA9ICdcXFxcXFxcXCc7XHJcbiAgICB9XHJcbiAgICBpZiAoc2JnbkNsYXNzID09ICd1bmNlcnRhaW4gcHJvY2VzcycpIHtcclxuICAgICAgY29udGVudCA9ICc/JztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY29udGVudDtcclxuICB9LFxyXG5cclxuICBkaW1lbnNpb25zIChub2RlKSB7XHJcbiAgICBjb25zdCBzYmduQ2xhc3MgPSBzYmduRGF0YS5zYmduQ2xhc3Mobm9kZSk7XHJcbiAgICBjb25zdCBkaW0gPSBzYmduU3R5bGUuZ2V0KHNiZ25DbGFzcyk7XHJcbiAgICBpZiAoZGltID09IG51bGwpIHtcclxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgJHtzYmduQ2xhc3N9IGRvZXMgbm90IGhhdmUgYSBkZWZhdWx0IHdpZHRoIC8gaGVpZ2h0YCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGltO1xyXG4gIH0sXHJcblxyXG4gIHdpZHRoIChub2RlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kaW1lbnNpb25zKG5vZGUpLnc7XHJcbiAgfSxcclxuXHJcbiAgaGVpZ2h0IChub2RlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kaW1lbnNpb25zKG5vZGUpLmg7XHJcbiAgfVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBlbGVtZW50U3R5bGU7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zYmduU3R5bGUvZWxlbWVudC5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3NyYy9zYmduU3R5bGUvZWxlbWVudC5qcyIsImNvbnN0IHRleHRXaWR0aCA9IHJlcXVpcmUoJ3RleHQtd2lkdGgnKTtcclxuXHJcbmNvbnN0IGJhc2VTaGFwZXMgPSByZXF1aXJlKCcuL2Jhc2VTaGFwZXMuanMnKTtcclxuY29uc3Qgc2JnbkRhdGEgPSByZXF1aXJlKCcuLi91dGlsL3NiZ24nKTtcclxuXHJcbmNvbnN0IGF1eGlsaWFyeUl0ZW1zID0ge1xyXG5cclxuICBtdWx0aUltZ0Nsb25lTWFya2VyICh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcblxyXG4gICAgY29uc3QgY2xvbmVTdHlsZSA9IG5ldyBNYXAoKVxyXG4gICAgLnNldCgnc3Ryb2tlJywgJyM2QTZBNkEnKVxyXG4gICAgLnNldCgnc3Ryb2tlLXdpZHRoJywgJzEnKVxyXG4gICAgLnNldCgnZmlsbCcsICcjRDJEMkQyJyk7XHJcblxyXG4gICAgcmV0dXJuIGJhc2VTaGFwZXMucmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIGNsb25lU3R5bGUpO1xyXG4gIH0sXHJcblxyXG4gIG11bHRpSW1nVW5pdE9mSW5mb3JtYXRpb24gKHgsIHksIHdpZHRoLCBoZWlnaHQsIHVJbmZvLCBib3JkZXJXaWR0aD0zLCBmb250U2l6ZT0xNCkge1xyXG4gICAgY29uc3QgdGV4dCA9IHVJbmZvLmxhYmVsLnRleHQ7XHJcbiAgICBjb25zdCB1aW5mb1JlY3RTdHlsZSA9IG5ldyBNYXAoKVxyXG4gICAgLnNldCgnc3Ryb2tlJywgJyM1NTU1NTUnKVxyXG4gICAgLnNldCgnc3Ryb2tlLXdpZHRoJywgYCR7Ym9yZGVyV2lkdGh9YClcclxuICAgIC5zZXQoJ2ZpbGwnLCAnd2hpdGUnKVxyXG4gICAgLnNldCgnZmlsbC1vcGFjaXR5JywgMSk7XHJcblxyXG5cclxuICAgIGNvbnN0IHRleHRTdHlsZSA9IG5ldyBNYXAoKVxyXG4gICAgLnNldCgnYWxpZ25tZW50LWJhc2VsaW5lJywgJ21pZGRsZScpXHJcbiAgICAuc2V0KCdmb250LXNpemUnLCBgJHtmb250U2l6ZX1weGApXHJcbiAgICAuc2V0KCdmb250LWZhbWlseScsICdIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmJylcclxuICAgIC5zZXQoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpO1xyXG5cclxuICAgIGNvbnN0IHVJbmZvV2lkdGggPSB0ZXh0V2lkdGgodGV4dCwgeyBmYW1pbHk6IHRleHRTdHlsZS5nZXQoJ2ZvbnQtZmFtaWx5JyksIHNpemU6IGZvbnRTaXplfSkgKyA1O1xyXG5cclxuICAgIGNvbnN0IHVuaXRPZkluZm9ybWF0aW9uU3ZnID1cclxuICAgIGBcclxuICAgICAgJHtiYXNlU2hhcGVzLnJvdW5kUmVjdGFuZ2xlKHgsIHksIHVJbmZvV2lkdGgsIGhlaWdodCwgdWluZm9SZWN0U3R5bGUpfVxyXG4gICAgICAke2Jhc2VTaGFwZXMudGV4dCh0ZXh0LCB4ICsgKHVJbmZvV2lkdGggLyAyKSwgeSArICggaGVpZ2h0IC8gMiksICB0ZXh0U3R5bGUpfVxyXG4gICAgYDtcclxuXHJcbiAgICByZXR1cm4gdW5pdE9mSW5mb3JtYXRpb25Tdmc7XHJcbiAgfSxcclxuXHJcbiAgbXVsdGlJbWdTdGF0ZVZhciAoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3RhdGVWYXIsIGJvcmRlcldpZHRoPTMsIGZvbnRTaXplPTE0KSB7XHJcblxyXG4gICAgY29uc3Qgc3RhdGVWYXJTdHlsZSA9IG5ldyBNYXAoKVxyXG4gICAgLnNldCgnc3Ryb2tlJywgJyM1NTU1NTUnKVxyXG4gICAgLnNldCgnc3Ryb2tlLXdpZHRoJywgYCR7Ym9yZGVyV2lkdGh9YClcclxuICAgIC5zZXQoJ2ZpbGwnLCAnd2hpdGUnKVxyXG4gICAgLnNldCgnZmlsbC1vcGFjaXR5JywgMSk7XHJcblxyXG4gICAgY29uc3QgdGV4dFN0eWxlID0gbmV3IE1hcCgpXHJcbiAgICAuc2V0KCdhbGlnbm1lbnQtYmFzZWxpbmUnLCAnbWlkZGxlJylcclxuICAgIC5zZXQoJ2ZvbnQtc2l6ZScsIGAke2ZvbnRTaXplfXB4YClcclxuICAgIC5zZXQoJ2ZvbnQtZmFtaWx5JywgJ0hlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYnKVxyXG4gICAgLnNldCgndGV4dC1hbmNob3InLCAnbWlkZGxlJyk7XHJcblxyXG4gICAgY29uc3QgdHcgPSB0ZXh0V2lkdGgoc2JnbkRhdGEuc3RhdGVWYXJMYWJlbChzdGF0ZVZhciksIHsgZmFtaWx5OiB0ZXh0U3R5bGUuZ2V0KCdmb250LWZhbWlseScpLCBzaXplOiBmb250U2l6ZX0pICsgMTA7XHJcbiAgICBjb25zdCB3ID0gTWF0aC5tYXgodHcsIDMwKTtcclxuICAgIGNvbnN0IHN0YXRldmFyaWFibGVTdmcgPVxyXG4gICAgYFxyXG4gICAgICAke2Jhc2VTaGFwZXMuc3RhZGl1bSh4LCB5LCB3LCBoZWlnaHQsIHN0YXRlVmFyU3R5bGUpfVxyXG4gICAgICAke2Jhc2VTaGFwZXMudGV4dChzYmduRGF0YS5zdGF0ZVZhckxhYmVsKHN0YXRlVmFyKSwgeCArICggdyAvIDIgKSwgeSArIGhlaWdodCAvIDIsIHRleHRTdHlsZSl9XHJcbiAgICBgO1xyXG5cclxuICAgIHJldHVybiBzdGF0ZXZhcmlhYmxlU3ZnO1xyXG4gIH0sXHJcblxyXG4gIGNsb25lTWFya2VyIChub2RlV2lkdGgsIG5vZGVIZWlnaHQsIHNoYXBlRm4sIHNoYXBlRm5BcmdzKSB7XHJcbiAgICBjb25zdCBjbGlwSWQgPSAnY2xvbmVtYXJrZXInO1xyXG5cclxuICAgIGNvbnN0IGNsb25lTWFya2VyU3R5bGUgPSBuZXcgTWFwKClcclxuICAgIC5zZXQoJ3N0cm9rZScsICcjNkE2QTZBJylcclxuICAgIC5zZXQoJ3N0cm9rZS13aWR0aCcsICcxLjUnKVxyXG4gICAgLnNldCgnY2xpcC1wYXRoJywgYHVybCgjJHtjbGlwSWR9KWApXHJcbiAgICAuc2V0KCdmaWxsJywgJyNEMkQyRDInKTtcclxuXHJcbiAgICBjb25zdCBjbG9uZU1hcmtlclN2ZyA9XHJcbiAgICBgXHJcbiAgICAgICR7YmFzZVNoYXBlcy5jbGlwUGF0aChjbGlwSWQsIGJhc2VTaGFwZXMucmVjdGFuZ2xlLCAgWzAsIDMgKiBub2RlSGVpZ2h0IC8gNCwgbm9kZVdpZHRoLCBub2RlSGVpZ2h0LCBuZXcgTWFwKCldKX1cclxuICAgICAgJHtzaGFwZUZuKC4uLnNoYXBlRm5BcmdzLCBjbG9uZU1hcmtlclN0eWxlKX1cclxuICAgIGA7XHJcblxyXG4gICAgcmV0dXJuIGNsb25lTWFya2VyU3ZnO1xyXG4gIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gYXV4aWxpYXJ5SXRlbXM7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zYmduU3R5bGUvZ2x5cGgvYXV4aWxpYXJ5SXRlbXMuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9zcmMvc2JnblN0eWxlL2dseXBoL2F1eGlsaWFyeUl0ZW1zLmpzIiwiLyoqXG4gKiBsb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL2pxdWVyeS5vcmcvPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG5cbi8qKiBVc2VkIGFzIHRoZSBgVHlwZUVycm9yYCBtZXNzYWdlIGZvciBcIkZ1bmN0aW9uc1wiIG1ldGhvZHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGhvc3Qgb2JqZWN0IGluIElFIDwgOS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGhvc3Qgb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSG9zdE9iamVjdCh2YWx1ZSkge1xuICAvLyBNYW55IGhvc3Qgb2JqZWN0cyBhcmUgYE9iamVjdGAgb2JqZWN0cyB0aGF0IGNhbiBjb2VyY2UgdG8gc3RyaW5nc1xuICAvLyBkZXNwaXRlIGhhdmluZyBpbXByb3Blcmx5IGRlZmluZWQgYHRvU3RyaW5nYCBtZXRob2RzLlxuICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gIGlmICh2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZS50b1N0cmluZyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9ICEhKHZhbHVlICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGUsXG4gICAgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpLFxuICAgIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICByZXR1cm4gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA/IGVudHJpZXMubGVuZ3RoIDogMDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLnNldChrZXksIHZhbHVlKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSAoaXNGdW5jdGlvbih2YWx1ZSkgfHwgaXNIb3N0T2JqZWN0KHZhbHVlKSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgZnVuY2AgaGFzIGl0cyBzb3VyY2UgbWFza2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgZnVuY2AgaXMgbWFza2VkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTWFza2VkKGZ1bmMpIHtcbiAgcmV0dXJuICEhbWFza1NyY0tleSAmJiAobWFza1NyY0tleSBpbiBmdW5jKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IG1lbW9pemVzIHRoZSByZXN1bHQgb2YgYGZ1bmNgLiBJZiBgcmVzb2x2ZXJgIGlzXG4gKiBwcm92aWRlZCwgaXQgZGV0ZXJtaW5lcyB0aGUgY2FjaGUga2V5IGZvciBzdG9yaW5nIHRoZSByZXN1bHQgYmFzZWQgb24gdGhlXG4gKiBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uLiBCeSBkZWZhdWx0LCB0aGUgZmlyc3QgYXJndW1lbnRcbiAqIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbiBpcyB1c2VkIGFzIHRoZSBtYXAgY2FjaGUga2V5LiBUaGUgYGZ1bmNgXG4gKiBpcyBpbnZva2VkIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIHRoZSBtZW1vaXplZCBmdW5jdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogVGhlIGNhY2hlIGlzIGV4cG9zZWQgYXMgdGhlIGBjYWNoZWAgcHJvcGVydHkgb24gdGhlIG1lbW9pemVkXG4gKiBmdW5jdGlvbi4gSXRzIGNyZWF0aW9uIG1heSBiZSBjdXN0b21pemVkIGJ5IHJlcGxhY2luZyB0aGUgYF8ubWVtb2l6ZS5DYWNoZWBcbiAqIGNvbnN0cnVjdG9yIHdpdGggb25lIHdob3NlIGluc3RhbmNlcyBpbXBsZW1lbnQgdGhlXG4gKiBbYE1hcGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXByb3BlcnRpZXMtb2YtdGhlLW1hcC1wcm90b3R5cGUtb2JqZWN0KVxuICogbWV0aG9kIGludGVyZmFjZSBvZiBgZGVsZXRlYCwgYGdldGAsIGBoYXNgLCBhbmQgYHNldGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBoYXZlIGl0cyBvdXRwdXQgbWVtb2l6ZWQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcmVzb2x2ZXJdIFRoZSBmdW5jdGlvbiB0byByZXNvbHZlIHRoZSBjYWNoZSBrZXkuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBtZW1vaXplZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxLCAnYic6IDIgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2MnOiAzLCAnZCc6IDQgfTtcbiAqXG4gKiB2YXIgdmFsdWVzID0gXy5tZW1vaXplKF8udmFsdWVzKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogdmFsdWVzKG90aGVyKTtcbiAqIC8vID0+IFszLCA0XVxuICpcbiAqIG9iamVjdC5hID0gMjtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogLy8gTW9kaWZ5IHRoZSByZXN1bHQgY2FjaGUuXG4gKiB2YWx1ZXMuY2FjaGUuc2V0KG9iamVjdCwgWydhJywgJ2InXSk7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsnYScsICdiJ11cbiAqXG4gKiAvLyBSZXBsYWNlIGBfLm1lbW9pemUuQ2FjaGVgLlxuICogXy5tZW1vaXplLkNhY2hlID0gV2Vha01hcDtcbiAqL1xuZnVuY3Rpb24gbWVtb2l6ZShmdW5jLCByZXNvbHZlcikge1xuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJyB8fCAocmVzb2x2ZXIgJiYgdHlwZW9mIHJlc29sdmVyICE9ICdmdW5jdGlvbicpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHZhciBtZW1vaXplZCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICBrZXkgPSByZXNvbHZlciA/IHJlc29sdmVyLmFwcGx5KHRoaXMsIGFyZ3MpIDogYXJnc1swXSxcbiAgICAgICAgY2FjaGUgPSBtZW1vaXplZC5jYWNoZTtcblxuICAgIGlmIChjYWNoZS5oYXMoa2V5KSkge1xuICAgICAgcmV0dXJuIGNhY2hlLmdldChrZXkpO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICBtZW1vaXplZC5jYWNoZSA9IGNhY2hlLnNldChrZXksIHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgbWVtb2l6ZWQuY2FjaGUgPSBuZXcgKG1lbW9pemUuQ2FjaGUgfHwgTWFwQ2FjaGUpO1xuICByZXR1cm4gbWVtb2l6ZWQ7XG59XG5cbi8vIEFzc2lnbiBjYWNoZSB0byBgXy5tZW1vaXplYC5cbm1lbW9pemUuQ2FjaGUgPSBNYXBDYWNoZTtcblxuLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOC05IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5IGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBpc09iamVjdCh2YWx1ZSkgPyBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWVtb2l6ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC5tZW1vaXplL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy9sb2Rhc2gubWVtb2l6ZS9pbmRleC5qcyIsImxldCBzYmduU3R5bGVTaGVldCA9IHJlcXVpcmUoJy4vc2JnblN0eWxlLycpO1xyXG5cclxubGV0IGRlZmF1bHRPcHRpb25zID0ge1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjeXRvc2NhcGUpe1xyXG4gIHJldHVybiBzYmduU3R5bGVTaGVldChjeXRvc2NhcGUpO1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9zcmMvaW5kZXguanMiLCJjb25zdCBlbGVtZW50U3R5bGUgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcclxuY29uc3Qgc2JnbnN2ZyA9IHJlcXVpcmUoJy4vZ2x5cGgnKTtcclxuXHJcbmNvbnN0IHNiZ25TdHlsZVNoZWV0ID0gZnVuY3Rpb24gKGN5dG9zY2FwZSkge1xyXG5cclxuICByZXR1cm4gY3l0b3NjYXBlLnN0eWxlc2hlZXQoKVxyXG4gICAgICAgIC8vIGdlbmVyYWwgbm9kZSBzdHlsZVxyXG4gICAgICAgIC5zZWxlY3Rvcignbm9kZScpXHJcbiAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAnc2hhcGUnOiAobm9kZSkgPT4gZWxlbWVudFN0eWxlLnNiZ25TaGFwZShub2RlKSxcclxuICAgICAgICAgICdjb250ZW50JzogKG5vZGUpID0+IGVsZW1lbnRTdHlsZS5zYmduQ29udGVudChub2RlKSxcclxuICAgICAgICAgICdmb250LXNpemUnOiAyMCxcclxuICAgICAgICAgICd3aWR0aCc6IChub2RlKSA9PiBlbGVtZW50U3R5bGUud2lkdGgobm9kZSksXHJcbiAgICAgICAgICAnaGVpZ2h0JzogKG5vZGUpID0+IGVsZW1lbnRTdHlsZS5oZWlnaHQobm9kZSksXHJcbiAgICAgICAgICAndGV4dC12YWxpZ24nOiAnY2VudGVyJyxcclxuICAgICAgICAgICd0ZXh0LWhhbGlnbic6ICdjZW50ZXInLFxyXG4gICAgICAgICAgJ2JvcmRlci13aWR0aCc6IDEuNSxcclxuICAgICAgICAgICdib3JkZXItY29sb3InOiAnIzU1NScsXHJcbiAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6ICcjZjZmNmY2JyxcclxuICAgICAgICAgICd0ZXh0LW9wYWNpdHknOiAxLFxyXG4gICAgICAgICAgJ29wYWNpdHknOiAxLFxyXG4gICAgICAgICAgJ3RleHQtb3V0bGluZS1jb2xvcic6ICd3aGl0ZScsXHJcbiAgICAgICAgICAndGV4dC1vdXRsaW5lLW9wYWNpdHknOiAxLFxyXG4gICAgICAgICAgJ3RleHQtb3V0bGluZS13aWR0aCc6IDAuNzVcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zZWxlY3Rvcignbm9kZTpzZWxlY3RlZCcpXHJcbiAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6ICcjZDY3NjE0JyxcclxuICAgICAgICAgICd0YXJnZXQtYXJyb3ctY29sb3InOiAnIzAwMCcsXHJcbiAgICAgICAgICAndGV4dC1vdXRsaW5lLWNvbG9yJzogJyMwMDAnXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc2VsZWN0b3IoJ25vZGU6YWN0aXZlJylcclxuICAgICAgICAuY3NzKHtcclxuICAgICAgICAgICdvdmVybGF5LWNvbG9yJzogJyNkNjc2MTQnLFxyXG4gICAgICAgICAgJ292ZXJsYXktcGFkZGluZyc6ICcxNCdcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyBkcmF3IHNiZ24gc3BlY2lmaWMgc3R5bGluZyAoYXV4aWxpYXJ5IGl0ZW1zLCBjbG9uZW1hcmtlciwgZXRjLilcclxuICAgICAgICAuc2VsZWN0b3IoYFxyXG4gICAgICAgICAgbm9kZVtjbGFzcz1cInVuc3BlY2lmaWVkIGVudGl0eVwiXSxcclxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJzaW1wbGUgY2hlbWljYWxcIl0sIG5vZGVbY2xhc3M9XCJzaW1wbGUgY2hlbWljYWwgbXVsdGltZXJcIl0sXHJcbiAgICAgICAgICBub2RlW2NsYXNzPVwibWFjcm9tb2xlY3VsZVwiXSwgbm9kZVtjbGFzcz1cIm1hY3JvbW9sZWN1bGUgbXVsdGltZXJcIl0sXHJcbiAgICAgICAgICBub2RlW2NsYXNzPVwibnVjbGVpYyBhY2lkIGZlYXR1cmVcIl0sIG5vZGVbY2xhc3M9XCJudWNsZWljIGFjaWQgZmVhdHVyZSBtdWx0aW1lclwiXSxcclxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJwZXJ0dXJiaW5nIGFnZW50XCJdLFxyXG4gICAgICAgICAgbm9kZVtjbGFzcz1cInBoZW5vdHlwZVwiXSxcclxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJjb21wbGV4XCJdLCBub2RlW2NsYXNzPVwiY29tcGxleCBtdWx0aW1lclwiXSwgbm9kZVtjbGFzcz1cImNvbXBhcnRtZW50XCJdXHJcbiAgICAgICAgYClcclxuICAgICAgICAuY3NzKHtcclxuICAgICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogKG5vZGUpID0+IHNiZ25zdmcuZHJhdyhub2RlKS5iZ0ltYWdlLFxyXG4gICAgICAgICAgJ2JhY2tncm91bmQtd2lkdGgnOiAobm9kZSkgPT4gc2JnbnN2Zy5kcmF3KG5vZGUpLmJnV2lkdGgsXHJcbiAgICAgICAgICAnYmFja2dyb3VuZC1wb3NpdGlvbi14JzogKG5vZGUpID0+IHNiZ25zdmcuZHJhdyhub2RlKS5iZ1Bvc1gsXHJcbiAgICAgICAgICAnYmFja2dyb3VuZC1wb3NpdGlvbi15JzogKG5vZGUpID0+IHNiZ25zdmcuZHJhdyhub2RlKS5iZ1Bvc1ksXHJcbiAgICAgICAgICAnYmFja2dyb3VuZC1maXQnOiAobm9kZSkgPT4gc2JnbnN2Zy5kcmF3KG5vZGUpLmJnRml0LFxyXG4gICAgICAgICAgJ2JhY2tncm91bmQtY2xpcCc6IChub2RlKSA9PiBzYmduc3ZnLmRyYXcobm9kZSkuYmdDbGlwLFxyXG4gICAgICAgICAgJ3BhZGRpbmcnOiAobm9kZSkgPT4gc2JnbnN2Zy5kcmF3KG5vZGUpLnBhZGRpbmcsXHJcbiAgICAgICAgICAnYm9yZGVyLXdpZHRoJzogKG5vZGUpID0+IHNiZ25zdmcuZHJhdyhub2RlKS5ib3JkZXJXaWR0aFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC5zZWxlY3RvcihgXHJcbiAgICAgICAgICBub2RlW2NsYXNzPVwic2ltcGxlIGNoZW1pY2FsIG11bHRpbWVyXCJdLFxyXG4gICAgICAgICAgbm9kZVtjbGFzcz1cIm1hY3JvbW9sZWN1bGUgbXVsdGltZXJcIl0sXHJcbiAgICAgICAgICBub2RlW2NsYXNzPVwibnVjbGVpYyBhY2lkIGZlYXR1cmUgbXVsdGltZXJcIl0sXHJcbiAgICAgICAgICBub2RlW2NsYXNzPVwiY29tcGxleCBtdWx0aW1lclwiXVxyXG4gICAgICAgIGApXHJcbiAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAnZ2hvc3QnOiAneWVzJyxcclxuICAgICAgICAgICdnaG9zdC1vcGFjaXR5JzogMVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC5zZWxlY3RvcihgXHJcbiAgICAgICAgICBub2RlW2NsYXNzPVwibWFjcm9tb2xlY3VsZSBtdWx0aW1lclwiXSxcclxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJudWNsZWljIGFjaWQgZmVhdHVyZSBtdWx0aW1lclwiXVxyXG4gICAgICAgIGApXHJcbiAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAnZ2hvc3Qtb2Zmc2V0LXgnOiAxMixcclxuICAgICAgICAgICdnaG9zdC1vZmZzZXQteSc6IDEyXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLnNlbGVjdG9yKGBcclxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJzaW1wbGUgY2hlbWljYWwgbXVsdGltZXJcIl1cclxuICAgICAgICBgKVxyXG4gICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgJ2dob3N0LW9mZnNldC14JzogNSxcclxuICAgICAgICAgICdnaG9zdC1vZmZzZXQteSc6IDVcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAuc2VsZWN0b3IoYFxyXG4gICAgICAgICAgbm9kZVtjbGFzcz1cImNvbXBsZXggbXVsdGltZXJcIl1cclxuICAgICAgICBgKVxyXG4gICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgJ2dob3N0LW9mZnNldC14JzogMTYsXHJcbiAgICAgICAgICAnZ2hvc3Qtb2Zmc2V0LXknOiAxNlxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIGNvbXBvdW5kIG5vZGUgc3BlY2lmaWMgc3R5bGVcclxuICAgICAgICAuc2VsZWN0b3IoJ25vZGVbY2xhc3M9XCJjb21wbGV4XCJdLCBub2RlW2NsYXNzPVwiY29tcGxleCBtdWx0aW1lclwiXSwgbm9kZVtjbGFzcz1cImNvbXBhcnRtZW50XCJdJylcclxuICAgICAgICAuY3NzKHtcclxuICAgICAgICAgICdjb21wb3VuZC1zaXppbmctd3J0LWxhYmVscyc6ICdleGNsdWRlJyxcclxuICAgICAgICAgICd0ZXh0LXZhbGlnbic6ICdib3R0b20nLFxyXG4gICAgICAgICAgJ3RleHQtaGFsaWduJzogJ2NlbnRlcicsXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gcHJvY2VzcyBub2RlIHNwZWNpZmljIHN0eWxlXHJcbiAgICAgICAgLnNlbGVjdG9yKCdub2RlW2NsYXNzPVwiYXNzb2NpYXRpb25cIl0sIG5vZGVbY2xhc3M9XCJkaXNzb2NpYXRpb25cIl0nKVxyXG4gICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgJ2JhY2tncm91bmQtb3BhY2l0eSc6IDFcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zZWxlY3Rvcignbm9kZVtjbGFzcz1cImFzc29jaWF0aW9uXCJdJylcclxuICAgICAgICAuY3NzKHtcclxuICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogJyM2QjZCNkInXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gc291cmNlIGFuZCBzaW5rIGFuZCBkaXNzb2NpYXRpb24gYXJlIGRyYXduIGRpZmZlcmVudGx5IGJlY2F1c2VcclxuICAgICAgICAvLyBvZiB0aGVpciB1bmlxdWUgc2hhcGVcclxuICAgICAgICAuc2VsZWN0b3IoJ25vZGVbY2xhc3M9XCJzb3VyY2UgYW5kIHNpbmtcIl0nKVxyXG4gICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnOiAobm9kZSkgPT4gc2JnbnN2Zy5kcmF3KG5vZGUpLFxyXG4gICAgICAgICAgJ2JhY2tncm91bmQtZml0JzogJ25vbmUnLFxyXG4gICAgICAgICAgJ2JhY2tncm91bmQtd2lkdGgnOiAnMTAwJScsXHJcbiAgICAgICAgICAnYmFja2dyb3VuZC1oZWlnaHQnOiAnMTAwJScsXHJcbiAgICAgICAgICAnYmFja2dyb3VuZC1jbGlwJzogJ25vbmUnLFxyXG4gICAgICAgICAgJ2JhY2tncm91bmQtcmVwZWF0JzogJ25vLXJlcGVhdCcsXHJcbiAgICAgICAgICAnYm9yZGVyLXdpZHRoJzogMCxcclxuICAgICAgICAgICdzaGFwZS1wb2x5Z29uLXBvaW50cyc6ICctMC44NiwgMC41LCAtMC43NSwgMC42NSwgLTEsIDAuOTUsIC0wLjk1LCAxLCAtMC42NSwgMC43NSwgLTAuNSwgMC44NiwgMCwgMSwgMC41LCAwLjg2LCAwLjcxLCAwLjcxLCAwLjg2LCAwLjUsIDEsIDAsIDAuODYsIC0wLjUsIDAuNzUsIC0wLjY1LCAxLCAtMC45NSwgMC45NSwgLTEsIDAuNjUsIC0wLjc1LCAwLjUsIC0wLjg2LCAwLCAtMSwgLTAuNSwgLTAuODYsIC0wLjcxLCAtMC43MSwgLTAuODYsIC0wLjUsIC0xLCAwJyxcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyBzb3VyY2UgYW5kIHNpbmsgYW5kIGRpc3NvY2lhdGlvbiBhcmUgZHJhd24gZGlmZmVyZW50bHkgYmVjYXVzZVxyXG4gICAgICAgIC8vIG9mIHRoZWlyIHVuaXF1ZSBzaGFwZVxyXG4gICAgICAgIC5zZWxlY3Rvcignbm9kZVtjbGFzcz1cImRpc3NvY2lhdGlvblwiXScpXHJcbiAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAnYmFja2dyb3VuZC1pbWFnZSc6IChub2RlKSA9PiBzYmduc3ZnLmRyYXcobm9kZSksXHJcbiAgICAgICAgICAnYmFja2dyb3VuZC1maXQnOiAnbm9uZScsXHJcbiAgICAgICAgICAnYmFja2dyb3VuZC13aWR0aCc6ICcxMDAlJyxcclxuICAgICAgICAgICdiYWNrZ3JvdW5kLWhlaWdodCc6ICcxMDAlJyxcclxuICAgICAgICAgICdiYWNrZ3JvdW5kLWNsaXAnOiAnbm9uZScsXHJcbiAgICAgICAgICAnYmFja2dyb3VuZC1yZXBlYXQnOiAnbm8tcmVwZWF0JyxcclxuICAgICAgICAgICdib3JkZXItd2lkdGgnOiAwLFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIGVkZ2Ugc3R5bGluZ1xyXG4gICAgICAgIC5zZWxlY3RvcignZWRnZScpXHJcbiAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAnYXJyb3ctc2NhbGUnOiAxLjc1LFxyXG4gICAgICAgICAgJ2N1cnZlLXN0eWxlJzogJ2JlemllcicsXHJcbiAgICAgICAgICAnbGluZS1jb2xvcic6ICcjNTU1JyxcclxuICAgICAgICAgICd0YXJnZXQtYXJyb3ctZmlsbCc6ICdob2xsb3cnLFxyXG4gICAgICAgICAgJ3NvdXJjZS1hcnJvdy1maWxsJzogJ2hvbGxvdycsXHJcbiAgICAgICAgICAnd2lkdGgnOiAxLjUsXHJcbiAgICAgICAgICAndGFyZ2V0LWFycm93LWNvbG9yJzogJyM1NTUnLFxyXG4gICAgICAgICAgJ3NvdXJjZS1hcnJvdy1jb2xvcic6ICcjNTU1JyxcclxuICAgICAgICAgICd0ZXh0LWJvcmRlci1jb2xvcic6ICcjNTU1JyxcclxuICAgICAgICAgICdjb2xvcic6ICcjNTU1J1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnNlbGVjdG9yKCdlZGdlOnNlbGVjdGVkJylcclxuICAgICAgICAuY3NzKHtcclxuICAgICAgICAgICdjb2xvcic6ICcjZDY3NjE0JyxcclxuICAgICAgICAgICdsaW5lLWNvbG9yJzogJyNkNjc2MTQnLFxyXG4gICAgICAgICAgJ3RleHQtYm9yZGVyLWNvbG9yJzogJyNkNjc2MTQnLFxyXG4gICAgICAgICAgJ3NvdXJjZS1hcnJvdy1jb2xvcic6ICcjZDY3NjE0JyxcclxuICAgICAgICAgICd0YXJnZXQtYXJyb3ctY29sb3InOiAnI2Q2NzYxNCdcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zZWxlY3RvcignZWRnZTphY3RpdmUnKVxyXG4gICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgJ2JhY2tncm91bmQtb3BhY2l0eSc6IDAuNywgJ292ZXJsYXktY29sb3InOiAnI2Q2NzYxNCcsXHJcbiAgICAgICAgICAnb3ZlcmxheS1wYWRkaW5nJzogJzgnXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc2VsZWN0b3IoJ2VkZ2VbY2FyZGluYWxpdHkgPiAwXScpXHJcbiAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAndGV4dC1iYWNrZ3JvdW5kLXNoYXBlJzogJ3JlY3RhbmdsZScsXHJcbiAgICAgICAgICAndGV4dC1ib3JkZXItb3BhY2l0eSc6ICcxJyxcclxuICAgICAgICAgICd0ZXh0LWJvcmRlci13aWR0aCc6ICcxJyxcclxuICAgICAgICAgICd0ZXh0LWJhY2tncm91bmQtY29sb3InOiAnd2hpdGUnLFxyXG4gICAgICAgICAgJ3RleHQtYmFja2dyb3VuZC1vcGFjaXR5JzogJzEnXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc2VsZWN0b3IoJ2VkZ2VbY2xhc3M9XCJjb25zdW1wdGlvblwiXVtjYXJkaW5hbGl0eSA+IDBdLCBlZGdlW2NsYXNzPVwicHJvZHVjdGlvblwiXVtjYXJkaW5hbGl0eSA+IDBdJylcclxuICAgICAgICAuY3NzKHtcclxuICAgICAgICAgICdzb3VyY2UtbGFiZWwnOiAoZWRnZSkgPT4gJycgKyBlZGdlLmRhdGEoJ2NhcmRpbmFsaXR5JyksXHJcbiAgICAgICAgICAnc291cmNlLXRleHQtb2Zmc2V0JzogMTBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zZWxlY3RvcignZWRnZVtjbGFzc10nKVxyXG4gICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgJ3RhcmdldC1hcnJvdy1zaGFwZSc6IChlZGdlKSA9PiBlbGVtZW50U3R5bGUuc2JnbkFycm93U2hhcGUoZWRnZSksXHJcbiAgICAgICAgICAnc291cmNlLWFycm93LXNoYXBlJzogJ25vbmUnXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc2VsZWN0b3IoJ2VkZ2VbY2xhc3M9XCJpbmhpYml0aW9uXCJdJylcclxuICAgICAgICAuY3NzKHtcclxuICAgICAgICAgICd0YXJnZXQtYXJyb3ctZmlsbCc6ICdmaWxsZWQnXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc2VsZWN0b3IoJ2VkZ2VbY2xhc3M9XCJwcm9kdWN0aW9uXCJdJylcclxuICAgICAgICAuY3NzKHtcclxuICAgICAgICAgICd0YXJnZXQtYXJyb3ctZmlsbCc6ICdmaWxsZWQnXHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgIC8vIGNvcmVcclxuICAgICAgICAuc2VsZWN0b3IoJ2NvcmUnKVxyXG4gICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgJ3NlbGVjdGlvbi1ib3gtY29sb3InOiAnI2Q2NzYxNCcsXHJcbiAgICAgICAgICAnc2VsZWN0aW9uLWJveC1vcGFjaXR5JzogJzAuMicsICdzZWxlY3Rpb24tYm94LWJvcmRlci1jb2xvcic6ICcjZDY3NjE0J1xyXG4gICAgICAgIH0pO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBzYmduU3R5bGVTaGVldDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NiZ25TdHlsZS9pbmRleC5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3NyYy9zYmduU3R5bGUvaW5kZXguanMiLCJjb25zdCBtZW1vaXplID0gcmVxdWlyZSgnbG9kYXNoLm1lbW9pemUnKTtcclxuXHJcbmNvbnN0IGNvbnRhaW5lck5vZGVzID0gcmVxdWlyZSgnLi9jb250YWluZXJOb2Rlcy5qcycpO1xyXG5jb25zdCBlbnRpdHlQb29sTm9kZXMgPSByZXF1aXJlKCcuL2VudGl0eVBvb2xOb2Rlcy5qcycpO1xyXG5jb25zdCBwcm9jZXNzTm9kZXMgPSByZXF1aXJlKCcuL3Byb2Nlc3NOb2Rlcy5qcycpO1xyXG5cclxuY29uc3Qgc2JnbkRhdGEgPSByZXF1aXJlKCcuLi91dGlsL3NiZ24uanMnKTtcclxuXHJcbmNvbnN0IGNhY2hlS2V5Rm4gPSAobm9kZSkgPT4gJycgKyBKU09OLnN0cmluZ2lmeShub2RlLmlkKCkpO1xyXG5cclxuY29uc3Qgc2Jnbk5vZGVTaGFwZU1hcCA9IG5ldyBNYXAoKVxyXG4vLyBwcm9jZXNzIG5vZGVzXHJcbi5zZXQoJ2Rpc3NvY2lhdGlvbicsIG1lbW9pemUocHJvY2Vzc05vZGVzLmRpc3NvY2lhdGlvbiwgY2FjaGVLZXlGbikpXHJcbi5zZXQoJ3BoZW5vdHlwZScsIG1lbW9pemUocHJvY2Vzc05vZGVzLnBoZW5vdHlwZSwgY2FjaGVLZXlGbikpXHJcblxyXG4vLyBlbnRpdHkgcG9vbCBub2Rlc1xyXG4uc2V0KCdzb3VyY2UgYW5kIHNpbmsnLCBtZW1vaXplKGVudGl0eVBvb2xOb2Rlcy5zb3VyY2VBbmRTaW5rLCBjYWNoZUtleUZuKSlcclxuLnNldCgndW5zcGVjaWZpZWQgZW50aXR5JywgbWVtb2l6ZShlbnRpdHlQb29sTm9kZXMudW5zcGVjaWZpZWRFbnRpdHksIGNhY2hlS2V5Rm4pKVxyXG4uc2V0KCdzaW1wbGUgY2hlbWljYWwnLCBtZW1vaXplKGVudGl0eVBvb2xOb2Rlcy5zaW1wbGVDaGVtaWNhbCwgY2FjaGVLZXlGbikpXHJcbi5zZXQoJ21hY3JvbW9sZWN1bGUnLCBtZW1vaXplKGVudGl0eVBvb2xOb2Rlcy5tYWNyb21vbGVjdWxlLCBjYWNoZUtleUZuKSlcclxuLnNldCgnbnVjbGVpYyBhY2lkIGZlYXR1cmUnLCBtZW1vaXplKGVudGl0eVBvb2xOb2Rlcy5udWNsZWljQWNpZEZlYXR1cmUsIGNhY2hlS2V5Rm4pKVxyXG4uc2V0KCdjb21wbGV4JywgbWVtb2l6ZShlbnRpdHlQb29sTm9kZXMuY29tcGxleCwgY2FjaGVLZXlGbikpXHJcbi5zZXQoJ3BlcnR1cmJpbmcgYWdlbnQnLCBtZW1vaXplKGVudGl0eVBvb2xOb2Rlcy5wZXJ0dXJiaW5nQWdlbnQsIGNhY2hlS2V5Rm4pKVxyXG5cclxuLy8gY29udGFpbmVyIG5vZGVzXHJcbi5zZXQoJ2NvbXBhcnRtZW50JywgbWVtb2l6ZShjb250YWluZXJOb2Rlcy5jb21wYXJ0bWVudCwgY2FjaGVLZXlGbikpO1xyXG5cclxuXHJcbmNvbnN0IGRyYXcgPSAobm9kZSkgPT4ge1xyXG4gIGNvbnN0IHNiZ25DbGFzcyA9IHNiZ25EYXRhLnNiZ25DbGFzcyhub2RlKS5yZXBsYWNlKCcgbXVsdGltZXInLCAnJyk7XHJcbiAgbGV0IHNoYXBlRm4gPSBzYmduTm9kZVNoYXBlTWFwLmdldChzYmduQ2xhc3MpO1xyXG4gIGlmIChzaGFwZUZuID09IG51bGwpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7c2JnbkNsYXNzfSBkb2VzIG5vdCBoYXZlIGEgc2hhcGUgaW1wbGVtZW50YXRpb25gKTtcclxuICB9XHJcbiAgcmV0dXJuIHNoYXBlRm4obm9kZSk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBkcmF3OiBkcmF3XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zYmduU3R5bGUvZ2x5cGgvaW5kZXguanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9zcmMvc2JnblN0eWxlL2dseXBoL2luZGV4LmpzIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsImNvbnN0IHN2Z1N0ciA9IHJlcXVpcmUoJy4uL3V0aWwvc3ZnJykuc3ZnU3RyO1xyXG5jb25zdCBzYmduRGF0YSA9IHJlcXVpcmUoJy4uL3V0aWwvc2JnbicpO1xyXG5jb25zdCBtZW1vaXplID0gcmVxdWlyZSgnbG9kYXNoLm1lbW9pemUnKTtcclxuXHJcbmNvbnN0IGF1eGlsaWFyeUl0ZW1zID0gcmVxdWlyZSgnLi9hdXhpbGlhcnlJdGVtcycpO1xyXG5jb25zdCBiYXNlU2hhcGVzID0gcmVxdWlyZSgnLi9iYXNlU2hhcGVzJyk7XHJcblxyXG5jb25zdCBjb250YWluZXJOb2RlcyA9IHtcclxuXHJcbiAgY29tcGFydG1lbnQgKG5vZGUpIHtcclxuICAgIGNvbnN0IGF1eEl0ZW1XaWR0aCA9IDYwO1xyXG4gICAgY29uc3QgYXV4SXRlbUhlaWdodCA9IDQwO1xyXG4gICAgY29uc3QgdUluZm9zID0gc2JnbkRhdGEuZ2V0VW5pdEluZm9zKG5vZGUpO1xyXG5cclxuICAgIGNvbnN0IHN0eWxlID0gbmV3IE1hcCgpXHJcbiAgICAuc2V0KCdzdHJva2UnLCAnIzU1NTU1NScpXHJcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCAnNicpO1xyXG5cclxuICAgIGNvbnN0IHVJbmZvU3ZnID0gc3ZnU3RyKFxyXG4gICAgICB1SW5mb3MubGVuZ3RoID4gMCA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nVW5pdE9mSW5mb3JtYXRpb24oMiwgMCwgYXV4SXRlbVdpZHRoIC0gNSwgYXV4SXRlbUhlaWdodCAtIDMsIHVJbmZvc1swXSkgOiAnJyxcclxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XHJcbiAgICApO1xyXG5cclxuICAgIGxldCBsaW5lU3ZnID0gc3ZnU3RyKFxyXG4gICAgICB1SW5mb3MubGVuZ3RoID4gMCA/IGJhc2VTaGFwZXMubGluZSgwLCAwLCBhdXhJdGVtV2lkdGgsIDAsIHN0eWxlKSA6ICcnLFxyXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYmdJbWFnZTogW2xpbmVTdmcsIHVJbmZvU3ZnXSxcclxuICAgICAgYmdXaWR0aDogWycxMDAlJ10sXHJcbiAgICAgIGJnUG9zWDogWycwJScsICcyNSUnXSxcclxuICAgICAgYmdQb3NZOiBbJzE5cHgnLCAnMCUnXSxcclxuICAgICAgYmdGaXQ6IFsnY29udGFpbicsICdub25lJ10sXHJcbiAgICAgIGJnQ2xpcDogJ25vZGUnLFxyXG4gICAgICBwYWRkaW5nOiAnMzhweCcsXHJcbiAgICAgIGJvcmRlcldpZHRoOiAnNCdcclxuICAgIH07XHJcbiAgfVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBjb250YWluZXJOb2RlcztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NiZ25TdHlsZS9nbHlwaC9jb250YWluZXJOb2Rlcy5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3NyYy9zYmduU3R5bGUvZ2x5cGgvY29udGFpbmVyTm9kZXMuanMiLCJ2YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcbnZhciBleHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpO1xuXG52YXIgc3VwcG9ydGVkID0gZnVuY3Rpb24oKSB7XG5cdGlmKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgIT09ICdmdW5jdGlvbicpIHJldHVybiBmYWxzZTtcblxuXHR2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5cdGlmKHR5cGVvZiBjYW52YXMuZ2V0Q29udGV4dCAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIGZhbHNlO1xuXG5cdHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cdHJldHVybiAhIWNvbnRleHQgJiYgKHR5cGVvZiBjb250ZXh0Lm1lYXN1cmVUZXh0ID09PSAnZnVuY3Rpb24nKTtcbn07XG5cbnZhciBpbml0aWFsaXplID0gZnVuY3Rpb24oKSB7XG5cdHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcblx0dmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuXHR2YXIgd2lkdGggPSBmdW5jdGlvbihzdHIsIG9wdGlvbnMpIHtcblx0XHRvcHRpb25zID0gZXh0ZW5kKHtcblx0XHRcdHN0eWxlOiAnbm9ybWFsJyxcblx0XHRcdHZhcmlhbnQ6ICdub3JtYWwnLFxuXHRcdFx0d2VpZ2h0OiAnbm9ybWFsJyxcblx0XHRcdHNpemU6ICdtZWRpdW0nLFxuXHRcdFx0ZmFtaWx5OiAnc2Fucy1zZXJpZicsXG5cdFx0XHRhbGlnbjogJ3N0YXJ0Jyxcblx0XHRcdGJhc2VsaW5lOiAnYWxwaGFiZXRpYydcblx0XHR9LCBvcHRpb25zKTtcblxuXHRcdHZhciBzaXplID0gb3B0aW9ucy5zaXplO1xuXHRcdGlmKHR5cGVvZiBzaXplID09PSAnbnVtYmVyJykgc2l6ZSA9IHNpemUgKyAncHgnO1xuXG5cdFx0Y29udGV4dC5mb250ID0gdXRpbC5mb3JtYXQoJyVzICVzICVzICVzICVzJyxcblx0XHRcdG9wdGlvbnMuc3R5bGUsXG5cdFx0XHRvcHRpb25zLnZhcmlhbnQsXG5cdFx0XHRvcHRpb25zLndlaWdodCxcblx0XHRcdHNpemUsXG5cdFx0XHRvcHRpb25zLmZhbWlseSk7XG5cdFx0Y29udGV4dC50ZXh0QWxpZ24gPSBvcHRpb25zLmFsaWduO1xuXHRcdGNvbnRleHQudGV4dEJhc2VsaW5lID0gb3B0aW9ucy5iYXNlbGluZTtcblxuXHRcdHJldHVybiBjb250ZXh0Lm1lYXN1cmVUZXh0KHN0cikud2lkdGg7XG5cdH07XG5cblx0d2lkdGguc3VwcG9ydGVkID0gdHJ1ZTtcblx0cmV0dXJuIHdpZHRoO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdXBwb3J0ZWQoKSA/IGluaXRpYWxpemUoKSA6IChmdW5jdGlvbigpIHtcblx0dmFyIHdpZHRoID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIDA7XG5cdH07XG5cblx0d2lkdGguc3VwcG9ydGVkID0gZmFsc2U7XG5cdHJldHVybiB3aWR0aDtcbn0oKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy90ZXh0LXdpZHRoL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9ub2RlX21vZHVsZXMvdGV4dC13aWR0aC9pbmRleC5qcyIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIHx8XG4gIGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob2JqKSB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgIHZhciBkZXNjcmlwdG9ycyA9IHt9O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgZGVzY3JpcHRvcnNba2V5c1tpXV0gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5c1tpXSk7XG4gICAgfVxuICAgIHJldHVybiBkZXNjcmlwdG9ycztcbiAgfTtcblxudmFyIGZvcm1hdFJlZ0V4cCA9IC8lW3NkaiVdL2c7XG5leHBvcnRzLmZvcm1hdCA9IGZ1bmN0aW9uKGYpIHtcbiAgaWYgKCFpc1N0cmluZyhmKSkge1xuICAgIHZhciBvYmplY3RzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG9iamVjdHMucHVzaChpbnNwZWN0KGFyZ3VtZW50c1tpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0cy5qb2luKCcgJyk7XG4gIH1cblxuICB2YXIgaSA9IDE7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICB2YXIgbGVuID0gYXJncy5sZW5ndGg7XG4gIHZhciBzdHIgPSBTdHJpbmcoZikucmVwbGFjZShmb3JtYXRSZWdFeHAsIGZ1bmN0aW9uKHgpIHtcbiAgICBpZiAoeCA9PT0gJyUlJykgcmV0dXJuICclJztcbiAgICBpZiAoaSA+PSBsZW4pIHJldHVybiB4O1xuICAgIHN3aXRjaCAoeCkge1xuICAgICAgY2FzZSAnJXMnOiByZXR1cm4gU3RyaW5nKGFyZ3NbaSsrXSk7XG4gICAgICBjYXNlICclZCc6IHJldHVybiBOdW1iZXIoYXJnc1tpKytdKTtcbiAgICAgIGNhc2UgJyVqJzpcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYXJnc1tpKytdKTtcbiAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgIHJldHVybiAnW0NpcmN1bGFyXSc7XG4gICAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB4O1xuICAgIH1cbiAgfSk7XG4gIGZvciAodmFyIHggPSBhcmdzW2ldOyBpIDwgbGVuOyB4ID0gYXJnc1srK2ldKSB7XG4gICAgaWYgKGlzTnVsbCh4KSB8fCAhaXNPYmplY3QoeCkpIHtcbiAgICAgIHN0ciArPSAnICcgKyB4O1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgKz0gJyAnICsgaW5zcGVjdCh4KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0cjtcbn07XG5cblxuLy8gTWFyayB0aGF0IGEgbWV0aG9kIHNob3VsZCBub3QgYmUgdXNlZC5cbi8vIFJldHVybnMgYSBtb2RpZmllZCBmdW5jdGlvbiB3aGljaCB3YXJucyBvbmNlIGJ5IGRlZmF1bHQuXG4vLyBJZiAtLW5vLWRlcHJlY2F0aW9uIGlzIHNldCwgdGhlbiBpdCBpcyBhIG5vLW9wLlxuZXhwb3J0cy5kZXByZWNhdGUgPSBmdW5jdGlvbihmbiwgbXNnKSB7XG4gIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5ub0RlcHJlY2F0aW9uID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgLy8gQWxsb3cgZm9yIGRlcHJlY2F0aW5nIHRoaW5ncyBpbiB0aGUgcHJvY2VzcyBvZiBzdGFydGluZyB1cC5cbiAgaWYgKHR5cGVvZiBwcm9jZXNzID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBleHBvcnRzLmRlcHJlY2F0ZShmbiwgbXNnKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cblxuICB2YXIgd2FybmVkID0gZmFsc2U7XG4gIGZ1bmN0aW9uIGRlcHJlY2F0ZWQoKSB7XG4gICAgaWYgKCF3YXJuZWQpIHtcbiAgICAgIGlmIChwcm9jZXNzLnRocm93RGVwcmVjYXRpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gICAgICB9IGVsc2UgaWYgKHByb2Nlc3MudHJhY2VEZXByZWNhdGlvbikge1xuICAgICAgICBjb25zb2xlLnRyYWNlKG1zZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1zZyk7XG4gICAgICB9XG4gICAgICB3YXJuZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBkZXByZWNhdGVkO1xufTtcblxuXG52YXIgZGVidWdzID0ge307XG52YXIgZGVidWdFbnZpcm9uO1xuZXhwb3J0cy5kZWJ1Z2xvZyA9IGZ1bmN0aW9uKHNldCkge1xuICBpZiAoaXNVbmRlZmluZWQoZGVidWdFbnZpcm9uKSlcbiAgICBkZWJ1Z0Vudmlyb24gPSBwcm9jZXNzLmVudi5OT0RFX0RFQlVHIHx8ICcnO1xuICBzZXQgPSBzZXQudG9VcHBlckNhc2UoKTtcbiAgaWYgKCFkZWJ1Z3Nbc2V0XSkge1xuICAgIGlmIChuZXcgUmVnRXhwKCdcXFxcYicgKyBzZXQgKyAnXFxcXGInLCAnaScpLnRlc3QoZGVidWdFbnZpcm9uKSkge1xuICAgICAgdmFyIHBpZCA9IHByb2Nlc3MucGlkO1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1zZyA9IGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJyVzICVkOiAlcycsIHNldCwgcGlkLCBtc2cpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHt9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGVidWdzW3NldF07XG59O1xuXG5cbi8qKlxuICogRWNob3MgdGhlIHZhbHVlIG9mIGEgdmFsdWUuIFRyeXMgdG8gcHJpbnQgdGhlIHZhbHVlIG91dFxuICogaW4gdGhlIGJlc3Qgd2F5IHBvc3NpYmxlIGdpdmVuIHRoZSBkaWZmZXJlbnQgdHlwZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIHByaW50IG91dC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIE9wdGlvbmFsIG9wdGlvbnMgb2JqZWN0IHRoYXQgYWx0ZXJzIHRoZSBvdXRwdXQuXG4gKi9cbi8qIGxlZ2FjeTogb2JqLCBzaG93SGlkZGVuLCBkZXB0aCwgY29sb3JzKi9cbmZ1bmN0aW9uIGluc3BlY3Qob2JqLCBvcHRzKSB7XG4gIC8vIGRlZmF1bHQgb3B0aW9uc1xuICB2YXIgY3R4ID0ge1xuICAgIHNlZW46IFtdLFxuICAgIHN0eWxpemU6IHN0eWxpemVOb0NvbG9yXG4gIH07XG4gIC8vIGxlZ2FjeS4uLlxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSAzKSBjdHguZGVwdGggPSBhcmd1bWVudHNbMl07XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDQpIGN0eC5jb2xvcnMgPSBhcmd1bWVudHNbM107XG4gIGlmIChpc0Jvb2xlYW4ob3B0cykpIHtcbiAgICAvLyBsZWdhY3kuLi5cbiAgICBjdHguc2hvd0hpZGRlbiA9IG9wdHM7XG4gIH0gZWxzZSBpZiAob3B0cykge1xuICAgIC8vIGdvdCBhbiBcIm9wdGlvbnNcIiBvYmplY3RcbiAgICBleHBvcnRzLl9leHRlbmQoY3R4LCBvcHRzKTtcbiAgfVxuICAvLyBzZXQgZGVmYXVsdCBvcHRpb25zXG4gIGlmIChpc1VuZGVmaW5lZChjdHguc2hvd0hpZGRlbikpIGN0eC5zaG93SGlkZGVuID0gZmFsc2U7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguZGVwdGgpKSBjdHguZGVwdGggPSAyO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmNvbG9ycykpIGN0eC5jb2xvcnMgPSBmYWxzZTtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5jdXN0b21JbnNwZWN0KSkgY3R4LmN1c3RvbUluc3BlY3QgPSB0cnVlO1xuICBpZiAoY3R4LmNvbG9ycykgY3R4LnN0eWxpemUgPSBzdHlsaXplV2l0aENvbG9yO1xuICByZXR1cm4gZm9ybWF0VmFsdWUoY3R4LCBvYmosIGN0eC5kZXB0aCk7XG59XG5leHBvcnRzLmluc3BlY3QgPSBpbnNwZWN0O1xuXG5cbi8vIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQU5TSV9lc2NhcGVfY29kZSNncmFwaGljc1xuaW5zcGVjdC5jb2xvcnMgPSB7XG4gICdib2xkJyA6IFsxLCAyMl0sXG4gICdpdGFsaWMnIDogWzMsIDIzXSxcbiAgJ3VuZGVybGluZScgOiBbNCwgMjRdLFxuICAnaW52ZXJzZScgOiBbNywgMjddLFxuICAnd2hpdGUnIDogWzM3LCAzOV0sXG4gICdncmV5JyA6IFs5MCwgMzldLFxuICAnYmxhY2snIDogWzMwLCAzOV0sXG4gICdibHVlJyA6IFszNCwgMzldLFxuICAnY3lhbicgOiBbMzYsIDM5XSxcbiAgJ2dyZWVuJyA6IFszMiwgMzldLFxuICAnbWFnZW50YScgOiBbMzUsIDM5XSxcbiAgJ3JlZCcgOiBbMzEsIDM5XSxcbiAgJ3llbGxvdycgOiBbMzMsIDM5XVxufTtcblxuLy8gRG9uJ3QgdXNlICdibHVlJyBub3QgdmlzaWJsZSBvbiBjbWQuZXhlXG5pbnNwZWN0LnN0eWxlcyA9IHtcbiAgJ3NwZWNpYWwnOiAnY3lhbicsXG4gICdudW1iZXInOiAneWVsbG93JyxcbiAgJ2Jvb2xlYW4nOiAneWVsbG93JyxcbiAgJ3VuZGVmaW5lZCc6ICdncmV5JyxcbiAgJ251bGwnOiAnYm9sZCcsXG4gICdzdHJpbmcnOiAnZ3JlZW4nLFxuICAnZGF0ZSc6ICdtYWdlbnRhJyxcbiAgLy8gXCJuYW1lXCI6IGludGVudGlvbmFsbHkgbm90IHN0eWxpbmdcbiAgJ3JlZ2V4cCc6ICdyZWQnXG59O1xuXG5cbmZ1bmN0aW9uIHN0eWxpemVXaXRoQ29sb3Ioc3RyLCBzdHlsZVR5cGUpIHtcbiAgdmFyIHN0eWxlID0gaW5zcGVjdC5zdHlsZXNbc3R5bGVUeXBlXTtcblxuICBpZiAoc3R5bGUpIHtcbiAgICByZXR1cm4gJ1xcdTAwMWJbJyArIGluc3BlY3QuY29sb3JzW3N0eWxlXVswXSArICdtJyArIHN0ciArXG4gICAgICAgICAgICdcXHUwMDFiWycgKyBpbnNwZWN0LmNvbG9yc1tzdHlsZV1bMV0gKyAnbSc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIHN0eWxpemVOb0NvbG9yKHN0ciwgc3R5bGVUeXBlKSB7XG4gIHJldHVybiBzdHI7XG59XG5cblxuZnVuY3Rpb24gYXJyYXlUb0hhc2goYXJyYXkpIHtcbiAgdmFyIGhhc2ggPSB7fTtcblxuICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uKHZhbCwgaWR4KSB7XG4gICAgaGFzaFt2YWxdID0gdHJ1ZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGhhc2g7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0VmFsdWUoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzKSB7XG4gIC8vIFByb3ZpZGUgYSBob29rIGZvciB1c2VyLXNwZWNpZmllZCBpbnNwZWN0IGZ1bmN0aW9ucy5cbiAgLy8gQ2hlY2sgdGhhdCB2YWx1ZSBpcyBhbiBvYmplY3Qgd2l0aCBhbiBpbnNwZWN0IGZ1bmN0aW9uIG9uIGl0XG4gIGlmIChjdHguY3VzdG9tSW5zcGVjdCAmJlxuICAgICAgdmFsdWUgJiZcbiAgICAgIGlzRnVuY3Rpb24odmFsdWUuaW5zcGVjdCkgJiZcbiAgICAgIC8vIEZpbHRlciBvdXQgdGhlIHV0aWwgbW9kdWxlLCBpdCdzIGluc3BlY3QgZnVuY3Rpb24gaXMgc3BlY2lhbFxuICAgICAgdmFsdWUuaW5zcGVjdCAhPT0gZXhwb3J0cy5pbnNwZWN0ICYmXG4gICAgICAvLyBBbHNvIGZpbHRlciBvdXQgYW55IHByb3RvdHlwZSBvYmplY3RzIHVzaW5nIHRoZSBjaXJjdWxhciBjaGVjay5cbiAgICAgICEodmFsdWUuY29uc3RydWN0b3IgJiYgdmFsdWUuY29uc3RydWN0b3IucHJvdG90eXBlID09PSB2YWx1ZSkpIHtcbiAgICB2YXIgcmV0ID0gdmFsdWUuaW5zcGVjdChyZWN1cnNlVGltZXMsIGN0eCk7XG4gICAgaWYgKCFpc1N0cmluZyhyZXQpKSB7XG4gICAgICByZXQgPSBmb3JtYXRWYWx1ZShjdHgsIHJldCwgcmVjdXJzZVRpbWVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vIFByaW1pdGl2ZSB0eXBlcyBjYW5ub3QgaGF2ZSBwcm9wZXJ0aWVzXG4gIHZhciBwcmltaXRpdmUgPSBmb3JtYXRQcmltaXRpdmUoY3R4LCB2YWx1ZSk7XG4gIGlmIChwcmltaXRpdmUpIHtcbiAgICByZXR1cm4gcHJpbWl0aXZlO1xuICB9XG5cbiAgLy8gTG9vayB1cCB0aGUga2V5cyBvZiB0aGUgb2JqZWN0LlxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcbiAgdmFyIHZpc2libGVLZXlzID0gYXJyYXlUb0hhc2goa2V5cyk7XG5cbiAgaWYgKGN0eC5zaG93SGlkZGVuKSB7XG4gICAga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbHVlKTtcbiAgfVxuXG4gIC8vIElFIGRvZXNuJ3QgbWFrZSBlcnJvciBmaWVsZHMgbm9uLWVudW1lcmFibGVcbiAgLy8gaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2llL2R3dzUyc2J0KHY9dnMuOTQpLmFzcHhcbiAgaWYgKGlzRXJyb3IodmFsdWUpXG4gICAgICAmJiAoa2V5cy5pbmRleE9mKCdtZXNzYWdlJykgPj0gMCB8fCBrZXlzLmluZGV4T2YoJ2Rlc2NyaXB0aW9uJykgPj0gMCkpIHtcbiAgICByZXR1cm4gZm9ybWF0RXJyb3IodmFsdWUpO1xuICB9XG5cbiAgLy8gU29tZSB0eXBlIG9mIG9iamVjdCB3aXRob3V0IHByb3BlcnRpZXMgY2FuIGJlIHNob3J0Y3V0dGVkLlxuICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgIHZhciBuYW1lID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoJ1tGdW5jdGlvbicgKyBuYW1lICsgJ10nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ3JlZ2V4cCcpO1xuICAgIH1cbiAgICBpZiAoaXNEYXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAnZGF0ZScpO1xuICAgIH1cbiAgICBpZiAoaXNFcnJvcih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGJhc2UgPSAnJywgYXJyYXkgPSBmYWxzZSwgYnJhY2VzID0gWyd7JywgJ30nXTtcblxuICAvLyBNYWtlIEFycmF5IHNheSB0aGF0IHRoZXkgYXJlIEFycmF5XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIGFycmF5ID0gdHJ1ZTtcbiAgICBicmFjZXMgPSBbJ1snLCAnXSddO1xuICB9XG5cbiAgLy8gTWFrZSBmdW5jdGlvbnMgc2F5IHRoYXQgdGhleSBhcmUgZnVuY3Rpb25zXG4gIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgIHZhciBuID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgYmFzZSA9ICcgW0Z1bmN0aW9uJyArIG4gKyAnXSc7XG4gIH1cblxuICAvLyBNYWtlIFJlZ0V4cHMgc2F5IHRoYXQgdGhleSBhcmUgUmVnRXhwc1xuICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGRhdGVzIHdpdGggcHJvcGVydGllcyBmaXJzdCBzYXkgdGhlIGRhdGVcbiAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgRGF0ZS5wcm90b3R5cGUudG9VVENTdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGVycm9yIHdpdGggbWVzc2FnZSBmaXJzdCBzYXkgdGhlIGVycm9yXG4gIGlmIChpc0Vycm9yKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gIH1cblxuICBpZiAoa2V5cy5sZW5ndGggPT09IDAgJiYgKCFhcnJheSB8fCB2YWx1ZS5sZW5ndGggPT0gMCkpIHtcbiAgICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArIGJyYWNlc1sxXTtcbiAgfVxuXG4gIGlmIChyZWN1cnNlVGltZXMgPCAwKSB7XG4gICAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdyZWdleHAnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCdbT2JqZWN0XScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG5cbiAgY3R4LnNlZW4ucHVzaCh2YWx1ZSk7XG5cbiAgdmFyIG91dHB1dDtcbiAgaWYgKGFycmF5KSB7XG4gICAgb3V0cHV0ID0gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cyk7XG4gIH0gZWxzZSB7XG4gICAgb3V0cHV0ID0ga2V5cy5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5LCBhcnJheSk7XG4gICAgfSk7XG4gIH1cblxuICBjdHguc2Vlbi5wb3AoKTtcblxuICByZXR1cm4gcmVkdWNlVG9TaW5nbGVTdHJpbmcob3V0cHV0LCBiYXNlLCBicmFjZXMpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFByaW1pdGl2ZShjdHgsIHZhbHVlKSB7XG4gIGlmIChpc1VuZGVmaW5lZCh2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCd1bmRlZmluZWQnLCAndW5kZWZpbmVkJyk7XG4gIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICB2YXIgc2ltcGxlID0gJ1xcJycgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkucmVwbGFjZSgvXlwifFwiJC9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJykgKyAnXFwnJztcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoc2ltcGxlLCAnc3RyaW5nJyk7XG4gIH1cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ251bWJlcicpO1xuICBpZiAoaXNCb29sZWFuKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ2Jvb2xlYW4nKTtcbiAgLy8gRm9yIHNvbWUgcmVhc29uIHR5cGVvZiBudWxsIGlzIFwib2JqZWN0XCIsIHNvIHNwZWNpYWwgY2FzZSBoZXJlLlxuICBpZiAoaXNOdWxsKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJ251bGwnLCAnbnVsbCcpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdEVycm9yKHZhbHVlKSB7XG4gIHJldHVybiAnWycgKyBFcnJvci5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgKyAnXSc7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cykge1xuICB2YXIgb3V0cHV0ID0gW107XG4gIGZvciAodmFyIGkgPSAwLCBsID0gdmFsdWUubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5KHZhbHVlLCBTdHJpbmcoaSkpKSB7XG4gICAgICBvdXRwdXQucHVzaChmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLFxuICAgICAgICAgIFN0cmluZyhpKSwgdHJ1ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXQucHVzaCgnJyk7XG4gICAgfVxuICB9XG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICBpZiAoIWtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIG91dHB1dC5wdXNoKGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsXG4gICAgICAgICAga2V5LCB0cnVlKSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXksIGFycmF5KSB7XG4gIHZhciBuYW1lLCBzdHIsIGRlc2M7XG4gIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHZhbHVlLCBrZXkpIHx8IHsgdmFsdWU6IHZhbHVlW2tleV0gfTtcbiAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0dldHRlci9TZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tHZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW1NldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuICBpZiAoIWhhc093blByb3BlcnR5KHZpc2libGVLZXlzLCBrZXkpKSB7XG4gICAgbmFtZSA9ICdbJyArIGtleSArICddJztcbiAgfVxuICBpZiAoIXN0cikge1xuICAgIGlmIChjdHguc2Vlbi5pbmRleE9mKGRlc2MudmFsdWUpIDwgMCkge1xuICAgICAgaWYgKGlzTnVsbChyZWN1cnNlVGltZXMpKSB7XG4gICAgICAgIHN0ciA9IGZvcm1hdFZhbHVlKGN0eCwgZGVzYy52YWx1ZSwgbnVsbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHIgPSBmb3JtYXRWYWx1ZShjdHgsIGRlc2MudmFsdWUsIHJlY3Vyc2VUaW1lcyAtIDEpO1xuICAgICAgfVxuICAgICAgaWYgKHN0ci5pbmRleE9mKCdcXG4nKSA+IC0xKSB7XG4gICAgICAgIGlmIChhcnJheSkge1xuICAgICAgICAgIHN0ciA9IHN0ci5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiAnICAnICsgbGluZTtcbiAgICAgICAgICB9KS5qb2luKCdcXG4nKS5zdWJzdHIoMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RyID0gJ1xcbicgKyBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAgICcgKyBsaW5lO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbQ2lyY3VsYXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cbiAgaWYgKGlzVW5kZWZpbmVkKG5hbWUpKSB7XG4gICAgaWYgKGFycmF5ICYmIGtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIG5hbWUgPSBKU09OLnN0cmluZ2lmeSgnJyArIGtleSk7XG4gICAgaWYgKG5hbWUubWF0Y2goL15cIihbYS16QS1aX11bYS16QS1aXzAtOV0qKVwiJC8pKSB7XG4gICAgICBuYW1lID0gbmFtZS5zdWJzdHIoMSwgbmFtZS5sZW5ndGggLSAyKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnbmFtZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKVxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvKF5cInxcIiQpL2csIFwiJ1wiKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnc3RyaW5nJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5hbWUgKyAnOiAnICsgc3RyO1xufVxuXG5cbmZ1bmN0aW9uIHJlZHVjZVRvU2luZ2xlU3RyaW5nKG91dHB1dCwgYmFzZSwgYnJhY2VzKSB7XG4gIHZhciBudW1MaW5lc0VzdCA9IDA7XG4gIHZhciBsZW5ndGggPSBvdXRwdXQucmVkdWNlKGZ1bmN0aW9uKHByZXYsIGN1cikge1xuICAgIG51bUxpbmVzRXN0Kys7XG4gICAgaWYgKGN1ci5pbmRleE9mKCdcXG4nKSA+PSAwKSBudW1MaW5lc0VzdCsrO1xuICAgIHJldHVybiBwcmV2ICsgY3VyLnJlcGxhY2UoL1xcdTAwMWJcXFtcXGRcXGQ/bS9nLCAnJykubGVuZ3RoICsgMTtcbiAgfSwgMCk7XG5cbiAgaWYgKGxlbmd0aCA+IDYwKSB7XG4gICAgcmV0dXJuIGJyYWNlc1swXSArXG4gICAgICAgICAgIChiYXNlID09PSAnJyA/ICcnIDogYmFzZSArICdcXG4gJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBvdXRwdXQuam9pbignLFxcbiAgJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBicmFjZXNbMV07XG4gIH1cblxuICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArICcgJyArIG91dHB1dC5qb2luKCcsICcpICsgJyAnICsgYnJhY2VzWzFdO1xufVxuXG5cbi8vIE5PVEU6IFRoZXNlIHR5cGUgY2hlY2tpbmcgZnVuY3Rpb25zIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIGBpbnN0YW5jZW9mYFxuLy8gYmVjYXVzZSBpdCBpcyBmcmFnaWxlIGFuZCBjYW4gYmUgZWFzaWx5IGZha2VkIHdpdGggYE9iamVjdC5jcmVhdGUoKWAuXG5mdW5jdGlvbiBpc0FycmF5KGFyKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGFyKTtcbn1cbmV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJztcbn1cbmV4cG9ydHMuaXNCb29sZWFuID0gaXNCb29sZWFuO1xuXG5mdW5jdGlvbiBpc051bGwoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbCA9IGlzTnVsbDtcblxuZnVuY3Rpb24gaXNOdWxsT3JVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsT3JVbmRlZmluZWQgPSBpc051bGxPclVuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cbmV4cG9ydHMuaXNOdW1iZXIgPSBpc051bWJlcjtcblxuZnVuY3Rpb24gaXNTdHJpbmcoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3RyaW5nJztcbn1cbmV4cG9ydHMuaXNTdHJpbmcgPSBpc1N0cmluZztcblxuZnVuY3Rpb24gaXNTeW1ib2woYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3ltYm9sJztcbn1cbmV4cG9ydHMuaXNTeW1ib2wgPSBpc1N5bWJvbDtcblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cbmV4cG9ydHMuaXNVbmRlZmluZWQgPSBpc1VuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNSZWdFeHAocmUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHJlKSAmJiBvYmplY3RUb1N0cmluZyhyZSkgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufVxuZXhwb3J0cy5pc1JlZ0V4cCA9IGlzUmVnRXhwO1xuXG5mdW5jdGlvbiBpc09iamVjdChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNPYmplY3QgPSBpc09iamVjdDtcblxuZnVuY3Rpb24gaXNEYXRlKGQpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KGQpICYmIG9iamVjdFRvU3RyaW5nKGQpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5leHBvcnRzLmlzRGF0ZSA9IGlzRGF0ZTtcblxuZnVuY3Rpb24gaXNFcnJvcihlKSB7XG4gIHJldHVybiBpc09iamVjdChlKSAmJlxuICAgICAgKG9iamVjdFRvU3RyaW5nKGUpID09PSAnW29iamVjdCBFcnJvcl0nIHx8IGUgaW5zdGFuY2VvZiBFcnJvcik7XG59XG5leHBvcnRzLmlzRXJyb3IgPSBpc0Vycm9yO1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG5cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnYm9vbGVhbicgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdudW1iZXInIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCcgfHwgIC8vIEVTNiBzeW1ib2xcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICd1bmRlZmluZWQnO1xufVxuZXhwb3J0cy5pc1ByaW1pdGl2ZSA9IGlzUHJpbWl0aXZlO1xuXG5leHBvcnRzLmlzQnVmZmVyID0gcmVxdWlyZSgnLi9zdXBwb3J0L2lzQnVmZmVyJyk7XG5cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKG8pIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKTtcbn1cblxuXG5mdW5jdGlvbiBwYWQobikge1xuICByZXR1cm4gbiA8IDEwID8gJzAnICsgbi50b1N0cmluZygxMCkgOiBuLnRvU3RyaW5nKDEwKTtcbn1cblxuXG52YXIgbW9udGhzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsXG4gICAgICAgICAgICAgICdPY3QnLCAnTm92JywgJ0RlYyddO1xuXG4vLyAyNiBGZWIgMTY6MTk6MzRcbmZ1bmN0aW9uIHRpbWVzdGFtcCgpIHtcbiAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xuICB2YXIgdGltZSA9IFtwYWQoZC5nZXRIb3VycygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0TWludXRlcygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0U2Vjb25kcygpKV0uam9pbignOicpO1xuICByZXR1cm4gW2QuZ2V0RGF0ZSgpLCBtb250aHNbZC5nZXRNb250aCgpXSwgdGltZV0uam9pbignICcpO1xufVxuXG5cbi8vIGxvZyBpcyBqdXN0IGEgdGhpbiB3cmFwcGVyIHRvIGNvbnNvbGUubG9nIHRoYXQgcHJlcGVuZHMgYSB0aW1lc3RhbXBcbmV4cG9ydHMubG9nID0gZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKCclcyAtICVzJywgdGltZXN0YW1wKCksIGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cykpO1xufTtcblxuXG4vKipcbiAqIEluaGVyaXQgdGhlIHByb3RvdHlwZSBtZXRob2RzIGZyb20gb25lIGNvbnN0cnVjdG9yIGludG8gYW5vdGhlci5cbiAqXG4gKiBUaGUgRnVuY3Rpb24ucHJvdG90eXBlLmluaGVyaXRzIGZyb20gbGFuZy5qcyByZXdyaXR0ZW4gYXMgYSBzdGFuZGFsb25lXG4gKiBmdW5jdGlvbiAobm90IG9uIEZ1bmN0aW9uLnByb3RvdHlwZSkuIE5PVEU6IElmIHRoaXMgZmlsZSBpcyB0byBiZSBsb2FkZWRcbiAqIGR1cmluZyBib290c3RyYXBwaW5nIHRoaXMgZnVuY3Rpb24gbmVlZHMgdG8gYmUgcmV3cml0dGVuIHVzaW5nIHNvbWUgbmF0aXZlXG4gKiBmdW5jdGlvbnMgYXMgcHJvdG90eXBlIHNldHVwIHVzaW5nIG5vcm1hbCBKYXZhU2NyaXB0IGRvZXMgbm90IHdvcmsgYXNcbiAqIGV4cGVjdGVkIGR1cmluZyBib290c3RyYXBwaW5nIChzZWUgbWlycm9yLmpzIGluIHIxMTQ5MDMpLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gd2hpY2ggbmVlZHMgdG8gaW5oZXJpdCB0aGVcbiAqICAgICBwcm90b3R5cGUuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBzdXBlckN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gdG8gaW5oZXJpdCBwcm90b3R5cGUgZnJvbS5cbiAqL1xuZXhwb3J0cy5pbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJyk7XG5cbmV4cG9ydHMuX2V4dGVuZCA9IGZ1bmN0aW9uKG9yaWdpbiwgYWRkKSB7XG4gIC8vIERvbid0IGRvIGFueXRoaW5nIGlmIGFkZCBpc24ndCBhbiBvYmplY3RcbiAgaWYgKCFhZGQgfHwgIWlzT2JqZWN0KGFkZCkpIHJldHVybiBvcmlnaW47XG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhhZGQpO1xuICB2YXIgaSA9IGtleXMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgb3JpZ2luW2tleXNbaV1dID0gYWRkW2tleXNbaV1dO1xuICB9XG4gIHJldHVybiBvcmlnaW47XG59O1xuXG5mdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xufVxuXG52YXIga0N1c3RvbVByb21pc2lmaWVkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgPyBTeW1ib2woJ3V0aWwucHJvbWlzaWZ5LmN1c3RvbScpIDogdW5kZWZpbmVkO1xuXG5leHBvcnRzLnByb21pc2lmeSA9IGZ1bmN0aW9uIHByb21pc2lmeShvcmlnaW5hbCkge1xuICBpZiAodHlwZW9mIG9yaWdpbmFsICE9PSAnZnVuY3Rpb24nKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcIm9yaWdpbmFsXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uJyk7XG5cbiAgaWYgKGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCAmJiBvcmlnaW5hbFtrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2xdKSB7XG4gICAgdmFyIGZuID0gb3JpZ2luYWxba0N1c3RvbVByb21pc2lmaWVkU3ltYm9sXTtcbiAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJ1dGlsLnByb21pc2lmeS5jdXN0b21cIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24nKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2wsIHtcbiAgICAgIHZhbHVlOiBmbiwgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiBmYWxzZSwgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgZnVuY3Rpb24gZm4oKSB7XG4gICAgdmFyIHByb21pc2VSZXNvbHZlLCBwcm9taXNlUmVqZWN0O1xuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgcHJvbWlzZVJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgcHJvbWlzZVJlamVjdCA9IHJlamVjdDtcbiAgICB9KTtcblxuICAgIHZhciBhcmdzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICAgIH1cbiAgICBhcmdzLnB1c2goZnVuY3Rpb24gKGVyciwgdmFsdWUpIHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgcHJvbWlzZVJlamVjdChlcnIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvbWlzZVJlc29sdmUodmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcHJvbWlzZVJlamVjdChlcnIpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGZuLCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob3JpZ2luYWwpKTtcblxuICBpZiAoa0N1c3RvbVByb21pc2lmaWVkU3ltYm9sKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCwge1xuICAgIHZhbHVlOiBmbiwgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiBmYWxzZSwgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoXG4gICAgZm4sXG4gICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvcmlnaW5hbClcbiAgKTtcbn1cblxuZXhwb3J0cy5wcm9taXNpZnkuY3VzdG9tID0ga0N1c3RvbVByb21pc2lmaWVkU3ltYm9sXG5cbmZ1bmN0aW9uIGNhbGxiYWNraWZ5T25SZWplY3RlZChyZWFzb24sIGNiKSB7XG4gIC8vIGAhcmVhc29uYCBndWFyZCBpbnNwaXJlZCBieSBibHVlYmlyZCAoUmVmOiBodHRwczovL2dvby5nbC90NUlTNk0pLlxuICAvLyBCZWNhdXNlIGBudWxsYCBpcyBhIHNwZWNpYWwgZXJyb3IgdmFsdWUgaW4gY2FsbGJhY2tzIHdoaWNoIG1lYW5zIFwibm8gZXJyb3JcbiAgLy8gb2NjdXJyZWRcIiwgd2UgZXJyb3Itd3JhcCBzbyB0aGUgY2FsbGJhY2sgY29uc3VtZXIgY2FuIGRpc3Rpbmd1aXNoIGJldHdlZW5cbiAgLy8gXCJ0aGUgcHJvbWlzZSByZWplY3RlZCB3aXRoIG51bGxcIiBvciBcInRoZSBwcm9taXNlIGZ1bGZpbGxlZCB3aXRoIHVuZGVmaW5lZFwiLlxuICBpZiAoIXJlYXNvbikge1xuICAgIHZhciBuZXdSZWFzb24gPSBuZXcgRXJyb3IoJ1Byb21pc2Ugd2FzIHJlamVjdGVkIHdpdGggYSBmYWxzeSB2YWx1ZScpO1xuICAgIG5ld1JlYXNvbi5yZWFzb24gPSByZWFzb247XG4gICAgcmVhc29uID0gbmV3UmVhc29uO1xuICB9XG4gIHJldHVybiBjYihyZWFzb24pO1xufVxuXG5mdW5jdGlvbiBjYWxsYmFja2lmeShvcmlnaW5hbCkge1xuICBpZiAodHlwZW9mIG9yaWdpbmFsICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwib3JpZ2luYWxcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24nKTtcbiAgfVxuXG4gIC8vIFdlIERPIE5PVCByZXR1cm4gdGhlIHByb21pc2UgYXMgaXQgZ2l2ZXMgdGhlIHVzZXIgYSBmYWxzZSBzZW5zZSB0aGF0XG4gIC8vIHRoZSBwcm9taXNlIGlzIGFjdHVhbGx5IHNvbWVob3cgcmVsYXRlZCB0byB0aGUgY2FsbGJhY2sncyBleGVjdXRpb25cbiAgLy8gYW5kIHRoYXQgdGhlIGNhbGxiYWNrIHRocm93aW5nIHdpbGwgcmVqZWN0IHRoZSBwcm9taXNlLlxuICBmdW5jdGlvbiBjYWxsYmFja2lmaWVkKCkge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICAgIH1cblxuICAgIHZhciBtYXliZUNiID0gYXJncy5wb3AoKTtcbiAgICBpZiAodHlwZW9mIG1heWJlQ2IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBsYXN0IGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbicpO1xuICAgIH1cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGNiID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbWF5YmVDYi5hcHBseShzZWxmLCBhcmd1bWVudHMpO1xuICAgIH07XG4gICAgLy8gSW4gdHJ1ZSBub2RlIHN0eWxlIHdlIHByb2Nlc3MgdGhlIGNhbGxiYWNrIG9uIGBuZXh0VGlja2Agd2l0aCBhbGwgdGhlXG4gICAgLy8gaW1wbGljYXRpb25zIChzdGFjaywgYHVuY2F1Z2h0RXhjZXB0aW9uYCwgYGFzeW5jX2hvb2tzYClcbiAgICBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmdzKVxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmV0KSB7IHByb2Nlc3MubmV4dFRpY2soY2IsIG51bGwsIHJldCkgfSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKHJlaikgeyBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNraWZ5T25SZWplY3RlZCwgcmVqLCBjYikgfSk7XG4gIH1cblxuICBPYmplY3Quc2V0UHJvdG90eXBlT2YoY2FsbGJhY2tpZmllZCwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG9yaWdpbmFsKSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNhbGxiYWNraWZpZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob3JpZ2luYWwpKTtcbiAgcmV0dXJuIGNhbGxiYWNraWZpZWQ7XG59XG5leHBvcnRzLmNhbGxiYWNraWZ5ID0gY2FsbGJhY2tpZnk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy91dGlsL3V0aWwuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy91dGlsL3V0aWwuanMiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0J1ZmZlcihhcmcpIHtcbiAgcmV0dXJuIGFyZyAmJiB0eXBlb2YgYXJnID09PSAnb2JqZWN0J1xuICAgICYmIHR5cGVvZiBhcmcuY29weSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiBhcmcuZmlsbCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiBhcmcucmVhZFVJbnQ4ID09PSAnZnVuY3Rpb24nO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3V0aWwvc3VwcG9ydC9pc0J1ZmZlckJyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy91dGlsL3N1cHBvcnQvaXNCdWZmZXJCcm93c2VyLmpzIiwiaWYgKHR5cGVvZiBPYmplY3QuY3JlYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gIC8vIGltcGxlbWVudGF0aW9uIGZyb20gc3RhbmRhcmQgbm9kZS5qcyAndXRpbCcgbW9kdWxlXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICBjdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDdG9yLnByb3RvdHlwZSwge1xuICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgdmFsdWU6IGN0b3IsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59IGVsc2Uge1xuICAvLyBvbGQgc2Nob29sIHNoaW0gZm9yIG9sZCBicm93c2Vyc1xuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgdmFyIFRlbXBDdG9yID0gZnVuY3Rpb24gKCkge31cbiAgICBUZW1wQ3Rvci5wcm90b3R5cGUgPSBzdXBlckN0b3IucHJvdG90eXBlXG4gICAgY3Rvci5wcm90b3R5cGUgPSBuZXcgVGVtcEN0b3IoKVxuICAgIGN0b3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY3RvclxuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy91dGlsL25vZGVfbW9kdWxlcy9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9ub2RlX21vZHVsZXMvdXRpbC9ub2RlX21vZHVsZXMvaW5oZXJpdHMvaW5oZXJpdHNfYnJvd3Nlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gZXh0ZW5kXG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbmZ1bmN0aW9uIGV4dGVuZCgpIHtcbiAgICB2YXIgdGFyZ2V0ID0ge31cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV1cblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy94dGVuZC9pbW11dGFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy94dGVuZC9pbW11dGFibGUuanMiLCJjb25zdCBiYXNlU2hhcGVzID0gcmVxdWlyZSgnLi9iYXNlU2hhcGVzJyk7XHJcbmNvbnN0IGF1eGlsaWFyeUl0ZW1zID0gcmVxdWlyZSgnLi9hdXhpbGlhcnlJdGVtcycpO1xyXG5cclxuY29uc3Qgc3ZnU3RyID0gcmVxdWlyZSgnLi4vdXRpbC9zdmcnKS5zdmdTdHI7XHJcbmNvbnN0IGdldFVuaXRJbmZvcyA9IHJlcXVpcmUoJy4uL3V0aWwvc2JnbicpLmdldFVuaXRJbmZvcztcclxuY29uc3QgZ2V0U3RhdGVWYXJzID0gcmVxdWlyZSgnLi4vdXRpbC9zYmduJykuZ2V0U3RhdGVWYXJzO1xyXG5jb25zdCBoYXNDbG9uZW1hcmtlciA9IHJlcXVpcmUoJy4uL3V0aWwvc2JnbicpLmhhc0Nsb25lbWFya2VyO1xyXG5cclxuY29uc3QgZWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKTtcclxuXHJcblxyXG5jb25zdCBlbnRpdHlQb29sTm9kZXMgPSB7XHJcblxyXG4gIHVuc3BlY2lmaWVkRW50aXR5IChub2RlKSB7XHJcbiAgICBjb25zdCBhdXhJdGVtV2lkdGggPSAxMDA7XHJcbiAgICBjb25zdCBhdXhJdGVtSGVpZ2h0ID0gMjA7XHJcbiAgICBjb25zdCBib3JkZXJXaWR0aCA9IDI7XHJcbiAgICBjb25zdCBmb250U2l6ZSA9IDEwO1xyXG4gICAgY29uc3QgdUluZm9zID0gZ2V0VW5pdEluZm9zKG5vZGUpO1xyXG4gICAgY29uc3Qgc1ZhcnMgPSBnZXRTdGF0ZVZhcnMobm9kZSk7XHJcblxyXG4gICAgY29uc3Qgc3R5bGUgPSBuZXcgTWFwKClcclxuICAgIC5zZXQoJ3N0cm9rZScsICcjNkE2QTZBJylcclxuICAgIC5zZXQoJ3N0cm9rZS13aWR0aCcsICcxJyk7XHJcblxyXG4gICAgY29uc3QgY2xvbmVNYXJrZXJTdmcgPSBzdmdTdHIoXHJcbiAgICAgIGhhc0Nsb25lbWFya2VyKG5vZGUpID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdDbG9uZU1hcmtlcigwLCAyLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHQgLSAzKSA6ICcnLFxyXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgdUluZm9TdmcgPSBzdmdTdHIoXHJcbiAgICAgIHVJbmZvcy5sZW5ndGggPiAwID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdVbml0T2ZJbmZvcm1hdGlvbigyLCAwLCBhdXhJdGVtV2lkdGggLSA1LCBhdXhJdGVtSGVpZ2h0IC0gMywgdUluZm9zWzBdLCBib3JkZXJXaWR0aCwgZm9udFNpemUpIDogJycsXHJcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBzVmFyU3ZnID0gc3ZnU3RyKFxyXG4gICAgICBzVmFycy5sZW5ndGggPiAwID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdTdGF0ZVZhcigyLCAwLCBhdXhJdGVtV2lkdGggLSA1LCBhdXhJdGVtSGVpZ2h0IC0gMywgc1ZhcnNbMF0sIGJvcmRlcldpZHRoLCBmb250U2l6ZSkgOiAnJyxcclxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHRvcExpbmUgPSBzdmdTdHIoXHJcbiAgICAgIHVJbmZvcy5sZW5ndGggKyBzVmFycy5sZW5ndGggPiAwID8gYmFzZVNoYXBlcy5saW5lKDAsIDAsIGF1eEl0ZW1XaWR0aCwgMCwgc3R5bGUpIDogJycsXHJcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBib3R0b21MaW5lID0gc3ZnU3RyKFxyXG4gICAgICBoYXNDbG9uZW1hcmtlcihub2RlKSB8fCB1SW5mb3MubGVuZ3RoID4gMCA/IGJhc2VTaGFwZXMubGluZSgwLCAwLCBhdXhJdGVtV2lkdGgsIDAsIHN0eWxlKSA6ICcnLFxyXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcclxuICAgICk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBiZ0ltYWdlOiBbYm90dG9tTGluZSwgdG9wTGluZSwgY2xvbmVNYXJrZXJTdmcsIHVJbmZvU3ZnLCBzVmFyU3ZnXSxcclxuICAgICAgYmdXaWR0aDogWycxMDAlJywgJzEwMCUnLCAnMTAwJSddLFxyXG4gICAgICBiZ1Bvc1g6IFsnMCUnLCAnMCUnLCAnMCUnLCAnMjBweCcsICc0MHB4J10sXHJcbiAgICAgIGJnUG9zWTogWyc1MnB4JywgJzhweCcsICczMnB4JywgJzQ0cHgnLCAnMCUnXSxcclxuICAgICAgYmdGaXQ6IFsnY292ZXInLCAnY292ZXInLCAnbm9uZScsICdub25lJ10sXHJcbiAgICAgIGJnQ2xpcDogJ25vZGUnLFxyXG4gICAgICBwYWRkaW5nOiAnOHB4JyxcclxuICAgICAgYm9yZGVyV2lkdGg6IDJcclxuICAgIH07XHJcblxyXG4gIH0sXHJcblxyXG4gIHNpbXBsZUNoZW1pY2FsIChub2RlKSB7XHJcbiAgICBjb25zdCBhdXhJdGVtV2lkdGggPSAxMDA7XHJcbiAgICBjb25zdCBhdXhJdGVtSGVpZ2h0ID0gMjA7XHJcbiAgICBjb25zdCBib3JkZXJXaWR0aCA9IDI7XHJcbiAgICBjb25zdCBmb250U2l6ZSA9IDEwO1xyXG4gICAgY29uc3QgdUluZm9zID0gZ2V0VW5pdEluZm9zKG5vZGUpO1xyXG5cclxuICAgIGNvbnN0IHN0eWxlID0gbmV3IE1hcCgpXHJcbiAgICAuc2V0KCdzdHJva2UnLCAnIzZBNkE2QScpXHJcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCAnMScpO1xyXG5cclxuICAgIGNvbnN0IGNsb25lTWFya2VyU3ZnID0gc3ZnU3RyKFxyXG4gICAgICBoYXNDbG9uZW1hcmtlcihub2RlKSA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nQ2xvbmVNYXJrZXIoMCwgMiwgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0IC0gMykgOiAnJyxcclxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHVJbmZvU3ZnID0gc3ZnU3RyKFxyXG4gICAgICB1SW5mb3MubGVuZ3RoID4gMCA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nVW5pdE9mSW5mb3JtYXRpb24oMiwgMCwgYXV4SXRlbVdpZHRoIC0gNSwgYXV4SXRlbUhlaWdodCAtIDMsIHVJbmZvc1swXSwgYm9yZGVyV2lkdGgsIGZvbnRTaXplKSA6ICcnLFxyXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgdG9wTGluZSA9IHN2Z1N0cihcclxuICAgICAgdUluZm9zLmxlbmd0aCA+IDAgPyBiYXNlU2hhcGVzLmxpbmUoMCwgMCwgYXV4SXRlbVdpZHRoLCAwLCBzdHlsZSkgOiAnJyxcclxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGJvdHRvbUxpbmUgPSBzdmdTdHIoXHJcbiAgICAgIGhhc0Nsb25lbWFya2VyKG5vZGUpIHx8IHVJbmZvcy5sZW5ndGggPiAwID8gYmFzZVNoYXBlcy5saW5lKDAsIDAsIGF1eEl0ZW1XaWR0aCwgMCwgc3R5bGUpIDogJycsXHJcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBiZ0ltYWdlOiBbYm90dG9tTGluZSwgdG9wTGluZSwgY2xvbmVNYXJrZXJTdmcsIHVJbmZvU3ZnXSxcclxuICAgICAgYmdXaWR0aDogWycxMDAlJywgJzEwMCUnLCAnMTAwJSddLFxyXG4gICAgICBiZ1Bvc1g6IFsnMCUnLCAnMCUnLCAnMCUnLCAnMTJweCddLFxyXG4gICAgICBiZ1Bvc1k6IFsnNTJweCcsICc4cHgnLCAnNDhweCcsICcwcHgnXSxcclxuICAgICAgYmdGaXQ6IFsnY292ZXInLCAnY292ZXInLCAnbm9uZScsICdub25lJ10sXHJcbiAgICAgIGJnQ2xpcDogJ25vZGUnLFxyXG4gICAgICBwYWRkaW5nOiAnOHB4JyxcclxuICAgICAgYm9yZGVyV2lkdGg6IDJcclxuICAgIH07XHJcbiAgfSxcclxuXHJcbiAgbWFjcm9tb2xlY3VsZShub2RlKSB7XHJcbiAgICBjb25zdCBhdXhJdGVtV2lkdGggPSAxMDA7XHJcbiAgICBjb25zdCBhdXhJdGVtSGVpZ2h0ID0gMjA7XHJcbiAgICBjb25zdCBib3JkZXJXaWR0aCA9IDI7XHJcbiAgICBjb25zdCBmb250U2l6ZSA9IDEwO1xyXG4gICAgY29uc3QgdUluZm9zID0gZ2V0VW5pdEluZm9zKG5vZGUpO1xyXG4gICAgY29uc3Qgc1ZhcnMgPSBnZXRTdGF0ZVZhcnMobm9kZSk7XHJcblxyXG4gICAgY29uc3Qgc3R5bGUgPSBuZXcgTWFwKClcclxuICAgIC5zZXQoJ3N0cm9rZScsICcjNkE2QTZBJylcclxuICAgIC5zZXQoJ3N0cm9rZS13aWR0aCcsICcxJyk7XHJcblxyXG4gICAgY29uc3QgY2xvbmVNYXJrZXJTdmcgPSBzdmdTdHIoXHJcbiAgICAgIGhhc0Nsb25lbWFya2VyKG5vZGUpID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdDbG9uZU1hcmtlcigwLCAyLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHQgLSAzKSA6ICcnLFxyXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgdUluZm9TdmcgPSBzdmdTdHIoXHJcbiAgICAgIHVJbmZvcy5sZW5ndGggPiAwID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdVbml0T2ZJbmZvcm1hdGlvbigyLCAwLCBhdXhJdGVtV2lkdGggLSA1LCBhdXhJdGVtSGVpZ2h0IC0gMywgdUluZm9zWzBdLCBib3JkZXJXaWR0aCwgZm9udFNpemUpIDogJycsXHJcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBzVmFyU3ZnID0gc3ZnU3RyKFxyXG4gICAgICBzVmFycy5sZW5ndGggPiAwID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdTdGF0ZVZhcigyLCAwLCBhdXhJdGVtV2lkdGggLSA1LCBhdXhJdGVtSGVpZ2h0IC0gMywgc1ZhcnNbMF0sIGJvcmRlcldpZHRoLCBmb250U2l6ZSkgOiAnJyxcclxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHRvcExpbmUgPSBzdmdTdHIoXHJcbiAgICAgIHVJbmZvcy5sZW5ndGggKyBzVmFycy5sZW5ndGggPiAwID8gYmFzZVNoYXBlcy5saW5lKDAsIDAsIGF1eEl0ZW1XaWR0aCwgMCwgc3R5bGUpIDogJycsXHJcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBib3R0b21MaW5lID0gc3ZnU3RyKFxyXG4gICAgICBoYXNDbG9uZW1hcmtlcihub2RlKSB8fCB1SW5mb3MubGVuZ3RoID4gMCA/IGJhc2VTaGFwZXMubGluZSgwLCAwLCBhdXhJdGVtV2lkdGgsIDAsIHN0eWxlKSA6ICcnLFxyXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYmdJbWFnZTogW2JvdHRvbUxpbmUsIHRvcExpbmUsIGNsb25lTWFya2VyU3ZnLCB1SW5mb1N2Zywgc1ZhclN2Z10sXHJcbiAgICAgIGJnV2lkdGg6IFsnMTAwJScsICcxMDAlJywgJzEwMCUnXSxcclxuICAgICAgYmdQb3NYOiBbJzAlJywgJzAlJywgJzAlJywgJzIwcHgnLCAnNDBweCddLFxyXG4gICAgICBiZ1Bvc1k6IFsnNTJweCcsICc4cHgnLCAnNTJweCcsICc0NHB4JywgJzAlJ10sXHJcbiAgICAgIGJnRml0OiBbJ2NvdmVyJywgJ2NvdmVyJywgJ25vbmUnLCAnbm9uZSddLFxyXG4gICAgICBiZ0NsaXA6ICdub2RlJyxcclxuICAgICAgcGFkZGluZzogJzhweCcsXHJcbiAgICAgIGJvcmRlcldpZHRoOiAyXHJcbiAgICB9OyAgfSxcclxuXHJcbiAgbnVjbGVpY0FjaWRGZWF0dXJlIChub2RlKSB7XHJcbiAgICBjb25zdCBhdXhJdGVtV2lkdGggPSAxMDA7XHJcbiAgICBjb25zdCBhdXhJdGVtSGVpZ2h0ID0gMjA7XHJcbiAgICBjb25zdCBib3JkZXJXaWR0aCA9IDI7XHJcbiAgICBjb25zdCBmb250U2l6ZSA9IDEwO1xyXG4gICAgY29uc3QgdUluZm9zID0gZ2V0VW5pdEluZm9zKG5vZGUpO1xyXG4gICAgY29uc3Qgc1ZhcnMgPSBnZXRTdGF0ZVZhcnMobm9kZSk7XHJcblxyXG4gICAgY29uc3Qgc3R5bGUgPSBuZXcgTWFwKClcclxuICAgIC5zZXQoJ3N0cm9rZScsICcjNkE2QTZBJylcclxuICAgIC5zZXQoJ3N0cm9rZS13aWR0aCcsICcxJyk7XHJcblxyXG4gICAgY29uc3QgY2xvbmVNYXJrZXJTdmcgPSBzdmdTdHIoXHJcbiAgICAgIGhhc0Nsb25lbWFya2VyKG5vZGUpID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdDbG9uZU1hcmtlcigwLCAyLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHQgLSAzKSA6ICcnLFxyXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgdUluZm9TdmcgPSBzdmdTdHIoXHJcbiAgICAgIHVJbmZvcy5sZW5ndGggPiAwID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdVbml0T2ZJbmZvcm1hdGlvbigyLCAwLCBhdXhJdGVtV2lkdGggLSA1LCBhdXhJdGVtSGVpZ2h0IC0gMywgdUluZm9zWzBdLCBib3JkZXJXaWR0aCwgZm9udFNpemUpIDogJycsXHJcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBzVmFyU3ZnID0gc3ZnU3RyKFxyXG4gICAgICBzVmFycy5sZW5ndGggPiAwID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdTdGF0ZVZhcigyLCAwLCBhdXhJdGVtV2lkdGggLSA1LCBhdXhJdGVtSGVpZ2h0IC0gMywgc1ZhcnNbMF0sIGJvcmRlcldpZHRoLCBmb250U2l6ZSkgOiAnJyxcclxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHRvcExpbmUgPSBzdmdTdHIoXHJcbiAgICAgIHNWYXJzLmxlbmd0aCA+IDAgPyBiYXNlU2hhcGVzLmxpbmUoMCwgMCwgYXV4SXRlbVdpZHRoLCAwLCBzdHlsZSkgOiAnJyxcclxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGJvdHRvbUxpbmUgPSBzdmdTdHIoXHJcbiAgICAgIGhhc0Nsb25lbWFya2VyKG5vZGUpIHx8IHVJbmZvcy5sZW5ndGggPiAwID8gYmFzZVNoYXBlcy5saW5lKDAsIDAsIGF1eEl0ZW1XaWR0aCwgMCwgc3R5bGUpIDogJycsXHJcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBiZ0ltYWdlOiBbYm90dG9tTGluZSwgdG9wTGluZSwgY2xvbmVNYXJrZXJTdmcsIHVJbmZvU3ZnLCBzVmFyU3ZnXSxcclxuICAgICAgYmdXaWR0aDogWycxMDAlJywgJzEwMCUnLCAnMTAwJSddLFxyXG4gICAgICBiZ1Bvc1g6IFsnMCUnLCAnMCUnLCAnMCUnLCAnMjBweCcsICc0MHB4J10sXHJcbiAgICAgIGJnUG9zWTogWyc1MnB4JywgJzhweCcsICc1MnB4JywgJzQ0cHgnLCAnMCUnXSxcclxuICAgICAgYmdGaXQ6IFsnY292ZXInLCAnY292ZXInLCAnbm9uZScsICdub25lJ10sXHJcbiAgICAgIGJnQ2xpcDogJ25vZGUnLFxyXG4gICAgICBwYWRkaW5nOiAnOHB4JyxcclxuICAgICAgYm9yZGVyV2lkdGg6IDJcclxuICAgIH07XHJcbiAgfSxcclxuXHJcbiAgY29tcGxleCAobm9kZSkge1xyXG4gICAgY29uc3QgaXRlbVcgPSA2MDtcclxuICAgIGNvbnN0IGl0ZW1IID0gMjQ7XHJcbiAgICBjb25zdCB1SW5mb3MgPSBnZXRVbml0SW5mb3Mobm9kZSk7XHJcbiAgICBjb25zdCBzVmFycyA9IGdldFN0YXRlVmFycyhub2RlKTtcclxuXHJcbiAgICBjb25zdCBpbWFnZXMgPSBbXTtcclxuICAgIGNvbnN0IGJnV2lkdGggPSBbXTtcclxuICAgIGNvbnN0IGJnSGVpZ2h0ID0gW107XHJcbiAgICBjb25zdCBiZ1Bvc1ggPSBbXTtcclxuICAgIGNvbnN0IGJnUG9zWSA9IFtdO1xyXG4gICAgY29uc3QgYmdGaXQgPSBbXTtcclxuXHJcbiAgICBjb25zdCBzdHlsZSA9IG5ldyBNYXAoKVxyXG4gICAgLnNldCgnc3Ryb2tlJywgJyM1NTU1NTUnKVxyXG4gICAgLnNldCgnc3Ryb2tlLXdpZHRoJywgJzYnKTtcclxuXHJcbiAgICAvLyBvcmRlciBvZiBzdmcgaW1hZ2UgZ2VuZXJhdGlvbiBtYXR0ZXJzXHJcbiAgICBpZiAodUluZm9zLmxlbmd0aCArIHNWYXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgdG9wTGluZVN2ZyA9IHN2Z1N0cihiYXNlU2hhcGVzLmxpbmUoMCwgMCwgaXRlbVcsIDAsIHN0eWxlKSwgaXRlbVcsIGl0ZW1IKTtcclxuICAgICAgaW1hZ2VzLnB1c2godG9wTGluZVN2Zyk7XHJcbiAgICAgIGJnV2lkdGgucHVzaCgnMTAwJScpO1xyXG4gICAgICBiZ1Bvc1gucHVzaCgnMCUnKTtcclxuICAgICAgYmdQb3NZLnB1c2goJzExcHgnKTtcclxuICAgICAgYmdGaXQucHVzaCgnbm9uZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChoYXNDbG9uZW1hcmtlcihub2RlKSkge1xyXG4gICAgICBjb25zdCBib3R0b21MaW5lU3ZnID0gc3ZnU3RyKGJhc2VTaGFwZXMubGluZSgwLCAwLCBpdGVtVywgMCwgc3R5bGUpLCBpdGVtVywgaXRlbUgpO1xyXG4gICAgICBpbWFnZXMucHVzaChib3R0b21MaW5lU3ZnKTtcclxuICAgICAgYmdXaWR0aC5wdXNoKCcxMDAlJyk7XHJcbiAgICAgIGJnUG9zWC5wdXNoKCcwJScpO1xyXG4gICAgICBiZ1Bvc1kucHVzaCgnMTAwJScpO1xyXG4gICAgICBiZ0ZpdC5wdXNoKCdub25lJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGhhc0Nsb25lbWFya2VyKG5vZGUpKSB7XHJcbiAgICAgIGNvbnN0IGNsb25lU3ZnID0gc3ZnU3RyKGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nQ2xvbmVNYXJrZXIoMCwgMiwgaXRlbVcsIGl0ZW1IIC0gMyksIGl0ZW1XLCBpdGVtSCk7XHJcbiAgICAgIGltYWdlcy5wdXNoKGNsb25lU3ZnKTtcclxuICAgICAgYmdXaWR0aC5wdXNoKCcxMDAlJyk7XHJcbiAgICAgIGJnUG9zWC5wdXNoKCcwJScpO1xyXG4gICAgICBiZ1Bvc1kucHVzaCgnMTAwJScpO1xyXG4gICAgICBiZ0ZpdC5wdXNoKCdub25lJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHVJbmZvcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IHVJbmZvU3ZnID0gc3ZnU3RyKGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nVW5pdE9mSW5mb3JtYXRpb24oMiwgMCwgaXRlbVcgLSA1LCBpdGVtSCAtIDMsIHVJbmZvc1swXSksIGl0ZW1XLCBpdGVtSCk7XHJcbiAgICAgIGltYWdlcy5wdXNoKHVJbmZvU3ZnKTtcclxuICAgICAgYmdQb3NYLnB1c2goJzI1JScpO1xyXG4gICAgICBiZ1Bvc1kucHVzaCgnMCUnKTtcclxuICAgICAgYmdGaXQucHVzaCgnbm9uZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzVmFycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IHNWYXJTdmcgPSBzdmdTdHIoYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdTdGF0ZVZhcigyLCAwLCBpdGVtVyAtIDUsIGl0ZW1IIC0gMywgc1ZhcnNbMF0pLCBpdGVtVywgaXRlbUgpO1xyXG4gICAgICBpbWFnZXMucHVzaChzVmFyU3ZnKTtcclxuICAgICAgYmdQb3NYLnB1c2goJzg4JScpO1xyXG4gICAgICBiZ1Bvc1kucHVzaCgnMCUnKTtcclxuICAgICAgYmdGaXQucHVzaCgnbm9uZScpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGJnSW1hZ2U6IGltYWdlcyxcclxuICAgICAgYmdXaWR0aDogYmdXaWR0aCxcclxuICAgICAgYmdQb3NYOiBiZ1Bvc1gsXHJcbiAgICAgIGJnUG9zWTogYmdQb3NZLFxyXG4gICAgICBiZ0ZpdDogYmdGaXQsXHJcbiAgICAgIGJnQ2xpcDogJ25vZGUnLFxyXG4gICAgICBwYWRkaW5nOiAnMjJweCcsXHJcbiAgICAgIGJvcmRlcldpZHRoOiA0XHJcbiAgICB9O1xyXG4gIH0sXHJcblxyXG4gIHNvdXJjZUFuZFNpbmsgKG5vZGUpIHtcclxuICAgIGNvbnN0IHt3OiBudywgaDogbmh9ID0gZWxlbWVudC5kaW1lbnNpb25zKG5vZGUpO1xyXG5cclxuICAgIGNvbnN0IGNlbnRlclggPSBudyAvIDI7XHJcbiAgICBjb25zdCBjZW50ZXJZID0gbmggLyAyO1xyXG4gICAgY29uc3QgcmFkaXVzID0gKG53IC0gMikgLyAyO1xyXG5cclxuICAgIGNvbnN0IHN0eWxlTWFwID0gbmV3IE1hcCgpXHJcbiAgICAuc2V0KCdzdHJva2UnLCAnIzZBNkE2QScpXHJcbiAgICAuc2V0KCdzdHJva2UtbGluZWNhcCcsICdzcXVhcmUnKVxyXG4gICAgLnNldCgnc3Ryb2tlLXdpZHRoJywgJzEuNScpXHJcbiAgICAuc2V0KCdmaWxsJywgJ25vbmUnKTtcclxuXHJcbiAgICBjb25zdCBzaGFwZUFyZ3MgPSBbY2VudGVyWCwgY2VudGVyWSwgcmFkaXVzXTtcclxuXHJcbiAgICBjb25zdCBzb3VyY2VBbmRTaW5rU3ZnID1cclxuICAgIGBcclxuICAgICAgJHtiYXNlU2hhcGVzLmNpcmNsZSguLi5zaGFwZUFyZ3MsIHN0eWxlTWFwKX1cclxuICAgICAgJHtoYXNDbG9uZW1hcmtlcihub2RlKSA/IGF1eGlsaWFyeUl0ZW1zLmNsb25lTWFya2VyKG53LCBuaCwgYmFzZVNoYXBlcy5jaXJjbGUsIHNoYXBlQXJncykgOiAnJ31cclxuICAgICAgJHtiYXNlU2hhcGVzLmxpbmUoMCwgbmgsIG53LCAwLCBzdHlsZU1hcCl9XHJcbiAgICBgO1xyXG5cclxuICAgIHJldHVybiBzdmdTdHIoc291cmNlQW5kU2lua1N2ZywgbncsIG5oLCAwLCAwLCBudywgbmgpO1xyXG4gIH0sXHJcblxyXG4gIHBlcnR1cmJpbmdBZ2VudCAobm9kZSkge1xyXG4gICAgY29uc3QgYXV4SXRlbVdpZHRoID0gMTAwO1xyXG4gICAgY29uc3QgYXV4SXRlbUhlaWdodCA9IDIwO1xyXG4gICAgY29uc3QgYm9yZGVyV2lkdGggPSAyO1xyXG4gICAgY29uc3QgZm9udFNpemUgPSAxMDtcclxuICAgIGNvbnN0IHVJbmZvcyA9IGdldFVuaXRJbmZvcyhub2RlKTtcclxuXHJcbiAgICBjb25zdCBzdHlsZSA9IG5ldyBNYXAoKVxyXG4gICAgLnNldCgnc3Ryb2tlJywgJyM2QTZBNkEnKVxyXG4gICAgLnNldCgnc3Ryb2tlLXdpZHRoJywgJzEnKTtcclxuXHJcbiAgICBjb25zdCBjbG9uZU1hcmtlclN2ZyA9IHN2Z1N0cihcclxuICAgICAgaGFzQ2xvbmVtYXJrZXIobm9kZSkgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ0Nsb25lTWFya2VyKDAsIDIsIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodCAtIDMpIDogJycsXHJcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCB1SW5mb1N2ZyA9IHN2Z1N0cihcclxuICAgICAgdUluZm9zLmxlbmd0aCA+IDAgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ1VuaXRPZkluZm9ybWF0aW9uKDIsIDAsIGF1eEl0ZW1XaWR0aCAtIDUsIGF1eEl0ZW1IZWlnaHQgLSAzLCB1SW5mb3NbMF0sIGJvcmRlcldpZHRoLCBmb250U2l6ZSkgOiAnJyxcclxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHRvcExpbmUgPSBzdmdTdHIoXHJcbiAgICAgIHVJbmZvcy5sZW5ndGggPiAwID8gYmFzZVNoYXBlcy5saW5lKDAsIDAsIGF1eEl0ZW1XaWR0aCwgMCwgc3R5bGUpIDogJycsXHJcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBib3R0b21MaW5lID0gc3ZnU3RyKFxyXG4gICAgICBoYXNDbG9uZW1hcmtlcihub2RlKSB8fCB1SW5mb3MubGVuZ3RoID4gMCA/IGJhc2VTaGFwZXMubGluZSgwLCAwLCBhdXhJdGVtV2lkdGgsIDAsIHN0eWxlKSA6ICcnLFxyXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYmdJbWFnZTogW2JvdHRvbUxpbmUsIHRvcExpbmUsIGNsb25lTWFya2VyU3ZnLCB1SW5mb1N2Z10sXHJcbiAgICAgIGJnV2lkdGg6IFsnMTAwJScsICcxMDAlJywgJzEwMCUnXSxcclxuICAgICAgYmdQb3NYOiBbJzAlJywgJzAlJywgJzAlJywgJzIwcHgnXSxcclxuICAgICAgYmdQb3NZOiBbJzU2cHgnLCAnOHB4JywgJzU2cHgnLCAnMCUnXSxcclxuICAgICAgYmdGaXQ6IFsnY292ZXInLCAnY292ZXInLCAnbm9uZScsICdub25lJ10sXHJcbiAgICAgIGJnQ2xpcDogJ25vZGUnLFxyXG4gICAgICBwYWRkaW5nOiAnOHB4JyxcclxuICAgICAgYm9yZGVyV2lkdGg6IDJcclxuICAgIH07XHJcbiAgfVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBlbnRpdHlQb29sTm9kZXM7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zYmduU3R5bGUvZ2x5cGgvZW50aXR5UG9vbE5vZGVzLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vc3JjL3NiZ25TdHlsZS9nbHlwaC9lbnRpdHlQb29sTm9kZXMuanMiLCJjb25zdCBiYXNlU2hhcGVzID0gcmVxdWlyZSgnLi9iYXNlU2hhcGVzJyk7XHJcbmNvbnN0IGF1eGlsaWFyeUl0ZW1zID0gcmVxdWlyZSgnLi9hdXhpbGlhcnlJdGVtcycpO1xyXG5cclxuY29uc3Qgc3ZnU3RyID0gcmVxdWlyZSgnLi4vdXRpbC9zdmcnKS5zdmdTdHI7XHJcbmNvbnN0IGhhc0Nsb25lbWFya2VyID0gcmVxdWlyZSgnLi4vdXRpbC9zYmduJykuaGFzQ2xvbmVtYXJrZXI7XHJcblxyXG5jb25zdCBlbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpO1xyXG5cclxuY29uc3QgcHJvY2Vzc05vZGVzID0ge1xyXG5cclxuICBkaXNzb2NpYXRpb24gKG5vZGUpIHtcclxuICAgIGNvbnN0IHt3OiBudywgaDogbmh9ID0gZWxlbWVudC5kaW1lbnNpb25zKG5vZGUpO1xyXG5cclxuICAgIGNvbnN0IGNlbnRlclggPSBudyAvIDI7XHJcbiAgICBjb25zdCBjZW50ZXJZID0gbmggLyAyO1xyXG4gICAgY29uc3Qgb3V0ZXJSYWRpdXMgPSAoTWF0aC5taW4obncsIG5oKSAtIDIpIC8gMjtcclxuICAgIGNvbnN0IGlubmVyUmFkaXVzID0gKE1hdGgubWluKG53LCBuaCkgLSAyKSAvIDM7XHJcblxyXG4gICAgY29uc3Qgc3R5bGVNYXAgPSBuZXcgTWFwKClcclxuICAgIC5zZXQoJ3N0cm9rZScsICcjNkE2QTZBJylcclxuICAgIC5zZXQoJ3N0cm9rZS13aWR0aCcsICcyJylcclxuICAgIC5zZXQoJ2ZpbGwnLCAnbm9uZScpO1xyXG5cclxuICAgIGNvbnN0IGRpc3NvY2lhdGlvblN2ZyA9XHJcbiAgICBgXHJcbiAgICAgICR7YmFzZVNoYXBlcy5jaXJjbGUoY2VudGVyWCwgY2VudGVyWSwgb3V0ZXJSYWRpdXMsIHN0eWxlTWFwKX1cclxuICAgICAgJHtiYXNlU2hhcGVzLmNpcmNsZShjZW50ZXJYLCBjZW50ZXJZLCBpbm5lclJhZGl1cywgc3R5bGVNYXApfVxyXG4gICAgYDtcclxuICAgIHJldHVybiBzdmdTdHIoZGlzc29jaWF0aW9uU3ZnLCBudywgbmgpO1xyXG4gIH0sXHJcblxyXG4gIHBoZW5vdHlwZSAobm9kZSkge1xyXG4gICAgY29uc3QgYXV4SXRlbVdpZHRoID0gMTAwO1xyXG4gICAgY29uc3QgYXV4SXRlbUhlaWdodCA9IDIwO1xyXG5cclxuICAgIGNvbnN0IHN0eWxlID0gbmV3IE1hcCgpXHJcbiAgICAuc2V0KCdzdHJva2UnLCAnIzZBNkE2QScpXHJcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCAnMScpO1xyXG5cclxuICAgIGNvbnN0IGNsb25lTWFya2VyU3ZnID0gc3ZnU3RyKFxyXG4gICAgICBoYXNDbG9uZW1hcmtlcihub2RlKSA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nQ2xvbmVNYXJrZXIoMCwgMiwgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0IC0gMykgOiAnJyxcclxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0LCAwLCAwLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgYm90dG9tTGluZSA9IHN2Z1N0cihcclxuICAgICAgaGFzQ2xvbmVtYXJrZXIobm9kZSkgPyBiYXNlU2hhcGVzLmxpbmUoMCwgMCwgYXV4SXRlbVdpZHRoLCAwLCBzdHlsZSkgOiAnJyxcclxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0LCAwLCAwLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYmdJbWFnZTogW2JvdHRvbUxpbmUsIGNsb25lTWFya2VyU3ZnXSxcclxuICAgICAgYmdXaWR0aDogWycxMDAlJywgJzEwMCUnXSxcclxuICAgICAgYmdQb3NYOiBbJzAlJywgJzAlJ10sXHJcbiAgICAgIGJnUG9zWTogWyc1NnB4JywgJzU2cHgnXSxcclxuICAgICAgYmdGaXQ6IFsnY292ZXInLCAnbm9uZSddLFxyXG4gICAgICBiZ0NsaXA6ICdub2RlJyxcclxuICAgICAgcGFkZGluZzogJzhweCcsXHJcbiAgICAgIGJvcmRlcldpZHRoOiAyXHJcbiAgICB9O1xyXG4gIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcHJvY2Vzc05vZGVzO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2JnblN0eWxlL2dseXBoL3Byb2Nlc3NOb2Rlcy5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3NyYy9zYmduU3R5bGUvZ2x5cGgvcHJvY2Vzc05vZGVzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0aWYoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=