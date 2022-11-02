import React from 'react';
import { useLocation } from 'react-router-dom';

function SiteItem(props) {
  const location = useLocation();
  
  return (
    <div className="site-block__wrapper">
      <label 
        className="site-block__subtitle"
        htmlFor={props.forName}
      >
        {props.name}
      </label>
      <input 
        className={"site-block__input" + (props.align ? props.align : '') + (props.color ? (location.state.bmi >= 18.50 && location.state.bmi <= 25 ? ' site-block__input--norm' : ' site-block__input--hard') : '')} 
        type="number" 
        name={props.forName} 
        id={props.forName} 
        min={(!props.min ? props.min : '')} 
        placeholder={(!props.placeholder ? props.placeholder : '')} 
        defaultValue={(props.default ? props.default : '')}
        autoComplete="off" 
        required={(props.required ? props.required : '')}
      />
    </div>
  );
}

export default SiteItem;