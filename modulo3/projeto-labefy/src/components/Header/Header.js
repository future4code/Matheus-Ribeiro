import React, { Component } from 'react'
import { HeaderContainer, Logo } from './StyledHeader'

export default class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <Logo>Labefy</Logo>
      </HeaderContainer>
    )
  }
}
