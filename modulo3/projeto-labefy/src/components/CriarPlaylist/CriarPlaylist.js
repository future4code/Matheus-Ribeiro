import React, { Component } from 'react'
import axios from 'axios'

const URL =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

const headers = {
  headers: {
    Authorization: "matheus-ribeiro-joy",
  },
};

export default class CriarPlaylist extends Component {
  state = {
    playlist: ""
  }

  onChangePlaylist = (e) => {
    this.setState({ playlist: e.target.value })
  }

  criarPlaylist = () => {
    const body = { name: this.state.playlist }
    axios.post(URL, body, headers)
      .then((res) => {
        alert(`Playlist ${this.state.playlist} criada com sucesso!`)
        this.setState({playlist: ""})
        this.props.pegarPlaylists(this.props.playlistId)
      })
      .catch((err) => {
        if (err.message === "Request failed with status code 400")
        alert("Nome de playlist já existente, tente outro nome.")
      })
  }

  render() {
    return (
      <div>
        <h2>Crie uma nova playlist</h2>
        <input placeholder='Minha Playlist' value={this.state.playlist} onChange={this.onChangePlaylist} />
        <button onClick={this.criarPlaylist}>Criar Playlist</button>
      </div>
    )
  }
}
