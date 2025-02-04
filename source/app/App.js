import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Result from './pages/Result';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {

    if (!location.state) {
      navigate('/');
    }

  }, [location.pathname]);

  return (
    <div>
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
          element={location.state ? <Result /> : <Navigate to="/" />} 
        />
      </Routes>
    </div>
  );
}

export default App;
