import React from 'react';

function TableCell(props) {
  return (
    <td 
      className={"calorie__table-cell" + (props.color ? props.color : '')} 
      rowSpan={props.rowSpan}
    >
      {props.name}
    </td>
  );
};

export default TableCell;