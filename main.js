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
/*! exports provided: findMatchingCandies, preventClick, forAllCandies, removeInvisible, disappearAllMatching, replaceCandies, setFallAnimations, animationsEnded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findMatchingCandies\", function() { return findMatchingCandies; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"preventClick\", function() { return preventClick; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"forAllCandies\", function() { return forAllCandies; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeInvisible\", function() { return removeInvisible; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"disappearAllMatching\", function() { return disappearAllMatching; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"replaceCandies\", function() { return replaceCandies; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setFallAnimations\", function() { return setFallAnimations; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"animationsEnded\", function() { return animationsEnded; });\n/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parameters */ \"./src/script/parameters.js\");\n/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init */ \"./src/script/init.js\");\n/* harmony import */ var _sweet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sweet */ \"./src/script/sweet.js\");\n\n\n\n\nlet fallCounter = 1;\n\nfunction findMatchingCandies(board) {\n  const height = board.length;\n  const width = board[0].length;\n  const matches = [];\n  let prev = null;\n\n  for (let y = 0; y < height; y++) {\n    for (let x = 0; x < width; x++) {\n      const item = board[y][x];\n      if (item.name === prev) {\n        matches[matches.length - 1].push([x, y]);\n      } else {\n        matches.push([[x, y]]);\n        prev = item.name;\n      }\n    }\n\n    prev = null;\n  }\n\n  for (let x = 0; x < height; x++) {\n    for (let y = 0; y < width; y++) {\n      const item = board[y][x];\n      if (item.name === prev) {\n        matches[matches.length - 1].push([x, y]);\n      } else {\n        matches.push([[x, y]]);\n        prev = item.name;\n      }\n    }\n\n    prev = null;\n  }\n  return matches.filter((match) => match.length >= 3);\n}\nfunction preventClick(ms) {\n  _parameters__WEBPACK_IMPORTED_MODULE_0__[\"parameters\"].clickPossible = false;\n  setTimeout(() => {\n    _parameters__WEBPACK_IMPORTED_MODULE_0__[\"parameters\"].clickPossible = true;\n  }, ms);\n}\n\nfunction forAllCandies(fn) {\n  _init__WEBPACK_IMPORTED_MODULE_1__[\"gameArr\"].forEach((row, y) => {\n    row.forEach((candy, x) => {\n      fn(candy, x, y);\n    });\n  });\n}\n\nfunction removeInvisible() {\n  _init__WEBPACK_IMPORTED_MODULE_1__[\"gameArr\"].forEach((row, y) => {\n    row.forEach((candy, x) => {\n      if (candy && candy.width == 0) {\n        _init__WEBPACK_IMPORTED_MODULE_1__[\"gameArr\"][y][x] = null;\n      }\n    });\n  });\n}\n\nfunction disappearAllMatching() {\n  const matching = findMatchingCandies(_init__WEBPACK_IMPORTED_MODULE_1__[\"gameArr\"]);\n  calculatePoints(matching.length);\n  updatePoints();\n  matching.forEach((set) => {\n    set.forEach(([x, y]) => {\n      _init__WEBPACK_IMPORTED_MODULE_1__[\"gameArr\"][y][x].animation = \"disappear\";\n    });\n  });\n  _parameters__WEBPACK_IMPORTED_MODULE_0__[\"parameters\"].globalAction = null;\n}\n\nfunction replaceCandies(previousCandy, currentCandy) {\n  const { row, column } = previousCandy;\n  const { row: row2, column: column2 } = currentCandy;\n\n  _init__WEBPACK_IMPORTED_MODULE_1__[\"gameArr\"][row][column] = currentCandy;\n  _init__WEBPACK_IMPORTED_MODULE_1__[\"gameArr\"][row2][column2] = previousCandy;\n  currentCandy.row = row;\n  currentCandy.column = column;\n\n  previousCandy.row = row2;\n  previousCandy.column = column2;\n}\n\nfunction setFallAnimations() {\n  _init__WEBPACK_IMPORTED_MODULE_1__[\"gameArr\"].forEach((row, y) => {\n    let counter = 0;\n\n    for (let i = row.length - 1; i >= 0; i--) {\n      const cell = _init__WEBPACK_IMPORTED_MODULE_1__[\"gameArr\"][i][y];\n      if (cell === null) {\n        counter++;\n      } else if (counter !== 0) {\n        const newRow = i + counter;\n        cell.animation = \"changePlaceY\";\n        cell.limit = findY(newRow);\n        replaceFallenCandies(cell, newRow);\n      }\n    }\n  });\n  bottomToTop(fillEmptyCells);\n}\n\nfunction bottomToTop(func) {\n  const width = _init__WEBPACK_IMPORTED_MODULE_1__[\"gameArr\"].length;\n  for (let column = 0; column <= width - 1; column++) {\n    for (let row = width - 1; row >= 0; row--) {\n      func(column, row);\n    }\n  }\n}\n\nfunction findY(row) {\n  const { lineWidth } = _parameters__WEBPACK_IMPORTED_MODULE_0__[\"parameters\"];\n  if (row >= 0) {\n    return lineWidth + row * (_init__WEBPACK_IMPORTED_MODULE_1__[\"imgWidth\"] + lineWidth);\n  } else {\n    return -lineWidth - row * (_init__WEBPACK_IMPORTED_MODULE_1__[\"imgWidth\"] + lineWidth);\n  }\n}\n\nfunction fillEmptyCells(column, row) {\n  if (!_init__WEBPACK_IMPORTED_MODULE_1__[\"gameArr\"][row][column]) {\n    const name = Object(_init__WEBPACK_IMPORTED_MODULE_1__[\"randomCandy\"])(_parameters__WEBPACK_IMPORTED_MODULE_0__[\"parameters\"].allowedCandies);\n    _init__WEBPACK_IMPORTED_MODULE_1__[\"gameArr\"][row][column] = new _sweet__WEBPACK_IMPORTED_MODULE_2__[\"Sweet\"](\n      name,\n      findY(column),\n      -fallCounter * _init__WEBPACK_IMPORTED_MODULE_1__[\"imgWidth\"],\n      _init__WEBPACK_IMPORTED_MODULE_1__[\"imgWidth\"],\n      row,\n      column\n    );\n    const candy = _init__WEBPACK_IMPORTED_MODULE_1__[\"gameArr\"][row][column];\n    candy.limit = findY(row);\n    candy.animation = \"changePlaceY\";\n    if (row == 0) {\n      fallCounter = 0;\n    }\n    fallCounter++;\n  }\n}\nfunction replaceFallenCandies(cell, newRow) {\n  const { column, row } = cell;\n  _init__WEBPACK_IMPORTED_MODULE_1__[\"gameArr\"][newRow][column] = cell;\n  cell.row = newRow;\n  _init__WEBPACK_IMPORTED_MODULE_1__[\"gameArr\"][row][column] = null;\n}\n\nfunction animationsEnded() {\n  return _init__WEBPACK_IMPORTED_MODULE_1__[\"gameArr\"].every((row) => {\n    return row.every((element) => {\n      return element.limit === null;\n    });\n  });\n}\n\nfunction calculatePoints(length) {\n  if (length) {\n    addPoints(Math.pow(2, length));\n  }\n}\n\nfunction addPoints(points) {\n  _parameters__WEBPACK_IMPORTED_MODULE_0__[\"parameters\"].points = _parameters__WEBPACK_IMPORTED_MODULE_0__[\"parameters\"].points + points;\n}\n\nfunction updatePoints() {\n  document.getElementById(\n    \"points-number\"\n  ).innerHTML = _parameters__WEBPACK_IMPORTED_MODULE_0__[\"parameters\"].points.toString();\n}\n\n\n//# sourceURL=webpack:///./src/script/engine.js?");

