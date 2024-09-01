import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageNotFound from './component/PageNotFound';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import MyTicket from './pages/MyTicket';

// Routes
import PrivateRoute from './routes/PrivateRoutes';
import PublicRoute from './routes/PublicRoutes';
import Dashboard from './pages/admin/Dashboard';

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

        <Route
          path="/mytickets"
          element={<PrivateRoute element={<MyTicket />} />}
        />

        <Route
        path='/admin/dashboard'
        element={<PrivateRoute element={<Dashboard />} adminOnly={true} />}
      />



      </Routes>
    </Router>
  );
}

export default App;
