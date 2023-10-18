import React from 'react';
import SiteItem from './SiteItem';

function SiteBlock({ items, disabled, title }) {
  return (
    <fieldset 
      className="calculator__section site-block" 
      disabled={(disabled ? disabled : '')}
    >
      <legend className="calculator__section-title site-block__title">
        {title}
      </legend>
      
      {items.map(item => (
        <SiteItem 
          key={item.id} 
          {...item}
        />
      ))}
      
    </fieldset>
  );
}

export default SiteBlock;