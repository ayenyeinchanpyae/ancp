import React from "react";
import ancp from "../assets/ancp.jpeg";
import { Animate } from "react-simple-animate";
const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen pt-[80px] bg-white text-slate-600"
    >
      <div className="max-w-screen-lg p-4 mx-auto  flex flex-col md:flex-row justify-center items-center w-full h-full">
        <div className="flex-1 flex-col ">
          <p className="text-4xl font-bold inline w-[120px] border-b-4 border-gray-500 ">
            About
          </p>
          <p className="text-xl pt-8 py-2">
            Enthusiastic, dedicated and detail-oriented person with excellent
            focus, communication and ability to learn rapidly.Excels working in
            a team environment. Strong critical analysis and problem solving.
          </p>
          <p className="text-xl py-2">
            Skilled in ReactJS, NodeJS, PHP and Application Programming
            Interfaces.
          </p>
        </div>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(300px)",
          }}
          end={{
            transform: "translateX(-0px)",
          }}
        >
          <div className="flex-1 flex items-center justify-end">
            <img
              className="w-[350px] border-4 border-slate-300"
              src={ancp}
              alt=""
            />
          </div>
        </Animate>
      </div>
    </div>
  );
};

export default About;
