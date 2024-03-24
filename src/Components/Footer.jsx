import React from "react";
import linkedin from "../assets/logos/linkedin.png";
import github from "../assets/logos/github.png";
import gmail from "../assets/logos/gmail.png";

function Footer() {
  return (
    <footer className="bg-gradient-to-t from-gray-950 to-slate-900 text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-4 md:px-0">
        {/* Follow Me Section */}
        <div className="text-center mb-8 md:mb-0">
          <h3 className="text-lg font-semibold mb-6 hover:border-b-2 h-10 tracking-wider">Follow Me</h3>
          <div className="flex justify-center gap-x-10">
            <a href="http://www.google.co.in" className="text-white hover:text-gray-300 hover:scale-110"><img src={linkedin} alt="LinkedIn" className="w-10 h-10" /></a>
            <a href="#" className="text-white hover:text-gray-300 hover:scale-110"><img src={github} alt="GitHub" className="w-10 h-10" /></a>
            <a href="bachhetyv@gmail.com" className="text-white hover:text-gray-300 hover:scale-110"><img src={gmail} alt="Gmail" className="w-10 h-10" /></a>
            {/* Add more social media icons as needed */}
          </div>
        </div>
        {/* Contact Information */}
        <div className="flex flex-col items-center md:w-1/2">
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="mb-2">Email: bachhetyv@gmail.com</p>
          <p className="mb-2">Phone: +918979464100</p>
          <p>Address: Dehra Dun, IND</p>
        </div>
        {/* Useful Links Section */}
        <div className="flex flex-col items-center md:w-1/2">
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul className="list-disc pl-4">
            <li><a href="/About">About Me</a></li>
            <li><a href="/Skills">Skills</a></li>
            <li><a href="/Projects">Projects</a></li>
            <li><a href="/Contact">Connect</a></li>
            {/* Add more links as needed */}
          </ul>
        </div>
      </div>
      {/* Legal Information */}
      <div className="w-full flex justify-center mt-8 text-xs">
        <p className="text-center">&copy; 2024 vikash. All rights reserved. | Privacy Policy | Terms of Service | Disclaimer</p>
      </div>
    </footer>
  );
}

export default Footer;
