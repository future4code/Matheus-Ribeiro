import React from 'react';
import MainTitle from '../../components/MainTitle/MainTitle';
import { planets } from '../../constants/planets';
import { useForm } from '../../hooks/useForm';
import CreateTripForm from '../CreateTripForm/CreateTripForm';
import SecondaryTitle from '../SecondaryTitle/SecondaryTitle';
import { ContainerCreateTrip } from './StyledCreateTrip';


const CreateTrip = () => {
    const [form, onChange, clearForm] = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: "",
      })

    return (
        <div>
            <MainTitle
                text='Painel Administrativo'
            />
            <ContainerCreateTrip>
                <SecondaryTitle text='Criar viagem'/>
                <CreateTripForm
                form={form}
                planets={planets}
                onChange={onChange}
                clearForm={clearForm}
                />
            </ContainerCreateTrip>
        </div>
    )
};

export default CreateTrip;


