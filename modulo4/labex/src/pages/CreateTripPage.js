import React from "react";
import {
  LayoutContainer,
  MainContainer,
} from "../components/Containers/StyledContainers";
import CreateTrip from "../components/CreateTrip/CreateTrip";
import Header from "../components/Header/Header";
import useProtectedPage from "../hooks/useProtectedPage";

const CreateTripPage = () => {
  useProtectedPage();

  return (
    <MainContainer>
      <LayoutContainer>
        <Header />
        <CreateTrip />
      </LayoutContainer>
    </MainContainer>
  );
};

export default CreateTripPage;
