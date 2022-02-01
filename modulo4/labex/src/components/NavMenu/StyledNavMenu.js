import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const MenuBar = styled.ul`
  display: flex;
  flex-wrap: nowrap;

  @media (max-width: 768px) {
    flex-direction: column;
    flex-wrap: nowrap;
    background-color: #03a9f4;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 2;
  }
`;
export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  padding-left: 2rem;
  list-style-type: none;
  color: #ffffff;
  cursor: pointer;

  &:hover, :focus  {
    color: #03a9f4;

  }

  @media (max-width: 768px) {
    color: #ffffff;
  }
`;

export const Burguer = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 1.35rem;
    right: 2rem;
    cursor: pointer;
    z-index: 3;
    display: none;

    @media (max-width: 768px) {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      flex-wrap: nowrap;
      position: absolute;
    }

    div {
      width: 2rem;
      height: 0.25rem;
      background-color: #ffffff;
      transform-origin: 1px;
      transition: all 0.3s linear;

      &:nth-child(1) {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }

      &:nth-child(2) {
        transform: ${({ open }) =>
          open ? "translateX(100%)" : "translateX(0)"};
        opacity: ${({ open }) => (open ? 0 : 1)};
      }

      &:nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
`;
