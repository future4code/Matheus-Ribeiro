import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Box, Button, CardActions, Typography } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';

const CardContainer = styled.div`
  max-width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const CardImg = styled.img`
  width: 100%;
  height: 400px;
  margin-top: 8px;
  box-shadow: rgb(117 117 117 / 77%) 0px 2px 10px 0px;
  border-radius: 4px;
`
const CardContent = styled.section`
  width: 100%;
  height: 100px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  bottom: 100px;
  text-shadow: 0.1em 0.1em 0.2em black;
  backdrop-filter: blur(6px) ;
`

const CardProfile = ({profile, getProfile}) => {

  const choseProfile = (chose) => {
    const body = {
      id: profile.id,
      choice: chose
    }

    axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/maths/choose-person",
      body)
      .then((response) => {
        getProfile()
        if (response.data.isMatch === true) {
          window.alert("Você deu match!")
        }
      })
      .catch((error) => {
        alert(error.message)
        getProfile()
      })
  }

  return (
    <CardContainer >
      <Box sx={{
        width: 380,
        maxWidth: 380,
        height: 480,
      }}>
        <CardImg
          src={profile.photo}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            component={"h4"}
            noWrap
            sx={{
              pl: 1,
              color: "White",
              zIndex: 2
            }}
          >
            {profile.name}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            component={"p"}
            sx={{
             pl: 1,
             color: "White"
            }}
          >
            {profile.bio}
          </Typography>
        </CardContent>
      </Box>
      <CardActions sx={{
        maxidth: 400,
        position: "relative",
        bottom: 58
      }}>
        <Button
          size="large"
          sx={{ 
            mx: 8, 
            px: 4 
          }}
          color='error'
          variant='contained'
          onClick={() => choseProfile(false)}
        >
          Dislike
        </Button>
        <Button
          endIcon={<FavoriteIcon />}
          size="large"
          sx={{ 
            mx: 8, 
            px: 4 
          }}
          color='success'
          variant='contained'
          onClick={() => choseProfile(true)}
        >
          Like
        </Button>
        
      </CardActions>
    </CardContainer>
  )
}

export default CardProfile
