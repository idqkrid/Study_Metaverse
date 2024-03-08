import React, { ReactNode } from 'react';
import Link from 'next/link';

interface Props {
  children: ReactNode;
}

const AppLayout = ({children}: Props) => {
  return (
    <div>
      {children}
    </div>
  )
};

export default AppLayout;
