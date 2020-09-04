export class Prompt {
  constructor(title, data, width, height) {
    this.title = title;
    this.data = data;
    this.width = width;
    this.height = height;
    this.backgroundColor = "rgb(100,100,100)";
    this.fontColor = "rgb(0,0,0)";
    this.x = 30;
    this.y = 40;
  }
  draw() {
    c.fillStyle = this.fontColor;
    c.fillRect(this.x, this.y, this.width, this.height);
  }
}
