export function findMachingCandies(board) {
  const height = board.length;
  const width = board[0].length;
  const matches = [];
  let prev = null;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const item = board[y][x];

      if (item.name === prev) {
        matches[matches.length - 1].push([x, y]);
      } else {
        matches.push([[x, y]]);
        prev = item.name;
      }
    }

    prev = null;
  }

  for (let x = 0; x < height; x++) {
    for (let y = 0; y < width; y++) {
      const item = board[y][x];

      if (item.name === prev) {
        matches[matches.length - 1].push([x, y]);
      } else {
        matches.push([[x, y]]);
        prev = item.name;
      }
    }

    prev = null;
  }

  return matches.filter((match) => match.length >= 3);
}
