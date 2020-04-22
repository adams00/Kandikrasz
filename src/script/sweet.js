import { c } from "./init";
export class Sweet {
  constructor(name, x, y, width) {
    this.name = name;
    this.image = document.getElementById(name);
    this.x = x;
    this.y = y;
    this.width = width;
    this.selected = false;
  }
  draw() {
    c.drawImage(this.image, this.x, this.y, this.width, this.width);
  }
}
