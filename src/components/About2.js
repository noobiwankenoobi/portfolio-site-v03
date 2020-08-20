import React from "react";

const About2 = () => {
  const About2JSX = (
    <div className="full-page flex justify-center items-center w-screen h-screen bg-summerbeige ">
      <div className="main flex flex-row justify-center items-center w-4/5 h-full bg-summerlight">
        <div className="w-1/2 h-full flex justify-center items-center">
          <div className="flex flex-col space-y-4">
            <p className="text-3xl text-gray-800 font-bold">
              I decided to get serious.
            </p>
            <p className="text-xl text-gray-700">
              I played at being a professional illustrator in my 20s. <br />
              But I didn't know what I wanted to do until a year ago.
            </p>
            <p className="text-xl text-gray-700">
              I fell in love with coding and made a career switch.
            </p>
            <p className="text-xl text-gray-800">
              Coding is my redemption arc.
            </p>
          </div>
        </div>
        <div className="w-1/2 h-full flex justify-center items-center">
          Gen assembly
        </div>
      </div>
    </div>
  );

  return About2JSX;
};

export default About2;
