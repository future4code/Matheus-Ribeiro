import styled from "styled-components";

export const ContainerChat = styled.div `
  height: 100%;
  width: 40%;
  border: 2px solid;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export const FormChat = styled.form `
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
`

export const InputUsuario = styled.input `
  font-size: 1rem;
  width: 20%;
`

export const InputMensagem = styled.input `
  font-size: 1rem;
  flex-grow: 1;
`

export const BtnEnviar = styled.button `
  font-size: 1rem;
  padding: 0 0.5rem ;
`