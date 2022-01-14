import React, { useContext } from 'react'
import { GlobalContext } from '../../GlobalContext/GlobalContext'
import CardProfile from '../../components/CardProfile/CardProfile'
import CardLoading from '../../components/CardLoading/CardLoading'

const Profiles = () => {
  const { profile, getProfile } = useContext(GlobalContext)

  return (
    <div>
      {profile ? <CardProfile
        profile={profile}
        getProfile={getProfile}
      /> : <CardLoading/>}
    </div>
  )
}

export default Profiles

