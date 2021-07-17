import React from "react";
import { NavContainer, NavLink } from "./styles";

const Nav = () => (
  <NavContainer>
    <NavLink href="/">Punk</NavLink>
    <NavLink href="/">Hip Hop</NavLink>
    <NavLink href="/">Jazz</NavLink>
    <NavLink href="/">Pop</NavLink>
    <NavLink href="/">Alternative</NavLink>
  </NavContainer>
);

export default Nav;
