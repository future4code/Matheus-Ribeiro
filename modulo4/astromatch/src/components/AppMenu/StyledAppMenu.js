import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2196f3;

  &:hover {
    transform: scale(1.1);
  }

  &.active {
    border-radius: 4px;
    color: #aa00ff;
    transition: 0.3s;
  }
`

export const NavBar = styled.nav`
  background-color: transparent;
  border-end-end-radius: 10px;
  border-end-start-radius: 10px;
  border-top: 1px solid rgb(11 11 117 / 96%);
  padding-top: 2px;
  margin-bottom: 2px;
  position: fixed;
  width: 100%;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const StyledButton = styled.button`
  text-decoration: none;
  padding: 4px;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2196f3;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: 0.3s;
  }

  &:active {
    color: #0d47a1;
  }
`