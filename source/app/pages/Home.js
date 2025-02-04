import React from 'react';
import { useNavigate } from 'react-router-dom';

import Toggle from '../components/Toggle';
import SiteBlock from '../components/SiteBlock';
import Activity from '../components/Activity';
import Button from '../components/Button';

function Home() {
  const navigate = useNavigate();

  const optionData = [
    {id: 1, forName: 'age', text: 'Возраст', min: 0, placeholder: 0, required: true},
    {id: 2, forName: 'height', text: 'Рост', min: 0, placeholder: 0, required: true},
    {id: 3, forName: 'weight', text: 'Вес', min: 0, placeholder: 0, required: true},
  ];

  const activityData = [
    {id: 1, forName: 'min', value: 1.2, subtitle: 'Минимальный', text: 'Тренировок мало или они отсутствуют'},
    {id: 2, forName: 'low', value: 1.375, subtitle: 'Низкий', text: 'Лёгкие тренировки 1-3 раза в неделю или в виде эквивалента другой активности'},
    {id: 3, forName: 'mid', value: 1.55, subtitle: 'Средний', text: 'Физическая работа средней тяжести или регулярные тренировки 3-5 дней в неделю'},
    {id: 4, forName: 'high', value: 1.725, subtitle: 'Высокий', text: 'Физическая работа полный день или интенсивные тренировки 6-7 раз в неделю'},
    {id: 5, forName: 'very-high', value: 1.9, subtitle: 'Очень высокий', text: 'Тяжёлая физическая работа и интенсивные тренировки/занятия спортом'},
  ];

  function calculateForm(e) {
    e.preventDefault();
    
    let toggleChoice = e.target.toggle.value;
    let age = e.target.age.value;
    let height = e.target.height.value;
    let weight = e.target.weight.value;
    let activityLevel = e.target.activity.value;

    let bmrCalories;
    let normalCalories;
    
    let formulaForMan = Math.round(10 * weight + 6.25 * height - 5 * age + 5);
    let formulaForWoman = Math.round(10 * weight + 6.25 * height - 5 * age - 161);
    
    let bmiCalories = Math.round((weight / ((height / 100) * (height / 100))) * 100) / 100;
    
    if (toggleChoice == 1) {
      bmrCalories = formulaForMan;
      normalCalories = Math.round(formulaForMan * activityLevel);
    } else {
      bmrCalories = formulaForWoman;
      normalCalories = Math.round(formulaForWoman * activityLevel);
    }
    
    navigate('/result', { state: { bmi : bmiCalories, bmr : bmrCalories, normal : normalCalories } });
  }

  return (
    <form 
      className="calculator" 
      method="post" 
      onSubmit={calculateForm}
    >
      <Toggle />
      <SiteBlock 
        items={optionData} 
        title='Параметры' 
      />
      <Activity items={activityData} />
      <Button 
        className='calculator__button-calculate'
        text='Рассчитать' 
      />
    </form>
  );
}

export default Home;