import styled from "styled-components";

export const LoginFormContainer = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0 24px;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 20px;
`

export const ButtonLogin = styled.button`
  width: 100px;
  height: 36px;
  text-align: center;
  color: #ffffff;
  background: #03a9f4;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
`