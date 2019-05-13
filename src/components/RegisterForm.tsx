import React, { ReactElement } from 'react';

export interface Props {
  renderForm1: renderForm1Prop;
  renderForm2: renderForm2Prop;
  renderForm3: renderForm3Prop;
  renderButton: renderButtonProp;
}

type renderForm1Prop = (mail:string, setMail:any) => ReactElement;
type renderForm2Prop = (user:string, setUser:any) => ReactElement;
type renderForm3Prop = (pass:string, setPass:any) => ReactElement;
type renderButtonProp = (mail:string, user:string, pass:string) => ReactElement;

const LoginForm: React.FC<Props> = ({ renderForm1, renderForm2, renderForm3, renderButton }:Props ) => {
  const [mail, setMail] = React.useState("");
  const [user, setUser] = React.useState("");
  const [pass, setPass] = React.useState("");
  return(
    <div>
      <div>sing in</div>
      {renderForm2(mail,setMail)}<br />
      {renderForm1(user,setUser)}<br />
      {renderForm2(pass,setPass)}<br />
      {renderButton(mail,user,pass)}
    </div>
  )
}

export default LoginForm;