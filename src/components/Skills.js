import React from "react";

const Skills = () => {
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

  const SkillsJSX = (
    <div className="full-page flex justify-center items-center w-screen h-screen text-left p-12 bg-gray-100">
      <div className="flex justify-center items-center w-full h-full border border-gray-800 border-solid rounded-lg">
        <div className="flex flex-col w-2/5 h-full bg-gray-800 justify-center p-16 rounded-l-lg ">
          <p className="text-4xl text-gray-100 font-bold tracking-tight text-left">
            My skills.
          </p>
          <p className="text-2xl text-gray-500 tracking-wide mt-6  w-4/5">
            My frustration with the disorganization and unnecessary complexity
            of the internet drives my empathetic user experience design process
            — I believe that if someone can't figure something out, or find what
            they're looking for on a website, it's a design problem not a user
            problem.
          </p>
          <p className="text-2xl font-bold tracking-tight text-left mt-6 text-gray-200">
            Also, here are some icons of the technologies I've worked with.
          </p>
        </div>
        <div className="w-3/5 h-full p-16">
          <div className="w-full h-auto">
            <p className="text-xl font-bold tracking-tight">I am good with</p>
            <div className="flex w-full justify-start flex-wrap">
              {IconsGoodJSX}
            </div>
          </div>
          <div className="w-full h-auto">
            <p className="text-xl font-bold tracking-tight">I have used</p>
          </div>
          <div className="w-full h-auto">
            <p className="text-xl font-bold tracking-tight">
              I have exposure to
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return SkillsJSX;
};

export default Skills;
