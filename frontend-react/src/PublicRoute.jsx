import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const PublicRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);

  // If logged in, redirect to dashboard
  if (isLoggedIn) {
    return <Navigate to="/dashboard" replace />;
  }

  // Otherwise, show the public page (login/register)
  return children;
};

export default PublicRoute;
