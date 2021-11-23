import React from 'react';
import './App.css';
import Etapa1 from './pages/Etapa1';
import Etapa2 from './pages/Etapa2';
import Etapa3 from './pages/Etapa3';
import Fim from './pages/Fim';

class App extends React.Component {
  state = {
    etapa: 1
  }

  handleProximaEtapa = () => {
    this.setState({etapa: this.state.etapa + 1})
  }

  handleVoltarInicio = () => {
    this.setState({etapa: 1})
  }


  render() {
    return <div className="App">
      {this.state.etapa === 1 && <Etapa1/>}
      {this.state.etapa === 2 && <Etapa2/>}
      {this.state.etapa === 3 && <Etapa3/>}
      {this.state.etapa === 4 && <Fim onClickVoltar={this.handleVoltarInicio}/>}
      {this.state.etapa < 4 && <button onClick={this.handleProximaEtapa}>Ir para próxima etapa</button>}
    </div>;
  }
}

export default App;
