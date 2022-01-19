import React from 'react'
import ButtonLarge from '../../components/ButtonLarge/ButtonLarge'
import { HomeButtonsContainer, HomeContainer, HomeContentContainer, HomeFlexContainer, HomeTitle, Span } from './StyledHome'

const Home = () => {
  return (
    <HomeFlexContainer>
      <HomeContainer>
        <HomeContentContainer>
          <HomeTitle>
            Bem-vindo a Labe<Span>X</Span>
          </HomeTitle>
          <HomeButtonsContainer>
            <ButtonLarge text="Ver Viagens" />
            <ButtonLarge text="Área Admin" />
          </HomeButtonsContainer>
        </HomeContentContainer>
      </HomeContainer>
    </HomeFlexContainer>
  )
}

export default Home
