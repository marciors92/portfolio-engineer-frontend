import React from 'react';
import { ThemeProvider } from 'styled-components';
import { chessTheme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

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
      <Footer />
    </ThemeProvider>
  );
}

export default App;