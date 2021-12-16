import React, { Component } from 'react'
import { BotaoDeletar, CardPlaylist, ContainerPlaylist, ImagemPlaylist, PlaylistsContainer, PlaylistWrapper, TituloPlaylist } from './StyledPlaylists'

export default class Playlists extends Component {

  componentDidMount() {
    this.props.pegarPlaylists()
    this.props.pegarTracksPlaylist()
  }

  render() {
    const listaPlaylists = this.props.playlists.map((playlist) => {
      return (
        <PlaylistWrapper>
          <ContainerPlaylist onClick={() => {this.props.pegarTracksPlaylist(playlist.id)}}>
            <CardPlaylist onClick={() => this.props.paginaDetalhesPlaylist()}>
              <ImagemPlaylist src='https://picsum.photos/200/200/?a=1' alt='Imagem' />
              <TituloPlaylist>{playlist.name}</TituloPlaylist>
            </CardPlaylist>
          </ContainerPlaylist>
          <BotaoDeletar onClick={() => this.props.deletarPlaylist(playlist.id)}>Deletar Playlist</BotaoDeletar>
        </PlaylistWrapper>
      )
    })
    return (
      <div>
        <PlaylistsContainer>{listaPlaylists}</PlaylistsContainer>
      </div>
    )
  }
}
