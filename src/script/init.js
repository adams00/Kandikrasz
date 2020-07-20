import { Sweet } from "./sweet";
import { parameters } from "./parameters";

const { columns, lineWidth } = parameters;

export const pixelRatio = window.devicePixelRatio;

export const length = getLength();
export let gameArr = createEmptyGameArray();
export const canvasStartPoint = getCanvasStartPoint();
export const imgWidth = (length - lineWidth * (columns + 1)) / columns;
export const types = [
  "biscuit",
  "candy-cane",
  "candy",
  "gingerbread-man",
  "gingerbread-man2",
  "lollipop",
  "toffee",
];

function createEmptyGameArray() {
  return [...Array(columns)].map((e) => Array(columns));
}
export function randomCandy(arr) {
  const { length } = arr;
  const float = Math.random() * length;
  return arr[Math.floor(float)];
}

export function setRandomCandys() {
  const frameWidth = (length - lineWidth) / columns;
  let column = 0;
  let row = 0;
  for (let y = lineWidth; y < length - 1; y += frameWidth) {
    for (let x = lineWidth; x < length - 1; x += frameWidth) {
      gameArr[row][column] = new Sweet(
        randomCandy(types),
        x,
        y,
        imgWidth,
        row,
        column
      );
      if (column === columns - 1) {
        column = 0;
      } else {
        column++;
      }
    }
    row++;
  }
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

export function addNewGameButton() {
  const button = document.getElementById("new-game-button");
  button.addEventListener("click", () => {
    setParameters();
  });
}

function setParameters() {
  if (width > 500) {
    parameters.columns = 8;
    startGame();
  } else {
    parameters.columns = 5;
    parameters.candyNumber = 4;
    startGame();
  }
}
