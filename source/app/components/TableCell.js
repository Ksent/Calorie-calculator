import React from 'react';

function TableCell({ color, rowSpan, text }) {
  return (
    <td 
      className={"calorie__table-cell" + (color ? color : '')} 
      rowSpan={rowSpan}
    >
      {text}
    </td>
  );
};

export default TableCell;