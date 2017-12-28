import React from 'react';

function Row(props) {
  const cellList = props.row.map((cell, cellIndex) => (
    <td
      data-row={props.rowIndex}
      data-cell={cellIndex}
      className={["cell", cell ? 'full' : 'empty'].join(" ")}>
      &nbsp;
    </td>
  ));

  return (
    <tr>{cellList}</tr>
  );
}

export default Row;
