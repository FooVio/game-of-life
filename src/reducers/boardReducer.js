import { createBoard, tick } from '../lib/game';

export default (state = {
    board: createBoard(20, 20, true)
  }, action) => {
    switch (action.type) {
      case 'GET_RANDOM_BOARD': {
        return {
          ...state,
          board: createBoard(20, 20, true)
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
