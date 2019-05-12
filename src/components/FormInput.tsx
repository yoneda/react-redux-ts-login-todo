import * as React from "react";

type Props = {
  text: string;
  placeholder: string;
  changeHandler: changeHandlerProp;
}

type changeHandlerProp = (text: string) => void;

const FormInput: React.FC<Props> = ({ text, placeholder, changeHandler }:Props) => {
  return(
    <input type="text" placeholder={placeholder} value={text} onChange={(event)=>changeHandler(event.target.value)} />
  )
}

export default FormInput;