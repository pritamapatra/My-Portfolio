import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: "IRCTC TTE Duty Management App (Open Source)",
    description: "A tablet‑first TTE duty app that replaces clunky HHT workflows with fast, offline chart, berth, and verification flows, cutting errors from tiny tap targets and poor feedback in motion. Added true dark mode for overnight checks in dim coaches, improving eye comfort and readability. Led end‑to‑end UX, Next.js architecture, state management, and realistic mock data design myself.",
    tech: ["NextJS", "Tailwind CSS"],
    link: "https://tte-app-sable.vercel.app/home",
    status: "Completed", // Add status here
  },
  {
    title: " GridLens | Wind Forecast App (Open Source)",
    description: "A full‑stack Next.js app and Python analysis pipeline that exposes hidden risk in the UK’s WINDFOR model. I designed the data pipeline from raw Elexon APIs, resolved 30‑min vs hourly alignment, implemented the interactive dashboard (debounced horizon slider, Recharts visuals), and authored the Jupyter analysis proving an 80.9% over‑prediction bias and a 2,387 MW reliable wind capacity floor.",
    tech: ["NextJS", "Tailwind CSS", "Python", "Pandas", "Data Science"],
    link: "https://github.com/pritamapatra/wind-forecast-app",
    status: "Completed", // Add status here
  },
  {
    title: "Voltwise.AI | AI Agent for Dynamic Energy Savings in Dark Stores",
    description: "",
    tech: ["n8n workflow automation", "Agent AI", "NextJS", "PostgreSQL", "Javascript", "Tailwind CSS"],
    link: "https://github.com/pritamapatra/Voltwise.AI",
    status: "Completed", // Add status here
  },
  {
    title: "Detectify: Deepfake Detection Platform",
    description: "A deepfake detection platform with AI-powered analysis.",
    tech: ["Next.js", "Tailwind CSS", "Flask", "PostgreSQL"],
    link: "https://github.com/sha-shanks/detectify",
    status: "Completed", // Add status here
  },
  {
    title: "Alumni Network",
    description: "A web portal for BIT Sindri alumni networking.",
    tech: ["Next.js", "MongoDB", "Node.js", "Tailwind"],
    link: "https://bitsindrialumniconnect.netlify.app/",
    status: "Completed", // Add status here
  },
  {
    title: "Personal Portfolio Website",
    description: "",
    tech: ["React.js", "Tailwind", "React Router", "Netlify"],
    link: "/",
    status: "Completed", // Add status here
  },
  
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 relative flex flex-col items-center">
      {/* Blurred Glow Effects */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-72 h-72 bg-blue-700 opacity-30 blur-3xl rounded-full absolute top-20 left-20"></div>
        <div className="w-72 h-72 bg-blue-700 opacity-20 blur-3xl rounded-full absolute bottom-20 right-20"></div>
      </div>

      {/* Title */}
      <h1 className="text-5xl font-bold text-center mb-12 relative z-10">
        My Projects 🚀
      </h1>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="transition-transform transform hover:-translate-y-2 duration-300"
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </main>
  );
}
