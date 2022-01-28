import React from 'react';
import MainTitle from '../../components/MainTitle/MainTitle';
import CreateTripForm from '../CreateTripForm/CreateTripForm';
import SecondaryTitle from '../SecondaryTitle/SecondaryTitle';
import { ContainerCreateTrip } from './StyledCreateTrip';

const CreateTrip = () => {

    return (
        <div>
            <MainTitle
                text='Painel Administrativo'
            />
            <ContainerCreateTrip>
                <SecondaryTitle
                    text='CRIAR VIAGEM'
                />
                <CreateTripForm />
            </ContainerCreateTrip>
        </div>
    )
};

export default CreateTrip;


