import React from 'react';

export interface Props {
  text: string;
}

const Title: React.FC<Props> = ({ text }:Props ) => {
  return(
    <>
      <h2>{text}</h2>
    </>
  )
}

export default Title;
