import React from 'react'
import { Logo, StyledAppBar, SpanLogo } from './StyledHeader';
import { Avatar, Box } from '@mui/material'
import { Favorite } from '@mui/icons-material/'

const Header = () => {
  
  return (
    <StyledAppBar>
      <Box px={2} py={1}>
        <Logo>
          astro
          <SpanLogo>
            match
          </SpanLogo>
          <Favorite sx={{
            color: "red"
          }}
          />
        </Logo>
      </Box>
      <Box px={2} py={1}>
        <Avatar
          src='https://avatars.slack-edge.com/2019-10-08/787705854592_d4dcaa8333ccc0c25ff0_512.png'
        />
      </Box>
    </StyledAppBar>
  )
}

export default Header
