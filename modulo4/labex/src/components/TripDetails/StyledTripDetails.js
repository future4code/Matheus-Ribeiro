import styled from "styled-components";

export const DetailsContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    align-items: center;
    padding: 2rem 0;
    background-color: #c5cae930;
    backdrop-filter: blur(6px);
    border-radius: 10px;
    box-shadow: 0px 1px 9px 0px rgba(0,0,0,0.40);

    h2 {
        font-weight: 400;
    }
    `
export const TripAndCandidatesContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
`

export const ApprovedCandidatesContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
    padding-top: 1rem;
    color: #ffffff;
`

export const ApprovedCandidatesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
`