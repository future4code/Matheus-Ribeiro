import React from 'react'
import { CardCandidateContainer, ContainerCandidateInfo, TextCandidateInfo, TitleCandidateInfo } from './StyledCardCandidate'


const CardCandidate = ({ candidate }) => {
  const cardContents = [
    {
      title: "Nome: ",
      info: candidate.name
    },
    {
      title: "Profissão: ",
      info: candidate.profession
    },
    {
      title: "Idade: ",
      info: candidate.age
    },
    {
      title: "País: ",
      info: candidate.country
    },
    {
      title: "Texto de candidatura: ",
      info: candidate.applicationText
    }
  ]

  return (
    <CardCandidateContainer>
      {cardContents.map((content) => {
        return (
          <ContainerCandidateInfo key={content.title}>
            <TitleCandidateInfo>
              {content.title} 
              <TextCandidateInfo>
              {content.info}
              </TextCandidateInfo>
            </TitleCandidateInfo>
          </ContainerCandidateInfo>
          )
      })}
    </CardCandidateContainer>
  )
}

export default CardCandidate