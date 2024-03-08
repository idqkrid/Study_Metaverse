import React from 'react';
import Card from './Card';
import Slider from 'react-slick';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';

const settings = {
  // dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
      }
    },
  ],
};

const images = [
  { img: '/images/roomFinish.PNG', category: '커뮤니티', title: '공포 폐교 방탈출', description: '사라진 선생님을 찾아가는 \n 미스터리 학교 탈출'},
  { img: '/images/mock2.png', category: '커뮤니티', title: 'Text2', description: 'Text2 입니다.'},
  { img: '/images/mock3.png', category: '커뮤니티', title: 'Text3', description: 'Text3 입니다.'},
  { img: '/images/mock4.png', category: '커뮤니티', title: 'Text4', description: 'Text4 입니다.'},
  // 추가적인 이미지 경로들을 필요에 따라 계속 추가
];

const MySlider = () => {
  return (
    <div>
      <Slider {...settings}>
        {images.map((el, index) => <Card key={index} category={el.category} img={el.img} title={el.title} des={el.description} />)}
      </Slider>
    </div>
  )
}

export default MySlider;