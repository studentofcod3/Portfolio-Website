import React, { useContext } from "react";
import ProjectContext from "../context/project/projectContext";
import ProjectItem from "./ProjectItem";
import styled from "styled-components";

const Projects = () => {
  const projectContext = useContext(ProjectContext);

  const { projects } = projectContext;

  const ProjectContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 1rem;

    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 90%;
    }
  `;
  return (
    <ProjectContainer>
      {projects.map(project => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </ProjectContainer>
  );
};

export default Projects;
