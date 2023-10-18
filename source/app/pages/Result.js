import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import Calorie from '../components/Calorie';
import SiteBlock from '../components/SiteBlock';
import Button from '../components/Button';

function Result() {
  const navigate = useNavigate();
  const location = useLocation();

  const resultData = [
    {id: 1, forName: 'bmi', text: 'Индекс массы тела', align: ' site-block__input--align', color: true, defaultValue: location.state.bmi},
    {id: 2, forName: 'bmr', text: 'Базовый метаболизм', align: ' site-block__input--align', defaultValue: location.state.bmr},
    {id: 3, forName: 'normal', text: 'Норма калорий', align: ' site-block__input--align', defaultValue: location.state.normal},
  ];

  const tableData = [
    {id: 1, text: 'Низкий', number: 5, deficit: 0.05},
    {id: 2, color: ' calorie__table-cell--norm', rowSpan: 2, text: 'Оптимальный', number: 10, deficit: 0.1},
    {id: 3, showCell: true, number: 15, deficit: 0.15},
    {id: 4, color: ' calorie__table-cell--hard', text: 'Высокий', number: 20, deficit: 0.2},
  ];
  
  function returnForm(e) {
    e.preventDefault();

    navigate('/', location.pathname);
  }

  return (
    <form 
      className="calculator" 
      method="post" 
      onSubmit={returnForm}
    >
      <SiteBlock 
        items={resultData} 
        disabled={true} 
        title='Результат' 
      />
      <Calorie cells={tableData} />
      <Button 
        className='calculator__button-count'
        text='Пересчитать'
      />
    </form>
  );
}

export default Result;