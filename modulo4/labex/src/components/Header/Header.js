import React from "react";
import { useNavigate } from "react-router-dom";
import { Span } from "../Home/StyledHome";
import NavMenu from "../NavMenu/NavMenu";
import { HeaderContainer, Logo } from "./StyledHeader";

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Logo onClick={() => navigate("/")}>
        Labe
        <Span>X</Span>
      </Logo>
      <NavMenu />
    </HeaderContainer>
  );
};

export default Header;
