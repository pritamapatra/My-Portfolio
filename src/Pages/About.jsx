import React from 'react';

export default function About() {
  const skills = [
    "n8n (Workflow Automation)",
    "Agentic AI",
    "Dynamic Programming",
    "Reinforcement Learning",
    "Machine Learning",
    "Artificial Intelligence (AI)",
    "Python (Programming Language)",
    "Next.js",
    "Tailwind CSS",
    "Git/GitHub",
    "React.js",
    "JavaScript",
    "Web Development",
    "CSS",
    "HTML",
    "UI/UX",
    "Figma"
  ];
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 relative flex flex-col items-center">
      {/* Blurred Glow Effects */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-72 h-72 bg-blue-700 opacity-20 blur-3xl rounded-full absolute top-20 left-20"></div>
        <div className="w-72 h-72 bg-red-500 opacity-20 blur-3xl rounded-full absolute bottom-20 right-20"></div>
      </div>
       
       

      {/* Page Content */}
      <h1 className="text-5xl font-bold text-center mb-8">My Skills and Experiences</h1>

     {/* Skills Section */}
     <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-black border border-white hover:bg-gray-700 transition duration-300 py-3 px-4 rounded-lg shadow-md text-lg font-semibold text-center"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-center">Experience</h2>
        <div className="space-y-6 ">
          <div className="bg-black border border-white hover:bg-gray-700 transition duration-300 p-8 px-10 rounded-lg shadow-md mx-4">
            <h3 className="text-xl font-semibold">Summer Research Intern @IIT Guwahati</h3>
            <p className="text-gray-400">2025 May- July</p>
            <p>Project: Federated Learning for Multi-weather Image Restoration</p>
          </div>
        <div className="bg-black border border-white hover:bg-gray-700 transition duration-300 p-8 px-10 rounded-lg shadow-md mx-4">
            <h3 className="text-xl font-semibold">Undergraduate Research Assistant @MIT, Manipal</h3>
            <p className="text-gray-400">2025 February- Present</p>
            <p>Project: Analyzing medical images using deep learning algorithms</p>
          </div>
          <div className="bg-black border border-white hover:bg-gray-700 transition duration-300 p-8 px-10 rounded-lg shadow-md mx-4">
            <h3 className="text-xl font-semibold">SDE Intern @Instrumus</h3>
            <p className="text-gray-400">2025 February- April</p>
            <p>Developing scalable web applications.</p>
          </div>
          <div className="bg-black border border-white hover:bg-gray-700 transition duration-300 py-8 px-10 rounded-lg shadow-md mx-4">
            <h3 className="text-xl font-semibold ">SIH'24 @NTRO</h3>
            <p className="text-gray-400">2024 August - 2024 December</p>
            <p>As a finalist in Smart India Hackathon 2024, I had the opportunity to work on an AI-based Deepfake Detection System designed to analyze videos and detect manipulated content. Our goal was to help journalists, legal authorities, and social media platforms verify the authenticity of videos and prevent misinformation.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
