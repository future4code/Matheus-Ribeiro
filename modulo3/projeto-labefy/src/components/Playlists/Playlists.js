import React, { Component } from 'react'

export default class Playlists extends Component {
  
  componentDidMount() {
    this.props.pegarPlaylists()
  }

  render() {
    const listaPlaylists = this.props.playlists.map((playlist) => {
      return <p>{playlist.name}</p>
    })
    return (
      <div>
       {listaPlaylists}
      </div>
    )
  }
}
