import React from 'react'
import SecondaryTitle from '../SecondaryTitle/SecondaryTitle'
import { CardTripContainer, ContainerInfoTrip, TextInfo, TitleInfo } from './StyledCardTrip'

const CardTrip = ({ name, description, planet, duration, date, mainTitle }) => {
  const cardContents = [
    {
      title: "Nome: ",
      info: name
    },
    {
      title: "Descrição: ",
      info: description
    },
    {
      title: "Planeta: ",
      info: planet
    },
    {
      title: "Duração: ",
      info: duration
    },
    {
      title: "Data: ",
      info: date
    }
  ]

  return (
    <CardTripContainer>
      {mainTitle && <SecondaryTitle text={mainTitle}/>}
      {cardContents.map((content) => {
        return (
          <ContainerInfoTrip key={content.title}>
            <TitleInfo>
              {content.title} 
              <TextInfo>
              {content.info}
              </TextInfo>
            </TitleInfo>
          </ContainerInfoTrip>
          )
      })}
    </CardTripContainer>
  )
}

export default CardTrip
