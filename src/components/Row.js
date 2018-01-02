import React from 'react';

const Row = ({ row, rowIndex, onClickCell }) => (
  <tr key={rowIndex}>
    {
      row.map((cell, cellIndex) => (
        <td
          key={[rowIndex, cellIndex].join()}
          onClick={() => onClickCell(rowIndex, cellIndex)}
          className={["cell", cell ? 'full' : 'empty'].join(" ")}>
          &nbsp;
        </td>
      ))
    }
  </tr>
);

export default Row;
