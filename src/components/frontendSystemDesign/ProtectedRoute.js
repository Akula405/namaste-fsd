import React from "react";
import { Outlet, Navigate } from "react-router-dom";
//outlet is used to render children;
const ProtectedRoute = () => {
  const isAuthenticate = false;
  return isAuthenticate ? <Outlet /> : <Navigate to="/login-protect" />;
};

export default ProtectedRoute;
