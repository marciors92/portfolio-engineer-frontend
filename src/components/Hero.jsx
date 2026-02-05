import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 10%;
  background: radial-gradient(circle at center, #261c15 0%, ${({ theme }) => theme.colors.boardBlack} 100%);
`;

const Badge = styled.span`
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.boardBlack};
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  line-height: 1.1;
  max-width: 900px;
  
  span {
    color: ${({ theme }) => theme.colors.ivoryDark};
    font-style: italic;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.ivoryDark};
  max-width: 600px;
  margin-top: 1.5rem;
  opacity: 0.9;
`;

const CTAContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 1.5rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const PrimaryButton = styled.a`
  background-color: ${({ theme }) => theme.colors.ivoryDark};
  color: ${({ theme }) => theme.colors.textContrast};
  padding: 12px 30px;
  font-weight: bold;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.ivoryLight};
  }
`;

const Hero = () => {
    return (
        <HeroSection id="sobre">
            <Badge>Estrategista de Código</Badge>
            <Title>
                Transformando dados em <span>interfaces de alta performance.</span>
            </Title>
            <Subtitle>
                Sou Márcio Rodrigues. Com background em análise de dados no Itaú e engenharia
                pela EBAC, desenvolvo soluções escaláveis com React, Next.js e Micro Frontends.
            </Subtitle>
            <CTAContainer>
                <PrimaryButton href="#projetos">Ver Projetos (Minhas Jogadas)</PrimaryButton>
            </CTAContainer>
        </HeroSection>
    );
};

export default Hero;