import { Sweet } from "./sweet";
import { parameters } from "./parameters";

const { columns, lineWidth } = parameters;

export const length = getLength();
export const c = canvasInit(length);
export let gameArr = createEmptyGameArray();
export const canvasStartPoint = getCanvasStartPoint();

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
function randomCandy(arr) {
  const { length } = arr;
  const float = Math.random() * length;
  return arr[Math.floor(float)];
}

export function setRandomCandys() {
  const imgWidth = (length - lineWidth * (columns + 1)) / columns;
  const frameWidth = (length - lineWidth) / columns;
  let column = 0;
  let row = 0;
  for (let x = lineWidth; x < length - 1; x += frameWidth) {
    for (let y = lineWidth; y < length - 1; y += frameWidth) {
      gameArr[row][column] = new Sweet(randomCandy(types), x, y, imgWidth);
      if (column === columns - 1) {
        column = 0;
      } else {
        column++;
      }
    }
    row++;
  }
}

export function drawAllCandys() {
  gameArr.forEach((row) => {
    row.forEach((element) => {
      element.draw();
    });
  });
}

function getLength() {
  const main = document.querySelector("main");
  return main.offsetWidth;
}
function canvasInit() {
  const canvas = document.querySelector("canvas");
  canvas.width = length;
  canvas.height = length;
  return canvas.getContext("2d");
}
export function drawLines(columns) {
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
function getCanvasStartPoint() {
  const canvas = document.querySelector("canvas");
  const rect = canvas.getBoundingClientRect();
  const left = Math.floor(rect.left);
  const top = Math.floor(rect.top);
  return [left, top];
}
