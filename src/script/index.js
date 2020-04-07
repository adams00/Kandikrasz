import "../css/style.css";
import { drawLines, drawAllCandys, setRandomCandys } from "./init.js";
import { parameters } from "./parameters";

window.onload = () => {
  drawLines(parameters.columns);
  setRandomCandys();
  drawAllCandys();
};
