import axios from 'axios';
import React from 'react';

export default class ListaUsuarios extends React.Component {
  state = {
    listaUsuarios: [],
  };

  componentDidMount() {
    this.pegarUsuarios();
  }

  pegarUsuarios = () => {
    const URL = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users';

    const headers = {
      headers: {
        Authorization: 'matheus-ribeiro-joy',
      },
    };

    axios
      .get(URL, headers)
      .then((res) => this.setState({ listaUsuarios: res.data }))
      .catch((err) => console.log(err.data));
  };
  render() {
    return (
      <div>
        {this.state.listaUsuarios.length > 0 ? (
          this.state.listaUsuarios.map((usuario) => <p key={usuario.id}>{usuario.name}</p>)
        ) : (
          <p>Carregando...</p>
        )}
      </div>
    );
  }
}
