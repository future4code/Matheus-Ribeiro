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
  position: relative;

  &:before{
    content: '';
    position: absolute;
    border: 1px solid #4a148c;
    border-radius: 4px;
    top: 1px;
    bottom: 1px;
    left: 1px;
    right: 1px;
    opacity: 0;
    transition: 0.3s;
  }

  &:hover:before {
    opacity: 1;
  }

  &.active {
    border-radius: 4px;
    background-color: #f3e5f5;
  }
`
const StyledIconProfile = styled(PeopleAltOutlined)`
  color: #6a1b9a;
`

const NavBar = styled.nav`
  background-color: white;
  border-end-end-radius: 10px;
  border-end-start-radius: 10px;
  border-top: 2px solid #4a148c;
  position: absolute;
  width: 100%;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const StyledButton = styled.button`
  text-decoration: none;
  padding: 4px;
  background-color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;

  &:before{
    content: '';
    position: absolute;
    border: 1px solid #4a148c;
    border-radius: 4px;
    top: 1px;
    bottom: 1px;
    left: 1px;
    right: 1px;
    opacity: 0;
    transition: 0.3s;
  }

  &:hover:before {
    opacity: 1;
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
            <StyledIconProfile
              fontSize='large'
            />
          </Box>
        </StyledLink>
      </Box>
      <Box >
        <StyledLink to="like">
          <Box>
            < FavoriteIcon
              fontSize='large'
              sx={{color: "#6a1b9a"}}
            />
          </Box>
        </StyledLink>
      </Box>
      <Box >
        <StyledButton onClick={clearMatches} >
          <Box>
            <DeleteIcon
              fontSize='large'
              sx={{ color: "#6a1b9a" }}
            />
          </Box>
        </StyledButton>
      </Box>
    </NavBar>
  )
}

export default AppMenu
