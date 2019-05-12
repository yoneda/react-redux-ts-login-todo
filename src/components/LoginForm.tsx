import React, { ReactElement } from 'react';

export interface Props {
  renderForm1: renderForm1Prop;
  renderForm2: renderForm2Prop;
  renderButton: renderButtonProp;
}

type renderForm1Prop = (user:string, setUser:any) => ReactElement;
type renderForm2Prop = (pass:string, setPass:any) => ReactElement;
type renderButtonProp = (user:string, pass:string) => ReactElement;

const LoginForm: React.FC<Props> = ({ renderForm1, renderForm2, renderButton }:Props ) => {
  const [user, setUser] = React.useState("");
  const [pass, setPass] = React.useState("");
  return(
    <div>
      <div>sing in</div>
      {renderForm1(user,setUser)}<br />
      {renderForm2(pass,setPass)}<br />
      {renderButton(user,pass)}
    </div>
  )
}

export default LoginForm;