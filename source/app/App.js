import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Result from './pages/Result';

function App() {
  const location = useLocation();

  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/public/index.html" 
          element={<Home />} 
        />
        <Route 
          path="/public/index.html/result" 
          element={location.state ? <Result /> : <Navigate to="/" />} 
        />
        <Route 
          path="*" 
          element={<pre> Ресурс не найден</pre>} 
        />
      </Routes>
    </div>
  );
}

export default App;
