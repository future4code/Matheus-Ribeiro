import React, { Component } from 'react';

export class InputSelect extends Component {
  render() {
    return (
      <div>
        <p>{this.props.pergunta}</p>
        <select>
          <option>{this.props.selecao[0]}</option>
          <option>{this.props.selecao[1]}</option>
          <option>{this.props.selecao[2]}</option>
          <option>{this.props.selecao[3]}</option>
        </select>
      </div>
    );
  }
}

export default InputSelect;
