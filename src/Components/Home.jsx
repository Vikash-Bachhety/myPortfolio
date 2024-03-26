import React from "react";
import resume from "../assets/Vikash_resume.pdf";
import "./component.css";

function Home() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Vikash_Resume.pdf';
    link.click();
  };

  return (
    <div className={`"relative w-full min-h-screen flex items-center justify-center px-4 md:px-8 py-16 md:py-20 z-10"`}>
      <div className="absolute animateLeftBalls w-8 h-8 rounded-full -z-10 opacity-20 md:w-10 md:h-10"></div>
      <div className="absolute animateRightBalls w-8 h-8 rounded-full -z-10 opacity-20 md:w-10 md:h-10"></div>

      <div className="z-10 max-w-4xl flex flex-col items-center mt-12 md:mt-20 text-center">
        <h2 className="drops text-3xl md:text-4xl lg:text-5xl  font-extrabold tracking-wider mb-8 md:mb-4">Hi, I'm Vikash</h2>
        <h1 className="rightMove text-4xl md:text-5xl lg:text-7xl  font-extrabold tracking-widest mb-10 md:mb-6">Web Developer</h1>
        <p className="textMove text-md md:text-lg lg:text-xl  font-light mb-16 md:mb-12">
        Aspiring Front-End Developer | MCA Candidate | HTML, CSS, JavaScript Enthusiast
        </p>
        <div className="flex flex-col items-center gap-6 md:gap-12 z-20">
          <button onClick={handleDownload} className="w-52 md:w-72 px-4 md:px-6 py-3 md:py-4 border duration-300  hover:bg-green-500 bg-rose-500 border-white rounded-lg text-lg md:text-xl lg:text-2xl text-white font-semibold mb-4 md:mb-0">Download CV</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
