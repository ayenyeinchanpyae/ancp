import React, { useState } from 'react';

const VerticalTab = ({ tabs, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleClick = (id) => {
    setActiveTab(id);
    onTabChange(id);
  };

  return (
    <div className="flex lg:flex-col md:flex-row">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`w-full p-2 text-left ${
            activeTab === tab.id ? 'bg-gray-200' : 'hover:bg-gray-100'
          }`}
          onClick={() => handleClick(tab.id)}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
};

export default VerticalTab;
