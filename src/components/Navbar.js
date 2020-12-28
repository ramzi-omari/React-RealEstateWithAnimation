import React, { useState } from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";
import { FaBars } from "react-icons/fa";
import "./NavStyle.css";

// const Nav = styled.nav`
//   height: 60px;
//   display: flex;
//   justify-content: space-between;
//   padding: 1rem 2rem;
//   z-index: 100;
//   position: fixed;
//   width: 100%;
//   /* background: transparent; */

//   background: ${({ aCtive }) => (aCtive ? "transparent" : "red")};

//   /* &::active {
//     background: red;
//   } */
// `;

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
  cursor: pointer;
  text-decoration: none;
`;

const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
  font-weight: 600;
`;

const MenuBars = styled(FaBars)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    background-size: contain;
    height: 40px;
    width: 20px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = ({ toggle }) => {
  const [navBar, SetNavbar] = useState(false);

  const changeBack = () => {
    if (window.scrollY >= 80) {
      SetNavbar(true);
    } else {
      SetNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBack);

  return (
    <nav className={navBar ? "navbar active" : "navbar"}>
      <Logo to="/">ELIXR</Logo>
      <MenuBars onClick={toggle}></MenuBars>
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/contact" primary="true">
          Contact Us
        </Button>
      </NavBtn>
    </nav>
  );
};

export default Navbar;
