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
`;

/* ADIÇÃO: Container para o GIF com borda estilizada */
const GifWrapper = styled.div`
  margin: 20px auto 30px;
  max-width: 400px;
  border: 3px solid ${({ theme }) => theme.colors.woodDark};
  outline: 1px solid ${({ theme }) => theme.colors.accent};
  outline-offset: 5px;
  padding: 5px;
  border-radius: 4px;
  line-height: 0; // Remove espaço extra abaixo da imagem
  
  img {
    width: 100%;
    height: auto;
    filter: sepia(0.3) contrast(1.1); // Leve efeito para combinar com o tom marfim
  }

  @media (max-width: 480px) {
    max-width: 90%;
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
            <ContactTitle>Xeque-mate?</ContactTitle>

            {/* ADIÇÃO: O GIF posicionado conforme solicitado */}
            <GifWrapper>
                <img src={lewisGif} alt="Partida de Xadrez com peças de Lewis" />
            </GifWrapper>

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