/***/ }),

/***/ "./src/script/events.js":
/*!******************************!*\
  !*** ./src/script/events.js ***!
  \******************************/
/*! exports provided: toggleSelection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleSelection\", function() { return toggleSelection; });\n/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init.js */ \"./src/script/init.js\");\n/* harmony import */ var _parameters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parameters.js */ \"./src/script/parameters.js\");\n/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./engine */ \"./src/script/engine.js\");\n\n\n\n\n\nfunction getLocalCoordinates(event) {\n  const [left, top] = _init_js__WEBPACK_IMPORTED_MODULE_0__[\"canvasStartPoint\"];\n  const localLeft = event.pageX - left;\n  const localTop = event.pageY - top;\n  return [localLeft, localTop];\n}\nfunction findCell(event) {\n  const [x, y] = getLocalCoordinates(event);\n  const cellLength = _init_js__WEBPACK_IMPORTED_MODULE_0__[\"length\"] / _parameters_js__WEBPACK_IMPORTED_MODULE_1__[\"parameters\"].columns;\n  const column = Math.floor(x / cellLength);\n  const row = Math.floor(y / cellLength);\n  return [column, row];\n}\nfunction toggleSelection(event) {\n  const [column, row] = findCell(event);\n  const currentCandy = _init_js__WEBPACK_IMPORTED_MODULE_0__[\"gameArr\"][row][column];\n  const previousCandy = _parameters_js__WEBPACK_IMPORTED_MODULE_1__[\"parameters\"].selectedCandy;\n  if (Object.keys(previousCandy).length === 0) {\n    currentCandy.selected = true;\n    _parameters_js__WEBPACK_IMPORTED_MODULE_1__[\"parameters\"].selectedCandy = currentCandy;\n  } else if (\n    previousCandy.column !== currentCandy.column ||\n    previousCandy.row !== currentCandy.row\n  ) {\n    if (!checkIfActionNeeded(previousCandy, currentCandy)) {\n      previousCandy.selected = false;\n      currentCandy.selected = true;\n      _parameters_js__WEBPACK_IMPORTED_MODULE_1__[\"parameters\"].selectedCandy = currentCandy;\n    }\n  }\n}\n\nfunction checkIfActionNeeded(previousCandy, currentCandy) {\n  const { row, column } = previousCandy;\n  const { row: row2, column: column2 } = currentCandy;\n  const possibleVectors = [\n    [1, 0],\n    [-1, 0],\n    [0, 1],\n    [0, -1],\n  ];\n  const newVector = [row - row2, column - column2];\n  const result = possibleVectors.some((vector) => {\n    return vector[0] === newVector[0] && vector[1] === newVector[1];\n  });\n  if (result) {\n    previousCandy.selected = false;\n    currentCandy.selected = false;\n    _parameters_js__WEBPACK_IMPORTED_MODULE_1__[\"parameters\"].selectedCandy = {};\n    toggleCandies(previousCandy, currentCandy);\n    return true;\n  }\n  return false;\n}\n\nfunction toggleCandies(previousCandy, currentCandy) {\n  const { row: row1, column: column1 } = previousCandy;\n  const { row: row2, column: column2 } = currentCandy;\n  let gameArrClone = JSON.parse(JSON.stringify(_init_js__WEBPACK_IMPORTED_MODULE_0__[\"gameArr\"]));\n  let previousCandyClone = { ...previousCandy };\n  let currentCandyClone = { ...currentCandy };\n  gameArrClone[row1][column1] = currentCandyClone;\n  gameArrClone[row2][column2] = previousCandyClone;\n  if (Object(_engine__WEBPACK_IMPORTED_MODULE_2__[\"findMatchingCandies\"])(gameArrClone).length > 0) {\n    changeCandies(previousCandy, currentCandy);\n  } else {\n    spinCandies(previousCandy, currentCandy);\n  }\n}\n\nfunction setLimits(previousCandy, currentCandy, axis) {\n  previousCandy.limit = currentCandy[axis];\n  currentCandy.limit = previousCandy[axis];\n}\n\nfunction applyAnimation(previousCandy, currentCandy, animation) {\n  previousCandy.animation = currentCandy.animation = animation;\n}\n\nfunction changeCandies(previousCandy, currentCandy) {\n  Object(_engine__WEBPACK_IMPORTED_MODULE_2__[\"replaceCandies\"])(previousCandy, currentCandy);\n  if (previousCandy.column == currentCandy.column) {\n    setLimits(previousCandy, currentCandy, \"y\");\n    applyAnimation(previousCandy, currentCandy, \"changePlaceY\");\n  }\n  if (previousCandy.row == currentCandy.row) {\n    setLimits(previousCandy, currentCandy, \"x\");\n    applyAnimation(previousCandy, currentCandy, \"changePlaceX\");\n  }\n}\n\nfunction spinCandies(previousCandy, currentCandy) {\n  if (previousCandy.column == currentCandy.column) {\n    setLimits(previousCandy, currentCandy, \"y\");\n    applyAnimation(previousCandy, currentCandy, \"spinY\");\n  }\n  if (previousCandy.row == currentCandy.row) {\n    setLimits(previousCandy, currentCandy, \"x\");\n    applyAnimation(previousCandy, currentCandy, \"spinX\");\n  }\n}\n\n\n//# sourceURL=webpack:///./src/script/events.js?");

