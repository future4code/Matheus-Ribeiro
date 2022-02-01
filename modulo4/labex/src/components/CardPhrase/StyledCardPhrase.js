import styled from "styled-components";

export const ContainerTextApplication = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    margin: 0;

    img {
      width: 120px;
    }
  }
`
export const TextApplicationWrapper = styled.div`
  width: 100%;
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    height: 180px;
  }
`

export const TextApplication = styled.p`
  font-size: 40px;
  color: #f8f8ff;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`