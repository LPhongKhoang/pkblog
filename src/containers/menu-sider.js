import React from "react";
import styled from "styled-components";

import { getMenus } from "../api/menuService";

import Logo from "./../components/logo";
import NavMenu from "../components/nav-menu";
import SocialMedia from "../components/social-media";

const WrapMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #373d48eb;
  padding-top: 50px;
  z-index: 100;
  height: 100%;
`;

const BtnClose = ({ onClose }) => {
  return (
    <div className="btn-close-menu" onClick={onClose}>
      <i className="fa fa-times" aria-hidden="true"></i>
    </div>
  );
};
const BtnOpen = ({ onOpen }) => {
  return (
    <div className="btn-open-menu" onClick={onOpen}>
      <i className="fa fa-bars" aria-hidden="true"></i>
    </div>
  );
};

class MenuSider extends React.Component {
  state = {
    menus: [],
    isOpenMenu: false
  };

  async componentDidMount() {
    try {
      const menus = await getMenus();
      this.setState({ menus });
    } catch (ex) {}
  }

  handleCloseMenu = () => {
    this.menuSider.style.width = "0px";
    this.setState({ isOpenMenu: false });
  };

  handleOpenMenu = () => {
    this.menuSider.style.width = "300px";
    this.setState({ isOpenMenu: true });
  };

  render() {
    return (
      <WrapMenu className="menu-sider" ref={el => (this.menuSider = el)}>
        {this.state.isOpenMenu ? (
          <BtnClose onClose={this.handleCloseMenu} />
        ) : (
          <BtnOpen onOpen={this.handleOpenMenu} />
        )}
        <Logo />
        <NavMenu menus={this.state.menus} />
        <SocialMedia />
      </WrapMenu>
    );
  }
}

export default MenuSider;
