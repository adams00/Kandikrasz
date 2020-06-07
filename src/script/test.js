import { gameArr } from "./init";

export const test = {
  logElement(row, column, property) {
    const toLog = window.gameArr[row][column][property];
    console.log(toLog);
  },
  testArray5: [
    ["biscuit", "biscuit", "candy-cane", "biscuit", "biscuit"],
    ["candy", "biscuit", "candy-cane", "biscuit", "biscuit"],
    ["candy", "candy-cane", "biscuit", "candy-cane", "candy-cane"],
    ["candy-cane", "candy", "candy-cane", "biscuit", "biscuit"],
    ["biscuit", "candy", "candy-cane", "candy", "candy"],
  ],
  checkIfRowInsideCorrct() {
    window.gameArr.forEach((row, rn) => {
      row.forEach((element, cn) => {
        if (element) {
          if (element.row !== rn) {
            console.log(
              `error! external row number: ${rn}, internal: ${element.row}`
            );
          }
          if (element.column !== cn) {
            console.log(
              `error! in row, column[${rn}, ${cn}]`,
              `\nexternal column number: ${cn}, internal: ${element.column}`
            );
          }
        }
      });
    });
  },
};
