import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import photo from "../images/photo.png";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

const Home = () => {
  const [showText, setShowText] = useState(false);
  const [index, setIndex] = useState(0);
  // const roles = ['a Frontend Developer', 'a Backend Developer', 'a Full Stack Developer'];
  const roles = useMemo(
    () => [
      "a Front end Developer",
      "a Back end Developer",
      "a Full Stack Developer",
    ],
    []
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    setShowText(true); // Trigger the animation for roles when component mounts
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [roles]);

  const textArray = [
    "I design",
    "and code",
    "web applications,",
    "and I love what I do.",
  ];

  const roleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="container mx-auto mt-36 mb-20" id="home">
      <div className="md:flex md:flex-row md:justify-center md:items-center">
        {/* Left section for text content */}
        <div className="md:w-1/2 md:order-2">
          <div className="hidden md:flex md:flex-col md:justify-center md:items-center md:text-left md:pr-8">
            {/* Animate name on hover */}
            <h2 className="text-4xl font-bold">Welcome to my portfolio</h2>
            <motion.h1
              className="text-3xl text-slate-700 font-semibold mt-3 "
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1 }}
            >
              Hi,I'm Nikhil Kumar B N
            </motion.h1>
            <p className="text-gray-600 text-lg mt-2">
              {/* {` ${roles[index]}`} */}

              {showText &&
                roles[index].split(" ").map((word, wordIndex) => (
                  <motion.span
                    key={wordIndex}
                    variants={roleVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: wordIndex * 0.2 }}
                    className="text right-0"
                  >
                    {word}
                    {wordIndex !== roles[index].split(" ").length - 1 && " "}
                  </motion.span>
                ))}
            </p>

            <p className="text-gray-600 mt-2">
              {textArray.map((word, index) => (
                <span
                  key={index}
                  className={`inline-block ml-1 ${
                    showText
                      ? "transition-transform duration-500 transform translate-x-0"
                      : "transform translate-x-full"
                  }`}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                >
                  {word}{" "}
                </span>
              ))}
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
        <h2 className="text-4xl font-bold">Welcome to my portfolio</h2>
            <motion.h1
              className="text-3xl text-slate-700 font-semibold mt-3 animate-bounce "
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1 }}
            >
              Hi,I'm Nikhil Kumar B N
            </motion.h1>
          <p className="text-gray-600 text-lg mt-2">
          {showText &&
                roles[index].split(" ").map((word, wordIndex) => (
                  <motion.span
                    key={wordIndex}
                    variants={roleVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: wordIndex * 0.2 }}
                    className="text right-0"
                  >
                    {word}
                    {wordIndex !== roles[index].split(" ").length - 1 && " "}
                  </motion.span>
                ))}
          </p>
          <p className="text-gray-600 mt-2 ">
            I design and code web application and I love what I do Experienced
            Full stack web developer with expertise in front-end (HTML, Tailwind
            CSS, JavaScript) technologies and back-end(Node js, MongoDb and
            Postgress) technologies. 1 year of hands-on experience creating
            user-friendly and high-performance websites and web applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
