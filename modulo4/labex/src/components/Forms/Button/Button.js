import React from "react";
import { ButtonForms } from "./StyledButton";

const Button = ({ onClick, text }) => {
  return <ButtonForms onClick={onClick}>{text}</ButtonForms>;
};

export default Button;
