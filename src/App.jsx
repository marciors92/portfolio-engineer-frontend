import React from 'react';
import { ThemeProvider } from 'styled-components';
import { chessTheme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer'; // Importação final

function App() {
  return (
    <ThemeProvider theme={chessTheme}>
      <GlobalStyles />
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
      </main>
      <Footer /> {/* Portfólio concluído! */}
    </ThemeProvider>
  );
}

export default App;