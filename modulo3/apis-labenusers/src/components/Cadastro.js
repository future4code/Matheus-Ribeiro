import React from 'react';
import axios from 'axios';

export class Cadastro extends React.Component {
  state = {
    nome: '',
    email: '',
  };

  onChangeNome = (e) => {
    this.setState({ nome: e.target.value });
  };

  onChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  criarUsuario = () => {
    const URL = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users';

    const body = {
      name: this.state.nome,
      email: this.state.email,
    };

    const headers = {
      headers: { Authorization: 'matheus-ribeiro-joy' },
    };

    axios
      .post(URL, body, headers)
      .then(
        (res) => this.setState({ nome: this.state.nome, email: this.state.email }),
        console.log('sucesso'),
      )
      .catch((err) => console.log('erro'));
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Nome"
          value={this.state.nome}
          onChange={this.onChangeNome}
        />
        <input
          type="text"
          placeholder="Email"
          value={this.state.email}
          onChange={this.onChangeEmail}
        />
        <button onClick={this.criarUsuario}>Enviar</button>
      </div>
    );
  }
}

export default Cadastro;
