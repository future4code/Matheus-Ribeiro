import React, { Component } from 'react';

export class InputSelect extends Component {
  render() {
    return (
      <div>
        <p>{this.props.pergunta}</p>
        <select>
         {this.props.selecao.map((item) => {
           return <option>{item}</option>
         })}
        </select>
      </div>
    );
  }
}

export default InputSelect;
