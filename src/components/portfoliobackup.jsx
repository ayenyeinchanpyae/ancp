import React from "react";
import cocktail from "../assets/portfolio/cocktail.png";
import githubfinder from "../assets/portfolio/githubfinder.png";
import ecommerce from "../assets/portfolio/ecommerce.png";
import portfolio from "../assets/portfolio/portfolio.png";
const backup = () => {
  const portfolios = [
    {
      id: 1,
      src: cocktail,
      name: "Cocktail Finder using ReactJS, TailwindCSS, Context API",
      link: "https://cocktail-finder-six.vercel.app/",
      repo: "https://github.com/ayenyeinchanpyae/cocktail-finder",
    },
    {
      id: 2,
      src: githubfinder,
      name: "Github Profile Finder  ReactJS, TailwindCSS, Context API",
      link: "https://github-finder-pearl-omega.vercel.app/",
      repo: "https://github.com/ayenyeinchanpyae/github-finder",
    },
    {
      id: 3,
      src: ecommerce,
      name: "Ecommerce application using ReactJS, BoootStrap, Firebase",
      link: "https://e-mart-eight.vercel.app/",
      repo: "https://github.com/ayenyeinchanpyae/E-mart",
    },
    {
      id: 4,
      src: portfolio,
      name: "Portfolio using ReactJS, TailwindCSS",
      link: "https://ancp.vercel.app/",
      repo: "https://github.com/ayenyeinchanpyae/ancp",
    },
  ];

  return (
    <div name="" className="w-full h-full pt-[80px]">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo, name }) => (
            <div key={id} className="shadow-md shadow-gray-600 ">
              <img
                src={src}
                alt=""
                className=" duration-200 hover:scale-105 h-[250px]"
              />
              <div className="flex flex-col items-center justify-center space-y-4 p-3">
                <p>{name}</p>
                <div className="flex">
                  <a href={link} target="_blank">
                    <button className="w-1/2 px-6 duration-200 hover:scale-105">
                      Demo
                    </button>
                  </a>
                  <a href={repo} target="_blank">
                    <button className="w-1/2 px-6  duration-200 hover:scale-105">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default backup;
