import "../css/style.css";
import {
  drawLines,
  drawAllCandys,
  setRandomCandys,
  clearCanvas,
} from "./init.js";
import { parameters } from "./parameters";
import { toggleSelection } from "./events.js";

window.onload = () => {
  drawLines(parameters.columns);
  setRandomCandys();
  drawAllCandys();
};
document.querySelector("canvas").addEventListener("click", (event) => {
  clearCanvas();
  drawLines(parameters.columns);
  toggleSelection(event);
  drawAllCandys();
});
