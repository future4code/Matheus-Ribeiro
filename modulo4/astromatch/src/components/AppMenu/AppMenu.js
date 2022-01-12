import { PeopleAltOutlined } from '@mui/icons-material'
import { Box, Icon } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'


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


const AppMenu = () => {
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
            <StyledIconProfile
            fontSize='large'
            />
          </Box>
        </StyledLink>
      </Box>
    </NavBar>
  )
}

export default AppMenu
