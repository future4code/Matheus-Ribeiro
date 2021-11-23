import React, { Component } from 'react'

export class Fim extends Component {
  render() {
    return (
      <div>
        <h3>O FORMULARIO ACABOU</h3>
        <p>Obrigado por participar! Entraremos em contato!</p>
        <button onClick={this.props.onClickVoltar}>Responder novamente</button>
      </div>
    )
  }
}

export default Fim
