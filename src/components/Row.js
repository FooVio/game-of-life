import React from 'react';

const Row = props => (
  <tr key={props.rowIndex}>
    {
      props.row.map((cell, cellIndex) => (
        <td
          key={[props.rowIndex, cellIndex].join()}
          data-row={props.rowIndex}
          data-cell={cellIndex}
          className={["cell", cell ? 'full' : 'empty'].join(" ")}>
          &nbsp;
        </td>
      ))
    }
  </tr>
);

export default Row;
