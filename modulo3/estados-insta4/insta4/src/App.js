import React from 'react';
import styled from 'styled-components';
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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

        {listaDePosts}
      </MainContainer>
    );
  }
}

export default App;
