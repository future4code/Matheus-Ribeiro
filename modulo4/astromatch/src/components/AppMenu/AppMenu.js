import React, { useContext } from 'react'
import axios from 'axios';
import { GlobalContext } from '../../GlobalContext/GlobalContext';
import { NavBar, StyledButton, StyledLink } from './StyledAppMenu';
import { Box } from '@mui/material'
import {PeopleAltOutlined, FavoriteOutlined, Delete}  from '@mui/icons-material/'

const AppMenu = () => {
  const {getMatches, getProfile} = useContext(GlobalContext)
  
  const clearMatches = () => {
    axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/maths/clear")
    .then((response) => {
      window.alert("Matches resetados")
      getMatches()
      getProfile()
    })
    .catch((error) => {
      window.alert(error.message)
    })
  }

  return (
    <NavBar>
      <Box>
        <StyledLink to="/">
          <Box>
            <PeopleAltOutlined
              fontSize='large'
            />
          </Box>
        </StyledLink>
      </Box>
      <Box >
        <StyledLink to="like">
          <Box>
            < FavoriteOutlined
              fontSize='large'
            />
          </Box>
        </StyledLink>
      </Box>
      <Box >
        <StyledButton onClick={clearMatches} >
          <Box>
            <Delete
              fontSize='large'
            />
          </Box>
        </StyledButton>
      </Box>
    </NavBar>
  )
}

export default AppMenu
