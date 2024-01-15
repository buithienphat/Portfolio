import React from "react";

const Navbar = () => {
    return (
        <div className="flex flex-col justify-center gap-10 items-center  bg-[#212121] border-r border-r-[#4c4b4b] h-screen w-20 fixed z-10 top-0 left-0 max-sm:hidden">
            <a
                href="/"
                className="font-rm text-6xl text-[#00FF85] border-b border-b-[#4c4b4b] p-4"
                onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({
                        top: document.querySelector("#home").offsetTop,
                        behavior: "smooth",
                    });
                }}
            >
                <img src="/assets/img/Plogo.png" alt="Logo" />
            </a>
            <ul className="nav flex flex-col gap-10 w-[100%]">
                <li className="flex justify-center">
                    <img
                        src="./assets/img/home-icon.svg"
                        className="text-[#00FF85] p-4 w-[70%] bg-[#494a4d] rounded-md cursor-pointer"
                        alt="home"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({
                                top: document.querySelector("#home").offsetTop,
                                behavior: "smooth",
                            });
                        }}
                    />
                </li>
                <li className="flex justify-center">
                    <img
                        src="./assets/img/user-icon.svg"
                        className="text-[#00FF85] p-4 w-[70%] bg-[#494a4d] rounded-md cursor-pointer"
                        alt="about"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({
                                top: document.querySelector("#about").offsetTop,
                                behavior: "smooth",
                            });
                        }}
                    />
                </li>
                <li className="flex justify-center">
                    <img
                        src="./assets/img/project-icon.svg"
                        className="text-[#00FF85] p-4 w-[70%] bg-[#494a4d] rounded-md cursor-pointer"
                        alt="project"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({
                                top: document.querySelector("#project")
                                    .offsetTop,
                                behavior: "smooth",
                            });
                        }}
                    />
                </li>
                <li className="flex justify-center">
                    <img
                        src="./assets/img/email-icon.svg"
                        className="text-[#00FF85] p-4 w-[70%] bg-[#494a4d] rounded-md cursor-pointer"
                        alt="contact"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({
                                top: document.querySelector("#contact")
                                    .offsetTop,
                                behavior: "smooth",
                            });
                        }}
                    />
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