/***/ }),

/***/ "./src/script/hiDPI.js":
/*!*****************************!*\
  !*** ./src/script/hiDPI.js ***!
  \*****************************/
/*! exports provided: hiDPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hiDPI\", function() { return hiDPI; });\n/**\n * HiDPI Canvas Polyfill (1.0.10)\n *\n * Author: Jonathan D. Johnson (http://jondavidjohn.com)\n * Homepage: https://github.com/jondavidjohn/hidpi-canvas-polyfill\n * Issue Tracker: https://github.com/jondavidjohn/hidpi-canvas-polyfill/issues\n * License: Apache-2.0\n */\nconst hiDPI = (function (prototype) {\n  var pixelRatio = (function () {\n      var canvas = document.createElement(\"canvas\"),\n        context = canvas.getContext(\"2d\"),\n        backingStore =\n          context.backingStorePixelRatio ||\n          context.webkitBackingStorePixelRatio ||\n          context.mozBackingStorePixelRatio ||\n          context.msBackingStorePixelRatio ||\n          context.oBackingStorePixelRatio ||\n          context.backingStorePixelRatio ||\n          1;\n\n      return (window.devicePixelRatio || 1) / backingStore;\n    })(),\n    forEach = function (obj, func) {\n      for (var p in obj) {\n        if (obj.hasOwnProperty(p)) {\n          func(obj[p], p);\n        }\n      }\n    },\n    ratioArgs = {\n      fillRect: \"all\",\n      clearRect: \"all\",\n      strokeRect: \"all\",\n      moveTo: \"all\",\n      lineTo: \"all\",\n      arc: [0, 1, 2],\n      arcTo: \"all\",\n      bezierCurveTo: \"all\",\n      isPointinPath: \"all\",\n      isPointinStroke: \"all\",\n      quadraticCurveTo: \"all\",\n      rect: \"all\",\n      translate: \"all\",\n      createRadialGradient: \"all\",\n      createLinearGradient: \"all\",\n    };\n\n  if (pixelRatio === 1) return;\n\n  forEach(ratioArgs, function (value, key) {\n    prototype[key] = (function (_super) {\n      return function () {\n        var i,\n          len,\n          args = Array.prototype.slice.call(arguments);\n\n        if (value === \"all\") {\n          args = args.map(function (a) {\n            return a * pixelRatio;\n          });\n        } else if (Array.isArray(value)) {\n          for (i = 0, len = value.length; i < len; i++) {\n            args[value[i]] *= pixelRatio;\n          }\n        }\n\n        return _super.apply(this, args);\n      };\n    })(prototype[key]);\n  });\n\n  // Stroke lineWidth adjustment\n  prototype.stroke = (function (_super) {\n    return function () {\n      this.lineWidth *= pixelRatio;\n      _super.apply(this, arguments);\n      this.lineWidth /= pixelRatio;\n    };\n  })(prototype.stroke);\n\n  // Text\n  //\n  prototype.fillText = (function (_super) {\n    return function () {\n      var args = Array.prototype.slice.call(arguments);\n\n      args[1] *= pixelRatio; // x\n      args[2] *= pixelRatio; // y\n\n      this.font = this.font.replace(/(\\d+)(px|em|rem|pt)/g, function (w, m, u) {\n        return m * pixelRatio + u;\n      });\n\n      _super.apply(this, args);\n\n      this.font = this.font.replace(/(\\d+)(px|em|rem|pt)/g, function (w, m, u) {\n        return m / pixelRatio + u;\n      });\n    };\n  })(prototype.fillText);\n\n  prototype.strokeText = (function (_super) {\n    return function () {\n      var args = Array.prototype.slice.call(arguments);\n\n      args[1] *= pixelRatio; // x\n      args[2] *= pixelRatio; // y\n\n      this.font = this.font.replace(/(\\d+)(px|em|rem|pt)/g, function (w, m, u) {\n        return m * pixelRatio + u;\n      });\n\n      _super.apply(this, args);\n\n      this.font = this.font.replace(/(\\d+)(px|em|rem|pt)/g, function (w, m, u) {\n        return m / pixelRatio + u;\n      });\n    };\n  })(prototype.strokeText);\n})(CanvasRenderingContext2D.prototype);\n(function (prototype) {\n  prototype.getContext = (function (_super) {\n    return function (type) {\n      var backingStore,\n        ratio,\n        context = _super.call(this, type);\n\n      if (type === \"2d\") {\n        backingStore =\n          context.backingStorePixelRatio ||\n          context.webkitBackingStorePixelRatio ||\n          context.mozBackingStorePixelRatio ||\n          context.msBackingStorePixelRatio ||\n          context.oBackingStorePixelRatio ||\n          context.backingStorePixelRatio ||\n          1;\n\n        ratio = (window.devicePixelRatio || 1) / backingStore;\n\n        if (ratio > 1) {\n          this.style.height = this.height + \"px\";\n          this.style.width = this.width + \"px\";\n          this.width *= ratio;\n          this.height *= ratio;\n        }\n      }\n\n      return context;\n    };\n  })(prototype.getContext);\n})(HTMLCanvasElement.prototype);\n\n\n//# sourceURL=webpack:///./src/script/hiDPI.js?");

/***/ }),

/***/ "./src/script/index.js":
/*!*****************************!*\
  !*** ./src/script/index.js ***!
  \*****************************/
/*! exports provided: c, startGame, handleHamburgerClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"c\", function() { return c; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startGame\", function() { return startGame; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleHamburgerClick\", function() { return handleHamburgerClick; });\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hiDPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hiDPI */ \"./src/script/hiDPI.js\");\n/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init.js */ \"./src/script/init.js\");\n/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parameters */ \"./src/script/parameters.js\");\n/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events.js */ \"./src/script/events.js\");\n/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./engine */ \"./src/script/engine.js\");\n/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test */ \"./src/script/test.js\");\n\n\n\n\n\n\n\n\n\n\nwindow.gameArr = _init_js__WEBPACK_IMPORTED_MODULE_2__[\"gameArr\"];\nwindow.test = _test__WEBPACK_IMPORTED_MODULE_6__[\"test\"];\n\nconst c = canvasInit(_init_js__WEBPACK_IMPORTED_MODULE_2__[\"length\"]);\nlet animation = null;\n\nfunction canvasInit() {\n  const canvas = document.querySelector(\"canvas\");\n  canvas.width = _init_js__WEBPACK_IMPORTED_MODULE_2__[\"length\"];\n  canvas.height = _init_js__WEBPACK_IMPORTED_MODULE_2__[\"length\"];\n  return canvas.getContext(\"2d\");\n}\n\nfunction drawLines(columns) {\n  const { lineWidth } = _parameters__WEBPACK_IMPORTED_MODULE_3__[\"parameters\"];\n\n  c.lineWidth = lineWidth;\n  for (let i = lineWidth / 2; i < _init_js__WEBPACK_IMPORTED_MODULE_2__[\"length\"]; i += (_init_js__WEBPACK_IMPORTED_MODULE_2__[\"length\"] - lineWidth) / columns) {\n    c.beginPath();\n    c.strokeStyle = \"brown\";\n    c.moveTo(0, i);\n    c.lineTo(_init_js__WEBPACK_IMPORTED_MODULE_2__[\"length\"], i);\n    c.stroke();\n    c.beginPath();\n    c.moveTo(i, 0);\n    c.lineTo(i, _init_js__WEBPACK_IMPORTED_MODULE_2__[\"length\"]);\n    c.stroke();\n  }\n}\n\nfunction clearCanvas() {\n  c.clearRect(0, 0, _init_js__WEBPACK_IMPORTED_MODULE_2__[\"length\"], _init_js__WEBPACK_IMPORTED_MODULE_2__[\"length\"]);\n}\n\nfunction render() {\n  clearCanvas();\n  drawLines(_parameters__WEBPACK_IMPORTED_MODULE_3__[\"parameters\"].columns);\n  Object(_engine__WEBPACK_IMPORTED_MODULE_5__[\"forAllCandies\"])((candy) => {\n    candy.draw();\n  });\n  if (_parameters__WEBPACK_IMPORTED_MODULE_3__[\"parameters\"].globalAction === \"findMatching\") {\n    Object(_engine__WEBPACK_IMPORTED_MODULE_5__[\"disappearAllMatching\"])();\n  }\n  if (_parameters__WEBPACK_IMPORTED_MODULE_3__[\"parameters\"].globalAction == \"removingCandies\") {\n    Object(_engine__WEBPACK_IMPORTED_MODULE_5__[\"removeInvisible\"])();\n    Object(_engine__WEBPACK_IMPORTED_MODULE_5__[\"setFallAnimations\"])();\n  }\n  animation = requestAnimationFrame(render);\n}\n\nfunction startGame() {\n  Object(_engine__WEBPACK_IMPORTED_MODULE_5__[\"setFallAnimations\"])();\n  if (animation) {\n    window.cancelAnimationFrame(animation);\n  }\n  animation = render();\n}\n\nObject(_init_js__WEBPACK_IMPORTED_MODULE_2__[\"addNewGameButton\"])();\n\ndocument.querySelector(\"canvas\").addEventListener(\"click\", (event) => {\n  if (_parameters__WEBPACK_IMPORTED_MODULE_3__[\"parameters\"].clickPossible) {\n    Object(_events_js__WEBPACK_IMPORTED_MODULE_4__[\"toggleSelection\"])(event);\n  }\n});\n\nconst hamburger = document.querySelector(\".hamburger\");\nconst menu = document.querySelector(\"menu\");\nfunction handleHamburgerClick() {\n  hamburger.classList.toggle(\"hamburger--active\");\n  menu.classList.toggle(\"menu--active\");\n}\n\nhamburger.addEventListener(\"click\", handleHamburgerClick);\n\n\n//# sourceURL=webpack:///./src/script/index.js?");

/***/ }),

