import React from 'react';
import Header from "../components/Header";
import Title from "../components/Title";
import Line from "../components/Line";
import { Link } from "react-router-dom";

const UserPage: React.FC = () => {
  return (
    <div>
      <Header>
        <Title text="todoapp" />
        <Link to="home">home</Link><br />
        <Link to="register">sign up</Link><br />
        <Link to="login">sign in</Link>
        <Line />
      </Header>
    </div>
  )
}

export default UserPage;
