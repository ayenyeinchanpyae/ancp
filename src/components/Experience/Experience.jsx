import React, { useState } from 'react';
import VerticalTabs from './VerticalTab';
import ContentSection from './ContentSection';
import SectionWrapper from '../common/SectionWrapper';
import SectionTitle from '../common/SectionTitle';

const tabs = [
  { id: '0', title: 'Full Stack Developer' },
  { id: '1', title: 'Web Developer' },
  { id: '2', title: 'Web Developer Intern' },
  { id: '3', title: 'AI Instructor' },
];

const content = [
  {
    id: 0,
    company: 'JMS-Untied Co.Ltd',
    location: 'Japan, remote',
    companyUrl: 'https://www.jms-united.co.jp/',
    period: 'Jan 2023 - present',
    desc: [
      'Architect and implement resilient backend APIs using Node.js and Express.js, ensuring seamless integration and optimal performance.',
      'Write clean, maintainable, and efficient code while following best practices and coding standards in JavaScript and TypeScript.',
      'Collaborate with the design team and product manager to develop responsive and user-friendly user interfaces using React.js.',
      'Employed Agile methodologies to collaborate with cross-functional teams, ensuring the timely delivery of high-quality software solutions.',
      'Integrated OpenAI and Elastic Search to enhance system capabilities and meeting evolving business needs.',
      'Developed comprehensive unit tests and created API documentation, adhering to industry standards, resulting in reliable and functional codebase.',
    ],
  },
  {
    id: 1,
    company: 'Openfor.co',
    location: 'Japan, remote',
    period: 'Jan 2022 - Jan 2023',
    companyUrl: 'https://www.openfor.co/',
    desc: [
      'Contributed to crafting visually appealing frontend interfaces using React and Tailwind CSS, enhancing user experience and engagement.',
      'Actively participated in the design and development of innovative new features, collaborating with team members to ensure alignment with project objectives and user requirements.',
      'Collaborated with cross-functional teams to ensure website content aligned with marketing and brand strategies.',
      'Employed Agile methodologies to collaborate with cross-functional teams, ensuring the timely delivery of high-quality software solutions.',
      'Proactively identified, diagnosed, and resolved issues in existing features to deliver a seamless and bug-free user experience, ensuring high levels of customer satisfaction',
    ],
  },

  {
    id: 2,
    company: 'Expa.ai',
    location: 'Yangon, Myanmar',
    period: 'Nov 2019 - Jan 2020',
    companyUrl: 'https://expa.ai/',
    desc: [
      'Provided interactive lessons on the fundamentals of Artificial Intelligence (AI) by adapting machine learning concepts for young learners',
      'Utilized JavaScript to develop a web-based QR code scanner with real-time detection and decoding capabilities, enhancing user interaction within web applications. ',
      'Implemented Flutter to assist in creating a mobile application compatible with both Android and iOS platforms, focusing on intuitive user interfaces for efficient QR code scanning experiences.',
      'Collaborated closely with senior developers and cross-functional teams to refine features and optimize performance for various devices.',
      '•	Ensured compatibility and reliability across platforms, contributing to the overall success of the scanning applications.',
    ],
  },
  {
    id: 3,
    company: 'ThatePan Hub',
    location: 'Yangon, Myanmar',
    period: 'Jan 2022 - April 2022',
    companyUrl: 'https://thatepanhub.org/',
    desc: [
      'Contributed to the development of QR code scanning solutions for web and mobile platforms during an internship.',
      'Introduced students to programming principles using Scratch, an intuitive visual programming language developed by MIT, fostering early engagement and understanding of AI technologies.',
      'Facilitated hands-on activities and projects to reinforce learning objectives, encouraging creativity and problem-solving skills development in a supportive learning environment.',
    ],
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabChange = (id) => {
    setActiveTab(id);
  };

  const activeContent = content[activeTab];

  return (
    <SectionWrapper sectionName="experience">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col gap-4 justify-between w-full h-full">
        <SectionTitle title="Experience" />

        <div className="flex p-4">
          <div className="w-1/4">
            <VerticalTabs tabs={tabs} onTabChange={handleTabChange} />
          </div>
          <div className="w-3/4">
            {activeContent && <ContentSection key={activeContent.id} content={activeContent} />}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
