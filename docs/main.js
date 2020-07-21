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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/style.css?");

/***/ }),

/***/ "./src/script/engine.js":
/*!******************************!*\
  !*** ./src/script/engine.js ***!
  \******************************/
/*! exports provided: findMachingCandies, preventClick, forAllCandies, removeInvisible, disappearAllMaching, replaceCandies, setFallAnimations, animationsEnded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findMachingCandies\", function() { return findMachingCandies; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"preventClick\", function() { return preventClick; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"forAllCandies\", function() { return forAllCandies; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeInvisible\", function() { return removeInvisible; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"disappearAllMaching\", function() { return disappearAllMaching; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"replaceCandies\", function() { return replaceCandies; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setFallAnimations\", function() { return setFallAnimations; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"animationsEnded\", function() { return animationsEnded; });\n/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parameters */ \"./src/script/parameters.js\");\n/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init */ \"./src/script/init.js\");\n/* harmony import */ var _sweet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sweet */ \"./src/script/sweet.js\");\n\r\n\r\n\r\n\r\nlet fallCounter = 1;\r\n\r\nfunction findMachingCandies(board) {\r\n  const height = board.length;\r\n  const width = board[0].length;\r\n  const matches = [];\r\n  let prev = null;\r\n\r\n  for (let y = 0; y < height; y++) {\r\n    for (let x = 0; x < width; x++) {\r\n      const item = board[y][x];\r\n      if (item.name === prev) {\r\n        matches[matches.length - 1].push([x, y]);\r\n      } else {\r\n        matches.push([[x, y]]);\r\n        prev = item.name;\r\n      }\r\n    }\r\n\r\n    prev = null;\r\n  }\r\n\r\n  for (let x = 0; x < height; x++) {\r\n    for (let y = 0; y < width; y++) {\r\n      const item = board[y][x];\r\n      if (item.name === prev) {\r\n        matches[matches.length - 1].push([x, y]);\r\n      } else {\r\n        matches.push([[x, y]]);\r\n        prev = item.name;\r\n      }\r\n    }\r\n\r\n    prev = null;\r\n  }\r\n  return matches.filter((match) => match.length >= 3);\r\n}\r\nfunction preventClick(ms) {\r\n  _parameters__WEBPACK_IMPORTED_MODULE_0__[\"parameters\"].clickPossible = false;\r\n  setTimeout(() => {\r\n    _parameters__WEBPACK_IMPORTED_MODULE_0__[\"parameters\"].clickPossible = true;\r\n  }, ms);\r\n}\r\n\r\nfunction forAllCandies(fn) {\r\n  _init__WEBPACK_IMPORTED_MODULE_1__[\"gameArr\"].forEach((row, y) => {\r\n    row.forEach((candy, x) => {\r\n      fn(candy, x, y);\r\n    });\r\n  });\r\n}\r\n\r\nfunction removeInvisible() {\r\n  _init__WEBPACK_IMPORTED_MODULE_1__[\"gameArr\"].forEach((row, y) => {\r\n    row.forEach((candy, x) => {\r\n      if (candy && candy.width == 0) {\r\n        _init__WEBPACK_IMPORTED_MODULE_1__[\"gameArr\"][y][x] = null;\r\n      }\r\n    });\r\n  });\r\n}\r\n\r\nfunction disappearAllMaching() {\r\n  const maching = findMachingCandies(_init__WEBPACK_IMPORTED_MODULE_1__[\"gameArr\"]);\r\n  maching.forEach((set) => {\r\n    set.forEach(([x, y]) => {\r\n      _init__WEBPACK_IMPORTED_MODULE_1__[\"gameArr\"][y][x].animation = \"disappear\";\r\n    });\r\n  });\r\n}\r\n\r\nfunction replaceCandies(previousCandy, currentCandy) {\r\n  const { row, column } = previousCandy;\r\n  const { row: row2, column: column2 } = currentCandy;\r\n\r\n  _init__WEBPACK_IMPORTED_MODULE_1__[\"gameArr\"][row][column] = currentCandy;\r\n  _init__WEBPACK_IMPORTED_MODULE_1__[\"gameArr\"][row2][column2] = previousCandy;\r\n  currentCandy.row = row;\r\n  currentCandy.column = column;\r\n\r\n  previousCandy.row = row2;\r\n  previousCandy.column = column2;\r\n}\r\n\r\nfunction setFallAnimations() {\r\n  _init__WEBPACK_IMPORTED_MODULE_1__[\"gameArr\"].forEach((row, y) => {\r\n    let counter = 0;\r\n\r\n    for (let i = row.length - 1; i >= 0; i--) {\r\n      const cell = _init__WEBPACK_IMPORTED_MODULE_1__[\"gameArr\"][i][y];\r\n      if (cell === null) {\r\n        counter++;\r\n      } else if (counter !== 0) {\r\n        const newRow = i + counter;\r\n        cell.animation = \"changePlaceY\";\r\n        cell.limit = findY(newRow);\r\n        replaceFallenCandies(cell, newRow);\r\n      }\r\n    }\r\n  });\r\n  bottomToTop(fillEmptyCells);\r\n}\r\n\r\nfunction bottomToTop(func) {\r\n  const width = _init__WEBPACK_IMPORTED_MODULE_1__[\"gameArr\"].length;\r\n  for (let column = 0; column <= width - 1; column++) {\r\n    for (let row = width - 1; row >= 0; row--) {\r\n      func(column, row);\r\n    }\r\n  }\r\n}\r\n\r\nfunction findY(row) {\r\n  const { lineWidth } = _parameters__WEBPACK_IMPORTED_MODULE_0__[\"parameters\"];\r\n  if (row >= 0) {\r\n    return lineWidth + row * (_init__WEBPACK_IMPORTED_MODULE_1__[\"imgWidth\"] + lineWidth);\r\n  } else {\r\n    return -lineWidth - row * (_init__WEBPACK_IMPORTED_MODULE_1__[\"imgWidth\"] + lineWidth);\r\n  }\r\n}\r\n\r\nfunction fillEmptyCells(column, row) {\r\n  if (!_init__WEBPACK_IMPORTED_MODULE_1__[\"gameArr\"][row][column]) {\r\n    const name = Object(_init__WEBPACK_IMPORTED_MODULE_1__[\"randomCandy\"])(_init__WEBPACK_IMPORTED_MODULE_1__[\"types\"]);\r\n    _init__WEBPACK_IMPORTED_MODULE_1__[\"gameArr\"][row][column] = new _sweet__WEBPACK_IMPORTED_MODULE_2__[\"Sweet\"](\r\n      name,\r\n      findY(column),\r\n      -fallCounter * _init__WEBPACK_IMPORTED_MODULE_1__[\"imgWidth\"],\r\n      _init__WEBPACK_IMPORTED_MODULE_1__[\"imgWidth\"],\r\n      row,\r\n      column\r\n    );\r\n    const candy = _init__WEBPACK_IMPORTED_MODULE_1__[\"gameArr\"][row][column];\r\n    candy.limit = findY(row);\r\n    candy.animation = \"changePlaceY\";\r\n    if (row == 0) {\r\n      fallCounter = 0;\r\n    }\r\n    fallCounter++;\r\n  }\r\n}\r\nfunction replaceFallenCandies(cell, newRow) {\r\n  const { column, row } = cell;\r\n  _init__WEBPACK_IMPORTED_MODULE_1__[\"gameArr\"][newRow][column] = cell;\r\n  cell.row = newRow;\r\n  _init__WEBPACK_IMPORTED_MODULE_1__[\"gameArr\"][row][column] = null;\r\n}\r\n\r\nfunction animationsEnded() {\r\n  return _init__WEBPACK_IMPORTED_MODULE_1__[\"gameArr\"].every((row) => {\r\n    return row.every((element) => {\r\n      return element.limit === null;\r\n    });\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/script/engine.js?");

