import styled from "styled-components";
import Background from "../../assets/background.png"

export const MainContainer = styled.div`
  background-image: url(${Background});
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
