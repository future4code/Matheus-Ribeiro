import styled from "styled-components"

export const InputSelect = styled.select`
  width: 100%;
  padding: 8px 4px;
  border-radius: 4px;
  border: 2px solid #03a9f4;
  outline: none;

  &:hover, :focus {
    outline: none;
    box-shadow: 0 0 0 3px  #81d4fa, 0 0 0 4px #0277bd;
  }
`

export const OptionForm = styled.option`
  border: none;
  outline: none;
  
  &:hover, :focus {
    outline: none;
    box-shadow: 0 0 0 3px  #81d4fa, 0 0 0 4px #0277bd;
  }
`