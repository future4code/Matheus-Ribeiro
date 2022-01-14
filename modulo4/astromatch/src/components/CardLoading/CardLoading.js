import React from 'react'
import { LoadingContainer, LoadingImg, TextLoading, TextLoadingContainer } from './StyledCardLoading'
import heart from '../../assets/heart.gif'

const CardLoading = () => {
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
