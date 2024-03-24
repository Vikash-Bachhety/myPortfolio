import React from "react";
import linkedin from "../assets/logos/linkedin.png";
import github from "../assets/logos/github.png";
import gmail from "../assets/logos/gmail.png";
import resume from "../assets/Vikash_resume.pdf"; // Import your resume file
import "../Components/component.css"

function Home() {
  const handleDownload = () => {
    // Create an anchor element
    const link = document.createElement('a');
    // Set the href attribute to the URL of the file
    link.href = resume;
    // Set the download attribute to the desired filename
    link.download = 'Vikash_Resume.pdf';
    // Programmatically trigger a click event on the anchor element
    link.click();
  };

  return (
    <div className="relative bg-gradient-to-r from-slate-950 to-slate-800 w-full min-h-screen flex items-center justify-center px-8 py-20 -z-20">
      {/* Background balls */}
      <div className="absolute animateRightBalls w-24 h-24 rounded-full -z-10 opacity-20 md:w-32 md:h-32"></div>
      <div className="absolute animateLeftBalls w-24 h-24 rounded-full -z-10 opacity-20 md:w-32 md:h-32"></div>

      {/* Content */}
      <div className="z-10 max-w-4xl flex flex-col items-center mt-20 text-center">
        <h2 className="drops text-4xl md:text-5xl lg:text-6xl text-white font-extrabold tracking-wider mb-4">Hi, I'm Vikash</h2>
        <h1 className="rightMove text-5xl md:text-6xl lg:text-7xl text-white font-extrabold tracking-widest mb-6">Web Developer</h1>
        <p className="zoomin text-lg md:text-xl lg:text-2xl text-white font-light mb-8">
          I solve complex user experience problems and create solutions that connect billions of people.
        </p>
        <div className="flex flex-col items-center mt-10 gap-12">
          <button onClick={handleDownload} className="w-72 px-6 py-4 border bg-rose-500 border-white rounded-xl text-lg md:text-xl lg:text-2xl text-white font-semibold mb-4 md:mb-0">Download CV</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
