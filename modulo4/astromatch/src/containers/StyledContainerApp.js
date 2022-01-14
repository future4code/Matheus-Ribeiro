import styled from 'styled-components'

export const StyledContainer = styled.div`
  width: 400px;
  height: 600px;
  border: 2px solid #4a148c;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgb(12 12 112 / 70%) 0px 2px 10px 0px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const ContainerBody = styled.div`
  width: 100vw;
  height: 100vh;
  background: #f3e5f5;
  background: linear-gradient(90deg,#f3e5f5 20%, #e3f2fd 80%);
  background: -webkit-linear-gradient(90deg,#f3e5f5 20%, #e3f2fd 80%);
  background: -moz-linear-gradient(90deg,#f3e5f5 20%, #e3f2fd 80%);
`