import axios from 'axios'
import React, { Component } from 'react'
import CriarPlaylist from '../CriarPlaylist/CriarPlaylist'
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
    pagina: "playlists"
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

  renderizarPagina = () => {
    switch (this.state.pagina) {
      case "playlists":
        return (
          <Playlists playlists={this.state.playlists}
            pegarPlaylists={this.pegarPlaylists}
            deletarPlaylist={this.deletarPlaylists}
          />
        )
      case "criarPlaylist":
        return (
          <CriarPlaylist
            pegarPlaylists={this.pegarPlaylists}
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

  render() {
    return (
      <>
        <Header />
        <ContainerGrid>
          <MenuLateral
            paginaCriarPlaylist={this.paginaCriarPlaylist}
            paginaPlaylists={this.paginaPlaylists}
          />
          {this.renderizarPagina()}
        </ContainerGrid>
      </>
    )
  }
}
