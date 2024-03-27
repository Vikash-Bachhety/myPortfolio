import React, { useState } from "react";
import { Link } from "react-router-dom";
import user from "../assets/logos/user.png";

import { ThemeProvider } from "./ThemeContext";
import UseTheme from "./UseTheme";

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [theme, setTheme] = useState("darkP");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  return (
    <div className="fixed top-0 left-0 flex justify-between items-center tracking-wide bg-black bg-opacity-90 w-full text-white h-24 px-6 lg:px-20 z-20">
      <div className="w-1/4 md:w-1/3 flex items-end gap-2 md:gap-6">
        <img
          className="scale w-16 border-none rounded-full bg-transparent"
          src={user}
          alt=""
        />
        <span className="textColor hidden sm:block text-xl md:text-4xl text-white md:font-extrabold ">
          myPortfolio
        </span>
      </div>
      <div className="md:hidden">
        <button onClick={toggleDropdown}>
          <svg
            className="w-6 h-6 text-white cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {showDropdown ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      <ul
        className={`hidden md:flex gap-x-4 text-lg w-1/2 h-24 justify-around items-center ${
          showDropdown ? "hidden" : ""
        }`}
      >
        <Link
          to="/"
          className="w-24 text-center p-2 rounded-lg hover:bg-slate-300 hover:bg-opacity-20"
          onClick={closeDropdown}
        >
          Home
        </Link>
        <Link
          to="/About"
          className="w-24 text-center p-2 rounded-lg hover:bg-slate-300 hover:bg-opacity-20"
          onClick={closeDropdown}
        >
          About
        </Link>
        <Link
          to="/Skills"
          className="w-24 text-center p-2 rounded-lg hover:bg-slate-300 hover:bg-opacity-20"
          onClick={closeDropdown}
        >
          Skills
        </Link>
        <Link
          to="/Projects"
          className="w-24 text-center p-2 rounded-lg hover:bg-slate-300 hover:bg-opacity-20"
          onClick={closeDropdown}
        >
          Projects
        </Link>
        <Link
          to="/Contact"
          className="w-24 text-center p-2 rounded-lg hover:bg-slate-300 hover:bg-opacity-20"
          onClick={closeDropdown}
        >
          Contact
        </Link>
      </ul>
      {showDropdown && (
        <div className="absolute top-full left-0 bg-black bg-opacity-90 w-full py-2">
          <ul className="flex flex-col items-center">
            <Link
              to="/"
              className="hover:border-b-2 border-yellow-200 duration-300 mb-2"
              onClick={closeDropdown}
            >
              Home
            </Link>
            <Link
              to="/About"
              className="hover:border-b-2 border-yellow-200 duration-300 mb-2"
              onClick={closeDropdown}
            >
              About
            </Link>
            <Link
              to="/Skills"
              className="hover:border-b-2 border-yellow-200 duration-300 mb-2"
              onClick={closeDropdown}
            >
              Skills
            </Link>
            <Link
              to="/Projects"
              className="hover:border-b-2 border-yellow-200 duration-300 mb-2"
              onClick={closeDropdown}
            >
              Projects
            </Link>
            <Link
              to="/Contact"
              className="hover:border-b-2 border-yellow-200 duration-300 mb-2"
              onClick={closeDropdown}
            >
              Contact
            </Link>
          </ul>
        </div>
      )}
      <div className="absolute left-1/2 md:left-80 lg:left-1/3">
        <ThemeProvider value={{ theme, toggleTheme }}>
          <UseTheme />
        </ThemeProvider>
      </div>
    </div>
  );
}

export default Header;
