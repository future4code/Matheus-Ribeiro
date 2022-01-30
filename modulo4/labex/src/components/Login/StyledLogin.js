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
  background-color: #c5cae930;
  backdrop-filter: blur(6px);
  border-radius: 6px;
  box-shadow: 0px 1px 9px 0px rgba(0,0,0,0.40);

    @media (max-width: 768px) {
    width: 260px;
    margin-bottom: 2rem;
    padding: 1rem 0;
    height: 300px;
  }
`