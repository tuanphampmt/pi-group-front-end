import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import {checkTokenExpirationMiddleware} from "../services/auth.service"

function PublicRoute(props) {
  const auth = checkTokenExpirationMiddleware();
  return auth ? <Navigate to="/home" /> : <Outlet />;
}

export default PublicRoute;
