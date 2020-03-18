export function getLength() {
  const main = document.querySelector("main");
  return main.offsetWidth;
}
export function canvasInit(length) {
  const canvas = document.querySelector("canvas");
  canvas.width = length;
  canvas.height = length;
  return canvas.getContext("2d");
}
