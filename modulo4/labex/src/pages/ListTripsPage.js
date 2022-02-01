import React from "react";
import {
  LayoutContainer,
  MainContainer,
} from "../components/Containers/StyledContainers";
import Header from "../components/Header/Header";
import ListTrips from "../components/ListTrips/ListTrips";

const ListTripsPage = () => {
  return (
    <MainContainer>
      <LayoutContainer>
        <Header />
        <ListTrips />
      </LayoutContainer>
    </MainContainer>
  );
};

export default ListTripsPage;
