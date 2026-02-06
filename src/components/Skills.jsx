import React from 'react';
import styled from 'styled-components';
import {
  FaReact, FaNodeJs, FaAws, FaGitAlt, FaHtml5, FaCss3Alt
} from 'react-icons/fa';
import {
  SiTypescript, SiJavascript, SiNextdotjs, SiTailwindcss, SiStyledcomponents, SiPostgresql
} from 'react-icons/si';

const SkillsSection = styled.section`
  padding: 60px 0; /* Removido padding lateral para evitar empurrar o grid no mobile */
  background-color: ${({ theme }) => theme.colors.boardWhite};
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden; /* Garante que a seção contenha qualquer vazamento */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 2.2rem;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.colors.woodDark};
  padding: 0 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0; 
  max-width: 700px; 
  width: 90%; /* Ajustado para 90% para dar um respiro lateral automático */
  margin: 0 auto;
  border: 2px solid ${({ theme }) => theme.colors.woodDark};
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  box-sizing: border-box;
  overflow: hidden; /* Corta qualquer conteúdo que tente expandir o quadrado */

  @media (max-width: 768px) {
    width: 95%; /* Quase toca as bordas no mobile, mas mantém alinhado */
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
  padding: 5px; /* Padding fixo pequeno para priorizar espaço dos ícones */
  box-sizing: border-box;
  min-width: 0; /* Permite que o flex-item encolha além do conteúdo se necessário */

  svg {
    font-size: clamp(1rem, 5vw, 2rem); 
    margin-bottom: clamp(2px, 1vw, 8px);
    color: ${({ theme }) => theme.colors.accent};
    flex-shrink: 0; /* Impede o ícone de amassar */
  }

  span {
    font-weight: bold;
    font-size: clamp(0.4rem, 2vw, 0.7rem); 
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 0.5px;
    line-height: 1;
    word-break: break-word; /* Evita que nomes longos empurrem a borda */
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