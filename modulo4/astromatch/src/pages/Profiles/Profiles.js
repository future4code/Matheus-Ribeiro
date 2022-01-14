import React, { useContext } from 'react'
import { GlobalContext } from '../../GlobalContext/GlobalContext'
import CardProfile from '../../components/CardProfile/CardProfile'

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

