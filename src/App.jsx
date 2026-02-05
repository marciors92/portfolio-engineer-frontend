import React from 'react';
import { ThemeProvider } from 'styled-components';
import { chessTheme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  return (
    <ThemeProvider theme={chessTheme}>
      <GlobalStyles />
      <header style={{ padding: '2rem', textAlign: 'center', borderBottom: `1px solid ${chessTheme.colors.woodDark}` }}>
        <h1>Márcio Rodrigues</h1>
        <p>Engenheiro Front-End | Estrategista de Código</p>
      </header>

      <main>
        <section style={{ height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h2 style={{ opacity: 0.7 }}>O Tabuleiro está sendo montado...</h2>
        </section>
      </main>

    </ThemeProvider>
  );
}

export default App;