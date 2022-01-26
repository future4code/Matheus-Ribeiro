import styled from "styled-components";

export const LoginContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 400px;
  width: 360px;
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: red;
  background-color: #c5cae930;
  backdrop-filter: blur(6px);
  border-radius: 10px;
  box-shadow: 0px 1px 9px 0px rgba(0,0,0,0.40);
`

export const TextError = styled.p`
  padding: 0 14px;
  font-size: 14px;
`