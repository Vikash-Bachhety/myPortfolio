import React, { useState } from "react";
import html from "../assets/logos/html.png";
import css from "../assets/logos/css.png";
import javascript from "../assets/logos/javascript.png";
import react from "../assets/logos/react.png";
import node from "../assets/logos/node.png";
import mongoose from "../assets/logos/mongoose.png";

function Skills() {
  const skills = [
    {
      name: "HTML",
      image: html,
      color: "#E44D26",
      detail:
        "HTML is the standard markup language for creating web pages and web applications.",
    },
    {
      name: "CSS",
      image: css,
      color: "#264DE4",
      detail:
        "CSS is the language used for styling web pages and web applications.",
    },
    {
      name: "JavaScript",
      image: javascript,
      color: "#F0DB4F",
      detail:
        "JavaScript is the programming language used to make web pages interactive.",
    },
    {
      name: "React",
      image: react,
      color: "#61DAFB",
      detail:
        "React is a JavaScript library for building user interfaces.",
    },
    {
      name: "Node.js",
      image: node,
      color: "#68A063",
      detail:
        "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine for building scalable network applications.",
    },
    {
      name: "Mongoose",
      image: mongoose,
      color: "#47A248",
      detail:
        "Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const nextSkills = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 4, skills.length - 4));
  };

  const prevSkills = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 4, 0));
  };

  return (
    <div className="bg-gradient-to-r from-slate-950 to-blue-950 min-h-screen flex flex-col items-center justify-center px-4 md:px-20 overflow-hidden pb-10">
      <h1 className="drops text-white font-extrabold tracking-widest text-3xl md:text-4xl mt-32 md:mt-32 mb-4">
        My Skills
      </h1>
      <p className="textMove text-white font-medium tracking-wider text-base md:text-lg text-center px-4 mb-6 md:mb-12 max-w-2xl">
        Welcome to the Skills section, where I showcase the diverse range of
        tools and technologies I work with. Explore the cards below to learn
        more about my expertise.
      </p>
      <div className="flex justify-center items-center flex-wrap gap-6 md:gap-10 w-full px-2 md:px-6">
        {skills.slice(startIndex, startIndex + 4).map((skill, index) => (
          <SkillCard key={startIndex + index} skill={skill} />
        ))}
      </div>
      <div className="flex mt-8 justify-between gap-6">
        <button
          className={`ml-auto p-2 md:p-4 rounded-full ${
            startIndex === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gray-300 hover:bg-gray-400"
          } focus:outline-none`}
          onClick={prevSkills}
          disabled={startIndex === 0}
        >
          {"<"}
        </button>
        <button
          className={`mr-auto p-2 md:p-4 rounded-full ${
            startIndex >= skills.length - 4
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gray-300 hover:bg-gray-400"
          } focus:outline-none`}
          onClick={nextSkills}
          disabled={startIndex >= skills.length - 4}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}

function SkillCard({ skill }) {
  const { name, image, detail } = skill;

  return (
    <div className="scale w-60 md:w-64 h-44 md:h-72 opacity-90 hover:opacity-100 hover:scale-110 duration-500 bg-white rounded-xl shadow-lg flex flex-col items-center justify-center p-4 md:p-6">
      <img src={image} alt={name} className="w-20 h-20 md:w-28 md:h-28 object-contain mb-4" />
      <p className="text-gray-800 font-semibold text-center text-sm md:text-lg">{name}</p>
      <p className="text-gray-800 font-semibold text-center text-xs md:text-sm">{detail}</p>
    </div>
  );
}

export default Skills;
