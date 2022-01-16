import React from 'react'
import { LoadingContainer, LoadingImg, TextLoading, TextLoadingContainer } from './StyledCardLoading'

const CardLoading = ({heart, profileLoading}) => {
  return (
    <LoadingContainer>
      <TextLoadingContainer>
        <TextLoading>
          {profileLoading}
        </TextLoading>
      </TextLoadingContainer>
      <LoadingImg src={heart} />
    </LoadingContainer>
  )
}

export default CardLoading
