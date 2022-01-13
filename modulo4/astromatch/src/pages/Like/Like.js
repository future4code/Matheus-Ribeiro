import React, { useContext, useEffect} from 'react'
import { GlobalContext } from '../../GlobalContext'



const Like = () => {
  const {matches, getMatches} = useContext(GlobalContext)
  
  useEffect(() => {
    getMatches()
  }, [])

  const renderMatchs = matches.map((match) => {
    return <p key={match.id}>{match.name}</p>
  })

  return (
    <div>
      {matches && renderMatchs}
    </div>
  )
}

export default Like
