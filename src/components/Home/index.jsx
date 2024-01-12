import React, { useEffect } from "react";
import Button from "../Button";
import "./HomeStyle.css";

const Home = () => {
    useEffect(() => {
        const ball = document.querySelector(".ball");
        ball.style.mix;
        let mouseX = -100;
        let mouseY = 0;

        let ballX = 0;
        let ballY = 0;

        let speed = 0.1;

        function animate() {
            let distX = mouseX - ballX;
            let distY = mouseY - ballY;

            ballX = ballX + distX * speed;
            ballY = ballY + distY * speed;

            ball.style.left = ballX + "px";
            ball.style.top = ballY + "px";

            requestAnimationFrame(animate);
        }
        animate();

        const homeElelment = document.querySelector("#home");
        document.addEventListener("mousemove", function (event) {
            if (event.pageY > homeElelment.offsetHeight || event.pageX < 80) {
                ball.style.display = "none";
            } else {
                ball.style.display = "block";
                mouseX = event.pageX;
                mouseY = event.pageY;
            }
        });
    }, []);

    return (
        <div
            id="home"
            className="h-screen flex items-center justify-between select-none max-xl:flex-col max-xl:justify-center max-xl:gap-[200px] max-lg:gap-[200px] max-sm:gap-[100px]"
        >
            <div className="max-xl:w-[100%]">
                <p className="text-2xl text-[#9CA3AF]">Hello I am</p>
                <div className="text-content">
                    <h1 className=" font-bold text-7xl uppercase max-sm:text-4xl">
                        Bui Thien Phat
                    </h1>
                </div>
                <p className="text-[#00ff85] mt-7 text-[24px] uppercase font-medium tracking-wider max-sm:m-1 max-sm:text-sm">
                    Front End Web Devoloper
                </p>
                <p className="text-xl text-[#9CA3AF] mt-2 mb-5 max-sm:text-sm max-sm:mb-3">
                    6 Month of Experience
                </p>
                <a
                    href="#contact"
                    className="bg-[#14C25C] inline-flex items-center h-[50px] px-[30px] rounded-xl uppercase tracking-tight font-semibold"
                >
                    {" "}
                    Contact me
                </a>
            </div>
            <div className="stage w-[35%] h-[250px] top-[50%] max-sm:h-[70px]">
                <div className="cubespinner">
                    <div className="cube flex items-center justify-center ite face1">
                        <img
                            className="w-[150px] h-[150px] max-sm:w-[70px] max-sm:h-[70px]"
                            src="/assets/img/cssicon.png"
                            alt="cssicon"
                        />
                    </div>
                    <div className="cube flex items-center justify-center ite face2">
                        <img
                            className="w-[150px] h-[150px] max-sm:w-[70px] max-sm:h-[70px]"
                            src="/assets/img/nextjs-icon.png"
                            alt="nextjsicon"
                        />
                    </div>
                    <div className="cube flex items-center justify-center ite face3">
                        <img
                            className="w-[150px] h-[150px] max-sm:w-[70px] max-sm:h-[70px]"
                            src="/assets/img/htmlicon.png"
                            alt="htmlicon"
                        />
                    </div>
                    <div className="cube flex items-center justify-center ite face4">
                        <img
                            className="w-[150px] h-[150px] max-sm:w-[70px] max-sm:h-[70px]"
                            src="/assets/img/JSicon.png"
                            alt="jsicon"
                        />
                    </div>
                    <div className="cube flex items-center justify-center ite face5">
                        <img
                            className="w-[150px] h-[150px] max-sm:w-[70px] max-sm:h-[70px]"
                            src="/assets/img/React-icon.png"
                            alt="reacticon"
                        />
                    </div>
                    <div className="cube flex items-center justify-center ite face6">
                        <img
                            className="w-[150px] h-[150px] max-sm:w-[70px] max-sm:h-[70px]"
                            src="/assets/img/redux-icon.png"
                            alt="reduxicon"
                        />
                    </div>
                </div>
            </div>
            <div className="ball"></div>
        </div>
    );
};

export default Home;
