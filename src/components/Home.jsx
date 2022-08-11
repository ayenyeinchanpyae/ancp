import React from "react";
import ancp from "../assets/ancp.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { Animate } from "react-simple-animate";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <Animate
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
            <h2 className="text-4xl sm:text-7xl font-bold text-white">
              Hello!
            </h2>
            <h2 className="text-4xl sm:text-7xl font-bold text-white">
              I'm Aye Nyein Chan Pyae
            </h2>
          </Animate>
          <Animate
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
          </Animate>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <Animate
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
        </Animate>
      </div>
    </div>
  );
};

export default Home;
