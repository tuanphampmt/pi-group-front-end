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

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        {/* PrivateRoute */}
        <Route element={<PrivateRoute />}>
          <Route path="/test-online" element={<HomeTestOnlineComponent />} />
        </Route>
        {/* PublicRoute */}
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginFormComponent />} />
          <Route path="/register" element={<RegisterFormComponent />} />
          <Route
            path="/forgot-pass"
            element={<ForgotPasswordFormComponent />}
          />
        </Route>
        {/* ProtectedRoute */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomeComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
