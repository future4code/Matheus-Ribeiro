import styled from "styled-components"


export const CardTripDetailsContainer = styled.div`
  width: max-content;
  height: 240px;
  padding-bottom: 2.5rem;
  padding-top: 1rem;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  color: #ffffff;
  /* background-color: #c5cae930;
  backdrop-filter: blur(6px);
  border-radius: 10px;
  box-shadow: 0px 1px 9px 0px rgba(0,0,0,0.40); */
`

export const Title = styled.h1`
color: #ffffff;
`

export const ContainerDetailsInfoTrip = styled.div`
  padding: 2px 0;
  width: 320px;
  display: flex;
  align-items: center;
  word-wrap: normal;
  text-shadow: 1px 1px 1px #0d47a1;
`

export const DetailsTitleInfo = styled.p`
  color: #03a9f4;
  font-size: 16px;
  display: inline;
`
export const DetailsTextInfo = styled.span`
  color: #ffffff;
  font-size: 16px;
  font-style: italic;
  display: inline;
`

export const DetailsWrapper = styled.div`
    height: 120px;
    
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

`