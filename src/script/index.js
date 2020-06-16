import "../css/style.css";
import {
  drawLines,
  drawAllCandys,
  setRandomCandys,
  clearCanvas,
  gameArr,
} from "./init.js";
import { parameters } from "./parameters";
import { toggleSelection } from "./events.js";
import {
  disappearAllMaching,
  forAllCandies,
  removeInvisible,
  setFallAnimations,
  animationsEnded,
} from "./engine";
import { test } from "./test";

window.gameArr = gameArr;
window.test = test;

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
  requestAnimationFrame(render);
}

window.onload = () => {
  setRandomCandys();
  forAllCandies((candy) => candy.draw());
  setTimeout(disappearAllMaching, 1000);
  render();
};
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
