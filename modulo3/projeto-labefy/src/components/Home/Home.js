import axios from 'axios'
import React, { Component } from 'react'
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

  render() {
    return (
      <>
        <Header />
        <ContainerGrid>
          <MenuLateral />
          <Playlists playlists={this.state.playlists} pegarPlaylists={this.pegarPlaylists} />
        </ContainerGrid>
      </>
    )
  }
}
