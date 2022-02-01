import React from "react";
import {
  LayoutContainer,
  MainContainer,
} from "../components/Containers/StyledContainers";
import Header from "../components/Header/Header";
import TripDetails from "../components/TripDetails/TripDetails";
import useProtectedPage from "../hooks/useProtectedPage";

const TripDetailsPage = () => {
  useProtectedPage();

  return (
    <MainContainer>
      <LayoutContainer>
        <Header />
        <TripDetails />
      </LayoutContainer>
    </MainContainer>
  );
};

export default TripDetailsPage;
