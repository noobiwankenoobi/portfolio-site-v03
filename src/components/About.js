import React from "react";
// ICONS
import { BsArrowDownShort } from "react-icons/bs";

const About = () => {
  const AboutJSX = (
    <div className="landing-section bg-gray-900 flex flex-col justify-center items-center md:h-screen md:w-screen text-gray-100 ">
      <div className="flex flex-col justify-center items-center mx-auto my-auto">
        <h1 className="text-5xl tracking-widest">
          <span className="text-cyberdesatturq">ROSS</span> HAZELETT
        </h1>
        <h1 className="text-3xl tracking-widest">
          web <span className="text-cyberburnorange">developer</span>
        </h1>

        <h1 className="flex tracking-wider justify-center items-center text-xl md:mt-6 ">
          or keep scrolling
          <BsArrowDownShort className="animate-bounce text-cyberdesatturq" />
        </h1>
      </div>
    </div>
  );

  return AboutJSX;
};

export default About;
