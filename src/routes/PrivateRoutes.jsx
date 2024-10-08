import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider'; 

const PrivateRoute = ({ element, adminOnly = false, ...rest }) => {
  const { authTokens } = useAuth();
  const location = useLocation();

  if (!authTokens || !authTokens.accessToken) {
    // Redirect unauthenticated users to the login page
    return <Navigate to="/login" />;
  }

  if (authTokens.user.is_superuser) {
    // Redirect superusers to the admin dashboard when accessing the root route
    if (location.pathname === '/') {
      return <Navigate to="/admin/dashboard" />;
    }
  }

  if (adminOnly && !authTokens.user.is_superuser) {
    // Redirect non-admin users away from admin routes
    return <Navigate to="/" />;
  }

  // Render the element if the user is authenticated and meets any other criteria
  return element;
};

export default PrivateRoute;
