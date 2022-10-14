import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import cocktail from "../assets/portfolio/cocktail.png";
import githubfinder from "../assets/portfolio/githubfinder.png";
import ecommerce from "../assets/portfolio/ecommerce.png";
import portfolio from "../assets/portfolio/portfolio.png";
import cocktailMobile from "../assets/portfolio/mobile/cocktailMobile.png";
import githubFinderMobile from "../assets/portfolio/mobile/githubFinderMobile.png";
import emartMobile from "../assets/portfolio/mobile/emartMobile.png";
import firebase from "../assets/skills/firebase.png";
import react from "../assets/skills/react.png";
import tailwind from "../assets/skills/tailwind.png";
import bootstrap from "../assets/skills/bootstrap.png";
const Portfolio = () => {
  const portfolios = [
    {
      id: 0,
      src: cocktail,
      mobileSrc: cocktailMobile,
      name: "Cocktail Finder using ReactJS, TailwindCSS, Context API",
      link: "https://cocktail-finder-six.vercel.app/",
      repo: "https://github.com/ayenyeinchanpyae/cocktail-finder",
      techStack: [react, tailwind],
      // techStack: [
      //   { id: 0, tech: react },
      //   { id: 1, tech: tailwind },
      // ],
    },
    {
      id: 1,
      src: githubfinder,
      mobileSrc: githubFinderMobile,
      name: "Github Profile Finder  ReactJS, TailwindCSS, Context API",
      link: "https://github-finder-pearl-omega.vercel.app/",
      repo: "https://github.com/ayenyeinchanpyae/github-finder",
      techStack: [react, tailwind],
      // techStack: [
      //   { id: 3, tech: react },
      //   { id: 4, tech: tailwind },
      // ],
    },
    {
      id: 2,
      src: ecommerce,
      mobileSrc: emartMobile,
      name: "Ecommerce application using ReactJS, BoootStrap, Firebase",
      link: "https://e-mart-eight.vercel.app/",
      repo: "https://github.com/ayenyeinchanpyae/E-mart",
      techStack: [react, bootstrap, firebase],
      // techStack: [
      //   { id: 0, tech: react },
      //   { id: 1, tech: bootstrap },
      //   { id: 2, tech: firebase },
      // ],
    },
    {
      id: 3,
      src: portfolio,
      mobileSrc: portfolio,
      name: "Portfolio using ReactJS, TailwindCSS",
      link: "https://ancp.vercel.app/",
      repo: "https://github.com/ayenyeinchanpyae/ancp",
      techStack: [react, tailwind],
      // techStack: [
      //   { id: 0, tech: react },
      //   { id: 1, tech: tailwind },
      // ],
    },
  ];

  return (
    <div name="portfolio" className="w-full h-full bg-white py-[80px]">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="flex flex-wrap flex-col md:flex-row gap-16 justify-center">
          {portfolios.map(
            ({ id, src, link, repo, name, mobileSrc, techStack }) => (
              <div
                key={id}
                className="shadow-sm shadow-gray-400 md:w-[500px] lg:w-[450px] "
              >
                <img
                  src={src}
                  alt=""
                  className="hidden md:block duration-200 h-[250px] w-full"
                />
                <img
                  src={mobileSrc}
                  alt=""
                  className="md:hidden duration-200 h-[250px] w-full"
                />
                <div className="flex flex-col  space-y-4 p-3">
                  <p>{name}</p>

                  <div className="flex space-x-4">
                    {techStack.map((id, tech) => (
                      <img
                        key={id}
                        className="w-[30px] h-[30px]"
                        src={tech}
                        alt=""
                      />
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <a
                      className="flex items-center space-x-4"
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="  duration-200 ">Live Demo</button>
                      <span>
                        <BiLinkExternal />
                      </span>
                    </a>
                    <a
                      rel="noreferrer"
                      className="flex items-center space-x-4"
                      href={repo}
                      target="_blank"
                    >
                      <button className="  duration-200 ">
                        View on Github
                      </button>
                      <span>
                        <BsGithub />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
