import styled from "styled-components";

export const InputText = styled.input`
  width: 100%;
  padding: 8px 4px;
  border-radius: 4px;
  border: 2px solid #03a9f4;
  outline: none;

  @media (max-width: 768px) {
   
  }
  
  &:hover, :focus {
    outline: none;
    box-shadow: 0 0 0 3px  #81d4fa, 0 0 0 4px #0277bd;
  }
`