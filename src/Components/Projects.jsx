import React, { useState } from "react";
import img1 from "../assets/bg/1.jpg";
import img2 from "../assets/bg/2.jpg";
import img3 from "../assets/bg/3.jpg";
import img4 from "../assets/bg/4.jpg";
// import img5 from "../assets/bg/5.jpg";
import img6 from "../assets/bg/6.jpg";

function Projects() {
  const [projects, setProjects] = useState([
    {
      title: "E-Commerce UI Replica",
      Technologies:
                  "HTML, CSS",
      image: img2,
      visiterLink: "https://amazon-replica-gamma.vercel.app/",
      githubLink: "https://github.com/Vikash-Bachhety/EthicalEcommerceDemo"
    },
    {
      title: "Theme Changer",
      Technologies:
                  "HTML, CSS, Tailwind, React",
      image: img1,
      visiterLink: "https://theme-mode-seven.vercel.app/",
      githubLink: "https://github.com/Vikash-Bachhety/ThemeMode"
    },
    {
      title: "Sangeet-music website",
      Technologies:
                  "HTML, CSS, JS, Tailwind",
      image: img3,
      visiterLink: "https://sangeet-xi.vercel.app/",
      githubLink: "https://github.com/Vikash-Bachhety/Sangeet"
    },
    {
      title: "API-Galaxy",
      Technologies:
                  "HTML, CSS, Tailwind, React, React-router",
      image: img4,
      visiterLink: "https://api-galaxy-website.vercel.app/",
      githubLink: "https://github.com/Vikash-Bachhety/API-Galaxy"
    // },
    // {
    //   title: "MemoSage`",
    //   Technologies:
    //               "Node.js, Express.js, EJS, Mongoose",
    //   image: img5,
    //   visiterLink: "https://memosage-production.up.railway.app/",
    //   githubLink: "https://github.com/Vikash-Bachhety/memoSage"
    // },
    {
      title: "Blog-cards",
      Technologies:
                  "Tailwind, React, React-router, Node.js, Express.js, Mongoose",
      image: img6,
      visiterLink: "https://blog-with-cards.vercel.app/",
      githubLink: "https://github.com/Vikash-Bachhety/Blog"
    },
  ]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 lg:px-20 py-12 z-20">
      <h1 className="drops text-current font-extrabold tracking-widest text-3xl lg:text-4xl mt-20 mb-6">
        Projects
      </h1>
      <p className="textMove text-current font-medium tracking-wider text-lg lg:text-xl text-center px-4 mb-12 md:mb-20 max-w-2xl">
        Welcome to my Projects section! Below are some of the projects I've
        worked on. Click on each card to learn more.
      </p>
      <div className="flex flex-wrap justify-center gap-6 md:gap-12 lg:gap-16">
        {projects.reverse().map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  const { title, Technologies, image, visiterLink, githubLink } = project;

  return (
    <div className="scale border border-current rounded-xl w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <div className="h-72 shadow-lg overflow-hidden transform transition-transform hover:scale-105 duration-500">
        <img src={image} alt={title} className="w-full h-1/2 rounded-xl p-1 object-cover" />
        <div className="p-4">
          <h2 className="font-normal text-xl mb-2">{title}</h2>
          <p className="text-md font-extralight mb-4"><b>Technologies:</b> {Technologies}</p>
          <div className=" font-normal text-md text-blue-500 decoration-transparent">
            <a href={visiterLink} target="_blank" className="absolute bottom-2 hover:underline">Visit</a>
            <a href={githubLink} target="_blank" className="absolute bottom-2 right-5 hover:underline">Github</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
