import styled from "styled-components";

export const CardTripContainer = styled.div`
  width: max-content;
  max-height: 200px;
  padding: 20px;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  color: #ffffff;
  background-color: #03a9f430;
  backdrop-filter: blur(6px);
  border-radius: 6px;
  box-shadow: 0px 1px 9px 0px rgba(0,0,0,0.40);
`

export const ContainerInfoTrip = styled.div`
  padding: 2px 0;
  width: 320px;
  height: 200px;
  display: flex;
  align-items: center;
  word-wrap: normal;

  @media (max-width: 768px) {
    max-width: 220px;
    max-height: 220px;
  }
`

export const TitleInfo = styled.p`
  color: #03a9f4;
  font-size: 16px;
  display: inline;
`
export const TextInfo = styled.span`
  color: #ffffff;
  font-size: 16px;
  font-style: italic;
  display: inline;
`