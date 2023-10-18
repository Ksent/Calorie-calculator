import React from 'react';
import { useLocation } from 'react-router-dom';

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
  const location = useLocation();
  
  return (
    <div className="site-block__wrapper">
      <label 
        className="site-block__subtitle"
        htmlFor={forName}
      >
        {text}
      </label>
      <input 
        className={"site-block__input" + (align ? align : '') + (color ? (location.state.bmi >= 18.50 && location.state.bmi <= 25 ? ' site-block__input--norm' : ' site-block__input--hard') : '')} 
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