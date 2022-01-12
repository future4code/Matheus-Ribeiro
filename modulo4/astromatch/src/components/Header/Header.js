
import { Avatar, Box, Container } from '@mui/material';
import React from 'react'
import styled from 'styled-components';

const StyledAppBar = styled.header`
  background-color: white;
  position: static;
  border-start-start-radius: 12px;
  border-start-end-radius: 12px;
  border-bottom: 2px solid #4a148c;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Logo = styled.h3`
  font-size: 1.3rem;
  font-style: oblique;
  color: #aa00ff;
  text-decoration: underline;
`
const SpanLogo = styled.span`
  color: #2196f3;
`

const Header = () => {
  return (
    <StyledAppBar>
        <Box px={2} py={1}>
          <Logo>astro<SpanLogo>match</SpanLogo></Logo>
        </Box>
        <Box px={2} py={1}>
          <Avatar src='https://avatars.slack-edge.com/2019-10-08/787705854592_d4dcaa8333ccc0c25ff0_512.png'/>
        </Box>
    </StyledAppBar>
  );

};

export default Header
