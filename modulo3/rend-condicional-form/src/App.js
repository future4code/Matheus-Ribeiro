import React from 'react';
import './App.css';
import Etapa1 from './pages/Etapa1';
import Etapa2 from './pages/Etapa2';
import Etapa3 from './pages/Etapa3';
import Fim from './pages/Fim';

class App extends React.Component {
  state = {
    etapa: 1,
  };

  handleProximaEtapa = () => {
    this.setState({ etapa: this.state.etapa + 1 });
  };

  handleVoltarInicio = () => {
    this.setState({ etapa: 1 });
  };

  renderizarEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Fim onClickVoltar={this.handleVoltarInicio} />;
      default:
        return <Fim onClickVoltar={this.handleVoltarInicio} />;
    }
  };

  render() {
    return (
      <div className="App">
        {this.renderizarEtapa()}
        {this.state.etapa < 4 && (
          <button onClick={this.handleProximaEtapa}>
            Ir para próxima etapa
          </button>
        )}
      </div>
    );
  }
}

export default App;
