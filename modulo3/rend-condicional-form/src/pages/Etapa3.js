import React, { Component } from 'react'
import InputSelect from '../components/InputSelect'
import InputText from '../components/InputText'

export class Etapa3 extends Component {
  render() {
    return (
      <div>
        <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
        <InputText pergunta="5. Por que você não terminou um curso de graduação?"/>
        <p>6. Você fez algum curso complementar?</p>
        <InputSelect selecao={["Curso técnico", "Curso de inglês", "Não fiz curso complementar"]}/>
        <br/>
      </div>
    )
  }
}

export default Etapa3
