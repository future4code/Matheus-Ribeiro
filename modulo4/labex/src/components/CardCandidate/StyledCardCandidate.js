import styled from "styled-components";

export const CardCandidateContainer = styled.div`
  width: 400px;
  padding: 20px;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  color: #ffffff;
  
  h2 {
    padding-bottom: 12px;
    margin: 0 auto;
    font-weight: 400;
  }

  @media (max-width: 768px) {
     h2 {
       font-size: 24px
     }
}
`

export const ContainerCandidateInfo = styled.div`
  padding: 2px 0;
  display: flex;
  align-items: center;
  word-wrap: normal;
`

export const TitleCandidateInfo = styled.p`
  color: #03a9f4;
  font-size: 16px;
  display: inline;
`
export const TextCandidateInfo = styled.span`
  color: #ffffff;
  font-size: 16px;
  font-style: italic;
  display: inline;
`
export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`