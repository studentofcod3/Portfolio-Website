import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import ProjectState from "./context/project/ProjectState";

function App() {
  const App = styled.div`
    color: #eee;
    min-height: 100vh;
    box-sizing: border-box;
    font-size: 1.4rem;
    text-align: center;
    font-family: "Chakra Petch", sans-serif;

    @media (max-width: 768px) {
      // height: 165vh;
    }
  `;

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 75%;
    margin: auto;
    line-height: 1.6;

    @media (max-width: 768px) {
      width: 100%;
    }
  `;

  const Name = styled(Link)`
    text-decoration: none;
    color: #85c1e9;
    font-size: 2.4rem;
  `;

  const Links = styled.div`
    margin-top: 2rem;
    margin-bottom: 6rem;
  `;

  const StyledLink = styled(Link)`
    border: none;
    background: none;
    margin: 1rem;
    padding: 0.5rem 1rem;
    font-family: "Chakra Petch", sans-serif;
    color: #ddd;
    font-size: 1rem;
    transition: all ease-in 0.3s;
    text-decoration: none;

    :hover {
      background: #fff;
      color: #111;
    }
  `;

  return (
    <ProjectState>
      <Router>
        <App>
          <Container>
            <Name to='/'>Ayyoub Maknassa</Name>
            <Links>
              <StyledLink to='/projects'>Projects </StyledLink>
              <StyledLink to='/skills'>Skills </StyledLink>
              <StyledLink to='/contact'>Contact </StyledLink>
            </Links>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/skills' component={Skills} />
              <Route exact path='/projects' component={Projects} />
              <Route exact path='/contact' component={Contact} />

              {/* Skills component */}
              {/* Projects component*/}
              {/* Contact component*/}
            </Switch>
          </Container>
        </App>
      </Router>
    </ProjectState>
  );
}

export default App;
