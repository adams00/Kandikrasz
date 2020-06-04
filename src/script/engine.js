import { parameters } from "./parameters";
import { gameArr } from "./init";

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
