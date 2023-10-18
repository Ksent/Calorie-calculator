import React from 'react';

function Button({ className, text }) {
  return (
    <fieldset className="calculator__button">
      <button className={className + " button"}>
        {text}
      </button>
    </fieldset>
  );
}

export default Button;