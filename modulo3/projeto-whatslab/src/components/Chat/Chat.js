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

    // messages : []
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
          <MensagensWrapper
            key={mensagem.id}
            onDoubleClick={() => this.removeMessage(mensagem.id)}
          >
            <ContainerMensagem style={{ alignSelf: 'flex-end' }}>
              <Texto>{mensagem.nome}:</Texto>
              <Texto>{mensagem.mensagem}</Texto>
            </ContainerMensagem>
          </MensagensWrapper>
        );
      } else if (mensagem.id) {
        return (
          <MensagensWrapper
            key={mensagem.id}
            onDoubleClick={() => this.removeMessage(mensagem.id)}
          >
            <ContainerMensagem style={{ backgroundColor: 'whitesmoke' }}>
              <Texto>{mensagem.nome}:</Texto>
              <Texto>{mensagem.mensagem}</Texto>
            </ContainerMensagem>
          </MensagensWrapper>
        );
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
