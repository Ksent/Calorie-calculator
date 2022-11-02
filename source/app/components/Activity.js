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
  );
}

export default Activity;