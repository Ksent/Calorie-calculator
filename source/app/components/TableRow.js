import React from 'react';

import usePrivate from '../hook/usePrivate';
import TableCell from './TableCell';

function TableRow({ 
  showCell, 
  color, 
  rowSpan, 
  text, 
  number, 
  deficit 
}) {
  const { normal } = usePrivate();
  
  return (
    <tr className="calorie__table-row">
      {(!showCell) && 
        <TableCell 
          color={color} 
          rowSpan={rowSpan} 
          text={text} 
        />
      }
      <td className="calorie__table-cell">
        {number}
      </td>
      <td className="calorie__table-cell">
        {Math.round(normal - (normal * deficit))}
      </td>
      <td className="calorie__table-cell">
        {((normal * deficit * 30) / 7500).toFixed(1)}
      </td>
    </tr>
  );
}

export default TableRow;