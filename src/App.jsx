import React from 'react';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Acomplishements from "./components/Acomplishements";
import Project from "./components/Project";
import Cv from "./components/Cv";
import { StyledApp } from "./style/app"; // Assurez-vous que le chemin est correct

function App() {
  return (
    <StyledApp>
      <Header />
      <Hero />
      <Project />
      <Acomplishements />
      <Cv />
    </StyledApp>
  );
}

export default App;