import React from "react";
import {
  LayoutContainer,
  MainContainer,
} from "../components/Containers/StyledContainers";
import Header from "../components/Header/Header";
import Login from "../components/Login/Login";

const LoginPage = () => {
  return (
    <MainContainer>
      <LayoutContainer>
        <Header />
        <Login />
      </LayoutContainer>
    </MainContainer>
  );
};

export default LoginPage;
