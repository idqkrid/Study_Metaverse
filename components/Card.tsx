import React from 'react';
import styled from 'styled-components';
import style from '../public/styles/Home.module.css';

const Card = ({ img, category, title, des }) => {
  return (
    <div className={style.styledCard}>
      <div>
        <div className={style.styled_Content_Wrapper}>
          {/* 제목, 내용 */}
          <div className={style.styledTitleContextWrapper}>
            <div className={style.styledCategory}>{category}</div>
            <div className={style.styledHeading}>{title}</div>
            <div className={style.styledParagraph}>{des}</div>
          </div>

          {/* 이미지 */}
          <div className={style.styledImageWrapper}>
            <div className={style.styledImage}>
              <img src={img} alt="dp" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;