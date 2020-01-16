import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Projects from './pages/Projects';
import Portfolio from './pages/projects/Portfolio';
import AntiTD from './pages/projects/AntiTD';
import RadioInfo from './pages/projects/RadioInfo';
import TreasureHunt from './pages/projects/TreasureHunt';
import BitComp from './pages/projects/8BitComp';
import Chachino from './pages/projects/Chachino';
import JavaChat from './pages/projects/JavaChat';
import Werewolf from './pages/projects/Werewolf';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/portfolio/projects/werewolf">
          <Werewolf />
        </Route>

        <Route path="/portfolio/projects/javachat">
          <JavaChat />
        </Route>

        <Route path="/portfolio/projects/chachino">
          <Chachino />
        </Route>

        <Route path="/portfolio/projects/8bitcomp">
          <BitComp />
        </Route>

        <Route path="/portfolio/projects/treasurehunt">
          <TreasureHunt />
        </Route>

        <Route path="/portfolio/projects/radioinfo">
          <RadioInfo />
        </Route>

        <Route path="/portfolio/projects/antitd">
          <AntiTD />
        </Route>

        <Route path="/portfolio/projects/portfolio">
          <Portfolio />
        </Route>

        <Route path="/portfolio/projects">
          <Projects />
        </Route>

        <Route path="/portfolio">
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
