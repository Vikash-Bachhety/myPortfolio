import React from "react";
import axios from "axios";
import "../Components/component.css";

function Contact() {
  const handleSubmit = async () => {
    const response = await axios.post("http://localhost:3000/api/feedback", {
      name,
      email,
      message,
    });

    const data = await response.data;
  };

  return (
    <section className="contact-section bg-gray-900 py-8 lg:py-12 flex justify-center">
      <div className="flex flex-col items-center w-full mx-auto px-4 mt-6 lg:mt-12 lg:w-4/5">
        <h2 className="drops hover:border-b-2 h-10 lg:h-12 text-2xl lg:text-3xl font-bold text-white mb-6 lg:mb-8 text-center">
          Get In Touch
        </h2>
        <div className="flex flex-col lg:flex-row justify-between items-center w-full">
          <div className="scale rounded-lg p-4 lg:p-8 w-full lg:w-1/3 flex flex-col duration-300 items-center lg:items-start mb-6 lg:mb-0">
            <h3 className="text-lg lg:text-xl font-semibold text-white mb-3 lg:mb-4">
              Contact Information
            </h3>
            <ul className="text-gray-400">
              <li className="flex items-center mb-1 lg:mb-2">
                email : bachhetyv@gmail.com
              </li>
              <li className="flex items-center mb-1 lg:mb-2">Phone. : +918979464100</li>
              <li className="flex items-center">Address : Dehra Dun, IND</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} method="post" className="scale p-4 lg:p-8 rounded-lg flex flex-col w-full lg:w-2/3">
            <p className="text-white text-center font-medium mb-4 lg:mb-6 max-w-lg">
              Have a project in mind or just want to say hello? Drop me a
              message below, and I'll get back to you as soon as possible!
            </p>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="bg-gray-800 text-white py-2 px-3 lg:py-3 lg:px-4 rounded mb-3 lg:mb-4 w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="bg-gray-800 text-white py-2 px-3 lg:py-3 lg:px-4 rounded mb-3 lg:mb-4 w-full"
            />
            <textarea
              placeholder="Your Message"
              name="message"
              rows="5"
              className="bg-gray-800 text-white py-2 px-3 lg:py-3 lg:px-4 rounded mb-3 lg:mb-4 w-full"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 lg:py-3 lg:px-6 rounded hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
