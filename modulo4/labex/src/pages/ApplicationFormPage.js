import React from "react";
import ApplicationTrip from "../components/ApplicationTrip/ApplicationTrip";
import Header from "../components/Header/Header";
import {
  LayoutContainer,
  MainContainer,
} from "../components/Containers/StyledContainers";

const ApplicationFormPage = () => {
  return (
    <MainContainer>
      <LayoutContainer>
        <Header />
        <ApplicationTrip />
      </LayoutContainer>
    </MainContainer>
  );
};

export default ApplicationFormPage;
