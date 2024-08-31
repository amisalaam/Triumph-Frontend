import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import PageNotFound from './component/PageNotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<PageNotFound />} />

        <Route path="/login" element={<Login />} /> 

        <Route path="/" element={<Home />} />

      </Routes>
    </Router>
  );
}

export default App;
