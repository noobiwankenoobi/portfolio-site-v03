import React from "react";

const About2 = () => {
  //////////////
  // ABOUT 2 //
  ////////////////////
  const About2JSX = (
    <div className="full-page flex justify-center items-center w-screen h-screen text-left p-12 bg-gray-100">
      <div className="flex justify-center items-center w-full h-full border border-gray-800 border-solid rounded-lg p-12">
        <div className="flex flex-col w-1/3 h-auto bg-gray-800 justify-center p-16 rounded-lg ">
          <p className="text-2xl text-gray-500 tracking-wide mt-6 ">01.</p>
          <p className="text-6xl text-gray-100 font-teko font-medium tracking-normal text-left">
            ABOUT ME
          </p>
          <p className="text-3xl text-gray-100 font-semibold tracking-tight mt-2">
            I finally decided to get serious.
          </p>

          <p className="text-xl text-gray-100 mt-4 text-opacity-75">
            I dabbled at being a professional illustrator in my 20s. But I
            didn't truly know what I wanted to do until a year ago. I fell in
            love with coding and made a career switch.
          </p>

          <p className="text-2xl tracking-tight text-gray-100 font-semibold mt-8 mb-8">
            Coding is my redemption arc.
          </p>
        </div>
        <div className="w-2/3 h-full flex justify-center items-center pl-12">
          <div className="flex flex-col space-y-6 w-full items-center justify-center">
            <img
              className="w-full object-cover rounded-lg shadow-md"
              src="https://i.gifer.com/5lzw.gif"
              alt="looking-for-hope"
            />
            <img
              className="w-full object-cover rounded-lg shadow-md"
              src="https://geekgirlcon.com/wp-content/uploads/2015/12/redemption2.gif"
              alt="redemption"
            />
          </div>
        </div>
      </div>
    </div>
  );

  return About2JSX;
};

export default About2;
