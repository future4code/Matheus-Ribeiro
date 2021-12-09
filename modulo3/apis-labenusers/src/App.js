import React from 'react';
import Cadastro from './components/Cadastro';
import ListaUsuarios from './components/ListaUsuarios';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Cadastro />
        <ListaUsuarios/>
      </div>
    );
  }
}
