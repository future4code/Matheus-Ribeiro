import styled from "styled-components";

export const SecondaryTitleContainer = styled.div`
  padding: ${({ titleList }) => (titleList ? "2.5rem 0" : 0)};
`;

export const SecondaryTitleText = styled.p`
  font-size: 32px;
  font-weight: 400;
  color: #03a9f4;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
