import React, { useReducer } from "react";
import ProjectContext from "./projectContext";
import projectReducer from "./projectReducer";
import aviskr from "../../images/aviskr-thumbnail.jpg";
import contactkeeper from "../../images/contactkeeper-thumbnail.JPG";
import uidesign from "../../images/uidesign-thumbnail.JPG";

const ProjectState = props => {
  const initialState = {
    projects: [
      {
        id: 1,
        name: "Aviskr",
        description:
          "Website for an organisation dedicated to policy research - Built using React",
        projectLink: "https://cryptic-fjord-57926.herokuapp.com/",
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
      },
      {
        id: 3,
        name: "UI Design",
        description: "A simple UI design page showcasing some CSS manipulation",
        projectLink: "https://morning-falls-43801.herokuapp.com/",
        codeLink: "https://github.com/studentofcod3/UI-design",
        background: uidesign
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
