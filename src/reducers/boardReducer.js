import { createBoard, tick } from '../lib/game';

export default (state = [{ board: createBoard(20, 20) }], action) => {
  const latest = state.slice(-1)[0];

  switch (action.type) {
    case 'TOGGLE_CELL': {
      const cellValue = latest.board[action.row][action.col] ? 0 : 1;
      latest.board[action.row][action.col] = cellValue;

      return [
        ...state,
        { board: [...latest.board] }
      ];
    }
    case 'NEXT': {
      return [
        ...state,
        { board: tick(latest.board) }
      ];
    }
    case 'PREVIOUS': {
      return state.slice(0, -1);
    }
    default: {
      return state;
    }
  }
};
