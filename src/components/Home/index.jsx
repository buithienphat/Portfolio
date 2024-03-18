import React, { forwardRef, useEffect, useState } from "react";
import "./HomeStyle.css";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

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

    document.addEventListener("mousemove", function (event) {
      mouseX = event.pageX;
      mouseY = event.pageY;
    });
  }, []);

  return (
    <div
      id="home"
      className="h-screen flex items-center justify-between select-none min-h-[600px] max-xl:flex-col max-xl:justify-center max-xl:gap-[200px] max-lg:gap-[200px] max-sm:gap-[100px]"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-xl:w-[100%]"
      >
        <p className="text-2xl text-[#9CA3AF]">Hello I am</p>

        <div className="text-content">
          <h1 className=" font-bold text-7xl uppercase max-sm:text-4xl">
            Bui Thien Phat
          </h1>
        </div>
        <TypeAnimation
          sequence={[
            "Software Engineer",
            1000,
            "Web Developer",
            1000,
            "",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{
            fontSize: "30px",
            display: "block",
            color: "#00ff85",
            textTransform: "uppercase",
            letterSpacing: "4px",
            marginTop: "28px",
          }}
          repeat={Infinity}
        />
        <a
          href="#contact"
          className="bg-[#14C25C] inline-flex items-center h-[50px] px-[30px] mt-7 rounded-xl uppercase tracking-tight font-semibold"
        >
          Contact me
        </a>
        <div className="mt-7 flex gap-5">
          <a
            href="https://www.facebook.com/bui.phat.98541/"
            className="flex w-8 h-8"
            target="_blank"
          >
            <img src="/assets/img/fbicon.svg" alt="Fb" />
          </a>
          <a
            href="https://github.com/buithienphat"
            className="flex w-8 h-8"
            target="_blank"
          >
            <img src="/assets/img/githubicon.svg" alt="Fb" />
          </a>
          <a
            href="https://www.linkedin.com/in/thien-phat/"
            className="flex w-8 h-8"
            target="_blank"
          >
            <img src="/assets/img/linkedinicon.svg" alt="Fb" />
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="stage w-[35%] h-[250px] top-[50%] max-sm:h-[70px] z-10"
      >
        <div className="cubespinner">
          <div className="cube flex items-center justify-center ite face1">
            <img
              className="w-[150px] h-[150px] max-sm:w-[70px] max-sm:h-[70px]"
              src="/assets/img/nodejs-svgrepo-com.png"
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
              src="/assets/img/mongo-svgrepo-com.png"
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
              src="/assets/img/htmlicon.png"
              alt="reduxicon"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
