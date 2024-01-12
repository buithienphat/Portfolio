import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project";

function App() {
    const [windowWidth, setWindowWidth] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);
    let resizeWindow = () => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
    };
    useEffect(() => {
        resizeWindow();
        window.addEventListener("resize", resizeWindow);
        return () => window.removeEventListener("resize", resizeWindow);
    }, []);

    return (
        <>
            <div className=".container mx-auto font-poppins pl-[135px] pr-[55px] bg-black text-white text-base relative max-md:pl-[100px] max-md:pr-[20px] max-sm:px-5">
                <div className="sky">
                    <div className="stars"></div>
                    <div className="stars2"></div>
                    <div className="stars3"></div>
                    <div className="stars4"></div>
                    <div className="stars5"></div>
                    <div className="shooting-stars z-0"></div>
                </div>
                <Navbar />
                <Home />
                <About />
                <Project />
                <Contact />
                <div className="sky">
                    <div className="stars"></div>
                    <div className="stars2"></div>
                    <div className="stars3"></div>
                    <div className="stars4"></div>
                    <div className="stars5"></div>
                </div>
            </div>
        </>
    );
}

export default App;
