import React, {useEffect, useState, useCallback} from 'react';
import AppLayout from '../components/AppLayout';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from '../public/styles/Home.module.css';
import Slider from "react-slick";
import styled, {createGlobalStyle} from 'styled-components';
import MySlider from '../components/MySlider';
import MySpace from '../components/MySpace';
import Link from 'next/link';

const paragraphStyles = {
  webkitLineClamp: 3,
  webkitBoxOrient: 'vertical',
  overflow: 'hidden',
  display: '-webkit-box',
}
  

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);
  const [isOpenThree, setIsOpenThree] = useState(false);
  const [isOpenFour, setIsOpenFour] = useState(false);

  const onClickToggleBtn = useCallback(() => {
    setIsOpen((prevVisibility) => !prevVisibility);
    console.log(isOpen);
  }, [isOpen]);

  const onClickToggleTwoBtn = useCallback(() => {
    setIsOpenTwo((prevVisibility) => !prevVisibility);
    console.log(isOpenTwo);
  }, [isOpenTwo]);

  const onClickToggleThreeBtn = useCallback(() => {
    setIsOpenThree((prevVisibility) => !prevVisibility);
    console.log(isOpenThree);
  }, [isOpenThree]);

  const onClickToggleFourBtn = useCallback(() => {
    setIsOpenFour((prevVisibility) => !prevVisibility);
    console.log(isOpenFour);
  }, [isOpenFour]);



  return (
    <AppLayout>
        <header>
          <div className={style.mainheader}>
            <div className={style.header_left}>
              <button className={style.header_left_logo_button}>로고</button>
              <button className={style.header_left_introduce_button}>소개</button>
              <button className={style.header_right_where_button}>둘러보기</button>
              <button className={style.header_right_what_button}>고객지원</button>
            </div>
            <div className={style.header_right}>
              <button className={style.header_right_login_button}><Link href="/login"><a>로그인</a></Link></button>
              <button className={style.header_right_go_button}>무료로 시작하기</button>
            </div>
          </div>
        </header>

        <main>
          {/* 첫번째 div */}
          <div className={style.centerAlign_first}>
            {/* 첫번째 div */}
            <div className={style.mainFirstBlock}>
            <div className={style.mainAd}>
                {/* 동영상 */}
                <div className={style.videoContainer}>
                <video autoPlay loop muted playsInline className={style.main}>
                  <source src="../videos/landing_2.mp4" type="video/mp4" />
                </video>
              </div>
                {/* 텍스트 및 버튼 */}
                <div className={style.overlayContent}>
                  <h4 className={style.mainH4}>쉽고 재미있는 메타버스, ZEP</h4>
                  <button className={style.mainDonwload}>도입 문의하기</button>
                </div>
              </div>
            </div>
          </div>
          {/* 두번째 div */}
          <div className={style.centerAlign_second}>
            {/* 두번째 div */}
            <div className={style.mainSecondBlock}>
              <div className={style.SlickAd}>
                <Global />
                <h2 className={style.SlickHeader}>커뮤니티 & 이벤트</h2>
                  <MySlider />          
              </div>
            </div>
          </div>
          {/* 세번째 div */}
          <div className={style.centerAlign_three}>
            <div className={style.mainThreeBlock}>
              <div className={style.spaceAd}>
                <h2 className={style.spaceHead}>ZEP 공간을 지금 바로 체험해보세요</h2>
                <MySpace />
                <div className={style.spaceHead}>
                  <button className={style.spaceButton}>스페이스 더보기</button>
                </div>
              </div>
            </div>
          </div>
          {/* 네번째 div */}
          <div className={style.centerAlign_four}>
            {/* 네번째 div */}
            <div className={style.mainFourBlock}>
              <div className={style.canAd}>
                <div className={style.canQuestion}>?</div>
                <h2 className={style.canHead}>ZEP으로 무엇을 할 수 있나요?</h2>
                <div className={style.canAd_row1}>
                  <div className={style.canAd_one}>
                    <div className={style.canAd_oneTitle}>
                      <h3>오피스, 강의실 등 상시 공간</h3>
                      <h4>원격으로도 실제 공간에 함께 있는 것처럼 자연스럽게 소통할 수 있습니다.</h4>
                    </div>
                    <div>
                      <img className={style.canAd_oneImage} src="/images/roomFinish.PNG" alt="" />
                    </div>
                  </div>
                  <div className={style.canAd_two}>
                    <div className={style.canAd_oneTitle}>
                      <h3>쉽고 재밌는 비대면 행사</h3>
                      <h4>실제 행사처럼 생생한 이벤트를 공간 제약 없이 개최할 수 있습니다.
                      </h4>
                    </div>
                    <div>
                      <img className={style.canAd_oneImage} src="/images/roomFinish.PNG" alt="" />
                    </div>
                  </div>
                </div>
                <div className={style.canAd_row2}>
                  <div className={style.canAd_one}>
                    <div className={style.canAd_oneTitle}>
                      <h3>인터랙티브한 컨텐츠 제작</h3>
                      <h4>여러 분야에 스토리와 퀴즈, 게임 등의 인터랙티브 요소를 접목시킬 수 있습니다.</h4>
                    </div>
                    <div>
                      <img className={style.canAd_oneImage} src="/images/roomFinish.PNG" alt="" />
                    </div>
                  </div>
                  <div className={style.canAd_two}>
                    <div className={style.canAd_oneTitle}>
                      <h3>재미있어지는 교육</h3>
                      <h4>유튜브,이미지 등 미디어와,퀴즈,NPC 등을 통해 학습을 재미있고 효과적으로 만들 수 있습니다.</h4>
                    </div>
                    <div>
                      <img className={style.canAd_oneImage} src="/images/roomFinish.PNG" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 다섯번째 div */}
          <div className={style.centerAlign_five}>
            {/* 다섯번째 div */}
            <div className={style.mainFiveBlock}>
              <div className={style.whyAd}>
              <div className={style.whyAd_row1}>
                  <div className={style.whyAd_one}>
                    <div className={style.whyQuestion}>?</div>
                    <h2 className={style.whyHeadH1}>왜 ZEP을 써야하나요?</h2>
                    <h4 className={style.whyHeadH2}>수많은 메타버스 중 왜 ZEP이어야만 할까요?</h4>
                  </div>
                  <div className={style.whyAd_two}>
                    <div>
                      <h2 className={style.whyHeadH1}>비대면 소통이 즐거워집니다.</h2>
                      <h4 className={style.whyHeadH2}>따라가기,돌아다니기,줄서기,앉기,점프 등 다양한 공간 기반의 인터렉션이 가능 합니다.</h4>
                    </div>
                    <div>
                      <img className={style.whyAd_oneImage} src="/images/whyZeap.PNG" alt="" />
                    </div>
                  </div>
                </div>
                <div className={style.whyAd_row2}>
                  <div className={style.whyAd_three}>
                    <div>
                      <h2 className={style.whyHeadH3}>최대 15만 명 동시 접속이 가능합니다</h2>
                      <h4 className={style.whyHeadH4}>500명 단위로 자동으로 채널이 나눠지며,최대 300개의 채널이 개설됩니다.</h4>
                    </div>
                    <div>
                      <img className={style.whyAd_oneImage} src="/images/whyZeapP.PNG" alt="" />
                    </div>
                  </div>
                  <div className={style.whyAd_four}>
                    <div>
                      <h2 className={style.whyHeadH3}>쉽고 가볍습니다.</h2>
                      <h4 className={style.whyHeadH4}>500명 단위로 자동으로 채널이 나눠지며,최대 300개의 채널이 개설됩니다.</h4>
                    </div>
                    <div>
                      <img className={style.whyAd_oneImage} src="/images/whyZeapUrl.PNG" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 여섯번째 div */}
          <div className={style.centerAlign_six}>
            <div className={style.mainSixBlock}>
              <div className={style.faqAd}>
                <h2 className={style.canHead}>자주 묻는 질문</h2>
                <div className={style.faqBox_one}>
                  <div className={style.faqQuestion}>Q</div>
                  <div className={style.faqQuestionTitle}>ZEP 내 동시 접속 가능 인원은 몇 명까지 가능한가요?
                    {isOpen ?
                      <p>
                        생성된 스페이스에 동시 접속 가능한 인원은 최대 15만 명입니다.
                        단, 500명이상이 접속할 경우 500명 단위로 스페이스에 채널이 나누어지게 됩니다.
                        프리미엄 스페이스 이용 시 채널 최대 인원 상향 및 하향 조정이 가능합니다.
                      </p>
                      : <p></p>
                    }
                  </div>
                  <div className={style.faqQuestionToggle} onClick={onClickToggleBtn}>
                    {isOpen ? '△' : '▽'}
                  </div>
                </div>

                {/* 두번째 */}
                <div className={style.faqBox_two}>
                  <div className={style.faqQuestion}>Q</div>
                  <div className={style.faqQuestionTitle}>ZEP은 유료인가요?
                    {isOpenTwo ?
                      <p>
                        ZEP은 2023년 7월 21일부터 최대 동시 접속자 구간에 따른 스페이스 단위의 새로운 요금제를 적용했습니다. 자세한 내용은 가격 페이지를 참고해주세요. (최대 동시 접속자 20명까지는 무료로 이용 가능합니다.)
                      </p>
                      : <p></p>
                    }
                  </div>
                  <div className={style.faqQuestionToggle} onClick={onClickToggleTwoBtn}>
                    {isOpenTwo ? '△' : '▽'}
                  </div>
                </div>

                {/* 세번째 */}
                <div className={style.faqBox_two}>
                  <div className={style.faqQuestion}>Q</div>
                  <div className={style.faqQuestionTitle}>모두 화상으로 얼굴이 보이도록 참여하게 하고 싶어요. 가능한지 궁금해요
                    {isOpenThree ?
                      <p>
                        ZEP은 현재 가까이 위치할 경우에만 영상, 음성 소통이 가능한 Spatial Video / Audio sharing 기능으로 구현되어있습니다. 만약 위치와 상관없이 영상, 음성 소통 기능을 유지하길 원하신다면, 모든 멤버에게 스포트라이트 기능을 지정해 주시면 됩니다.
                      </p>
                      : <p></p>
                    }
                  </div>
                  <div className={style.faqQuestionToggle} onClick={onClickToggleThreeBtn}>
                    {isOpenThree ? '△' : '▽'}
                  </div>
                </div>

                {/* 네번째 */}
                <div className={style.faqBox_two}>
                  <div className={style.faqQuestion}>Q</div>
                  <div className={style.faqQuestionTitle}>화면 공유 상황에서 공유자의 얼굴과 음성이 같이 나올 수 있을까요?
                    {isOpenFour ?
                      <p>
                        PC 화면과 시스템 오디오, 공유자의 오디오(마이크)/비디오(카메라)를 모두 송출할 수 있습니다.
                      </p>
                      : <p></p>
                    }
                  </div>
                  <div className={style.faqQuestionToggle} onClick={onClickToggleFourBtn}>
                    {isOpenFour ? '△' : '▽'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer>
          <div className={style.footer_left}>
              <button className={style.header_left_logo_button}>로고</button>
              <button className={style.header_left_introduce_button}>이용약관</button>
              <button className={style.header_right_where_button}>개인정보처리방침</button>
              <button className={style.header_right_what_button}>가이드</button>
          </div>
        </footer>
    </AppLayout>
  )
}

const Global = createGlobalStyle`
  .slick-slide {
    display: inline-block;
  }

  .slick-slide > div {
    margin: 0 30px;
  }

  .slick-slide > div:nth-child(1) {
    margin-left: 0;
  }

  .slick-list {
    width: 100%;
    margin-right: -30px;
  }
`;


export default Home;