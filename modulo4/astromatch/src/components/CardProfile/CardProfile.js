import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Box, CardActions, Typography } from '@mui/material'
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

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
  box-shadow: rgb(117 117 117 / 77%) 0px 4px 10px 0px;
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
const ButtonLike = styled.button`
  
  text-decoration: none;
  padding: 14px;
  margin: 0 70px;
  background-color: ${props => props.like ? "#4caf50": "#f44336"};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 20px;

  &:hover {
    transform: scale(1.1);
  }
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
          window.alert(`Você e ${profile.name} deram match!`)
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
        <ButtonLike
          onClick={() => choseProfile(false)}
        >
          <ThumbDownIcon 
          fontSize='large'
          sx={{
            color: "white"
          }}
          />
        </ButtonLike>
        <ButtonLike
          like="like"
          onClick={() => choseProfile(true)}
        >
          <ThumbUpIcon 
          fontSize='large'
          sx={{
            color: "white"
          }} 
          />
        </ButtonLike>
        
      </CardActions>
    </CardContainer>
  )
}

export default CardProfile
