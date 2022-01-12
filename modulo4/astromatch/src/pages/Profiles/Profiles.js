import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CardProfile from '../../components/CardProfile/CardProfile'


const Profiles = () => {
  const [profile, setProfile] = useState({})

  useEffect(() =>{
    getProfile()
  }, [])

  const getProfile = () => {
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/matheus/person")
    .then((response) => {
      setProfile(response.data.profile)
    })
    .catch((error) => {
      alert(error.message)
    })
  }

  return (
    <div>
      <CardProfile profile={profile}/>
    </div>
  )
}

export default Profiles

