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
      this.calculateSpinX();
    }
    if (this.animation == "spinY") {
      this.calculateSpinY();
    }
    if (this.animation == "changePlaceX") {
      this.changePlaceX();
    }
    if (this.animation == "changePlaceY") {
      this.changePlaceY();
    }
    c.drawImage(
      this.image,
      (this.x += this.velocityX),
      (this.y += this.velocityY),
      this.width,
      this.width
    );
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
    const disappearRate = 0.02;
    this.width = this.width * (1 - disappearRate);
    if (this.width < 20) {
      this.width = 0;
      this.animation = false;
      parameters.globalAction = "removingCandies";
    }
  }
  checkIfComingBack() {
    if (
      (this.velocityX > 0 && this.limitX - this.startX > 0) ||
      (this.velocityX < 0 && this.limitX - this.startX < 0)
    ) {
      return false;
    }
    return true;
  }
  checkIfCrossStart() {
    if (
      (this.velocityX < 0 && this.x < this.startX) ||
      (this.velocityX > 0 && this.x > this.startX)
    ) {
      return true;
    }
    return false;
  }

  checkIfCrossLimit() {
    if (
      (this.velocityX < 0 && this.x < this.limitX) ||
      (this.velocityX > 0 && this.x > this.limitX)
    ) {
      return true;
    }
    return false;
  }
  calculateSpinX() {
    const rate = 10;
    if (this.velocityX == 0) {
      this.startX = this.x;
      this.velocityX = (this.limitX - this.x) / rate;
    }
    if (this.checkIfComingBack() && this.checkIfCrossStart()) {
      this.x = this.startX;
      this.startX = this.limitX = 0;
      this.velocityX = 0;
      this.animation = false;
      parameters.globalAction = false;
    }
    if (!this.checkIfComingBack() && this.checkIfCrossLimit()) {
      this.velocityX = -this.velocityX;
    }
  }

  calculateSpinY() {
    const rate = 8;
    if (this.y == this.limitY) {
      this.velocityY = -this.velocityY;
    }
    if (this.velocityY == 0) {
      this.startY = this.y;
      this.velocityY = (this.limitY - this.y) / rate;
    } else if (this.y == this.startY) {
      this.velocityY = 0;
      this.animation = false;
      parameters.globalAction = false;
    }
  }

  changePlaceX() {
    const rate = 8;
    if (this.velocityX == 0) {
      this.velocityX = (this.limitX - this.x) / rate;
    }
    if (this.x == this.limitX) {
      this.velocityX = 0;
      this.animation = null;
      parameters.globalAction = "findMaching";
    }
  }

  changePlaceY() {
    const rate = 8;
    if (this.velocityY == 0) {
      this.velocityY = (this.limitY - this.y) / rate;
    }
    if (this.y == this.limitY) {
      this.velocityY = 0;
      this.animation = null;
      parameters.globalAction = "findMaching";
    }
  }
}
