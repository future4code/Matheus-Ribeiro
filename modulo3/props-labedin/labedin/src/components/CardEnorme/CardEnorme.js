import React from "react";
import styled from "styled-components";

const BiggestCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  border: 1px solid black;
  padding: 0 10px;
  margin-bottom: 10px;

  img {
    width: 70px;
    margin-right: 10px;
    border-radius: 10%;
  }
`;
const TextoCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CardImagem = styled.div`
  height: 70px;
`;

const CardEnorme = (props) => {
  return (
    <BiggestCard>
      <CardImagem>
        <img src={props.imagem} />
      </CardImagem>
      <TextoCard>
        <h3>{props.texto}</h3>
        <p>{props.descricao}</p>
      </TextoCard>
    </BiggestCard>
  );
};

export default CardEnorme;