import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Adjust path if necessary
import Home from './Pages/Home'; // Ensure Home page exists
import About from './Pages/About'; // Ensure About page exists
import Projects from './Pages/Projects'; // Ensure Projects page exists
import Blog from './Pages/Blog'; // Ensure Blog page exists
import Contact from './Pages/Contact'; // Ensure Contact page exists
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="pt-16"> {/* Add padding to prevent overlap with fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
