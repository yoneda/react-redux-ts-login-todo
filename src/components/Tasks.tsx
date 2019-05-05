import React from 'react';

export interface Props {
  children: React.ReactElement[];
}

const Tasks: React.FC<Props> = ({ children }:Props ) => {
  return(
    <div>
      {children}
    </div>
  )
}

export default Tasks;
