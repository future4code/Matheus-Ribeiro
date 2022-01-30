import React from "react";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import LoginForm from "../LoginForm/LoginForm";
import SecondaryTitle from "../SecondaryTitle/SecondaryTitle";
import { LoginContainer } from "./StyledLogin";

const Login = () => {
  useUnprotectedPage();

  return (
    <LoginContainer>
      <SecondaryTitle text="LOGIN" />
      <LoginForm />
    </LoginContainer>
  );
};

export default Login;
