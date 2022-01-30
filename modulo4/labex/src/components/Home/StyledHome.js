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

  @media (max-width: 768px) {
    width: 320px;
   
    text-align: center;
  }
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
  color: #f8f8ff;
  font-size: 64px;

  @media (max-width: 768px) {
    font-size: 44px;
  }
`
export const HomeButtonsContainer = styled.div`
  display: flex;
  width: 400px;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 220px;
  }
`

export const ButtonLarge = styled.button`
  width: 160px;
  height: 40px;
  text-align: center;
  color: #ffffff;
  background: #03a9f4;
  border-radius: 6px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;

  @media (max-width: 768px) {
    width: 100px;
    font-size: 12px;
  }

  &:hover, :focus {
    transition: .1s ease;
    outline: none;
    box-shadow: 0 0 0 3px  #81d4fa, 0 0 0 4px #0277bd;
  }
`

export const Span = styled.span`
  color: #03a9f4;
  font-weight: 500;
  font-style: italic;
`