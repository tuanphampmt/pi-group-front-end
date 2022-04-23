import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function PublicRoute(props) {
  // const auth = useAuth();
  const auth = true;
  return auth ? <Navigate to="/home" /> : <Navigate to="/login" />;
}


export default PublicRoute;
