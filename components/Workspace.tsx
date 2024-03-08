import axios from 'axios';
import React, { Children, useCallback } from 'react';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';
import Router, {useRouter} from "next/router";

const Workspace = ({children}) => {
  const { data, error, mutate } = useSWR('http://localhost:3095/api/users', fetcher);
  
  let nextConfig = {};

  const onLogout = useCallback(() => {
    axios.post('http://localhost:3095/api/users/logout', null, {
      withCredentials: true,
    })
      .then((response) => {
        mutate();
      })
      .catch(() => {})
  }, [])

  console.log(data.email);
  console.log(data.nickname);

  if (!data) {
    Router.push('/login')
  }

  return (
    <div>
      <button onClick={onLogout}>로그아웃</button>
      {children}
    </div>
  )
}

export default Workspace;