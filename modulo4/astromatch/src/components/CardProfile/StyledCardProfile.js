import styled from "styled-components"

export const CardContainer = styled.div`
  max-width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const CardImg = styled.img`
  width: 100%;
  height: 380px;
  margin-top: 8px;
  box-shadow: rgb(117 117 117 / 77%) 0px 4px 10px 0px;
  border-radius: 4px;
`
export const CardContent = styled.div`
  width: 100%;
  height: 100px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  bottom: 100px;
  text-shadow: 0.1em 0.1em 0.2em black;
  backdrop-filter: blur(6px);
`
export const Button = styled.button`
  
  text-decoration: none;
  padding: 14px;
  margin: 0 70px;
  background-color: ${props => props.like ? "#4caf50": "#f44336"};
  box-shadow: rgb(117 117 117 / 77%) 0px 2px 8px 0px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 20px;

  &:hover {
    transform: scale(1.1);
  }
`