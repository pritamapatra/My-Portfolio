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
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6">
  I'm a <strong className="text-orange-400">Tech Enthusiast</strong> | A <strong className="text-orange-400">Web Developer</strong> with expertise in <strong className="text-orange-400">AI/ML</strong> & <strong className="text-orange-400">Deep Learning</strong> as well as <strong className="text-orange-400">UI/UX Designer</strong>.
  I am a passionate and versatile software developer with expertise in Web Development, AI/ML, Deep Learning, and UI/UX Design. I love tackling real-world challenges through innovation and technology.
</p>


        <p className="text-lg mb-6">
             Notable Projects & Achievements:
            <br/>
            Built a Deepfake Detection System using CNN & RNN (Presented at SIH’24 Finals)
            <br/>
            Proficient in ReactJS, Tailwind CSS, OpenCV, Flask, PostgreSQL, Docker
             <br/>
            Designed intuitive UI/UX solutions using Figma & Responsive Web Design
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
