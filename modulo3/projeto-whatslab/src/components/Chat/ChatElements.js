import styled from 'styled-components';

export const ContainerChat = styled.div`
  height: 100%;
  width: 40%;
  border: 2px solid;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: lightslategrey;
`;

export const MensagensWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  background-color: lightslategrey;
  overflow-y: auto;
  cursor: pointer;
`;

export const ContainerMensagem = styled.div`
  background-color: lightgreen;
  display: flex;
  width: fit-content;
  border-radius: 10px;
  margin: 10px 8px;
`;

export const Texto = styled.p`
  padding: 0.5rem 0.2rem;
  font-size: 1rem;

  :first-of-type {
    font-weight: bold;
    padding-left: 0.5rem;
  }

  :nth-child(2) {
    padding-right: 0.5rem;
  }
`;

export const FormChat = styled.form`
  display: flex;
  justify-content: space-around;
  gap: 8px;
  margin-top: 1.5rem;
`;

export const InputUsuario = styled.input`
  font-size: 1rem;
  width: 20%;
  background-color: lightyellow;
  padding: 0.4rem 0.2rem;
  margin-left: 8px;
  margin-bottom: 4px;
  border-radius: 10px;
  outline: none;
`;

export const InputMensagem = styled.input`
  font-size: 1rem;
  flex-grow: 1;
  padding: 0.4rem 0.2rem;
  background-color: lightyellow;
  border-radius: 10px;
  margin-bottom: 4px;
  outline: none;
`;

export const BtnEnviar = styled.button`
  font-size: 1rem;
  padding: 0 0.5rem;
  background-color: lightskyblue;
  border-radius: 10px;
  margin-right: 8px;
  margin-bottom: 4px;
`;
