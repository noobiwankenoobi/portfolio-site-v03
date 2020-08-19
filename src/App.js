import React from "react";
import Landing from "./components/Landing";
import About from "./components/About";

// import './App.css';

function App() {
  return (
    <div className="App flex flex-col h-auto w-screen">
      <Landing />
      <About />
    </div>
  );
}

export default App;
