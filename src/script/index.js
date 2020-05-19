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
import { disappearAllMaching, forAllCandies } from "./engine";

function render() {
  clearCanvas();
  drawLines(parameters.columns);
  forAllCandies((candy) => candy.draw());
  if (parameters.globalAction == "findMaching") {
    disappearAllMaching();
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
