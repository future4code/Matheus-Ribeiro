import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import { ButtonsFormContainer } from "../FormApplication/StyledFormApplication";
import Button from "../Forms/Button/Button";
import Input from "../Forms/Input/Input";
import { planets } from "../../constants/planets";
import Select from "../Forms/Select/Select";
import { FormCreateTripContainer } from "./StyledCreateTripForm";
import { useForm } from "../../hooks/useForm";
import { goToAdminHomePage } from "../../routes/navigation";

const CreateTripForm = () => {
  const navigate = useNavigate();

  const { form, onChange, clearForm, headers } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  const createTrip = (event) => {
    event.preventDefault();
    const body = form;
    axios
      .post(`${BASE_URL}/trips`, body, headers)
      .then((res) => {
        alert("Viagem adicionada com sucesso!");
        clearForm();
      })
      .catch((err) => alert(err.response.data.message));
  };

  return (
    <FormCreateTripContainer onSubmit={createTrip}>
      <Input
        placeholder="Nome da viagem"
        name="name"
        value={form.name}
        onChange={onChange}
        required
        pattern="^.{5,}"
        title="O nome da viagem deve ter no mínimo 5 caracteres"
      />
      <Select
        name={"planet"}
        defaultValue={""}
        onChange={onChange}
        options={planets}
        text="Selecione um planeta"
        disabled
        required
      />
      <Input
        placeholder="Data"
        name="date"
        type="date"
        value={form.date}
        onChange={onChange}
        required
      />
      <Input
        placeholder="Descrição"
        name="description"
        type="text"
        value={form.description}
        onChange={onChange}
        required
        pattern="^.{30,}"
        title="O texto deve ter no mínimo 30 caracteres"
      />
      <Input
        placeholder="Duração em dias"
        name="durationInDays"
        type="number"
        value={form.durationInDays}
        onChange={onChange}
        required
      />
      <ButtonsFormContainer>
        <Button onClick={() => goToAdminHomePage(navigate)} text="Voltar" />
        <Button type="submit" text="Enviar" />
      </ButtonsFormContainer>
    </FormCreateTripContainer>
  );
};

export default CreateTripForm;
