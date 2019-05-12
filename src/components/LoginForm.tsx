import React from 'react';
import FormInput from "./FormInput";
import Button from "./Button";

export interface Props {
  exeHandler: exeHandlerProp;
}

type exeHandlerProp = (user:string,pass:string) => void;

const LoginForm: React.FC<Props> = ({ exeHandler }:Props ) => {
  const [user, setUser] = React.useState("");
  const [pass, setPass] = React.useState("");
  return(
    <div>
      <div>sing in</div>
      <FormInput text={user} placeholder={"user"} changeHandler={(message)=>setUser(message)} /><br />
      <FormInput text={pass} placeholder={"pass"} changeHandler={(message)=>setPass(message)} /><br />
      <Button text={"sign in"} clickHandler={()=>exeHandler(user,pass)} />
    </div>
  )
}

export default LoginForm;