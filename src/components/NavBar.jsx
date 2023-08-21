import React, { useState } from 'react';

const NavBar = () => {
  const [activeSection, setActiveSection] = useState('home');

//   const handleLinkClick = (section) => {
//     setActiveSection(section);
//     document.getElementById(section).scrollIntoView({
//       behavior: 'smooth'
//     });
//   };

const handleLinkClick = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      const rect = element.getBoundingClientRect();
      const offset = window.pageYOffset + rect.top - 80; // Adjust the offset value as needed
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
  };

  
  return (
    <nav className="bg-white text-gray-700 shadow-md fixed top-0 left-0 right-0 z-10 rounded-lg">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <a href="/" className="text-2xl font-semibold flex items-center mr-4 animate-pulse">
          Nikhil 
        </a>
        <div className="space-x-4">
          <button
            onClick={() => handleLinkClick('home')}
            className={`text-sm font-medium hover:text-gray-300 ${activeSection === 'home' ? 'active' : ''}`}
          >
            Home
          </button>
          <button
            onClick={() => handleLinkClick('about')}
            className={`text-sm font-medium hover:text-gray-300 ${activeSection === 'about' ? 'active' : ''}`}
          >
            About
          </button>
          <button
            onClick={() => handleLinkClick('skills')}
            className={`text-sm font-medium hover:text-gray-300 ${activeSection === 'skills' ? 'active' : ''}`}
          >
            Skills
          </button>
          <button
            onClick={() => handleLinkClick('contact')}
            className={`text-sm font-medium hover:text-gray-300 ${activeSection === 'contact' ? 'active' : ''}`}
          >
            Contact
          </button>
         
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
