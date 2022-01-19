import React from 'react'
import MenuItem from '../MenuItem/MenuItem'
import { MenuBar, NavContainer } from './StyledNavMenu'

const NavMenu = () => {
  return (
    <NavContainer>
      <MenuBar>
        <MenuItem
          menuItem="INÍCIO"
        />
        <MenuItem
          menuItem="INSCREVER-SE"
        />
        <MenuItem
          menuItem="LOGIN"
        />
      </MenuBar>
    </NavContainer>
  )
}

export default NavMenu
