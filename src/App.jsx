import React from 'react';
import { ThemeProvider } from 'styled-components';
import { chessTheme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills'; // Importação adicionada

function App() {
  return (
    <ThemeProvider theme={chessTheme}>
      <GlobalStyles />
      <Header />
      <main>
        <Hero />
        <Skills /> {/* Seção de Habilidades adicionada */}
      </main>
    </ThemeProvider>
  );
}

export default App;