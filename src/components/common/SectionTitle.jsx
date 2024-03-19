import React from 'react'

const SectionTitle = ({title}) => {
  console.log('title',title.length)
  return (
    <p
      className="text-4xl font-bold inline"
      style={{
        width: `${title.length * 1}ch`,
        borderBottom: `4px solid gray`,
      }}
    >
      {title}
    </p>
  );
}

export default SectionTitle