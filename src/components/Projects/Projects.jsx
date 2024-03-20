import React from 'react';
import ProjectCard from './ProjectCard';
import SectionWrapper from '../common/SectionWrapper';
import SectionTitle from '../common/SectionTitle';

const Projects = () => {
  return (
    <SectionWrapper sectionName="about">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col md:flex-row justify-center items-center w-full h-full">
        <div className="flex-1 flex-col md:mr-4">
          <SectionTitle title="Projects" />
          </div>
          </div>
      <div className="flex justify-center items-center">
        <ProjectCard />
      </div>
    </SectionWrapper>
  );
};

export default Projects;
