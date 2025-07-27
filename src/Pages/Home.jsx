import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 flex flex-col items-center">
      {/* Blurred Glow Effects */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-72 h-72 bg-blue-700 blur-3xl rounded-full absolute top-20 left-20"></div>
        <div className="w-72 h-72 bg-red-500 opacity-20 blur-3xl rounded-full absolute bottom-20 right-20"></div>
      </div>

      {/* Profile Section */}
      <div className="max-w-lg w-full py-24 p-8 rounded-lg shadow-lg text-center relative z-10">
        {/* Profile Picture */}
        <div className="relative w-40 h-40 mx-auto">
          <img
            src="/profile.png"
            alt="Profile Picture"
            className="rounded-full border-4 border-gray-300 shadow-lg"
          />
        </div>
        {/* Intro */}
        <h1 className="text-4xl font-bold mb-4 mt-3">Pritam Patra</h1>
        <p className="w-full px-2 text-base sm:text-lg md:text-xl lg:text-xl mb-6">
  Experienced Automation and Agentic AI specializing in architecting end-to-end workflow solutions with measurable impact. I design, build, and deploy intelligent automation platforms that utilize agentic AI to optimize operational efficiency.

  With a hands-on approach leveraging both low-code workflow automation (n8n) and custom development (JavaScript, TypeScript, Next.js), I excel at translating complex requirements into seamless, autonomous solutions. My expertise includes integrating real-time APIs, building clean dashboards for operational insight, and creating task scheduling algorithms that adapt to dynamic business goals.
</p>



        <p className="text-lg mb-6">
            
        </p>
        <div className="mt-6">
          <Link
            to="/projects"
            className="px-6 py-3 text-gray-900 bg-white rounded-lg shadow hover:bg-gray-300 transition duration-300"
          >
            View My Work
          </Link>
        </div>
        <p className="text-lg mb-6 mt-6">
        What Drives Me?
          <br/>
           Solving complex problems with tech
           <br/>
           Creating impactful, user-centric designs
           <br/>
          Learning & collaborating with like-minded individuals
        </p>

       <p className="text-lg mb-6">
       Let’s Connect!
       </p>
      </div>
    </main>
  );
}
