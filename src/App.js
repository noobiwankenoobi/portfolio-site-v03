import React from "react";
import Landing from "./components/Landing";
import About from "./components/About";
import About2 from "./components/About2";
import Goals from "./components/Goals";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App flex flex-col h-auto w-screen">
      <Landing />
      <About />
      <About2 />
      <Goals />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
