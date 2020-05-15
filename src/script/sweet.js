import { c } from "./init";
import { parameters } from "./parameters";

export class Sweet {
  constructor(name, x, y, width, row, column) {
    this.name = name;
    this.image = document.getElementById(name);
    this.x = x;
    this.y = y;
    this.width = width;
    this.selected = false;
  }
  draw() {
    if (this.selected) {
      this.drawSelection();
    }
    c.drawImage(this.image, this.x, this.y, this.width, this.width);
  }
  drawSelection() {
    c.fillStyle = parameters.stressColor;
    c.fillRect(this.x, this.y, this.width, this.width);
  }
}
