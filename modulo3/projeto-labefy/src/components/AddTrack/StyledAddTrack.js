import styled from "styled-components";

export const ContainerAddTrack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 1rem;

  input {
    font-size: 1rem;
  }

  button {
    padding: .5rem;
    border-radius: 10px;
    font-size: 1rem;
    background-color: blueviolet;
    border: none;
    color: white;
    cursor: pointer;
  }
`

export const ContainerWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: #ffffff11;
padding: 1rem;
margin: 1rem 10rem;
margin-top: 0;
position: relative;
`
export const BotaoFechar = styled.div`
position: absolute;
top: 8px;
right: 8px;
padding: 2px;
cursor: pointer;
`
