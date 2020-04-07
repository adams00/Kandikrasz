import { Sweet } from "./sweet";
import { parameters } from "./parameters";

const { columns, lineWidth } = parameters;

export const length = getLength();
export const c = canvasInit(length);
export let gameArr = createEmptyGameArray();

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
  const width = (c.lineWidth = 2);
  for (
    let i = width / 2;
    i <= length - width / 2;
    i += (length - width) / columns
  ) {
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
export function getCanvasStartPoint() {
  const canvas = document.querySelector("canvas");
  const rect = canvas.getBoundingClientRect();
  const left = Math.floor(rect.left);
  const top = Math.floor(rect.top);
  return [left, top];
}
export function getLocalCoordinates(event) {
  const [left, top] = getCanvasStartPoint();
  const localLeft = event.pageX - left;
  const localTop = event.pageY - top;
  return [localLeft, localTop];
}
export function findCell(x, y, columns) {
  const cellLength = length / columns;
  const column = Math.floor(x / cellLength);
  const row = Math.floor(y / cellLength);
  return [column, row];
}
