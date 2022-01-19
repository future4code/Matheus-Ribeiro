import React from 'react'
import { Span } from '../../layout/Home/StyledHome'
import NavMenu from '../NavMenu/NavMenu'
import { HeaderContainer, Logo } from './StyledHeader'

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Labe
        <Span>X</Span>
      </Logo>
      <NavMenu/>
    </HeaderContainer>
  )
}

export default Header
