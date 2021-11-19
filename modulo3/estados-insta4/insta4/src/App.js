import React from 'react';
import styled from 'styled-components';
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const FormNovoPost = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  padding: 0 34px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  height: 30px;
  width: 200px;
  margin-bottom: 8px;
`;

const Botao = styled.button`
  padding: 8px;
`;

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/id/12/50/50',
        fotoPost: 'https://picsum.photos/id/30/200/150',
      },
      {
        nomeUsuario: 'bananinha',
        fotoUsuario: 'https://picsum.photos/id/128/50/50',
        fotoPost: 'https://picsum.photos/id/200/200/150',
      },
      {
        nomeUsuario: 'labenu',
        fotoUsuario: 'https://picsum.photos/id/239/50/50',
        fotoPost: 'https://picsum.photos/id/10/200/150',
      },
    ],

    valorInputUsuario: '',
    valorInputFotoUsuario: '',
    valorInputFotoPost: '',
  };

  onChangeUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value });
  };

  onChangeFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value });
  };

  adicionarPost = (event) => {
    event.preventDefault(event);

    const novoPost = {
      nomeUsuario: this.state.valorInputUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost,
    };

    const novaListaPosts = [novoPost, ...this.state.posts];

    this.setState({ posts: novaListaPosts });

    this.setState({
      valorInputUsuario: '',
      valorInputFotoUsuario: '',
      valorInputFotoPost: '',
    });
  };

  render() {
    const listaDePosts = this.state.posts.map((post) => {
      return (
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      );
    });

    return (
      <MainContainer>
        {/* Fiz desse jeito para testar se dava certo, e deu :D */}

        {/* {this.state.posts.map((post) => {
          return (
            <Post
              nomeUsuario={post.nomeUsuario}
              fotoUsuario={post.fotoUsuario}
              fotoPost={post.fotoPost}
            />
          );
        })} */}

        <FormNovoPost onSubmit={this.adicionarPost}>
          <h1>Criar novo post</h1>
          <Input
            value={this.state.valorInputUsuario}
            onChange={this.onChangeUsuario}
            placeholder="Usuario"
          />
          <Input
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeFotoUsuario}
            placeholder="URL Foto Perfil"
          />
          <Input
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeFotoPost}
            placeholder="URL Foto Post"
          />
          <Botao type="submit"> Enviar </Botao>
        </FormNovoPost>

        {listaDePosts}
      </MainContainer>
    );
  }
}

export default App;
