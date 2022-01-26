import styled from "styled-components";

export const HomeFlexContainer =styled.div`
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HomeContainer = styled.div`
  width: 600px;
  height: 200px;
  display: flex;
  flex-direction: column;
`
export const HomeContentContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
export const HomeTitle = styled.p`
  color: #ffffff;
  font-size: 64px;
`
export const HomeButtonsContainer = styled.div`
  display: flex;
  width: 400px;
  justify-content: space-between;
`

export const ButtonLarge = styled.button`
  width: 160px;
  height: 40px;
  text-align: center;
  color: #ffffff;
  background: #03a9f4;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;

  &:hover, :focus {
    transition: .1s ease;
    outline: none;
    box-shadow: 0 0 0 3px  #81d4fa, 0 0 0 4px #0277bd;
  }
`

export const Span = styled.span`
  color: #03a9f4;
  text-shadow: 1px 1px 3px #0d47a1;
  font-weight: 500;
  font-style: italic;
`