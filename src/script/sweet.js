import { c } from "./init";
import { parameters } from "./parameters";
import { animationsEnded } from "./engine";

export class Sweet {
  constructor(name, x, y, width, row, column) {
    this.name = name;
    this.image = document.getElementById(name);
    this.x = x;
    this.y = y;
    this.row = row;
    this.column = column;
    this.velocity = 0;
    this.width = width;
    this.limit = null;
    this.start = null;
    this.selected = false;
    this.animation = false;
  }
  draw() {
    if (this.selected) {
      this.drawSelection();
    }
    if (this.animation == "disappear") {
      this.disappear();
    }
    if (this.animation == "spinX") {
      this.calculateSpin("x");
    }
    if (this.animation == "spinY") {
      this.calculateSpin("y");
    }
    if (this.animation == "changePlaceX") {
      this.changePlace("x");
    }
    if (this.animation == "changePlaceY") {
      this.changePlace("y");
    }
    c.drawImage(this.image, this.x, this.y, this.width, this.width);
  }
  drawSelection() {
    c.fillStyle = parameters.stressColor;
    c.fillRect(this.x, this.y, this.width, this.width);
  }

  calculateVelocity() {
    const acceleration = 0.2;
    if (this.y > this.limit) {
      this.velocityY = 0;
    } else {
      this.velocityY += acceleration;
    }
    return this;
  }

  disappear() {
    const disappearSpeed = 5
    this.width = this.width - disappearSpeed;
    if (this.width < 20) {
      this.width = 0;
      this.animation = false;
      parameters.globalAction = "removingCandies";
    }
  }
  checkIfComingBack() {
    if (
      (this.velocity > 0 && this.limit - this.start > 0) ||
      (this.velocity < 0 && this.limit - this.start < 0)
    ) {
      return false;
    }
    return true;
  }
  checkIfCrossStart(axis) {
    if (
      (this.velocity < 0 && this[axis] < this.start) ||
      (this.velocity > 0 && this[axis] > this.start)
    ) {
      return true;
    }
    return false;
  }

  checkIfCrossLimit(axis) {
    if (
      (this.velocity < 0 && this[axis] < this.limit) ||
      (this.velocity > 0 && this[axis] > this.limit)
    ) {
      return true;
    }
    return false;
  }

  endAnimation() {
    this.start = this.limit = null;
    this.velocity = 0;
    this.animation = null;
  }
  calculateSpin(axis) {
    const rate = 10;
    if (this.velocity == 0) {
      this.start = this[axis];
      this.velocity = (this.limit - this[axis]) / rate;
    }
    this[axis] = this[axis] + this.velocity;
    if (this.checkIfComingBack() && this.checkIfCrossStart(axis)) {
      this[axis] = this.start;
      this.endAnimation();
    }
    if (!this.checkIfComingBack() && this.checkIfCrossLimit(axis)) {
      this.velocity = -this.velocity;
    }
  }

  changePlace(axis) {
    const rate = 10;
    if (this.velocity == 0) {
      const direction = this.limit - this[axis] > 0 ? 1 : -1;
      this.velocity = rate * direction;
      parameters.globalAction = null;
    }
    if (this.checkIfCrossLimit(axis)) {
      this.velocity = 0;
      this[axis] = this.limit;
      this.endAnimation();
      if (animationsEnded()) {
        parameters.globalAction = "findMaching";
      }
    }
    this[axis] += this.velocity;
  }
}
