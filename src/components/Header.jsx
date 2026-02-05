import React from 'react';
import styled from 'styled-components';

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

const Logo = styled.div`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.ivoryLight};
  
  span {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.li`
  a {
    font-size: 0.9rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.colors.ivoryDark};
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
    return (
        <Nav>
            <Logo>
                ♟️ MÁRCIO<span>.FED</span>
            </Logo>
            <NavLinks>
                <NavLink><a href="#sobre">Sobre</a></NavLink>
                <NavLink><a href="#habilidades">Peças</a></NavLink>
                <NavLink><a href="#projetos">Jogadas</a></NavLink>
                <NavLink><a href="#contato">Contato</a></NavLink>
            </NavLinks>
        </Nav>
    );
};

export default Header;