import { ContainerBody, StyledContainer } from "./StyledContainerApp"

const ContainerApp = ({ children }) => {

  return (
    <ContainerBody>
      <StyledContainer >
        {children}
      </StyledContainer>
    </ContainerBody>
  )
}

export default ContainerApp
