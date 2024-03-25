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
          I'm Phat, a software developer. I have a passion for creating
          innovative websites that make it beauty and SEO-Friendly with Ui-Ux
          design for user. When I'm not coding, I will use the time for personal
          preferences such as football, gym, reading book,...
        </p>
        <p className="my-[10px]">
          I always want to learn and research to improve myself more and develop
          my career as a programmer. My power is logical thinking and clarity. I
          the ability to listen, and to work effectively as a team.
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
          , Or{" "}
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
            Download My CV
          </a>{" "}
          to be able to better understand the programming skills I have.
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
