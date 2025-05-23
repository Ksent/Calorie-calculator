import React, { createContext, useState } from 'react';

export const RouteContext = createContext(null);

function RouteProvider({ children }) {
  const [bmi, setBmi] = useState(null);
  const [bmr, setBmr] = useState(null);
  const [normal, setNormal] = useState(null);
  
  function isPrivateOn(newBmi, newBmr, newNormal, cb) {
    setBmi(newBmi);
    setBmr(newBmr);
    setNormal(newNormal);
    cb();
  }
  
  function isPrivateOff(cb) {
    setBmi(null);
    setBmr(null);
    setNormal(null);
    cb();
  }
  
  const value = {bmi, bmr, normal, isPrivateOn, isPrivateOff};
  
  return (
    <RouteContext.Provider value={value}>
      {children}
    </RouteContext.Provider>
  );
}

export default RouteProvider;