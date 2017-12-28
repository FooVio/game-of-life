import React from 'react';
import Row from './Row';

const Board = props => (
  <table className="board">
    <tbody>
      {
        props.board.map((row, rowIndex) => Row({ row: row, rowIndex: rowIndex }))
      }
    </tbody>
  </table>
);

export default Board;
