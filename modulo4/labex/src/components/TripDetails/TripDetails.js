import React from "react";
import { useParams } from "react-router-dom";
import { useRequestData } from "../../hooks/useRequestData";
import CardApproved from "../CardApproved/CardApproved";
import CardCandidate from "../CardCandidate/CardCandidate";
import CardTripDetails from "../CardTripDetails/CardTripDetails";
import { Container } from "../Containers/StyledContainers";
import Loader from "../Loader/Loader";
import MainTitle from "../MainTitle/MainTitle";
import SecondaryTitle from "../SecondaryTitle/SecondaryTitle";
import {
  ApprovedCandidatesContainer,
  ApprovedCandidatesWrapper,
  DetailsContainer,
  Empty,
  TripAndCandidatesContainer,
} from "./StyledTripDetails";

const TripDetails = () => {
  const { id } = useParams();
  const [tripDetails, getTripDetails, isLoading, error] = useRequestData(
    `/trip/${id}`
  );

  return (
    <Container>
      <MainTitle text="Painel Administrativo" />
      {isLoading.isLoading && error.error && (
        <h2>Erro ao carregar os detalhes da viagem, recarregue a página</h2>
      )}
      {!isLoading.isLoading && tripDetails && tripDetails.trip ? (
        <DetailsContainer>
          <SecondaryTitle text="DETALHES DA VIAGEM" />
          <TripAndCandidatesContainer>
            {tripDetails && tripDetails.trip && (
              <CardTripDetails
                name={tripDetails.trip.name}
                description={tripDetails.trip.description}
                planet={tripDetails.trip.planet}
                duration={tripDetails.trip.durationInDays}
                date={tripDetails.trip.date}
              />
            )}
            {tripDetails && tripDetails.trip.candidates[0] ? (
              <CardCandidate
                candidate={tripDetails.trip.candidates[0]}
                getTripDetails={getTripDetails}
                tripId={id}
              />
            ) : (
              <Empty>
                <MainTitle text="CANDIDATOS PENDENTES" />
                <h2>Nenhum candidato pendente</h2>
              </Empty>
            )}
          </TripAndCandidatesContainer>
          <ApprovedCandidatesContainer>
            <h2>CANDIDATOS APROVADOS</h2>
            <ApprovedCandidatesWrapper>
              {tripDetails && tripDetails.trip.approved.length > 0 ? (
                tripDetails.trip.approved.map((approved) => {
                  return <CardApproved name={approved.name} />;
                })
              ) : (
                <Empty pad={true}>
                  <h2>Nenhum candidato aprovado</h2>
                </Empty>
              )}
            </ApprovedCandidatesWrapper>
          </ApprovedCandidatesContainer>
        </DetailsContainer>
      ) : (
        <Loader loading={isLoading.isLoading} />
      )}
    </Container>
  );
};

export default TripDetails;
