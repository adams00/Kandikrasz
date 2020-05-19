import { canvasStartPoint } from "./init.js";
import { parameters } from "./parameters.js";
import { length, gameArr } from "./init.js";

function getLocalCoordinates(event) {
  const [left, top] = canvasStartPoint;
  const localLeft = event.pageX - left;
  const localTop = event.pageY - top;
  return [localLeft, localTop];
}
function findCell(event) {
  const [x, y] = getLocalCoordinates(event);
  const cellLength = length / parameters.columns;
  const column = Math.floor(x / cellLength);
  const row = Math.floor(y / cellLength);
  return [column, row];
}
export function toggleSelection(event) {
  const [column, row] = findCell(event);
  const currentCandy = gameArr[row][column];
  const previousCandy = parameters.selectedCandy;
  if (Object.keys(previousCandy).length === 0) {
    currentCandy.selected = true;
    parameters.selectedCandy = currentCandy;
  } else if (
    previousCandy.column !== currentCandy.column ||
    previousCandy.row !== currentCandy.row
  ) {
    if (!checkIfActionNeeded(previousCandy, currentCandy)) {
      previousCandy.selected = false;
      currentCandy.selected = true;
      parameters.selectedCandy = currentCandy;
    }
  }
}

function checkIfActionNeeded(previousCandy, currentCandy) {
  const { row, column } = previousCandy;
  const { row: row2, column: column2 } = currentCandy;
  const result =
    (row + 1 == row2) +
    (row - 1 == row2) +
    (column + 1 == column2) +
    (column - 1 == column2);
  if (result == 1) {
    previousCandy.selected = false;
    currentCandy.selected = false;
    parameters.selectedCandy = {};
    toggleCandies(previousCandy, currentCandy);
    return true;
  }
  return false;
}
