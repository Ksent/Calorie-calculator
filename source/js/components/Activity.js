import React, { useState } from 'react';

function Activity(props) {
  const [value, setValue] = useState(1.2);

  function checkActivity(e) {
    setValue(e.target.value);
  }

  return (
    <fieldset className="calculator__section activity">
      <legend className="calculator__section-title activity__title">Уровень активности</legend>
        
      {props.items.map(item => (
        <div className="activity__wrapper" key={item.id}>
          <input 
            className="activity__input" 
            type="radio" 
            name="activity" 
            id={item.forName} 
            value={item.value}
            autoComplete="off" 
            checked={(value == item.value ? true : false)}
            onChange={checkActivity}
            />
          <label 
            className="activity__subtitle"
            htmlFor={item.forName}
            >
            {item.subtitle}
          </label>
          <span className="activity__text">{item.text}</span>
        </div>
      ))}
    </fieldset>

      

      // {/* <input 
      //   className="activity__input" 
      //   type="radio" 
      //   name="activity" 
      //   id="min" 
      //   value="1.2"
      //   autoComplete="off" 
      //   checked={value == '1.2' ? true : false}
      //   onChange={checkActivity}
      // />
      // <label 
      //   className="activity__subtitle"
      //   htmlFor="min"
      // >
      //   Минимальный
      // </label>
      // <span className="activity__text">Тренировок мало или они отсутствуют</span>

      // <input 
      //   className="activity__input" 
      //   type="radio" 
      //   name="activity" 
      //   id="low" 
      //   value="1.375"
      //   autoComplete="off"
      //   checked={value == '1.375' ? true : false}
      //   onChange={checkActivity}
      // />
      // <label 
      //   className="activity__subtitle"
      //   htmlFor="low"
      // >
      //   Низкий
      // </label>
      // <span className="activity__text">Лёгкие тренировки 1-3 раза в неделю или в виде эквивалента другой активности</span>

      // <input 
      //   className="activity__input" 
      //   type="radio" 
      //   name="activity" 
      //   id="mid"
      //   value="1.55" 
      //   autoComplete="off"
      //   checked={value == '1.55' ? true : false}
      //   onChange={checkActivity}
      // />
      // <label 
      //   className="activity__subtitle"
      //   htmlFor="mid"
      // >
      //   Средний
      // </label>
      // <span className="activity__text">Физическая работа средней тяжести или регулярные тренировки 3-5 дней в неделю</span>

      // <input 
      //   className="activity__input" 
      //   type="radio" 
      //   name="activity" 
      //   id="high"
      //   value="1.725"
      //   autoComplete="off"
      //   checked={value == '1.725' ? true : false}
      //   onChange={checkActivity}
      // />
      // <label 
      //   className="activity__subtitle"
      //   htmlFor="high"
      // >
      //   Высокий
      // </label>
      // <span className="activity__text">Физическая работа полный день или интенсивные тренировки 6-7 раз в неделю</span>

      // <input 
      //   className="activity__input" 
      //   type="radio" 
      //   name="activity" 
      //   id="very-high" 
      //   value="1.9"
      //   autoComplete="off"
      //   checked={value == '1.9' ? true : false}
      //   onChange={checkActivity}
      // />
      // <label 
      //   className="activity__subtitle"
      //   htmlFor="very-high"
      // >
      //   Очень высокий
      // </label>
      // <span className="activity__text">Тяжёлая физическая работа и интенсивные тренировки/занятия спортом</span> */}
  );
}

export default Activity;