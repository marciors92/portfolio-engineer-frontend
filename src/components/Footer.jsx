import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import lewisGif from '../assets/lewis-chess-gif.gif';

const FooterContainer = styled.footer`
  padding: 60px 10% 30px;
  background-color: ${({ theme }) => theme.colors.boardBlack};
  border-top: 1px solid ${({ theme }) => theme.colors.woodDark};
  text-align: center;
`;

const ContactTitle = styled.h2`
  color: ${({ theme }) => theme.colors.ivoryLight};
  margin-bottom: 10px;
  font-size: 2rem;
  margin-top: 20px;
`;

/* Ajuste no Wrapper para incluir o texto dentro da moldura */
const GifWrapper = styled.div`
  margin: 20px auto 30px;
  max-width: 500px; // Aumentado levemente para acomodar melhor o texto
  border: 3px solid ${({ theme }) => theme.colors.woodDark};
  outline: 1px solid ${({ theme }) => theme.colors.accent};
  outline-offset: 5px;
  padding: 15px; // Aumentado para dar respiro ao texto
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.2);
  
  img {
    width: 100%;
    height: auto;
    border-radius: 2px;
    margin-bottom: 15px;
    filter: sepia(0.2) contrast(1.1);
  }

  @media (max-width: 480px) {
    max-width: 95%;
  }
`;

/* Novo estilo para a curiosidade (Newsletter) */
const CuriosityText = styled.div`
  text-align: justify;
  color: ${({ theme }) => theme.colors.ivoryDark};
  font-size: 0.85rem; // Letras pequenas como solicitado
  line-height: 1.4;
  font-family: ${({ theme }) => theme.fonts.primary};
  
  p {
    margin-bottom: 10px;
  }

  strong {
    color: ${({ theme }) => theme.colors.accent};
    font-family: ${({ theme }) => theme.fonts.secondary};
  }
`;

const ContactText = styled.p`
  color: ${({ theme }) => theme.colors.ivoryDark};
  margin-bottom: 30px;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  margin-bottom: 40px;

  a {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.ivoryDark};
    transition: all 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
      transform: translateY(-5px);
    }
  }
`;

const Copyright = styled.div`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.woodDark};
  border-top: 1px solid #222;
  padding-top: 20px;
  
  span {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const Footer = () => {
    return (
        <FooterContainer id="contato">

            <GifWrapper>
                <img src={lewisGif} alt="Partida de Xadrez com Peças de Lewis" />

                <CuriosityText>
                    <p>
                        <strong>O Mistério de Lewis:</strong> Escondidas por mais de 700 anos sob as dunas da Baía de Uig, na Ilha de Lewis à noroeste das Terras Altas da Escócia, estas peças do século XII são o conjunto de xadrez mais famoso do mundo. Entalhadas em marfim de morsa, elas revelam o humor e a hierarquia da Idade Média.
                    </p>
                </CuriosityText>
            </GifWrapper>

            <ContactTitle>Xeque-mate?</ContactTitle>

            <ContactText>
                Àqueles em busca da próxima jogada técnica, entre em contato:
            </ContactText>

            <SocialLinks>
                <a href="https://www.linkedin.com/in/marciofrontend/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                <a href="https://github.com/marciors92" target="_blank" rel="noreferrer"><FaGithub /></a>
                <a href="mailto:marciors92@gmail.com"><FaEnvelope /></a>
                <a href="https://wa.me/5561992751210" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
            </SocialLinks>

            <Copyright>
                © {new Date().getFullYear()} Márcio Rodrigues <span>•</span> Engenheiro Front-End <span>•</span> Inspirado nas Peças de Lewis
            </Copyright>
        </FooterContainer>
    );
};

export default Footer;