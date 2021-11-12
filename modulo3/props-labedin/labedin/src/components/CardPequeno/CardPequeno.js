import React from 'react';
import styled from 'styled-components';

const SmallCard = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 20px 10px;
  margin-bottom: 10px;
  height: 100px;
`;

const Descricao = styled.p`
  margin-left: 5px;
`;

const Imagem = styled.img`
  width: 50px;
  margin-right: 10px;
  border-radius: 50%;
`;

const CardPequeno = (props) => {
  return (
    <SmallCard>
      <Imagem src={props.imagem} />
      <h3>{props.texto}</h3>
      <p>{props.descricao}</p>
    </SmallCard>
  );
};

export default CardPequeno;
