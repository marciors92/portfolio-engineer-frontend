import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    /* Ativa o scroll suave nativo */
    scroll-behavior: smooth;
    
    /* Compensa a altura do seu Header (aprox. 80px) */
    /* Isso impede que o Header cubra o título da seção ao clicar no link */
    scroll-padding-top: 85px; 
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.primary};
    background-color: ${({ theme }) => theme.colors.boardBlack};
    color: ${({ theme }) => theme.colors.ivoryLight};
    overflow-x: hidden;
  }

  /* Personalização da barra de rolagem para combinar com o xadrez */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.boardBlack};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.woodDark};
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.accent};
  }
`;

export default GlobalStyle;