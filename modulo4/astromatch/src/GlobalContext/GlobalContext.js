import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [profile, setProfile] = useState({})
  const [matches, setMatches] = useState([])

  useEffect(() => {
    getProfile()
  }, [])

  const getProfile = () => {
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/maths/person")
      .then((response) => {
        setProfile(response.data.profile)
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  const getMatches = () => {
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/maths/matches")
      .then((response) => {
        setMatches(response.data.matches)
      })
      .catch((error) => {
        window.alert(error.message)
      })
  }

  return <GlobalContext.Provider value={{ profile, getProfile, matches, getMatches }}>
    {children}
  </GlobalContext.Provider>
}


