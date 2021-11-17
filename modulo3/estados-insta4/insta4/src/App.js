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
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/id/12/50/50'}
          fotoPost={'https://picsum.photos/id/30/200/150'}
        />
        <Post
          nomeUsuario={'bananinha'}
          fotoUsuario={'https://picsum.photos/id/128/50/50'}
          fotoPost={'https://picsum.photos/id/20/200/150'}
        />
        <Post
          nomeUsuario={'labenu'}
          fotoUsuario={'https://picsum.photos/id/239/50/50'}
          fotoPost={'https://picsum.photos/id/10/200/150'}
        />
      </MainContainer>
    );
  }
}

export default App;
