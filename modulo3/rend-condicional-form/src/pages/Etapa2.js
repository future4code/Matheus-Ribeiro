import React, { Component } from 'react'
import InputText from '../components/InputText'

export class Etapa2 extends Component {
  render() {
    return (
      <div>
        <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
        <InputText pergunta="5. Qual curso?"/>
        <InputText pergunta="6. Qual unidade de ensino?"/>
        <br/>
      </div>
    )
  }
}

export default Etapa2
