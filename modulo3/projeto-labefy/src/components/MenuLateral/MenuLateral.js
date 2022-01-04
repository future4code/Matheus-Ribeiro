import React, { Component } from 'react'
import { Container, ContainerFlex, Hr, TextoMenu } from './StyledMenuLateral'
import { BiLibrary } from 'react-icons/bi'
import { MdOutlineLibraryAdd } from 'react-icons/md'


export default class MenuLateral extends Component {
  
  componentDidMount() {
    this.props.pegarPlaylists()
  }
  
  render() {
    
    return (
      <ContainerFlex>
        <Container onClick={() => this.props.paginaPlaylists()}>
        <BiLibrary size={28}/>
        <TextoMenu>Minhas Playlists</TextoMenu>
        </Container>
        <Container onClick={() => this.props.paginaCriarPlaylist()}>
        <MdOutlineLibraryAdd size={28}/>
        <TextoMenu>Criar Playlist</TextoMenu>
        </Container>
        <Hr/>
      </ContainerFlex>
    )
  }
}
