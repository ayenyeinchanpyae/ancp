import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import javascript from "../assets//skills/javascript.png";
import css from "../assets//skills/css.png";
import firebase from "../assets/skills/firebase.png";
import node from "../assets/skills/node.png";
import react from "../assets/skills/react.png";
import html from "../assets/skills/html.png";
import tailwind from "../assets/skills/tailwind.png";
import git from "../assets/skills/git.png";
import sass from "../assets/skills/sass.png";
import vscode from "../assets/skills/vscode.png";
import redux from "../assets/skills/redux.png";
import bootstrap from "../assets/skills/bootstrap.png";

import "../style/backgroundAnimation.css";
const Home = () => {
  return (
    <div
      name="home"
      className="relative overflow-x-hidden overflow-y-hidden h-screen w-full bg-white " //bg-gradient-to-b from-black via-black to-gray-800
    >
      <div className="overflow-x-hidden overflow-y-hidde max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full space-y-3">
          <p className="text-xl tracking-widest">Aye Nyein Chan Pyae</p>
          <p className="md:text-4xl text-xl font-semibold tracking-widest">
            Software Engineer
          </p>

          <div className="flex justify-end">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-slate-500 w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r  cursor-pointer"
            >
              See My Works
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>

          </div>
        </div>
      </div>
      <div className="background overflow-y-hidde">
        <img src={javascript} alt="" />
        <img src={sass} alt="" />
        <img src={tailwind} alt="" />
        <img src={css} alt="" />
        <img src={firebase} alt="" />
        <img src={vscode} alt="" />
        <img src={react} alt="" />
        <img src={node} alt="" />
        <img src={html} alt="" />
        <img src={redux} alt="" />
        <img src={bootstrap} alt="" />
        <img src={git} alt="" />
      </div>
    </div>
  );
};

export default Home;
