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

  const addProject = () => {
    const newProject = {
      title: "New Project",
      description: "Description of the new project",
      image: "../assets/placeholder.jpg",
    };
    setProjects([...projects, newProject]);
  };

  return (
    <div className="bg-gradient-to-r from-slate-800 to-slate-950 min-h-screen flex flex-col items-center justify-center px-6 lg:px-20 py-12">
      <h1 className="drops text-white font-extrabold tracking-widest text-3xl lg:text-4xl mt-20 mb-6">
        Projects
      </h1>
      <p className="textMove text-white font-medium tracking-wider text-lg lg:text-xl text-center px-4 mb-16 max-w-2xl">
        Welcome to my Projects section! Below are some of the projects I've
        worked on. Click on each card to learn more.
      </p>
      <div className="flex justify-center flex-wrap gap-x-12 gap-y-28 w-full">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
        <AddProjectCard onClick={addProject} />
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  const { title, description, image , visiterLink, githubLink} = project;

  return (
    <div className="scale w-1/4 h-80 bg-white rounded-xl shadow-lg transform transition-transform hover:scale-105">
      <img src={image} alt={title} className="w-full p-1 h-1/2 object-cover rounded-xl" />
      <div className="p-4 h-1/2">
        <h2 className="h-1/4 text-gray-800 font-semibold text-lg">{title}</h2>
        <p className="overflow-hidden h-1/2 text-sm text-gray-600">
          {description}
        </p>
        <div className="h-60 w-full flex justify-between font-normal text-lg text-blue-600">
          <a href= {visiterLink}>Visit</a>
          <a href= {githubLink}>Github</a>
        </div>
      </div>
    </div>
  );
}

function AddProjectCard({ onClick }) {
  return (
    <div
      className="w-1/4 h-80 bg-gray-100 rounded-xl shadow-lg transform transition-transform hover:scale-105 flex justify-center items-center cursor-pointer"
      onClick={onClick}
    >
      <svg
        className="h-16 w-16 text-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    </div>
  );
}

export default Projects;
