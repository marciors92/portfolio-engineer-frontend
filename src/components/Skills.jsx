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
  font-size: 2.5rem;
  margin-bottom: 50px;
  color: ${({ theme }) => theme.colors.woodDark};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;
`;

const SkillCard = styled.div`
  background-color: ${(props) => props.dark ? props.theme.colors.boardBlack : props.theme.colors.ivoryLight};
  color: ${(props) => props.dark ? props.theme.colors.ivoryLight : props.theme.colors.textContrast};
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.ivoryDark};
  transition: all 0.3s ease;

  svg {
    font-size: 2.5rem;
    margin-bottom: 15px;
    color: ${({ theme }) => theme.colors.accent};
  }

  span {
    font-weight: bold;
    font-size: 0.9rem;
    text-transform: uppercase;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    z-index: 2;
  }
`;

const Skills = () => {
    const skills = [
        { name: 'React', icon: <FaReact />, dark: true },
        { name: 'TypeScript', icon: <SiTypescript />, dark: false },
        { name: 'Next.js', icon: <SiNextdotjs />, dark: true },
        { name: 'JavaScript', icon: <SiJavascript />, dark: false },
        { name: 'Tailwind', icon: <SiTailwindcss />, dark: false },
        { name: 'Styled Components', icon: <SiStyledcomponents />, dark: true },
        { name: 'Node.js', icon: <FaNodeJs />, dark: false },
        { name: 'AWS', icon: <FaAws />, dark: true },
        { name: 'SQL/Postgres', icon: <SiPostgresql />, dark: true },
        { name: 'Git', icon: <FaGitAlt />, dark: false },
        { name: 'HTML5', icon: <FaHtml5 />, dark: true },
        { name: 'CSS3/SASS', icon: <FaCss3Alt />, dark: false },
    ];

    return (
        <SkillsSection id="habilidades">
            <SectionTitle>Minhas Peças (Skills)</SectionTitle>
            <Grid>
                {skills.map((skill, index) => (
                    <SkillCard key={index} dark={skill.dark}>
                        {skill.icon}
                        <span>{skill.name}</span>
                    </SkillCard>
                ))}
            </Grid>
        </SkillsSection>
    );
};

export default Skills;