import React from "react";

const About = () => {
    return (
        <div
            id="about"
            className="flex justify-between items-center gap-[100px] pt-8 max-xl:block"
        >
            <div className="max-w-[50%] max-xl:max-w-[100%]">
                <h2 className="text-8xl text-[#00ff85] mb-7 font-bold tracking-wider max-sm:text-6xl">
                    About Me
                </h2>
                <p>
                    Hello, I am a full-stack web developer with over 1+ years of
                    experience and my main area of expertise is front-end
                    development. Overall my programming skills include Html,
                    CSS, JavaScript, ReactJs, Redux, Typescript, NodeJS,
                    ExpressJs, MongoDB, mySQL, Firebase.
                </p>
                <p className="my-[10px]">
                    I have accumulated experience working at FPTS - a leading
                    company in the securities field. Here, I took on the role of
                    a frontend developer for over a year. During that time, I
                    demonstrated the ability to code precise interfaces down to
                    each pixel and optimize performance for applications dealing
                    with large and complex data. I also have experience working
                    remotely with consulting firms and collaborating with
                    talented experts to create web products serving both
                    businesses and individual users.
                </p>
                <p>
                    My coding style involves writing clean, SEO-friendly code
                    that is optimized for performance. I am super proud of my
                    work and am always striving to create the best possible web
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
                        className="text-[#00ff85]"
                        href="http://"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Contact me
                    </a>
                    .
                </p>
            </div>
        </div>
    );
};

export default About;
