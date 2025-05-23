import React from 'react';

import usePrivate from '../hook/usePrivate';

function SiteItem({ 
  forName, 
  text, 
  align, 
  color, 
  min, 
  placeholder, 
  defaultValue, 
  required 
}) {
  const { bmi } = usePrivate();
  
  return (
    <div className="site-block__wrapper">
      <label 
        className="site-block__subtitle"
        htmlFor={forName}
      >
        {text}
      </label>
      <input 
        className={"site-block__input" + (align ? align : '') + (color ? (bmi >= 18.50 && bmi <= 25 ? ' site-block__input--norm' : ' site-block__input--hard') : '')} 
        type="number" 
        name={forName} 
        id={forName} 
        min={(!min ? min : '')} 
        placeholder={(!placeholder ? placeholder : '')} 
        defaultValue={(defaultValue ? defaultValue : '')}
        autoComplete="off" 
        required={(required ? required : '')}
      />
    </div>
  );
}

export default SiteItem;