/***/ }),

/***/ "./src/script/events.js":
/*!******************************!*\
  !*** ./src/script/events.js ***!
  \******************************/
/*! exports provided: toggleSelection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleSelection\", function() { return toggleSelection; });\n/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init.js */ \"./src/script/init.js\");\n/* harmony import */ var _parameters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parameters.js */ \"./src/script/parameters.js\");\n/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./engine */ \"./src/script/engine.js\");\n\r\n\r\n\r\n\r\n\r\nfunction getLocalCoordinates(event) {\r\n  const [left, top] = _init_js__WEBPACK_IMPORTED_MODULE_0__[\"canvasStartPoint\"];\r\n  const localLeft = event.pageX - left;\r\n  const localTop = event.pageY - top;\r\n  return [localLeft, localTop];\r\n}\r\nfunction findCell(event) {\r\n  const [x, y] = getLocalCoordinates(event);\r\n  const cellLength = _init_js__WEBPACK_IMPORTED_MODULE_0__[\"length\"] / _parameters_js__WEBPACK_IMPORTED_MODULE_1__[\"parameters\"].columns;\r\n  const column = Math.floor(x / cellLength);\r\n  const row = Math.floor(y / cellLength);\r\n  return [column, row];\r\n}\r\nfunction toggleSelection(event) {\r\n  const [column, row] = findCell(event);\r\n  const currentCandy = _init_js__WEBPACK_IMPORTED_MODULE_0__[\"gameArr\"][row][column];\r\n  const previousCandy = _parameters_js__WEBPACK_IMPORTED_MODULE_1__[\"parameters\"].selectedCandy;\r\n  if (Object.keys(previousCandy).length === 0) {\r\n    currentCandy.selected = true;\r\n    _parameters_js__WEBPACK_IMPORTED_MODULE_1__[\"parameters\"].selectedCandy = currentCandy;\r\n  } else if (\r\n    previousCandy.column !== currentCandy.column ||\r\n    previousCandy.row !== currentCandy.row\r\n  ) {\r\n    if (!checkIfActionNeeded(previousCandy, currentCandy)) {\r\n      previousCandy.selected = false;\r\n      currentCandy.selected = true;\r\n      _parameters_js__WEBPACK_IMPORTED_MODULE_1__[\"parameters\"].selectedCandy = currentCandy;\r\n    }\r\n  }\r\n}\r\n\r\nfunction checkIfActionNeeded(previousCandy, currentCandy) {\r\n  const { row, column } = previousCandy;\r\n  const { row: row2, column: column2 } = currentCandy;\r\n  const possibleVectors = [\r\n    [1, 0],\r\n    [-1, 0],\r\n    [0, 1],\r\n    [0, -1],\r\n  ];\r\n  const newVector = [row - row2, column - column2];\r\n  const result = possibleVectors.some((vector) => {\r\n    return vector[0] === newVector[0] && vector[1] === newVector[1];\r\n  });\r\n  if (result) {\r\n    previousCandy.selected = false;\r\n    currentCandy.selected = false;\r\n    _parameters_js__WEBPACK_IMPORTED_MODULE_1__[\"parameters\"].selectedCandy = {};\r\n    toggleCandies(previousCandy, currentCandy);\r\n    return true;\r\n  }\r\n  return false;\r\n}\r\n\r\nfunction toggleCandies(previousCandy, currentCandy) {\r\n  const { row: row1, column: column1 } = previousCandy;\r\n  const { row: row2, column: column2 } = currentCandy;\r\n  let gameArrClone = JSON.parse(JSON.stringify(_init_js__WEBPACK_IMPORTED_MODULE_0__[\"gameArr\"]));\r\n  let previousCandyClone = { ...previousCandy };\r\n  let currentCandyClone = { ...currentCandy };\r\n  gameArrClone[row1][column1] = currentCandyClone;\r\n  gameArrClone[row2][column2] = previousCandyClone;\r\n  if (Object(_engine__WEBPACK_IMPORTED_MODULE_2__[\"findMachingCandies\"])(gameArrClone).length > 0) {\r\n    changeCandies(previousCandy, currentCandy);\r\n  } else {\r\n    spinCandies(previousCandy, currentCandy);\r\n  }\r\n}\r\n\r\nfunction setLimits(previousCandy, currentCandy, axis) {\r\n  previousCandy.limit = currentCandy[axis];\r\n  currentCandy.limit = previousCandy[axis];\r\n}\r\n\r\nfunction applyAnimation(previousCandy, currentCandy, animation) {\r\n  previousCandy.animation = currentCandy.animation = animation;\r\n}\r\n\r\nfunction changeCandies(previousCandy, currentCandy) {\r\n  Object(_engine__WEBPACK_IMPORTED_MODULE_2__[\"replaceCandies\"])(previousCandy, currentCandy);\r\n  if (previousCandy.column == currentCandy.column) {\r\n    setLimits(previousCandy, currentCandy, \"y\");\r\n    applyAnimation(previousCandy, currentCandy, \"changePlaceY\");\r\n  }\r\n  if (previousCandy.row == currentCandy.row) {\r\n    setLimits(previousCandy, currentCandy, \"x\");\r\n    applyAnimation(previousCandy, currentCandy, \"changePlaceX\");\r\n  }\r\n}\r\n\r\nfunction spinCandies(previousCandy, currentCandy) {\r\n  if (previousCandy.column == currentCandy.column) {\r\n    setLimits(previousCandy, currentCandy, \"y\");\r\n    applyAnimation(previousCandy, currentCandy, \"spinY\");\r\n  }\r\n  if (previousCandy.row == currentCandy.row) {\r\n    setLimits(previousCandy, currentCandy, \"x\");\r\n    applyAnimation(previousCandy, currentCandy, \"spinX\");\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/script/events.js?");

