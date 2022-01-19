import React from 'react'
import { CardTripContainer } from './StyledCardTrip'

const CardTrip = ({name, description, planet, duration, date}) => {
  return (
    <CardTripContainer>
      <p>Nome: {name}</p>
      <p>Descricao: {description}</p>
      <p>Planeta: {planet}</p>
      <p>Duração:{duration}</p>
      <p>Ano: {date}</p>
    </CardTripContainer>
  )
}

export default CardTrip
