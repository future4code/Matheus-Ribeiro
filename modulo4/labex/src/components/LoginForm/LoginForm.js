import {
  ButtonsContainer,
  InputContainer,
  LoginFormContainer,
} from "./StyledLoginForm";
import axios from "axios";
import React from "react";
import { BASE_URL } from "../../constants/urls";
import { useNavigate } from "react-router-dom";
import Input from "../Forms/Input/Input";
import Button from "../Forms/Button/Button";
import { goToAdminHomePage, goToHomePage } from "../../routes/navigation";
import { useForm } from "../../hooks/useForm";

const LoginForm = () => {
  const { form, onChange, clearForm } = useForm({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = form;

    axios
      .post(`${BASE_URL}/login`, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        goToAdminHomePage(navigate);
      })
      .catch((err) => {
        alert(err.response.data.message);
        clearForm();
      });
  };

  return (
    <LoginFormContainer onSubmit={handleSubmit}>
      <InputContainer>
        <Input
          placeholder="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={onChange}
        />
        <Input
          placeholder="Senha"
          name="password"
          type="password"
          value={form.password}
          onChange={onChange}
        />
      </InputContainer>
      <ButtonsContainer>
        <Button onClick={() => goToHomePage(navigate)} text="Voltar" />
        <Button text="Login" type="submit" />
      </ButtonsContainer>
    </LoginFormContainer>
  );
};

export default LoginForm;
