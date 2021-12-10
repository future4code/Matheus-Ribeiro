import React from 'react';
import Cadastro from './components/Cadastro';
import ListaUsuarios from './components/ListaUsuarios';

export default class App extends React.Component {
  state = {
    pagina: 'Cadastro',
  };

  mudarPagina = () => {
    if (this.state.pagina === 'Cadastro') {
      this.setState({ pagina: 'Lista Usuarios' });
    } else {
      this.setState({ pagina: 'Cadastro' });
    }
  };

  render() {
    return (
      <div>
        {this.state.pagina === 'Cadastro' ? (
          <button onClick={this.mudarPagina}>Lista Usuários</button>
        ) : (
          <button onClick={this.mudarPagina}>Cadastro</button>
        )}
        {this.state.pagina === 'Cadastro' ? <Cadastro /> : <ListaUsuarios />}
      </div>
    );
  }
}
