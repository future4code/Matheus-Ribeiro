import React from 'react';
import styled from 'styled-components';

import { IconeComContador } from '../IconeComContador/IconeComContador';
import iconeSalvoBranco from '../../img/saveBranco.svg';
import iconeSalvoBlack from '../../img/saveBlack.svg';
import iconeCoracaoBranco from '../../img/favorite-white.svg';
import iconeCoracaoPreto from '../../img/favorite.svg';
import iconeComentario from '../../img/comment_icon.svg';
import iconeCompartilhar from '../../img/sendBlack.svg';
import { SecaoComentario } from '../SecaoComentario/SecaoComentario';
import { Icone } from '../Icone/Icone';
import SecaoCompartilhar from '../SecaoCompartilhar/SecaoCompartilhar';

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`;

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`;

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`;

const PostPhoto = styled.img`
  width: 100%;
`;

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    comentario: '',
    salvo: false,
    compartilhar: false,
    textoCompartilhar: '',
  };

  onClickSalvo = () => {
    this.setState({ salvo: !this.state.salvo });
  };

  onClickCompartilhar = () => {
    this.setState({ compartilhar: !this.state.compartilhar });
  };

  onClickCurtida = () => {
    this.setState({ curtido: !this.state.curtido });
    if (!this.state.curtido) {
      this.setState({ numeroCurtidas: this.state.numeroCurtidas + 1 });
    } else {
      this.setState({ numeroCurtidas: this.state.numeroCurtidas - 1 });
    }
  };

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando,
    });
  };

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1,
    });
  };

  aoCompartilharPost = (e) => {
    this.setState({
      compartilhar: false,
      textoCompartilhar: '',
    });
    console.log(
      `Post compartilhado no ${e.target.innerText} com a mensagem: ${this.state.textoCompartilhar}`
    );
  };

  onChangeCompartilhar = (e) => {
    this.setState({
      textoCompartilhar: e.target.value,
    });
  };

  render() {
    let iconeCurtida;

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto;
    } else {
      iconeCurtida = iconeCoracaoBranco;
    }

    let iconeSalvo;

    if (this.state.salvo) {
      iconeSalvo = iconeSalvoBlack;
    } else {
      iconeSalvo = iconeSalvoBranco;
    }

    let componenteComentario;

    if (this.state.comentando) {
      componenteComentario = (
        <SecaoComentario aoEnviar={this.aoEnviarComentario} />
      );
    }

    let componenteCompartilhar;

    if (this.state.compartilhar) {
      componenteCompartilhar = (
        <SecaoCompartilhar
          onClick={this.aoCompartilharPost}
          value={this.state.textoCompartilhar}
          onChange={this.onChangeCompartilhar}
        />
      );
    }

    return (
      <PostContainer>
        <PostHeader>
          <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'} />
          <p>{this.props.nomeUsuario}</p>
        </PostHeader>

        <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'} />

        <PostFooter>
          <IconeComContador
            icone={iconeCurtida}
            onClickIcone={this.onClickCurtida}
            valorContador={this.state.numeroCurtidas}
          />

          <IconeComContador
            icone={iconeComentario}
            onClickIcone={this.onClickComentario}
            valorContador={this.state.numeroComentarios}
          />

          <Icone icone={iconeSalvo} onClickIcone={this.onClickSalvo} />

          <Icone
            icone={iconeCompartilhar}
            onClickIcone={this.onClickCompartilhar}
          />
        </PostFooter>
        {componenteComentario}
        {componenteCompartilhar}
      </PostContainer>
    );
  }
}

export default Post;
