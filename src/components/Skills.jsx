import React from 'react';
import styled from 'styled-components';
import {
  FaReact, FaNodeJs, FaAws, FaGitAlt, FaHtml5, FaCss3Alt
} from 'react-icons/fa';
import {
  SiTypescript, SiJavascript, SiNextdotjs, SiTailwindcss, SiStyledcomponents, SiPostgresql
} from 'react-icons/si';

const SkillsSection = styled.section`
  padding: 100px 10%;
  background-color: ${({ theme }) => theme.colors.boardWhite};
  color: ${({ theme }) => theme.colors.textContrast};
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 2.5rem;
  margin-bottom: 50px;
  color: ${({ theme }) => theme.colors.woodDark};
`;

const Grid = styled.div`
  display: grid;
  /* Força 4 colunas para o padrão 4x3 */
  grid-template-columns: repeat(4, 1fr);
  gap: 0; /* Gap zero para as peças se tocarem como um tabuleiro real */
  max-width: 800px;
  margin: 0 auto;
  border: 2px solid ${({ theme }) => theme.colors.woodDark};

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 2 colunas no mobile para manter simetria */
  }
`;

const SkillCard = styled.div`
  /* A cor depende se o índice é par ou ímpar para alternar Branco/Preto */
  background-color: ${(props) => props.isDark ? props.theme.colors.boardBlack : props.theme.colors.ivoryLight};
  color: ${(props) => props.isDark ? props.theme.colors.ivoryLight : props.theme.colors.textContrast};
  
  aspect-ratio: 1 / 1; /* Quadrado perfeito */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  padding: 20px;

  svg {
    font-size: 2.5rem;
    margin-bottom: 12px;
    color: ${({ theme }) => theme.colors.accent};
  }

  span {
    font-weight: bold;
    font-size: 0.8rem;
    text-transform: uppercase;
    text-align: center;
  }

  &:hover {
    transform: scale(1.02);
    z-index: 2;
    box-shadow: inset 0 0 0 3px ${({ theme }) => theme.colors.accent};
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
          // Lógica para alternar cores estilo xadrez em grid de 4 colunas
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