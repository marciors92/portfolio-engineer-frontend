import React from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

const ProjectsSection = styled.section`
  padding: 100px 10%;
  background-color: ${({ theme }) => theme.colors.boardBlack};
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 60px;
  color: ${({ theme }) => theme.colors.ivoryLight};
  font-size: 2.5rem;
`;

const ProjectCard = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  margin-bottom: 80px;
  flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};

  @media (max-width: 968px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProjectImageContainer = styled.div`
  flex: 1;
  height: 350px;
  width: 100%;
  border-radius: 8px;
  border: 4px solid ${({ theme }) => theme.colors.accent};
  overflow: hidden; /* Garante que a imagem não saia do card */
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
  background: ${({ theme }) => theme.colors.woodDark};
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Enquadramento Sênior: preenche sem distorcer */
    object-position: center;
    transition: transform 0.5s ease;
  }

  &:hover {
    transform: scale(1.02);
    border-color: ${({ theme }) => theme.colors.ivoryLight};
    
    img {
      transform: scale(1.1);
    }
  }
`;

const ProjectInfo = styled.div`
  flex: 1;

  h3 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: 15px;
  }

  p {
    color: ${({ theme }) => theme.colors.ivoryDark};
    margin-bottom: 20px;
    font-size: 1.05rem;
    line-height: 1.6;
  }
`;

const TechList = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 25px;

  span {
    background: ${({ theme }) => theme.colors.woodDark};
    color: ${({ theme }) => theme.colors.ivoryLight};
    padding: 6px 14px;
    border-radius: 4px;
    font-size: 0.75rem;
    border: 1px solid ${({ theme }) => theme.colors.accent};
    font-weight: 500;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 968px) {
    justify-content: center;
  }
`;

const ProjectButton = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.ivoryLight};
  font-weight: bold;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const MoreProjectsContainer = styled.div`
  text-align: center;
  margin-top: 40px;
  padding: 40px;
  border-top: 1px solid ${({ theme }) => theme.colors.woodDark};
`;

const MoreProjectsText = styled.p`
  color: ${({ theme }) => theme.colors.ivoryDark};
  font-size: 1.2rem;
  margin-bottom: 20px;
  font-family: ${({ theme }) => theme.fonts.secondary};
`;

const GitHubRepoLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 25px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.accent};
  border: 1px solid ${({ theme }) => theme.colors.accent};
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.boardBlack};
    transform: translateY(-3px);
  }
`;

const Projects = () => {
  const myProjects = [
    {
      title: "♜ Diário de Bordo",
      desc: "Aplicação Web Progressiva (PWA) desenvolvida para registro de atividades diárias, focada em resiliência offline e arquitetura modular. Utiliza Service Workers para suporte offline-first, persistência via LocalStorage e design system customizado com modo escuro.",
      tech: ["PWA", "JavaScript ES6+", "Service Workers", "LocalStorage"],
      link: "https://github.com/marciors92/diario-de-bordo-pwa",
      image: "/assets/projects/diario-de-bordo.png",
      reverse: false
    },
    {
      title: "♛ MasterFood",
      desc: "Aplicação de delivery escalável baseada em Micro Front-ends (MFE). Utiliza Webpack 5 e Module Federation para integrar apps independentes, garantindo autonomia de deploy e comunicação via Custom Events.",
      tech: ["Micro Front-ends", "React", "Next.js", "Webpack 5"],
      link: "https://github.com/marciors92/projeto-delivery-mfe",
      image: "/assets/projects/masterfood.gif",
      reverse: true
    },
    {
      title: "♞ Lista de Afazeres",
      desc: "Gerenciamento de tarefas avançado com Context API e Hooks customizados. Implementa Memoization (useMemo/React.memo) para otimização de ciclos de renderização e persistência de dados eficiente.",
      tech: ["React", "Context API", "Hooks", "Memoization"],
      link: "https://github.com/marciors92/todo-list-react-advanced",
      image: "/assets/projects/lista-de-afazeres.gif",
      reverse: false
    },
    {
      title: "♚ Portfólio | Chess-Driven",
      desc: "Single Page Application de alta performance com grid dinâmico baseado em lógica algorítmica de xadrez. Interface fluida com Styled Components, tipografia adaptativa e foco em engenharia front-end.",
      tech: ["React", "Styled Components", "FEED", "Responsive Design"],
      link: "https://github.com/marciors92/portfolio-engineer-frontend",
      image: "/assets/projects/chess-driven.jpg",
      reverse: true
    }
  ];

  return (
    <ProjectsSection id="projetos">
      <SectionTitle>Jogadas Mestre (Projetos)</SectionTitle>
      {myProjects.map((proj, index) => (
        <ProjectCard key={index} reverse={proj.reverse}>
          <ProjectImageContainer>
            <img
              src={proj.image}
              alt={proj.title}
              loading="lazy"
              decoding="async"
            />
          </ProjectImageContainer>
          <ProjectInfo>
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
            <TechList>
              {proj.tech.map(t => <span key={t}>{t}</span>)}
            </TechList>
            <ButtonGroup>
              <ProjectButton href={proj.link} target="_blank" rel="noopener noreferrer">
                <FaGithub /> Código no GitHub
              </ProjectButton>
            </ButtonGroup>
          </ProjectInfo>
        </ProjectCard>
      ))}

      <MoreProjectsContainer>
        <MoreProjectsText>
          Deseja visualizar mais jogadas técnicas?
        </MoreProjectsText>
        <GitHubRepoLink
          href="https://github.com/marciors92?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> Ver Repositório Completo
        </GitHubRepoLink>
      </MoreProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;