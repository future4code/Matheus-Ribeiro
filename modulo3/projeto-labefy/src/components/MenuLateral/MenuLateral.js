import React, { Component } from 'react'
import { ContainerFlex } from './StyledMenuLateral'

export default class MenuLateral extends Component {
  render() {
    return (
      <ContainerFlex>
        <p onClick={() => this.props.paginaPlaylists()}>Minhas Playlists</p>
        <p onClick={() => this.props.paginaCriarPlaylist()}>Criar Playlist</p>
      </ContainerFlex>
    )
  }
}
