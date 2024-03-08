import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  width: 100%;
  background-color: #fab1a0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 2px solid #000000;
  border-radius: 10px;
`;

const StyledImage = styled.img`
  height: 200px; /* 이미지 크기 조절 */
  width: 200px; /* 이미지 크기 조절 */
  object-fit: cover;
  margin-left: 10px; /* 이미지와 텍스트 간격 조절 */
`;

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center; /* 이미지와 텍스트를 수직으로 정렬 */
  justify-content: space-between; /* 이미지와 텍스트를 수평으로 정렬 */
`;



const StyledTitleContextWrapper = styled.div`
  display: block;
  height: 200px; /* 이미지 크기 조절 */
  width: 200px; /* 이미지 크기 조절 */
  margin-left: 10px;
`

const StyledCategory = styled.div`
  display: inline-block;
  padding: 10px;
  border: 2px solid #e33209;
  border-radius: 40%; /* 테두리를 원 모양으로 만듭니다 */
  font-size: 10px;
  color: black;
  margin-top: 20px;
`;

const StyledHeading = styled.h3`
  margin-top: 50px;
  font-size: 80%; /* 원하는 크기로 조절하세요 */
`;

const StyledParagraph = styled.p`
  font-size: 80%; /* 원하는 크기로 조절하세요 */
  display: inline;
`;

const StyledImageWrapper = styled.div`
  background-size: cover;
`

const NavCategoryImage = ({ img, category, title, des }) => {
  return (
    <StyledCard>
      <div>
        <StyledContentWrapper>
          {/* 제목, 내용 */}
          <StyledTitleContextWrapper>
            <StyledCategory>{category}</StyledCategory>
            <StyledHeading>{title}</StyledHeading>
            <StyledParagraph>{des}</StyledParagraph>
          </StyledTitleContextWrapper>

          {/* 이미지 */}
          <StyledImageWrapper>
            <StyledImage src={img} alt="dp" />
          </StyledImageWrapper>
        </StyledContentWrapper>
      </div>
    </StyledCard>
  )
}

export default NavCategoryImage;