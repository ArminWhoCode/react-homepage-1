import React from "react";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem 1rem;
`;
const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    li {
      padding: 0.5rem 1rem;
      font-size: 1rem;
      margin: 0 0.25rem;
      color: #bbbbbb;
      cursor: pointer;
      font-weight: 600;
      &:hover {
        color: #000000;
        transition: all 0.5s ease;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

const Logo = styled.h1`
  padding: 0.5rem 1rem;
`;

const Navbar = () => {
  return (
    <Header>
      <Logo>.box</Logo>
      <Nav>
        <ul>
          <li>Home</li>
          <li>Blog</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </Nav>
    </Header>
  );
};

export default Navbar;
