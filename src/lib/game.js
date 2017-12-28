const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

const createRow = (width, random = false) => Array.from({ length: width }, () => random ? !getRandomInt(0, 4) : 0);
const createBoard = (height = 10, width = 10, random = false) => Array.from({length: height}).map((x) => createRow(width, random));

const getIndexBoundaries = (i, length) => {
  const fromIndex = i - 1 >= 0 ? i - 1 : 0;
  const toIndex = i + 2 < length ? i + 2 : length + 1;
  return [ fromIndex, toIndex ];
}

const getNeighbourRows = (r, board) => {
  const [ from, to ] = getIndexBoundaries(r, board.length);
  return board.slice(from, to);
};

const sliceNeighbourRows = (c, neighbourRows) => {
  const [ from, to ] = getIndexBoundaries(c, neighbourRows[0].length);
  return neighbourRows.map((x) => x.slice(from, to));
};

const getNeighbourMatrix = (r, c, board) => sliceNeighbourRows(c, getNeighbourRows(r, board));

const getNeighbourCount = (r, c, board) => {
  const matrix = getNeighbourMatrix(r, c, board);
  const flattenedMatrix = matrix.reduce((a, b) => a.concat(b));
  return flattenedMatrix.reduce((a, b) => a + b) - board[r][c];
};

const survives = (cell, neighbours) => {
  if (neighbours < 2) {
    return 0;
  } else if (neighbours == 2) {
    return cell;
  } else if (neighbours == 3) {
    return 1;
  } else if (neighbours > 3) {
    return 0;
  }
}

const tick = (board) => {
  const height = board.length;
  const width = board[0].length;
  const nextBoard = createBoard(height, width);

  let neighbours;
  for (let row=0; row<height; row++) {
    for (let cell=0; cell<width; cell++) {
      neighbours = getNeighbourCount(row, cell, board);
      nextBoard[row][cell] = survives(board[row][cell], neighbours);
    }
  }

  return nextBoard;
}

export {
  createBoard,
  getNeighbourRows,
  sliceNeighbourRows,
  getNeighbourMatrix,
  getNeighbourCount,
  tick
};
