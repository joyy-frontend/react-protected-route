import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useSetRecoilState } from 'recoil';
import { accessTokenAtom } from '../recoil/atom';
import { useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const setAccessToken = useSetRecoilState(accessTokenAtom);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.redirectedFrom?.pathname || '/';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post('/user/login', { id: id, pw: password }).then((res) => {
      localStorage.setItem("userId", id);
      setAccessToken(res.data.accessToken);
      navigate(from);
    });
  };


  console.log(location)

  


  return (  
    <FormWrapper onSubmit={handleSubmit}>
      <InputWrapper>
        ID
        <input 
          type='text' 
          autoFocus 
          placeholder='아이디를 입력해주세요'
          onChange={(e) => {
            setId(e.target.value);
          }}  
        />
      </InputWrapper>
      <InputWrapper>
        Password
        <input 
          type='password' 
          autoFocus 
          placeholder='비밀번호를 입력해주세요'
          onChange={(e) => {
            setPassword(e.target.value);
          }}  
        />
      </InputWrapper>
      <Button type='submit'>로그인</Button>
    </FormWrapper>
  )
};

const FormWrapper = styled.form`
  border: 3px solid red;
  display: flex;
  flex-direction: column;
  padding: 56px;
  border: 1px solid #eee;
  align-items: flex-start;
  gap: 16px;
`;

const InputWrapper = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  widdth: 100%;
  & > input {
    padding: 8px 16px;
    border: 1px solid #eee;
  }
`;

const Button = styled.button`
  padding: 16px;
  width: 100%;
  background-color: #99ccff;
  color: #fff;
`;

export default Login
