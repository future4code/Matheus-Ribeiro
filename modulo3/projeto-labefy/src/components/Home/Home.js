import React, { Component } from 'react'
import Header from '../Header/Header'
import MenuLateral from '../MenuLateral/MenuLateral'
import Playlists from '../Playlists/Playlists'
import { ContainerGrid } from './StyledHome'

export default class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <ContainerGrid>
          <MenuLateral />
          <Playlists/>
        </ContainerGrid>
      </>
    )
  }
}
