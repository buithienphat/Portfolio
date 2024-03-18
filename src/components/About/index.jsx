import React, { useEffect } from "react";
// import "./about.css";
import "./computerstyle.css";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-row-reverse justify-between items-center gap-[100px] pt-8 max-xl:flex-col max-xl:gap-[100px]"
    >
      <div
        data-aos="fade-left"
        data-aos-offset="50"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        className="max-w-[50%] max-xl:max-w-[100%]"
      >
        <h2 className="text-8xl text-transparent bg-clip-text  bg-gradient-to-r from-[#03ff85] to-[#00e6da] mb-7 font-bold tracking-wider max-sm:text-6xl">
          About Me
        </h2>
        <p className="z-20">
          Hello, I am a Front-end web developer with over 6 month of experience.
          My programming skills include HTML, CSS, TaiwindCss, JavaScript,
          ReactJs, Redux, NextJs, TypeScript.
        </p>
        <p className="my-[10px]">
          I always want to learn and research to improve myself and develop my
          career as a programmer. My strength is mindset logic and apparent. I
          ability listening, and team work effective.
        </p>
        <p>
          My coding style involves writing clean, SEO-friendly code that is
          optimized for performance. I am proud of my work and I am always
          striving to create the best possible web products. Visit my{" "}
          <a
            className="text-[#00ff85]"
            href="https://github.com/buithienphat"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>{" "}
          profile for more details or just{" "}
          <a
            className="contact text-[#00ff85]"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({
                top: document.querySelector("#contact").offsetTop,
                behavior: "smooth",
              });
            }}
          >
            Contact me
          </a>
          .
        </p>
      </div>

      <div
        data-aos="fade-right"
        data-aos-offset="50"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="relative w-[100%] z-10 max-xl:w-auto"
      >
        <div className="computer max-xl:static  max-xl:transform-none">
          <div className="screen relative"></div>
          <div className="stand"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
