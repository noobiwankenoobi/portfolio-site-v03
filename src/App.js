import React from "react";
import Landing from "./components/Landing";
import About from "./components/About";
import About2 from "./components/About2";
import Goals from "./components/Goals";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Facts from "./components/Facts";

function App() {
  return (
    <div className="App flex flex-col h-auto w-screen">
      <Landing />
      <About />
      <About2 />
      <Goals />
      <Skills />
      <Projects />
      <Facts />
    </div>
  );
}

export default App;
