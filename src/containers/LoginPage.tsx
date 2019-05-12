import React from 'react';
import Header from "../components/Header";
import Title from "../components/Title";
import Line from "../components/Line";
import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";

const LoginPage: React.FC = () => {
  return (
    <div>
      <Header>
        <Title text="todoapp" />
        <Link to="home">home</Link><br />
        <Link to="register">sign up</Link><br />
        <Link to="login">sign in</Link>
        <Line />
      </Header>
      <LoginForm exeHandler={(user,pass)=>console.log(`user:${user}, pass:${pass}`)} />
    </div>
  )
}

export default LoginPage;
