import React from 'react'
import axios from 'axios'
import { CardContainer, CardImg, CardContent, Button } from './StyledCardProfile';
import { Box, CardActions, Typography } from '@mui/material'
import { ThumbUp, ThumbDown } from '@mui/icons-material/';

const CardProfile = ({ profile, getProfile }) => {

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
          window.alert(`Você e ${profile.name} deram match!`)
        }
      })
      .catch((error) => {
        alert(error.message)
        getProfile()
      })
  }

  return (
    <CardContainer>
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
              color: "white",
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
              color: "white"
            }}
          >
            {profile.bio}
          </Typography>
        </CardContent>
      </Box>
      <CardActions sx={{
        maxidth: 400,
        position: "relative",
        bottom: 80,
      }}>
        <Button
          onClick={() => choseProfile(false)}
        >
          <ThumbDown
            fontSize='large'
            sx={{
              color: "white"
            }}
          />
        </Button>
        <Button
          onClick={() => choseProfile(true)}
          like="like"
        >
          <ThumbUp
            fontSize='large'
            sx={{
              color: "white"
            }}
          />
        </Button>
      </CardActions>
    </CardContainer>
  )
}

export default CardProfile
