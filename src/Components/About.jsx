import React from "react";
import profilePic from "../assets/profilePic.jpg";
import "../Components/component.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="bg-gradient-to-r from-slate-800 to-gray-950 text-white py-12 md:py-20 min-h-screen w-full">
      <div className="container mx-auto flex flex-col lg:flex-row items-center md:tracking-wide md:leading-10 justify-center px-4 md:px-20 mt-12 md:mt-20">
        <div className="lg:w-1/2 px-4 md:px-8 md:-mt-6">
          <div className="relative w-full md:w-96 h-60 md:h-[500px] p-8 shadow-xl shadow-red-600 border-2 rounded-t-full rounded-b-full border-blue-500 flex justify-center mb-6 md:mb-20 lg:mb-0 hover:-rotate-6">
            <img
              className="scale rounded-t-full rounded-b-full border-4 border-blue-500 shadow-lg shadow-blue-300 w-full md:w-80 h-52 md:h-[500px] object-cover"
              src={profilePic}
              alt="Profile"
            />
          </div>
        </div>
        <div className="flex flex-col items-center md:w-full lg:w-1/2 text-center lg:text-left p-4 md:p-5 leading-loose">
          <h2 className="drops text-3xl md:text-5xl lg:text-4xl font-bold mb-2 md:mb-4">
            Hi, I'm <span className="text-cyan-500">Vikash Bachhety,</span>
          </h2>
          <p className="textMove text-base md:text-2xl lg:text-xl tracking-widest text-rose-500 mb-4 md:mb-10">
            Passionate Web Developer | Tech Enthusiast
          </p>
          <p className="text-base text-gray-300 md:text-2xl lg:text-lg leading-loose">
            Currently pursuing a Master's in Computer Applications with a keen
            interest in crafting seamless and engaging user experiences through
            front-end development. Proficient in HTML, CSS, and JavaScript,
            with a focus on creating responsive and user-friendly web
            interfaces. Acquainted with core Java and SQL for foundational
            application development. Eager to explore and implement the latest
            advancements in front-end technologies. Enthusiastically seeking
            opportunities to contribute creativity and technical expertise to
            dynamic projects that push the boundaries of user interface design.
          </p>
          <div className="mt-4 md:mt-12">
            <Link
              to="/contact"
              className="inline-block bg-cyan-500 text-gray-900 duration-500 py-2 md:py-3 px-4 md:px-6 rounded-full uppercase tracking-wider font-semibold hover:bg-rose-500 hover:text-gray-100"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
