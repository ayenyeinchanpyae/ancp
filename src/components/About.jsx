import React from "react";
import { motion } from 'framer-motion';
import ancp from "../assets/ancp.png";
import { Animate } from "react-simple-animate";
import SectionWrapper from "./common/SectionWrapper";
import SectionTitle from "./common/SectionTitle";
const About = () => {
  return (
    <SectionWrapper sectionName="about">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col md:flex-row justify-center items-center w-full h-full">
        <div className="flex-1 flex-col md:mr-4">
          <SectionTitle title="About" />
          <p className="text-xl pt-8 py-2">
            Results-driven and versatile software developer with a proven track record in designing
            and implementing intuitive user interfaces and robust backend APIs for optimal system
            performance.
          </p>
          <p className="text-xl py-2">
            Solid understanding of coding principles, data structures, and algorithms. Strong
            communication and teamwork skills, coupled with a proactive approach to
            problem-solving.
          </p>
          <p className="text-xl py-2">
            Skilled in ReactJS, NextJS, NodeJS, and Application Programming Interfaces.
          </p>
        </div>
        <motion.div
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, delay: 0 }}
          className="flex-1 flex items-center justify-end"
        >
          <img className="w-full md:w-[350px]" src={ancp} alt="" />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;
