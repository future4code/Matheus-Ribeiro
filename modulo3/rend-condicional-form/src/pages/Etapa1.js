import React, { Component } from 'react';
import InputSelect from '../components/InputSelect';
import InputText from '../components/InputText';

export class Etapa1 extends Component {
  render() {
    return (
      <div>
        <h2>ETAPA 1 - DADOS GERAIS</h2>
        <InputText pergunta="1. Qual seu nome?" />
        <InputText pergunta="2. Qual sua idade" />
        <InputText pergunta="3. Qual seu email?" />
        <InputSelect
          pergunta="4. Qual seu nível de escolaridade?"
          selecao={[
            'Ensino médio incompleto',
            'Ensino médio completo',
            'Ensino superior incompleto',
            'Ensino superior completo',
          ]}
        />
         <br/>
      </div>
    );
  }
}

export default Etapa1;
