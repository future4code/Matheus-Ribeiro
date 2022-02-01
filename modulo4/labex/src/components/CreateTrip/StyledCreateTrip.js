import styled from "styled-components";

export const ContainerCreateTrip = styled.div`
  width: 38%;
  height: 100%;
  gap: 1rem;
  padding: 1.5rem 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #c5cae930;
  backdrop-filter: blur(6px);
  border-radius: 6px;
  box-shadow: 0px 1px 9px 0px rgba(0,0,0,0.40); 

  @media (max-width: 768px) {
    width: 260px;
    margin-bottom: 2rem;
    padding: 1rem 0;
  }

  @media (min-width: 1480px) {
    width: 30%;
  }
`