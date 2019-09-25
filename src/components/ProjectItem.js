import React from "react";
import styled from "styled-components";

const ProjectItem = ({ project }) => {
  const { name, description, projectLink, codeLink, background } = project;

  const Background = styled.div`
    height: 100%;
    img {
      height: 100%;
      width: 100%;
    }
  `;

  return (
    <div id='projectItem'>
      <h3>{name}</h3>
      {background && (
        <Background>
          <img src={background} alt='project' />
          <div className='overlay'></div>
        </Background>
      )}

      <div className='container'>
        <div className='links'>
          <a target='_blank' rel='noopener noreferrer' href={projectLink}>
            Project
          </a>
          <a target='_blank' rel='noopener noreferrer' href={codeLink}>
            Code
          </a>
        </div>
        <div className='description'>{description}</div>
      </div>
    </div>
  );
};

export default ProjectItem;
