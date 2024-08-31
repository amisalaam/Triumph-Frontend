import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider'; // Adjust the path if necessary

const PublicRoute = ({ element, restricted, ...rest }) => {
  const { authTokens } = useAuth();

  // Redirect authenticated users away from restricted public routes
  return authTokens && authTokens.accessToken && restricted ? <Navigate to="/" /> : element;
};

export default PublicRoute;
