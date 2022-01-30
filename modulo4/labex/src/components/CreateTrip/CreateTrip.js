import React from "react";
import MainTitle from "../../components/MainTitle/MainTitle";
import { Container } from "../Containers/StyledContainers";
import CreateTripForm from "../CreateTripForm/CreateTripForm";
import SecondaryTitle from "../SecondaryTitle/SecondaryTitle";
import { ContainerCreateTrip } from "./StyledCreateTrip";

const CreateTrip = () => {
  return (
    <Container>
      <MainTitle text="Painel Administrativo" />
      <ContainerCreateTrip>
        <SecondaryTitle text="CRIAR VIAGEM" />
        <CreateTripForm />
      </ContainerCreateTrip>
    </Container>
  );
};

export default CreateTrip;