/***/ "./src/script/init.js":
/*!****************************!*\
  !*** ./src/script/init.js ***!
  \****************************/
/*! exports provided: pixelRatio, length, gameArr, canvasStartPoint, imgWidth, types, levels, randomCandy, addNewGameButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pixelRatio\", function() { return pixelRatio; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"length\", function() { return length; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gameArr\", function() { return gameArr; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"canvasStartPoint\", function() { return canvasStartPoint; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"imgWidth\", function() { return imgWidth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"types\", function() { return types; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"levels\", function() { return levels; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomCandy\", function() { return randomCandy; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addNewGameButton\", function() { return addNewGameButton; });\n/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parameters */ \"./src/script/parameters.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/script/index.js\");\n\n\n\nconst pixelRatio = window.devicePixelRatio;\n\nconst length = getLength();\nlet gameArr = [];\nconst canvasStartPoint = getCanvasStartPoint();\nlet imgWidth = null;\nconst types = [\n  \"biscuit\",\n  \"candy-cane\",\n  \"candy\",\n  \"gingerbread-man\",\n  \"gingerbread-man2\",\n  \"lollipop\",\n  \"toffee\",\n];\nconst levels = [\n  { objective: 50, time: 120 },\n  { objective: 60, time: 100 },\n];\n\nfunction createEmptyGameArray() {\n  return [...Array(_parameters__WEBPACK_IMPORTED_MODULE_0__[\"parameters\"].columns)].map((e) => Array(_parameters__WEBPACK_IMPORTED_MODULE_0__[\"parameters\"].columns));\n}\nfunction randomCandy(arr) {\n  const { length } = arr;\n  const float = Math.random() * length;\n  return arr[Math.floor(float)];\n}\n\nfunction getLength() {\n  const main = document.querySelector(\"main\");\n  return main.offsetWidth;\n}\n\nfunction getCanvasStartPoint() {\n  const canvas = document.querySelector(\"canvas\");\n  const rect = canvas.getBoundingClientRect();\n  const left = Math.floor(rect.left);\n  const top = Math.floor(rect.top);\n  return [left, top];\n}\n\nfunction addNewGameButton() {\n  const button = document.getElementById(\"new-game-button\");\n  button.addEventListener(\"click\", () => {\n    Object(_index__WEBPACK_IMPORTED_MODULE_1__[\"handleHamburgerClick\"])();\n    setParameters();\n  });\n}\n\nfunction setParameters() {\n  if (window.screen.width > 500 && window.screen.height > 500) {\n    _parameters__WEBPACK_IMPORTED_MODULE_0__[\"parameters\"].columns = 8;\n    _parameters__WEBPACK_IMPORTED_MODULE_0__[\"parameters\"].allowedCandies = reduceCandyTypes(0);\n  } else {\n    _parameters__WEBPACK_IMPORTED_MODULE_0__[\"parameters\"].columns = 5;\n    _parameters__WEBPACK_IMPORTED_MODULE_0__[\"parameters\"].allowedCandies = reduceCandyTypes(2);\n  }\n  gameArr = createEmptyGameArray();\n  imgWidth = calculateImgWidth();\n  Object(_index__WEBPACK_IMPORTED_MODULE_1__[\"startGame\"])();\n}\n\nfunction reduceCandyTypes(number) {\n  let restrictedCandies = types;\n  for (let i = number; i > 0; i--) {\n    let random = randomCandy(restrictedCandies);\n    restrictedCandies = restrictedCandies.filter((candie) => candie !== random);\n  }\n  return restrictedCandies;\n}\n\nfunction calculateImgWidth() {\n  return (\n    (length - _parameters__WEBPACK_IMPORTED_MODULE_0__[\"parameters\"].lineWidth * (_parameters__WEBPACK_IMPORTED_MODULE_0__[\"parameters\"].columns + 1)) /\n    _parameters__WEBPACK_IMPORTED_MODULE_0__[\"parameters\"].columns\n  );\n}\n\n\n//# sourceURL=webpack:///./src/script/init.js?");

