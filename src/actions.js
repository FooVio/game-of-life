export const toggleCell = (row, col) => ({
  type: 'TOGGLE_CELL',
  row: row,
  col: col
});

export const next = () => ({
  type: 'NEXT'
});

export const previous = () => ({
  type: 'PREVIOUS'
});
