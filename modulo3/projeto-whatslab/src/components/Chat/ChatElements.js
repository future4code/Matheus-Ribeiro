import styled from 'styled-components';
import bgWhats from '../../images/bg-chat.png';

export const ContainerChat = styled.div`
  height: 100%;
  min-width: 40%;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: url(${bgWhats});
`;

export const MensagensWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  background-color: transparent;
  overflow-y: auto;
  margin: 0 1.5rem;
`;

export const ContainerMensagem = styled.div`
  background-color: #dcf8c6;
  display: flex;
  flex-direction: column;
  width: fit-content;
  max-width: 60%;
  word-break: normal;
  border-radius: 10px;
  margin: 0.6rem;
  cursor: pointer;
`;

export const Texto = styled.p`
  padding: 0.3rem 0.5rem;
  font-size: 1rem;
  word-break: break-all;

  :first-of-type {
    font-weight: bold;
    padding-bottom: 0;
  }
`;

export const FormChat = styled.form`
  display: flex;
  justify-content: space-around;
  width: 100%;
  gap: 8px;
  margin-top: 1.5rem;
  margin-bottom: 0.3rem;
`;

export const InputUsuario = styled.input`
  font-size: 1rem;
  width: 100px;
  background-color: whitesmoke;
  padding: 0.6rem;
  margin-left: 8px;
  margin-bottom: 4px;
  border-radius: 4px;
  outline: none;
  border: none;
  box-shadow: 0px 0px 6px 1px #aaaaaa9d;
`;

export const InputMensagem = styled.input`
  font-size: 1rem;
  flex-grow: 1;
  padding: 0.6rem;
  background-color: whitesmoke;
  border-radius: 4px;
  margin-bottom: 4px;
  outline: none;
  border: none;
  box-shadow: 0px 0px 6px 1px #aaaaaa9d;
`;

export const BtnEnviar = styled.button`
  font-size: 1rem;
  font-weight: bold;
  padding: 0.6rem;
  background-color: #f0f0f0;
  border-radius: 4px;
  margin-right: 8px;
  margin-bottom: 4px;
  border: none;
  box-shadow: 0px 0px 6px 1px #aaaaaa9d;
`;
