import React from 'react';
import Header from "../components/Header";
import Title from "../components/Title";
import Line from "../components/Line";
import RegisterForm from "../components/RegisterForm";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import FormInput from '../components/FormInput';

const RegisterPage: React.FC = () => {
  return (
    <div>
      <Header>
        <Title text="todoapp" />
        <Link to="home">home</Link><br />
        <Link to="register">sign up</Link><br />
        <Link to="login">sign in</Link>
        <Line />
      </Header>
      <RegisterForm
        renderForm1={(mail, setMail) => <FormInput text={mail} placeholder={"mail"} changeHandler={(text) => setMail(text)} />}
        renderForm2={(user, setUser) => <FormInput text={user} placeholder={"user"} changeHandler={(text) => setUser(text)} />}
        renderForm3={(pass, setPass) => <FormInput text={pass} placeholder={"pass"} changeHandler={(text) => setPass(text)} />}
        renderButton={(mail, user, pass) => <Button text={"sign in"} clickHandler={() => console.log(`mail:${mail},user: ${user},pass: ${pass}`)} />}
      />
    </div>
  )
}

export default RegisterPage;
