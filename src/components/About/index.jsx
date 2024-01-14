import React, { useEffect } from "react";
// import "./about.css";
import "./computerstyle.css";

const About = ({ scrollToContact }) => {
    return (
        <div
            id="about"
            className="flex flex-row-reverse justify-between items-center gap-[100px] pt-8 max-xl:flex-col max-xl:gap-[100px]"
        >
            <div className="max-w-[50%] max-xl:max-w-[100%]">
                <h2 className="text-8xl text-[#00ff85] mb-7 font-bold tracking-wider max-sm:text-6xl">
                    About Me
                </h2>
                <p className="z-20">
                    Hello, I am a Front-end web developer with over 6 month of
                    experience. My programming skills include HTML, CSS,
                    TaiwindCss, JavaScript, ReactJs, Redux, NextJs, TypeScript.
                </p>
                <p className="my-[10px]">
                    I always want to learn and research to improve myself and
                    develop my career as a programmer. My strength is mindset
                    logic and apparent. I ability listening, and team work
                    effective.
                </p>
                <p>
                    My coding style involves writing clean, SEO-friendly code
                    that is optimized for performance. I am proud of my work and
                    I am always striving to create the best possible web
                    products. Visit my{" "}
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
                        onClick={(e) => scrollToContact(e)}
                    >
                        Contact me
                    </a>
                    .
                </p>
            </div>

            <div className="relative w-[100%] z-10 max-xl:w-auto">
                <div className="computer max-xl:static  max-xl:transform-none">
                    <div className="screen relative"></div>
                    <div className="stand"></div>
                </div>
            </div>

            {/* <div className="earth"></div> */}
            {/* <div class="stage">
                <div class="cubespinnerround">
                    <div class="face1 flex items-center justify-center">
                        <img
                            className="w-[150px] h-[150px] max-sm:w-[70px] max-sm:h-[70px]"
                            src="/assets/img/htmlicon.png"
                            alt="cssicon"
                        />
                    </div>
                    <div class="face2 flex items-center justify-center">
                        <img
                            className="w-[150px] h-[150px] max-sm:w-[70px] max-sm:h-[70px]"
                            src="/assets/img/cssicon.png"
                            alt="cssicon"
                        />
                    </div>
                    <div class="face3 flex items-center justify-center">
                        <img
                            className="w-[150px] h-[150px] max-sm:w-[70px] max-sm:h-[70px]"
                            src="/assets/img/JSicon.png"
                            alt="cssicon"
                        />
                    </div>
                    <div class="face4 flex items-center justify-center">
                        <img
                            className="w-[150px] h-[150px] max-sm:w-[70px] max-sm:h-[70px]"
                            src="/assets/img/React-icon.png"
                            alt="cssicon"
                        />
                    </div>
                    <div class="face5 flex items-center justify-center">
                        <img
                            className="w-[150px] h-[150px] max-sm:w-[70px] max-sm:h-[70px]"
                            src="/assets/img/redux-icon.png"
                            alt="cssicon"
                        />
                    </div>
                    <div class="face6 flex items-center justify-center">
                        <img
                            className="w-[150px] h-[150px] max-sm:w-[70px] max-sm:h-[70px]"
                            src="/assets/img/nextjs-icon.png"
                            alt="cssicon"
                        />
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default About;
