import "../css/style.css";

import { hiDPI } from "./hiDPI";

import { length, gameArr, addNewGameButton } from "./init.js";
import { parameters } from "./parameters";
import { toggleSelection } from "./events.js";
import {
  disappearAllMaching,
  forAllCandies,
  removeInvisible,
  setFallAnimations,
} from "./engine";
import { test } from "./test";

window.gameArr = gameArr;
window.test = test;

export const c = canvasInit(length);
let animation = null;

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
  if (parameters.globalAction === "findMaching") {
    disappearAllMaching();
  }
  if (parameters.globalAction == "removingCandies") {
    removeInvisible();
    setFallAnimations();
  }
  animation = requestAnimationFrame(render);
}

export function startGame() {
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

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector("menu");
function handleHamburgerClick() {
  hamburger.classList.toggle("hamburger--active");
  menu.classList.toggle("menu--active");
}

hamburger.addEventListener("click", handleHamburgerClick);
