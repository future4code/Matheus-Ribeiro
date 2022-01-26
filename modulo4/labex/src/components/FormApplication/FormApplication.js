import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../constants/urls';
import { goToListTripsPage } from '../../routes/navigation';
import Button from '../Forms/Button/Button';
import Input from '../Forms/Input/Input';
import Select from '../Forms/Select/Select';
import { ButtonsFormContainer, FormContainer } from './StyledFormApplication';

const FormApplication = ({ tripList, countriesList, form, onChange, clearForm }) => {
  const navigate = useNavigate()

  const applyToTrip = (event) => {
    event.preventDefault()
    const body = form
    axios
      .post(`${BASE_URL}/trips/${form.trip}/apply`, body)
      .then((res) => {
        alert("Inscrição feita com sucesso!")
      })
      .catch((err) => {
        alert(err.response.data.message)
        clearForm()
      })
  }

  return (
    <FormContainer onSubmit={applyToTrip}>
      <Select
        name='trip'
        defaultValue=''
        onChange={onChange}
        required
        options={tripList}
        text='Selecione uma viagem'
        disabled
        />
      <Input
        placeholder='Nome'
        name='name'
        type='text'
        value={form.name}
        onChange={onChange}
        required
      />
      <Input
        placeholder='Idade'
        name='age'
        type='number'
        value={form.age}
        onChange={onChange}
        required
      />
      <Input
        placeholder='Texto de inscrição'
        name='applicationText'
        type='text'
        value={form.applicationText}
        onChange={onChange}
        required
      />
      <Input
        placeholder='Profissão'
        name='profession'
        type='text'
        value={form.profession}
        onChange={onChange}
        required
      />
      <Select
        name='country'
        defaultValue=''
        options={countriesList}
        onChange={onChange}
        text='Selecione um país'
        disabled
        required
      />
      <ButtonsFormContainer>
        <Button 
        onClick={() => goToListTripsPage(navigate)}
        text='Voltar'
        />
        <Button
        type='submit'
        text='Enviar'
        />
      </ButtonsFormContainer>
    </FormContainer>
  );
};

export default FormApplication;
