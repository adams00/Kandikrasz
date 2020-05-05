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
  if (!parameters.selectedCell) {
    gameArr[column][row].selected = true;
    parameters.selectedCell = [column, row];
  } else if (
    parameters.selectedCell[0] !== column ||
    parameters.selectedCell[1] !== row
  ) {
    if (!checkIfActionNeeded([column, row])) {
      clearPreviousSelection();
      gameArr[column][row].selected = true;
      parameters.selectedCell = [column, row];
    }
  }
}
