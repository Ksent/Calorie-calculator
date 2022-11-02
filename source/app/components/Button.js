import React from 'react';

function Button(props) {
  return (
    <fieldset className="calculator__button">
      <button className={props.className + " button"}>{props.name}</button>
    </fieldset>
  );
}

export default Button;