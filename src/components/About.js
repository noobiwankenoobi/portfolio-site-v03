import React from "react";
// ICONS
import { BsArrowDownShort } from "react-icons/bs";

const About = () => {
  ////////////////
  // ABOUT JSX //
  ////////////////////
  const AboutJSX = (
    <div className="landing-section bg-gray-100 flex flex-col justify-center items-center md:h-screen md:w-screen text-gray-800 text-center">
      <div className="flex flex-col justify-center items-center mx-auto my-auto">
        <p className="text-4xl tracking-tight font-semibold ">
          my name is
          <span className="text-cyberburnorange tracking-tight font-semibold">
            {" "}
            ross hazelett
          </span>
        </p>

        <p className="text-gray-800 text-2xl tracking-wide">
          this is version two point oh of my portfolio
        </p>

        <p className="flex tracking-wide justify-center items-center text-lg md:mt-6 ">
          i am hoping you'll offer me a job so that i<br /> don't have to make
          version three
        </p>
        <BsArrowDownShort className="animate-bounce text-cyberburnorange mt-4" />
      </div>
    </div>
  );

  return AboutJSX;
};

export default About;
