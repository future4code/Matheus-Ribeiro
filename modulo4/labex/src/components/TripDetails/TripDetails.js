import React from 'react';
import { useParams } from 'react-router-dom';
import { useRequestData } from '../../hooks/useRequestData';
import CardApproved from '../CardApproved/CardApproved';
import CardCandidate from '../CardCandidate/CardCandidate';
import CardTripDetails from '../CardTripDetails/CardTripDetails';
import Loader from '../Loader/Loader';
import MainTitle from '../MainTitle/MainTitle';
import SecondaryTitle from '../SecondaryTitle/SecondaryTitle';
import { ApprovedCandidatesContainer, ApprovedCandidatesWrapper, DetailsContainer, TripAndCandidatesContainer } from './StyledTripDetails';

const TripDetails = () => {
    const { id } = useParams()
    const [tripDetails, getTripDetails, isLoading, error] = useRequestData(`/trip/${id}`)
    console.log(tripDetails);

    return <div>
        <MainTitle
            text='Painel Administrativo'
        />
        {!isLoading.isLoading && tripDetails && tripDetails.trip ?
            <DetailsContainer>
                {tripDetails && tripDetails.trip &&
                    <SecondaryTitle text='DETALHES DA VIAGEM'
                    />}
                <TripAndCandidatesContainer>
                    {tripDetails && tripDetails.trip && <CardTripDetails
                        name={tripDetails.trip.name}
                        description={tripDetails.trip.description}
                        planet={tripDetails.trip.planet}
                        duration={tripDetails.trip.durationInDays}
                        date={tripDetails.trip.date}
                    />}
                    {tripDetails && tripDetails.trip.candidates[0] &&
                        <CardCandidate
                            candidate={tripDetails.trip.candidates[0]}
                            getTripDetails={getTripDetails}
                            tripId={id}
                        />
                    }
                </TripAndCandidatesContainer>
                <ApprovedCandidatesContainer>
                    <h2>CANDIDATOS APROVADOS</h2>
                    <ApprovedCandidatesWrapper>
                        {tripDetails && tripDetails.trip.approved.map((approved) => {
                            return <CardApproved name={approved.name} />
                        })}
                    </ApprovedCandidatesWrapper>
                </ApprovedCandidatesContainer>
            </DetailsContainer>
            :
            <Loader 
            loading={isLoading.isLoading} 
            />
        }
    </div>;
};

export default TripDetails;
