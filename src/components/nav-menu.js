import React from "react";
import { NavLink } from "react-router-dom";
import ListGroup from "./common/list-group";
import styled from "styled-components";

const MenuLink = styled(NavLink)`
  font-size: 20px;
  font-weight: bold;
  color: #32d5a9;
  text-decoration: none;
  &:hover {
    color: #aaeddb;
    text-decoration: none;
  }
`;

const NavMenu = ({ menus }) => {
  return (
    <ListGroup
      className="nav-menus"
      data={menus}
      renderItem={m => (
        <MenuLink to={`/menu/${m.slug}`}>{m.name}</MenuLink>
      )}
    />
  );
};

export default NavMenu;