/***/ }),

/***/ "./src/script/parameters.js":
/*!**********************************!*\
  !*** ./src/script/parameters.js ***!
  \**********************************/
/*! exports provided: parameters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parameters\", function() { return parameters; });\nlet parameters = {\n  columns: 8,\n  lineWidth: 2,\n  stressColor: \"rgba(145, 221, 121, 0.30)\",\n  selectedCandy: {},\n  clickPossible: true,\n  globalAction: false,\n  allowedCandies: [],\n  points: 0,\n};\n\n\n//# sourceURL=webpack:///./src/script/parameters.js?");

/***/ }),

/***/ "./src/script/sweet.js":
/*!*****************************!*\
  !*** ./src/script/sweet.js ***!
  \*****************************/
/*! exports provided: Sweet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Sweet\", function() { return Sweet; });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/script/index.js\");\n/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parameters */ \"./src/script/parameters.js\");\n/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./engine */ \"./src/script/engine.js\");\n/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./init */ \"./src/script/init.js\");\n\n\n\n\n\nclass Sweet {\n  constructor(name, x, y, width, row, column) {\n    this.name = name;\n    this.image = document.getElementById(name);\n    this.x = x;\n    this.y = y;\n    this.row = row;\n    this.column = column;\n    this.velocity = 0;\n    this.width = width;\n    this.limit = null;\n    this.start = null;\n    this.selected = false;\n    this.animation = false;\n  }\n  draw() {\n    if (this.selected) {\n      this.drawSelection();\n    }\n    if (this.animation == \"disappear\") {\n      this.disappear();\n    }\n    if (this.animation == \"spinX\") {\n      this.calculateSpin(\"x\");\n    }\n    if (this.animation == \"spinY\") {\n      this.calculateSpin(\"y\");\n    }\n    if (this.animation == \"changePlaceX\") {\n      this.changePlace(\"x\");\n    }\n    if (this.animation == \"changePlaceY\") {\n      this.changePlace(\"y\");\n    }\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].drawImage(\n      this.image,\n      this.x * _init__WEBPACK_IMPORTED_MODULE_3__[\"pixelRatio\"],\n      this.y * _init__WEBPACK_IMPORTED_MODULE_3__[\"pixelRatio\"],\n      this.width * _init__WEBPACK_IMPORTED_MODULE_3__[\"pixelRatio\"],\n      this.width * _init__WEBPACK_IMPORTED_MODULE_3__[\"pixelRatio\"]\n    );\n  }\n  drawSelection() {\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fillStyle = _parameters__WEBPACK_IMPORTED_MODULE_1__[\"parameters\"].stressColor;\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fillRect(this.x, this.y, this.width, this.width);\n  }\n\n  calculateVelocity() {\n    const acceleration = 0.2;\n    if (this.y > this.limit) {\n      this.velocityY = 0;\n    } else {\n      this.velocityY += acceleration;\n    }\n    return this;\n  }\n\n  disappear() {\n    const disappearSpeed = 5 / _init__WEBPACK_IMPORTED_MODULE_3__[\"pixelRatio\"];\n    this.width = this.width - disappearSpeed;\n    if (this.width < 20) {\n      this.width = 0;\n      this.animation = false;\n      _parameters__WEBPACK_IMPORTED_MODULE_1__[\"parameters\"].globalAction = \"removingCandies\";\n    }\n  }\n  checkIfComingBack() {\n    if (\n      (this.velocity > 0 && this.limit - this.start > 0) ||\n      (this.velocity < 0 && this.limit - this.start < 0)\n    ) {\n      return false;\n    }\n    return true;\n  }\n  checkIfCrossStart(axis) {\n    if (\n      (this.velocity < 0 && this[axis] < this.start) ||\n      (this.velocity > 0 && this[axis] > this.start)\n    ) {\n      return true;\n    }\n    return false;\n  }\n\n  checkIfCrossLimit(axis) {\n    if (\n      (this.velocity < 0 && this[axis] < this.limit) ||\n      (this.velocity > 0 && this[axis] > this.limit)\n    ) {\n      return true;\n    }\n    return false;\n  }\n\n  endAnimation() {\n    this.start = this.limit = null;\n    this.velocity = 0;\n    this.animation = null;\n  }\n  calculateSpin(axis) {\n    const rate = 10 / _init__WEBPACK_IMPORTED_MODULE_3__[\"pixelRatio\"];\n    if (this.velocity == 0) {\n      this.start = this[axis];\n      this.velocity = (this.limit - this[axis]) / rate;\n    }\n    this[axis] = this[axis] + this.velocity;\n    if (this.checkIfComingBack() && this.checkIfCrossStart(axis)) {\n      this[axis] = this.start;\n      this.endAnimation();\n    }\n    if (!this.checkIfComingBack() && this.checkIfCrossLimit(axis)) {\n      this.velocity = -this.velocity;\n    }\n  }\n\n  changePlace(axis) {\n    const rate = 10;\n    if (this.velocity == 0) {\n      const direction = this.limit - this[axis] > 0 ? 1 : -1;\n      this.velocity = rate * direction;\n      _parameters__WEBPACK_IMPORTED_MODULE_1__[\"parameters\"].globalAction = null;\n    }\n    if (this.checkIfCrossLimit(axis)) {\n      this.velocity = 0;\n      this[axis] = this.limit;\n      this.endAnimation();\n      if (Object(_engine__WEBPACK_IMPORTED_MODULE_2__[\"animationsEnded\"])()) {\n        _parameters__WEBPACK_IMPORTED_MODULE_1__[\"parameters\"].globalAction = \"findMatching\";\n      }\n    }\n    this[axis] += this.velocity;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/script/sweet.js?");

