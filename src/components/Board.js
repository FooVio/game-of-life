import React from 'react';
import Row from './Row';

const Board = ({ board, onClickCell }) => (
  <table className="board">
    <tbody>
      {board.map((row, rowIndex) => (
        <Row row={row} rowIndex={rowIndex} onClickCell={onClickCell} />
      ))}
    </tbody>
  </table>
);

export default Board;
