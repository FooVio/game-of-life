import {
  createBoard,
  getNeighbourRows,
  sliceNeighbourRows,
  getNeighbourMatrix,
  getNeighbourCount,
  tick
} from '../../src/lib/game';

describe('Game#createBoard', () => {
  describe('when a width and a height is given', () => {
    test('should create a board with H x W', () => {
      const board = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ];

      expect(createBoard(4, 5)).toEqual(board);
    });
  });
});

describe('For a defined board', () => {
  const board = [
    [ 0, 1, 1, 0, 1 ],
    [ 1, 0, 1, 1, 1 ],
    [ 0, 1, 1, 0, 0 ],
    [ 0, 1, 1, 1, 1 ],
    [ 0, 0, 0, 0, 0 ]
  ];

  describe('Game#getNeighbourRows', () => {
    test('should return the neighbour rows', () => {
      expect(getNeighbourRows(0, board)).toEqual([[ 0, 1, 1, 0, 1 ], [ 1, 0, 1, 1, 1 ]]);
      expect(getNeighbourRows(1, board)).toEqual([[ 0, 1, 1, 0, 1 ], [ 1, 0, 1, 1, 1 ], [ 0, 1, 1, 0, 0 ]]);
      expect(getNeighbourRows(2, board)).toEqual([[ 1, 0, 1, 1, 1 ], [ 0, 1, 1, 0, 0 ], [ 0, 1, 1, 1, 1 ]]);
      expect(getNeighbourRows(3, board)).toEqual([[ 0, 1, 1, 0, 0 ], [ 0, 1, 1, 1, 1 ], [ 0, 0, 0, 0, 0 ]]);
      expect(getNeighbourRows(4, board)).toEqual([[ 0, 1, 1, 1, 1 ], [ 0, 0, 0, 0, 0 ]]);
    });
  });

  describe('Game#getNeighbourMatrix', () => {
    test('should return the neighbour rows', () => {
      expect(getNeighbourMatrix(0, 0, board)).toEqual([[0, 1], [1, 0]]);
      expect(getNeighbourMatrix(0, 1, board)).toEqual([[0, 1, 1], [1, 0, 1]]);
      expect(getNeighbourMatrix(0, 4, board)).toEqual([[0, 1], [1, 1]]);
      expect(getNeighbourMatrix(2, 2, board)).toEqual([[0, 1, 1], [1, 1, 0], [1, 1, 1]]);
      expect(getNeighbourMatrix(4, 0, board)).toEqual([[0, 1], [0, 0]]);
      expect(getNeighbourMatrix(4, 2, board)).toEqual([[1, 1, 1], [0, 0, 0]]);
      expect(getNeighbourMatrix(4, 4, board)).toEqual([[1, 1], [0, 0]]);
    });
  });

  describe('Game#getNeighbourCount', () => {
    test('should return count of the neighbours', () => {
      expect(getNeighbourCount(0, 0, board)).toEqual(2);
      expect(getNeighbourCount(0, 1, board)).toEqual(3);
      expect(getNeighbourCount(0, 3, board)).toEqual(5);
      expect(getNeighbourCount(0, 4, board)).toEqual(2);
      expect(getNeighbourCount(2, 2, board)).toEqual(6);
      expect(getNeighbourCount(4, 0, board)).toEqual(1);
      expect(getNeighbourCount(4, 2, board)).toEqual(3);
      expect(getNeighbourCount(4, 4, board)).toEqual(2);
    });
  });

  describe('Game#tick', () => {
    test('should return the next phase of the board', () => {
      const nextBoard = [
        [ 0, 1, 1, 0, 1 ],
        [ 1, 0, 0, 0, 1 ],
        [ 1, 0, 0, 0, 0 ],
        [ 0, 1, 0, 1, 0 ],
        [ 0, 0, 1, 1, 0 ]
      ];
      expect(tick(board)).toEqual(nextBoard);
    });
  });
});
