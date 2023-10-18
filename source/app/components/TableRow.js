import React from 'react';
import { useLocation } from 'react-router-dom';

import TableCell from './TableCell';

function TableRow({ 
  showCell, 
  color, 
  rowSpan, 
  text, 
  number, 
  deficit 
}) {
  const location = useLocation();
  
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
        {Math.round(location.state.normal - (location.state.normal * deficit))}
      </td>
      <td className="calorie__table-cell">
        {((location.state.normal * deficit * 30) / 7500).toFixed(1)}
      </td>
    </tr>
  );
}

export default TableRow;