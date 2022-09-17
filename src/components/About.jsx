import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b  text-slate-600"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl">
          Enthusiastic, dedicated and detail-oriented person with excellent
          focus, communication and ability to learn rapidly. Excels working in a
          team environment. Strong critical analysis and problem solving.
        </p>
      </div>
    </div>
  );
};

export default About;
