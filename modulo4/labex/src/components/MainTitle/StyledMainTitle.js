import styled from "styled-components";

export const MainTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5rem 0;

  @media (max-width: 768px) {
    text-align: center;
    padding: 2.5rem 0;
    justify-content: center;
  }
`

export const MainTitleText = styled.p`
  color: #ffffff;
  text-align: center;
  font-size: 24px;
`