# ♟️ Chess-Driven Portfolio | Márcio FED

### 🔗 Link do Projeto: [https://marcio-engineer-fed.vercel.app/](https://marcio-engineer-fed.vercel.app/)

[![Vercel Deployment](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://marcio-engineer-fed.vercel.app)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Styled Components](https://img.shields.io/badge/Styled--Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)](https://styled-components.com/)

Um portfólio de alta performance focado em **Engenharia de Software Front-end**, utilizando a metáfora do xadrez para representar estratégia, precisão e tomada de decisão técnica.

---

## 📖 Estudo de Caso: A Engenharia por trás do Tabuleiro

### O Desafio
O objetivo principal foi criar uma interface que fugisse dos templates genéricos, mantendo uma **responsividade extrema** e uma identidade visual sóbria baseada na estética *Ivory & Wood* (Marfim e Madeira). O maior desafio técnico residiu na implementação do grid de habilidades, que deveria se comportar como um tabuleiro de xadrez real (4x3), mantendo o alinhamento e a proporção independentemente das dimensões do dispositivo.

### Soluções de Engenharia
1.  **Lógica Algorítmica de Cores:** Em vez de utilizar classes CSS estáticas para cada quadrado, implementei uma função matemática baseada no índice do mapeamento: `(row + col) % 2`. Essa lógica garante que o padrão de alternância entre cores claras e escuras seja gerado dinamicamente, mantendo a integridade visual mesmo se novas habilidades forem adicionadas.
2.  **Arquitetura de Temas (Theming):** Utilizei o `ThemeProvider` do **Styled Components** para centralizar a paleta de cores e tipografia. Isso permite uma manutenção escalável, onde alterações globais de design podem ser feitas em um único ponto de verdade.
3.  **Responsividade Adaptativa (Fluid UI):** Implementei a técnica de `clamp()` em CSS para tipografia e ícones. Isso permitiu uma interface fluida que encolhe de forma orgânica em telas "ultra-narrow", eliminando a complexidade de gerenciar dezenas de breakpoints manuais.
4.  **Contenção de Viewport:** Para evitar o transbordamento lateral (*horizontal overflow*) comum em grids complexos no mobile, apliquei travas de segurança com `box-sizing: border-box`, `min-width: 0` e `overflow-x: hidden`.

---

## 🛠️ Stack Tecnológica

* **React 18:** Biblioteca base para construção de componentes funcionais e gerenciamento de estados.
* **Styled Components:** CSS-in-JS para estilização escopada, dinâmica e baseada em propriedades.
* **React Icons:** Conjunto de ícones vetoriais para representação técnica das skills.
* **Vite:** Tooling de próxima geração para um ambiente de desenvolvimento e build de alta performance.

---

## 🚀 Etapas de Desenvolvimento

### Fase 1: Fundação e Clean Code
* Configuração do ambiente de desenvolvimento com Vite.
* Padronização do `GlobalStyles`: implementação de scroll suave nativo, personalização de scrollbar temática e compensação de `scroll-padding-top` para navegação via Header fixo.

### Fase 2: Componentização e Layout
* **Header:** Desenvolvimento de um menu fixo resiliente com suporte a navegação móvel e fechamento automático de menu (*drawer*) após seleção.
* **Hero Section:** Design focado em hierarquia visual, utilizando fontes secundárias para títulos e garantindo legibilidade máxima.

### Fase 3: O Grid de Skills (O "Xeque-Mate")
* Implementação do grid 4x3 mantendo a proporção `aspect-ratio: 1/1`.
* Criação de `SkillCards` com estados de interação (*hover*) e elevação de `z-index` para feedback visual imediato ao usuário.

### Fase 4: Otimização e Debugging
* Correção de conflitos de exportação de módulos (`export default` vs `named exports`).
* Refinamento de responsividade para garantir que o grid 4x3 não transbordasse em dispositivos móveis.

---

## 🔧 Como executar o projeto

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    ```
3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

---

## 📈 Roadmap Sênior (Próximos Passos)
- [ ] **Acessibilidade (A11y):** Auditoria completa para suporte a leitores de tela e navegação por teclado (foco em estados de `:focus-visible`).
- [ ] **Testes de Integração:** Implementação de testes com `Cypress` ou `Playwright` para validar o fluxo de navegação.
- [ ] **Performance:** Implementação de `lazy loading` para componentes pesados e otimização de assets (WebP).

---
**Desenvolvido com estratégia, precisão e foco em resultados por Márcio FED.**
