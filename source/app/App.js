import React from 'react';
import { Routes, Route } from 'react-router-dom';

import RouteProvider from './hoc/RouteProvider';
import PrivateRoute from './hoc/PrivateRoute';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Result from './pages/Result';

function App() {
  return (
    <RouteProvider>
      <ScrollToTop />
      <Routes>
        <Route 
          path="*" 
          element={<pre> Ресурс не найден</pre>} 
        />
        <Route 
          path="/" 
          element={<Home />} 
        />
        <Route 
          path="/result" 
          element={
            <PrivateRoute>
              <Result />
            </PrivateRoute>
          }
        />
      </Routes>
    </RouteProvider>
  );
}

export default App;
