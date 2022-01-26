import React from 'react';
import Rocket from '../../assets/rocket.png'
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
            <img src={Rocket} />
        </ContainerTextApplication>
    )
};

export default CardPhrase;
