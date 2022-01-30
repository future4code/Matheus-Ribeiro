import styled from "styled-components";

export const TripsAdminContainer = styled.div`
  width: 65%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  background-color: #c5cae930;
  backdrop-filter: blur(6px);
  border-radius: 6px;
  box-shadow: 0px 1px 9px 0px rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    width: 98%;
    margin-bottom: 1rem;
  }
  
`;

export const AdminCardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 36px;
  padding-top: 1.5rem;
  width: 100%;
`;
