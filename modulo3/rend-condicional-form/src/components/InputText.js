import React, { Component } from 'react'

export class InputText extends Component {
  render() {
    return (
      <div>
        <p>{this.props.pergunta}</p>
        <input/>
        <br/>
      </div>
    )
  }
}

export default InputText
