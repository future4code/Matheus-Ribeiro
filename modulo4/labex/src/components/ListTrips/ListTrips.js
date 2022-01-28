import React from 'react'
import CardTrip from '../../components/CardTrip/CardTrip'
import MainTitle from '../../components/MainTitle/MainTitle'
import { useRequestData } from '../../hooks/useRequestData'
import { ListTripsContainer } from './StyledListTrips'
import Loader from '../Loader/Loader'

const ListTrips = () => {
  const [tripsData, isLoading, error] = useRequestData(`/trips`, {})

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
      {!isLoading.isLoading && tripsData.trips && tripsData.trips.length > 0 ? <ListTripsContainer>
        {renderTrips}
      </ListTripsContainer> : <Loader loading={isLoading} />}
    </div>
  )
}

export default ListTrips
