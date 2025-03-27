import React from 'react';

const ProjectCard = ({ title, description, tech, link, status }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      {description && <p className="text-gray-300 mb-4">{description}</p>}
      <div className="flex flex-wrap gap-x-2 gap-y-1 mb-4">
        {tech.map((item, index) => (
          <span
            key={index}
            className="bg-gray-600 text-gray-200 px-2 py-1 rounded text-sm"
          >
            {item}
          </span>
        ))}
      </div>
      {/* Status Button */}
      <button
        className={`px-4 py-2 rounded-full text-sm font-semibold ${
          status === 'On-going'
            ? 'bg-blue-700 opacity-55 text-black'
            : 'bg-red-700 opacity-55 text-black '
        }`}
      >
        {status}
      </button>
      {/* Link Button */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-4 text-blue-400 hover:text-blue-300"
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
