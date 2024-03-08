import React, { ReactNode } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GlobalStyle } from '../public/styles/global.style';

const NodeBird = ({ Component }) => {
  return (
    <>
      <GlobalStyle />
      <Component />
    </>
  )
}

export default NodeBird;