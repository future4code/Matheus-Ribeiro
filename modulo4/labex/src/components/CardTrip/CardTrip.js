import React from "react";
import {
  CardTripContainer,
  ContainerInfoTrip,
  TextInfo,
  TitleInfo,
} from "./StyledCardTrip";

const CardTrip = ({ name, description, planet, duration, date }) => {
  const cardContents = [
    {
      title: "Nome: ",
      info: name,
    },
    {
      title: "Descrição: ",
      info: description,
    },
    {
      title: "Planeta: ",
      info: planet,
    },
    {
      title: "Duração: ",
      info: duration,
    },
    {
      title: "Data: ",
      info: date,
    },
  ];

  return (
    <CardTripContainer>
      {cardContents.map((content) => {
        return (
          <ContainerInfoTrip key={content.title}>
            <TitleInfo>
              {content.title}
              <TextInfo>{content.info}</TextInfo>
            </TitleInfo>
          </ContainerInfoTrip>
        );
      })}
    </CardTripContainer>
  );
};

export default CardTrip;
