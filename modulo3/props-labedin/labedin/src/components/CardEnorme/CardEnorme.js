import React from 'react';
import styled from 'styled-components';

const BiggestCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  border: 1px solid black;
  padding: 20px 10px;
  margin-bottom: 10px;
  height: 300px;
`;

const CardImagem = styled.div`
  height: 70px;
  display: flex;
`;

const Imagem = styled.img`
  margin-right: 10px;
`;

const TextoCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 10px;
`;

const CardEnorme = (props) => {
  return (
    <BiggestCard>
      <CardImagem>
        <Imagem src={props.imagem} />
      </CardImagem>
      <TextoCard>
        <h3>{props.texto}</h3>
        <p>{props.descricao}</p>
      </TextoCard>
    </BiggestCard>
  );
};

export default CardEnorme;
