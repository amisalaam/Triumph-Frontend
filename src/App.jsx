import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageNotFound from './component/PageNotFound';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

// Routes
import PrivateRoute from './routes/PrivateRoutes';
import PublicRoute from './routes/PublicRoutes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<PageNotFound />} />

        <Route
          path="/login"
          element={<PublicRoute element={<Login />} restricted={true} />}
        />
           <Route
          path="/register"
          element={<PublicRoute element={<Register />} restricted={true} />}
        />
        
          {/* Private Routes */}
          <Route
          path="/"
          element={<PrivateRoute element={<Home />} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
