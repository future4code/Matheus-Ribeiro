import React from 'react';
import { useParams } from 'react-router-dom';
import { useRequestData } from '../../hooks/useRequestData';
import CardCandidate from '../CardCandidate/CardCandidate';
import CardTrip from '../CardTrip/CardTrip';
import MainTitle from '../MainTitle/MainTitle';
import SecondaryTitle from '../SecondaryTitle/SecondaryTitle';
import { DetailsContainer, TripAndCandidatesContainer } from './StyledTripDetails';

const TripDetails = () => {
    const { id } = useParams()
    const [tripDetails] = useRequestData(`/trip/${id}`)

    return <div>
        <MainTitle
            text='Painel Administrativo'
        />
        <DetailsContainer>
        {tripDetails && tripDetails.trip &&
            <SecondaryTitle text={tripDetails.trip.name}
            />}
        <TripAndCandidatesContainer>
        {tripDetails && tripDetails.trip && <CardTrip
            name={tripDetails.trip.name}
            description={tripDetails.trip.description}
            planet={tripDetails.trip.planet}
            duration={tripDetails.trip.durationInDays}
            date={tripDetails.trip.date}
        />}
        {tripDetails && tripDetails.trip.candidates.map((candidate) => {
            return <CardCandidate key={candidate.id}
            candidate={candidate}
            />
        })}
        </TripAndCandidatesContainer>
        </DetailsContainer>
    </div>;
};

export default TripDetails;
