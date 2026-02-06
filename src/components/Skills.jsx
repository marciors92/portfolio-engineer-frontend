import React from 'react';
import styled from 'styled-components';
import {
  FaReact, FaNodeJs, FaAws, FaGitAlt, FaHtml5, FaCss3Alt
} from 'react-icons/fa';
import {
  SiTypescript, SiJavascript, SiNextdotjs, SiTailwindcss, SiStyledcomponents, SiPostgresql
} from 'react-icons/si';

const SkillsSection = styled.section`
  padding: 60px 10%; 
  background-color: ${({ theme }) => theme.colors.boardWhite};
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 2.2rem;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.colors.woodDark};
`;

const Grid = styled.div`
  display: grid;
  /* CORREÇÃO: Mantém 4 colunas fixas para preservar o desenho do tabuleiro */
  grid-template-columns: repeat(4, 1fr);
  gap: 0; 
  max-width: 700px; 
  margin: 0 auto;
  border: 3px solid ${({ theme }) => theme.colors.woodDark};
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);

  @media (max-width: 768px) {
    /* No mobile, apenas garanti que o container não ultrapasse a largura da tela */
    max-width: 95%; 
  }
`;

const SkillCard = styled.div`
  background-color: ${(props) => props.isDark ? props.theme.colors.boardBlack : props.theme.colors.ivoryLight};
  color: ${(props) => props.isDark ? props.theme.colors.ivoryLight : props.theme.colors.textContrast};
  
  aspect-ratio: 1 / 1; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  padding: 10px; /* Reduzi levemente para não apertar no mobile */

  svg {
    font-size: clamp(1.2rem, 5vw, 2rem); /* Tamanho responsivo para os ícones */
    margin-bottom: 8px;
    color: ${({ theme }) => theme.colors.accent};
  }

  span {
    font-weight: bold;
    font-size: clamp(0.5rem, 2vw, 0.7rem); /* Texto ajustável para não quebrar linha */
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 1px;
  }

  &:hover {
    transform: scale(1.05);
    z-index: 2;
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.accent};
  }
`;

const Skills = () => {
  const skills = [
    { name: 'React', icon: <FaReact /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'Tailwind', icon: <SiTailwindcss /> },
    { name: 'Styled Components', icon: <SiStyledcomponents /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'AWS', icon: <FaAws /> },
    { name: 'SQL/Postgres', icon: <SiPostgresql /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3/SASS', icon: <FaCss3Alt /> },
  ];

  return (
    <SkillsSection id="habilidades">
      <SectionTitle>Minhas Peças (Skills)</SectionTitle>
      <Grid>
        {skills.map((skill, index) => {
          // Lógica matemática para xadrez: (linha + coluna) % 2
          const row = Math.floor(index / 4);
          const col = index % 4;
          const isDark = (row + col) % 2 !== 0;

          return (
            <SkillCard key={index} isDark={isDark}>
              {skill.icon}
              <span>{skill.name}</span>
            </SkillCard>
          );
        })}
      </Grid>
    </SkillsSection>
  );
};

export default Skills;