import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Navegador() {
  return (
    <>
      <NavStyled>
        <NavLink to="home">Home</NavLink>
        <NavLink to={"about"}>About</NavLink>
      </NavStyled>
      <Outlet />
    </>
  );
}

const NavStyled = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  list-style: none;
  .active {
    text-decoration: none;
    color: aqua;
    border-bottom: 1px solid rgb(0, 255, 255);
    transform: scale(1.2);
  }
`;

const NavItem = styled(NavLink)`
  text-decoration: underline;
  margin: 10px;
  padding: 10px;

  &:hover {
    transform: scale(1, 1);
  }
`;
