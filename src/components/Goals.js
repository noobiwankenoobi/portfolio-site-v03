import React from "react";

const Goals = () => {
  ////////////////
  // GOALS JSX //
  ////////////////////
  const GoalsJSX = (
    <div className="full-page flex justify-center items-center w-screen h-screen text-left p-12 bg-gray-100">
      <div className="main flex flex-row justify-center items-center w-full h-full bg-vegeta bg-cover rounded-lg p-12 ">
        <div className="w-full h-auto flex justify-start items-center">
          <div className="flex flex-col  h-full bg-gray-900 p-12 rounded-lg bg-opacity-75 justify-center w-1/3">
            <p className="text-2xl text-gray-500 tracking-wide mt-6 ">02.</p>
            <p className="text-4xl text-gray-100 font-semibold tracking-tight text-left">
              GOALS
            </p>
            <p className="text-xl text-gray-300 mt-4 text-opacity-100 leading-8 ">
              My strengths are probably React and UX.
            </p>
            <p className="text-xl text-gray-300 mt-4 text-opacity-100 leading-8 ">
              But my main goal is to be able to architect and build any project
              with any technology necessary <br /> without friction or loss of
              quality.
            </p>
            <p className="text-2xl font-bold tracking-tight text-left mt-6 text-gray-200 mb-8">
              I want a power level of
              <br /> 9000 and I am charging towards it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return GoalsJSX;
};

export default Goals;
