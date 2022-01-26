import styled from "styled-components";

export const CardCandidateContainer = styled.div`
  width: max-content;
  height: max-content;
  padding: 20px;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  color: #ffffff;
  /* background-color: #c5cae930;
  backdrop-filter: blur(6px);
  border-radius: 10px;
  box-shadow: 0px 1px 9px 0px rgba(0,0,0,0.40); */
  
  h2 {
    padding-bottom: 12px;
    margin: 0 auto;
  }
`

export const ContainerCandidateInfo = styled.div`
  padding: 2px 0;
  display: flex;
  align-items: center;
  word-wrap: normal;
  text-shadow: 1px 1px 1px #0d47a1;
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