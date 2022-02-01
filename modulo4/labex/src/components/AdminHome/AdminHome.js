import axios from "axios";
import React from "react";
import CardAdminTrip from "../CardAdminTrip/CardAdminTrip";
import MainTitle from "../MainTitle/MainTitle";
import { BASE_URL } from "../../constants/urls";
import { useRequestData } from "../../hooks/useRequestData";
import { AdminCardsWrapper, TripsAdminContainer } from "./StyledAdminHome";
import SecondaryTitle from "../SecondaryTitle/SecondaryTitle";
import { useNavigate } from "react-router-dom";
import useProtectedPage from "../../hooks/useProtectedPage";
import Loader from "../Loader/Loader";
import { Container } from "../Containers/StyledContainers";

const AdminHome = () => {
  useProtectedPage();

  const navigate = useNavigate();

  const [tripsData, getData, headers, isLoading] = useRequestData(`/trips`, {});

  const deleteTrip = (id) => {
    axios
      .delete(`${BASE_URL}/trips/${id}`, headers)
      .then((res) => {
        alert("Viagem deletada com sucesso!");
        getData();
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  const renderTrips = tripsData.trips?.map((trip) => {
    return (
      <CardAdminTrip
        key={trip.id}
        name={trip.name}
        deleteTrip={deleteTrip}
        tripId={trip.id}
        goToTripDetails={() => navigate(`/admin/trips/${trip.id}`)}
      />
    );
  });

  return (
    <Container>
      <MainTitle text="Painel Administrativo" />
      {!isLoading.isLoading && tripsData.trips && tripsData.trips.length > 0 ? (
        <TripsAdminContainer>
          <SecondaryTitle text="VIAGENS" />
          <AdminCardsWrapper>{renderTrips}</AdminCardsWrapper>
        </TripsAdminContainer>
      ) : (
        <Loader loading={isLoading.isLoading} />
      )}
    </Container>
  );
};

export default AdminHome;
