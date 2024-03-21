import React, {useState} from 'react';
import ProjectCard from './ProjectCard';
import SectionWrapper from '../common/SectionWrapper';
import SectionTitle from '../common/SectionTitle';

const Projects = () => {
   const [isOpen, setIsOpen] = useState(false);

   const togglePopup = () => {
     setIsOpen(!isOpen);
   };
  return (
    <SectionWrapper sectionName="projects">
      <div className="w-full mx-auto flex flex-col justify-center items-center h-full">
        <div className="flex flex-col items-start">
          <div className="max-w-full flex-start mb-4">
            <SectionTitle title="Projects" />
          </div>

          <div className="flex justify-between gap-4 py-4 ">
            <ProjectCard onClick={togglePopup} />
            <ProjectCard onClick={togglePopup} />
            <ProjectCard onClick={togglePopup} />
            {/* <ProjectCard /> */}
          </div>
          {isOpen && (
            <div id="popover-content" className="bg-white rounded-lg shadow-xl p-4 absolute z-10">
              <div className="text-gray-800">
                <h2 className="text-lg font-bold mb-2">Pop-up Title</h2>
                <p className="text-sm">
                  This is the content of the pop-up. You can add any HTML elements you want here.
                </p>
              </div>
              <button
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-md border border-gray-400 shadow-sm"
                onClick={togglePopup}
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
