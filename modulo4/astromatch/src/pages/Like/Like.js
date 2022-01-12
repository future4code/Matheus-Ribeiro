import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Like = () => {
  const [matches, setMatches] = useState([])

  useEffect(() => {
    getMatches()
  },[])

  const getMatches = () => {
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/maths/matches")
    .then((response) => {
      setMatches(response.data.matches)
    })
    .catch((error) => {
      window.alert(error.message)
    })
  }

  const renderMatchs = matches.map((match) => {
    return <p>{match.name}</p>
  })

  return (
    <div>
      {matches && renderMatchs}
    </div>
  )
}

export default Like
