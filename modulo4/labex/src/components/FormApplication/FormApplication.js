import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import { useForm } from "../../hooks/useForm";
import { countries } from "../../constants/countries";
import { goToListTripsPage } from "../../routes/navigation";
import Button from "../Forms/Button/Button";
import Input from "../Forms/Input/Input";
import Select from "../Forms/Select/Select";
import { ButtonsFormContainer, FormContainer } from "./StyledFormApplication";
import { useRequestData } from "../../hooks/useRequestData";

const FormApplication = () => {
  const navigate = useNavigate();

  const [tripsData] = useRequestData(`/trips`, {});

  const { form, onChange, clearForm } = useForm({
    trip: "",
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });

  const applyToTrip = (event) => {
    event.preventDefault();
    const body = form;
    axios
      .post(`${BASE_URL}/trips/${form.trip}/apply`, body)
      .then((res) => {
        alert("Inscrição feita com sucesso!");
      })
      .catch((err) => {
        alert(err.response.data.message);
        clearForm();
      });
  };

  return (
    <FormContainer onSubmit={applyToTrip}>
      <Select
        name="trip"
        defaultValue=""
        onChange={onChange}
        required
        options={tripsData.trips}
        text="Selecione uma viagem"
        disabled
      />
      <Input
        placeholder="Nome"
        name="name"
        type="text"
        value={form.name}
        onChange={onChange}
        required
        pattern="^.{3,}"
        title="O nome deve ter no mínimo 3 caracteres"
      />
      <Input
        placeholder="Idade"
        name="age"
        type="number"
        min={18}
        value={form.age}
        onChange={onChange}
        required
      />
      <Input
        placeholder="Texto de inscrição"
        name="applicationText"
        type="text"
        value={form.applicationText}
        onChange={onChange}
        required
        pattern="^.{30,}"
        title="O texto deve ter no mínimo 30 caracteres"
      />
      <Input
        placeholder="Profissão"
        name="profession"
        type="text"
        value={form.profession}
        onChange={onChange}
        required
        pattern="^.{8,}"
        title="A profissão deve ter no mínimo 8 caracteres"
      />
      <Select
        name="country"
        defaultValue=""
        options={countries}
        onChange={onChange}
        text="Selecione um país"
        disabled
        required
      />
      <ButtonsFormContainer>
        <Button onClick={() => goToListTripsPage(navigate)} text="Voltar" />
        <Button type="submit" text="Enviar" />
      </ButtonsFormContainer>
    </FormContainer>
  );
};

export default FormApplication;