/***/ }),

/***/ "./src/script/hiDPI.js":
/*!*****************************!*\
  !*** ./src/script/hiDPI.js ***!
  \*****************************/
/*! exports provided: hiDPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hiDPI\", function() { return hiDPI; });\n/**\r\n * HiDPI Canvas Polyfill (1.0.10)\r\n *\r\n * Author: Jonathan D. Johnson (http://jondavidjohn.com)\r\n * Homepage: https://github.com/jondavidjohn/hidpi-canvas-polyfill\r\n * Issue Tracker: https://github.com/jondavidjohn/hidpi-canvas-polyfill/issues\r\n * License: Apache-2.0\r\n */\r\nconst hiDPI = (function (prototype) {\r\n  var pixelRatio = (function () {\r\n      var canvas = document.createElement(\"canvas\"),\r\n        context = canvas.getContext(\"2d\"),\r\n        backingStore =\r\n          context.backingStorePixelRatio ||\r\n          context.webkitBackingStorePixelRatio ||\r\n          context.mozBackingStorePixelRatio ||\r\n          context.msBackingStorePixelRatio ||\r\n          context.oBackingStorePixelRatio ||\r\n          context.backingStorePixelRatio ||\r\n          1;\r\n\r\n      return (window.devicePixelRatio || 1) / backingStore;\r\n    })(),\r\n    forEach = function (obj, func) {\r\n      for (var p in obj) {\r\n        if (obj.hasOwnProperty(p)) {\r\n          func(obj[p], p);\r\n        }\r\n      }\r\n    },\r\n    ratioArgs = {\r\n      fillRect: \"all\",\r\n      clearRect: \"all\",\r\n      strokeRect: \"all\",\r\n      moveTo: \"all\",\r\n      lineTo: \"all\",\r\n      arc: [0, 1, 2],\r\n      arcTo: \"all\",\r\n      bezierCurveTo: \"all\",\r\n      isPointinPath: \"all\",\r\n      isPointinStroke: \"all\",\r\n      quadraticCurveTo: \"all\",\r\n      rect: \"all\",\r\n      translate: \"all\",\r\n      createRadialGradient: \"all\",\r\n      createLinearGradient: \"all\",\r\n    };\r\n\r\n  if (pixelRatio === 1) return;\r\n\r\n  forEach(ratioArgs, function (value, key) {\r\n    prototype[key] = (function (_super) {\r\n      return function () {\r\n        var i,\r\n          len,\r\n          args = Array.prototype.slice.call(arguments);\r\n\r\n        if (value === \"all\") {\r\n          args = args.map(function (a) {\r\n            return a * pixelRatio;\r\n          });\r\n        } else if (Array.isArray(value)) {\r\n          for (i = 0, len = value.length; i < len; i++) {\r\n            args[value[i]] *= pixelRatio;\r\n          }\r\n        }\r\n\r\n        return _super.apply(this, args);\r\n      };\r\n    })(prototype[key]);\r\n  });\r\n\r\n  // Stroke lineWidth adjustment\r\n  prototype.stroke = (function (_super) {\r\n    return function () {\r\n      this.lineWidth *= pixelRatio;\r\n      _super.apply(this, arguments);\r\n      this.lineWidth /= pixelRatio;\r\n    };\r\n  })(prototype.stroke);\r\n\r\n  // Text\r\n  //\r\n  prototype.fillText = (function (_super) {\r\n    return function () {\r\n      var args = Array.prototype.slice.call(arguments);\r\n\r\n      args[1] *= pixelRatio; // x\r\n      args[2] *= pixelRatio; // y\r\n\r\n      this.font = this.font.replace(/(\\d+)(px|em|rem|pt)/g, function (w, m, u) {\r\n        return m * pixelRatio + u;\r\n      });\r\n\r\n      _super.apply(this, args);\r\n\r\n      this.font = this.font.replace(/(\\d+)(px|em|rem|pt)/g, function (w, m, u) {\r\n        return m / pixelRatio + u;\r\n      });\r\n    };\r\n  })(prototype.fillText);\r\n\r\n  prototype.strokeText = (function (_super) {\r\n    return function () {\r\n      var args = Array.prototype.slice.call(arguments);\r\n\r\n      args[1] *= pixelRatio; // x\r\n      args[2] *= pixelRatio; // y\r\n\r\n      this.font = this.font.replace(/(\\d+)(px|em|rem|pt)/g, function (w, m, u) {\r\n        return m * pixelRatio + u;\r\n      });\r\n\r\n      _super.apply(this, args);\r\n\r\n      this.font = this.font.replace(/(\\d+)(px|em|rem|pt)/g, function (w, m, u) {\r\n        return m / pixelRatio + u;\r\n      });\r\n    };\r\n  })(prototype.strokeText);\r\n})(CanvasRenderingContext2D.prototype);\r\n(function (prototype) {\r\n  prototype.getContext = (function (_super) {\r\n    return function (type) {\r\n      var backingStore,\r\n        ratio,\r\n        context = _super.call(this, type);\r\n\r\n      if (type === \"2d\") {\r\n        backingStore =\r\n          context.backingStorePixelRatio ||\r\n          context.webkitBackingStorePixelRatio ||\r\n          context.mozBackingStorePixelRatio ||\r\n          context.msBackingStorePixelRatio ||\r\n          context.oBackingStorePixelRatio ||\r\n          context.backingStorePixelRatio ||\r\n          1;\r\n\r\n        ratio = (window.devicePixelRatio || 1) / backingStore;\r\n\r\n        if (ratio > 1) {\r\n          this.style.height = this.height + \"px\";\r\n          this.style.width = this.width + \"px\";\r\n          this.width *= ratio;\r\n          this.height *= ratio;\r\n        }\r\n      }\r\n\r\n      return context;\r\n    };\r\n  })(prototype.getContext);\r\n})(HTMLCanvasElement.prototype);\r\n\n\n//# sourceURL=webpack:///./src/script/hiDPI.js?");

/***/ }),

/***/ "./src/script/index.js":
/*!*****************************!*\
  !*** ./src/script/index.js ***!
  \*****************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"c\", function() { return c; });\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hiDPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hiDPI */ \"./src/script/hiDPI.js\");\n/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init.js */ \"./src/script/init.js\");\n/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parameters */ \"./src/script/parameters.js\");\n/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events.js */ \"./src/script/events.js\");\n/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./engine */ \"./src/script/engine.js\");\n/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test */ \"./src/script/test.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.gameArr = _init_js__WEBPACK_IMPORTED_MODULE_2__[\"gameArr\"];\r\nwindow.test = _test__WEBPACK_IMPORTED_MODULE_6__[\"test\"];\r\n\r\nconst c = canvasInit(_init_js__WEBPACK_IMPORTED_MODULE_2__[\"length\"]);\r\n\r\nfunction canvasInit() {\r\n  const canvas = document.querySelector(\"canvas\");\r\n  canvas.width = _init_js__WEBPACK_IMPORTED_MODULE_2__[\"length\"];\r\n  canvas.height = _init_js__WEBPACK_IMPORTED_MODULE_2__[\"length\"];\r\n  return canvas.getContext(\"2d\");\r\n}\r\n\r\nfunction drawLines(columns) {\r\n  const { lineWidth } = _parameters__WEBPACK_IMPORTED_MODULE_3__[\"parameters\"];\r\n\r\n  c.lineWidth = lineWidth;\r\n  for (let i = lineWidth / 2; i < _init_js__WEBPACK_IMPORTED_MODULE_2__[\"length\"]; i += (_init_js__WEBPACK_IMPORTED_MODULE_2__[\"length\"] - lineWidth) / columns) {\r\n    c.beginPath();\r\n    c.strokeStyle = \"brown\";\r\n    c.moveTo(0, i);\r\n    c.lineTo(_init_js__WEBPACK_IMPORTED_MODULE_2__[\"length\"], i);\r\n    c.stroke();\r\n    c.beginPath();\r\n    c.moveTo(i, 0);\r\n    c.lineTo(i, _init_js__WEBPACK_IMPORTED_MODULE_2__[\"length\"]);\r\n    c.stroke();\r\n  }\r\n}\r\n\r\nfunction clearCanvas() {\r\n  c.clearRect(0, 0, _init_js__WEBPACK_IMPORTED_MODULE_2__[\"length\"], _init_js__WEBPACK_IMPORTED_MODULE_2__[\"length\"]);\r\n}\r\n\r\nfunction render() {\r\n  clearCanvas();\r\n  drawLines(_parameters__WEBPACK_IMPORTED_MODULE_3__[\"parameters\"].columns);\r\n  Object(_engine__WEBPACK_IMPORTED_MODULE_5__[\"forAllCandies\"])((candy) => {\r\n    candy.draw();\r\n  });\r\n  if (_parameters__WEBPACK_IMPORTED_MODULE_3__[\"parameters\"].globalAction === \"findMaching\") {\r\n    Object(_engine__WEBPACK_IMPORTED_MODULE_5__[\"disappearAllMaching\"])();\r\n  }\r\n  if (_parameters__WEBPACK_IMPORTED_MODULE_3__[\"parameters\"].globalAction == \"removingCandies\") {\r\n    Object(_engine__WEBPACK_IMPORTED_MODULE_5__[\"removeInvisible\"])();\r\n    Object(_engine__WEBPACK_IMPORTED_MODULE_5__[\"setFallAnimations\"])();\r\n  }\r\n  requestAnimationFrame(render);\r\n}\r\n\r\nwindow.onload = () => {\r\n  Object(_engine__WEBPACK_IMPORTED_MODULE_5__[\"setFallAnimations\"])();\r\n  render();\r\n};\r\ndocument.querySelector(\"canvas\").addEventListener(\"click\", (event) => {\r\n  if (_parameters__WEBPACK_IMPORTED_MODULE_3__[\"parameters\"].clickPossible) {\r\n    Object(_events_js__WEBPACK_IMPORTED_MODULE_4__[\"toggleSelection\"])(event);\r\n  }\r\n});\r\n\r\nconst hamburger = document.querySelector(\".hamburger\");\r\nconst menu = document.querySelector(\"menu\");\r\nfunction handleHamburgerClick() {\r\n  hamburger.classList.toggle(\"hamburger--active\");\r\n  menu.classList.toggle(\"menu--active\");\r\n}\r\n\r\nhamburger.addEventListener(\"click\", handleHamburgerClick);\r\n\n\n//# sourceURL=webpack:///./src/script/index.js?");

/***/ }),

