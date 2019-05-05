import React from 'react';

export interface Props {
  text: string;
}

const Test: React.FC<Props> = ({ text }:Props ) => {
  return(
    <div>
      <span>text is ... {text}</span>
    </div>
  )
}

export default Test;
