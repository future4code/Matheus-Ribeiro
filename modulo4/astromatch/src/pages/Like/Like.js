import React, { useContext, useEffect } from 'react'
import CardMatches from '../../components/CardMatches/CardMatches'
import { GlobalContext } from '../../GlobalContext/GlobalContext'
import { LikePageContainer } from './StyledLikePage'

const Like = () => {
  const { matches, getMatches } = useContext(GlobalContext)

  useEffect(() => {
    getMatches()
  })

  const renderMatchs = matches.map((match) => {
    return <CardMatches
      key={match.id}
      name={match.name}
      photo={match.photo}
      age={match.age}
    />
  })

  return (
    <LikePageContainer>
      {matches && renderMatchs} 
    </LikePageContainer>
  )
}

export default Like
