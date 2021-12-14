import React, { Component } from 'react'
import { ContainerFlex } from './StyledMenuLateral'

export default class MenuLateral extends Component {
  render() {
    return (
      <ContainerFlex>
        <p>Busca</p>
        <p>Minhas Playlists</p>
        <p>Criar Playlist</p>
      </ContainerFlex>
    )
  }
}
