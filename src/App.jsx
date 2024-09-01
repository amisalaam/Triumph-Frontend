import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import MyTicket from './pages/MyTicket';
import Dashboard from './pages/admin/Dashboard';

// Components
import PageNotFound from './component/PageNotFound';

// Routes
import PrivateRoute from './routes/PrivateRoutes';
import PublicRoute from './routes/PublicRoutes';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
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
          path="/admin/dashboard"
          element={<PrivateRoute element={<Dashboard />} adminOnly={true} />}
        />

        {/* Catch-all for 404 Page Not Found */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
