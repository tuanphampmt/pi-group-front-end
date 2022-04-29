import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomeComponent from "./components/Home/HomeComponent";
import LoginFormComponent from "./components/login-register-form/LoginFormComponent";
import RegisterFormComponent from "./components/login-register-form/RegisterFormComponent";
import ForgotPasswordFormComponent from "./components/login-register-form/ForgotPasswordFormComponent";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import ProtectedRoute from "./routes/ProtectedRoute";
import HomeTestOnlineComponent from "./components/test-online/HomeTestOnlineComponent";
import "./common/js/loader";
import HomeAdminComponent from "./components/admin/HomeAdminComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        {/* PrivateRoute - user */}
        <Route element={<PrivateRoute role="user" />}>
          <Route path="/user/test-online" element={<HomeTestOnlineComponent />} />
        </Route>
        {/* PublicRoute - user*/}
        <Route element={<PublicRoute role="user"/>}>
          <Route path="/user/login" element={<LoginFormComponent />} />
          <Route path="/user/register" element={<RegisterFormComponent />} />
          <Route
            path="/user/forgot-password"
            element={<ForgotPasswordFormComponent />}
          />
        </Route>
        {/* ProtectedRoute - user */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Navigate to="/user/home" />} />
          <Route path="/user/home" element={<HomeComponent />} />
        </Route>

        {/* PrivateRoute - admin */}
        <Route element={<PrivateRoute role="admin" />}>
          <Route path="/admin/home" element={<HomeAdminComponent />} />
        </Route>
        {/* PublicRoute - admin*/}
        <Route element={<PublicRoute role="admin"/>}>
          <Route path="/admin/login" element={<LoginFormComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
