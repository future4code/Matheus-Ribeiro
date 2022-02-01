import React from "react";
import AdminHome from "../components/AdminHome/AdminHome";
import {
  LayoutContainer,
  MainContainer,
} from "../components/Containers/StyledContainers";
import Header from "../components/Header/Header";
import useProtectedPage from "../hooks/useProtectedPage";

const AdminHomePage = () => {
  useProtectedPage();
  return (
    <MainContainer>
      <LayoutContainer>
        <Header />
        <AdminHome />
      </LayoutContainer>
    </MainContainer>
  );
};

export default AdminHomePage;
