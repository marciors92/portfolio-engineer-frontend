import React, { useState } from 'react';
import styled from 'styled-components';
import lewisQueen from '../assets/lewis-chess-piece.webp';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10%;
  background-color: ${({ theme }) => theme.colors.boardBlack};
  border-bottom: 2px solid ${({ theme }) => theme.colors.woodDark};
  position: sticky;
  top: 0;
  z-index: 2000; /* Garante que fique acima de tudo */
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.ivoryLight};
  text-decoration: none;
  z-index: 2001;
  
  img {
    height: 40px;
    width: auto;
  }

  span {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const MenuIcon = styled.div`
  display: none;
  color: ${({ theme }) => theme.colors.ivoryLight};
  font-size: 1.8rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    z-index: 2001;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.boardBlack};
    position: fixed;
    top: 0;
    right: ${({ open }) => (open ? '0' : '-100%')};
    width: 100%;
    height: 100vh;
    padding-top: 120px;
    transition: 0.4s ease-in-out;
    align-items: center;
    gap: 3rem;
  }
`;

const NavLink = styled.li`
  a {
    font-size: 0.9rem;
    font-weight: 500;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.ivoryDark};
    text-decoration: none;
    
    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <Nav>
      <Logo href="#">
        <img src={lewisQueen} alt="Rainha de Lewis" />
        MÁRCIO<span>FED</span>
      </Logo>

      <MenuIcon onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </MenuIcon>

      <NavLinks open={open}>
        <NavLink><a href="#sobre" onClick={() => setOpen(false)}>Sobre</a></NavLink>
        <NavLink><a href="#habilidades" onClick={() => setOpen(false)}>Peças</a></NavLink>
        <NavLink><a href="#projetos" onClick={() => setOpen(false)}>Jogadas</a></NavLink>
        <NavLink><a href="#contato" onClick={() => setOpen(false)}>Contato</a></NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Header;