import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();


     // Check for empty fields
     const emptyFieldErrors = {};
     if (!form.name) emptyFieldErrors.name = "Name is required";
     if (!form.email) emptyFieldErrors.email = "Email is required";
     if (!form.message) emptyFieldErrors.message = "Message is required";
 
     // Update errors state
     setErrors(emptyFieldErrors);
 
     // If any field is empty, return
     if (Object.keys(emptyFieldErrors).length > 0) {
       return;
     }

    console.log("Form data:", form);
    emailjs
      .send(
        "service_is5waxo",
        "template_4c2xtcm",
        {
          from_name: form.name,
          to_name: "Nikhil kumar B N",
          from_email: form.email,
          to_email: "nikhilbn003@gmail.com",
          message: form.message,
        },
        "Kja_jEsULwg2LCeB1"
      )
      .then((response) => {
        console.log("Email sent successfully!", response);
        if (response) {
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        }
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Ahh, something went wrong. Please try again.");
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  return (
    <>
     <div className="w-full md:w-1/2 p-10" data-aos="fade-up">
          <h2 className="text-2xl text-[#287676] font-bold mb-4">
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-custom-green font-semibold mb-2"
              >
                Name <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-custom-green"
                placeholder="Your Name"
              />
              {errors.name && (
                <p className="text-red-500 mt-1">{errors.name}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-[#287676] font-semibold mb-2"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-custom-green"
                placeholder="Your Email"
              />
              {errors.email && (
                <p className="text-red-500 mt-1">{errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-[#287676] font-semibold mb-2"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-custom-green"
                placeholder="Your Message"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 mt-1">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="bg-[#287676] text-white px-4 py-2 rounded-lg hover:bg-[#457878]"
            >
              Send Message
            </button>
          </form>
        </div>
    </>
  )
};

export default ContactForm;