/***/ "./src/script/init.js":
/*!****************************!*\
  !*** ./src/script/init.js ***!
  \****************************/
/*! exports provided: pixelRatio, length, gameArr, canvasStartPoint, imgWidth, types, randomCandy, addNewGameButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pixelRatio\", function() { return pixelRatio; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"length\", function() { return length; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gameArr\", function() { return gameArr; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"canvasStartPoint\", function() { return canvasStartPoint; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"imgWidth\", function() { return imgWidth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"types\", function() { return types; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomCandy\", function() { return randomCandy; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addNewGameButton\", function() { return addNewGameButton; });\n/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parameters */ \"./src/script/parameters.js\");\n\r\n\r\nconst { columns, lineWidth } = _parameters__WEBPACK_IMPORTED_MODULE_0__[\"parameters\"];\r\n\r\nconst pixelRatio = window.devicePixelRatio;\r\n\r\nconst length = getLength();\r\nlet gameArr = createEmptyGameArray();\r\nconst canvasStartPoint = getCanvasStartPoint();\r\nconst imgWidth = (length - lineWidth * (columns + 1)) / columns;\r\nconst types = [\r\n  \"biscuit\",\r\n  \"candy-cane\",\r\n  \"candy\",\r\n  \"gingerbread-man\",\r\n  \"gingerbread-man2\",\r\n  \"lollipop\",\r\n  \"toffee\",\r\n];\r\n\r\nfunction createEmptyGameArray() {\r\n  return [...Array(columns)].map((e) => Array(columns));\r\n}\r\nfunction randomCandy(arr) {\r\n  const { length } = arr;\r\n  const float = Math.random() * length;\r\n  return arr[Math.floor(float)];\r\n}\r\n\r\nfunction getLength() {\r\n  const main = document.querySelector(\"main\");\r\n  return main.offsetWidth;\r\n}\r\n\r\nfunction getCanvasStartPoint() {\r\n  const canvas = document.querySelector(\"canvas\");\r\n  const rect = canvas.getBoundingClientRect();\r\n  const left = Math.floor(rect.left);\r\n  const top = Math.floor(rect.top);\r\n  return [left, top];\r\n}\r\n\r\nfunction addNewGameButton() {\r\n  const button = document.getElementById(\"new-game-button\");\r\n  button.addEventListener(\"click\", () => {\r\n    setParameters();\r\n  });\r\n}\r\n\r\nfunction setParameters() {\r\n  if (width > 500) {\r\n    _parameters__WEBPACK_IMPORTED_MODULE_0__[\"parameters\"].columns = 8;\r\n    startGame();\r\n  } else {\r\n    _parameters__WEBPACK_IMPORTED_MODULE_0__[\"parameters\"].columns = 5;\r\n    _parameters__WEBPACK_IMPORTED_MODULE_0__[\"parameters\"].allowedCandies = reduceCandyTypes(2);\r\n    startGame();\r\n  }\r\n}\r\n\r\nfunction reduceCandyTypes(number) {\r\n  let restrictedCandies = types;\r\n  for (let i = number; i > 0; i--) {\r\n    let random = randomCandy(restrictedCandies);\r\n    restrictedCandies = restrictedCandies.filter((candie) => candie !== random);\r\n  }\r\n  return restrictedCandies;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/script/init.js?");

