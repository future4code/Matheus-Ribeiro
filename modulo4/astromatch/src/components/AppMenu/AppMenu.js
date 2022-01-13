import { PeopleAltOutlined } from '@mui/icons-material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/material'
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios';
import { GlobalContext } from '../../GlobalContext';


const StyledLink = styled(NavLink)`
  text-decoration: none;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
  }

  &.active {
    border-radius: 8px;
    background-color: #e3f2fd;
  }
`

const NavBar = styled.nav`
  background-color: white;
  border-end-end-radius: 10px;
  border-end-start-radius: 10px;
  border-top: 1px solid rgb(11 11 117 / 96%);
  padding-top: 2px;
  margin-bottom: 2px;
  position: fixed;
  width: 100%;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const StyledButton = styled.button`
  text-decoration: none;
  padding: 4px;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`

const AppMenu = () => {
  const {getMatches, getProfile} = useContext(GlobalContext)
  
  const clearMatches = () => {
    axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/maths/clear")
    .then((response) => {
      window.alert("Matches resetados")
      getMatches()
      getProfile()
    })
  }

  return (
    <NavBar>
      <Box>
        <StyledLink to="/">
          <Box>
            <PeopleAltOutlined
              fontSize='large'
              sx={{
                color: "#2196f3"
              }}
            />
          </Box>
        </StyledLink>
      </Box>
      <Box >
        <StyledLink to="like">
          <Box>
            < FavoriteIcon
              fontSize='large'
              sx={{
                color: "#2196f3"
              }}
            />
          </Box>
        </StyledLink>
      </Box>
      <Box >
        <StyledButton onClick={clearMatches} >
          <Box>
            <DeleteIcon
              fontSize='large'
              sx={{ 
                color: "#2196f3" 
              }}
            />
          </Box>
        </StyledButton>
      </Box>
    </NavBar>
  )
}

export default AppMenu
