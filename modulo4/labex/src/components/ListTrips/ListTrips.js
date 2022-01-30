import React from "react";
import CardTrip from "../../components/CardTrip/CardTrip";
import { useRequestData } from "../../hooks/useRequestData";
import { ListTripsContainer } from "./StyledListTrips";
import Loader from "../Loader/Loader";
import { Container } from "../Containers/StyledContainers";
import SecondaryTitle from "../SecondaryTitle/SecondaryTitle";

const ListTrips = () => {
  const [tripsData, isLoading, error] = useRequestData(`/trips`, {});

  const renderTrips = tripsData.trips?.map((trip) => {
    return (
      <CardTrip
        key={trip.id}
        name={trip.name}
        description={trip.description}
        planet={trip.planet}
        duration={trip.durationInDays}
        date={trip.date}
      />
    );
  });

  return (
    <Container>
      <SecondaryTitle text="LISTA DE VIAGENS" titleList={true} />
      {!isLoading.isLoading && error.error && (
        <h2>Erro ao carregar a lista de viagens, recarregue a pagina</h2>
      )}
      {!isLoading.isLoading && tripsData.trips && tripsData.trips.length > 0 ? (
        <ListTripsContainer>{renderTrips}</ListTripsContainer>
      ) : (
        <Loader loading={isLoading} />
      )}
    </Container>
  );
};

export default ListTrips;
