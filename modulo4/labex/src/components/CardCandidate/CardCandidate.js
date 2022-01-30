import axios from "axios";
import React from "react";
import { BASE_URL } from "../../constants/urls";
import Button from "../Forms/Button/Button";
import {
  ButtonsWrapper,
  CardCandidateContainer,
  ContainerCandidateInfo,
  TextCandidateInfo,
  TitleCandidateInfo,
} from "./StyledCardCandidate";

const CardCandidate = ({ candidate, tripId, getTripDetails }) => {
  const token = localStorage.getItem("token");
  const cardContents = [
    {
      title: "Nome: ",
      info: candidate.name,
    },
    {
      title: "Profissão: ",
      info: candidate.profession,
    },
    {
      title: "Idade: ",
      info: candidate.age,
    },
    {
      title: "País: ",
      info: candidate.country,
    },
    {
      title: "Texto de candidatura: ",
      info: candidate.applicationText,
    },
  ];

  const decideCandidate = (decision) => {
    const body = {
      approve: decision,
    };

    axios
      .put(
        `${BASE_URL}/trips/${tripId}/candidates/${candidate.id}/decide`,
        body,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((res) => {
        alert("Decisão registrada com sucesso!");
        getTripDetails();
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <CardCandidateContainer>
      <h2>CANDIDATOS PENDENTES</h2>
      {cardContents.map((content) => {
        return (
          <ContainerCandidateInfo key={content.title}>
            <TitleCandidateInfo>
              {content.title}
              <TextCandidateInfo>{content.info}</TextCandidateInfo>
            </TitleCandidateInfo>
          </ContainerCandidateInfo>
        );
      })}
      <ButtonsWrapper>
        <Button text="Recusar" onClick={() => decideCandidate(false)} />
        <Button text="Aceitar" onClick={() => decideCandidate(true)} />
      </ButtonsWrapper>
    </CardCandidateContainer>
  );
};

export default CardCandidate;
