import React from "react";
import profilePic from "../assets/profilePic.jpg";
import "../Components/component.css"


function About() {
  return (
    <section className="bg-gradient-to-r from-slate-800 to-gray-950 text-white py-20 min-h-screen w-full">
      <div className="absolute animateLeftBalls w-24 h-24 rounded-full -z-10 opacity-20 md:w-32 md:h-32"></div>
      <div className="z-20 container mx-auto flex flex-col md:flex-row items-center justify-center px-20 mt-14">
        <div className="md:w-1/2 px-8 md:px-20">
          <div className="relative w-96 p-4 hover:border-2 rounded-t-full rounded-b-full border-blue-500 flex justify-center hover:-rotate-6">
            <img className="scale rounded-t-full rounded-b-full border-4 border-blue-500 shadow-lg shadow-blue-300 w-52 h-60 md:w-80 md:h-[500px] object-cover object-top" src={profilePic} alt="Profile" />
          </div>
        </div>
        <div className="md:w-1/2 text-center md:text-left p-5 leading-loose">
          <h2 className="drops text-4xl md:text-5xl font-bold mb-4">Hi, I'm <span className="text-cyan-500">Vikash Bachhety,</span></h2>
          <p className="textMove text-lg md:text-xl tracking-widest text-rose-500 mb-8">Passionate Web Developer | Tech Enthusiast</p>
          <p className="text-base text-gray-300 md:text-xl leading-relaxed hover:scale-105">I am a creative web developer with expertise in HTML, CSS, JavaScript, React, and more. I enjoy turning complex problems into simple, beautiful, and intuitive designs. With a strong background in computer science and a keen eye for detail, I am always eager to learn and explore new technologies. Apart from coding, I love photography, hiking, and exploring new cuisines.</p>
          <div className="mt-6">
            <a href="/contact" className="inline-block bg-cyan-500 text-gray-900 py-3 px-6 rounded-full uppercase tracking-wider font-semibold hover:bg-rose-500 hover:text-gray-100 duration-300">Get in Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
