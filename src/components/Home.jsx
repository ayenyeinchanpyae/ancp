import React from "react";
import ancp from "../assets/ancp.jpeg";
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
          {/* <Animate
            play
            duration={2}
            delay={0}
            start={{
              transform: "translateY(-500px)",
            }}
            end={{
              transform: "translateX(-0px)",
            }}
          >
            <h2 className="text-4xl sm:text-7xl font-bold text-gray-500">
              Hello!
            </h2>
            <h2 className="text-4xl sm:text-7xl font-bold text-gray-500">
              I'm Aye Nyein Chan Pyae
            </h2>
          </Animate> */}
          <p className="text-xl tracking-widest">Aye Nyein Chan Pyae</p>
          <p className="md:text-4xl text-xl font-semibold tracking-widest">
            Front-end Developer
          </p>
          {/* <p className="md:text-4xl text-3xl pl-[50px]">UI/UX Designer</p> */}
          {/* å */}
          {/* <Animate
            play
            duration={2}
            delay={0}
            start={{
              transform: "translateY(500px)",
            }}
            end={{
              transform: "translateX(-0px)",
            }}
          >
            <p className="text-gray-500 py-4 max-w-md">
              Enthusiastic, dedicated and detail-oriented person with Excellent
              focus, communication and ability to learn rapidly. Excels working
              in a team environment. Currently, I love to work on web
              application using technologies like React, Tailwind and NodeJS.
            </p>
          </Animate> */}

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
            {/* <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-green-500 to-cyan-500 cursor-pointer"
            >
              See my works
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link> */}
          </div>
        </div>

        {/* <div className="absolute md:ml-[500px] md:mt-[300px] w-[100px]">
          <img className="logo" src={javascript} alt="" />
        </div> */}

        {/* <Animate
          play
          duration={2}
          delay={0}
          start={{
            transform: "translateX(500px)",
          }}
          end={{
            transform: "translateX(-0px)",
          }}
        >
          <div>
            <img
              src={ancp}
              alt="my profile"
              className="rounded-2xl mx-auto w-2/3 md:w-full"
            />
          </div>
        </Animate> */}
      </div>
      <div class="background overflow-y-hidde">
        <img src={javascript} alt="" />
        <img src={sass} />
        <img src={tailwind} />
        <img src={css} />
        <img src={firebase} />
        <img src={vscode} />
        <img src={react} />
        <img src={node} />
        <img src={html} />
        <img src={redux} />
        <img src={bootstrap} />
        <img src={git} />
      </div>
    </div>
  );
};

export default Home;
