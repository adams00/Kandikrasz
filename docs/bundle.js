(() => {
  // src/script/hiDPI.js
  var hiDPI = (function(prototype) {
    var pixelRatio2 = (function() {
      var canvas = document.createElement("canvas"), context = canvas.getContext("2d"), backingStore = context.backingStorePixelRatio || context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;
      return (window.devicePixelRatio || 1) / backingStore;
    })(), forEach = function(obj, func) {
      for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
          func(obj[p], p);
        }
      }
    }, ratioArgs = {
      fillRect: "all",
      clearRect: "all",
      strokeRect: "all",
      moveTo: "all",
      lineTo: "all",
      arc: [0, 1, 2],
      arcTo: "all",
      bezierCurveTo: "all",
      isPointinPath: "all",
      isPointinStroke: "all",
      quadraticCurveTo: "all",
      rect: "all",
      translate: "all",
      createRadialGradient: "all",
      createLinearGradient: "all"
    };
    if (pixelRatio2 === 1) return;
    forEach(ratioArgs, function(value, key) {
      prototype[key] = /* @__PURE__ */ (function(_super) {
        return function() {
          var i, len, args = Array.prototype.slice.call(arguments);
          if (value === "all") {
            args = args.map(function(a) {
              return a * pixelRatio2;
            });
          } else if (Array.isArray(value)) {
            for (i = 0, len = value.length; i < len; i++) {
              args[value[i]] *= pixelRatio2;
            }
          }
          return _super.apply(this, args);
        };
      })(prototype[key]);
    });
    prototype.stroke = /* @__PURE__ */ (function(_super) {
      return function() {
        this.lineWidth *= pixelRatio2;
        _super.apply(this, arguments);
        this.lineWidth /= pixelRatio2;
      };
    })(prototype.stroke);
    prototype.fillText = /* @__PURE__ */ (function(_super) {
      return function() {
        var args = Array.prototype.slice.call(arguments);
        args[1] *= pixelRatio2;
        args[2] *= pixelRatio2;
        this.font = this.font.replace(/(\d+)(px|em|rem|pt)/g, function(w, m, u) {
          return m * pixelRatio2 + u;
        });
        _super.apply(this, args);
        this.font = this.font.replace(/(\d+)(px|em|rem|pt)/g, function(w, m, u) {
          return m / pixelRatio2 + u;
        });
      };
    })(prototype.fillText);
    prototype.strokeText = /* @__PURE__ */ (function(_super) {
      return function() {
        var args = Array.prototype.slice.call(arguments);
        args[1] *= pixelRatio2;
        args[2] *= pixelRatio2;
        this.font = this.font.replace(/(\d+)(px|em|rem|pt)/g, function(w, m, u) {
          return m * pixelRatio2 + u;
        });
        _super.apply(this, args);
        this.font = this.font.replace(/(\d+)(px|em|rem|pt)/g, function(w, m, u) {
          return m / pixelRatio2 + u;
        });
      };
    })(prototype.strokeText);
  })(CanvasRenderingContext2D.prototype);
  (function(prototype) {
    prototype.getContext = /* @__PURE__ */ (function(_super) {
      return function(type) {
        var backingStore, ratio, context = _super.call(this, type);
        if (type === "2d") {
          backingStore = context.backingStorePixelRatio || context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;
          ratio = (window.devicePixelRatio || 1) / backingStore;
          if (ratio > 1) {
            this.style.height = this.height + "px";
            this.style.width = this.width + "px";
            this.width *= ratio;
            this.height *= ratio;
          }
        }
        return context;
      };
    })(prototype.getContext);
  })(HTMLCanvasElement.prototype);

  // src/script/parameters.js
  var parameters = {
    columns: 8,
    lineWidth: 2,
    stressColor: "rgba(145, 221, 121, 0.30)",
    selectedCandy: {},
    clickPossible: true,
    globalAction: false,
    allowedCandies: [],
    points: 0
  };

  // src/script/sweet.js
  var Sweet = class {
    constructor(name, x, y, width, row, column) {
      this.name = name;
      this.image = document.getElementById(name);
      this.x = x;
      this.y = y;
      this.row = row;
      this.column = column;
      this.velocity = 0;
      this.width = width;
      this.limit = null;
      this.start = null;
      this.selected = false;
      this.animation = false;
    }
    draw() {
      if (this.selected) {
        this.drawSelection();
      }
      if (this.animation == "disappear") {
        this.disappear();
      }
      if (this.animation == "spinX") {
        this.calculateSpin("x");
      }
      if (this.animation == "spinY") {
        this.calculateSpin("y");
      }
      if (this.animation == "changePlaceX") {
        this.changePlace("x");
      }
      if (this.animation == "changePlaceY") {
        this.changePlace("y");
      }
      c.drawImage(
        this.image,
        this.x * pixelRatio,
        this.y * pixelRatio,
        this.width * pixelRatio,
        this.width * pixelRatio
      );
    }
    drawSelection() {
      c.fillStyle = parameters.stressColor;
      c.fillRect(this.x, this.y, this.width, this.width);
    }
    calculateVelocity() {
      const acceleration = 0.2;
      if (this.y > this.limit) {
        this.velocityY = 0;
      } else {
        this.velocityY += acceleration;
      }
      return this;
    }
    disappear() {
      const disappearSpeed = 5 / pixelRatio;
      this.width = this.width - disappearSpeed;
      if (this.width < 20) {
        this.width = 0;
        this.animation = false;
        parameters.globalAction = "removingCandies";
      }
    }
    checkIfComingBack() {
      if (this.velocity > 0 && this.limit - this.start > 0 || this.velocity < 0 && this.limit - this.start < 0) {
        return false;
      }
      return true;
    }
    checkIfCrossStart(axis) {
      if (this.velocity < 0 && this[axis] < this.start || this.velocity > 0 && this[axis] > this.start) {
        return true;
      }
      return false;
    }
    checkIfCrossLimit(axis) {
      if (this.velocity < 0 && this[axis] < this.limit || this.velocity > 0 && this[axis] > this.limit) {
        return true;
      }
      return false;
    }
    endAnimation() {
      this.start = this.limit = null;
      this.velocity = 0;
      this.animation = null;
    }
    calculateSpin(axis) {
      const rate = 10 / pixelRatio;
      if (this.velocity == 0) {
        this.start = this[axis];
        this.velocity = (this.limit - this[axis]) / rate;
      }
      this[axis] = this[axis] + this.velocity;
      if (this.checkIfComingBack() && this.checkIfCrossStart(axis)) {
        this[axis] = this.start;
        this.endAnimation();
      }
      if (!this.checkIfComingBack() && this.checkIfCrossLimit(axis)) {
        this.velocity = -this.velocity;
      }
    }
    changePlace(axis) {
      const rate = 10;
      if (this.velocity == 0) {
        const direction = this.limit - this[axis] > 0 ? 1 : -1;
        this.velocity = rate * direction;
        parameters.globalAction = null;
      }
      if (this.checkIfCrossLimit(axis)) {
        this.velocity = 0;
        this[axis] = this.limit;
        this.endAnimation();
        if (animationsEnded()) {
          parameters.globalAction = "findMatching";
        }
      }
      this[axis] += this.velocity;
    }
  };

  // node_modules/number-flip-animation/dist/index.js
  var NumberFlip = (
    /** @class */
    (function() {
      function NumberFlip2(_a) {
        var rootElement = _a.rootElement, _b = _a.durationSlide, durationSlide = _b === void 0 ? 1e3 : _b, _c = _a.durationFade, durationFade = _c === void 0 ? 200 : _c, initialNumber = _a.initialNumber, _d = _a.animateInitialNumber, animateInitialNumber = _d === void 0 ? true : _d, _e = _a.numberFormatter, numberFormatter = _e === void 0 ? function(num) {
          return num.toString();
        } : _e, _f = _a.decimalSeparator, decimalSeparator = _f === void 0 ? "." : _f, _g = _a.thousandSeparator, thousandSeparator = _g === void 0 ? "," : _g, _h = _a.wrapperClassname, wrapperClassname = _h === void 0 ? "numberflip-digit-container" : _h, _j = _a.digitClassname, digitClassname = _j === void 0 ? "numberflip-digit-container-value" : _j;
        this.rootElement = rootElement;
        this.durationSlide = durationSlide;
        this.durationFade = durationFade;
        this.numberFormatter = numberFormatter;
        this.decimalSeparator = decimalSeparator;
        this.thousandSeparator = thousandSeparator;
        this.wrapperClassname = wrapperClassname;
        this.digitClassname = digitClassname;
        this.rootElement.style.display = "flex";
        if (initialNumber !== void 0) {
          this.setNumber(initialNumber, animateInitialNumber);
        }
      }
      NumberFlip2.prototype.setNumber = function(num, animate) {
        if (animate === void 0) {
          animate = true;
        }
        this.adjustAmountOfDigitContainers(num);
        this.setDigitInContainers(num, animate);
      };
      NumberFlip2.prototype.adjustAmountOfDigitContainers = function(num) {
        var numberOfDigits = this.getDigitsOfNumber(num).length;
        var countOfDigitContainers = this.rootElement.getElementsByClassName(this.wrapperClassname).length;
        while (countOfDigitContainers < numberOfDigits) {
          this.rootElement.insertAdjacentHTML("beforeend", '<div class="'.concat(this.wrapperClassname, '">') + /*
            The span with visibility hidden is needed in order to make the parent element occupy enough space to display the digit.
            Otherwise the parent would have a width and height of 0 due to the absolute position of the .numberflip-digit-container-value element
          */
          '<span style="visibility: hidden;">0</span>\n            <div class="'.concat(this.digitClassname, '" style="transform: translateY(-100%);">\n                <span>9</span>\n                <span>8</span>\n                <span>7</span>\n                <span>6</span>\n                <span>5</span>\n                <span>4</span>\n                <span>3</span>\n                <span>2</span>\n                <span>1</span>\n                <span>0</span>\n                <span>').concat(this.decimalSeparator, "</span>\n                <span>").concat(this.thousandSeparator, "</span>\n            </div>\n        </div>"));
          countOfDigitContainers++;
        }
        if (countOfDigitContainers > numberOfDigits) {
          var digitContainers = this.rootElement.getElementsByClassName(this.digitClassname);
          var _loop_1 = function(i2) {
            var digitContainer = digitContainers[i2].parentElement;
            digitContainer.style.animationDuration = this_1.durationFade + "ms";
            digitContainer.style.animationName = "numberflip-animation-fade-out";
            setTimeout(function() {
              return digitContainer.remove();
            }, this_1.durationFade);
          };
          var this_1 = this;
          for (var i = numberOfDigits; i < digitContainers.length; i++) {
            _loop_1(i);
          }
        }
      };
      NumberFlip2.prototype.setDigitInContainers = function(num, animate) {
        var _this = this;
        var digits = this.getDigitsOfNumber(num);
        var digitContainers = this.rootElement.getElementsByClassName(this.digitClassname);
        var _loop_2 = function(i2) {
          var digitContainer = digitContainers[i2];
          var digit = digits[i2] === this_2.thousandSeparator ? -2 : digits[i2] === this_2.decimalSeparator ? -1 : digits[i2];
          if (typeof digit === "number") {
            var translate_1 = this_2.calculateTranslateY(digit);
            setTimeout(function() {
              var durationSlide = animate ? _this.durationSlide : 0;
              digitContainer.style.transitionDuration = durationSlide + "ms";
              digitContainer.style.transform = "translateY(".concat(translate_1, "%)");
            }, 0);
          }
          digitContainer.parentNode.classList[digits[i2] === this_2.decimalSeparator || digits[i2] === this_2.thousandSeparator ? "add" : "remove"]("dot");
        };
        var this_2 = this;
        for (var i = 0; i < digitContainers.length; i++) {
          _loop_2(i);
        }
      };
      NumberFlip2.prototype.getDigitsOfNumber = function(num) {
        var _this = this;
        var digits = this.numberFormatter(num).split("");
        return digits.map(function(char) {
          if (char === _this.decimalSeparator) {
            return _this.decimalSeparator;
          } else if (char === _this.thousandSeparator) {
            return _this.thousandSeparator;
          }
          return parseInt(char, 10);
        });
      };
      NumberFlip2.prototype.calculateTranslateY = function(digit) {
        var heightOfSpan = 100 / 12;
        return (-10 * heightOfSpan + (digit + 1) * heightOfSpan).toString();
      };
      return NumberFlip2;
    })()
  );

  // src/script/engine.js
  var fallCounter = 1;
  function findMatchingCandies(board) {
    const height = board.length;
    const width = board[0].length;
    const matches = [];
    let prev = null;
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const item = board[y][x];
        if (item.name === prev) {
          matches[matches.length - 1].push([x, y]);
        } else {
          matches.push([[x, y]]);
          prev = item.name;
        }
      }
      prev = null;
    }
    for (let x = 0; x < height; x++) {
      for (let y = 0; y < width; y++) {
        const item = board[y][x];
        if (item.name === prev) {
          matches[matches.length - 1].push([x, y]);
        } else {
          matches.push([[x, y]]);
          prev = item.name;
        }
      }
      prev = null;
    }
    return matches.filter((match) => match.length >= 3);
  }
  function forAllCandies(fn) {
    gameArr.forEach((row, y) => {
      row.forEach((candy, x) => {
        fn(candy, x, y);
      });
    });
  }
  function removeInvisible() {
    gameArr.forEach((row, y) => {
      row.forEach((candy, x) => {
        if (candy && candy.width == 0) {
          gameArr[y][x] = null;
        }
      });
    });
  }
  function disappearAllMatching() {
    const matching = findMatchingCandies(gameArr);
    calculatePoints(matching.length);
    updatePoints();
    matching.forEach((set) => {
      set.forEach(([x, y]) => {
        gameArr[y][x].animation = "disappear";
      });
    });
    parameters.globalAction = null;
  }
  function replaceCandies(previousCandy, currentCandy) {
    const { row, column } = previousCandy;
    const { row: row2, column: column2 } = currentCandy;
    gameArr[row][column] = currentCandy;
    gameArr[row2][column2] = previousCandy;
    currentCandy.row = row;
    currentCandy.column = column;
    previousCandy.row = row2;
    previousCandy.column = column2;
  }
  function setFallAnimations() {
    gameArr.forEach((row, y) => {
      let counter = 0;
      for (let i = row.length - 1; i >= 0; i--) {
        const cell = gameArr[i][y];
        if (cell === null) {
          counter++;
        } else if (counter !== 0) {
          const newRow = i + counter;
          cell.animation = "changePlaceY";
          cell.limit = findY(newRow);
          replaceFallenCandies(cell, newRow);
        }
      }
    });
    bottomToTop(fillEmptyCells);
  }
  function bottomToTop(func) {
    const width = gameArr.length;
    for (let column = 0; column <= width - 1; column++) {
      for (let row = width - 1; row >= 0; row--) {
        func(column, row);
      }
    }
  }
  function findY(row) {
    const { lineWidth } = parameters;
    if (row >= 0) {
      return lineWidth + row * (imgWidth + lineWidth);
    } else {
      return -lineWidth - row * (imgWidth + lineWidth);
    }
  }
  function fillEmptyCells(column, row) {
    if (!gameArr[row][column]) {
      const name = randomCandy(parameters.allowedCandies);
      gameArr[row][column] = new Sweet(
        name,
        findY(column),
        -fallCounter * imgWidth,
        imgWidth,
        row,
        column
      );
      const candy = gameArr[row][column];
      candy.limit = findY(row);
      candy.animation = "changePlaceY";
      if (row == 0) {
        fallCounter = 0;
      }
      fallCounter++;
    }
  }
  function replaceFallenCandies(cell, newRow) {
    const { column, row } = cell;
    gameArr[newRow][column] = cell;
    cell.row = newRow;
    gameArr[row][column] = null;
  }
  function animationsEnded() {
    return gameArr.every((row) => {
      return row.every((element) => {
        return element.limit === null;
      });
    });
  }
  function calculatePoints(length2) {
    if (length2) {
      addPoints(Math.pow(2, length2));
    }
  }
  function addPoints(points) {
    parameters.points = parameters.points + points;
  }
  function updatePoints() {
    const numberFlip = new NumberFlip({ rootElement: document.getElementById("points-number"), durationSlide: 500 });
    numberFlip.setNumber(parameters.points);
  }

  // src/script/init.js
  var pixelRatio = window.devicePixelRatio;
  var length = getLength();
  var gameArr = [];
  var canvasStartPoint = getCanvasStartPoint();
  var imgWidth = null;
  var types = [
    "biscuit",
    "candy-cane",
    "candy",
    "gingerbread-man",
    "gingerbread-man2",
    "lollipop",
    "toffee"
  ];
  function createEmptyGameArray() {
    return [...Array(parameters.columns)].map((e) => Array(parameters.columns));
  }
  function randomCandy(arr) {
    const { length: length2 } = arr;
    const float = Math.random() * length2;
    return arr[Math.floor(float)];
  }
  function getLength() {
    const main = document.querySelector("main");
    return main.offsetWidth;
  }
  function getCanvasStartPoint() {
    const canvas = document.querySelector("canvas");
    const rect = canvas.getBoundingClientRect();
    const left = Math.floor(rect.left);
    const top = Math.floor(rect.top);
    return [left, top];
  }
  function addNewGameButton() {
    const button = document.getElementById("new-game-button");
    button.addEventListener("click", () => {
      handleHamburgerClick();
      clearPoints();
      updatePoints();
      setParameters();
    });
  }
  function setParameters() {
    if (window.screen.width > 500 && window.screen.height > 500) {
      parameters.columns = 8;
      parameters.allowedCandies = reduceCandyTypes(0);
    } else {
      parameters.columns = 5;
      parameters.allowedCandies = reduceCandyTypes(2);
    }
    gameArr = createEmptyGameArray();
    imgWidth = calculateImgWidth();
    startGame();
  }
  function reduceCandyTypes(number) {
    let restrictedCandies = types;
    for (let i = number; i > 0; i--) {
      let random = randomCandy(restrictedCandies);
      restrictedCandies = restrictedCandies.filter((candie) => candie !== random);
    }
    return restrictedCandies;
  }
  function calculateImgWidth() {
    return (length - parameters.lineWidth * (parameters.columns + 1)) / parameters.columns;
  }
  function clearPoints() {
    parameters.points = 0;
  }

  // src/script/events.js
  function getLocalCoordinates(event) {
    const [left, top] = canvasStartPoint;
    const localLeft = event.pageX - left;
    const localTop = event.pageY - top;
    return [localLeft, localTop];
  }
  function findCell(event) {
    const [x, y] = getLocalCoordinates(event);
    const cellLength = length / parameters.columns;
    const column = Math.floor(x / cellLength);
    const row = Math.floor(y / cellLength);
    return [column, row];
  }
  function toggleSelection(event) {
    const [column, row] = findCell(event);
    const currentCandy = gameArr[row][column];
    const previousCandy = parameters.selectedCandy;
    if (Object.keys(previousCandy).length === 0) {
      currentCandy.selected = true;
      parameters.selectedCandy = currentCandy;
    } else if (previousCandy.column !== currentCandy.column || previousCandy.row !== currentCandy.row) {
      if (!checkIfActionNeeded(previousCandy, currentCandy)) {
        previousCandy.selected = false;
        currentCandy.selected = true;
        parameters.selectedCandy = currentCandy;
      }
    }
  }
  function checkIfActionNeeded(previousCandy, currentCandy) {
    const { row, column } = previousCandy;
    const { row: row2, column: column2 } = currentCandy;
    const possibleVectors = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1]
    ];
    const newVector = [row - row2, column - column2];
    const result = possibleVectors.some((vector) => {
      return vector[0] === newVector[0] && vector[1] === newVector[1];
    });
    if (result) {
      previousCandy.selected = false;
      currentCandy.selected = false;
      parameters.selectedCandy = {};
      toggleCandies(previousCandy, currentCandy);
      return true;
    }
    return false;
  }
  function toggleCandies(previousCandy, currentCandy) {
    const { row: row1, column: column1 } = previousCandy;
    const { row: row2, column: column2 } = currentCandy;
    let gameArrClone = JSON.parse(JSON.stringify(gameArr));
    let previousCandyClone = { ...previousCandy };
    let currentCandyClone = { ...currentCandy };
    gameArrClone[row1][column1] = currentCandyClone;
    gameArrClone[row2][column2] = previousCandyClone;
    if (findMatchingCandies(gameArrClone).length > 0) {
      changeCandies(previousCandy, currentCandy);
    } else {
      spinCandies(previousCandy, currentCandy);
    }
  }
  function setLimits(previousCandy, currentCandy, axis) {
    previousCandy.limit = currentCandy[axis];
    currentCandy.limit = previousCandy[axis];
  }
  function applyAnimation(previousCandy, currentCandy, animation2) {
    previousCandy.animation = currentCandy.animation = animation2;
  }
  function changeCandies(previousCandy, currentCandy) {
    replaceCandies(previousCandy, currentCandy);
    if (previousCandy.column == currentCandy.column) {
      setLimits(previousCandy, currentCandy, "y");
      applyAnimation(previousCandy, currentCandy, "changePlaceY");
    }
    if (previousCandy.row == currentCandy.row) {
      setLimits(previousCandy, currentCandy, "x");
      applyAnimation(previousCandy, currentCandy, "changePlaceX");
    }
  }
  function spinCandies(previousCandy, currentCandy) {
    if (previousCandy.column == currentCandy.column) {
      setLimits(previousCandy, currentCandy, "y");
      applyAnimation(previousCandy, currentCandy, "spinY");
    }
    if (previousCandy.row == currentCandy.row) {
      setLimits(previousCandy, currentCandy, "x");
      applyAnimation(previousCandy, currentCandy, "spinX");
    }
  }

  // src/script/test.js
  var test = {
    logElement(row, column, property) {
      const toLog = window.gameArr[row][column][property];
      console.log(toLog);
    },
    testArray5: [
      ["biscuit", "biscuit", "candy-cane", "biscuit", "biscuit"],
      ["candy", "biscuit", "candy-cane", "biscuit", "biscuit"],
      ["candy", "candy-cane", "biscuit", "candy-cane", "candy-cane"],
      ["candy-cane", "candy", "candy-cane", "biscuit", "biscuit"],
      ["biscuit", "candy", "candy-cane", "candy", "candy"]
    ],
    checkIfRowInsideCorrct() {
      window.gameArr.forEach((row, rn) => {
        row.forEach((element, cn) => {
          if (element) {
            if (element.row !== rn) {
              console.log(
                `error! external row number: ${rn}, internal: ${element.row}`
              );
            }
            if (element.column !== cn) {
              console.log(
                `error! in row, column[${rn}, ${cn}]`,
                `
external column number: ${cn}, internal: ${element.column}`
              );
            }
          }
        });
      });
    }
  };

  // src/script/index.js
  window.gameArr = gameArr;
  window.test = test;
  var c = canvasInit(length);
  var animation = null;
  function canvasInit() {
    const canvas = document.querySelector("canvas");
    canvas.width = length;
    canvas.height = length;
    return canvas.getContext("2d");
  }
  function drawLines(columns) {
    const { lineWidth } = parameters;
    c.lineWidth = lineWidth;
    for (let i = lineWidth / 2; i < length; i += (length - lineWidth) / columns) {
      c.beginPath();
      c.strokeStyle = "brown";
      c.moveTo(0, i);
      c.lineTo(length, i);
      c.stroke();
      c.beginPath();
      c.moveTo(i, 0);
      c.lineTo(i, length);
      c.stroke();
    }
  }
  function clearCanvas() {
    c.clearRect(0, 0, length, length);
  }
  function render() {
    clearCanvas();
    drawLines(parameters.columns);
    forAllCandies((candy) => {
      candy.draw();
    });
    if (parameters.globalAction === "findMatching") {
      disappearAllMatching();
    }
    if (parameters.globalAction == "removingCandies") {
      removeInvisible();
      setFallAnimations();
    }
    animation = requestAnimationFrame(render);
  }
  function startGame() {
    setFallAnimations();
    if (animation) {
      window.cancelAnimationFrame(animation);
    }
    animation = render();
  }
  addNewGameButton();
  document.querySelector("canvas").addEventListener("click", (event) => {
    if (parameters.clickPossible) {
      toggleSelection(event);
    }
  });
  var hamburger = document.querySelector(".hamburger");
  var menu = document.querySelector("menu");
  function handleHamburgerClick() {
    hamburger.classList.toggle("hamburger--active");
    menu.classList.toggle("menu--active");
  }
  hamburger.addEventListener("click", handleHamburgerClick);
})();
