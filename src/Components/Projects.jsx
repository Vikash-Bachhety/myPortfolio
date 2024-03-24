import React, { useState } from "react";
import img1 from "../assets/bg/1.jpg";
import img2 from "../assets/bg/2.jpg";
import img3 from "../assets/bg/3.jpg";
import img4 from "../assets/bg/4.jpg";

function Projects() {
  const [projects, setProjects] = useState([
    {
      title: "Project 1",
      description:
        "E-commerce website replica utilizing HTML, CSS, and JavaScript. While drawing inspiration from Amazon, the design incorporates distinct features.",
      image: img2,
      visiterLink: "https://amazon-replica-gamma.vercel.app/",
      githubLink: "https://github.com/Vikash-Bachhety/EthicalEcommerceDemo"
    },
    {
      title: "Project 2",
      description:
        "A sleek responsive website that seamlessly toggles between dark and light themes.",
      image: img1,
      visiterLink: "https://theme-mode-seven.vercel.app/",
      githubLink: "https://github.com/Vikash-Bachhety/ThemeMode"
    },
    {
      title: "Project 3",
      description:
        "Sangeet, a responsive music website I created. With an intuitive player and curated song selection.",
      image: img3,
      visiterLink: "https://sangeet-xi.vercel.app/",
      githubLink: "https://github.com/Vikash-Bachhety/Sangeet"
    },
    {
      title: "Project 4",
      description:
        "'API Galaxy', is a practice project showcasing various sections, Each section utilizes different free APIs to fetch data from the server.",
      image: img4,
      visiterLink: "https://api-galaxy-website.vercel.app/",
      githubLink: "https://github.com/Vikash-Bachhety/API-Galaxy"
    },
  ]);

  return (
    <div className="bg-gradient-to-r from-slate-800 to-slate-950 min-h-screen flex flex-col items-center justify-center px-4 lg:px-20 py-12">
      <h1 className="drops text-white font-extrabold tracking-widest text-3xl lg:text-4xl mt-20 mb-6">
        Projects
      </h1>
      <p className="textMove text-white font-medium tracking-wider text-lg lg:text-xl text-center px-4 mb-16 max-w-2xl">
        Welcome to my Projects section! Below are some of the projects I've
        worked on. Click on each card to learn more.
      </p>
      <div className="flex flex-wrap justify-center gap-6 md:gap-12 lg:gap-16">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  const { title, description, image, visiterLink, githubLink } = project;

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-gray-800 font-semibold text-lg mb-2">{title}</h2>
          <p className="text-sm text-gray-600 mb-4">{description}</p>
          <div className="flex justify-between font-normal text-sm text-blue-600">
            <a href={visiterLink} className="hover:underline">Visit</a>
            <a href={githubLink} className="hover:underline">Github</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
