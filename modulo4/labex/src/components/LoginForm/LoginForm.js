import useLoginForm from '../../hooks/useLoginForm';
import {ButtonsContainer, InputContainer, LoginFormContainer } from './StyledLoginForm';
import axios from 'axios';
import React from 'react';
import { BASE_URL } from '../../constants/urls';
import { useNavigate } from 'react-router-dom';
import { TextError } from '../Login/StyledLogin';
import Input from '../Forms/Input/Input';
import Button from '../Forms/Button/Button';

const LoginForm = () => {
  const email = useLoginForm()
  const password = useLoginForm()

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    email.validate()
    password.validate()

    if (email.validate() && password.validate()) {
      const body = {
        email: email.value,
        password: password.value
      }

      axios
        .post(`${BASE_URL}/login`, body)
        .then((res) => {
          localStorage.setItem('token', res.data.token)
          navigate('/admin/trips/list')
        })
        .catch((err) => {
          alert(err.response.data.message)
          email.clearForm(email)
          password.clearForm(password)
        })
    }
  }

  return (
    <LoginFormContainer onSubmit={handleSubmit}>
      <InputContainer>
        <Input
          placeholder='Email'
          name='email'
          type='email'
          value={email.value}
          onBlur={email.onBlur}
          onChange={email.onChange}
        />
        {email.error && <TextError>{email.error}</TextError>}
        <Input
          placeholder='Senha'
          name='password'
          type='password'
          value={password.value}
          onBlur={password.onBlur}
          onChange={password.onChange}
        />
        {password.error && <TextError>{password.error}</TextError>}
      </InputContainer>
      <ButtonsContainer>
        <Button
          onClick={() => navigate('/')}
          text='Voltar'
        />
        <Button
        text='Login'
        type='submit'
        />
        
      </ButtonsContainer>
    </LoginFormContainer>
  )
};

export default LoginForm;
