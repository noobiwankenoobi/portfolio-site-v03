import React from "react";

const Skills = () => {
  /////////////////////
  // ICONS GOOD JSX //
  /////////////////////
  const IconsGoodJSX = (
    <>
      <div className="skill-icon h-24 w-20 border border-solid border-gray-600"></div>
      <div className="skill-icon h-24 w-20 border border-solid border-gray-600"></div>
      <div className="skill-icon h-24 w-20 border border-solid border-gray-600"></div>
      <div className="skill-icon h-24 w-20 border border-solid border-gray-600"></div>
      <div className="skill-icon h-24 w-20 border border-solid border-gray-600"></div>
      <div className="skill-icon h-24 w-20 border border-solid border-gray-600"></div>
      <div className="skill-icon h-24 w-20 border border-solid border-gray-600"></div>
      <div className="skill-icon h-24 w-20 border border-solid border-gray-600"></div>
      <div className="skill-icon h-24 w-20 border border-solid border-gray-600"></div>
      <div className="skill-icon h-24 w-20 border border-solid border-gray-600"></div>
      <div className="skill-icon h-24 w-20 border border-solid border-gray-600"></div>
      <div className="skill-icon h-24 w-20 border border-solid border-gray-600"></div>
      <div className="skill-icon h-24 w-20 border border-solid border-gray-600"></div>
      <div className="skill-icon h-24 w-20 border border-solid border-gray-600"></div>
      <div className="skill-icon h-24 w-20 border border-solid border-gray-600"></div>
      <div className="skill-icon h-24 w-20 border border-solid border-gray-600"></div>
      <div className="skill-icon h-24 w-20 border border-solid border-gray-600"></div>
      <div className="skill-icon h-24 w-20 border border-solid border-gray-600"></div>
    </>
  );

  /////////////////////
  // ICONS USED JSX //
  ///////////////////////
  const IconsUsedJSX = (
    <>
      <div className="skill-icon h-24 w-20 border border-solid border-gray-600"></div>
      <div className="skill-icon h-24 w-20 border border-solid border-gray-600"></div>
      <div className="skill-icon h-24 w-20 border border-solid border-gray-600"></div>
      <div className="skill-icon h-24 w-20 border border-solid border-gray-600"></div>
    </>
  );

  /////////////////////////
  // ICONS EXPOSURE JSX //
  ///////////////////////////
  const IconsExposureJSX = (
    <>
      <div className="skill-icon h-24 w-20 border border-solid border-gray-600"></div>
      <div className="skill-icon h-24 w-20 border border-solid border-gray-600"></div>
      <div className="skill-icon h-24 w-20 border border-solid border-gray-600"></div>
      <div className="skill-icon h-24 w-20 border border-solid border-gray-600"></div>
    </>
  );

  /////////////////
  // SKILLS JSX //
  /////////////////////
  const SkillsJSX = (
    <div className="full-page flex justify-center items-center w-screen h-screen text-left p-12 bg-gray-100 shadow-2xl">
      <div className="flex justify-center items-center w-full h-full border border-gray-800 border-solid rounded-lg p-12">
        <div className="flex flex-col w-1/3 h-auto bg-gray-800 justify-center p-16 rounded-lg ">
          <p className="text-2xl text-gray-500 tracking-wide mt-6 ">03.</p>
          <p className="text-6xl text-gray-100 tracking-normal font-medium text-left font-teko">
            SKILLS
          </p>

          <p className="text-xl text-gray-500 tracking-wide mt-2">
            My frustration with the disorganization and unnecessary complexity
            of the internet drives my empathetic user experience design process
            — I believe that if someone can't figure something out, or find what
            they're looking for on a website, it's a design problem not a user
            problem.
          </p>
          <p className="text-2xl font-bold tracking-tight text-left mt-8 mb-8 text-gray-200">
            Also, here are some icons of the technologies I've worked with.
          </p>
        </div>
        <div className="w-2/3 h-full p-16">
          <div className="w-full h-auto">
            <p className="text-xl font-bold text-gray-800 text-opacity-75 tracking-tight mb-4">
              I AM GOOD WITH
            </p>
            <div className="flex w-full justify-start flex-wrap">
              {IconsGoodJSX}
            </div>
          </div>
          <div className="w-full h-auto">
            <p className="text-xl font-bold text-gray-800 text-opacity-75 tracking-tight my-4">
              I HAVE USED
            </p>
            <div className="flex w-full justify-start flex-wrap">
              {IconsUsedJSX}
            </div>
          </div>
          <div className="w-full h-auto">
            <p className="text-xl font-bold text-gray-800 text-opacity-75 tracking-tight my-4">
              I HAVE EXPOSURE TO
            </p>
            <div className="flex w-full justify-start flex-wrap">
              {IconsExposureJSX}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return SkillsJSX;
};

export default Skills;
