import { Box } from '@mui/system'
import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  width: 400px;
  height: 600px;
  border: 2px solid #4a148c;
  border-radius: 12px;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const ContainerApp = ({ children }) => {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  )
}

export default ContainerApp
