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
    <div className="bg-gradient-to-r from-slate-950 to-blue-950 min-h-screen flex flex-col items-center justify-center px-20 overflow-hidden pb-10">
      <h1 className="drops text-white font-extrabold tracking-widest text-4xl mt-20 mb-6">
        My Skills
      </h1>
      <p className="textMove text-white font-medium tracking-wider text-lg text-center px-4 mb-12 max-w-2xl">
        Welcome to the Skills section, where I showcase the diverse range of
        tools and technologies I work with. Explore the cards below to learn
        more about my expertise.
      </p>
      <div className="flex justify-center items-center gap-10 w-full px-6">
        {skills.slice(startIndex, startIndex + 4).map((skill, index) => (
          <SkillCard key={startIndex + index} skill={skill} />
        ))}
      </div>
      <div className="flex mt-6 overflow-x-auto duration-300">
        <button
          className={`absolute top-[60%] left-0 ml-28 p-4 rounded-full ${
            startIndex === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-gray-300 hover:bg-gray-400"
          } focus:outline-none`}
          onClick={prevSkills}
          disabled={startIndex === 0}
        >
          {"<"}
        </button>
        <button
          className={`absolute top-[60%] right-0 mr-28 p-4 rounded-full ${
            startIndex >= skills.length - 4 ? "bg-gray-400 cursor-not-allowed" : "bg-gray-300 hover:bg-gray-400"
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
    <div className="scale w-64 h-72 opacity-90 hover:opacity-100 hover:scale-110 duration-500 bg-white rounded-xl shadow-lg flex flex-col items-center justify-center p-6">
      <img src={image} alt={name} className="w-28 h-28 object-contain mb-4" />
      <p className="text-gray-800 font-semibold text-center">{name}</p>
      <p className="text-gray-800 font-semibold text-center">{detail}</p>
    </div>
  );
}

export default Skills;
