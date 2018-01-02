import { createBoard, tick } from '../lib/game';

export default (state = { board: createBoard(20, 20) }, action) => {
  switch (action.type) {
    case 'GET_RANDOM_BOARD': {
      return {
        ...state,
        board: createBoard(20, 20, true)
      }
    }
    case 'TOGGLE_CELL': {
      const newBoard = [...state.board];
      const cellValue = state.board[action.row][action.col] ? 0 : 1;
      newBoard[action.row][action.col] = cellValue;

      return {
        ...state,
        board: newBoard
      }
    }
    case 'NEXT': {
      return {
        ...state,
        board: tick(state.board)
      }
    }
    default: {
      return state;
    }
  }
}
