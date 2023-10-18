import React from 'react';
import { useLocation } from 'react-router-dom';

import TableCell from './TableCell';

function TableRow(props) {
  const location = useLocation();
  
  return (
    <tr className="calorie__table-row">
      {(!props.showCell) && 
        <TableCell 
          color={props.color} 
          rowSpan={props.rowSpan} 
          name={props.name} 
        />
      }
      <td className="calorie__table-cell">{props.number}</td>
      <td className="calorie__table-cell">{Math.round(location.state.normal - (location.state.normal * props.deficit))}</td>
      <td className="calorie__table-cell">{((location.state.normal * props.deficit * 30) / 7500).toFixed(1)}</td>
    </tr>
  );
}

export default TableRow;