import React from 'react';
import Row from './Row';

const Board = ({ board }) => (
  <table className="board">
    <tbody>
      {board.map((row, rowIndex) => (
        <Row row={row} rowIndex={rowIndex} />
      ))}
    </tbody>
  </table>
);

export default Board;
