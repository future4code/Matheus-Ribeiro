import styled from "styled-components";

export const ListTripsContainer = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(3, 1fr) ;
  justify-items: center;
  gap: 2rem;

  @media (max-width: 1280px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding-bottom: 1rem;
  }
`
