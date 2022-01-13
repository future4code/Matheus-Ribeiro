import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import CardMatches from '../../components/CardMatches/CardMatches'
import { GlobalContext } from '../../GlobalContext'

const LikePageContainer = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  height: 488px;
`

const Like = () => {
  const { matches, getMatches } = useContext(GlobalContext)

  useEffect(() => {
    getMatches()
  }, [])

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
