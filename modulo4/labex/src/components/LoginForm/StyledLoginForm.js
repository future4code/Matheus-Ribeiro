import styled from "styled-components";

export const LoginFormContainer = styled.form`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 768px) {
    width: 96%;
  }
  
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
  margin: 0 2rem;
`
