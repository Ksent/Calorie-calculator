import React from 'react';

import TableRow from './TableRow';

function Calorie(props) {
  const tableList = props.cells.map(cell => (
    <TableRow 
      key={cell.id} 
      showCell={cell.showCell} 
      color={cell.color} 
      rowSpan={cell.rowSpan} 
      name={cell.name} 
      number={cell.number} 
      deficit={cell.deficit} 
    />
  ));

  return (
    <fieldset className="calculator__section calorie">
      <legend className="calculator__section-title calorie__title">Расчёт калорий</legend>

      <table className="calorie__table" cellSpacing="0">
        <thead className="calorie__table-head">
          <tr className="calorie__table-row">
            <th className="calorie__table-cell">Уровень дефицита</th>
            <th className="calorie__table-cell">%</th>
            <th className="calorie__table-cell">Ккал/сутки</th>
            <th className="calorie__table-cell">Кг/месяц</th>
          </tr>
        </thead>

        <tbody className="calorie__table-body">
          {tableList}
        </tbody>
      </table>

    </fieldset>
  );
}

export default Calorie;