/***/ }),

/***/ "./src/script/parameters.js":
/*!**********************************!*\
  !*** ./src/script/parameters.js ***!
  \**********************************/
/*! exports provided: parameters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parameters\", function() { return parameters; });\nlet parameters = {\r\n  columns: 8,\r\n  lineWidth: 2,\r\n  stressColor: \"rgba(145, 221, 121, 0.30)\",\r\n  selectedCandy: {},\r\n  clickPossible: true,\r\n  globalAction: false,\r\n};\r\n\n\n//# sourceURL=webpack:///./src/script/parameters.js?");

/***/ }),

/***/ "./src/script/sweet.js":
/*!*****************************!*\
  !*** ./src/script/sweet.js ***!
  \*****************************/
/*! exports provided: Sweet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Sweet\", function() { return Sweet; });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/script/index.js\");\n/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parameters */ \"./src/script/parameters.js\");\n/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./engine */ \"./src/script/engine.js\");\n/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./init */ \"./src/script/init.js\");\n\r\n\r\n\r\n\r\n\r\nclass Sweet {\r\n  constructor(name, x, y, width, row, column) {\r\n    this.name = name;\r\n    this.image = document.getElementById(name);\r\n    this.x = x;\r\n    this.y = y;\r\n    this.row = row;\r\n    this.column = column;\r\n    this.velocity = 0;\r\n    this.width = width;\r\n    this.limit = null;\r\n    this.start = null;\r\n    this.selected = false;\r\n    this.animation = false;\r\n  }\r\n  draw() {\r\n    if (this.selected) {\r\n      this.drawSelection();\r\n    }\r\n    if (this.animation == \"disappear\") {\r\n      this.disappear();\r\n    }\r\n    if (this.animation == \"spinX\") {\r\n      this.calculateSpin(\"x\");\r\n    }\r\n    if (this.animation == \"spinY\") {\r\n      this.calculateSpin(\"y\");\r\n    }\r\n    if (this.animation == \"changePlaceX\") {\r\n      this.changePlace(\"x\");\r\n    }\r\n    if (this.animation == \"changePlaceY\") {\r\n      this.changePlace(\"y\");\r\n    }\r\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].drawImage(\r\n      this.image,\r\n      this.x * _init__WEBPACK_IMPORTED_MODULE_3__[\"pixelRatio\"],\r\n      this.y * _init__WEBPACK_IMPORTED_MODULE_3__[\"pixelRatio\"],\r\n      this.width * _init__WEBPACK_IMPORTED_MODULE_3__[\"pixelRatio\"],\r\n      this.width * _init__WEBPACK_IMPORTED_MODULE_3__[\"pixelRatio\"]\r\n    );\r\n  }\r\n  drawSelection() {\r\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fillStyle = _parameters__WEBPACK_IMPORTED_MODULE_1__[\"parameters\"].stressColor;\r\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fillRect(this.x, this.y, this.width, this.width);\r\n  }\r\n\r\n  calculateVelocity() {\r\n    const acceleration = 0.2;\r\n    if (this.y > this.limit) {\r\n      this.velocityY = 0;\r\n    } else {\r\n      this.velocityY += acceleration;\r\n    }\r\n    return this;\r\n  }\r\n\r\n  disappear() {\r\n    const disappearSpeed = 5 / _init__WEBPACK_IMPORTED_MODULE_3__[\"pixelRatio\"];\r\n    this.width = this.width - disappearSpeed;\r\n    if (this.width < 20) {\r\n      this.width = 0;\r\n      this.animation = false;\r\n      _parameters__WEBPACK_IMPORTED_MODULE_1__[\"parameters\"].globalAction = \"removingCandies\";\r\n    }\r\n  }\r\n  checkIfComingBack() {\r\n    if (\r\n      (this.velocity > 0 && this.limit - this.start > 0) ||\r\n      (this.velocity < 0 && this.limit - this.start < 0)\r\n    ) {\r\n      return false;\r\n    }\r\n    return true;\r\n  }\r\n  checkIfCrossStart(axis) {\r\n    if (\r\n      (this.velocity < 0 && this[axis] < this.start) ||\r\n      (this.velocity > 0 && this[axis] > this.start)\r\n    ) {\r\n      return true;\r\n    }\r\n    return false;\r\n  }\r\n\r\n  checkIfCrossLimit(axis) {\r\n    if (\r\n      (this.velocity < 0 && this[axis] < this.limit) ||\r\n      (this.velocity > 0 && this[axis] > this.limit)\r\n    ) {\r\n      return true;\r\n    }\r\n    return false;\r\n  }\r\n\r\n  endAnimation() {\r\n    this.start = this.limit = null;\r\n    this.velocity = 0;\r\n    this.animation = null;\r\n  }\r\n  calculateSpin(axis) {\r\n    const rate = 10 / _init__WEBPACK_IMPORTED_MODULE_3__[\"pixelRatio\"];\r\n    if (this.velocity == 0) {\r\n      this.start = this[axis];\r\n      this.velocity = (this.limit - this[axis]) / rate;\r\n    }\r\n    this[axis] = this[axis] + this.velocity;\r\n    if (this.checkIfComingBack() && this.checkIfCrossStart(axis)) {\r\n      this[axis] = this.start;\r\n      this.endAnimation();\r\n    }\r\n    if (!this.checkIfComingBack() && this.checkIfCrossLimit(axis)) {\r\n      this.velocity = -this.velocity;\r\n    }\r\n  }\r\n\r\n  changePlace(axis) {\r\n    const rate = 10;\r\n    if (this.velocity == 0) {\r\n      const direction = this.limit - this[axis] > 0 ? 1 : -1;\r\n      this.velocity = rate * direction;\r\n      _parameters__WEBPACK_IMPORTED_MODULE_1__[\"parameters\"].globalAction = null;\r\n    }\r\n    if (this.checkIfCrossLimit(axis)) {\r\n      this.velocity = 0;\r\n      this[axis] = this.limit;\r\n      this.endAnimation();\r\n      if (Object(_engine__WEBPACK_IMPORTED_MODULE_2__[\"animationsEnded\"])()) {\r\n        _parameters__WEBPACK_IMPORTED_MODULE_1__[\"parameters\"].globalAction = \"findMaching\";\r\n      }\r\n    }\r\n    this[axis] += this.velocity;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/script/sweet.js?");

