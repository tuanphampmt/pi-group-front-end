import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import {checkTokenExpirationMiddleware} from "../services/auth.service"

function PrivateRoute(props) {
  const auth = checkTokenExpirationMiddleware();
  return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
