import React from 'react';
import {
  BtnEnviar,
  FormChat,
  InputMensagem,
  InputUsuario,
  ContainerChat,
} from './ChatElements';

class Chat extends React.Component {
  state = {
    mensagens: [
      {
        nome: '',
        mensagem: '',
        historico: false,
      },
    ],

    valorInputNome: '',
    valorInputMensagem: '',
  };

  sendMessage = (e) => {
    e.preventDefault();
    const novaMensagem = {
      nome: this.state.valorInputNome,
      mensagem: this.state.valorInputMensagem,
      historico: true,
    };

    const novaListaMensagens = [novaMensagem, ...this.state.mensagens];

    this.setState({
      mensagens: novaListaMensagens,
      valorInputNome: '',
      valorInputMensagem: '',
    });
  };

  onChangeNome = (e) => {
    this.setState({ valorInputNome: e.target.value });
  };

  onChangeMensagem = (e) => {
    this.setState({ valorInputMensagem: e.target.value });
  };

  render() {
    const componenteMensagens = this.state.mensagens.map((mensagem) => {
      if (mensagem.historico) {
        return (
          <p>
            {mensagem.nome} / {mensagem.mensagem}
          </p>
        );
      } else {
        return null;
      }
    });

    return (
      <ContainerChat>
        {componenteMensagens}
        <FormChat onSubmit={this.sendMessage}>
          <InputUsuario
            value={this.state.valorInputNome}
            onChange={this.onChangeNome}
            placeholder="Usuário"
          />
          <InputMensagem
            value={this.state.valorInputMensagem}
            onChange={this.onChangeMensagem}
            placeholder="Mensagem"
          />
          <BtnEnviar type="submit">Enviar</BtnEnviar>
        </FormChat>
      </ContainerChat>
    );
  }
}

export default Chat;