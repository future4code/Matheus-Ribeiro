import React from 'react'
import { MenuItemContainer } from './StyledMenuItem'

const MenuItem = ({ menuItem }) => {
  return (
    <MenuItemContainer>
      {menuItem}
    </MenuItemContainer>
  )
}

export default MenuItem
