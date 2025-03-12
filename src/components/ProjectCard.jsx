import React from 'react';

const ProjectCard = ({ title, description, tech, link }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-lg mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((techItem, index) => (
          <span key={index} className="bg-gray-700 text-white px-2 py-1 rounded">{techItem}</span>
        ))}
      </div>
      <a href={link} className="text-blue-500 hover:text-blue-700 transition-colors duration-300">View Project</a>
    </div>
  );
};

export default ProjectCard;
