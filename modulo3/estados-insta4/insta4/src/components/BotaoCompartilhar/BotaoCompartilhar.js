import React from 'react';
import styled from 'styled-components';


const ContainerBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BtnRedeSocial = styled.button`
  padding: 10px;
`;

class BotaoCompartilhar extends React.Component {
  
  render() {
    return (
      <ContainerBtn>
        <BtnRedeSocial onClick={this.props.onClick}>Twitter</BtnRedeSocial>
        <BtnRedeSocial onClick={this.props.onClick}>Facebook</BtnRedeSocial>
        <BtnRedeSocial onClick={this.props.onClick}>Instagram</BtnRedeSocial>
      </ContainerBtn>
    );
  }
}

export default BotaoCompartilhar;
