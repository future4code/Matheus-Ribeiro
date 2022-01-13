import styled from 'styled-components'


const StyledContainer = styled.div`
  width: 400px;
  height: 600px;
  border: 2px solid #4a148c;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgb(11 11 114 / 70%) 0px 2px 10px 0px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const ContainerApp = ({ children }) => {

  return (
    <StyledContainer >
      {children}
    </StyledContainer>
  )
}

export default ContainerApp
