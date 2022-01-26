import styled from "styled-components";

export const CardTripContainer = styled.div`
  width: max-content;
  height: 200px;
  padding: 20px;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  color: #ffffff;
  background-color: #c5cae930;
  backdrop-filter: blur(4px);
  border-radius: 10px;
  box-shadow: 0px 1px 9px 0px rgba(0,0,0,0.40);
`

export const ContainerInfoTrip = styled.div`
  padding: 2px 0;
  width: 320px;
  height: 200px;
  display: flex;
  align-items: center;
  word-wrap: normal;
  text-shadow: 1px 1px 1px #0d47a1;
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