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
  height: 380px;
  margin-top: 8px;
  box-shadow: rgb(117 117 117 / 77%) 0px 2px 10px 0px;
  border-radius: 4px;
`
const CardContent = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CardProfile = ({ profile }) => {
  return (
    <CardContainer sx={{ position: "absolute" }}>
      <Box sx={{ maxWidth: 380, position: "relative" }}>
        <CardImg src={profile.photo} />
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          sx={{ position: "relative", bottom: 100, left: 10, color: "white" }}
        >
          {profile.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ position: "relative", bottom: 100, left: 10, color: "white" }}
        >
          {profile.bio}
        </Typography>
      </Box>
      <CardActions sx={{ position: "relative", bottom: 58, width: 400 }}>
        <Button
          endIcon={<FavoriteIcon/>}
          size="large"
          sx={{ mx: 8, px: 4 }}
          color='success'
          variant='contained'
        >
          Like
        </Button>
        <Button
          size="large"
          sx={{ mx: 8, px: 4 }}
          color='error'
          variant='contained'
        >
          Dislike
        </Button>
      </CardActions>
    </CardContainer>
  )
}

export default CardProfile
