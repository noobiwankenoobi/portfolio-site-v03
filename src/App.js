import React from "react";
import Landing from "./components/Landing";
import About from "./components/About";
import About2 from "./components/About2";

// import './App.css';

function App() {
  return (
    <div className="App flex flex-col h-auto w-screen">
      <Landing />
      <About />
      <About2 />
    </div>
  );
}

export default App;
