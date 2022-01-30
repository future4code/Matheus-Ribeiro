import React from "react";
import {
  CardTripDetailsContainer,
  ContainerDetailsInfoTrip,
  DetailsTextInfo,
  DetailsTitleInfo,
  DetailsWrapper,
  Title,
} from "./StyledCardTripDetails";

const CardTripDetails = ({ name, description, planet, duration, date }) => {
  const cardContents = [
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
    <CardTripDetailsContainer>
      <Title>{name}</Title>
      <DetailsWrapper>
        {cardContents.map((content) => {
          return (
            <ContainerDetailsInfoTrip key={content.title}>
              <DetailsTitleInfo>
                {content.title}
                <DetailsTextInfo>{content.info}</DetailsTextInfo>
              </DetailsTitleInfo>
            </ContainerDetailsInfoTrip>
          );
        })}
      </DetailsWrapper>
    </CardTripDetailsContainer>
  );
};

export default CardTripDetails;
