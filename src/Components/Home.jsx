import React from "react";
import linkedin from "../assets/logos/linkedin.png";
import github from "../assets/logos/github.png";
import gmail from "../assets/logos/gmail.png";
import resume from "../assets/Vikash_resume.pdf"; // Import your resume file
import "../Components/component.css";

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
    <div className="relative bg-gradient-to-r from-slate-950 to-slate-800 w-full min-h-screen flex items-center justify-center px-4 md:px-8 py-16 md:py-20 -z-20">
      {/* Background balls */}
      <div className="absolute animateRightBalls w-16 h-16 rounded-full -z-10 opacity-20 md:w-24 md:h-24"></div>
      <div className="absolute animateLeftBalls w-16 h-16 rounded-full -z-10 opacity-20 md:w-24 md:h-24"></div>

      {/* Content */}
      <div className="z-10 max-w-4xl flex flex-col items-center mt-12 md:mt-20 text-center">
        <h2 className="drops text-3xl md:text-4xl lg:text-5xl text-white font-extrabold tracking-wider mb-2 md:mb-4">Hi, I'm Vikash</h2>
        <h1 className="rightMove text-4xl md:text-5xl lg:text-6xl text-white font-extrabold tracking-widest mb-4 md:mb-6">Web Developer</h1>
        <p className="zoomin text-base md:text-lg lg:text-xl text-white font-light mb-6 md:mb-8">
          I solve complex user experience problems and create solutions that connect billions of people.
        </p>
        <div className="flex flex-col items-center gap-6 md:gap-12">
          <button onClick={handleDownload} className="w-52 md:w-72 px-4 md:px-6 py-3 md:py-4 border bg-rose-500 border-white rounded-lg text-lg md:text-xl lg:text-2xl text-white font-semibold mb-4 md:mb-0">Download CV</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
