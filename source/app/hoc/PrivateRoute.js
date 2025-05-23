import React from 'react';
import { Navigate } from 'react-router-dom';

import usePrivate from '../hook/usePrivate';

function PrivateRoute({ children }) {
  const { bmi, bmr, normal } = usePrivate();
  
  if (!bmi & !bmr & !normal) {
    return <Navigate to='/' replace={ true } />
  }

  return children;
}

export default PrivateRoute;