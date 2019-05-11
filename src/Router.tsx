import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from "./containers/HomePage";
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import UserPage from "./containers/UserPage";

const AppRouter = () => (
  <Router>
    <Route path="/home" component={HomePage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/register" component={RegisterPage} />
    <Route path="/user" component={UserPage} />
  </Router>
)

export default AppRouter;