/***/ }),

/***/ "./src/script/test.js":
/*!****************************!*\
  !*** ./src/script/test.js ***!
  \****************************/
/*! exports provided: test */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"test\", function() { return test; });\n/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ \"./src/script/init.js\");\n\n\nconst test = {\n  logElement(row, column, property) {\n    const toLog = window.gameArr[row][column][property];\n    console.log(toLog);\n  },\n  testArray5: [\n    [\"biscuit\", \"biscuit\", \"candy-cane\", \"biscuit\", \"biscuit\"],\n    [\"candy\", \"biscuit\", \"candy-cane\", \"biscuit\", \"biscuit\"],\n    [\"candy\", \"candy-cane\", \"biscuit\", \"candy-cane\", \"candy-cane\"],\n    [\"candy-cane\", \"candy\", \"candy-cane\", \"biscuit\", \"biscuit\"],\n    [\"biscuit\", \"candy\", \"candy-cane\", \"candy\", \"candy\"],\n  ],\n  checkIfRowInsideCorrct() {\n    window.gameArr.forEach((row, rn) => {\n      row.forEach((element, cn) => {\n        if (element) {\n          if (element.row !== rn) {\n            console.log(\n              `error! external row number: ${rn}, internal: ${element.row}`\n            );\n          }\n          if (element.column !== cn) {\n            console.log(\n              `error! in row, column[${rn}, ${cn}]`,\n              `\\nexternal column number: ${cn}, internal: ${element.column}`\n            );\n          }\n        }\n      });\n    });\n  },\n};\n\n\n//# sourceURL=webpack:///./src/script/test.js?");

/***/ })

/******/ });