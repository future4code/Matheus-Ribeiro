import axios from 'axios'
import React, { Component } from 'react'
import AddTrack from '../AddTrack/AddTrack'
import { BotaoDeletar } from '../Playlists/StyledPlaylists'
import { ContainerNomePlaylist, ContainerTrack, NomePlaylist, Player, Track, TrackCard } from './StyledDetalhesPlaylist'

const URL =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

const headers = {
  headers: {
    Authorization: "matheus-ribeiro-joy",
  },
}

export default class DetalhesPlaylist extends Component {
  componentDidMount() {
    this.props.pegarPlaylists()
    this.props.pegarTracksPlaylist()
  }

  deletarTrack = (id) => {
    if (window.confirm("Tem certeza que deseja deletar essa música?")) {
      axios.delete(`${URL}/${this.props.playlistId}/tracks/${id}`, headers)
      .then((res) => {
        alert("Música deletada com sucesso!")
        this.props.pegarTracksPlaylist(this.props.playlistId)
      })
      .catch((err) => {
        console.log(err.message);
      })
    }
  }

  render() {

    const playlistTracks = this.props.tracksPlaylist.map((track) => {
      return (
        <ContainerTrack key={track.id}>
          <TrackCard>
            <Track>{track.name}</Track>
            <Track>{track.artist}</Track>
            <Player src={track.url} controls />
            <BotaoDeletar onClick={() => this.deletarTrack(track.id)}>Deletar Música</BotaoDeletar>
          </TrackCard>
        </ContainerTrack>
      )
    })

    return (
      <div>
        <ContainerNomePlaylist>
          <NomePlaylist>{this.props.playlistNome}</NomePlaylist>
        </ContainerNomePlaylist>
        {playlistTracks.length > 0 ? playlistTracks : "Playlist vazia"}
        <AddTrack playlistId={this.props.playlistId} pegarTracksPlaylist={this.props.pegarTracksPlaylist} pegarPlaylists={this.props.pegarPlaylists} />
      </div>
    )
  }
}
