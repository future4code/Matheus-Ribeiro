import styled from "styled-components";

export const ContainerCriar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 2rem;
  }

  input {
    height: 2rem;
    font-size: 1.5rem;
    border: none;
    border-bottom: 2px solid white;
    background: transparent;
    margin-bottom: 3rem;
    color: white;
    outline: none;
  }

  button {
    padding: 8px;
    font-size: 1rem;
    border-radius: 10px;
    border: none;
    cursor: pointer;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`