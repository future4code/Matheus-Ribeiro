import React from 'react'
import CardTrip from '../../components/CardTrip/CardTrip'
import MainTitle from '../../components/MainTitle/MainTitle'
import { useRequestData } from '../../hooks/useRequestData'
import { ListTripsContainer } from './StyledListTrips'


const ListTrips = () => {
  const [tripsData] = useRequestData(`/trips`, {})

  const renderTrips = tripsData.trips?.map((trip) => {
    return <CardTrip key={trip.id}
      name={trip.name}
      description={trip.description}
      planet={trip.planet}
      duration={trip.durationInDays}
      date={trip.date}
    />
  })

  return (
    <div>
      <MainTitle text="Lista de Viagens" />
      <ListTripsContainer>
        {renderTrips}
      </ListTripsContainer>
    </div>
  )
}

export default ListTrips
