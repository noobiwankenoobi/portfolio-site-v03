import React from "react";

const Landing = () => {
  //////////////////
  // LANDING JSX //
  /////////////////////////////
  const LandingJSX = (
    <div className="landing-section bg-gray-900 flex flex-col justify-center items-center md:h-screen md:w-screen text-gray-100 ">
      <div className="flex flex-col justify-center items-center mx-auto my-auto">
        <h1 className="text-5xl tracking-widest">ROSS HAZELETT</h1>
        <h1 className="text-3xl tracking-widest">web developer</h1>
        <button className="text-lg md:mt-6 tracking-wide border border-gray-600 p-2 rounded">
          VIEW PROJECTS
        </button>
        <h1 className="text-xl md:mt-4">
          or keep scrolling <i className="fa fa-angle-down down-arrow"></i>
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