/***/ }),

/***/ "./src/script/test.js":
/*!****************************!*\
  !*** ./src/script/test.js ***!
  \****************************/
/*! exports provided: test */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"test\", function() { return test; });\n/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ \"./src/script/init.js\");\n\r\n\r\nconst test = {\r\n  logElement(row, column, property) {\r\n    const toLog = window.gameArr[row][column][property];\r\n    console.log(toLog);\r\n  },\r\n  testArray5: [\r\n    [\"biscuit\", \"biscuit\", \"candy-cane\", \"biscuit\", \"biscuit\"],\r\n    [\"candy\", \"biscuit\", \"candy-cane\", \"biscuit\", \"biscuit\"],\r\n    [\"candy\", \"candy-cane\", \"biscuit\", \"candy-cane\", \"candy-cane\"],\r\n    [\"candy-cane\", \"candy\", \"candy-cane\", \"biscuit\", \"biscuit\"],\r\n    [\"biscuit\", \"candy\", \"candy-cane\", \"candy\", \"candy\"],\r\n  ],\r\n  checkIfRowInsideCorrct() {\r\n    window.gameArr.forEach((row, rn) => {\r\n      row.forEach((element, cn) => {\r\n        if (element) {\r\n          if (element.row !== rn) {\r\n            console.log(\r\n              `error! external row number: ${rn}, internal: ${element.row}`\r\n            );\r\n          }\r\n          if (element.column !== cn) {\r\n            console.log(\r\n              `error! in row, column[${rn}, ${cn}]`,\r\n              `\\nexternal column number: ${cn}, internal: ${element.column}`\r\n            );\r\n          }\r\n        }\r\n      });\r\n    });\r\n  },\r\n};\r\n\n\n//# sourceURL=webpack:///./src/script/test.js?");

/***/ })

/******/ });