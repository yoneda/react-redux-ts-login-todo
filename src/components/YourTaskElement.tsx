import React from 'react';

export interface Props {
  name: string;
  done: boolean;
  doneHandler: any;
  removeHandler: any;
}

const YourTaskElement: React.FC<Props> = ({ name, done, doneHandler, removeHandler }:Props ) => {
  return(
    <div>
      <span>
        {
          done===true ? <span><s>{name}</s></span> : <span>{name}</span>
        }
        {" "}
        <a href="javascript:void(0)" onClick={doneHandler}>✓</a>
        {" "}
        <a href="javascript:void(0)" onClick={removeHandler}>x</a>
      </span>
    </div>
  )
}

export default YourTaskElement;
