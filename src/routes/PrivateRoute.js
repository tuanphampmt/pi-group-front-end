import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function PrivateRoute(props) {
  // const auth = useAuth();
  const auth = true;
  return auth ? <Outlet /> : <Navigate to="/login" />;
}


export default PrivateRoute;
