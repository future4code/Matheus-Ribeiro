import styled from "styled-components";

export const ButtonForms = styled.button`
  width: 100px;
  height: 36px;
  text-align: center;
  color: #ffffff;
  background: #03a9f4;
  border-radius: 6px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
    width: 64px;
    height: 32px;
  }
  
  &:hover, :focus {
    outline: none;
    box-shadow: 0 0 0 3px  #81d4fa, 0 0 0 4px #0277bd;
  }
`