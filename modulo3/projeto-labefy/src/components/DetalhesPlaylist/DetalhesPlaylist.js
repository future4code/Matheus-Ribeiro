import axios from 'axios'
import React, { Component } from 'react'
import AddTrack from '../AddTrack/AddTrack'
import { BotaoDeletar } from '../Playlists/StyledPlaylists'
import { BotaoAddTrack, ContainerNomePlaylist, ContainerTrack, NomePlaylist, Player, Track, TrackCard, Wrapper } from './StyledDetalhesPlaylist'

const URL =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

const headers = {
  headers: {
    Authorization: "matheus-ribeiro-joy",
  },
}

export default class DetalhesPlaylist extends Component {

  state = {
    tituloPlaylist: "",
    addTrack: false
  }

  componentDidMount() {
    this.props.pegarPlaylists()
    this.props.pegarTracksPlaylist()
  }

  setTitulo = () => {
    if (!this.state.tituloPlaylist) {
      this.setState({ tituloPlaylist: this.props.playlistNome })
    } 
  }

  deletarTrack = (id) => {
    if (window.confirm("Tem certeza que deseja deletar essa música?")) {
      axios.delete(`${URL}/${this.props.playlistId}/tracks/${id}`, headers)
        .then((res) => {
          alert("Música deletada com sucesso!")
          this.props.pegarTracksPlaylist(this.props.playlistId)
          this.setTitulo()
        })
        .catch((err) => {
          console.log(err.message);
        })
    }
  }

  abreAddTrack = () => {
    this.setState({addTrack: !this.state.addTrack})
  }

  render() {

    const playlistTracks = this.props.tracksPlaylist.map((track) => {
      return (
        <ContainerTrack key={track.id}>
          <TrackCard>
            <Wrapper>
              <Track>{track.name}</Track>
            </Wrapper>
            <Wrapper>
              <Track>{track.artist}</Track>
            </Wrapper>
            <Player src={track.url} controls />
            <BotaoDeletar onClick={() => this.deletarTrack(track.id)}>Deletar Música</BotaoDeletar>
          </TrackCard>
        </ContainerTrack>
      )
    })

    return (
      <div>
        <ContainerNomePlaylist>
          <NomePlaylist>{this.props.playlistNome || this.state.tituloPlaylist}</NomePlaylist>
          <BotaoAddTrack onClick={this.abreAddTrack}>Adicionar Músicas</BotaoAddTrack>
        </ContainerNomePlaylist>
        
        {this.state.addTrack && <AddTrack 
        playlistId={this.props.playlistId} 
        pegarTracksPlaylist={this.props.pegarTracksPlaylist} 
        pegarPlaylists={this.props.pegarPlaylists}
        setTitulo={this.setTitulo}
        fechaAddTrack={this.abreAddTrack}
        />}
        
        {playlistTracks.length > 0 ? playlistTracks : "Playlist vazia"}
        
      </div>
    )
  }
}
