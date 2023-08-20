// Header.js
import React from 'react';
import { Link } from 'react-scroll';
import { useSpring, animated } from 'react-spring';

const Header = () => {
  const fadeProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 500 });

  return (
    <header className="bg-gray-800 text-white py-4">
      <nav className="container mx-auto">
        <animated.ul style={fadeProps} className="flex space-x-4">
          <li>
            <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-300 transition-colors">About</Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-300 transition-colors">Projects</Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-300 transition-colors">Contact</Link>
          </li>
        </animated.ul>
      </nav>
    </header>
  );
};

export default Header;

  