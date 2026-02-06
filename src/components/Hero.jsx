import React from 'react';
import styled from 'styled-components';
import lewisBg from '../assets/lewis-chess.jpg';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 100px 10% 60px;
  
  /* Configuração do Banner */
  background: 
    linear-gradient(
      rgba(26, 26, 26, 0.85), 
      rgba(26, 26, 26, 0.85)
    ), 
    url(${lewisBg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Parallax para Desktop */
  border-bottom: 4px solid ${({ theme }) => theme.colors.accent};

  @media (max-width: 768px) {
    background-attachment: scroll; 
    padding-top: 140px; 
    min-height: 100vh; 
    display: flex !important; 
    visibility: visible !important;
  }
`;

const Badge = styled.span`
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.boardBlack};
  padding: 8px 20px;
  border-radius: 2px;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 25px;
  letter-spacing: 2px;
`;

const Title = styled.h1`
  /* AJUSTE: Fonte secundária e alinhamento mais denso */
  font-family: ${({ theme }) => theme.fonts.secondary}; 
  font-size: clamp(2.2rem, 8vw, 4.2rem);
  line-height: 1.0; 
  max-width: 850px;
  color: ${({ theme }) => theme.colors.ivoryLight};
  margin: 0 auto;
  
  span {
    color: ${({ theme }) => theme.colors.ivoryDark};
    font-style: italic;
    display: block;
    margin-top: 8px; /* Redução do espaçamento interno */
  }
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.ivoryLight};
  max-width: 600px;
  margin-top: 1.5rem; /* Redução da distância para o título */
  line-height: 1.5;
  opacity: 0.9;
`;

const Hero = () => {
  return (
    <HeroSection id="sobre">
      <Badge>Estrategista de Código</Badge>
      <Title>
        Transformando dados em <span>websites de alta performance.</span>
      </Title>
      <Subtitle>
        Sou o Márcio Rodrigues, Desenvolvedor voltado ao Web Stack do Cliente, com background
        em análise de dados no Itaú Unibanco e engenharia front-end pela EBAC. Atuo na
        criação de interfaces de usuário, soluções escaláveis e experiências digitais
        intuitivas.
      </Subtitle>
    </HeroSection>
  );
};

export default Hero;