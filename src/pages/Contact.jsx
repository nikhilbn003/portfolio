import React from "react";
import photo from "../images/photo.png";
import ContactForm from "../components/contactForm";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="h-screen" id="contact">
      <div className="flex flex-col md:flex-row" data-aos="fade-up">
        <div className="w-full md:w-1/2 bg-[#d3e1e8] p-10 rounded-3xl ml-4">
          <div className="md:flex md:flex-col md:items-center mb-4">
            <img
              src={photo}
              alt="Contact"
              className="hidden md:block rounded-full ring-white w-40 h-40 mx-auto mb-4"
            />

            <div className="text-center">
              <h2 className="text-2xl text-[#287676] font-bold">
                Contact Information
              </h2>
              <img
                src={photo}
                alt="Contact"
                className="md:hidden rounded-full w-20 h-20 mx-auto mb-4"
              />
              <p className="mt-10">
                <span className=" text-[#287676] font-semibold">Email:</span>
                <a href="mailto:nikhilbn003@gmail.com" className="ml-1">nikhilbn003@gmail.com</a>
              </p>
              <p className="mt-4 ">
              <span className=" text-[#287676] font-semibold">Phone:</span>
                 <a href="tel:+919071188224" className="ml-1">+91 9071188224</a>
              </p>
              <div className="flex justify-center mt-12">
                <a
                  href="https://www.linkedin.com/in/nikhilkumarbn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-4"
                >
                  <FaLinkedin size={30} className="fill-[#287676]" />
                </a>
                <a
                  href="https://github.com/nikhilbn003"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={30} className="fill-[#287676]" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
