import React from 'react';

import TableRow from './TableRow';

function Calorie({ cells }) {
  return (
    <fieldset className="calculator__section calorie">
      <legend className="calculator__section-title calorie__title">
        Расчёт калорий
      </legend>

      <table 
        className="calorie__table" 
        cellSpacing="0"
      >
        <thead className="calorie__table-head">
          <tr className="calorie__table-row">
            <th className="calorie__table-cell">
              Уровень дефицита
            </th>
            <th className="calorie__table-cell">
              %
            </th>
            <th className="calorie__table-cell">
              Ккал/сутки
            </th>
            <th className="calorie__table-cell">
              Кг/месяц
            </th>
          </tr>
        </thead>

        <tbody className="calorie__table-body">

          {cells.map(cell => (
            <TableRow 
              key={cell.id} 
              {...cell}
            />
          ))}

        </tbody>
      </table>

    </fieldset>
  );
}

export default Calorie;