import React, {useState, useCallback} from 'react';
import AppLayout from '../components/AppLayout';
import style from '../public/styles/Login.module.css';
import Styled from 'styled-components'
import Input from '../components/Input'
import Button from '../components/Button';
import Icon from '../components/Icon';
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Link from 'next/link';
import axios from 'axios';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';
import Router, {useRouter} from "next/router";

const logIn = () => {
  const FaceBookBacground = "linear-gradient(to right, #0546A0 0%, #663FB6 100%)"
  const TwitterBackground = "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";
  
  const router = useRouter();
  const {data, error, mutate} = useSWR('http://localhost:3095/api/users', fetcher);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [logInError, setLogInError] = useState(false);

  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, [])

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, [])

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    axios.post('http://localhost:3095/api/users/login', {
      email,
      password,
    }, {
      withCredentials: true,
    })
      .then((response) => {
        console.log(response);
        mutate();
      })
      .catch((error) => {
        console.log(error.response);
        setLogInError(error.response?.data?.statusCode === 401);
      })

  }, [email, password]);

  if (data === undefined) {
    return <div>로딩중...</div>
  }

  if (data) {
    console.log('들어왔어요!')
    router.push('/Channel')
  }
  
  return (
    <AppLayout>
      <header>
        <div className={style.header}>
          <div className={style.header_left}>
            <button className={style.header_left_logo_button}>로그
            </button>
          </div>
        </div>
      </header>

      <div className={style.centerAlign_five}>
            {/* 다섯번째 div */}
            <div className={style.mainFiveBlock}>
              <div className={style.whyAd}>
                <h2 className={style.WelcomeText}>로그인</h2>
                <div className={style.InputContainer}>
                  <input className={style.StyledInput} type="email" placeholder="Email" value={email} onChange={onChangeEmail} />
                  <input className={style.StyledInput} type="password" placeholder="Password" value={password} onChange={onChangePassword}/>
                </div>
                <div className={style.ButtonContainer}>
                  <button className={style.login_styledButton} onClick={onSubmit}>로그인</button>
                </div>
                {logInError && <h4 className={style.SignUpError}></h4>}
                <hr className={style.HorizontalRule} />
                <div className={style.IconsContainer}>
                  <Icon color={FaceBookBacground}>
                    <FaFacebookF />
                  </Icon>
                  <Icon color={TwitterBackground}>
                    <FaInstagram />
                  </Icon>
                </div>
                <h4 className={style.login_signUpButton}>
                <Link href="/signUp"><a>회원가입</a></Link>
                </h4>
            </div>
          </div>
      </div>
    </AppLayout>
  )
}


export default logIn;