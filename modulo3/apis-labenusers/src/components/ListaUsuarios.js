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

  deletarUsuario = (id) => {
    const URL = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;

    const headers = {
      headers: { Authorization: 'matheus-ribeiro-joy' },
    };

    if (window.confirm('Tem certeza que deseja apagar o usuário?')) {
      axios
        .delete(URL, headers)
        .then((res) => {
          this.pegarUsuarios();
          alert('Usuário deletado com sucesso');
        })
        .catch((err) => {
          alert('Erro');
          this.pegarUsuarios();
        });
    }
  };

  render() {
    return (
      <div>
        {this.state.listaUsuarios.length > 0 ? (
          this.state.listaUsuarios.map((usuario) => (
            <p key={usuario.id}>
              {usuario.name}
              <button onClick={() => this.deletarUsuario(usuario.id)}>X</button>
            </p>
          ))
        ) : (
          <p>Carregando...</p>
        )}
      </div>
    );
  }
}
