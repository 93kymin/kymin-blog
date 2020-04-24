import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavbarStyled = styled.div`
  display: flex;
  font-size: 18px;
  margin: 12px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  ul {
    margin: 0;
    padding: 0;
    li {
      list-style: none;
      display: inline-block;
      padding: 5px;
      a {
        color: #565673;
        display: inline;
        font-weight: 400;
        text-decoration: none;
      }
    }
  }
  span {
    &:hover {
      background: #f0e3ff;
      transition: all 0.35s;
    }
  }
  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

const Navbar = (porps) => {
  return (
    <NavbarStyled>
      <ul>
        <li>
          <img src={require("../assets/icons/home.png")} alt="home" />
          <NavLink to="/">
            <span>Home</span> /
          </NavLink>
        </li>
        <li>
          <img src={require("../assets/icons/app.png")} alt="Portfolio" />
          <NavLink to="/portfolio/1">
            <span>Portfolio</span> /
          </NavLink>
        </li>
        <li>
          <img src={require("../assets/icons/contact.png")} alt="Contact" />
          <NavLink to="/contact">
            <span>Contact</span> /
          </NavLink>
        </li>
        <li>
          <img src={require("../assets/icons/etc.png")} alt="Etc" />
          <NavLink to="/etc">
            <span>Etc</span>
          </NavLink>
        </li>
      </ul>
    </NavbarStyled>
  );
};

export default Navbar;
