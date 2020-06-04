import { parameters } from "./parameters";
import { gameArr, imgWidth, types, randomCandy } from "./init";
import { Sweet } from "./sweet";

let fallCounter = 1;

export function findMachingCandies(board) {
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
export function preventClick(ms) {
  parameters.clickPossible = false;
  setTimeout(() => {
    parameters.clickPossible = true;
  }, ms);
}

export function forAllCandies(fn) {
  gameArr.forEach((row, y) => {
    row.forEach((candy, x) => {
      fn(candy, x, y);
    });
  });
}

export function removeInvisible() {
  gameArr.forEach((row, y) => {
    row.forEach((candy, x) => {
      if (candy && candy.width == 0) {
        gameArr[y][x] = null;
      }
    });
  });
}

export function disappearAllMaching() {
  const maching = findMachingCandies(gameArr);
  maching.forEach((set) => {
    set.forEach(([x, y]) => {
      gameArr[y][x].animation = "disappear";
    });
  });
}

export function replaceCandies(previousCandy, currentCandy) {
  const { row, column } = previousCandy;
  const { row: row2, column: column2 } = currentCandy;

  gameArr[row][column] = currentCandy;
  gameArr[row2][column2] = previousCandy;
  currentCandy.row = row;
  currentCandy.column = column;

  previousCandy.row = row2;
  previousCandy.column = column2;
}

export function setFallAnimations() {
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
    const name = randomCandy(types);
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
