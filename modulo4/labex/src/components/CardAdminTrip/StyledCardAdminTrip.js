import { MdDelete } from "react-icons/md";
import styled from "styled-components";

export const CardAdminTripContainer = styled.div`
  width: 320px;
  height: 80px;
  padding: .5rem 1rem;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  color: #ffffff;
  background-color: #03a9f450;
  border-radius: 6px;
  cursor: pointer;

  &:hover, :focus {
    outline: none;
    box-shadow: 0 0 0 3px  #81d4fa, 0 0 0 4px #0277bd;
  }

  @media (max-width: 768px) {
    width: 220px;
  }
  `

export const ContainerAdminInfoTrip = styled.div`
padding: 2px 0;
display: flex;
align-items: center;
justify-content: space-between;
word-wrap: normal;

`
export const AdminTextInfo = styled.p`
  color: #ffffff;
  font-size: 16px;
  font-style: italic;
  display: inline;
  padding: 1rem 0;
  flex-grow: 1;
  

  @media (max-width: 768px) {
    width: 200px;
  }
`

export const DeleteIcon = styled(MdDelete)`
  cursor: pointer;
  margin-left: 1rem;
  color: #03a9f4;
  border-radius: 6px;

  & :hover, :focus {
    transform: scale(1.2);
    transition: 0.1s;
  }

  @media (max-width: 768px) {
    margin: 0;
    
  }
`