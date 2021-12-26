import React, { Component } from 'react'
import { HeaderContainer, Logo, Usuario } from './StyledHeader'

export default class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <Logo onClick={this.props.paginaPlaylists}>Labefy</Logo>
        <Usuario>Matheus Ribeiro</Usuario>
      </HeaderContainer>
    )
  }
}
