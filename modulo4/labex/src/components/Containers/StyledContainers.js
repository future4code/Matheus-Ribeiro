import styled from "styled-components";
import Background2 from '../../assets/background2.png'

export const MainContainer = styled.div`
  background-image: url(${Background2});
  background-color: #020101;
  background-size: cover;
  min-height: 100vh;
  max-width: 100vw;

`
export const LayoutContainer = styled.div`
  width: 80%;
  min-height: 100vh;
  margin: 0 auto;
  background: transparent;
`

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`