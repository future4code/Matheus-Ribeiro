import axios from 'axios'
import React, { Component } from 'react'
import CriarPlaylist from '../CriarPlaylist/CriarPlaylist'
import DetalhesPlaylist from '../DetalhesPlaylist/DetalhesPlaylist'
import Header from '../Header/Header'
import MenuLateral from '../MenuLateral/MenuLateral'
import Playlists from '../Playlists/Playlists'
import { ContainerGrid } from './StyledHome'

const URL =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

const headers = {
  headers: {
    Authorization: "matheus-ribeiro-joy",
  },
};

export default class Home extends Component {
  state = {
    playlists: [],
    pagina: "playlists",
    playlistId: "",
    playlistNome: "",
    tracksPlaylist: [],
  }

  componentDidMount() {
    this.pegarPlaylists()
  }

  pegarPlaylists = () => {
    axios.get(URL, headers)
      .then((res) => {
        this.setState({ playlists: res.data.result.list })
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  deletarPlaylists = (id) => {
    if (window.confirm("Tem certeza que deseja deletar essa playlist?")) {
      axios.delete(`${URL}/${id}`, headers)
        .then((res) => {
          alert("Playlist deletada com sucesso!")
          this.pegarPlaylists()
        })
        .catch((err) => {
          console.log(err.message)
        })
    }
  }

  pegarTracksPlaylist = (id, name) => {
    axios.get(`${URL}/${id}/tracks`, headers)
      .then((res) => {
        this.setState({
          tracksPlaylist: res.data.result.tracks,
          playlistNome: name,
          playlistId: id,
          pagina: this.state.pagina
        })
        console.log(this.state.tracksPlaylist)
      })
      .catch((err) => {
        console.log(err.message);
      })
  }

  renderizarPagina = () => {
    switch (this.state.pagina) {
      case "playlists":
        return (
          <Playlists playlists={this.state.playlists}
            pegarPlaylists={this.pegarPlaylists}
            deletarPlaylist={this.deletarPlaylists}
            pegarTracksPlaylist={this.pegarTracksPlaylist}
            paginaDetalhesPlaylist={this.paginaDetalhesPlaylist}
            tracksPlaylist={this.state.tracksPlaylist}
            playlistId={this.state.playlistId}
            playlistNome={this.state.playlistNome}
          />
        )
      case "criarPlaylist":
        return (
          <CriarPlaylist
            pegarPlaylists={this.pegarPlaylists}
          />
        )
      case "detalhesPlaylist":
        return (
          <DetalhesPlaylist
            pegarTracksPlaylist={this.pegarTracksPlaylist}
            pegarPlaylists={this.pegarPlaylists}
            paginaDetalhesPlaylist={this.paginaDetalhesPlaylist}
            tracksPlaylist={this.state.tracksPlaylist}
            playlistId={this.state.playlistId}
            playlistNome={this.state.playlistNome}
          />
        )
      default: return
    }
  }

  paginaCriarPlaylist = () => {
    this.setState({ pagina: "criarPlaylist" })
  }

  paginaPlaylists = () => {
    this.setState({ pagina: "playlists" })
  }

  paginaDetalhesPlaylist = () => {
    this.setState({ pagina: "detalhesPlaylist" })
  }

  render() {
    return (
      <>
        <Header paginaPlaylists={this.paginaPlaylists}/>
        <ContainerGrid>
          <MenuLateral
            paginaCriarPlaylist={this.paginaCriarPlaylist}
            paginaPlaylists={this.paginaPlaylists}
            playlists={this.state.playlists}
            pegarPlaylists={this.pegarPlaylists}
          />
          {this.renderizarPagina()}
        </ContainerGrid>
      </>
    )
  }
}
