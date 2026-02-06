import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

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

const ProjectImage = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.colors.woodDark};
  height: 300px;
  width: 100%;
  border-radius: 8px;
  border: 4px solid ${({ theme }) => theme.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.ivoryDark};
  font-size: 1.5rem;
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
  
  /* ADIÇÃO: Transição suave para o efeito Hover */
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;

  /* ADIÇÃO: Efeito de Hover */
  &:hover {
    transform: scale(1.03);
    border-color: ${({ theme }) => theme.colors.ivoryLight};
    box-shadow: 0 30px 60px rgba(0,0,0,0.6);
    filter: brightness(1.1);
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
    font-size: 1.1rem;
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
    padding: 5px 12px;
    border-radius: 4px;
    font-size: 0.8rem;
    border: 1px solid ${({ theme }) => theme.colors.accent};
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
            title: "Cine Millenium",
            desc: "Aplicação de catálogo de filmes desenvolvida com React e Styled Components, consumindo APIs externas para dados em tempo real.",
            tech: ["React", "Styled Components", "API Rest"],
            link: "https://github.com/marciors92/cine-millenium",
            reverse: false
        },
        {
            title: "Diário de Bordo PWA",
            desc: "Progressive Web App focado em offline-first, permitindo o registro de dados mesmo sem conexão, utilizando Service Workers.",
            tech: ["PWA", "JavaScript", "Service Workers"],
            link: "https://github.com/marciors92/diario-de-bordo-pwa",
            reverse: true
        },
        {
            title: "Projeto Delivery MFE",
            desc: "Arquitetura avançada de Micro Front-ends para um sistema de delivery, garantindo escalabilidade e independência de módulos.",
            tech: ["Micro Front-ends", "React", "Next.js"],
            link: "https://github.com/marciors92/projeto-delivery-mfe",
            reverse: false
        }
    ];

    return (
        <ProjectsSection id="projetos">
            <SectionTitle>Jogadas Mestre (Projetos)</SectionTitle>
            {myProjects.map((proj, index) => (
                <ProjectCard key={index} reverse={proj.reverse}>
                    <ProjectImage>
                        [Preview do Projeto]
                    </ProjectImage>
                    <ProjectInfo>
                        <h3>{proj.title}</h3>
                        <p>{proj.desc}</p>
                        <TechList>
                            {proj.tech.map(t => <span key={t}>{t}</span>)}
                        </TechList>
                        <ButtonGroup>
                            <ProjectButton href={proj.link} target="_blank">
                                <FaGithub /> Código
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