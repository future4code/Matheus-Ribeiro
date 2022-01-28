import React from 'react';
import Rocket2 from '../../assets/rocket2.png'
import { ContainerTextApplication, TextApplication, TextApplicationWrapper } from './StyledCardPhrase';

const CardPhrase = () => {
    return (
        <ContainerTextApplication>
            <TextApplicationWrapper>
                <TextApplication>
                    o CÉU não é o limite
                </TextApplication>
                <TextApplication>
                    existe um UNIVERSO
                </TextApplication>
                <TextApplication>
                    INCRÍVEL lá fora
                </TextApplication>
            </TextApplicationWrapper>
            <img src={Rocket2} />
        </ContainerTextApplication>
    )
};

export default CardPhrase;
