// import React from "react";

// function ContactPage() {
//   return (
//     <div className="bg-gradient-to-r from-gray-950 to-blue-950 min-h-screen flex flex-col items-center justify-center px-6 lg:px-20 py-12">
//       {/* Animated text */}
//       <h1 className="text-white font-extrabold tracking-widest text-3xl lg:text-4xl mt-10 mb-6">
//         Get in Touch
//       </h1>

//       {/* Description */}
//       <p className="text-white text-center font-medium mb-12 max-w-lg">
//         Have a project in mind or just want to say hello? Drop me a message below, and I'll get back to you as soon as possible!
//       </p>

//       {/* Contact form */}
//       <form className="bg-white bg-opacity-10 opacity-90 rounded-xl shadow-lg p-8 w-full md:h-3/4 md:w-1/3">
//         <input
//           type="text"
//           placeholder="Your Name"
//           className="input-field mb-4 w-full p-2 rounded-lg focus:outline-none"
//         />
//         <input
//           type="email"
//           placeholder="Your Email"
//           className="input-field mb-4 w-full p-2 rounded-lg focus:outline-none"
//         />
//         <textarea
//           placeholder="Your Message"
//           rows="4"
//           className="input-field mb-4 w-full p-2 rounded-lg focus:outline-none"
//         />
//         <button
//           className="bg-blue-500 text-white py-2 h-10 hover:text-lg px-4 rounded-md hover:bg-blue-600 transition duration-300 w-full"
//         >
//           Send Message
//         </button>
//       </form>
//     </div>
//   );
// }

// export default ContactPage;

import React from "react";
import axios from "axios";

import "../Components/component.css";

function Contact() {
  const handlesubmit = async () => {
    const response = await axios.post("http://localhost:3000/api/feedback", {
      name,
      email,
      message,
    });

    const data = await response.data;
  };

  return (
    <section className="contact-section bg-gray-900 py-16 flex justify-center">
      <div className="flex flex-col items-center w-full mx-auto px-4 mt-12">
        <h2 className="drops hover:border-b-2 h-12 text-3xl lg:text-4xl font-bold text-white mb-10 mt-6 text-center">
          Get In Touch
        </h2>
        <div className="flex justify-between items-center w-4/5">
          <div className="scale rounded-lg p-10 w-1/3 flex flex-col duration-300 items-center">
            <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">
              Contact Information
            </h3>
            <ul className="text-gray-400">
              <li className="flex items-center mb-2">
                email : bachhetyv@gmail.com
              </li>
              <li className="flex items-center mb-2">Phone. : +918979464100</li>
              <li className="flex items-center">Address : Dehra Dun, IND</li>
            </ul>
          </div>

          <form onSubmit={handlesubmit} method="post" className="scale p-5 rounded-lg flex flex-col w-2/5">
            <p className="text-white text-center font-medium mb-6 max-w-lg">
              Have a project in mind or just want to say hello? Drop me a
              message below, and I'll get back to you as soon as possible!{" "}
            </p>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="bg-gray-800 text-white py-3 px-4 rounded mb-4"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="bg-gray-800 text-white py-3 px-4 rounded mb-4"
            />
            <textarea
              placeholder="Your Message"
              name="message"
              rows="5"
              className="bg-gray-800 text-white py-3 px-4 rounded mb-4"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600 transition duration-300"
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
