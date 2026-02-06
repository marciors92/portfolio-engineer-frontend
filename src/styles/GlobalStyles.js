import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    /* Ativa o scroll suave nativo para uma navegação profissional */
    scroll-behavior: smooth;
    
    /* Compensa a altura do seu Header fixo para não cobrir os títulos das seções */
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

  /* Personalização da barra de rolagem com a identidade visual do xadrez */
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