import * as React from "react";

export interface Props {
  text: string;
  clickHandler :any;
}

const Button: React.FC<Props> = ({ text, clickHandler }:Props) => {
  return(
    <button onClick={clickHandler}>{text}</button>
  )
}

export default Button;