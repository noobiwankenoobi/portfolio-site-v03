import React from "react";

const Projects = () => {
  const ProjectCardsJSX1 = (
    <>
      <div className="SOCIAL_MEDIA_CLONE flex h-64 w-full rounded transition duration-500 ease-in-out transform hover:scale-105 cursor-pointer shadow-md">
        <div className="flex justify-start items-center w-full h-full ">
          <div className="flex items-center p-4 flex-col justify-center w-2/5 h-full bg-gray-800 leading-10 rounded-l border-l border-t border-b border-gray-800 ">
            <p className="font-teko text-gray-100 font-normal tracking-tight text-5xl ">
              SOCIAL
              <br />
              MEDIA <br />
              CLONE
            </p>
          </div>
          <div className="w-3/5 h-full border border-solid border-gray-600 rounded-r border-l-0 "></div>
        </div>
      </div>

      <div className="VISUALIZE_PATHFINDER flex h-64 w-full border border-gray-600 border-solid rounded transition duration-500 ease-in-out transform hover:scale-105 cursor-pointer">
        <div className=" flex justify-center items-center w-full h-full ">
          <div className="flex items-center flex-col justify-center w-2/5 h-full bg-gray-800 mr-auto p-4 leading-10">
            <p className="font-teko text-gray-100 font-normal tracking-tight text-5xl m-auto absolute">
              VISUALIZE
              <br /> PATHFINDER
            </p>
          </div>
        </div>
      </div>
      <div className="POKEDEX flex h-64 w-full border border-gray-600 border-solid rounded transition duration-500 ease-in-out transform hover:scale-105 cursor-pointer">
        <div className=" flex justify-center items-center w-full h-full ">
          <div className="flex items-center flex-col justify-center w-2/5 h-full bg-gray-800 mr-auto p-4 leading-10">
            <p className="font-teko text-gray-100 font-normal tracking-tight text-5xl m-auto absolute">
              POKÉDEX
            </p>
          </div>
        </div>
      </div>
    </>
  );

  const ProjectCardsJSX2 = (
    <>
      <div className="REACT_TAC_TAO flex h-64 w-full border border-gray-600 border-solid rounded transition duration-500 ease-in-out transform hover:scale-105 cursor-pointer">
        <div className=" flex justify-center items-center w-full h-full ">
          <div className="flex items-center flex-col justify-center w-2/5 h-full bg-gray-800 mr-auto p-6 leading-10">
            <p className="font-teko text-gray-100 font-normal tracking-tight text-5xl m-auto ">
              REACT
              <br /> TAC-TOE
            </p>
          </div>
        </div>
      </div>
      <div className="FACE_DETECT flex h-64 w-full border border-gray-600 border-solid rounded transition duration-500 ease-in-out transform hover:scale-105 cursor-pointer">
        <div className=" flex justify-center items-center w-full h-full ">
          <div className="flex items-center flex-col justify-center w-2/5 h-full bg-gray-800 mr-auto p-6 leading-10">
            <p className="font-teko text-gray-100 font-normal tracking-tight text-5xl m-auto ">
              BROWSER
              <br /> FACE
              <br /> DETECTION
            </p>
          </div>
        </div>
      </div>
      <div className="CURIO_COFFEE flex h-64 min-w-full  border border-gray-600 border-solid rounded transition duration-500 ease-in-out transform hover:scale-105 cursor-pointer">
        <div className=" flex justify-center items-center w-full h-full leading-10">
          <div className="flex items-center flex-col justify-center w-2/5 h-full bg-gray-800 mr-auto p-6">
            <p className="font-teko text-gray-100 font-normal tracking-tight text-5xl m-auto ">
              CURIO
              <br /> COFFEE
              <br /> WEBSITE
            </p>
          </div>
        </div>
      </div>
    </>
  );

  ////////////////////////
  // PROJECT TITLE BOX //
  ////////////////////////////////
  const ProjectTitleBoxJSX = (
    <div className="PROJECT_TITLE flex flex-col w-full h-auto bg-gray-800 justify-center p-16 rounded-lg  ">
      <p className="text-2xl text-gray-500 tracking-wide w-4/5">04.</p>
      <p className="text-6xl text-gray-100 font-normal tracking-normal text-left font-teko">
        PROJECTS
      </p>
      <p className="text-xl text-gray-500 tracking-wide mt-2 ">
        All of these were done in the last 5 months and use a variety of
        technologies.
      </p>
      <p className="text-xl font-bold tracking-tight text-left mt-8 text-gray-200 mb-8">
        Click on one to expand and learn more.
      </p>
    </div>
  );

  ///////////////////////////
  // PROJECTS SECTION JSX //
  //////////////////////////////
  const ProjectsSectionJSX = (
    <div className="PROJECTS_SECTION full-page flex justify-center items-center w-screen h-screen text-left p-12 bg-gray-100">
      <div className="flex justify-center items-center w-full h-full border border-gray-800 border-solid rounded-lg">
        <div className="flex flex-col w-1/3 h-full justify-around items-center p-8">
          {ProjectCardsJSX1}
        </div>
        <div className="flex flex-col w-1/3 h-full justify-around items-center p-8">
          {ProjectTitleBoxJSX}
        </div>
        <div className="flex flex-col w-1/3 h-full justify-evenly items-center p-8">
          {ProjectCardsJSX2}
        </div>
      </div>
    </div>
  );

  return ProjectsSectionJSX;
};

export default Projects;
