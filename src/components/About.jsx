import React from "react";
import ancp from "../assets/ancp.jpeg";
const About = () => {
  return (
    <div name="about" className="w-full h-screen pt-[80px] text-slate-600">
      <div className="max-w-screen-lg p-4 mx-auto  flex flex-col md:flex-row justify-center items-center w-full h-full">
        <div className="flex-1 flex-col ">
          <p className="text-4xl font-bold inline w-[120px] border-b-4 border-gray-500">
            About
          </p>
          <p className="text-xl py-8">
            Enthusiastic, dedicated and detail-oriented person with excellent
            focus, communication and ability to learn rapidly. Excels working in
            a team environment. Strong critical analysis and problem solving.
          </p>
        </div>

        <div className="flex-1 flex items-center justify-end">
          <img
            className="w-[350px] border-4 border-slate-300"
            src={ancp}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
