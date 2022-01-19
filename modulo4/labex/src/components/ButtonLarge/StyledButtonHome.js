import styled from "styled-components";

export const Button = styled.button`
  width: 160px;
  height: 40px;
  text-align: center;
  color: #ffffff;
  background: #673AB7;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;

  &:hover {
    background: #ffffff;
    color: #673AB7;
    transition: .1s ease;
    border: 2px solid #673AB7;
  }
`