import React from "react";
import { motion } from "framer-motion";
import photo from "../images/photo.png";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <div className="container mx-auto mt-36 mb-20" id="home">
      <div className="md:flex md:flex-row md:justify-center md:items-center">
        {/* Left section for text content */}
        <div className="md:w-1/2 md:order-2">
          <div className="hidden md:flex md:flex-col md:justify-center md:items-center md:text-left md:pr-8">
            {/* Animate name on hover */}
            <motion.h1
              className="text-4xl font-semibold "
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1 }}
            >
              Nikhil Kumar B N
            </motion.h1>
            <p className="text-gray-600 text-lg mt-2">Full stack Developer</p>
            <p className="text-gray-600 mt-2 ">
            I design and code web application and I love what I do. 
          </p>
          </div>
        </div>

        {/* Right section for the image */}
        <div className="w-full md:w-1/2 md:order-1 relative">
          {/* Place your image here */}
          <motion.img
            src={photo}
            alt="Profile"
            className="w-96 h-96 rounded-full transition-transform duration-300 hover:scale-105 hover:rounded-gray-900 "
            style={{
              transformOrigin: "center",
              transitionProperty: "transform",
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }} // Stop animation on tap
          />
        </div>

        {/* Sidebar with icons */}
        <div className="md:w-1/12 md:order-3 mr-3 lg:mr-0 md:mt-0 ml-6">
          <div className="flex flex-col items-end space-y-4">
            <a
              href="https://www.linkedin.com/in/nikhilkumarbn/"
              target="_blank"
              rel="noopener noreferrer"
            >
             
              <FaLinkedin className="text-2xl text-gray-600 hover:text-gray-900 hover:text-3xl transition-colors" />
             
            </a>
            <a
              href="https://github.com/nikhilbn003"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl text-gray-600 hover:text-gray-900 hover:text-3xl transition-colors" />
            </a>
            <a href="mailto:nikhilbn003@gmail.com">
              <FaEnvelope className="text-2xl text-gray-600 hover:text-gray-900 hover:text-3xl transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile layout: image at the top */}
      <div className="md:hidden w-full">
        {/* Text content */}
        <div className="p-4 text-center mt-3">
          <motion.h1
            className="text-4xl font-semibold "
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1 }}
          >
            Nikhil Kumar B N
          </motion.h1>
          <p className="text-gray-600 text-lg mt-2">Full stack Developer</p>
          <p className="text-gray-600 mt-2 ">
          I design and code web application and I love what I do 
            Experienced Full stack web developer with expertise in front-end
            (HTML, Tailwind CSS, JavaScript) technologies and back-end(Node js,
            MongoDb and Postgress) technologies. 1 year of hands-on experience
            creating user-friendly and high-performance websites and web
            applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
