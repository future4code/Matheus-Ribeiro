import React, { useContext } from 'react'
import { GlobalContext } from '../../GlobalContext/GlobalContext'
import CardProfile from '../../components/CardProfile/CardProfile'
import CardLoading from '../../components/CardLoading/CardLoading'
import heart from '../../assets/heart.gif'

const Profiles = () => {
  const { profile, getProfile } = useContext(GlobalContext)

  return (
    <div>
      {profile ? <CardProfile
        profile={profile}
        getProfile={getProfile}
      /> : <CardLoading heart={heart}/>}
    </div>
  )
}

export default Profiles

