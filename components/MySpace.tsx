import React, {useState, useCallback} from 'react';
import Card from './Card';
import Slider from 'react-slick';
import styled from 'styled-components';
import NavCategoryImage from '../components/NavCategoryImage';
import style from '../public/styles/Home.module.css';

const navItems = [
  { "name": "행사" },
  { "name": "오피스" },
  { "name": "교육" },
  { "name": "게임" }
];

const navCategoryImages = [
  { img: '/images/mock1.png', category: '행사', title: '공포 폐교 방탈출', description: '사라진 선생님을 찾아가는 \n 미스터리 학교 탈출'},
  { img: '/images/mock1.png', category: '행사', title: 'Text2', description: 'Text2 입니다.'},
  { img: '/images/mock1.png', category: '행사', title: 'Text3', description: 'Text3 입니다.' },

  { img: '/images/mock2.png', category: '오피스', title: '공포 폐교 방탈출', description: '사라진 선생님을 찾아가는 \n 미스터리 학교 탈출'},
  { img: '/images/mock2.png', category: '오피스', title: 'Text2', description: 'Text2 입니다.'},
  { img: '/images/mock2.png', category: '오피스', title: 'Text3', description: 'Text3 입니다.' },
  
  { img: '/images/mock3.png', category: '교육', title: '공포 폐교 방탈출', description: '사라진 선생님을 찾아가는 \n 미스터리 학교 탈출'},
  { img: '/images/mock3.png', category: '교육', title: 'Text2', description: 'Text2 입니다.'},
  { img: '/images/mock3.png', category: '교육', title: 'Text3', description: 'Text3 입니다.' },
  
  { img: '/images/mock4.png', category: '게임', title: '공포 폐교 방탈출', description: '사라진 선생님을 찾아가는 \n 미스터리 학교 탈출'},
  { img: '/images/mock4.png', category: '게임', title: 'Text2', description: 'Text2 입니다.'},
  { img: '/images/mock4.png', category: '게임', title: 'Text3', description: 'Text3 입니다.'},
];

const settings = {
  // dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
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

const MySpace = () => {
  const [category, setCategory] = useState('행사');

  const onClick = useCallback((e) => {
    console.log('들어왔어요!');
    console.log(e.target.textContent); // Use textContent instead of value
    setCategory(e.target.textContent);
  }, [])

  return (
    <>
      <ul className={style.NavMenu}>
        {navItems.map((el, index) => 
          <li className={style.NavMenuItem} key={index}>
            <button className={style.NavButton} onClick={onClick}>{el.name}</button>
            <span className={style.Blind}>메일</span>
          </li>
        )}
      </ul>
      <div>
      <Slider {...settings}>
      {category === '행사' ?   
          navCategoryImages
            .filter(el => el.category === '행사')
            .map((el, index) => (
              <Card key={index} category={el.category} img={el.img} title={el.title} des={el.description} />
            ))
          : category === '오피스' ?
            navCategoryImages
              .filter(el => el.category === '오피스')
              .map((el, index) => (
                <Card key={index} category={el.category} img={el.img} title={el.title} des={el.description} />
              )) 
          : category === '교육' ?
            navCategoryImages
              .filter(el => el.category === '교육')
              .map((el, index) => (
                <Card key={index} category={el.category} img={el.img} title={el.title} des={el.description} />
              )) 
          : category === '게임' ?
            navCategoryImages
              .filter(el => el.category === '게임')
              .map((el, index) => (
                <Card key={index} category={el.category} img={el.img} title={el.title} des={el.description} />
              )) 
          : <p>없습니다</p>
        }
      </Slider>
      </div>
    </>
  )
}

export default MySpace;