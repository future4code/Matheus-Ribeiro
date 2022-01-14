import React from 'react'
import { LoadingContainer, LoadingImg, TextLoading, TextLoadingContainer } from './StyledCardLoading'

const CardLoading = ({heart}) => {
  return (
    <LoadingContainer>
      <TextLoadingContainer>
        <TextLoading>
          Ops... os profiles acabaram, clique no botão de delete para resetar.
        </TextLoading>
      </TextLoadingContainer>
      <LoadingImg src={heart} />
    </LoadingContainer>
  )
}

export default CardLoading
