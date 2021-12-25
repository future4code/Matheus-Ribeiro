import styled from "styled-components";

export const ContainerFlex = styled.nav`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 100px);
  background-color: #2f2f2f;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  padding-top: .3rem;
  padding-left: .3rem;
`
export const TextoMenu = styled.h4`
  cursor: pointer;
`
export const Hr = styled.hr `
  margin: 1rem 0;
  width: 90%;
  align-self: center;
`