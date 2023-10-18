import React from 'react';
import SiteItem from './SiteItem';

function SiteBlock(props) {
  const blockList = props.items.map(item => (
    <SiteItem 
      key={item.id} 
      forName={item.forName} 
      name={item.name} 
      align={item.align} 
      color={item.color} 
      min={item.min} 
      placeholder={item.placeholder} 
      default={item.default} 
      required={item.required} 
    />
  ));

  return (
    <fieldset 
      className="calculator__section site-block" 
      disabled={(props.disabled ? props.disabled : '')}
    >
      <legend className="calculator__section-title site-block__title">{props.title}</legend>
      
      {blockList}
    </fieldset>
  );
}

export default SiteBlock;