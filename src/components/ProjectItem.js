import React from "react";
import styled from "styled-components";

const ProjectItem = ({ project }) => {
  const { name, description, projectLink, codeLink, background } = project;

  const Div = styled.div`
    background: #000;
    opacity: 0.9;
    border-radius: 8px;
    width: 300px;
    height: 250px;
    margin: 1rem 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;

    :hover {
      .container {
        opacity: 1;

        .description,
        .links {
        }
      }
    }

    h3 {
      margin: 0;
      padding: 0;
      border-bottom: solid 1px #69ad8e;
    }

    .container {
      position: absolute;
      bottom: 30%;
      left: 0;
      opacity: 0;
      transition: all ease-in 0.4s;
      width: 100%;
      border-top: solid 1px #000;
      border-bottom: solid 2px #000;

      .description,
      .links {
        display: flex;
        justify-content: space-around;
        font-size: 0.9rem;
        background: #000;

        a {
          text-decoration: none;
          color: #ddd;
          border: solid 1px #fff;
          border-left: none;
          width: 100%;
          padding: 0.5rem;
          transition: all ease-in 0.4s;

          :clicked {
            color: #fff;
          }

          :hover {
            background: #85C1E9;
            color: #000;
            font-weight: bold;
          }
        }
      }
    }

    @media (max-width: 1024px){
      .container {
        opacity: 0.8;
        bottom: 0;
    }
  `;

  const Background = styled.div`
    height: 100%;
    img {
      height: 100%;
      width: 100%;
    }
  `;

  return (
    <Div>
      <h3>{name}</h3>
      {background && (
        <Background>
          <img src={background} alt='project' />
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
    </Div>
  );
};

export default ProjectItem;
