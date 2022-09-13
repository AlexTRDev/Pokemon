import React from "react";
import { Outlet, NavLink } from "react-router-dom";

export default function Navegador() {
  return (
    <>
      <nav>
        <ul>
          <NavLink to="home">
            <li>Home</li>
          </NavLink>
          <NavLink to={"about"}>
            <li>About</li>
          </NavLink>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
