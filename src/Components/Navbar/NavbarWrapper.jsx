import React from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';


const Navbar = () => {
  const [isMenuExpanded, setIsMenuExpanded] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuExpanded(!isMenuExpanded);
  };

  const NavbarWrapper = styled.nav`
  background-color: white;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    position: relative;

    &.expanded {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background-color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 1;
      overflow-y: auto;
    }
  }
`;

  const Logo = styled.a`
  font-size: 1.5rem;
  text-decoration: none;
  color: #333;
  margin-right: 1rem;
`;

  const NavLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    display: ${isMenuExpanded ? 'flex' : 'none'};
    width: 100%;
  }
`;

  const NavLink = styled.a`
  color: #333;
  text-decoration: none;
  margin-right: 1rem;
  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0;
    padding: 0.5rem 1rem;
    background-color: #f5f5f5;
  }
`;

  const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
    padding: 0.5rem;
    font-size: 1.5rem;
  }
`;


  return (
    <NavbarWrapper className={isMenuExpanded ? 'expanded' : ''}>
      <Logo href="/">My Logo</Logo>
      <MenuButton onClick={toggleMenu}>
        {isMenuExpanded ? <FaTimes /> : <FaBars />}
      </MenuButton>
      <NavLinks>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </NavLinks>
    </NavbarWrapper>
  );
};

export default Navbar;
