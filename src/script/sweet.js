import { c } from "./init";
import { parameters } from "./parameters";

export class Sweet {
  constructor(name, x, y, width, row, column) {
    this.name = name;
    this.image = document.getElementById(name);
    this.x = x;
    this.y = y;
    this.row = row;
    this.column = column;
    this.velocityX = 0;
    this.velocityY = 0;
    this.width = width;
    this.limitY = null;
    this.limitX = null;
    this.startX = null;
    this.startY = null;
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
