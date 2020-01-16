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
        <Route path="/projects/werewolf">
          <Werewolf />
        </Route>

        <Route path="/projects/javachat">
          <JavaChat />
        </Route>

        <Route path="/projects/chachino">
          <Chachino />
        </Route>

        <Route path="/projects/8bitcomp">
          <BitComp />
        </Route>

        <Route path="/projects/treasurehunt">
          <TreasureHunt />
        </Route>

        <Route path="/projects/radioinfo">
          <RadioInfo />
        </Route>

        <Route path="/projects/antitd">
          <AntiTD />
        </Route>

        <Route path="/projects/portfolio">
          <Portfolio />
        </Route>

        <Route path="/projects">
          <Projects />
        </Route>

        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
