import styled from "styled-components";

export const ContainerApplication = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 3.5rem;
  padding: 1rem 0;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
    margin-top: 0;
    min-height: 100vh;
  }
`

export const ContainerFormApplcation = styled.div`
  width: 38%;
  text-align: center;
  padding: 1.5rem 0 ;
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