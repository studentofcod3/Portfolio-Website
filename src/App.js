import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import QuickLinks from "./components/QuickLinks";

import ProjectState from "./context/project/ProjectState";
import "./App.scss";

function App() {
  const App = styled.div`
    color: #222;
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
    height: 100%;
    width: 75%;
    margin: auto;
    padding: 5rem 0;
    line-height: 1.6;

    @media (max-width: 768px) {
      width: 100%;
    }
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
    color: #743131;
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
        <App id='App'>
          <div className='clip-item'>
            <QuickLinks />
          </div>
          <div className='background'>
            <div className='clip-item-2'></div>
            <div className='overlay'></div>
          </div>
          <Container>
            <Link to='/home' className='name'>
              Ayyoub Maknassa
            </Link>
            <h5>Web developer</h5>
            <Links>
              <StyledLink to='/'>Projects </StyledLink>
              <StyledLink to='/skills'>Skills </StyledLink>
              <StyledLink to='/contact'>Contact </StyledLink>
            </Links>
            {Projects}
            <Switch>
              <Route exact path='/home' component={Home} />
              <Route exact path='/skills' component={Skills} />
              <Route exact path='/' component={Projects} />
              <Route exact path='/contact' component={Contact} />
            </Switch>
          </Container>
        </App>
      </Router>
    </ProjectState>
  );
}

export default App;
