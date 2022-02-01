import React from "react";
import { MainTitleContainer, MainTitleText } from "./StyledMainTitle";

const MainTitle = ({ text }) => {
  return (
    <MainTitleContainer>
      <MainTitleText>{text}</MainTitleText>
    </MainTitleContainer>
  );
};

export default MainTitle;
