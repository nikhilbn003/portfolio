import { motion } from "framer-motion";
import React, { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState("education");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto mt-10" id="about">
      <div className="flex justify-between items-center mt-10">
        <h2 className="text-3xl font-extrabold text-[#287676] ml-3 animate-pulse" data-aos="fade-up">
          About Me
        </h2>
        <a
          href="/resume/Nikhil_resume.pdf"
          download="Nikhil_CV.pdf"
          className="bg-[#287676] hover:bg-[#446363] text-white px-5 py-3 rounded-full transition-colors mr-2"
        >
          Download CV
        </a>
      </div>

      <div className="bg-white rounded-lg p-6 mb-6" data-aos="fade-up">
        <motion.h1
          className="text-3xl text-[#287676] font-bold mt-3 lg:-ml-3"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1 }}
          style={{ transformOrigin: "left" }}
        >
          Introduction
        </motion.h1>
        <p className="text-[#287676] font-medium mt-2">
          "I design and code web applications and I love what I do. Experienced
          Full stack web developer with expertise in front-end (HTML, Tailwind
          CSS, JavaScript) technologies and back-end (Node.js, MongoDB, and
          Postgres) technologies. 1 year of hands-on experience creating
          user-friendly and high-performance websites and web applications."
        </p>
      </div>

      <div className="flex justify-center mb-6 space-x-4">
        <button
          className={`text-lg font-semibold focus:outline-none relative ${
            activeTab === "education"
              ? "text-[#287676] font-bold text-lg"
              : "text-gray-500"
          }`}
          onClick={() => handleTabClick("education")}
        >
          Education
          <span
            className={`absolute left-0 right-0 bottom-0 h-1 bg-[#287676] ${
              activeTab === "education" ? "opacity-100" : "opacity-0"
            } transition-opacity`}
          ></span>
        </button>

        <button
          className={`text-lg font-semibold  focus:outline-none relative ${
            activeTab === "experience"
              ? "text-[#287676] font-bold text-lg"
              : "text-gray-500"
          }`}
          onClick={() => handleTabClick("experience")}
        >
          Experience
          <span
            className={`absolute left-0 right-0 bottom-0 h-1 bg-[#287676] ${
              activeTab === "experience" ? "opacity-100" : "opacity-0"
            } transition-opacity`}
          ></span>
        </button>
      </div>

      <div className="bg-white rounded-lg p-6">
        {activeTab === "education" && (
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-center text-[#287676]">
                Master's Degree
              </h3>
              <p className="text-gray-600 text-center mt-10 lg:mt-0">
              I successfully earned a Master's of Computer Application (MCA) degree with a commendable <span className="text-[#287676] font-semibold"> CGPA of 7.69</span> , accomplished in the year 2022.
                {/* Completed my Master's of Computer Application (MCA)  with  <span className="text-[#287676] font-semibold"> CGPA of 7.69</span> */}
              </p>
            </div>
            <div className="relative">
              <div className="h-full border-l border-gray-300 absolute left-0 top-0 bottom-0"></div>
              <h3 className="text-xl font-semibold mb-3 text-center text-[#287676] pl-6">
                Bachelor's Degree
              </h3>
              <p className="text-gray-600 pl-6 text-center">
              I successfully earned a Bachelor's of Computer Application (MCA) degree with a commendable <span className="text-[#287676] font-semibold"> CGPA of 7.09</span> , accomplished in the year 2019.
              </p>
            </div>
          </div>
        )}

        {activeTab === "experience" && (
          <div>
            <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-center text-[#287676]">
                MERN STACK Developer 
              </h3>
              <p className="text-gray-600 text-center mt-10 lg:mt-0">
              I have been employed as a MERN Stack Developer at Bhive Alts starting from October 2022 and continuing to the present day.
              </p>
            </div>
            <div className="relative">
              <div className="h-full border-l border-gray-300 absolute left-0 top-0 bottom-0"></div>
              <h3 className="text-xl font-semibold mb-3 text-center text-[#287676] pl-6">
                Intern-Software Developer
              </h3>
              <p className="text-gray-600 pl-6 text-center">
              I worked as an Intern Software Developer at Bhive Alts from March 2022 to July 2022.
              </p>
            </div>
          </div>
            {/* Add your experience details here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
