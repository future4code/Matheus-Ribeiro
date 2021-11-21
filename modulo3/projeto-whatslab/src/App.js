import React from 'react';
import styled from 'styled-components';
import Chat from './components/Chat/Chat';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f0f0f0;
`;

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Chat />
      </MainContainer>
    );
  }
}

export default App;
