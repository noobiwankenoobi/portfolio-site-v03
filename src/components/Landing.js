import React from "react";
// ICONS
import { BsArrowDownShort } from "react-icons/bs";

const Landing = () => {
  //////////////////
  // LANDING JSX //
  /////////////////////////////
  const LandingJSX = (
    <div className="landing-section bg-gray-900 flex flex-col justify-center items-center md:h-screen md:w-screen text-gray-100 ">
      <div className="flex flex-col justify-center items-center mx-auto my-auto">
        <h1 className="text-5xl tracking-widest">
          <span className="text-cyberdesatturq">ROSS</span> HAZELETT
        </h1>
        <h1 className="text-3xl tracking-widest">
          web <span className="text-cyberburnorange">developer</span>
        </h1>
        <button className="text-lg text-gray-300 tracking-wider md:mt-6 border border-gray-600 bg-opacity-75 p-2 rounded hover:shadow-lg transition duration-500 ease-in-out transform hover:border-2 hover:scale-105 hover:border-cyberlightblue">
          VIEW PROJECTS
        </button>
        <h1 className="flex tracking-wider justify-center items-center text-xl md:mt-6 ">
          or keep scrolling{" "}
          <BsArrowDownShort className="animate-bounce text-cyberdesatturq" />
        </h1>
      </div>
    </div>
  );

  /////////////////
  // JSX RETURN //
  /////////////////////////////
  return LandingJSX;
};

export default Landing;
