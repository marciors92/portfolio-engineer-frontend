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
  position: fixed; /* Mudança de sticky para fixed garante melhor suporte mobile */
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2000;
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
    /* ... seus estilos anteriores ... */
    transition: color 0.3s ease;
  }
`;

const Header = () => {
  const [open, setOpen] = useState(false);

  // Função para fechar o menu com suavidade
  const handleLinkClick = () => {
    // Pequeno timeout para o usuário sentir o feedback do clique
    setTimeout(() => {
      setOpen(false);
    }, 150);
  };

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
        <NavLink><a href="#sobre" onClick={handleLinkClick}>Sobre</a></NavLink>
        <NavLink><a href="#habilidades" onClick={handleLinkClick}>Peças</a></NavLink>
        <NavLink><a href="#projetos" onClick={handleLinkClick}>Jogadas</a></NavLink>
        <NavLink><a href="#contato" onClick={handleLinkClick}>Contato</a></NavLink>
      </NavLinks>
    </Nav>
  );
};