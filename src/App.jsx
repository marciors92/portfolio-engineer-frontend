import React from 'react';
import { ThemeProvider } from 'styled-components';
import { chessTheme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import Header from './components/Header';
import Hero from './components/Hero'; // Importação adicionada

function App() {
  return (
    <ThemeProvider theme={chessTheme}>
      <GlobalStyles />
      <Header />

      <main>
        <Hero /> {/* Seção Hero adicionada */}

        {/* Próxima seção: Habilidades (As Peças) */}
      </main>

    </ThemeProvider>
  );
}

export default App;