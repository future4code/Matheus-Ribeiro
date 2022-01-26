import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../constants/urls';
import { ButtonsFormContainer } from '../FormApplication/StyledFormApplication';
import Button from '../Forms/Button/Button';
import Input from '../Forms/Input/Input';

import Select from '../Forms/Select/Select'
import { FormCreateTripContainer } from './StyledCreateTripForm';

const CreateTripForm = ({ form, onChange, clearForm, planets }) => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')

    const createTrip = (event) => {
        event.preventDefault()
        
        const body = form
        
        axios
            .post(`${BASE_URL}/trips`, body, {
                headers: {
                    auth: token
                }
            })
            .then((res) => {
                alert("Viagem adicionada com sucesso!")
                clearForm()
            })
            .catch((err) => alert(err.response.data.message))
    }

    return <FormCreateTripContainer onSubmit={createTrip}>
        <Input
            placeholder='Nome da viagem'
            name='name'
            value={form.name}
            onChange={onChange}
            required
        />
        <Select
            name={'planet'}
            defaultValue={''}
            onChange={onChange}
            options={planets}
            text='Selecione um planeta'
            disabled
            required
        />
        <Input
            placeholder='Data'
            name='date'
            type='date'
            value={form.date}
            onChange={onChange}
            required
        />
        <Input
            placeholder='Descrição'
            name='description'
            type='text'
            value={form.description}
            onChange={onChange}
            required
        />
        <Input
            placeholder='Duração em dias'
            name='durationInDays'
            type='number'
            value={form.durationInDays}
            onChange={onChange}
            required
        />
        <ButtonsFormContainer>
            <Button
                onClick={() => navigate("/admin/trips/list")}
                text='Voltar'
            />
            <Button
            type='submit'
                text='Enviar'
            />
        </ButtonsFormContainer>
    </FormCreateTripContainer>;
};

export default CreateTripForm;
