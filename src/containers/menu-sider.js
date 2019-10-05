import React from "react";
import styled from "styled-components";

import { getMenus } from "../api/menuService";

import Logo from "./../components/logo";
import NavMenu from "../components/nav-menu";
import SocialMedia from "../components/social-media";

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  background: transparent;
  z-index: 99;
`;

const WrapMenu = styled.div`
  position: absolute;
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
  const onClickHandler = (e) => {
    e.stopPropagation();
    onOpen();
  }
  return (
    <div className="btn-open-menu" onClick={onClickHandler}>
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
    this.backDrop.style.width = "0px";
    this.setState({ isOpenMenu: false });
  };

  handleOpenMenu = () => {
    this.menuSider.style.width = "300px";
    this.backDrop.style.width = "100ch";
    this.setState({ isOpenMenu: true });
  };

  render() {
    return (
      <BackDrop className="menu-sider-drop" 
        onClick={this.handleCloseMenu}
        ref={el => (this.backDrop = el)}>
        <WrapMenu className="menu-sider" 
          onClick={e => e.stopPropagation()}
          ref={el => (this.menuSider = el)}
        >
          {this.state.isOpenMenu ? (
            <BtnClose onClose={this.handleCloseMenu} />
          ) : (
            <BtnOpen onOpen={this.handleOpenMenu} />
          )}
          <Logo />
          <NavMenu menus={this.state.menus} />
          <SocialMedia />
        </WrapMenu>
      </BackDrop>
    );
  }
}

export default MenuSider;
