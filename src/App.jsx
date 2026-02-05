import React from 'react';
import { ThemeProvider } from 'styled-components';
import { chessTheme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import Header from './components/Header'; // Importação adicionada

function App() {
  return (
    <ThemeProvider theme={chessTheme}>
      <GlobalStyles />
      <Header /> {/* Componente invocado aqui */}

      <main>
        {/* Próxima seção: Hero (Sobre Mim) */}
      </main>

    </ThemeProvider>
  );
}

export default App;