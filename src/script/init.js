import { parameters } from "./parameters";
import { startGame } from "./index";

export const pixelRatio = window.devicePixelRatio;

export const length = getLength();
export let gameArr = [];
export const canvasStartPoint = getCanvasStartPoint();
export let imgWidth = null;
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
  if (window.screen.width > 500) {
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
  return (
    (length - parameters.lineWidth * (parameters.columns + 1)) /
    parameters.columns
  );
}
