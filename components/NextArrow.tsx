import React from 'react';
import { BsChevronRight } from 'react-icons/bs'
import style from '../public/styles/Home.module.css'


const NextArrow = ({onClick}) => {
  return (
    <div className={style.NextContainer} onClick={onClick}>
      <div className={style.NextButtonWrapper}>
        <BsChevronRight />
      </div>
    </div>
  )
}

export default NextArrow;