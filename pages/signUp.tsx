import React, {useCallback, useState} from 'react';
import AppLayout from '../components/AppLayout';
import style from '../public/styles/SignUp.module.css';
import Input from '../components/Input'
import Button from '../components/Button';
import Icon from '../components/Icon';
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Link from 'next/link';
import axios from 'axios';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';
import Router, {useRouter} from "next/router";

const signUp = () => {
  const {data, error, mutate} = useSWR('http://localhost:3095/api/users', fetcher);

  const router = useRouter();
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [mismatchError, setMismatchError] = useState(false);
  const [signUpError, setSignUpError] = useState('');
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, [])

  const onChangeNickname = useCallback((e) => {
    setNickname(e.target.value);
  }, [])

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
    setMismatchError(e.target.value !== passwordCheck)
  }, [passwordCheck])

  const onChangePasswordCheck = useCallback((e) => {
    setPasswordCheck(e.target.value);
    setMismatchError(e.target.value !== password)
  }, [password])

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    if (!mismatchError) {
      console.log('서버로 회원가입하기');
      setSignUpError('');
      setSignUpSuccess(false);

      axios.post('http://localhost:3095/api/users', {
        email,
        nickname,
        password,
      })
        .then((response) => {
          console.log(response);
          setSignUpSuccess(true);
          mutate();
        })
        .catch((error) => {
          console.log(error.response);
          setSignUpError(error.response.data);
        })
    }

  }, [email, nickname, password, passwordCheck])

  if (data === undefined) {
    return <div>로딩중...</div>
  }

  if (data) {
    console.log('들어왔어요!')
    router.push('/Channel')
  }

  const FaceBookBacground = "linear-gradient(to right, #0546A0 0%, #663FB6 100%)"
  const TwitterBackground = "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";
  return (
    <AppLayout>
      <header>
        <div className={style.header}>
          <div className={style.header_left}>
            <button className={style.header_left_logo_button}>로고</button>
          </div>
        </div>
      </header>

      <div className={style.centerAlign_five}>
            {/* 다섯번째 div */}
            <div className={style.mainFiveBlock}>
          <div className={style.whyAd}>
              <h2 className={style.WelcomeText}>회원가입</h2>
                <div className={style.InputContainer}>
                <input className={style.StyledInput} type="email" placeholder="Email" value={email} onChange={onChangeEmail} />
                <input className={style.StyledInput} type="text" placeholder="nickName" value={nickname} onChange={onChangeNickname}/>
                <input className={style.StyledInput} type="password" placeholder="Password" value={password} onChange={onChangePassword}/>
                <input className={style.StyledInput} type="password" placeholder="PasswordCheck" value={passwordCheck} onChange={onChangePasswordCheck}/>
                </div>
                <div className={style.ButtonContainer}>
                  <button className={style.login_styledButton} onClick={onSubmit}>회원가입</button>
                </div>
                {mismatchError && <h4 className={style.SignUpError}>비밀번호가 일치하지 않습니다.</h4>}
                {!nickname && <h4 className={style.SignUpError}>닉네임을 입력해주세요.</h4>}
                {signUpError && <h4 className={style.SignUpError}>{signUpError}</h4>}
                {signUpSuccess && <h4 className={style.SignSuccess}>회원가입되었습니다! 로그인해주세요.</h4>}
                
                <div className={style.IconsContainer}>
                  <Icon color={FaceBookBacground}>
                    <FaFacebookF />
                  </Icon>
                  <Icon color={TwitterBackground}>
                    <FaInstagram />
                  </Icon>
                </div>
                <h4 className={style.login_signUpButton}>
                <Link href="/login"><a>로그인</a></Link>
                </h4>
            </div>
          </div>
      </div>
    </AppLayout>
  )
}

export default signUp;