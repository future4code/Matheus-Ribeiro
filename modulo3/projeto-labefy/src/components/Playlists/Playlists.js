import React, { Component } from 'react'
import { BotaoDeletar, CardPlaylist, ContainerPlaylist, ImagemPlaylist, PlaylistsContainer, PlaylistWrapper, TituloPlaylist } from './StyledPlaylists'

export default class Playlists extends Component {

  componentDidMount() {
    this.props.pegarPlaylists()
  }

  render() {
    const listaPlaylists = this.props.playlists.map((playlist) => {
      return (
        <PlaylistWrapper key={playlist.id}>
          <ContainerPlaylist onClick={() => {this.props.pegarTracksPlaylist(playlist.id, playlist.name)}}>
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
