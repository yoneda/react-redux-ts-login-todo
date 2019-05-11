import React, { ReactChild, ReactNode } from 'react';

type Props = {
  children: ReactNode
}

const Header: React.FC<Props> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Header;
