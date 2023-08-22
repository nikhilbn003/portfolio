import { motion } from "framer-motion";
import React, { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState("education");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold text-[#287676] ml-3 animate-pulse">
          About Me
        </h2>
        <a
          href="/resume/Nikhil_resume.pdf"
          download="Nikhil_CV.pdf"
          className="bg-[#287676] hover:bg-[#446363] text-white px-4 py-2 rounded-full transition-colors mr-2"
        >
          Download CV
        </a>
      </div>

      <div className="bg-white rounded-lg p-6 mb-6">
      <motion.h1
          className="text-3xl text-[#287676] font-semibold mt-3 lg:-ml-3"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1 }}
          style={{ transformOrigin: "left" }} 
        >
          Introduction
        </motion.h1>
        <p className="text-[#287676] font-medium mt-2">
          I design and code web applications and I love what I do. Experienced
          Full stack web developer with expertise in front-end (HTML, Tailwind
          CSS, JavaScript) technologies and back-end (Node.js, MongoDB, and
          Postgres) technologies. 1 year of hands-on experience creating
          user-friendly and high-performance websites and web applications.
        </p>
      </div>

      <div className="flex justify-center mb-6 space-x-4">
        <button
          className={`text-lg font-medium focus:outline-none ${
            activeTab === "education" ? "text-[#287676] font-bold text-lg" : "text-gray-500"
          }`}
          onClick={() => handleTabClick("education")}
        >
          Education
        </button>
        <button
          className={`text-lg font-medium focus:outline-none ${
            activeTab === "experience" ? "text-blue-500" : "text-gray-500"
          }`}
          onClick={() => handleTabClick("experience")}
        >
          Experience
        </button>
      </div>

      <div className="bg-white rounded-lg p-6">
        {activeTab === "education" && (
          <div>
            <h3 className="text-xl font-semibold mb-3 text-center">Education</h3>
            {/* Add your education details here */}
          </div>
        )}
        {activeTab === "experience" && (
          <div>
            <h3 className="text-xl font-semibold mb-3 text-center">Experience</h3>
            {/* Add your experience details here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
