import React from 'react';

const ContentSection = ({ content }) => {
    console.log('in content section',content)
  return (
    <div className="px-4">
      <div>
        <div className="mb-4 space-y-2">
          <a
            href={content.companyUrl}
            className="font-bold text-lg underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {content.company}
          </a>
          <p className="font-medium text-md">{content.location}</p>
          <p className="font-medium text-md">{content.period}</p>

          {content.desc.map((data, index) => (
            <div key={index} className="flex gap-2">
              <span>&#8226;</span>
              <p>{data}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
        };

export default ContentSection;
