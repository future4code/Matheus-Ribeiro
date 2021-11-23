import React, { Component } from 'react'

export class InputText extends Component {
  render() {
    return (
      <div>
        <p>{this.props.pergunta}</p>
        <input></input>
      </div>
    )
  }
}

export default InputText
