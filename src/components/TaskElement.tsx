import React from 'react';

export interface Props {
  name: string;
  done: boolean;
  user: string;
}

const TaskElement: React.FC<Props> = ({ name, done, user }:Props ) => {
  return(
    <div>
      <span>
        {
          done===true ? <span><s>{name}</s></span> : <span>{name}</span>
        }
        {` by ${user}`}
      </span>
    </div>
  )
}

export default TaskElement;
