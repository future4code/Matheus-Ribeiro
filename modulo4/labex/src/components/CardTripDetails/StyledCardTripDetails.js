import styled from "styled-components"


export const CardTripDetailsContainer = styled.div`
  width: 400px;
  padding: 1.2rem;
  min-height: 200px;
  padding-bottom: 3rem;
  padding-top: 0.5rem;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  color: #ffffff;

  @media (max-width: 768px) {
}
`

export const Title = styled.h1`
color: #ffffff;
font-weight: 500;
font-style: italic;

@media (max-width: 768px) {
  font-size: 24px;
  margin-bottom: 1rem;
}
`

export const ContainerDetailsInfoTrip = styled.div`
  padding: 2px 0;
  width: 400px;
  display: flex;
  align-items: center;
  word-wrap: normal;

  @media (max-width: 768px) {
  width: 100%;
  padding: 2px 0;
}
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