
import { Avatar, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from 'react'
import styled from 'styled-components';

const StyledAppBar = styled.header`
  background-color: white;
  position: static;
  border-start-start-radius: 12px;
  border-start-end-radius: 12px;
  border-bottom: 1px solid rgb(11 11 117 / 96%);
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Logo = styled.h3`
  font-size: 1.5rem;
  font-style: oblique;
  color: #aa00ff;
  
`
const SpanLogo = styled.span`
  color: #2196f3;
`

const Header = () => {
  return (
    <StyledAppBar>
        <Box px={2} py={1}>
          <Logo>astro<SpanLogo>match</SpanLogo> 
          <FavoriteIcon sx={{
            color: "red"
            }}/>
          </Logo>
        </Box>
        <Box px={2} py={1}>
          <Avatar src='https://avatars.slack-edge.com/2019-10-08/787705854592_d4dcaa8333ccc0c25ff0_512.png'/>
        </Box>
    </StyledAppBar>
  );

};

export default Header
