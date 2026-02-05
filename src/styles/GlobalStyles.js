import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.boardBlack};
    color: ${({ theme }) => theme.colors.ivoryLight};
    font-family: ${({ theme }) => theme.fonts.primary};
    -webkit-font-smoothing: antialiased;
    line-height: 1.6;
  }

  h1, h2, h3, h4 {
    font-family: ${({ theme }) => theme.fonts.secondary};
    color: ${({ theme }) => theme.colors.ivoryDark};
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.accent};
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.ivoryLight};
    }
  }

  button {
    cursor: pointer;
    font-family: ${({ theme }) => theme.fonts.primary};
  }
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.boardBlack};
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.woodDark};
    border-radius: 4px;
  }
`;