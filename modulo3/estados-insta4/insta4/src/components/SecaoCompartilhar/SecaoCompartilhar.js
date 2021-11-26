import React from 'react';
import styled from 'styled-components';

const ContainerCompartilhar = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 90px);
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  box-sizing: border-box;
`;

const BtnRedeSocial = styled.button`
  padding: 5px;
  width: 80px;
`;

const Input = styled.input`
  margin-top: 10px;
  width: 260px;
  grid-column: 1 / 4;
  grid-row: 2 / 3;
`;

class SecaoCompartilhar extends React.Component {
  render() {
    return (
      <ContainerCompartilhar>
        <BtnRedeSocial onClick={this.props.onClick}>Twitter</BtnRedeSocial>
        <BtnRedeSocial onClick={this.props.onClick}>Facebook</BtnRedeSocial>
        <BtnRedeSocial onClick={this.props.onClick}>Instagram</BtnRedeSocial>
        <Input
          type="text"
          placeholder="Digite uma descrição"
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </ContainerCompartilhar>
    );
  }
}

export default SecaoCompartilhar;