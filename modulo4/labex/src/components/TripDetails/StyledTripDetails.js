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
  box-shadow: 0px 1px 9px 0px rgba(0, 0, 0, 0.4);

  h2 {
    font-weight: 400;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 1rem;

    h2 {
        text-align: center;
    }
  }
`;
export const TripAndCandidatesContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;

  h2 {
      color: #ffffff;
  }
`;

export const ApprovedCandidatesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  color: #ffffff;
  text-align: center;

  @media (max-width: 768px) {
  
  
  }
`;

export const ApprovedCandidatesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

export const Empty = styled.div`
text-align: center;
padding: ${({pad}) => pad ? "2.5rem" : 0};

`
