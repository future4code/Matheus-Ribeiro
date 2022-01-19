import React from 'react'
import CardTrip from '../../components/CardTrip/CardTrip'
import Header from '../../components/Header/Header'
import MainTitle from '../../components/MainTitle/MainTitle'
import { useRequestData } from '../../hooks/useRequestData'
import { LayoutContainer } from '../Containers/StyledContainers'
import { ListTripsContainer } from './StyledListTrips'


const ListTrips = () => {
  const [tripsData] = useRequestData(`/trips`, {})

  const renderTrips = tripsData.trips && tripsData.trips.map((trip) => {
    return <CardTrip key={trip.id}
      name={trip.name}
      description={trip.description}
      planet={trip.planet}
      duration={trip.durationInDays}
      date={trip.date}
    />
  })


  return (
    <LayoutContainer>
      <Header />
      <MainTitle text="Lista de Viagens" />
      <ListTripsContainer>
        {renderTrips}
      </ListTripsContainer>
    </LayoutContainer>
  )
}

export default ListTrips
