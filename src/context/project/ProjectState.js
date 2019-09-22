import React, { useReducer } from "react";
import ProjectContext from "./projectContext";
import projectReducer from "./projectReducer";
import aviskr from "../../images/aviskr-thumbnail.jpg";
import contactkeeper from "../../images/contactkeeper-thumbnail.JPG";

const ProjectState = props => {
  const initialState = {
    projects: [
      {
        id: 1,
        name: "Aviskr",
        description:
          "Website for an organisation dedicated to policy research - Built using React",
        projectLink:
          "https://5d77d7067ecb76b23e37f9f8--aviskr23242.netlify.com/",
        codeLink: "https://github.com/studentofcod3/Aviskr-2.0",
        background: aviskr
      },
      {
        id: 2,
        name: "Contact Manager",
        description:
          "A Fullstack application built using the MERN stack and JWT for user authentication",
        projectLink: "https://blooming-waters-98960.herokuapp.com/",
        codeLink: "https://github.com/studentofcod3/Applicants-Manager",
        background: contactkeeper
      }
    ]
  };

  const [state] = useReducer(projectReducer, initialState);

  return (
    <ProjectContext.Provider
      value={{
        projects: state.projects
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectState;
