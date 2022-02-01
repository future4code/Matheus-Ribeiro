import React from "react";
import { useNavigate } from "react-router-dom";
import { goToListTripsPage, goToLoginPage } from "../../routes/navigation";

import {
  ButtonLarge,
  HomeButtonsContainer,
  HomeContainer,
  HomeContentContainer,
  HomeFlexContainer,
  HomeTitle,
  Span,
} from "./StyledHome";

const Home = () => {
  const navigate = useNavigate();

  return (
    <HomeFlexContainer>
      <HomeContainer>
        <HomeContentContainer>
          <HomeTitle>
            Bem-vindo a Labe<Span>X</Span>
          </HomeTitle>
          <HomeButtonsContainer>
            <ButtonLarge onClick={() => goToListTripsPage(navigate)}>
              VER VIAGENS
            </ButtonLarge>
            <ButtonLarge onClick={() => goToLoginPage(navigate)}>
              ÁREA ADMIN
            </ButtonLarge>
          </HomeButtonsContainer>
        </HomeContentContainer>
      </HomeContainer>
    </HomeFlexContainer>
  );
};

export default Home;
