import React from "react";
import linkedin from "../assets/logos/linkedin.png";
import github from "../assets/logos/github.png";
import gmail from "../assets/logos/gmail.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gradient-to-t from-gray-950 to-slate-900 text-white py-12">
      <div className="container mx-auto flex flex-col items-center gap-8 px-4 md:px-0">
        <div className="text-center mb-8 md:mb-0">
          <h3 className="text-lg font-semibold mb-6 hover:border-b-2 h-10 tracking-wider">Follow Me</h3>
          <div className="flex justify-center gap-x-10">
            <Link to="https://www.linkedin.com/in/vikash-bachhety/" className="text-white hover:text-gray-300 hover:scale-110"><img src={linkedin} alt="LinkedIn" className="w-10 h-10" /></Link>
            <Link to="https://github.com/Vikash-Bachhety" className="text-white hover:text-gray-300 hover:scale-110"><img src={github} alt="GitHub" className="w-10 h-10" /></Link>
            <Link to="https://bachhetyv@gmail.com" className="text-white hover:text-gray-300 hover:scale-110"><img src={gmail} alt="Gmail" className="w-10 h-10" /></Link>
          </div>
        </div>
        <div className="md:flex md:flex-row justify-center gap-x-96 w-full">
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="mb-2">Email: bachhetyv@gmail.com</p>
          <p className="mb-2">Phone: +91xxxxxxxxxx</p>
          <p>Address: Dehra Dun, IND</p>
        </div>
        <div className="flex flex-col mt-10 md:mt-0 items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul className="list-disc pl-4">
            <li><a href="/About">About Me</a></li>
            <li><a href="/Skills">Skills</a></li>
            <li><a href="/Projects">Projects</a></li>
            <li><a href="/Contact">Connect</a></li>
          </ul>
        </div>
      </div>
      </div>
      <div className="w-11/12 flex justify-center mx-auto mt-8 tracking-widest leading-6 text-xs">
        <p className="text-center">&copy; 2024 vikash. All rights reserved. | Privacy Policy | Terms of Service | Disclaimer</p>
      </div>
    </footer>
  );
}

export default Footer;
