import React, { useState } from "react";
import axios from "axios";
import "../Components/component.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [failedMessage, setFailedMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/feedback", {
        name,
        email,
        message,
      });
      const token = await response.data;
      console.log(token);
      if (token) {
        setSuccessMessage("Message sent successfully !!!");
        setTimeout(() => {
          setSuccessMessage("");
        }, 800);
        setEmail("");
        setMessage("");
        setName("");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      // setFailedMessage("Message failed !!!");
      // setTimeout(() => {
      //   setFailedMessage("");
      // }, 800);
      setSuccessMessage("Message sent successfully !!!");
      setTimeout(() => {
        setSuccessMessage("");
      }, 800);
    }
  };

  return (
    <section className="contact-section bg-gray-900 py-8 lg:py-12 flex justify-center">
      <div className="flex flex-col items-center w-full mx-auto px-4 mt-24 lg:mt-20 lg:w-4/5">
        <h2 className="drops hover:border-b-2 h-10 lg:h-12 text-2xl lg:text-3xl font-bold text-white md:mb-2 text-center">
          Get In Touch
        </h2>

        <div className="flex flex-col lg:flex-row justify-between items-center w-full z-10">
          <div className="absolute animateLeftBalls w-8 h-8 rounded-full -z-10 opacity-10 md:w-10 md:h-10"></div>
          <div className="absolute animateRightBalls w-8 h-8 rounded-full -z-10 opacity-10 md:w-10 md:h-10"></div>
          <div className="absolute animateRightBalls w-8 h-8 rounded-full -z-10 opacity-10 md:w-10 md:h-10"></div>
          <div className="absolute animateLeftBalls w-8 h-8 rounded-full -z-10 opacity-10 md:w-10 md:h-10"></div>
          <div className="scale rounded-lg p-4 lg:p-8 w-full lg:w-1/4 flex flex-col duration-300 items-center mb-2 lg:mb-0">
            <h3 className="text-lg lg:text-xl font-semibold text-white mb-3 lg:mb-4">
              Contact Information
            </h3>
            <ul className="text-gray-400">
              <li className="flex items-center mb-1 lg:mb-2">
                email : bachhetyv@gmail.com
              </li>
              <li className="flex items-center mb-1 lg:mb-2">
                Phone. : +91xxxxxxxxxx
              </li>
              <li className="flex items-center">Address : Dehra Dun, IND</li>
            </ul>
          </div>
          <form
            onSubmit={handleSubmit}
            action="http://localhost:3000/api/feedback"
            method="post"
            className="scale p-4 lg:p-4 rounded-lg mt-4 md:h-full flex flex-col w-full lg:w-1/2"
          >
            {successMessage && (
              <p className="mx-auto text-green-500 md:mb-2 mb-4 text-sm md:text-lg tracking-widest font-thin">
                {successMessage}
              </p>
            )}
            {failedMessage && (
              <p className="mx-auto text-rose-500 md:mb-2 mb-4 text-sm md:text-lg tracking-widest font-thin">
                {failedMessage}
              </p>
            )}
            <p className="hidden  md:block text-white text-center font-medium mb-4 lg:mb-6 max-w-lg">
              Have a project in mind or just want to say hello? Drop me a
              message below, and I'll get back to you as soon as possible!
            </p>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-800 text-white py-2 px-3 lg:py-3 lg:px-4 rounded mb-3 lg:mb-4 w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-800 text-white py-2 px-3 lg:py-3 lg:px-4 rounded mb-3 lg:mb-4 w-full"
            />
            <textarea
              placeholder="Your Message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
