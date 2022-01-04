import React, { Component } from 'react'
import axios from 'axios';
import { ContainerAddTrack, ContainerWrapper, BotaoFechar } from './StyledAddTrack';
import { CgCloseR } from 'react-icons/cg'

const URL =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

const headers = {
  headers: {
    Authorization: "matheus-ribeiro-joy",
  },
};

export default class AddTrack extends Component {
  state = {
    nome: "",
    artista: "",
    url: "",
  }

  onChangeNome = (e) => {
    this.setState({ nome: e.target.value })
  }

  onChangeArtista = (e) => {
    this.setState({ artista: e.target.value })
  }

  onChangeUrl = (e) => {
    this.setState({ url: e.target.value })
  }

  addTrackPlaylist = () => {
    const body = {
      name: this.state.nome,
      artist: this.state.artista,
      url: this.state.url
    }

    axios.post(`${URL}/${this.props.playlistId}/tracks`, body, headers)
      .then((res) => {
        alert("Musica adicionada.");
        this.setState({ nome: "", artista: "", url: "" })
        this.props.pegarTracksPlaylist(this.props.playlistId)
        this.props.setTitulo()
      })
      .catch((err) => {
        alert(err.message)
      })
  };


  render() {
    return (<ContainerWrapper>
      <h2>Adicione músicas a sua playlist</h2>
      <BotaoFechar onClick={this.props.fechaAddTrack}>
        <CgCloseR onClick={this.props.fechaAddTrack} color='blueviolet' size={20} />
      </BotaoFechar>
      <ContainerAddTrack>
        <input value={this.state.nome} placeholder='Música' onChange={this.onChangeNome} />
        <input value={this.state.artista} placeholder='Artista' onChange={this.onChangeArtista} />
        <input value={this.state.url} placeholder='url' onChange={this.onChangeUrl} />
        <button onClick={() => this.addTrackPlaylist()}>Adicionar Música</button>
      </ContainerAddTrack>
    </ContainerWrapper>

    )
  }
}
