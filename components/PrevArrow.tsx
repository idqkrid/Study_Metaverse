import React from 'react';
import { BsChevronLeft } from 'react-icons/bs'
import style from '../public/styles/Home.module.css'


const PrevArrow = ({onClick}) => {
  return (
    <div className={style.PreNextContainer} onClick={onClick}>
      <div className={style.PreButtonWrapper}>
        <BsChevronLeft />
      </div>
    </div>
  )
}

export default PrevArrow;