import React from 'react';

const Row = ({ row, rowIndex }) => (
  <tr key={rowIndex}>
    {
      row.map((cell, cellIndex) => (
        <td
          key={[rowIndex, cellIndex].join()}
          data-row={rowIndex}
          data-cell={cellIndex}
          className={["cell", cell ? 'full' : 'empty'].join(" ")}>
          &nbsp;
        </td>
      ))
    }
  </tr>
);

export default Row;
