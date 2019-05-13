import React from 'react';
import Header from "../components/Header";
import Title from "../components/Title";
import Line from "../components/Line";
import LoginForm from "../components/LoginForm";
import Button from "../components/Button";
import FormInput from "../components/FormInput";
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
      <LoginForm
        renderForm1={(user, setUser) => <FormInput text={user} placeholder={"user"} changeHandler={(text) => setUser(text)} />}
        renderForm2={(pass, setPass) => <FormInput text={pass} placeholder={"pass"} changeHandler={(text) => setPass(text)} />}
        renderButton={(user, pass) => <Button text={"sign in"} clickHandler={() => console.log(`user: ${user},pass: ${pass}`)} />}
      />
    </div>
  )
}

export default LoginPage;

