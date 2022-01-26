import axios from 'axios';
import React from 'react';
import CardAdminTrip from '../CardAdminTrip/CardAdminTrip';
import MainTitle from '../MainTitle/MainTitle';
import { BASE_URL } from '../../constants/urls';
import { useRequestData } from '../../hooks/useRequestData';
import { AdminCardsWrapper, TripsAdminContainer } from './StyledAdminHome';
import SecondaryTitle from '../SecondaryTitle/SecondaryTitle';
import { useNavigate } from 'react-router-dom';
import useProtectedPage from '../../hooks/useProtectedPage';

const AdminHome = () => {
  useProtectedPage()
  
  const navigate = useNavigate()

  const [tripsData, getData, headers] = useRequestData(`/trips`, {})

  const deleteTrip = (id) => {
    axios
      .delete(`${BASE_URL}/trips/${id}`, headers)
      .then((res) => {
        alert("Viagem deletada com sucesso!")
        getData()
      })
      .catch((err) => {
        alert(err.response.data.message)
      })
  }

  const renderTrips = tripsData.trips?.map((trip) => {
    return <CardAdminTrip key={trip.id}
      name={trip.name}
      deleteTrip={deleteTrip}
      tripId={trip.id}
      goToTripDetails={() => navigate(`/admin/trips/${trip.id}`)}
    />
  })

  return (
    <div>
      <MainTitle text='Painel Administrativo' />
      <TripsAdminContainer>
        <SecondaryTitle 
        text='Viagens'
        />
        <AdminCardsWrapper>
          {renderTrips}
        </AdminCardsWrapper>
      </TripsAdminContainer>
    </div>
  );
};

export default AdminHome;
