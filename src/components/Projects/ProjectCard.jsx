import React from 'react';

import express from '../../assets/portfolio/cocktail.png';
 
const ProjectCard = ({projectTitle, description,technology, keyFeatures, myRole}) => {
  return (
    <div class="relative group max-w-sm rounded overflow-hidden shadow-lg">
      <div className="w-full h-full absolute flex items-center justify-center bg-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-center">See project details</p>
      </div>
      <img class="w-full" src={express} alt="Sunset in the mountains" />
      <div class="px-6 py-4">
        <p class="text-gray-700 text-base">Title</p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
      </div>
    </div>
  );
}

export default ProjectCard