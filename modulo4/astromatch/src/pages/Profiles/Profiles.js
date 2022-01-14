import React, { useContext } from 'react'
import CardProfile from '../../components/CardProfile/CardProfile'
import { GlobalContext } from '../../GlobalContext/GlobalContext'


const Profiles = () => {
  const { profile, getProfile } = useContext(GlobalContext)

  return (
    <div>
      {profile && <CardProfile
        profile={profile}
        getProfile={getProfile}
      />}
    </div>
  )
}

export default Profiles

