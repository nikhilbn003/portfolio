import React from "react";

import ContactForm from "../components/contactForm";

const Contact = () => {


  return (
    <div className="h-screen" id="contact">
      <div className="flex flex-col md:flex-row" data-aos="fade-up">
        <div className="w-full md:w-1/2 bg-[#d3e1e8] p-10 rounded-3xl ml-4">
          <div className="md:flex md:flex-col md:items-center mb-4">
            <img
              src="/path/to/your/image.png"
              alt="Contact"
              className="hidden md:block rounded-full w-20 h-20 mx-auto mb-4"
            />

            <div className="text-center">
              <h2 className="text-2xl text-[#287676] font-bold">
                Contact Information
              </h2>
              <p>Email: </p>
              <p>Phone: </p>
            </div>
          </div>

          <img
            src="/path/to/your/image.png"
            alt="Contact"
            className="md:hidden rounded-full w-20 h-20 mx-auto mb-4"
          />
        </div>
        <ContactForm/>

       
      </div>
    </div>
  );
};

export default Contact;
