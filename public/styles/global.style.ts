import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    font-family: 'Noto Sans KR', sans-serif,--apple-system, BlinkMacSystemFont, Segoe UI, Roboto,Oxygen, Ubuntu, Cantaarell, Fira Sans, Droid Sans, Helvetica Neue;
  }

  button {
    cursor: pointer;
    border: none;
    font-family: 'Noto Sans KR',
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 35px;
    padding: 1rem;
    color: white;
    background: white;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .header_left_logo_button {
    background-color:white;
    border: 1px solid white;
    background-image: url('../images/logo_zep.svg');
    height: 33px;
    width: 86px;
    color: transparent;
    margin-right: 10px;
  }
  
  /* ~~~~~~~~~~~~~~~~~~~~~~ */
  
  .centerAlign_five {
    width: 100%;
    padding: 8px 10px;
    margin: 0 auto; /* 추가된 부분: 가운데 정렬을 위한 margin 설정 */
  }
  
  .mainFiveBlock {
    margin: 0 auto;
    width: 1080px;
    padding: 8px 10px;
    width: 1100px;
  }
  
  .whyAd {
    height: 1200px;
    margin-top: 10px;
    margin-right: 8px;
    margin-bottom: 8px;
    border: 2px solid rgb(248, 248, 248);
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`