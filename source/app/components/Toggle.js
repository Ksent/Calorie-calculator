import React, { useState } from 'react';

function Toggle() {
  const [value, setValue] = useState(1);

  function checkToggle(e) {
    setValue(e.target.value); 
  }
  
  return (
    <fieldset className="calculator__toggle">
        
      <input 
        className="calculator__toggle-input hidden"
        type="radio" 
        name="toggle" 
        id="man" 
        value="1"
        autoComplete="off" 
        checked={value == '1' ? true : false}
        onChange={checkToggle}
      />
      <label 
        className="calculator__toggle-title button"
        htmlFor="man"
      >
        Мужчина
      </label>

      <input 
        className="calculator__toggle-input hidden"
        type="radio" 
        name="toggle" 
        id="woman" 
        value="2"
        autoComplete="off"
        checked={value == '2' ? true : false}
        onChange={checkToggle}
      />
      <label 
        className="calculator__toggle-title calculator__toggle-title--margin button"
        htmlFor="woman"
      >
        Женщина
      </label>

    </fieldset>
  );
}

export default Toggle;