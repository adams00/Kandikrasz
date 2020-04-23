import "../css/style.css";
import { drawLines, drawAllCandys, setRandomCandys } from "./init.js";
import { parameters } from "./parameters";
import { toggleSelection } from "./events.js";

window.onload = () => {
  drawLines(parameters.columns);
  setRandomCandys();
  drawAllCandys();
};
document.addEventListener("click", (event) => {
  toggleSelection(event);
  drawAllCandys();
});
