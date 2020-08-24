import React from "react";

const Projects = () => {
  const ProjectCardsJSX = (
    <>
      <div className="flex h-auto w-auto border border-gray-600 border-solid"></div>
      <div className="flex h-auto w-auto border border-gray-600 border-solid"></div>
      <div className="flex h-auto w-auto border border-gray-600 border-solid"></div>
      <div className="flex h-auto w-auto border border-gray-600 border-solid"></div>
      <div className="flex h-auto w-auto border border-gray-600 border-solid"></div>
      <div className="flex h-auto w-auto border border-gray-600 border-solid"></div>
      <div className="flex h-auto w-auto border border-gray-600 border-solid"></div>
      <div className="flex h-auto w-auto border border-gray-600 border-solid"></div>
      <div className="flex h-auto w-auto border border-gray-600 border-solid"></div>
    </>
  );

  const ProjectsBoxJSX = (
    <div className="full-page flex justify-center items-center w-screen h-screen text-left p-12 bg-gray-100">
      <div className="flex justify-center items-center w-full h-full border border-gray-800 border-solid rounded-lg">
        <div className="w-full h-full grid gap-8 p-8  grid-cols-3">
          {ProjectCardsJSX}
        </div>
        <div className="flex flex-col w-1/4 h-auto bg-gray-800 justify-center p-16 rounded-lg absolute ">
          <p className="text-2xl text-gray-500 tracking-wide w-4/5">04.</p>
          <p className="text-4xl text-gray-100 font-bold tracking-tight text-left">
            PROJECTS
          </p>
          <p className="text-2xl text-gray-500 tracking-wide mt-4 ">
            All of these were done in the last 5 months and use a variety of
            technologies.
          </p>
          <p className="text-2xl font-bold tracking-tight text-left mt-8 text-gray-200 mb-8">
            Click on one to expand and learn more.
          </p>
        </div>
      </div>
    </div>
  );

  return ProjectsBoxJSX;
};

export default Projects;
