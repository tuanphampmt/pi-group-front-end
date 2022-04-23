import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from "./components/Home/HomeComponent";
import LoginFormComponent from "./components/login-register-form/LoginFormComponent";
import RegisterFormComponent from "./components/login-register-form/RegisterFormComponent";
import ForgotPasswordFormComponent from "./components/login-register-form/ForgotPasswordFormComponent";
import "./common/js/loader";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/home" element={<HomeComponent />} />
      </Route>
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<LoginFormComponent />} />
        <Route path="/register" element={<RegisterFormComponent />} />
        <Route path="/forgot-pass" element={<ForgotPasswordFormComponent />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
