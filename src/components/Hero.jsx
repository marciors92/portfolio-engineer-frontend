import React from 'react';
import styled from 'styled-components';
// Importamos a imagem da pasta assets
import lewisBg from '../assets/lewis-chess.jpg';

const HeroSection = styled.section`
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 10%;
  
  /* Configuração do Banner com Imagem */
  background: 
    linear-gradient(
      rgba(26, 26, 26, 0.8), 
      rgba(26, 26, 26, 0.8)
    ), 
    url(${lewisBg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Efeito Parallax suave */
  
  border-bottom: 4px solid ${({ theme }) => theme.colors.accent};
`;

const Badge = styled.span`
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.boardBlack};
  padding: 8px 20px;
  border-radius: 2px; /* Mais quadrado para parecer uma peça */
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 25px;
  letter-spacing: 2px;
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  line-height: 1.1;
  max-width: 900px;
  color: ${({ theme }) => theme.colors.ivoryLight};
  text-shadow: 2px 2px 10px rgba(0,0,0,0.5);
  
  span {
    color: ${({ theme }) => theme.colors.ivoryDark};
    font-style: italic;
    display: block;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.ivoryLight};
  max-width: 650px;
  margin-top: 2rem;
  text-shadow: 1px 1px 5px rgba(0,0,0,0.8);
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