import React from 'react';
import './App.css';
import Etapa1 from './pages/Etapa1';
import Etapa2 from './pages/Etapa2';
import Etapa3 from './pages/Etapa3';

class App extends React.Component {
  render() {
    return <div className="App">
      <Etapa1/>
      <Etapa2/>
      <Etapa3/>
    </div>;
  }
}

export default App;
