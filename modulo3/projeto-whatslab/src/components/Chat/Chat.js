import React from 'react';
import {
  BtnEnviar,
  FormChat,
  InputMensagem,
  InputUsuario,
  ContainerChat,
  MensagensWrapper,
  ContainerMensagem,
  Texto,
} from './ChatElements';

class Chat extends React.Component {
  state = {
    mensagens: [
      {
        id: '',
        nome: '',
        mensagem: '',
      },
    ],

    valorInputNome: '',
    valorInputMensagem: '',
  };

  sendMessage = (e) => {
    e.preventDefault();
    const novaMensagem = {
      id: Date.now(),
      nome: this.state.valorInputNome,
      mensagem: this.state.valorInputMensagem,
    };

    const novaListaMensagens = [novaMensagem, ...this.state.mensagens];

    this.setState({
      mensagens: novaListaMensagens,
      valorInputNome: '',
      valorInputMensagem: '',
    });
  };

  removeMessage = (mensagemId) => {
    if (window.confirm('Deseja deletar essa mensagem?')) {
      const novaListaMensagens = this.state.mensagens.filter((mensagem) => {
        return mensagemId !== mensagem.id;
      });
      this.setState({ mensagens: novaListaMensagens });
    }
  };

  onChangeNome = (e) => {
    this.setState({ valorInputNome: e.target.value });
  };

  onChangeMensagem = (e) => {
    this.setState({ valorInputMensagem: e.target.value });
  };

  render() {
    const componenteMensagens = this.state.mensagens.map((mensagem) => {
      if (mensagem.id && mensagem.nome.toLocaleLowerCase() === 'eu') {
        return (
          <ContainerMensagem
            style={{ alignSelf: 'flex-end' }}
            key={mensagem.id}
            onDoubleClick={() => this.removeMessage(mensagem.id)}
          >
            <Texto>{mensagem.nome}</Texto>
            <Texto>{mensagem.mensagem}</Texto>
          </ContainerMensagem>
        );
      } else if (mensagem.id) {
        return (
          <ContainerMensagem
            style={{ backgroundColor: 'whitesmoke' }}
            key={mensagem.id}
            onDoubleClick={() => this.removeMessage(mensagem.id)}
          >
            <Texto>{mensagem.nome}</Texto>
            <Texto>{mensagem.mensagem}</Texto>
          </ContainerMensagem>
        );
      }
    });

    return (
      <ContainerChat>
        <MensagensWrapper>{componenteMensagens} </MensagensWrapper>
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
