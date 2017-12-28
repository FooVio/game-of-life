import React from 'react';
import Row from './Row';

function Board(props) {
  const board = props.board.map((row, rowIndex) => Row({ row: row, rowIndex: rowIndex }));
  return (
    <table className="board">{board}</table>
  );
}

export default Board;
