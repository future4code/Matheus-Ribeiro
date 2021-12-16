import React, { Component } from 'react'

export default class DetalhesPlaylist extends Component {
  render() {

    const playlistTracks = this.props.tracksPlaylist.map((track) => {
      return (
        <div>
          <p>{track.name} - {track.artist}</p>
        </div>
      )
    })

    return (
      <div>
        {playlistTracks.length > 0 ? playlistTracks : "Playlist vazia"}
      </div>
    )
  }
}
