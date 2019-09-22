import React from "react";
import styled from "styled-components";

const Skills = () => {
  const SkillsComponent = styled.div`
    height: 70vh;
  `;
  return (
    <SkillsComponent>
      <p>HTML and CSS</p>
      <p>Javascript</p>
      <p>React</p>
      <p>Sass</p>
      <p>Nodejs</p>
      <p>MongoDB</p>
      <p>Express</p>
    </SkillsComponent>
  );
};

export default Skills;
