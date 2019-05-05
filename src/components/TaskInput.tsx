import React from 'react';

export interface Props {
  addHandler: any;
}

const TaskInput:React.FC<Props> = ({ addHandler }:Props ) => {
  const [text, setText] = React.useState("");
  return(
    <div>
      <input type="text" onChange={(event)=>setText(event.target.value)} />
      <button onClick={addHandler(text)}>add</button>
    </div>
  )
}

export default TaskInput;