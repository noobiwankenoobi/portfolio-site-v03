import React from "react";

const Goals = () => {
  const GoalsJSX = (
    <div className="full-page flex justify-center items-center w-screen h-screen text-left p-12 bg-gray-100">
      <div className="main flex flex-row justify-center items-center w-full h-full bg-vegeta bg-cover rounded-lg ">
        <div className="w-1/3 h-full flex justify-center items-center">
          <div className="flex flex-col w-full bg-gray-900 p-6 rounded-lg bg-opacity-75 ml-8">
            <p className="text-4xl text-gray-100 font-bold tracking-tight text-left">
              Goals.
            </p>
            <p className="text-xl text-gray-400 mt-4 text-opacity-100 leading-8">
              My strengths are probably React and UX. <br />
              But my main goal is to be able to architect and build any project
              with any technology necessary — without friction or loss of
              quality.
            </p>
            <p className="text-xl text-gray-400 mt-4 text-opacity-100">
              I want a power level of 9000 and I am charging towards it.
            </p>
          </div>
        </div>
        <div className="w-2/3 h-full flex justify-center items-center  "></div>
      </div>
    </div>
  );

  return GoalsJSX;
};

export default Goals;
