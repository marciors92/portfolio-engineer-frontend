import React, { useState } from 'react'; // Adicionado useState para controlar o menu
import styled from 'styled-components';
import lewisQueen from '../assets/lewis-chess-piece.webp';
import { FaBars, FaTimes } from 'react-icons/fa'; // Ícones para o menu mobile

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 10%;
  background-color: ${({ theme }) => theme.colors.boardBlack};
  border-bottom: 2px solid ${({ theme }) => theme.colors.woodDark};
  position: sticky;
  top: 0;
  z-index: 1000;
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
  cursor: pointer;
  z-index: 1001;
  
  img {
    height: 40px;
    width: auto;
  }

  span {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

// Ícone do Menu Hamburguer
const MenuIcon = styled.div`
  display: none;
  color: ${({ theme }) => theme.colors.ivoryLight};
  font-size: 1.8rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    z-index: 1001;
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
    right: ${({ open }) => (open ? '0' : '-100%')}; // Controla a abertura
    width: 70%;
    height: 100vh;
    padding-top: 100px;
    transition: right 0.3s ease-in-out;
    box-shadow: -10px 0px 30px rgba(0,0,0,0.5);
    gap: 3rem;
    align-items: center;
  }
`;

const NavLink = styled.li`
  a {
    font-size: 0.9rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.colors.ivoryDark};
    text-decoration: none;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -5px;
      left: 0;
      background-color: ${({ theme }) => theme.colors.accent};
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
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