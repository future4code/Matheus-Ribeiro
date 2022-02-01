import React from "react";
import {
  SecondaryTitleContainer,
  SecondaryTitleText,
} from "./StyledSecondaryTitle";

const SecondaryTitle = ({ text, titleList }) => {
  return (
    <SecondaryTitleContainer titleList={titleList}>
      <SecondaryTitleText>{text}</SecondaryTitleText>
    </SecondaryTitleContainer>
  );
};

export default SecondaryTitle;
