import { MdDelete } from "react-icons/md";
import styled from "styled-components";

export const CardAdminTripContainer = styled.div`
  width: 320px;
  height: 60px;
  padding: 20px;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  color: #ffffff;
  background-color: #e1f5fe70;
  backdrop-filter: blur(6px);
  border-radius: 10px;
  cursor: pointer;

  &:hover, :focus {
    outline: none;
    box-shadow: 0 0 0 3px  #81d4fa, 0 0 0 4px #0277bd;
  }
  `

export const ContainerAdminInfoTrip = styled.div`
padding: 2px 0;
display: flex;
align-items: center;
justify-content: space-between;
word-wrap: normal;
text-shadow: 1px 1px 1px #000;
`
export const AdminTextInfo = styled.p`
  color: #ffffff;
  font-size: 16px;
  font-style: italic;
  display: inline;
`
export const DeleteIcon = styled(MdDelete)`
  cursor: pointer;
  color: #0277bd;
  border-radius: 10px;
  padding: 4px;

  & :hover, :focus {
    transform: scale(1.2);
    transition: 0.1s;
  }
`