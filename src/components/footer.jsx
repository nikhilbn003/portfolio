import React from "react";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white shadow-2xl shadow-slate-500 text-center rounded-lg py-4">
      <p className="text-gray-600 flex items-center justify-center">
        Designed with <FaHeart className="text-red-500 mx-1" /> Nikhil 
      </p>
    </footer>
  );
};

export default Footer;
