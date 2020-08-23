import React from "react";

const About2 = () => {
  const About2JSX = (
    <div className="full-page flex justify-center items-center w-screen h-screen text-left bg-gray-100">
      <div className="main flex flex-row justify-center items-center w-4/5 h-full ">
        <div className="w-1/2 h-full flex justify-center items-center">
          <div className="flex flex-col w-full">
            <p className="text-4xl text-gray-900 font-bold tracking-tight ">
              I decided to get serious.
            </p>
            <p className="text-xl text-gray-900 mt-4 text-opacity-75">
              I played at being a professional illustrator in my 20s. <br />
              But I didn't know what I wanted to do until a year ago.
            </p>
            <p className="text-xl text-gray-900 mt-4 text-opacity-75">
              I fell in love with coding and made a career switch.
            </p>
            <p className="text-2xl tracking-tight text-gray-900 font-bold mt-8">
              Coding is my redemption arc.
            </p>
          </div>
        </div>
        <div className="w-1/2 h-full flex justify-center items-center">
          <div className="flex flex-col space-y-6 w-full items-center justify-center">
            <img
              className="w-2/3 object-cover rounded-lg shadow-md"
              src="https://i.gifer.com/5lzw.gif"
              alt="looking-for-hope"
            />
            <img
              className="w-2/3 object-cover rounded-lg shadow-md"
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
